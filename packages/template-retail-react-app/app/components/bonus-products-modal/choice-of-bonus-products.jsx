/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {useState} from 'react'

import {
    Button,
    Box,
    Stack,
    Image,
    HStack,
    Heading
} from '@salesforce/retail-react-app/app/components/shared/ui/index'

import {findImageGroupBy} from '@salesforce/retail-react-app/app/utils/image-groups-utils'
import {
    useProductSearch,
    useProducts,
    useShopperBasketsMutation
} from '@salesforce/commerce-sdk-react'
import SwatchGroup from '@salesforce/retail-react-app/app/components/swatch-group'
import Swatch from '@salesforce/retail-react-app/app/components/swatch-group/swatch'
import {useCurrentBasket} from '@salesforce/retail-react-app/app/hooks/use-current-basket'

import PropTypes from 'prop-types'

export const ChoiceOfBonusProductsRule = ({promotionId, bonusDiscountLineItemId}) => {
    const searchParams = {
        _refine: 'pmid=' + promotionId
    }
    const {data: productSearchResult} = useProductSearch(
        {
            parameters: {
                ...searchParams,
                refine: searchParams._refine
            }
        },
        {
            keepPreviousData: true
        }
    )

    const bonusProducts = productSearchResult?.hits?.map((hit) => {
        return {
            productId: hit.productId,
            productName: hit.productName
        }
    })
    const productIds = (bonusProducts || [])
        .map((bonusProduct) => bonusProduct.productId)
        .slice(0, 24)
        .join(',')

    const {data: products} = useProducts(
        {
            parameters: {
                ids: productIds,
                allImages: true
            }
        },
        {
            enabled: Boolean(productIds),
            select: (result) => {
                // Convert array into key/value object with key is the product id
                return result?.data?.reduce((result, item) => {
                    const key = item.id
                    result[key] = item
                    return result
                }, {})
            }
        }
    )
    return (
        <ListBonusProducts
            products={products}
            bonusProducts={bonusProducts}
            bonusDiscountLineItemId={bonusDiscountLineItemId}
        />
    )
}

export const ChoiceOfBonusProductsList = ({bonusProducts, bonusDiscountLineItemId}) => {
    const productIds = bonusProducts.map((p) => p.productId).join(',')
    const {data: products} = useProducts(
        {
            parameters: {
                ids: productIds,
                allImages: true
            }
        },
        {
            enabled: Boolean(productIds),
            select: (result) => {
                // Convert array into key/value object with key is the product id
                return result?.data?.reduce((result, item) => {
                    const key = item.id
                    result[key] = item
                    return result
                }, {})
            }
        }
    )

    return (
        <ListBonusProducts
            products={products}
            bonusProducts={bonusProducts}
            bonusDiscountLineItemId={bonusDiscountLineItemId}
        />
    )
}

export const ListBonusProducts = ({products, bonusProducts, bonusDiscountLineItemId}) => {
    const [selectedValuesMap, setSelectedValuesMap] = useState(new Map())
    const addItemToBasketMutation = useShopperBasketsMutation('addItemToBasket')
    const {data: basket} = useCurrentBasket()

    return (
        <Stack>
            {products &&
                bonusProducts.map((product) => {
                    const fullProduct = products[product.productId]
                    return (
                        fullProduct && (
                            <BonusProductView
                                key={product.productId}
                                product={fullProduct}
                                selectedValuesMap={selectedValuesMap}
                                setSelectedValuesMap={setSelectedValuesMap}
                            />
                        )
                    )
                })}
            <Button
                width="full"
                onClick={async () => {
                    const productItems = []
                    selectedValuesMap.forEach((variationAttributes, productId) => {
                        // Find the exact productId
                        const fullProduct = products[productId]
                        const bonusProductId = fullProduct.variants.find(
                            (variant) =>
                                variant.variationValues['color'] ===
                                    variationAttributes.get('color') &&
                                variant.variationValues['size'] === variationAttributes.get('size')
                        )?.productId
                        productItems.push({
                            productId: bonusProductId,
                            quantity: 1,
                            bonusDiscountLineItemId: bonusDiscountLineItemId
                        })
                    })
                    await addItemToBasketMutation.mutateAsync({
                        parameters: {basketId: basket.basketId},
                        body: productItems
                    })
                }}
            >
                Add to cart
            </Button>
        </Stack>
    )
}

export const BonusProductView = ({product, selectedValuesMap, setSelectedValuesMap}) => {
    const images = product.imageGroups
        ? findImageGroupBy(product.imageGroups, {
              viewType: 'large',
              selectedVariationAttributes: product.variationAttributes
          })
        : []
    const image = images?.images[0].link

    return (
        <HStack key={product.productId}>
            <Box>
                <Image src={image} alt="" boxSize="200px" objectFit="cover" />
            </Box>
            <Box>
                <Heading as="h3" size="md">
                    {product.name}
                </Heading>
                {(product.variationAttributes || []).map((variationAttribute) => {
                    const {id, name, values = []} = variationAttribute
                    return (
                        <SwatchGroup
                            key={id}
                            onChange={(_) => {
                                const newMap = new Map(selectedValuesMap)
                                const attributesMap = new Map(selectedValuesMap.get(product.id))
                                attributesMap.set(variationAttribute.id, _)
                                newMap.set(product.id, attributesMap)
                                setSelectedValuesMap(newMap)
                            }}
                            variant={id === 'color' ? 'circle' : 'square'}
                            value={selectedValuesMap?.get(product.id)?.get(variationAttribute.id)}
                            displayName={
                                variationAttribute.values.find(
                                    (v) => v.value === selectedValuesMap.get(variationAttribute.id)
                                )?.name
                            }
                            label={name}
                        >
                            {values.map(({href, name, image, value, orderable}) => (
                                <Swatch
                                    key={value}
                                    href={href}
                                    disabled={!orderable}
                                    value={value}
                                    name={name}
                                >
                                    {image ? (
                                        <Box
                                            height="100%"
                                            width="100%"
                                            minWidth="32px"
                                            backgroundRepeat="no-repeat"
                                            backgroundSize="cover"
                                            backgroundColor={name.toLowerCase()}
                                            backgroundImage={
                                                image
                                                    ? `url(${image.disBaseLink || image.link})`
                                                    : ''
                                            }
                                        />
                                    ) : (
                                        name
                                    )}
                                </Swatch>
                            ))}
                        </SwatchGroup>
                    )
                })}
            </Box>
        </HStack>
    )
}

ChoiceOfBonusProductsList.propTypes = {
    maxBonusItems: PropTypes.number,
    bonusProducts: PropTypes.array,
    bonusDiscountLineItemId: PropTypes.string
}

ChoiceOfBonusProductsRule.propTypes = {
    maxBonusItems: PropTypes.number,
    promotionId: PropTypes.string,
    bonusDiscountLineItemId: PropTypes.string
}

ListBonusProducts.propTypes = {
    products: PropTypes.object,
    bonusProducts: PropTypes.array,
    bonusDiscountLineItemId: PropTypes.string
}

BonusProductView.propTypes = {
    product: PropTypes.object,
    selectedValuesMap: PropTypes.map,
    setSelectedValuesMap: PropTypes.func
}

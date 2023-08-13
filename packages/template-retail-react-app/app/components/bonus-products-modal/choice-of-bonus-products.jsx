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
    Radio,
    RadioGroup,
    Stack,
    Checkbox,
    CheckboxGroup,
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

function renderRadio(bonusProducts) {
    return (
        <RadioGroup>
            {bonusProducts?.map((bonusProduct) => {
                return (
                    <Radio key={bonusProduct.productId} value={bonusProduct.productId}>
                        {bonusProduct.productName}
                    </Radio>
                )
            })}
        </RadioGroup>
    )
}

function renderCheckbox(bonusProducts) {
    return (
        <CheckboxGroup>
            {bonusProducts?.map((bonusProduct) => {
                return (
                    <Checkbox key={bonusProduct.productId} value={bonusProduct.productId}>
                        {bonusProduct.productName}
                    </Checkbox>
                )
            })}
        </CheckboxGroup>
    )
}

export const ChoiceOfBonusProductsRule = ({promotionId, maxBonusItems}) => {
    const searchParams = {
        _refine: 'pmid=' + promotionId
    }
    const {isLoading, data: productSearchResult} = useProductSearch(
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

    if (!isLoading) {
        const bonusProducts = productSearchResult?.hits?.map((hit) => {
            return {
                productId: hit.productId,
                productName: hit.productName
            }
        })
        return maxBonusItems === 1 ? renderRadio(bonusProducts) : renderCheckbox(bonusProducts)
    } else {
        return 'Loading ...'
    }
}

export const ChoiceOfBonusProductsList = ({bonusProducts, bonusDiscountLineItemId}) => {
    const addItemToBasketMutation = useShopperBasketsMutation('addItemToBasket')
    const {data: basket} = useCurrentBasket()
    const productIds = bonusProducts.map((p) => p.productId).join(',')
    const [selectedValuesMap, setSelectedValuesMap] = useState(new Map())
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
        <Stack>
            {products &&
                bonusProducts.map((product) => {
                    const fullProduct = products[product.productId]
                    return (
                        <BonusProductView
                            key={product.productId}
                            product={fullProduct}
                            selectedValuesMap={selectedValuesMap}
                            setSelectedValuesMap={setSelectedValuesMap}
                        />
                    )
                })}
            <Button
                width="full"
                onClick={async () => {
                    console.log(selectedValuesMap)

                    const productItems = []
                    selectedValuesMap.forEach((variationAttributes, productId) => {
                        console.log(variationAttributes.get('color'))
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
    const images = findImageGroupBy(product.imageGroups, {
        viewType: 'large',
        selectedVariationAttributes: product.variationAttributes
    })
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
                {product.variationAttributes.map((variationAttribute) => {
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
    promotionId: PropTypes.string
}

BonusProductView.propTypes = {
    product: PropTypes.object,
    selectedValuesMap: PropTypes.map,
    setSelectedValuesMap: PropTypes.func
}

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
import {useDerivedProduct} from '@salesforce/retail-react-app/app/hooks'
import {useProductSearch, useProducts} from '@salesforce/commerce-sdk-react'
import SwatchGroup from '@salesforce/retail-react-app/app/components/swatch-group'
import Swatch from '@salesforce/retail-react-app/app/components/swatch-group/swatch'

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

const ChoiceOfBonusProductsList = ({bonusProducts}) => {
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
        <Stack>
            {products &&
                bonusProducts.map((product) => {
                    const fullProduct = products[product.productId]
                    return <BonusProductView key={product.productId} product={fullProduct} />
                })}
            <Button width="full" onClick={() => {}}>
                Add to cart
            </Button>
        </Stack>
    )
}

export const BonusProductView = ({product}) => {
    const {variationAttributes} = useDerivedProduct(product, false)

    console.log(variationAttributes)

    const [selectedValuesMap, setSelectedValuesMap] = useState(new Map())

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
                    console.log(variationAttribute)
                    return (
                        <SwatchGroup
                            key={id}
                            onChange={(_) => {
                                const newMap = new Map(selectedValuesMap)
                                newMap.set(variationAttribute.id, _)
                                setSelectedValuesMap(newMap)
                            }}
                            variant={id === 'color' ? 'circle' : 'square'}
                            value={selectedValuesMap.get(variationAttribute.id)}
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
    bonusProducts: PropTypes.array
}

ChoiceOfBonusProductsRule.propTypes = {
    maxBonusItems: PropTypes.number,
    promotionId: PropTypes.string
}

BonusProductView.propTypes = {
    product: {
        name: PropTypes.string
    }
}

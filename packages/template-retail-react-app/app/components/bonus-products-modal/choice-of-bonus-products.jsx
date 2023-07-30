/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'

import {
    Box,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup
} from '@salesforce/retail-react-app/app/components/shared/ui/index'

import {useProductSearch} from '@salesforce/commerce-sdk-react'

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

export const ChoiceOfBonusProductsList = ({bonusProducts, maxBonusItems}) => {
    return maxBonusItems === 1 ? renderRadio(bonusProducts) : renderCheckbox(bonusProducts)
}

ChoiceOfBonusProductsList.propTypes = {
    maxBonusItems: PropTypes.number,
    bonusProducts: PropTypes.array
}

ChoiceOfBonusProductsRule.propTypes = {
    maxBonusItems: PropTypes.number,
    promotionId: PropTypes.string
}

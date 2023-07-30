/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'

import PropTypes from 'prop-types'

import {
    Button,
    ModalBody,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack
} from '@salesforce/retail-react-app/app/components/shared/ui/index'

import {
    ChoiceOfBonusProductsList,
    ChoiceOfBonusProductsRule
} from '@salesforce/retail-react-app/app/components/bonus-products-modal/choice-of-bonus-products'

const BonusProductsModal = ({isOpen, onClose, bonusDiscountLineItems}) => {
    if (!bonusDiscountLineItems) {
        return <></>
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Choice of Bonus Products</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack spacing="24px">
                        {bonusDiscountLineItems.map((discountLineItem) => {
                            return discountLineItem.promotionId &&
                                !discountLineItem?.bonusProducts ? (
                                <ChoiceOfBonusProductsRule
                                    maxBonusItems={discountLineItem.maxBonusItems}
                                    promotionId={discountLineItem.promotionId}
                                />
                            ) : (
                                <ChoiceOfBonusProductsList
                                    bonusProducts={discountLineItem.bonusProducts}
                                    maxBonusItems={discountLineItem.maxBonusItems}
                                />
                            )
                        })}
                        <Button width="full">Select bonus product(s)</Button>
                    </Stack>
                </ModalBody>

                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}

BonusProductsModal.propTypes = {
    isOpen: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    bonusDiscountLineItems: PropTypes.array
}

export default BonusProductsModal

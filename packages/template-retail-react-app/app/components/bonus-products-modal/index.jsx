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
    Stack,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup
} from '@salesforce/retail-react-app/app/components/shared/ui/index'

function renderRadio(bonusProducts) {
    return (
        <RadioGroup>
            {bonusProducts.map((bonusProduct) => {
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
            {bonusProducts.map((bonusProduct) => {
                return (
                    <Checkbox key={bonusProduct.productId} value={bonusProduct.productId}>
                        {bonusProduct.productName}
                    </Checkbox>
                )
            })}
        </CheckboxGroup>
    )
}

const BonusProductsModal = ({isOpen, onClose, bonusDiscountLineItems}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Choice of Bonus Products</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack spacing="24px">
                        {bonusDiscountLineItems?.map((discountLineItem) => {
                            return discountLineItem.maxBonusItems === 1
                                ? renderRadio(discountLineItem.bonusProducts)
                                : renderCheckbox(discountLineItem.bonusProducts)
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

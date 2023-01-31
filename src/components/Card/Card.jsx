import React, { useState } from "react";
import clsx from "clsx";

import { getWordEnding } from '../../utils';
import { QUANTTITY_MICE_NOT_VISIBLE, VISIBLE_HAPPY_CUSTOMER } from "./constant";

export const Card = (props) => {

    const [hovered, setHovered] = useState(false);

    const { name, taste, quantity, gift, weight, description, disabled, selected, onClick } = props;

    return (
        <div className={clsx("product", { selected, disabled, hovered })}>
            <div className="product__border">
                <div className="product__card"
                    onClick={!disabled ? () => { onClick(); setHovered(false) } : undefined}
                    onMouseLeave={selected ? () => setHovered(false) : undefined}
                    onMouseEnter={selected && !hovered ? () => setHovered(true) : undefined}
                >
                    <div className="product__text">
                        {(!selected || (selected && !hovered)) && 'Сказочное заморское яство'}

                        {selected && hovered && 'Котэ не одобряет?'}
                    </div>

                    <div className="product__title">{name}</div>

                    <div className="product__subtitle">{taste}</div>

                    <div className="product__quantity">
                        <div>
                            <span className="product__count">{quantity}</span>

                            {getWordEnding(quantity, [' порций', ' порции', ' порция'])}
                        </div>

                        <div>
                            <span className="product__count">{gift > QUANTTITY_MICE_NOT_VISIBLE && gift}</span>

                            {getWordEnding(gift, [' мышей', ' мыши', ' мышь'])} в подарок
                        </div>

                        {gift >= VISIBLE_HAPPY_CUSTOMER && <div>заказчик доволен</div>}
                    </div>

                    <div className="product__picture" />

                    <div className="product__circle">
                        <div className="product__weight">{weight}</div>
                        кг
                    </div>
                </div>
            </div>

            <div className="product__description">
                {!disabled && selected && description}

                {!disabled && !selected && <>
                    Чего сидишь? Порадуй котэ,&nbsp;

                    <span className="product__select" onClick={onClick}>купи</span>

                    <span className="product__dot">.</span>
                </>}

                {disabled && `Печалька, ${taste} закончился.`}
            </div>
        </div>
    );
}
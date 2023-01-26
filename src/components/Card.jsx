import React from "react";

function getMouse(number) {
    number %= 100;
    if (number >= 5 && number <= 20) {
        return 'мышей';
    }
    number %= 10;
    if (number === 1) {
        return 'мышь';
    }
    if (number >= 2 && number <= 4) {
        return 'мыши';
    }
    return 'мышей';
}

export const Card = (props) => {
    return (
        <div className="product">
            <div className="border">
                <div className="card" onClick={props.onClick}>
                    <div className="text">
                        Сказочное заморское яство
                    </div>

                    <div className="title">
                        {props.name}
                    </div>

                    <div className="subtitle">
                        {props.taste}
                    </div>

                    <div className="quantity">
                        <div>
                            <span className="count">{props.quantity}</span> порций
                        </div>

                        <div>
                            <span className="count">{props.gift > 1 && props.gift}</span> {getMouse(props.gift)} в подарок
                        </div>
                        {props.gift >= 5 && <div>заказчик доволен</div>}
                    </div>
                    <div className="picture"></div>
                    <div className="circle">
                        <div className="weight">{props.weight}</div>
                        <div>кг</div>
                    </div>
                </div>
            </div>
            <div className="description">Чего сидишь? Порадуй котэ,&nbsp;
                <span className="sale" onClick={props.onClick}>купи</span>
                <span className="dot">.</span>
            </div>
        </div>
    );
}
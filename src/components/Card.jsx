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
    const isActive = props.isActive ? 'selected' : '';
    const isAvailable = !props.isAvailable ? 'disabled' : '';

    return (
        <div className="product">
            <div className={`border ${isActive} ${isAvailable}`}>
                <div className="card" onClick={props.isAvailable ? props.onClick : () => {}}>
                    <div className={!props.isAvailable ? 'disabled-text' : ''}>
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
                    </div>

                    <div className={`picture ${!props.isAvailable ? 'disabled-text' : ''}`}></div>

                    <div className={`circle ${isActive} ${isAvailable}`}>
                        <div className="weight">{props.weight}</div>

                        <div>кг</div>
                    </div>
                </div>
            </div>
            {props.isAvailable ?
                (props.isActive ?
                    (<div className="description">{props.description}</div>) :
                    (<div className="description">Чего сидишь? Порадуй котэ,&nbsp;
                        <span className="sale" onClick={props.onClick}>купи</span>
                        <span className="dot">.</span>
                    </div>)) :
                (<div className="description disabled-description">Печалька, {props.taste} закончился.</div>)
            }
        </div>
    );
}
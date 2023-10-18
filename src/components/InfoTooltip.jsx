import React from "react";
import UnionSucsess from './../images/UnionSucsess.svg';
import UnionError from './../images/UnionError.svg'


export default function InfoTooltip(props) {
    return (

        <div className={`popup  popup_background-color-opacity_05 popup_opened`}>
            <div className="popup__container">
                <button className="popup__close-btn opacity" type="button" aria-label="закрыть окно" onClick={props.onClose}></button>
                <img className="popup__request-status" src={props.isSuccess ? UnionSucsess : UnionError} />
                <h2 className="popup__heading">{props.headingText}</h2>
            </div>
        </div>


    )
}
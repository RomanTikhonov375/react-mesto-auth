import React from "react";
import unionSucsess from './../images/UnionSucsess.svg';
import unionError from './../images/UnionError.svg'


export default function InfoTooltip(props) {
    return (

        <div className={`popup  popup_background-color-opacity_05 popup_opened`}>
            <div className="popup__container">
                <button className="popup__close-btn opacity" type="button" aria-label="закрыть окно" onClick={props.onClose}></button>
                <img className="popup__request-status" src={props.isSuccess ? unionSucsess : unionError} />
                <h2 className="popup__heading">{props.headingText}</h2>
            </div>
        </div>


    )
}
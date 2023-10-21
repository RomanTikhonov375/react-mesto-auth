import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.jsx";
import { CurrentUserContext } from '../../src/context/CurrentUserContext';
import { useForm } from 'react-hook-form'

export default function EditProfilePopup(props) {

    const currentUser = useContext(CurrentUserContext);

    const {register, handleSubmit, formState:{ errors, isDirty, isValid }, clearErrors,reset, setValue} = useForm({mode: 'onChange'});

    const nameRegister = register('name', {
      required: {
        value: true,
        message: 'Обязательное поле'
      },
      minLength: {
        value: 2,
        message: 'Минимальное число символов : 2'
      },
      maxLength: {
        value: 40,
        message: 'Максимальное число символов: 40'
      }
    })

    const aboutRegister = register('about', {
        required: {
            value: true,
            message: 'Обязательное поле'
          },
          minLength: {
            value: 2,
            message: 'Минимальное число символов : 2'
          },
          maxLength: {
            value: 40,
            message: 'Максимальное число символов: 200'
          }
    })


    useEffect(() => {
        reset()
        setValue("name", currentUser.name)
        setValue("about", currentUser.about)
    }, [currentUser, props.isOpen]);


    function handleSubmitForm(data) {
        props.onUpdateUser({
            name: data.name,
            about: data.about
        });
    }

    function handleClose() {
        props.onClose();
        clearErrors(['name','about'])
    }

 

    return (
        <PopupWithForm
            buttonText={!props.isLoading ? 'Сохранить' : 'Сохранение...'}
            isDirty={isDirty}
            isValid={isValid}
            onSubmit={handleSubmit(handleSubmitForm)}
            title="Редактировать профиль"
            name="edit-profile"
            isOpen={props.isOpen}
            onClose={handleClose}
        >
            <input type="text" className="popup__input popup__input_type_name" id="user-name" name="name"
                placeholder="Введите ваше имя" {...nameRegister} />
            <span id="card-link-error" className={`popup__input-error ${errors.name ? 'popup__input-error_active' : ''}`}>{errors.name ? errors.name.message: ''}</span>
            <input type="text" className="popup__input popup__input_type_career" id="user-career" name="about"
                placeholder="Введите ваше призвание" {...aboutRegister} />
            <span id="card-link-error" className={`popup__input-error ${errors.about ? 'popup__input-error_active' : ''}`}>{errors.about ? errors.about.message: ''}</span>
        </PopupWithForm>
    )
}
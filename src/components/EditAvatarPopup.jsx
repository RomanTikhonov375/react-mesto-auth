import React from "react"
import PopupWithForm from "./PopupWithForm.jsx"
import { useForm } from 'react-hook-form'


export default function EditAvatarPopup(props) {
        
        const {register, handleSubmit, formState:{ errors, isDirty, isValid }, clearErrors,reset } = useForm({mode: 'onChange'});
       
      
        const linkRegister = register('link', {
            pattern: {
              value: /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
              message: 'Тут должна быть ссылка'
            },
            required: {
              value: true,
              message: 'Обязательное поле'
            }
          })


          const handleSubmitForm = (data) => {
            props.onUpdateAvatar(data.link);
            reset();
            }
            
            function handleClose() {
                props.onClose();
                clearErrors('link')
            }
        
    return (
        <PopupWithForm
            isDirty={isDirty}
            isValid={isValid}
            buttonText={!props.isLoading ? 'Сохранить' : 'Сохранение...'}
            onSubmit={handleSubmit(handleSubmitForm)}
            isOpen={props.isOpen}
            onClose={handleClose}
            title="Обновить аватар"
            name="edit-avatar"
            >
            <input type="url" className="popup__input popup__input_type_link" id="card-avatar-link" name="link"
                placeholder="Ссылка на картинку" {...linkRegister}/>
            <span id="card-link-error" className={`popup__input-error ${errors.link ? 'popup__input-error_active' : ''}`}>{errors.link ? errors.link.message: ''}</span>
        </PopupWithForm>
    )
}
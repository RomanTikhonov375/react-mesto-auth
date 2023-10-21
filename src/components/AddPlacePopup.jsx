import PopupWithForm from "./PopupWithForm.jsx";
import { useForm } from 'react-hook-form'

export default function AddPlacePopup(props) {
 
    const {register, handleSubmit, formState:{ errors, isDirty, isValid }, clearErrors,reset,  } = useForm({mode: 'onChange'});

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
        value: 30,
        message: 'Максимальное число символов: 30'
      }
    })

    const linkRegister = register('link', {
      required: {
        value: true,
        message: 'Обязательное поле'
      },
      pattern: {
        value: /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        message: 'Тут должна быть ссылка'
      },
      
    })
   
    const handleSubmitForm = (data) => {
        props.onAddPlace ({  
            name: data.name,
            link: data.link
        }
        )
        reset({'link' : '', 'name' : ''})
    }



   function handleClose() {
    clearErrors(['name','link'])
    props.onClose();
   
   }
    return (
        <PopupWithForm
        isDirty={isDirty}
        isValid={isValid}
        onSubmit={handleSubmit(handleSubmitForm)}
        title="Новое место"
        name="edit-card"
        buttonText={!props.isLoading ? 'Создать' : 'Создание...'}
        isOpen={props.isOpen}
        onClose={handleClose}>
        <input type="text" className="popup__input popup__input_type_place" id="card-place" 
          placeholder="Название" {...nameRegister} />
        <span id="card-place-error" className={`popup__input-error ${errors.name ? 'popup__input-error_active' : ''}`}>{errors.name ? errors.name.message: ''}</span>
        <input type="text" className="popup__input popup__input_type_link" id="card-link" 
          placeholder="Ссылка на картинку" {...linkRegister} />
        <span id="card-link-error" className={`popup__input-error ${errors.link ? 'popup__input-error_active' : ''}`}>{errors.link ? errors.link.message: ''}</span>
      </PopupWithForm>
    );

}
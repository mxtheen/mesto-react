import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css'
import React from 'react';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddProfileOpen] = React.useState(false)
  const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = React.useState(false)
  const [isDeleteConfirmPopupOpen, setDeleteConfirmPopup] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditProfileClick(){
    setEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick(){
    setAddProfileOpen(true)
  }
  function handleEditAvatarClick(){
    setEditAvatarPopupOpen(true)
  }
  function handleCardClick (card){
    setSelectedCard(card)
  }
  function handleConfirmDeleteCard(){
    setDeleteConfirmPopup(true)
  }
  function closeAllPopups(){
    setEditProfilePopupOpen(false)
    setAddProfileOpen(false)
    setEditAvatarPopupOpen(false)
    setSelectedCard(null)
    setDeleteConfirmPopup(false)
  }
  return (
    <>
      <Header/>
      <Main
      onEditProfile = {handleEditProfileClick}
      onAddPlace = {handleAddPlaceClick}
      onEditAvatar = {handleEditAvatarClick}
      onCardClick={handleCardClick}
      onCardDelete={handleConfirmDeleteCard}
      />
      <Footer/>
      <PopupWithForm name='edit' title='Редактировать профиль' isOpen = {isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input id="input-name" className="popup__input popup__input_type_name" placeholder="Имя" type="text" name="name"
            required minLength="2" maxLength="40" />
          <span id="input-name-error" className="popup__error"></span>
          <input id="input-job" className="popup__input popup__input_type_job" placeholder="Род деятельности" type="text"
            name="about" required minLength="2" maxLength="200" />
          <span id="input-job-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm name='add' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonContent="Создать">
          <input id="input-title" className="popup__input popup__input_type_title" placeholder="Название" type="text"
            name="title" required minLength="2" maxLength="30" />
          <span id="input-title-error" className="popup__error"></span>
          <input id="input-link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" type="url"
            name="link" required />
          <span id="input-link-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm name='update-avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <input id="input-avatar" className="popup__input popup__input_type_link" placeholder="Ссылка на аватар" type="url"
              name="avatar" required />
            <span id="input-avatar-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm name='confirmation'title ='Вы уверены?' isOpen = {isDeleteConfirmPopupOpen} onClose={closeAllPopups} buttonContent="Да"></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </>
  );
}

export default App;

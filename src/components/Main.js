import addImage from "../images/vector_plus__image.svg"
import React from "react";
import apiInit from "../utils/apiInit.js";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("")
  const [userDescription, setUserDescription] = React.useState("")
  const [userAvatar, setUserAvatar] = React.useState("")
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([
      apiInit.getInitialCards(),
      apiInit.getUserInfo()
    ]).then(([data, user]) => {
      setCards(data)
      setUserName(user.name)
      setUserDescription(user.about)
      setUserAvatar(user.avatar)
    }).catch(err => {
      console.log("При получении данных с сервера возникла ошибка:", err)
    })
  }, [])
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button className="profile__avatar-button" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          </button>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__title">{userName}</h1>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
          <img className="profile__add-image" src={addImage}
            alt="Добавить изображение" />
        </button>
      </section>
      <section className="elements" aria-label="Блок с изображениями">
        {cards.map((card) => (
          <Card name={card.name} link={card.link} likeLength={card.likes.length} key={card._id} onCardClick={props.onCardClick} onCardDelete={props.onCardDelete} card={card} >
          </Card>
        ))}
      </section>
    </main>
  );
}

export default Main;

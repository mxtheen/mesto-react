function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  function openDeleteConfirmPopup() {
    props.onCardDelete()
  }
  return (
    <article className="element">
      <button type="button" className="element__remove-button" onClick={openDeleteConfirmPopup}></button>
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="element__caption">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className='element__like-button'></button>
          <p className="element__like-counter">{props.card.likeLength}</p>
        </div>
      </div>
    </article>
  )
}
export default Card

import React, { useState } from "react";
import "./postCard.css";

const PostCard = ({ card, addToFavorite, deleteCard, editCard }) => {
  const [menu, setMenu] = useState(false);
  const [favCard, setFavCard] = useState(card.favorite);

  const [isEdit, setIsEdit] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const changeCart = () => {
    editCard({ id: card.id, title: inputTitle, description: inputDescription });
    setIsEdit(false);
    setInputTitle("");
    setInputDescription("");
  };

  const changeFav = () => {
    setFavCard(card.favorite);
  };

  return (
    <div className={favCard ? "favorite-card" : "post-card"}>
      <div className="title">{card.title}</div>
      <div className="description">{card.description}</div>
      <button onClick={() => setMenu(!menu)}>МЕНЮ</button>
      <div className={menu ? "card-menu" : "hidden"}>
        <button onClick={() => setIsEdit(!isEdit)}>Редактировать</button>
        <button onClick={() => deleteCard(card.id)}>Удалить</button>
        <button onClick={() => (addToFavorite(card.id), changeFav())}>
          Избранное
        </button>
      </div>
      {isEdit && (
        <input
          type="text"
          placeholder="Title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
      )}
      {isEdit && (
        <input
          type="text"
          placeholder="Description"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
        />
      )}
      {isEdit && <button onClick={changeCart}>Сохранить</button>}
    </div>
  );
};

export default PostCard;

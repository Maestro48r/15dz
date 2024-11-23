import React, { useState } from "react";
import PostCard from "../PostCard/PostCard";
import "./main.css";

const Main = () => {
  let cardsArr = [
    {
      id: 1,
      title: "title1",
      favorite: false,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet integer parturient tempor; eleifend habitasse purus condimentum proin. Dui nibh habitasse sociosqu magnis maecenas proin. Finibus arcu sociosqu nam pretium sem tincidunt nec. Magna dignissim nibh posuere penatibus dignissim sit; nostra per. Sem magnis placerat sociosqu leo vitae. Laoreet venenatis tellus, lobortis vitae hac sit. Augue rutrum nullam ut vivamus ullamcorper. Quis aliquam magnis est, augue gravida amet etiam.",
    },
    {
      id: 2,
      title: "title2",
      favorite: false,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet integer parturient tempor; eleifend habitasse purus condimentum proin. Dui nibh habitasse sociosqu magnis maecenas proin. Finibus arcu sociosqu nam pretium sem tincidunt nec. Magna dignissim nibh posuere penatibus dignissim sit; nostra per. Sem magnis placerat sociosqu leo vitae. Laoreet venenatis tellus, lobortis vitae hac sit. Augue rutrum nullam ut vivamus ullamcorper. Quis aliquam magnis est, augue gravida amet etiam.",
    },
    {
      id: 3,
      title: "title3",
      favorite: false,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet integer parturient tempor; eleifend habitasse purus condimentum proin. Dui nibh habitasse sociosqu magnis maecenas proin. Finibus arcu sociosqu nam pretium sem tincidunt nec. Magna dignissim nibh posuere penatibus dignissim sit; nostra per. Sem magnis placerat sociosqu leo vitae. Laoreet venenatis tellus, lobortis vitae hac sit. Augue rutrum nullam ut vivamus ullamcorper. Quis aliquam magnis est, augue gravida amet etiam.",
    },
    {
      id: 4,
      title: "title4",
      favorite: false,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet integer parturient tempor; eleifend habitasse purus condimentum proin. Dui nibh habitasse sociosqu magnis maecenas proin. Finibus arcu sociosqu nam pretium sem tincidunt nec. Magna dignissim nibh posuere penatibus dignissim sit; nostra per. Sem magnis placerat sociosqu leo vitae. Laoreet venenatis tellus, lobortis vitae hac sit. Augue rutrum nullam ut vivamus ullamcorper. Quis aliquam magnis est, augue gravida amet etiam.",
    },
    {
      id: 5,
      title: "title5",
      favorite: false,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet integer parturient tempor; eleifend habitasse purus condimentum proin. Dui nibh habitasse sociosqu magnis maecenas proin. Finibus arcu sociosqu nam pretium sem tincidunt nec. Magna dignissim nibh posuere penatibus dignissim sit; nostra per. Sem magnis placerat sociosqu leo vitae. Laoreet venenatis tellus, lobortis vitae hac sit. Augue rutrum nullam ut vivamus ullamcorper. Quis aliquam magnis est, augue gravida amet etiam.",
    },
    {
      id: 6,
      title: "title6",
      favorite: false,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet integer parturient tempor; eleifend habitasse purus condimentum proin. Dui nibh habitasse sociosqu magnis maecenas proin. Finibus arcu sociosqu nam pretium sem tincidunt nec. Magna dignissim nibh posuere penatibus dignissim sit; nostra per. Sem magnis placerat sociosqu leo vitae. Laoreet venenatis tellus, lobortis vitae hac sit. Augue rutrum nullam ut vivamus ullamcorper. Quis aliquam magnis est, augue gravida amet etiam.",
    },
    {
      id: 7,
      title: "title7",
      favorite: false,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet integer parturient tempor; eleifend habitasse purus condimentum proin. Dui nibh habitasse sociosqu magnis maecenas proin. Finibus arcu sociosqu nam pretium sem tincidunt nec. Magna dignissim nibh posuere penatibus dignissim sit; nostra per. Sem magnis placerat sociosqu leo vitae. Laoreet venenatis tellus, lobortis vitae hac sit. Augue rutrum nullam ut vivamus ullamcorper. Quis aliquam magnis est, augue gravida amet etiam.",
    },
  ];

  const [cards, setCards] = useState(cardsArr);

  const addToFavorite = (id) => {
    // eslint-disable-next-line array-callback-return
    cards.map((card) => {
      if (card.id === id) {
        card.favorite = !card.favorite;
      }
    });
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const editCard = (card) => {
    cards.map((item) => {
      if (item.id === card.id) {
        item.title = card.title;
        item.description = card.description;
      }
      return item;
    });
  };

  return (
    <div className="card-wrapper">
      {cards.map((card) => (
        <PostCard
          key={card.id}
          card={card}
          addToFavorite={addToFavorite}
          deleteCard={deleteCard}
          editCard={editCard}
        />
      ))}
      ,
    </div>
  );
};

export default Main;

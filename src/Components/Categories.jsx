import { React, useState } from "react";

let Categories = () => {
  const [activeIndex, setActiveIndex] = useState();
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              onClick={() => {
                setActiveIndex(i);
              }}
              className={activeIndex === i ? "active" : ""}
              key={i}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

import Categories from "./Components/Categories";
import Header from "./Components/Header";
import PizzaBlock from "./Components/PizzaBlock";
import Preloader from "./Components/Preloader/Preloader";
import Sort from "./Components/Sort";
import "./scss/app.scss";
import { useEffect, useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState(0);

  useEffect(() => {
    fetch("https://6536d718bb226bb85dd2ac29.mockapi.io/items")
      .then((res) => res.json())
      .then((res) => setPizzas(res));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas ? (
              pizzas.map((item) => {
                return (
                  <PizzaBlock
                    key={item.id}
                    title={item.title}
                    types={item.types}
                    sizes={item.sizes}
                    price={item.price}
                    category={item.category}
                    rating={item.rating}
                    img={item.imageUrl}
                  />
                );
              })
            ) : (
              <Preloader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

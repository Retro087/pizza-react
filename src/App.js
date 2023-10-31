import Categories from "./Components/Categories";
import Header from "./Components/Header";
import PizzaBlock from "./Components/PizzaBlock";
import Skeleton from "./Components/PizzaBlock/Skeleton";
import Sort from "./Components/Sort";
import "./scss/app.scss";
import { useEffect, useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6536d718bb226bb85dd2ac29.mockapi.io/items")
      .then((res) => res.json())
      .then((res) => {
        setPizzas(res);
        setLoading(false);
      });
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
            {isLoading
              ? [...new Array(6)].map((item, i) => <Skeleton key={i} />)
              : pizzas.map((item) => (
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
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

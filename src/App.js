import Carousel, { CarouselItem } from "./components/carousel";
import "./App.css";
import { Products } from "./components/products";
import contents from "./content";
function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem>ITEM 1</CarouselItem>
        <CarouselItem>ITEM 2</CarouselItem>
        <CarouselItem>ITEM 3</CarouselItem>
        <CarouselItem>ITEM 4</CarouselItem>
        <CarouselItem>ITEM 5</CarouselItem>
        <CarouselItem>ITEM 6</CarouselItem>
        <CarouselItem>ITEM 7</CarouselItem>
      </Carousel>
      <div className="productContainer">
        {contents.map((contents) => (
          <Products
            key={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
            totalSales={contents.totalSales}
            timeLeft={contents.timeLeft}
            rating={contents.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

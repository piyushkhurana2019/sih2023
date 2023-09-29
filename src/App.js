import Carousel, { CarouselItem } from "./components/carousel";
import "./App.css";
import { displayProduct } from "./components/products";
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
      {displayProduct("ELECTRONICS")}
    </div>    
  );
}

export default App;

import Carousel, { CarouselItem } from "./components/carousel";
import "./App.css";
import { ProductCategory, Products } from "./components/products";
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
      <ProductCategory>
        
        {contents.map((contents) => {if(contents.category === 'ELECTRONICS') return (
          <Products
            category = {contents.category}
            key={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
            totalSales={contents.totalSales}
            timeLeft={contents.timeLeft}
            rating={contents.rating}
          />
        )
        else return null;
        })}
      </ProductCategory>
    </div>
    
  );
}

export default App;

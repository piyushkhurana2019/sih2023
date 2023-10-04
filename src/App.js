import Carousel, { CarouselItem } from "./components/carousel";
import "./App.css";
import { ProductCategory, Products } from "./components/products";
import contents from "./content";
import Navbar from "./components/navbar";
import Title from "./components/title";

function App() {

  return (
    <div className="App">
      <Navbar />
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
        <div className="container1">
          <Title />
        <div className="inside-container">
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
        </div>
        </div>
      
        <div className="container1">  
        <div className="title">
              <h1>Furnitures</h1>
          </div>
          <div className="inside-container">

        {contents.map((contents) => {if(contents.category === 'Furniture') return (
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
                  </div>
        </div>
      </ProductCategory>
    </div>
    
  );
}

export default App;

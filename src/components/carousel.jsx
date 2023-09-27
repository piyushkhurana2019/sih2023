import '../App.css'

export default function Carousel(){
    return(
        <div id="carouselExampleControls" class="carousel slide my-1" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item">
                <img class="img-fluid w-100"
                    src="https://rukminim1.flixcart.com/flap/3376/560/image/c984b5508dd7784a.jpg?q=50"
                    alt="Second slide" />
            </div>
            <div class="carousel-item">
                <img class="img-fluid w-100"
                    src="https://rukminim1.flixcart.com/flap/3376/560/image/869463be68567c24.jpg?q=50"
                    alt="Third slide" />
            </div>
            <div class="carousel-item active">
                <img class="img-fluid w-100"
                    src="https://rukminim1.flixcart.com/flap/1688/280/image/56b20fa729139bde.jpg?q=50"
                    alt="First slide" />
            </div>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href=" #carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    );
}
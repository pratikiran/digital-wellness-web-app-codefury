import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div style={{backgroundImage: 'url("./five.jpg")', minHeight: '100vh'}}>
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <input type="text" placeholder="Search.." />
            </div>

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./one.jpeg" className="d-block w-100" alt="First slide" height="500px" width="300px" />
                    </div>
                    <div className="carousel-item">
                        <img src="./two.jpeg" className="d-block w-100" alt="Second slide" height="500px" width="300px" />
                    </div>
                    <div className="carousel-item">
                        <img src="./four.jpg" className="d-block w-100" alt="Third slide" height="500px" width="300px" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="para"></div>
        </div>
    );
}

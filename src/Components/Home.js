const Home = () => {
    return (
    <>
    <body>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.slidesalad.com/wp-content/uploads/2021/06/Machine-Learning-PowerPoint-Templates-Infographics-Diagrams.jpg" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Machine Learning</h5>
              <p>Now its time to master the Machine Leaning</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/e/t/ethical_hacking_it_powerpoint_presentation_slides_slide01.jpg" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Ethical Hacking</h5>
              <p>Hack the systems</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://s3.amazonaws.com/creativetim_bucket/products/401/original/opt_mk_flutter_thumbnail.jpg?1607615978" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Flutter Begineers to Advanced level </h5>
              <p>Now its time to develop an app</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://www.termasmedia.com/images/java/mengenal-dan-memahami-program-applet-java.png" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Begineers to Advanced level </h5>
              <p>Grab the Placements</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>

      <h1 style={{ textAlign: "center" }}>COURSES</h1>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYr9uA7hW-6zMpzX0Vsxccsjj3nB-lu_nf1Q&usqp=CAU"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">DSA with Programming</h5>
                <p class="card-text">
                DSA can help you write code that runs faster and uses less memory and problem-solving skills by break down problems into smaller.
                </p>
                <a href="#" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPW4EbokwFREOhxe8vHl_oKCaVn9Qcj3zH-g&usqp=CAU"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Competative Coding</h5>
                <p class="card-text">
                Competitive programming can help you improve your problem-solving skills.
                </p>
                <a href="#" class="btn btn-primary">
                 Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://media.slidesgo.com/storage/7277576/web-project-proposal1622630306.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Web development</h5>
                <p class="card-text">
                Web development is the process of creating websites and web applications.
                </p>
                <a href="#" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3OE3ZmZR1HPUdO0K8cvvn-7jo9WofGZKIMarBxU5gDt4JEjra5CCfbbM3cuX51MIBHc&usqp=CAU"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">App development</h5>
                <p class="card-text">
                App development is the process of creating software applications for mobile devices
                </p>
                <a href="#" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </body>
    </>
    );
  };

  export default Home;
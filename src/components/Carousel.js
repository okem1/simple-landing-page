import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
function Carousel (){
    return(

// <!-- Carousel -->
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  {/* <!-- The slideshow/carousel --> */}
  <div class="carousel-inner">
    <div class="carousel-item active background1">
        <div className='row'>
            <div className='col-md-12 d-flex align-items-center h-600'>
               <div className='px-5'>
                <h1 className='planning-text'>
                    PLANNING FOR<br/> THE FUTURE
                </h1>
                <p className='text-gray p-0 m-0 font-bold'>Lorem Ipsum is simply dummy text of the printing</p>
                <p  className='text-gray p-0 m-0 font-bold'>Lorem Ipsum is simply dummy text of the printing</p>
                <button className='read-more-btn'>READ MORE <i class="bi bi-caret-right"></i></button>
                </div>
            </div> 
        </div>
    </div>
    <div class="carousel-item background2">
    <div className='row'>
            <div className='col-md-12 d-flex align-items-center h-600'>
               <div className='px-5'>
                <h1 className='planning-text'>
                    PLANNING FOR<br/> THE FUTURE
                </h1>
                <p className='text-gray p-0 m-0 font-bold'>Lorem Ipsum is simply dummy text of the printing</p>
                <p  className='text-gray p-0 m-0 font-bold'>Lorem Ipsum is simply dummy text of the printing</p>
                <button className='read-more-btn'>READ MORE <i class="bi bi-caret-right"></i></button>
                </div>
            </div> 
        </div>
    </div>
    <div class="carousel-item background3">
    <div className='row'>
            <div className='col-md-12 d-flex align-items-center h-600'>
               <div className='px-5'>
                <h1 className='planning-text'>
                    PLANNING FOR<br/> THE FUTURE
                </h1>
                <p className='text-gray p-0 m-0 font-bold'>Lorem Ipsum is simply dummy text of the printing</p>
                <p  className='text-gray p-0 m-0 font-bold'>Lorem Ipsum is simply dummy text of the printing</p>
                <button className='read-more-btn'>READ MORE <i class="bi bi-caret-right"></i></button>
                </div>
            </div> 
        </div>
    </div>
  </div>
  
  {/* <!-- Left and right controls/icons --> */}
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button> */}
</div>

  )
}
export default Carousel
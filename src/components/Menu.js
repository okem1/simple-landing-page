import logo from '../assets/images/logo.png'
function Menu() {
    return (
      <div className=' container-fluid menu-height px-5 '>
        <div className="row">
<div className="col-md-4">
    <img src={logo} alt="logo"/>
</div>
<div className="col-md-8">
<ul className='d-flex justify-content-end'>
    <li className='menu-item'>ABOUT</li>
    <li className='menu-item'>OUR PROCESS</li>
    <li className='menu-item'>SEVICES</li>
    <li className='menu-item'>PEOPLE</li>
    <li className='menu-item'>TESTIMONIAL</li>
    <li className='menu-item'>CONTACT</li>
</ul>
</div>  
  </div>
      </div>
  
      
            
          
        
    
    );
  }
  
  export default Menu;
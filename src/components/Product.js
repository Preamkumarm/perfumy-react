//Product Component

import one from "./assests/images/one.jpg";
import three from "./assests/images/three.jpg";
import two from "./assests/images/two.jpg";

function Products(){
    return(<div class="products">
   
    <div class="box">
        
                <img src={one} alt="one"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
    </div>
          
    
    <div class="box">
        <img src={three} alt="villain"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
    </div>
    <div class="box">
        <img src={two} alt="Designs Club"></img>
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
    </div>
  
    
    
  </div>)
  }

  export default Products
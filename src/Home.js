import React from "react";
import "./Home.css";
import banner from "./Assets/banner.jpg";
import Product from "./Product";
import im1 from "./Assets/productAssets/1.jpeg";
import im2 from "./Assets/productAssets/2.jpeg";
import im3 from "./Assets/productAssets/3.jpeg";
import im4 from "./Assets/productAssets/4.jpeg";
import im5 from "./Assets/productAssets/5.jpeg";
import im6 from "./Assets/productAssets/6.jpeg";


const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__imge" src={banner} alt="" />
        <div className="home__row">
          <Product  title='Sangam - Elegant shades of Pink and classy look of silk sarees make it a preferred choice for wearing at formal occasions. '
          price={1499}
          image={im1}
          rating={4} />
          <Product  title='Moon Silks - Elegant shades of Pink and classy look of silk sarees make it a preferred choice for wearing at formal occasions. '
          price={1499}
          image={im6}
          rating={5}/>
        </div>
        <div className="home__row">
          <Product  title='Honey Silks - Elegant shades of Pink and classy look of silk sarees make it a preferred choice for wearing at formal occasions. '
          price={999}
          image={im2}
          rating={5}/>
          <Product  title='Moon Silks - Elegant shades of Pink and classy look of silk sarees make it a preferred choice for wearing at formal occasions. '
          price={3999}
          image={im3}
          rating={4}/>
          <Product  title='Sangam - Elegant shades of Pink and classy look of silk sarees make it a preferred choice for wearing at formal occasions. '
          price={1499}
          image={im4}
          rating={5}/>
        </div>
        <div className="home__row">
          <Product 
          title='Honey Silks - Elegant shades of Pink and classy look of silk sarees make it a preferred choice for wearing at formal occasions. '
          price={1499}
          image={im5}
          rating={5}/>
          <Product  title='Moon Silks - Elegant shades of Pink and classy look of silk sarees make it a preferred choice for wearing at formal occasions. '
          price={1499}
          image={im6}
          rating={5}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

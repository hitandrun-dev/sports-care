import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Store() {

const products = [

{
category:"Equipment",
name:"Pro-Grip Basketball",
price:"$59.99",
image:"/basketball.png",
tag:"Best Seller"
},

{
category:"Apparel",
name:"Academy Game Jersey",
price:"$34.99",
image:"/jersey.png",
tag:"Official"
},

{
category:"Footwear",
name:"Flight Elite Shoes",
price:"$129.99",
image:"/shoes.png",
tag:"New Arrival"
}

];

return (

<>

{/* HERO */}

<section className="store-hero">

<h1>Academy <span>Store</span></h1>

<p>
Premium gear and official apparel to help you perform your best.
</p>

<div className="store-filters">

<button className="active">All</button>
<button>Apparel</button>
<button>Footwear</button>
<button>Equipment</button>
<button>Accessories</button>

</div>

</section>

{/* PRODUCTS */}

<section className="products-grid">

{products.map((p,i)=>(

<motion.div
key={i}
className="product-card"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.2}}
>

<span className="product-tag">{p.tag}</span>

<img src={p.image} alt={p.name}/>

<div className="product-info">

<span className="product-category">{p.category}</span>

<h3>{p.name}</h3>

<div className="rating">
⭐ ⭐ ⭐ ⭐ ⭐ <span>(24)</span>
</div>

<div className="price">{p.price}</div>

</div>

</motion.div>

))}

</section>



</>

)

}

export default Store;
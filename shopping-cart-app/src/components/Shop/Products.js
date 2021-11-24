import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 100,
    title: "For whom the Bell Tolls",
    description: "This book is written by Ernest Hemingway",
  },
  {
    id: "p2",
    price: 120,
    title: "Man and Superman",
    description: "This book is written by G. B. Shaw",
  },
  {
    id: "p3",
    price: 140,
    title: "Kanterbary Tells",
    description: "This book is written by Geofray Chosar",
  },
  {
    id: "p4",
    price: 160,
    title: "Paraja",
    description: "This book is written by Gopinath Mohanty",
  },
  {
    id: "p5",
    price: 200,
    title: "She Walk, She Leads",
    description: "This book is written by Gunjan Jain",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

import Product from "./Product";
const productData=[
  {
    img:"/product-1.jpg",
    name:"Organic Bartlett Pear",
    price:"Rs. 35.90",
  },
  {
    img:"/product-2.jpg",
    name:"Organic Strawberries, 1 1b",
    price:"Rs 79.90",
  },
  {
    img:"/product-3.jpg",
    name:"Blueberry organic, 6 Ounce",
    price:"Rs 929.00",
  },
  {
    img:"/product-4.jpg",
    name:"Kiwi organic, 1 Each",
    price:"Rs 779.99",
  },
  {
    img:"/product-5.jpg",
    name:"organic Banana",
    price:"Rs 66.99",
  },
  {
    img:"/product-6.jpg",
    name:"Mc Cormick Gourment orange",
    price:"Rs 35.90",
  },
  {
    img:"/product-7.jpg",
    name:"organic brocklli, 1 1b",
    price:"Rs 79.90",
  },
  {
    img:"/product-8.jpg",
    name:"Blueberry organic,6 Ounce",
    price:"Rs 935.90",
  },
  {
    img:"/product-9.jpg",
    name:"Dried Pineapple fruit Bar",
    price:"Rs 729.90",
  },
  {
    img:"/product-10.jpg",
    name:"Holiday Nuts Gift Basket",
    price:"Rs 399.90",
  },
];

function FeaturesProduct() {
  return (
    <div className='pt-20'>
      <div className='container'>
        <div className='sm:flex justify-between items-center'>
          <div className='text-xl md:text-4xl pb-4 sm:pb-0'>
            Features product

          </div>
          <div className='flex gap-8 items-center text-[14px] md:text-lg'>
            <button className='border-b border-[#000]'>Best SelleRs</button>
            <button>Most Popular</button>

          </div>

        </div>
        <div className='pt-10 grid sm:grid-cols-2 md: grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
          {
            productData.map((product)=>(
              <Product  key={product.name}
                        img={product.img}
                        name={product.name}
                        price={product.price}
              />

            ))
          }

        </div>

      </div>

    </div>
  )
}

export default FeaturesProduct
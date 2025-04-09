import ImgMediaCardm from "../components/Card";
import Variants from "../components/Loading";
import useFetch from "../hooks/useFetch";


const Products = () => {
  const [loading, error, data] = useFetch("https://dummyjson.com/products");
  if (loading) {
    return <Variants/>
}

if (error) {
    return <div className=' flex justify-center h-[80vh] items-center text-3xl font-bold'>
        <h1 className='text-red-300'>Error occured</h1>
    </div>
}




  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-3 align-items-center cursor-pointer">
        {data &&
          data.products.map((product) => {
            return (
              <ImgMediaCardm
                title={product.title}
                image={product.thumbnail}
                key={product.id}
                id = {product.id}
              />
            );
          })}
      </div>
      {loading && (
        <h1>
          <Variants />
        </h1>
      )}
    </>
  );
};

export default Products;

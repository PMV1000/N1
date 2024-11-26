import React, { useEffect, useState } from "react"

const Introduct = () => {
  const [products, setPro] = useState([]);
  const [quanCat, setquan] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/shoes');
        const productData = await response.json();
        setPro(productData);
      } catch (error) {
        console.error('Error R:', error);
      }
    };
    fetchData();
  }, []);

  function printCartItem(products, quan) {
    const items = [];
    if (products.length === 0) return <div>No products in your</div>; 

    for (let i = 0; i < quan; i++) {
      if (products[i]) {
        items.push(
          <div className="flex w-full h-1/3 space-x-2" id={`id${products[i].id}`} key={products[i].id}>
            <div className="w-1/3 h-full mr-2">
              <div className="relative w-aut0 h-full">
                <div className={`absolute w-[65px] h-[70px] rounded-full top-[12px] left-[5px]`} style={{ backgroundColor: products[i].color }}></div>
                <img src={products[i].image} className="absolute w-24 h-20 top-0 left-0 object-cover rotate-[330deg] rounded-full" />
              </div>
            </div>
            <div className="w-2/3 h-full space-y-2">
              <article className="text-[#313A45] font-extrabold text-xs mt-6">{products[i].name}</article>
              <p className="font-extrabold text-xl mb-1">{products[i].price}</p>
              <div className="flex justify-between">
                <div className="flex space-x-1">
                  <button className="h-7 w-7 p-2 bg-[#EEEEEE] rounded-full text-center" onClick={() => decrease(products[i].id)}>
                    <img src="../assets/minus.png" alt="" className="font-normal h-2 w-3" />
                  </button>
                  <p data-quan="1" className="font-normal h-1 w-2" id={`quanOf${products[i].id}`}>1</p>
                  <button className="h-7 w-7 p-2 bg-[#EEEEEE] rounded-full text-center" onClick={() => increase(products[i].id)}>
                    <img src="../assets/plus.png" alt="" className="font-light h-2 w-3" />
                  </button>
                </div>
                <button className="h-7 w-7 p-2 bg-[#EFC845] rounded-full text-center mr-2" onClick={() => remove(products[i].id)}>
                  <img src="../assets/trash.png" alt="" className="font-normal h-4 w-6" />
                </button>
              </div>
            </div>
          </div>
        );
      }
    }
    return items;
  }


  function decrease(id){

    const quan=document.querySelector(`#quanOf${id}`)
    if(parseInt(quan.innerText) !== 1){
    quan.innerText=(parseInt(quan.innerText)-1).toString()}
 }
 function increase(id){
    const quan=document.querySelector(`#quanOf${id}`)
    quan.innerText=(parseInt(quan.innerText)+1).toString()
    console.log(quan,toString()+"quan")
 }

 function remove(id){
    const item=document.querySelector(`#id${id}`)
    item.classList.add("hidden")
 }


  return (
    <main className="h-full w-full">
      <div className="md:flex md:space-x-9 w-full h-auto relative z-50 md:justify-center mt-32 ">
        <div className="bg-white w-80 h-[540px] shadow-2xl rounded-3xl p-3 px-6 space-y-3 relative overflow-hidden">
            <div className="absolute w-60 h-60 bg-[#EFC845] rounded-full bottom-[380px] right-52 "></div>
          <p className="h-auto w-full z-50 relative" >
            <img className="h-7 w-[45px]" src="./assets/nike.png" alt="nike" />
          </p>
          <h3 className="z-10 text-[#313A45] font-bold text-xl relative">Our Products</h3>

          <div className="w-full h-2/3 w-auto bg-[#e1e7ed] rounded-2xl shadow-xs relative">
            {products.length > 0 && products[0].image ? (
              <img src={products[0].image} className="w-full rotate-[330deg] h-full" alt="" />
            ) : (
              <div>Loading...</div> 
            )}
          </div>

          <article className="text-[#313A45] font-bold text-xl">{products[0]?.name}</article>
          <p className="text-sm text-gray-500 font-normal">{products[0]?.description.slice(0, 84)}</p>
        </div>

        <div className="bg-white w-80 h-[540px] shadow-2xl rounded-3xl p-3 px-6 relative overflow-hidden">
            <div className="absolute w-60 h-60 bg-[#EFC845] rounded-full bottom-[380px] right-52 "></div>
          <p className="h-auto w-full z-50 relative">
            <img className="h-7 w-[45px]" src="./assets/nike.png" alt="nike" />
          </p>
          <p className="flex justify-between z-10  relative text-[#313A45] font-bold text-xl my-3">
            <p>Your Cart</p>
            <p className="font-extrabold text-2xl mb-1">$358.94</p>
          </p>

          <div className="mt-1 w-full h-2/3 space-y-2">
            {printCartItem(products, quanCat)}
          </div>
        </div>
      </div>
      <footer className="w-full h-1/3 md:h-2/5 fixed bottom-0 z-0">
  <div
    className="bg-[#EFC845] h-full mt-auto"
    style={{
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderTopLeftRadius: '50% 20%',  
      borderTopRightRadius: '50% 40%'   
    }}
  >
  </div>
</footer>




    </main>
  );
}

export default Introduct;

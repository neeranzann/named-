import React from 'react'
import { useNavigate, useParams } from 'react-router';
import { Image, Shimmer } from 'react-shimmer'
import { useFormik } from 'formik';
import Reviews from '../components/Reviews';



const ProductDetail = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      select: 1
    },
  });

  const data = {
    _id: '644c63bf68b3c792b9ffc2c4',
    product_name: "beauty product",
    product_detail: "During the early stages of shampoo in Europe, English hair stylists bo…",
    product_price: 9000,
    rating: 0,
    numReviews: 0,
    product_image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "shampoo",
    category: "beauty products",
    countInStock: 5,
    reviews: []
  };


  const total = data.reviews.reduce((acc, item) => acc + item.rating, 0);

  const avgRating = total / data.reviews.length;
  let icons = [];
  for (let i = 1; i <= avgRating; i++) {
    icons.push('fa-regular fa-star');
  }



  return (
    <>
      <div className='grid grid-cols-3 px-5 py-7 gap-10'>
        <div>
          <Image
            src={`${data.product_image}`}
            fallback={<Shimmer height={300} width={400} duration={4} />}
          />

        </div>

        <div className='space-y-7 '>
          <h1 className='text-gray-700 font-bold text-2xl'>{data.product_name.toUpperCase()}</h1>
          <div className='border-t-2 border-gray-200 border-b-2 py-1'>
            {icons.map((ic, i) => {
              return <i key={i} className={ic}></i>
            })}
            <p className='font-semibold text-gray-500'>{data.numReviews < 1 ? 'No Reviews yet' : `${data.numReviews} reviews`}</p>
          </div>
          <p className='border-t-2 border-gray-200 border-b-2 py-1 font-semibold text-gray-500'>Price Rs. {data?.product_price}</p>
          <p className='font-bold text-gray-700'>{data.product_detail}</p>
        </div>


        <table className='border-collapse border-2 border-slate-700  text-center max-w-xs '>
          <tbody>
            <tr>
              <td className='border-2 border-slate-700'>Price</td>
              <td className='border-2 border-slate-700'>{data.product_price}</td>
            </tr>

            <tr>
              <td className='border-2 border-slate-700'>Status</td>
              <td className='border-2 border-slate-700'>{data.countInStock === 0 ? 'Out of Stock' : 'In Stock'}</td>
            </tr>


            {data.countInStock > 0 && <tr>
              <td className="border  text-center ">Qty</td>
              <td className="border  text-center">
                <select onChange={(e) => formik.setFieldValue('select', e.target.value)} name="select" id="select" className='w-14 px-4 py-1'>
                  {[...Array(data.countInStock).keys()].map((x) => {
                    return <option value={x + 1} key={x}>{x + 1}</option>
                  })}

                </select>

              </td>

            </tr>}

            <tr >
              <td colSpan={2}>
                {data.countInStock === 0 ? <button disabled className='bg-gray-600 w-[70%] text-white py-2 px-2'>Add To Cart</button> : <button
                  onClick={() => nav('/cart')}
                  className='bg-black w-[70%] text-white py-2 px-2'>Add To Cart</button>}
              </td>
            </tr>
          </tbody>
        </table>



      </div>
      <Reviews />
    </>
  )
}

export default ProductDetail
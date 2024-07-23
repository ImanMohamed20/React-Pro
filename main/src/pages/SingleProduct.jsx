import { Link, useNavigate , useParams, useLocation } from 'react-router-dom'
import PRODUCTS from '../data.js'

const SingleProduct = () => {
const navigate = useNavigate();
const {productId} = useParams();
const singlePro = PRODUCTS.find(product => product.id == productId)

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Product Details</h1>

            </div>
            
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={singlePro.image} />

          </div>

          <div className="col-lg-7">
            <h2>{singlePro.name}</h2>
            <p className="price"><strong>{singlePro.price}</strong></p>
            <p>{singlePro.details} </p>
            <br />
            <button className='btn btn-primary btn-sm' onClick={()=> navigate(-1)}>Back To Products</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct
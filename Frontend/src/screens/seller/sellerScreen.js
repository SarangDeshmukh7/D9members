import { Link } from 'react-router-dom'
import {
  getSellerMaxSaleProducts,
  getSellerTotalRevenue,
  getSellerCustAvgRating,
  getSellerMonthlyRevenue,
} from '../../actions/sellerActions'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
LineChart,Line,
 
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from 'recharts'
const SellerScreen = (props) => {
  const gettingSellerMaxProductStore = useSelector(
    (store) => store.gettingSellerMaxProductStore
  )
  const getSellerTotalStore = useSelector((store) => store.getSellerTotalStore)
  const getSellerCustAvgStore = useSelector(
    (store) => store.getSellerCustAvgStore
  )
  const getSellerMontlyRevenueStore = useSelector(
    (store) => store.getSellerMontlyRevenueStore
  )
  const dispatch = useDispatch()

  // console.log(getSellerMontlyRevenueStore.response.data.total)

  useEffect(() => {
    console.log('in use effect')
    //dispatch(getAllCartItems());
    dispatch(getSellerMaxSaleProducts())
    dispatch(getSellerTotalRevenue())
    dispatch(getSellerCustAvgRating())
    dispatch(getSellerMonthlyRevenue())
  }, [])

  const showProduct = () => {
    props.history.push('/show-product')
  }

  const viewAllCustomerMyorders = () => {
    props.history.push('/all-customers-myorders-for-seller')
  }

  const addProduct = () => {
    props.history.push('/add-product')
  }

  return (
<div>
      <div>
        <br>
        </br>
      </div>
      <div>
        <br>
        </br>
      </div>
      <div className="row">
        <div className="col-4-admin">
          <h4>Total Revenue</h4>
          {getSellerTotalStore.response &&
                               getSellerTotalStore.response.data &&
                               getSellerTotalStore.response.data.length >= 0 &&
                               getSellerTotalStore.response.data.map((p) => {
                                 return <span>₹ {p.total_price}</span>
                               })}
        </div>
        <div className="col-4-admin">
          <h4>Cust. Statisfaction</h4>
          {getSellerCustAvgStore.response &&
                               getSellerCustAvgStore.response.data &&
                               getSellerCustAvgStore.response.data.length >= 0 &&
                               getSellerCustAvgStore.response.data.map((p) => {
                                 return <span>{p.rating_per}%</span>
                               })}

        </div>

      

        <div className="col-4-admin">
          <h4>Monthly Revenue</h4>
          {getSellerMontlyRevenueStore.response &&
                               getSellerMontlyRevenueStore.response.data &&
                               getSellerMontlyRevenueStore.response.data                                 .length >= 0 &&
                               getSellerMontlyRevenueStore.response.data.map(
                                 (p) => {
                                   return <span>{p.total}</span>
                                 }
                               )}
        </div>
      </div>

      <div className="row">
        <div className="col-2-graph heading" style={{ padding: "20px" }}>
          Graphical Analysis
        </div>
        <br></br>

        <div className="col-2-graph graph">
        <LineChart width={730} height={250}   data={
                           gettingSellerMaxProductStore.response &&
                           gettingSellerMaxProductStore.response.data
                         }
   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
   <CartesianGrid strokeDasharray="3 3" />
   <XAxis  dataKey="prod_title"/>
   <YAxis />
   <Tooltip />
   <Legend />
   <Line type="monotone"  dataKey="no_of_qty" stroke="#8884d8" />
   {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
 </LineChart>
        </div>
      </div>

       
      <div className="row">
        <div className="col-3">
          <button type="button" class="btn btn-success" style={{background: '#FBC531', borderradius: '20px', padding: '30px 70px', fontSize:'100%'}} onClick={showProduct}>
            Show Product
          </button>
        </div>

        <div className="col-3">
          <button type="button" class="btn btn-success" style={{background: '#6D214F', borderradius: '20px', padding: '30px 70px', fontSize:'100%'}} onClick={viewAllCustomerMyorders}>
          Customer Orders
          </button>
        </div>
        <div className="col-3">
          <button type="button" class="btn btn-success" style={{background: '#33D9B2', borderradius: '20px', padding: '30px 75px', fontSize:'100%'}} onClick={addProduct}>
          Add product
          </button>
        </div>
      </div>
    </div>
  )
}

export default SellerScreen

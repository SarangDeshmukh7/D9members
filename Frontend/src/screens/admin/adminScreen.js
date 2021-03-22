import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  LineChart,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  Line,
} from "recharts";
import {
  getPayment,
  getRating,
  getMaxSalesProduct,
  getMonthWiseRevenue,
} from "../../actions/adminDashBoardActions";

const AdminScreen = (props) => {
  const paymentStore = useSelector((store) => store.paymentStore);

  const ratingStore = useSelector((store) => store.ratingStore);

  const maxSaleProductStore = useSelector((store) => store.maxSaleProductStore);

  const monthWiseRevenueStore = useSelector(
    (store) => store.monthWiseRevenueStore
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in use effect");
    //dispatch(getAllCartItems());
    dispatch(getPayment());
    dispatch(getRating());
    dispatch(getMaxSalesProduct());
    dispatch(getMonthWiseRevenue());
  }, []);

  const showAllUsersHandler = () => {
    props.history.push("/get-users");
  };

  const showAllSeller = () => {
    props.history.push("/get-seller");
  };

  const showAllProducts = () => {
    props.history.push("/get-product-admin");
  };

  const showAllCompanies = () => {
    props.history.push("/show-company");
  };

  const showAllCategories = () => {
    props.history.push("/get-category");
  };

  const showAllOrders = () => {
    props.history.push("/admin-order-details");
  };

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
          {paymentStore.response &&
                                 paymentStore.response.data &&
                                 paymentStore.response.data.length >= 0 &&
                                 paymentStore.response.data.map((p) => {
                                   return (<span>₹ {p.TotalRevenue}</span>)
                                 })}
        </div>
        <div className="col-4-admin">
          <h4>Cust. Statisfaction</h4>
          {ratingStore.response &&
                                 ratingStore.response.data &&
                                 ratingStore.response.data.length >= 0 &&
                                 ratingStore.response.data.map((p) => {
                                   return (
                                     <span>{p.Customer_satisfaction}%</span>
                                   )
                                 })}

        </div>

        <div className="col-4-admin">
          <h4>Max Sale</h4>
          {maxSaleProductStore.response &&
                                     maxSaleProductStore.response.data &&
                                     maxSaleProductStore.response.data.length >= 0 &&
                                     maxSaleProductStore.response.data.map((p) => {
                                       return (
                                         <span >{p.prod_title}</span>
                                       )
                                     })}

        </div>

        <div className="col-4-admin">
          <h4>Monthly Revenue</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-2-graph heading" style={{ padding: "20px" }}>
          Graphical Analysis
        </div>
        <br></br>

        <div className="col-2-graph graph">
        <LineChart width={730} height={250}  data={
                             monthWiseRevenueStore.response &&
                           monthWiseRevenueStore.response.data
                           }
       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="month" />
       <YAxis />
       <Tooltip />
       <Legend />
       <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
       {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
     </LineChart>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <button type="button" class="btn btn-success" style={{background: '#E67E22', borderradius: '20px', padding: '30px 70px', fontSize:'100%'}} onClick={showAllUsersHandler}>
            Show all users
          </button>
        </div>

        <div className="col-3" >
          <button type="button" class="btn btn-success" style={{background: '#E74C3C', borderradius: '20px', padding: '30px 75px', fontSize:'100%'}} onClick={showAllSeller}>
            Show sellers
          </button>
        </div>
        <div className="col-3">
          <button type="button" class="btn btn-success" style={{background: '#BE2EDD', borderradius: '20px', padding: '30px 70px', fontSize:'100%'}} onClick={showAllProducts}>
            Show products
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <button type="button" class="btn btn-success" style={{background: '#FBC531', borderradius: '20px', padding: '30px 70px', fontSize:'100%'}} onClick={showAllCompanies}>
            Show company
          </button>
        </div>

        <div className="col-3">
          <button type="button" class="btn btn-success" style={{background: '#6D214F', borderradius: '20px', padding: '30px 70px', fontSize:'100%'}} onClick={showAllCategories}>
          Show category
          </button>
        </div>
        <div className="col-3">
          <button type="button" class="btn btn-success" style={{background: '#33D9B2', borderradius: '20px', padding: '30px 75px', fontSize:'100%'}} onClick={showAllOrders}>
          Show orders
          </button>
        </div>
      </div>
    </div>

  );
};

export default AdminScreen;

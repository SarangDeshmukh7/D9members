import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { applyForSeller } from '../actions/sellerActions'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { USER_SIGNOUT } from '../constants/userConstants'
import { CART_FETCH_RESET_AT_LOGIN } from '../constants/cartConstants'
import cart1 from "../image/cart.png";
import logo from "../image/logo11.png";

const Navigation = () => {
  const cart = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  const userSigninStore = useSelector((store) => store.userSigninStore)
  const { error, loading, response } = userSigninStore

  const cartLoginStore = useSelector((state) => state.cartLoginStore)

  const onApply = () => {
    dispatch(applyForSeller())
    alert(
      'Apllied For Seller Successfully..! Please Relogin And Wait Until Admin Approves Your Request.'
    )
    dispatch(logout())
  }

  const history = useHistory();

  const onLogout = () => {
    dispatch({
      type: CART_FETCH_RESET_AT_LOGIN,
    })
    dispatch({
      type: USER_SIGNOUT,
    })
    // history.push('/home')
    sessionStorage.removeItem('token')
    alert("Logout Successfull")
  }

  useEffect(() => {
    if (userSigninStore && userSigninStore.response == null) {
      sessionStorage.removeItem('token')
      alert("please signin again to continue")
    }
  }, [])

  return (

    <div>
      {
        userSigninStore && userSigninStore.response == null &&
        < nav class="navbar navbar-expand-md navbar-light #FFD6D6" style={{background:'#FFD6D6'}}>
          <img src = {logo} style={{ width:'200px'}}/>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{color:'#000'}}>
            <ul class="navbar-nav mr-auto" style={{color:'#000'}}>
              <li class="nav-item active" style={{color:'#000'}}>
                <Link to="/">
                  <span className="nav-link" style={{color:'#000'}}>Home</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about">
                  <span className="nav-link" style={{color:'#000'}}>About</span>
                </Link>
              </li>
            </ul>
            <div class="form-inline my-2 my-lg-0">
            <li className="nav-item" style={{backgroundColor:'#F05454', color:'white', borderBlockColor:'#00' , borderBlockWidth: '5px', color:'#000', borderRadius:'10px', textAlign :'right', paddingLeft:'15px', paddingRight:'15px', marginLeft:'300px'}}>
                         
                          <Link to="/signin">
                            <span className="nav-link" >
                              <b>LogIn</b>
                            </span>
                          </Link>
                        </li>
            </div>
          </div>
        </ nav>
      }

      {/* customer navbar */}
      {
        userSigninStore &&
        userSigninStore.response &&
        userSigninStore.response.status == 'success' &&
        (userSigninStore.response.data.role == "CUSTOMER" ||
          userSigninStore.response.data.role == "CUSTSELL") &&

          < nav class="navbar navbar-expand-md navbar-light #FFD6D6" style={{background:'#FFD6D6'}}>
          <img src = {logo} style={{ width:'200px'}}/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/">
                  <span className="nav-link" style={{color:'#000'}}>Home</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about">
                  <span className="nav-link" style={{color:'#000'}}>About</span>
                </Link>
              </li>
            </ul>

            <div class="form-inline my-2 my-lg-0" style={{color:'#000'}} >

              <ul class="navbar-nav mr-auto" style={{color:'#000'}}>
                <li class="nav-item dropdown" style={{color:'#000'}}>
                  <a class="nav-link dropdown-toggle #000"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'#000'}}>
                   <h5 style={{color:'#000' , marginRight:'610px' , marginTop:'30px'}}> Profile ▼</h5>
 </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor : '#FFD6D6'}}>
                    <Link to="/edit-profile">
                      <a class="dropdown-item"><h6 style={{color:'#000'}}>Edit Profile</h6></a>
                    </Link>
                    <Link to="/user-myorder">
                      <a class="dropdown-item"><h6 style={{color:'#000'}}>My Orders</h6></a>
                    </Link>
                    <div class="dropdown-divider"></div>
                    {
                      userSigninStore.response.data.role == "CUSTOMER" &&
                      <button class="dropdown-item" onClick={onApply}>Apply For Seller</button>
                    }
                  </div>
                </li>
              </ul>

              

              {
                cartLoginStore &&
                cartLoginStore.response &&
                cartLoginStore.response.data &&
                <span>
                  <ul class="navbar-nav flex-row justify-content-end flex-wrap align-items-center mr-lg-4 mr-xl-0">
                    <li class="nav-item px-3 text-uppercase mb-0 position-relative d-lg-flex">
                      <div id="cart" class="d-none" />
                      <Link
                        to="/cart"
                        class="cart position-relative d-inline-flex"
                        aria-label="View your shopping cart" >
                           <img src= {cart1} alt="cart" width="30px" height="30px" ></img>
                        <span class="cart-basket d-flex align-items-center justify-content-center" >
                          {cartLoginStore.response.data.length}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </span>
              }

<button style={{backgroundColor:'#F05454', color:'#782A2A', borderBlockWidth:'None', borderRadius:'10px', textAlign :'right', paddingLeft:'15px', paddingRight:'15px', marginLeft:'00px'}}
                            onClick={onLogout}
                            className="btn btn-success"
                          >
                            <b>Logout</b>
                          </button>

            </div>
          </div >
        </nav >
      }


      {/* Seller navbar */}

      {
        userSigninStore &&
        userSigninStore.response &&
        userSigninStore.response.status == 'success' &&
        userSigninStore.response.data.role == "SELLER" &&

        < nav class="navbar navbar-expand-md navbar-light #FFD6D6" style={{background:'#FFD6D6'}}>
          <img src = {logo} style={{ width:'200px'}}/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/">
                  <span className="nav-link" style={{color:'#000'}}>Home</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/seller">
                  <span className="nav-link" style={{color:'#000'}}>Seller</span>
                </Link>
              </li>

              
            </ul>
            <div class="form-inline my-2 my-lg-0" >
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <h5 style={{color:'#000' , marginRight:'720px' , marginTop:'30px'}}> Profile ▼</h5></a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor : '#FFD6D6'}}>
                    <Link to="/edit-profile">
                      <a class="dropdown-item" ><h6 style={{color:'#000'}}>Edit Profile</h6></a>
                    </Link>
                    <Link to="/user-myorder">
                      <a class="dropdown-item" ><h6 style={{color:'#000'}}>My Orders</h6></a>
                    </Link>
                  </div>
                </li>
              </ul>

              {
                cartLoginStore &&
                cartLoginStore.response &&
                cartLoginStore.response.data &&
                <span>
                  <ul class="navbar-nav flex-row justify-content-end flex-wrap align-items-center mr-lg-4 mr-xl-0">
                    <li class="nav-item px-3 text-uppercase mb-0 position-relative d-lg-flex">
                      <div id="cart" class="d-none" />
                      <Link
                        to="/cart"
                        class="cart position-relative d-inline-flex"
                        aria-label="View your shopping cart">
                          <img src= {cart1} alt="cart" width="30px" height="30px" ></img>
                        <span class="cart-basket d-flex align-items-center justify-content-center">
                          {cartLoginStore.response.data.length}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </span>
              }

<button style={{backgroundColor:'#F05454', color:'#782A2A', borderBlockWidth:'None', borderRadius:'10px', textAlign :'right', paddingLeft:'15px', paddingRight:'15px', marginLeft:'00px'}}
                            onClick={onLogout}
                            className="btn btn-success"
                          >
                            <b>Logout</b>
                          </button>
            </div>
          </div>
        </nav >
      }


      {/* Admin navbar */}
      {
        userSigninStore &&
        userSigninStore.response &&
        userSigninStore.response.status == 'success' &&
        userSigninStore.response.data.role == "ADMIN" &&

        < nav class="navbar navbar-expand-md navbar-light #FFD6D6" style={{background:'#FFD6D6'}}>
         <img src = {logo} style={{ width:'200px'}}/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/">
                  <span className="nav-link" style={{color:'#000'}}>Home</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/admin">
                  <span className="nav-link" style={{color:'#000'}}>Admin</span>
                </Link>
              </li>
              
            </ul>
            <div class="form-inline my-2 my-lg-0 #000" style={{color:'#000'}}>
              <ul class="navbar-nav mr-auto #000" style={{color:'#000'}}>
                <li class="nav-item dropdown #000" style={{color:'#000'}}>
                  <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'#000'}}>
                  <h5 style={{color:'#000' , marginRight:'600px' , marginTop:'30px'}}> Profile ▼</h5></a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor : '#FFD6D6'}}>
                    <Link to="/edit-profile">
                      <a class="dropdown-item" ><h6 style={{color:'#000'}}>Edit Profile</h6></a>
                    </Link>
                    <Link to="/user-myorder">
                      <a class="dropdown-item" style={{color:'#000'}}><h6 style={{color:'#000'}}>My Orders</h6></a>
                    </Link>
                  </div>
                </li>
              </ul>

              {
                cartLoginStore &&
                cartLoginStore.response &&
                cartLoginStore.response.data &&
                <span>
                  <ul class="navbar-nav flex-row justify-content-end flex-wrap align-items-center mr-lg-4 mr-xl-0">
                    <li class="nav-item px-3 text-uppercase mb-0 position-relative d-lg-flex">
                      <div id="cart" class="d-none" />
                      <Link
                        to="/cart"
                        class="cart position-relative d-inline-flex"
                        aria-label="View your shopping cart">
                         {/* <i class="fas fa fa-shopping-cart fa-lg" /> */}
                         <img src= {cart1} alt="cart" width="30px" height="30px" ></img>

                        <span class="cart-basket d-flex align-items-right justify-content-center">
                          {cartLoginStore.response.data.length}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </span>
              }

<button style={{backgroundColor:'#F05454', color:'#782A2A', borderBlockWidth:'None', borderRadius:'10px', textAlign :'right', paddingLeft:'15px', paddingRight:'15px', marginLeft:'00px'}}
                            onClick={onLogout}
                            className="btn btn-success"
                          >
                            <b>Logout</b>
                          </button>
            </div>
          </div>
        </nav >}

    </div >


  )
}

export default Navigation

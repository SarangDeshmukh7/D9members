import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import { getProductDetails } from '../../actions/productActions';

const ProductDetailsScreen = (props) => {
	let params = useParams();
	console.log('params.id' + params.id);

	const allProductStore = useSelector((store) => store.allProductStore);

	const cartStore = useSelector((state) => state.cartStore);
	const { response, loading, error } = cartStore;

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('in use effect');
		dispatch(getProductDetails(params.id));
	}, []);
	
	const addToCartHandler = (p) => {
		console.log("in addToCartHandler :" + p);
		dispatch(addToCart(p.prod_id, "1"));
		props.history.push("/cart");
	 };
  
	return (
<div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1">
						  {allProductStore.response &&
		 			allProductStore.response.data &&
		 			allProductStore.response.data.length > 0 &&
		 			allProductStore.response.data.map((p) => {
		 				return (
	 					<div>
							  <img
                      src={"http://localhost:4000/" + `${p.photo}`}
                    
                      alt="Image Loading Failed"
                      width="200px"
                      height="300px"
                    />
		 					</div>	
		 				);
		 			})}
						  </div>
				
						</div>
						
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">          </h3>

						<div>
		 		{allProductStore.response &&
					allProductStore.response.data &&
					allProductStore.response.data.length > 0 &&
					allProductStore.response.data.map((p) => {
						return (
							<div>
								<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						
								<h4><div>{p.prod_title}</div></h4>

							<h4><p class="product-description">{p.prod_description}</p></h4>	
								<h4 class="price">${p.prod_price}</h4>
					
				
								<div>{p.cart_quantity}</div>
								<button
									onClick={() => {
										addToCartHandler(p);
									}}
									className="btn2 btn-add-to-cart"
								>
									Add to cart
								</button>
							</div>
						);
					})}
			</div>	
					</div>
				</div>
			</div>
		</div>
		</div>






















		// <div>
		// 	Product Details Screen
		// 	<div>
		// 		{allProductStore.response &&
		// 			allProductStore.response.data &&
		// 			allProductStore.response.data.length > 0 &&
		// 			allProductStore.response.data.map((p) => {
		// 				return (
		// 					<div>
		// 						<div>{p.prod_id}</div>
		// 						<div>{p.prod_title}</div>
		// 						<div>{p.prod_description}</div>
		// 						<div>{p.cart_quantity}</div>
		// 						<button
		// 							onClick={() => {
		// 								onAddToCart(p);
		// 							}}
		// 							className="btn2 btn-add-to-cart"
		// 						>
		// 							Add to cart
		// 						</button>
		// 					</div>
		// 				);
		// 			})}
		// 	</div>
		// 	<div>
		// 		<Link to="/signin">SignIn</Link>
		// 	</div>
		// 	<div>
		// 		<Link to="/signup">SignUp</Link>
		// 	</div>
		// 	<div>
		// 		<Link to="/add-product">Add Product</Link>
		// 	</div>
		// </div>
	);
};

export default ProductDetailsScreen;

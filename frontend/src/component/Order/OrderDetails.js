import React, { Fragment, useEffect } from "react";
import "./OrderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";


const OrderDetails = ({match}) => {


    const dispatch = useDispatch();
    const alert = useAlert();

    const { order, error, loading } = useSelector((state) => state.orderDetails);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getOrderDetails(match.params.id));
    }, [dispatch, alert, error, match.params.id]);

    return (
        <Fragment>
            {loading ? (<Loader />) : (
                <Fragment>
                    <MetaData title="Order Details" />
                    <div className="orderDetailsPage">
                        <div className="orderDetailsContainer">
                            <Typography component="h1">
                                Order #{order && order._id}
                            </Typography>
                            <Typography>Shipping Info</Typography>
                            <div className="orderDetailsContainerBox">
                                <div>
                                    <p>Name:</p>
                                    <span>{order.user && order.user.name}</span>
                                </div>
                                <div>
                                    <p>Phone:</p>
                                    <span>
                                        {order.shippingInfo && order.shippingInfo.phoneNo}
                                    </span>
                                </div>
                                <div>
                                    <p>Address:</p>
                                    <span>
                                        {order.shippingInfo &&
                                        `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                                    </span>
                                </div>
                            </div>
                            <Typography>Payment Details</Typography>
                            <div className="orderDetailsContainerBox">
                                <div>
                                    <p>Status :  </p>
                                    <p className={ order.paymentInfo && order.paymentInfo.status === "succeeded" ? "greenColor" : "redColor" }>&nbsp;
                                        {order.paymentInfo && order.paymentInfo.status === "succeeded" ? " PAID" : " NOT PAID"}
                                    </p>
                                </div>
                                { order.paymentInfo && order.paymentInfo.status === "succeeded" && (
                                    <div>
                                        <p>Paid At :</p>
                                        <span>{order.paidAt && order.paidAt.substr(0,10)}</span>
                                    </div>
                                ) }
                                
                                <div>
                                    <p>Total Price :</p>
                                    <span>₹ {order.itemsPrice && order.itemsPrice}</span>
                                </div>
                                <div>
                                    <p>Tax Price (18% GST) :</p>
                                    <span>₹ {order.taxPrice && order.taxPrice}</span>
                                </div>
                                <div>
                                    <p>Shipping Price :</p>
                                    <span>₹ {order.shippingPrice && order.shippingPrice}</span>
                                </div>
                                <div className="totalAmount">
                                    <p>Total Amount :</p>
                                    <span>₹ {order.totalPrice && order.totalPrice}</span>
                                </div>
                            </div>

                            <Typography>Order Status</Typography>
                            <div className="orderDetailsContainerBox">
                                <div>
                                    <p
                                        className={
                                        order.orderStatus && order.orderStatus === "Delivered"
                                            ? "greenColor"
                                            : "redColor"
                                        }
                                    >
                                        {order.orderStatus && order.orderStatus}
                                    </p>
                                </div>
                            </div>
                            
                            
                        </div>

                        <div className="orderDetailsCartItems">
                            <Typography>Order Items:</Typography>
                            <div className="orderDetailsCartItemsContainer">
                                {order.orderItems && order.orderItems.map((item) => (
                                    <div key={item.product}>
                                        <img src={item.image} alt="Product" />
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>{" "}
                                        <span>
                                            {item.quantity} X ₹ {item.price} ={" "}
                                            <strong>₹ {item.price * item.quantity}</strong>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default OrderDetails;
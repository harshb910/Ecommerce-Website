import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";





const Dashboard = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
    const { orders } = useSelector((state) => state.allOrders);
    const { users } = useSelector((state) => state.allUsers);

    let outOfStock = 0;

    products && products.forEach((item) => {
        if (item.Stock === 0) {
            outOfStock += 1;
        }
    });

    useEffect(() => {
        dispatch(getAdminProduct());
        dispatch(getAllOrders());
        dispatch(getAllUsers());
    }, [dispatch]);

    let totalAmount = 0;
    orders && orders.forEach((item) => {
        totalAmount += item.totalPrice;
    });

    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["cyan"],
                data: [0, totalAmount],
            },
        ],
    };
    
    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
            {
                backgroundColor: ["#ef4f33", "#75fa5d"],
                hoverBackgroundColor: ["red", "green"],
                borderColor: ["red", "green"],
                borderWidth: 1.25,
                data: [outOfStock, products.length - outOfStock],
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Stock Data',
                color:'rgba(0, 0, 0, 0.58)',
                font: {
                    size:30
                },
                padding:{
                    top:30,
                    bottom:30
                },
                responsive:true,
                animation:{
                    animateScale: true,
                },
            }
        }
    
    }

    
    
    return (
        <div className="dashboard">
            <MetaData title="Dashboard - Admin Panel" />
            <Sidebar />
            <div className="dashboardContainer">
                <Typography component="h1">Dashboard</Typography>
                <div className="dashboardSummary">
                    <div>
                        <p>
                            Total Amount <br/> ₹ {totalAmount}
                        </p>
                    </div>
                    <div className="dashboardSummaryBox2">
                        <Link to="/admin/products">
                            <p>Product</p>
                            <p>{products && products.length}</p>
                        </Link>
                        <Link to="/admin/orders">
                            <p>Orders</p>
                            <p>{orders && orders.length}</p>
                        </Link>
                        <Link to="/admin/users">
                            <p>Users</p>
                            <p>{users && users.length}</p>
                        </Link>
                    </div>
                </div>
                <div className="lineChart">
                    <Line data={lineState} />
                </div>
                <div className="doughnutChart">
                    <Doughnut data={doughnutState} options={options} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
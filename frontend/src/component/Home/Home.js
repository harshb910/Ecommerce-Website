import React, { Fragment, useEffect } from 'react'
import { CgMouse } from 'react-icons/cg';
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct} from "../../actions/productAction";
import {useSelector, useDispatch} from "react-redux";
import Loader from '../layout/Loader/Loader';

import { useAlert } from "react-alert";


const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const {loading, error, products} = useSelector(state => state.products);

    useEffect( () =>{
        if (error) {
            return alert.error(error);
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);
    return (
        <Fragment>
            {loading ? (
                <Loader/>) :
            (
                <Fragment>
                    <MetaData title={"ECOMMERCE"} />
                    <div className="banner">
                        <p>Welcome to E-Cart</p>
                        <h1>Find Amazing Products At Amazing Offers Now!</h1>
                        <a href="#container">
                            <button>
                                Get Started <CgMouse />
                            </button>
                        </a>
                    </div>
                    <h2 className="homeHeading">Featured Products</h2>
                    <div className="container" id="container">
                        
                        {products && products.map((product)=>(
                            <ProductCard product={product} />
                        ))}
                        
                        
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Home;
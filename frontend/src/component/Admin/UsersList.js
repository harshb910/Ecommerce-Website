import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./ProductList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { getAllUsers, clearErrors, deleteUser } from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";
import Stack from '@mui/material/Stack';

const UsersList = ({ history }) => {
    const dispatch = useDispatch();

    const alert = useAlert();

    const { error, users } = useSelector((state) => state.allUsers);
    const { user } = useSelector((state) => state.user);
    const myId = user._id;

    const { error: deleteError,  isDeleted,  message,  } = useSelector((state) => state.profile);

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id));
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            alert.success(message);
            history.push("/admin/users");
            dispatch({ type: DELETE_USER_RESET });
        }

        dispatch(getAllUsers());
    }, [dispatch, alert, error, deleteError, history, isDeleted, message]);

    const columns = [
        { field: "id", headerName: "User ID", minWidth: 180, flex: 0.2 },

        {
            field: "email",
            headerName: "Email",
            minWidth: 200,
            flex: 0.2,
        },
        {
            field: "name",
            headerName: "Name",
            minWidth: 150,
            flex: 0.2,
        },

        {
            field: "role",
            headerName: "Role",
            type: "number",
            minWidth: 150,
            flex: 0.1,
            cellClassName: (params) => {
                return params.getValue(params.id, "role") === "admin"
                ? "greenColor"
                : "redColor";
            },
        },

        {
            field: "actions",
            flex: 0.1,
            headerName: "Actions",
            minWidth: 150,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                <Fragment>
                    <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
                    <EditIcon />
                    </Link>

                    <Button
                    onClick={() =>
                        deleteUserHandler(params.getValue(params.id, "id"))
                    }
                    >
                    <DeleteIcon />
                    </Button>
                </Fragment>
                );
            },
        },
    ];

    const rows = [];

    users && users.forEach((item) => {
        if(item && item._id !== myId){
            rows.push({
                id: item._id,
                role: item.role,
                email: item.email,
                name: item.name,
            });
        }
    });

    function NoRowsOverlay() {
        return (
            <Stack height="100%" alignItems="center" justifyContent="center" color="#45b245 !important">
                No Users
            </Stack>
        );
    }

    return (
        <Fragment>
            <MetaData title={`All Users - Admin Panel`} />

            <div className="dashboard">
                <SideBar />
                <div className="productListContainer">
                    <h1 id="productListHeading">ALL USERS</h1>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick
                        components={{ NoRowsOverlay, }}
                        className="productListTable"
                        autoHeight
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default UsersList;
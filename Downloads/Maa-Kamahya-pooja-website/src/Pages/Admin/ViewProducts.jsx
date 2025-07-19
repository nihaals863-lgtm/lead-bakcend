import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, deleteProduct, getAdminProducts,
} from "../../Redux/Actions/productActions";
import Sidebar from "./Sidebar";
import "../../Styling/AdminDashboard.css";
// import EditIcon from "../../assets/edit.png";s
import DeleteIcon from "../../assets/delete.png";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { ADMIN_DELETE_PRODUCTS_RESET } from "../../Redux/Constants/productConstants";
import axios from "axios";
import { baseUrl } from "../../UrlHelper/baseUrl";

const ViewProducts = () => {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(0); // Current page number
  // const [pageSize, setPageSize] = useState(10); // Number of rows per page
  // const [totalProducts, setTotalProducts] = useState(0); // Total number of products

  // console.log(products);

  const fetchIndoWesternProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/products`);
      // const miraviadata = await axios.get('https://api.miravia.es/rest/orders/get?app_key=509246&access_token=50000700841eJnVr7jAPzvqBdckwHiTBWSF6gCx4luUDkDKmyIiwd143720b0439&sign_method=sha256&timestamp=1736947318127&created_after=2017-02-10T09:00:00+08:00&sign=A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0');
      // console.log("dkahah",miraviadata)
      const allProducts=response.data.products
      setProducts(allProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIndoWesternProducts();
  }, [])
  // const { products, loading } = useSelector((state) => state.products);
  console.log("all Products",products)
  const { error, isDeleted } = useSelector((state) => state.updateProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };
  const columns = [
    {
      field: "id",
      headerName: "Product ID",
      minWidth: 200,
      flex: 1,
      cellClassName: "order-column",
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 300,
      flex: 1,
      cellClassName: "order-column",
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 100,
      flex: 0.3,
      cellClassName: "order-column",
    },
    {
      field: "created_at",
      headerName: "Created At",
      minWidth: 150,
      flex: 0.5,
      cellClassName: "order-column",
    },

    {
      field: "actions",
      flex: 0.5,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      cellClassName: "order-column",
      renderCell: (params) => {
        return (
          <>
            {/* <Button>
              <Link to={`/admin/all-products/product/${params.row.id}`}>
                <img src={EditIcon} className="products-func-img" alt="" />
              </Link>
            </Button> */}

            <Button onClick={() => deleteProductHandler(params.row.id, "id")}>
              <img src={DeleteIcon} className="products-func-img" alt="" />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        stock: item.Stock,
        price: item.price,
        created_at: String(item?.createdAt).substring(0, 10),
      });
    });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Product Deleted Successfully!!");
      navigate("/admin/dashboard");
      dispatch({ type: ADMIN_DELETE_PRODUCTS_RESET });
    }

    dispatch(getAdminProducts());
  }, [dispatch, error, isDeleted, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Sidebar />
          <div className="container">
            <h2 className="mt-2" style={{color:"black"}}>All Products</h2>
          </div>
          <div className="view-product-container">
            <div className="row d-flex justify-content-center ">
              <div className="col-xl-10 col-md-12">
                <div className="order-data-card user-card-full ">
                  <div className="row">
                    {products?.length > 0 ? (
                      <div
                        style={{
                          height: "%100",
                          width: "100%",
                        }}
                      >
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          disableRowSelectionOnClick
                          autoHeight
                          pageSizeOptions={10}
                          cellClassName="grid-column"
                        />
                      </div>
                    ) : (
                      <div className="empty-cart">
                        <strong>No Product  Yet 🤷‍♂️</strong>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ViewProducts;

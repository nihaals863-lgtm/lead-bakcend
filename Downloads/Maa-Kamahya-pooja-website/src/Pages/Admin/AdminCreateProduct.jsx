import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { createNewProduct } from "../../Redux/Actions/productActions";
import { ADMIN_CREATE_PRODUCTS_RESET } from "../../Redux/Constants/productConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const AdminCreateProduct = () => {
  const { loading, success, error } = useSelector(
    (state) => state.createNewProduct
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State variables
  const [productName, setProductName] = useState("");
  const [productDate, setProductDate] = useState("");
  const [productTime, setProductTime] = useState("");
  const [productbooked, setProductBooked] = useState("");
  const [productLocation, setProductLocation] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState([]);
  const [productImagePreview, setProductImagePreview] = useState([]);
  const [btnloading, setBtnLoading] = useState(false);
  const [poojaVideo, setPoojaVideo] = useState(null);
  const [freeParasad, setfreeParasad] = useState(null);
  const [paidRemedy, setPaidRemedy] = useState(null);

  // Create product handler
  const createProductHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const form = new FormData();
    form.append("name", productName);
    form.append("description", productDesc);
    form.append("price", productPrice);
    form.append("date", productDate);
    form.append("booked", productbooked);
    form.append("time", productTime);
    form.append("location", productLocation);
    
    // Append the video and image files (if they exist)
    if (poojaVideo) form.append("poojaVideo", poojaVideo);
    if (freeParasad) form.append("freeParasad", freeParasad);
    if (paidRemedy) form.append("paidRemedy", paidRemedy);

    // Append product images
    productImage.forEach((img) => {
      form.append("images", img);
    });

    const result = await dispatch(createNewProduct(form));

    if (result.success) {
      toast.success("Product Created Successfully");
      navigate("/admin/all-products");
    } else {
      toast.error(result.message || "Failed to create product");
    }

    // Reset form
    setProductName("");
    setProductDesc("");
    setProductPrice("");
    setProductDate("");
    setProductTime("");
    setProductBooked("");
    setProductLocation("");
    setProductImage([]);
    setPoojaVideo(null);
    setfreeParasad(null);
    setPaidRemedy(null);
    setProductImagePreview([]);
    setBtnLoading(false);
  };

  // Handle image/video file changes
// Handle image/video file changes
const createProductImagesChange = (e) => {
  const files = Array.from(e.target.files);

  // For product images (main images)
  if (e.target.id === "images") {
    const imagePreviews = [];
    const imageFiles = [];

    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = () => {
        imagePreviews[index] = reader.result;
        imageFiles[index] = file;

        if (imagePreviews.length === files.length) {
          setProductImage(imageFiles);
          setProductImagePreview(imagePreviews);
        }
      };
      reader.readAsDataURL(file);
    });
  }

  // For poojaVideo, freeParasad, and paidRemedy (single files)
  else if (e.target.id === "pooja-video") {
    setPoojaVideo(files[0]);  // Only set the first file
  } else if (e.target.id === "free-prasad") {
    setfreeParasad(files[0]);  // Only set the first file
  } else if (e.target.id === "paid-remedy") {
    setPaidRemedy(files[0]);  // Only set the first file
  }
};

  // Handle success and error
  useEffect(() => {
    if (success) {
      toast.success("Product Created Successfully");
      navigate("/admin/all-products");
      dispatch({ type: ADMIN_CREATE_PRODUCTS_RESET });
    } else if (error) {
      toast.error(error);
    }
  }, [dispatch, navigate, success, error]);

  return (
    <>
      <ToastContainer />
      {loading ? (
        <div className="py-2 my-5">
          <Loader />
        </div>
      ) : (
        <>
          <Sidebar />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-md-2 bg-light p-4 shadow rounded bg-white border-1">
                <div className="mt-md-5">
                  <h1 className="login-system-register">Create Product</h1>
                  <form className="pt-2" onSubmit={createProductHandler}>
                    <div className="row">
                      {/* Product Name */}
                      <div className="col-md-6 pb-3">
                        <label htmlFor="name" className="login-text">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                          placeholder="Enter Product Name"
                          className="login-input"
                          id="name"
                        />
                      </div>

                      {/* Product Price */}
                      <div className="col-md-6 pb-3">
                        <label htmlFor="price" className="login-text">
                          Enter Price
                        </label>
                        <input
                          type="number"
                          required
                          value={productPrice}
                          onChange={(e) => setProductPrice(e.target.value)}
                          placeholder="Enter Price"
                          className="login-input"
                          id="price"
                        />
                      </div>

                      {/* Product Description */}
                      <div className="col-md-12 pb-3">
                        <label htmlFor="description" className="login-text">
                          Description
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={productDesc}
                          onChange={(e) => setProductDesc(e.target.value)}
                          placeholder="Add Product Description"
                          className="login-input"
                          id="description"
                        />
                      </div>

                      {/* Product Date */}
                      <div className="col-md-6 pb-3">
                        <label htmlFor="date" className="login-text">
                          Enter Date
                        </label>
                        <input
                          type="date"
                          required
                          value={productDate}
                          onChange={(e) => setProductDate(e.target.value)}
                          className="login-input"
                          id="date"
                        />
                      </div>

                      {/* Product Time */}
                      <div className="col-md-6 pb-3">
                        <label htmlFor="time" className="login-text">
                          Enter Time
                        </label>
                        <input
                          type="time"
                          required
                          value={productTime}
                          onChange={(e) => setProductTime(e.target.value)}
                          className="login-input"
                          id="time"
                        />
                      </div>

                      {/* Product Location */}
                      <div className="col-md-6 pb-3">
                        <label htmlFor="location" className="login-text">
                          Location
                        </label>
                        <input
                          type="text"
                          required
                          value={productLocation}
                          onChange={(e) => setProductLocation(e.target.value)}
                          placeholder="Enter Location"
                          className="login-input"
                          id="location"
                        />
                      </div>

                      {/* Product Booked */}
                      <div className="col-md-6 pb-3">
                        <label htmlFor="booked" className="login-text">
                          Booked
                        </label>
                        <input
                          type="text"
                          required
                          value={productbooked}
                          onChange={(e) => setProductBooked(e.target.value)}
                          placeholder="Enter Booking Status"
                          className="login-input"
                          id="booked"
                        />
                      </div>

                      <div className="col-md-6 pb-3">
  <label htmlFor="pooja-video" className="login-text">
  Pooja Video (Upload only 3-MB Video)
  </label>
  <input
    type="file"
    accept="image/*"  // Allow image files only
    onChange={createProductImagesChange}
    className="login-input"
    id="pooja-video"  // id for reference
  />
</div>

{/* Free Prasad */}
<div className="col-md-6 pb-3">
  <label htmlFor="free-prasad" className="login-text">
    Free Prasad
  </label>
  <input
    type="file"
    accept="image/*"  // Allow image files only
    onChange={createProductImagesChange}
    className="login-input"
    id="free-prasad"  // id for reference
  />
</div>

{/* Paid Remedy */}
<div className="col-md-6 pb-3">
  <label htmlFor="paid-remedy" className="login-text">
    Paid Remedy (Upload Image)
  </label>
  <input
    type="file"
    accept="image/*"  // Allow image files only
    onChange={createProductImagesChange}
    className="login-input"
    id="paid-remedy"  // id for reference
  />
</div>

                      {/* Product Images */}
                      <div className="col-md-12 pb-3">
                        <label htmlFor="images" className="login-text">
                          Upload Images
                        </label>
                        <input
                          type="file"
                          id="images"
                          className="avatar-input"
                          required
                          onChange={createProductImagesChange}
                          accept="image/*"
                          multiple
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="login-button mt-4 text-white"
                          disabled={btnloading}
                        >
                          {btnloading ? "Submitting..." : "Create Product"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminCreateProduct;

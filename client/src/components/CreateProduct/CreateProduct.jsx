import { useState } from "react";
import {
  validateTitle,
  validateDescription,
  validateImage,
  validateCategory,
  validateStock,
  validatePrice,
  validateRating,
  validateDiscount,
} from "./helpers/ProductValidation";
import { useDispatch } from "react-redux";
import { postProduct } from "../../redux/actions/postProduct";
import { useNavigate } from "react-router-dom";
import Category from "./Category";

import { categories } from "./helpers/FormHelpers";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    stock: 0,
    price: 0,
    discount: 0,
    rating: 0,
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    stock: "",
    price: "",
    discount: "",
    rating: "",
  });

  const [descriptionLength, setDescriptionLength] = useState(0);
  const maxDescriptionLength = 255;

  const handleTitleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      title: validateDescription(value),
    }));
  };

  const handleDescriptionChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      description: validateDescription(value),
    }));
    setDescriptionLength(value.length);
  };

  const handleImageChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      image: validateImage(value),
    }));
  };

  const handleCategoryChange = (selectedCategory) => {
    setInput((prevInput) => ({
      ...prevInput,
      category: selectedCategory,
      size: [],
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      category: validateCategory(selectedCategory),
    }));
  };

  // //****************************************************************** */
  const handleStockChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: parseFloat(value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      stock: validateStock(value),
    }));
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: parseFloat(value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      price: validatePrice(value),
    }));
  };

  const handleDiscountChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: parseFloat(value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      discount: validateDiscount(value),
    }));
  };

  const handleRatingChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: parseInt(value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      rating: validateRating(value),
    }));
  };
  //***************************************************************** */

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const fieldErrors = {
      title: validateTitle(input.title),
      description: validateDescription(input.description),
      category: validateCategory(input.category),
      image: validateImage(input.image),
      stock: validateStock(input.stock),
      price: validatePrice(input.price),
      discount: validateDiscount(input.discount),
      rating: validateRating(input.rating),
    };

    setErrors(fieldErrors);

    const hasErrors = Object.values(fieldErrors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }

    const updatedInput = {
      ...input,
      rating: [input.rating],
    };

    dispatch(postProduct(updatedInput));
    alert("Product Created Successfully");

    setInput({
      title: "",
      description: "",
      category: "",
      image: "",
      stock: 0,
      price: 0,
      discount: 0,
      rating: 0,
    });
    history("/admin/createProduct");
  }

  return (
    <div className="h-screen overflow-y-auto justify-center items-start md:inset-0 md:h-full dark:bg-neutral-950 flex">
      <div className="relative p-4 max-w-2xl h-screen md:h-auto font-general-sans w-full ">
        {/* <!-- content --> */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-zinc-950 sm:p-5 pb-[100px]">
          {/* <!--  header --> */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Product
            </h3>
          </div>
          {/* <!--  body --> */}
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={input.title}
                  name="title"
                  id="title"
                  placeholder="Type product name"
                  onChange={handleTitleChange}
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
                {errors.title && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.title}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <Category
                  categories={categories}
                  selectedCategory={input.category}
                  onSelectCategory={handleCategoryChange}
                />
                {errors.category && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.category}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image
                </label>
                <input
                  type="text"
                  value={input.image}
                  name="image"
                  id="image"
                  placeholder="Enter the image URL of the product"
                  onChange={handleImageChange}
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
                {errors.image && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.image}
                  </div>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  value={input.description}
                  name="description"
                  id="description"
                  rows="4"
                  placeholder="Write product description here"
                  onChange={handleDescriptionChange}
                  maxLength={maxDescriptionLength}
                  className="block p-2.5 w-full text-sm text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 bg-gray-50 rounded-lg border border-gray-300 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
                {errors.description && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.description}
                  </div>
                )}
                <span className="flex justify-end dark:text-white">
                  {`${descriptionLength}/${maxDescriptionLength}`}
                </span>
              </div>
              <div>
                <label
                  htmlFor="stock"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg  block w-full p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  onChange={handleStockChange}
                  placeholder="999"
                  required=""
                />
                {errors.stock && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.stock}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  autoComplete="off"
                  onChange={handlePriceChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg  block w-full p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="$2999"
                  required=""
                />
                {errors.price && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.price}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="discount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Discount
                </label>
                <input
                  type="number"
                  name="discount"
                  id="discount"
                  autoComplete="off"
                  onChange={handleDiscountChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg  block w-full p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="99%"
                  required=""
                />
                {errors.discount && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.discount}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="rating"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  autoComplete="off"
                  onChange={handleRatingChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg  block w-full p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="1/5"
                  required=""
                />
                {errors.rating && (
                  <div className="mb-3 text-normal text-red-500 ">
                    {errors.rating}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-black hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-neutral-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black dark:bg-gray-200 dark:hover:bg-white"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Add new product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;

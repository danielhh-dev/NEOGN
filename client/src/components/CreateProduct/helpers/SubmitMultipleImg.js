export default submitMultipleImg = async (files) => {
  try {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      const image = files[i];
      formData.append("image", image);
    }
    const result = await axios.post(
      "http://localhost:3001/api/products/testing",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

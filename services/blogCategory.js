export const getBlogCategories = async (axios) => {
  const { data } = await axios.get("/blog-categories");
  return data;
};

export const getBlogCategoryById = async (axios, id) => {
  const { data } = await axios.get(`/blog-categories/${id}`);
  return data;
};

export const createBlogCategory = async (axios, post) => {
  const { data } = await axios.post("/blog-categories", post);
  return data;
};

export const updateBlogCategory = async (axios, id, post) => {
  const { data } = await axios.put(`/blog-categories/${id}`, post);
  return data;
};

export const deleteBlogCategory = async (axios, id) => {
  const { data } = await axios.delete(`/blog-categories/${id}`);
  return data;
};

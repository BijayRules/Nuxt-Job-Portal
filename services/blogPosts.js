export const getBlogPosts = async (axios) => {
  const { data } = await axios.get("/blog-posts");
  return data;
};

export const getBlogPostById = async (axios, id) => {
  const { data } = await axios.get(`/blog-posts/${id}`);
  return data;
};

export const createBlogPost = async (axios, post) => {
  const { data } = await axios.post("/blog-posts", post);
  return data;
};

export const updateBlogPost = async (axios, id, post) => {
  const { data } = await axios.put(`/blog-posts/${id}`, post);
  return data;
};

export const deleteBlogPost = async (axios, id) => {
  const { data } = await axios.delete(`/blog-posts/${id}`);
  return data;
};

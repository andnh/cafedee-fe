import axios from "axios";

export const getBlogList = async () => {
  try {
    const res = await axios.get("http://localhost:8080/blog")
    return res.data
  } catch (e) {
    console.log("ERROR", e);
  }
}

export const getBlogDetail = async (id) => {
  try {
    const res = await axios.get(`http://localhost:8080/blog/view?id=${id}`)
    return res.data
  } catch (e) {
    console.log("ERROR", e);
  }
}

export const getBlogDetailByTag = async (tag) => {
  try {
    const res = await axios.get(`http://localhost:8080/blog/viewbytag?tag=${tag}`)
    return res.data
  } catch (e) {
    console.log("ERROR", e);
  }
}
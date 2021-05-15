import axios from "axios";

export const getBlogList = async () => {
  try {
    const res = await axios.get("http://localhost:8080/blog")
    return res.data
  } catch (e) {
    console.log("ERROR", e);
  }
}
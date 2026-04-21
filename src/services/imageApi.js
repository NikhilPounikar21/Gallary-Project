import axios from "axios";

export const fetchImages = async (page) => {
  const response = await axios.get(
    `https://picsum.photos/v2/list?page=${page}&limit=10`
  );

  return response.data;
};
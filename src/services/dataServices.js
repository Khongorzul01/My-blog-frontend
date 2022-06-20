const getBlogsData = async () => {
  return await fetch("http://localhost:5000/api/blog", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const dataServices = {
  getBlogsData,
};

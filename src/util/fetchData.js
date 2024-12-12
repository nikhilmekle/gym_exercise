export const exerciseOptions = {
  method: "GET",
  hostname: "exercisedb.p.rapidapi.com",
  port: null,
  path: "/exercises/bodyPartList",
  headers: {
    "x-rapidapi-key": "23b66eb0bamsh9ffac84fc754b36p186a89jsn0116960fa513",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "23b66eb0bamsh9ffac84fc754b36p186a89jsn0116960fa513",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!Array.isArray(data)) {
      console.error("Expected an array, received:", data);
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
};

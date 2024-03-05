let BASE_URL = "http://127.0.0.1:5500/assets/imgs"

getImg = async (url = BASE_URL) => {
    try {
      let response = await fetch(url);
      let data = await response.json()
      console.log(data)
      return data;
    } catch (error) {
      console.error("Aquí hubo un error:", error);
    }
  };
  
getImg();
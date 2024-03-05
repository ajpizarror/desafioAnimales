let BASE_URL = "http://127.0.0.1:5500/animales.json"

getData = async (url = BASE_URL) => {
    try {
      let response = await fetch(url);
      let data = await response.json()
      console.log(data)
      return data;
    } catch (error) {
      console.error("Aquí hubo un error:", error);
    }
  };
  
getData();
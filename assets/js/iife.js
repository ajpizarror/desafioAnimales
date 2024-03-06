export default (function ModuloApi() {
  let BASE_URL = "http://127.0.0.1:5500/animales.json";

  const getData = async (url = BASE_URL) => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    } catch (error) {
      console.error("Aquí hubo un error:", error);
    }
  };
  return { getData };
})();

// Fetch API

const apiKeys = "7nAy1xfk5t1An9zcEeomSiXyTsh8jsQR";

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKeys}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
    // console.log(url);
  })
  .catch(console.warn);

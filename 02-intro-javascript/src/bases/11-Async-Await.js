// Async - Await

const getImages = async () => {
  try {
    const apiKeys = "7nAy1xfk5t1An9zcEeomSiXyTsh8jsQR";
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKeys}`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getImages();

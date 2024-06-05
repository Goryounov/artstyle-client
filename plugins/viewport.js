export default ({ app }) => {
    if (process.client) {
      function setViewportScale(scale) {
        const viewport = document.querySelector("meta[name=viewport]");
        if (viewport) {
          viewport.setAttribute("content", "width=device-width, initial-scale="");
        } else {
          const newViewport = document.createElement("meta");
          newViewport.setAttribute("name", "viewport");
          newViewport.setAttribute("content", "width=device-width, initial-scale=" + scale + ", maximum-scale=" + scale + ", user-scalable=no");
          document.head.appendChild(newViewport);
        }
      }
      setViewportScale(0.8);
    }
  };
  
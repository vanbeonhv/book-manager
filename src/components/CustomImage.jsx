import React from "react";

const CustomImage = ({ className, src, alt, ...props }) => {
  const handleOnError = (e) => {
    e.target.src =
      "https://i.pinimg.com/originals/5f/60/36/5f6036ea0bccb9c6ac28ab6d7844297d.jpg";
  };
  return (
    <>
      {src ? (
        <img
          className={className}
          src={src}
          alt={alt}
          onError={handleOnError}
        />
      ) : (
        <img
          className={className}
          src="https://i.pinimg.com/originals/5f/60/36/5f6036ea0bccb9c6ac28ab6d7844297d.jpg"
          alt={alt}
        />
      )}
    </>
  );
};

export default CustomImage;

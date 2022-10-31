import React from "react";

const CustomImage = ({ className, src, alt }) => {
  const handleOnError = (e) => {
    e.target.src =
      "https://i.pinimg.com/564x/fa/45/38/fa45385bff6d9feab48f73a65e164ccf--wooden-books-blank-book.jpg";
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
          src="https://i.pinimg.com/564x/fa/45/38/fa45385bff6d9feab48f73a65e164ccf--wooden-books-blank-book.jpg"
          alt={alt}
        />
      )}
    </>
  );
};

export default CustomImage;

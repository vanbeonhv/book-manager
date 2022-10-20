import React from "react";

const CustomImage = ({ className, src, alt, ...props }) => {
  const handleOnError = (e) => {
    e.target.src =
      "https://img.freepik.com/premium-vector/clear-white-blank-book-cover_88272-1279.jpg?w=826";
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
          src="https://img.freepik.com/premium-vector/clear-white-blank-book-cover_88272-1279.jpg?w=826"
          alt={alt}
        />
      )}
    </>
  );
};

export default CustomImage;

import React from "react";

const CustomImage = ({ className, src, alt }) => {
  const handleOnError = (e) => {
    e.target.src =
      "https://static.wikia.nocookie.net/souo/images/4/47/Old_Book.jpg/revision/latest/scale-to-width-down/220?cb=20181030100841";
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
          src="https://static.wikia.nocookie.net/souo/images/4/47/Old_Book.jpg/revision/latest/scale-to-width-down/220?cb=20181030100841"
          alt={alt}
        />
      )}
    </>
  );
};

export default CustomImage;

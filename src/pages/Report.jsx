import React from "react";

const Report = () => {
  return (
    <div>
      <div className="row">
        <div className="col-5 bg-warning p-24 m-32 rounded-4">
          <div class="row justify-content-center align-items-center g-2">
            <div className="col-6">
              <p className="mb-0">New update</p>
              <p className="mb-0 fw-bold">The night ship</p>
            </div>
            <div className="col-6">
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781668015179_p0_v5_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D"
                alt="new-book"
                className="h-200"
              />
            </div>
          </div>
        </div>
        <div className="col-5 bg-new p-24 m-32 rounded-4">
          <div class="row justify-content-center align-items-center g-2">
            <div className="col-6">
              <p className="mb-0">The most borrowing book</p>
              <p className="mb-0 fw-bold">The night ship</p>
              <p className="mb-0 fst-italic">
                Borrowed quantity:{" "}
                <span className="fw-bold text-danger">40</span>
              </p>
            </div>
            <div className="col-6">
              <img
                src="https://m.media-amazon.com/images/I/81gepf1eMqL.jpg"
                alt="To Kill a Mockingbird"
                className="h-200"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5 bg-borrowing p-24 m-32 rounded-4">
          <div class="row justify-content-center align-items-center g-2">
            <div className="col-6">
              <p className="mb-0">The most active user: </p>
              <p className="mb-0 fw-bold">Lexine Kovacs</p>
            </div>
            <div className="col-6">
              <img
                src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg"
                alt="new-book"
                className="h-200 rounded-5"
              />
            </div>
          </div>
        </div>
        <div className="col-5 bg-old p-24 m-32 rounded-4">
          <div class="row justify-content-center align-items-center g-2">
            <div className="col-6">
              <p className="mb-0">Last borrowing:</p>
              <p className="mb-0 fw-bold">Sib Miell</p>
              <p className="mb-0 fw-bold fst-italic">
                Flu: The Great Influenza Pandemic of 1918
              </p>
            </div>
            <div className="col-6">
              <img
                src="https://m.media-amazon.com/images/I/51ruOg63+UL._AC_SY780_.jpg"
                alt="To Kill a Mockingbird"
                className="h-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;

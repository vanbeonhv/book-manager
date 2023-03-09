import React, { useEffect, useState } from 'react';
import { IoBookSharp } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import { BiTransferAlt } from 'react-icons/bi';
import { BsDownload } from 'react-icons/bs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Report.css';
import BACKEND_LINK from '../constant';
const Report = () => {
  const navigate = useNavigate();
  const [totalUser, setTotalUser] = useState([]);
  const [borrow, setBorrow] = useState([]);
  const [totalBook, setTotalBook] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const userURL = `${BACKEND_LINK}/api/students`;
      const borrowURL = `${BACKEND_LINK}/api/borrow`;
      const bookURL = `${BACKEND_LINK}/api/books`;

      const responses = await Promise.all([
        axios.get(userURL),
        axios.get(borrowURL),
        axios.get(bookURL)
      ]).catch((err) => {
        throw err;
      });
      const userData = await responses[0].data;
      const borrowData = await responses[1].data;
      const bookData = await responses[2].data;
      setTotalUser(userData.length);
      setBorrow(borrowData.length);
      setTotalBook(bookData.length);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className='row my-24'>
        <div className='col-lg-3 col-sm-6 p-8'>
          <div
            className='report-card rounded-4 bg-report-1 d-flex justify-content-center align-items-center py-24 cursor-pointer'
            onClick={() => navigate('../books')}
          >
            <div className=' py-12 text-center'>
              <div className='p-12 rounded-circle '>
                <IoBookSharp className='fs-1 text-report-1-bold opacity-75' />
              </div>
              <h3 className='fs-2 text-report-1-bold fw-semibold my-12'>
                {totalBook * 110}
              </h3>
              <p className='mt-12 text-report-1-bold'>Total books</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-sm-6 p-8'>
          <div
            className='report-card rounded-4 bg-report-2 d-flex justify-content-center align-items-center py-24 cursor-pointer'
            onClick={() => navigate('../students-manager')}
          >
            <div className=' py-12 text-center'>
              <div className='p-12 rounded-circle '>
                <AiOutlineUser className='fs-1 text-report-2-bold opacity-75' />
              </div>
              <h3 className='fs-2 text-report-2-bold fw-semibold my-12'>
                {totalUser * 110}
              </h3>
              <p className='mt-12 text-report-2-bold'>Total users</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-sm-6 p-8'>
          <div
            className='report-card rounded-4 bg-report-3 d-flex justify-content-center align-items-center py-24 cursor-pointer'
            onClick={() => navigate('../borrowing-manager')}
          >
            <div className=' py-12 text-center'>
              <div className='p-12 rounded-circle '>
                <BiTransferAlt className='fs-1 text-report-3-bold opacity-75' />
              </div>
              <h3 className='fs-2 text-report-3-bold fw-semibold my-12'>
                {borrow * 110}
              </h3>
              <p className='mt-12 text-report-3-bold'>Total borrow - return</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-sm-6 p-8'>
          <div className='report-card rounded-4 bg-report-4 d-flex justify-content-center align-items-center py-24'>
            <div className=' py-12 text-center'>
              <div className='p-12 rounded-circle '>
                <BsDownload className='fs-1 text-report-4-bold opacity-75' />
              </div>
              <h3 className='fs-2 text-report-4-bold fw-semibold my-12'>
                750k
              </h3>
              <p className='mt-12 text-report-4-bold'>Total download</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-24'>
        <div className='col-12 px-0'>
          <img
            src='https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Languages_1112x223_blank.jpg'
            alt=''
            className='w-100 rounded-3'
          />
        </div>
      </div>

      {/* <div className="row">
        <div className="col-sm-12 col-lg-6 p-12">
          <div className="row justify-content-center align-items-center g-2 bg-warning rounded-4 p-32">
            <div className="col-6">
              <p className="mb-0 ">In coming book</p>
              <p className="mb-0 fw-bold">Fairy Tale</p>
            </div>
            <div className="col-6">
              <img
                src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6680/9781668002179.jpg"
                alt="new-book"
                className="h-200"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 p-12">
          <div className="row justify-content-center align-items-center g-2 bg-new rounded-4 p-32">
            <div className="col-6">
              <p className="mb-0">The most borrowing book</p>
              <p className="mb-0 fw-bold">The night ship</p>
              <p className="mb-0 fst-italic">
                Borrowed quantity:
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
        <div className="col-sm-12 col-lg-6 p-12">
          <div className="row justify-content-center align-items-center g-2 bg-report-1 rounded-4 p-32">
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
        <div className="col-sm-12 col-lg-6 p-12">
          <div className="row justify-content-center align-items-center g-2 bg-report-4 rounded-4 p-32">
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
      </div> */}
    </div>
  );
};

export default Report;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Cardspage.css';
import Dash from '../Dashboard/Dash';

const Cardspage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://frame-api-five.vercel.app/user/fetch');
        setData(response.data.fetch);
        console.log(response.data.fetch);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const redirect = (title, category, video_link, video_link2, i_frame) => {
    navigate("/details", { state: { title, category, video_link, video_link2, i_frame } });
  };

  const filteredData = data.filter((item) => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="products-container">
        <div className="product-grid">
          {filteredData.map((item, index) => (
            <div key={index} className="product-card">
              <div className="redirect" onClick={() => redirect(item.title, item.category, item.video_link, item.video_link2, item.i_frame)}>
                <h3>Title: {item.title}</h3>
                <h3>Category: {item.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Cardspage;

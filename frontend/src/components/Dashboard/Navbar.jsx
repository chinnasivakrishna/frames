import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';
import { Card, Col, Row } from 'antd';
import { Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function SimpleSlider() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const lastThreeItems = data.slice(-3).reverse(); 

  const redirect = (title, category, video_link, video_link2, i_frame) => {
    navigate("/details", { state: { title, category, video_link, video_link2, i_frame } });
  };


  return (
    <div className="slider-container">
      <div className="mt-70">
        <center>
          <Slider {...settings}>
            <div>
              <img src="https://picsum.photos/seed/picsum/100/200" alt="image1" className="image" />
            </div>
            <div>
              <img src="https://picsum.photos/id/1/367/260" alt="image2" className="image" />
            </div>
            <div>
              <img src="https://picsum.photos/id/6/367/260" alt="image3" className="image" />
            </div>
            <div>
              <img src="https://picsum.photos/id/5/367/260" alt="image4" className="image" />
            </div>
            <div>
              <img src="https://picsum.photos/id/3/367/260" alt="image5" className="image" />
            </div>
            <div>
              <img src="https://picsum.photos/id/2/367/260" alt="image6" className="image" />
            </div>
          </Slider>

          <div>
            <Grid container spacing={3} style={{ padding: 5 }} >
              <Grid item xs={12}></Grid>
              <Grid item xs={12} style={{ padding: 20 }}>
                <Paper style={{ height: 240 }}>
                  <Typography variant="h6" align="center" style={{ padding: 20 }}>
                    Recently Updated
                  </Typography>
                  <Row gutter={16} style={{ padding: 20, textAlign: "left" }}>
                    {lastThreeItems.map((item, index) => (
                      <Col key={index} span={8}>
                        <Card title="" bordered={20}  onClick={() => redirect(item.title, item.category, item.video_link, item.video_link2, item.i_frame)}>
                          <p>Name: {item.name}</p>
                          <p>Category: {item.category}</p>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </center>
      </div>
    </div>
  );
}

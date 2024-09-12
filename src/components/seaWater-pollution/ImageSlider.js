import React from 'react';
import Slider from 'react-slick';
import { Box , Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from "./Images/images1.jpg";
import Image2 from "./Images/images2.jpg";
import Image3 from "./Images/images6.jpg";
import Image4 from "./Images/images8.jpg";


const images = [Image1,Image2,Image3,Image4];

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((url, index) => (
                    <Box key={index} sx={{ position: 'relative', width: '91%', height: '90%' }}>
                        <Box
                            component="img"
                            src={url}
                            alt={`Carousel Image ${index + 1}`}
                            sx={{ width: '90%', height: '350px', objectFit: 'cover' , marginBottom : "1%"}}
                        />
                    </Box>
                ))}
            </Slider>
            <Box
                sx={{
                    position: 'absolute',
                    top: '30%',
                    left: '60%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h2" component="h2"  sx={{ fontFamily: "'Playfair Display', serif",  fontSize: '2.5rem' }} >
                    Sea Water Level Identification
                </Typography>
            </Box>
        </div>
    );
}

export default ImageSlider;

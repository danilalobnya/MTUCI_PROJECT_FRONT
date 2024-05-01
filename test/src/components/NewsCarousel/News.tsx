import React from 'react';
import './Carousel.css';
import { Card, CardBody, CardFooter, Image, Divider, Text, Heading, Stack } from '@chakra-ui/react';
import Logo from './images_static/Logo.jpeg';
import login from './images_static/login.jpeg';
import slavik from './images_static/Slava.jpeg';
import eva from './images_static/Elfi.jpeg'
import Flickity from 'react-flickity-component';

let flickityOptions = {
    wrapAround: true,
    autoPlay: 2500
}


const papers = {
  id: [1, 2, 3, 4],
  tit: ['login', 'Logo', 'search'],
  image: [Logo, login, slavik, eva]
}


export default function News() {
  return (
    <Flickity 
      className="Slider"
      elementType="div"
      options={ flickityOptions }
    >
    {papers['id'].map((index) => {
            return (
              <Card maxW='sm'>
                <CardBody key={index}>
                  <Image 
                    width='1300px'
                    left='800px'
                    height='600px'
                    src={papers['image'][index - 1]}
                  />
                </CardBody>
              </Card>
              );
        }
    )}
    </Flickity>
    );
}
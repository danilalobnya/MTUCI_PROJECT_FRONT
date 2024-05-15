import React from 'react';
import './Carousel.css';
import { Card, CardBody, CardFooter, Image, Divider, Text, Heading, Stack } from '@chakra-ui/react';
import img1 from '../../ui/Images/Rectangle 61.png'
import Flickity from 'react-flickity-component';
import { useContext } from 'react';


let flickityOptions = {
    wrapAround: true,
    autoPlay: 2500
}


const papers = {
  id: [1, 2, 3, 4],
  tit: ['login', 'Logo', 'search'],
  image: [img1, img1, img1, img1]
}


export const News: React.FC = () =>{
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
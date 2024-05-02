import React from 'react';
import './Carousel.css';
import { Card, CardBody, CardFooter, Image, Divider, Text, Heading, Stack } from '@chakra-ui/react';
import img1 from './Images/Rectangle 19.png'
import img2 from './Images/Rectangle 20.png'
import img3 from './Images/Rectangle 21.png'
import img4 from './Images/lowericon1.png'
import Flickity from 'react-flickity-component';

interface flickityOptionsProps {
  wrapAround: boolean
  autoPlay: number
}

let flickityOptions: flickityOptionsProps = {
    wrapAround: true,
    autoPlay: 2500
}

interface papersProps {
  id: number[]
  tit: string[]
  image: string[]
}

const papers: papersProps = {
  id: [1, 2, 3, 4],
  tit: ['login', 'Logo', 'search'],
  image: [img1, img2, img3, img4]
}


export const News: React.FC = () => {
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
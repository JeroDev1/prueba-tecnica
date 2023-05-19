import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Image, Text, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import { StarIcon } from '@chakra-ui/icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Carrousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://gradistore-spi.herokuapp.com/products/all")
      .then((response) => response.json())
      .then((data) => {
        const productsArray = data.products.nodes;
        console.log(productsArray);
        if (Array.isArray(productsArray)) {
          setProducts(productsArray);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const calculateStars = (tags) => {
    const tagNumbers = tags
      .filter((tag) => !isNaN(tag))
      .map((tag) => Number(tag));
    const sum = tagNumbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const average = sum / tagNumbers.length;
  
    let stars = 0;
  
    if (average >= 0 && average < 100) {
      stars = 1;
    } else if (average >= 100 && average < 200) {
      stars = 2;
    } else if (average >= 200 && average < 300) {
      stars = 3;
    } else if (average >= 300 && average < 400) {
      stars = 4;
    } else {
      stars = 5;
    }
  
    return stars;
  };

  const renderStars = (numStars) => {
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      stars.push(<StarIcon key={i} color='#ffdf00' />);
    }

    return stars;
  };

  return (
    <Box className='carousel-container' w='100vw' marginTop='20px'>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={23.23}
        itemWidth={1}
        itemHeight={1}
      >
        {products.map((product) => (
          <div key={product.id} className='div-product'>
            <Card w='350px' h='550px' boxShadow='outline'>
              <Image src={product.featuredImage.url} alt={product.title} maxWidth='100%' />

              <CardBody>
                <Heading as='h1' size='md' textAlign='initial' paddingTop='10px'>
                  {product.title}
                </Heading>
                <Flex justify='space-between' align='center' paddingTop='10px'>
                  <Box>
                    {renderStars(calculateStars(product.tags))}
                  </Box>
                  <Box>
                    <Text>
                      Precio:{' '}
                      <del>{product.prices.min.amount.currencyCode}</del>{' '}
                      {product.prices.max.amount.currencyCode} {product.prices.max.amount}
                    </Text>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};
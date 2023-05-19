import React, { createContext } from 'react';

export const CarrouselContext = createContext();

export const CarrouselProvider = ({ children }) => {
  const nextSlide = () => {
    // Lógica para pasar al siguiente slide
  };

  const prevSlide = () => {
    // Lógica para pasar al slide anterior
  };

  return (
    <CarrouselContext.Provider value={{ nextSlide, prevSlide }}>
      {children}
    </CarrouselContext.Provider>
  );
};
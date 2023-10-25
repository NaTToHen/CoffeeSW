import React from 'react';
import ReactDOM from 'react-dom';
import Cafe from './Cafe.js'
import { Carousel } from '@trendyol-js/react-carousel';

function SlideCatalogo() {
  return(
	<Carousel>
		<Cafe />
		<Cafe />
		<Cafe />
		<Cafe />
	</Carousel>
  )
}

export default SlideCatalogo


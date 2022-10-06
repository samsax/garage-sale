import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import About from '../../components/About/About';
import CardList from '../../components/CardList/CardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import ProductsBanner from '../../components/ProductsBanner/ProductsBanner';
import ProductModal from '../../components/ProductModal/ProductModal';

const contentful = require('contentful');

function Home() {
  const queryParams = new URLSearchParams(window.location.search);
  const key = queryParams.get('key') === process.env.REACT_APP_QUERY_KEY;

  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  const [products, setProducts] = useState([]);
  const featuredProduct = useSelector((state) => state.featuredProduct.product);

  useEffect(() => {
    client.getEntries({
      content_type: 'product',
    }).then(((response) => {
      setProducts(response.items.sort((a, b) => a.fields.name.localeCompare(b.fields.name)));
    }));
  }, []);

  return (
    <div className="home">
      <div className="home__content">
        <Navigation />
        <Header />
        <About />
        {key ? (
          <CardList items={products} />
        ) : (
          <ProductsBanner />
        )}
        {
          featuredProduct
          && <ProductModal {...featuredProduct} />
        }
      </div>
      <Footer />
    </div>
  );
}

export default Home;

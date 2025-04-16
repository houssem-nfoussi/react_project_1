// components/QuotesCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import './QuoteCarousel.css';

const quotes = [
    {
      author: 'Mahatma Gandhi',
      text: "الطعام الذي يُهدر هو ظل للجشع والإهمال، بينما يجب أن يُعامل الغذاء باحترام وحذر.",
      image: "/images/gandhi.jpg"
    },
    {
      author: 'Jane Goodall',
      text: "كل قطعة طعام تُهدر تُمثل فرصة ضائعة لإنقاذ حياة. يجب أن نتوقف عن التبذير.",
      image: "/images/jane.jpg"
    },
    {
      author: 'Tristram Stuart',
      text: "إهدار الطعام هو أحد أكبر التهديدات للبيئة، ومع ذلك يمكننا منعه بخطوات بسيطة يوميًا.",
      image: "/images/tristram.jpg"
    },
    {
      author: 'Francis Bacon',
      text: "لا يوجد شيء في العالم أكثر سوءًا من إهدار الطعام في وقت يحتاج فيه العالم إلى غذاء.",
      image: "/images/bacon.jpg"
    },
  ];
  
const QuotesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,  // Removed the arrows
  };

  return (
    <div className="quote-carousel-container">
      <Slider {...settings}>
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <FaQuoteLeft className="quote-icon" />
            <p className="quote-text">"{quote.text}"</p>
            <div className="quote-author">
              <img src={quote.image} alt={quote.author} className="author-img" />
              <div>
                <h4 className="author-name">{quote.author}</h4>
                <p className="author-role">{quote.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default QuotesCarousel;

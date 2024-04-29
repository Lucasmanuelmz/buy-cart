import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;


  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} color="#ffc107" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={stars.length} color="#ffc107" />);
  }

  while (stars.length < 5) {
    stars.push(<FaStar key={stars.length} color="#e0e0e0" />);
  }

  return <div>{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;

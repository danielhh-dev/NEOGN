const calculateAverageRating = (ratingArray)=> {
    
    console.log('RATINGARRAY',ratingArray);
    const validRatings = ratingArray.filter(rating => typeof rating === 'number' && !isNaN(rating));
    const totalRating = validRatings.reduce((sum, rating) => sum + rating, 0);
    return validRatings.length > 0 ? totalRating / validRatings.length : 0;
  }


  module.exports = {calculateAverageRating};
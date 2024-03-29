
import { FC } from 'react';
import { Review } from '../../types/reviews';
import { dateAdapter } from '../../utils/date';
import { setRating } from '../../utils/set-rating';

const ReviewPost:FC<Omit<Review, 'id'>> = ({date, rating, comment, user}) => (
  <li className='reviews__item'>
    <div className='reviews__user user'>
      <div className='reviews__avatar-wrapper user__avatar-wrapper'>
        <img className='reviews__avatar user__avatar' src={user.avatarUrl} width='54' height='54' alt='Reviews avatar' />
      </div>
      <span className='reviews__user-name'>
        {user.name}
      </span>
    </div>
    <div className='reviews__info'>
      <div className='reviews__rating rating'>
        <div className='reviews__stars rating__stars'>
          <span style={{width: setRating(rating)}}></span>
          <span className='visually-hidden'>Rating</span>
        </div>
      </div>
      <p className='reviews__text'>
        {comment}
      </p>
      <time className='reviews__time' dateTime='2019-04-24'>{dateAdapter(date)}</time>
    </div>
  </li>
);

export default ReviewPost;

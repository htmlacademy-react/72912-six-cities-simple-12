import { useAppSelector } from '../../hooks';
import { getSelectedCity } from '../../store/filter/selectors';

const MainEmpty = () => {
  const selectedCity = useAppSelector(getSelectedCity);

  return (
    <div className='cities__places-container cities__places-container--empty container'>
      <section className='cities__no-places'>
        <div className='cities__status-wrapper tabs__content'>
          <b className='cities__status'>No places to stay available</b>
          <p className='cities__status-description'>We could not find any property available at the moment in {selectedCity}</p>
        </div>
      </section>
      <div className='cities__right-section'></div>
    </div>
  );
};

export default MainEmpty;

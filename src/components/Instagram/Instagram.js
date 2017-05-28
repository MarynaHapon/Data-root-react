import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Instagram.css';
import Link from '../Link';
import instaimage from './instaimage.png';
import Photo from '../Photo';
import WhiteButton from '../WhiteButton';

class Instagram extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2 className={s.instagramHeader}>Краще один раз подивитись</h2>
          <p className={s.instagramText}>Фото проектів з нашого Instagram</p>
          <div className={s.imageContainer}>
            <div className={s.content}>
              <Link to="/">
                <Photo source={instaimage} altText="blablabla" />
              </Link>
              <p>#onyx #m-selection</p>
            </div>
            <div className={s.content}>
              <Link to="/">
                <Photo source={instaimage} altText="blablabla" />
              </Link>
              <p>#onyx #m-selection</p>
            </div>
            <div className={s.content}>
              <Link to="/">
                <Photo source={instaimage} altText="blablabla" />
              </Link>
              <p>#onyx #m-selection</p>
            </div>
            <div className={s.content}>
              <Link to="/">
                <Photo source={instaimage} altText="blablabla" />
              </Link>
              <p>#onyx #m-selection</p>
            </div>
            <div className={s.content}>
              <Link to="/">
                <Photo source={instaimage} altText="blablabla" />
              </Link>
              <p>#onyx #m-selection</p>
            </div>
            <div className={s.content}>
              <Link to="/">
                <Photo source={instaimage} altText="blablabla" />
              </Link>
              <p>#onyx #m-selection</p>
            </div>
          </div>
          <div className={s.btnWrapper}>
            <WhiteButton>
            Всі проекти
            </WhiteButton>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Instagram);

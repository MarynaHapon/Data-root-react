import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './CatalogItem.css';

import Link from '../Link';

class CatalogItem extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRejected,
    
    
    altText: PropTypes.string.isRequired,
  };


  render () {
    const { title, 
            source, altText, 
            source2, altText2, 
            source3, altText3,
            source4, altText4,
            source5, altText5,
          } = this.props;
    
    
    return (
      <div className={s.root}>
        <div className={s.container}>
      
          <div className={s.titleWrapper}>
            <p> {title} </p>
          </div>
          
          <div className={s.leftContainer}>
            <div> 
      
            </div>
      
            <div className={s.imageWrapper}>
              <img src={source} alt={altText} />
              <img src={source2} alt2={altText} />
              <img src={source3} alt3={altText} />
              <img src={source4} alt4={altText} />
              <img src={source5} alt5={altText} />
            </div>  
          </div>
      
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CatalogItem);
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as instaFlickrActions from '../../actions/instaFlickrActions';

const ImageCard = ({title, img, author}) => {
  return (
    <article className="image-card">
      <img src={img} alt="" className="image-card__img"/>
      <div className="image-card-overlay">
        <div className="image-card-overlay__title">{title}</div>
        <div className="image-card-overlay__save"></div>
      </div>
    </article>
  )
};

export default ImageCard;

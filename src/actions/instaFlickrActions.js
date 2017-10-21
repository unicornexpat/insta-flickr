import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import ajax from '../api/ajax';
import Flickr from '../api/flickr';

export function loadFeedsSuccess(items) {
  return {type: types.LOAD_FEEDS_SUCCESS, items};
}

export function loadFeeds() {
  return (dispatch) => {
    Flickr.getFeeds().then(items => dispatch(loadFeedsSuccess(items)));
  };
}

import api from '../../api/axiosServices'
import * as actionTypes from '../types'

export const GetListBlogs = params => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_LIST_BLOGS_LOADING });

    setTimeout(() => {
      api.get('/items/content', params)
      .then(
        data => dispatch({ type: actionTypes.GET_LIST_BLOGS_SUCCESS, response: data.data }),
        error => dispatch({ type: actionTypes.GET_LIST_BLOGS_ERROR, error: error })
      )
    }, 5000);
   
  } catch (error) {
    dispatch({ type: actionTypes.GET_LIST_BLOGS_ERROR, error: error })
  }
}

export const GetBanner = params => {
  return dispatch => {
    api.get('/items/banner_item', params)
      .then(
        (response) => {
          if (response.status === 200) {
            dispatch({ type: actionTypes.GET_BANNER, response: response.data })
          }
        }
      )
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.log('fail!');
        }
      })
  }
}
export const GetMetaData = params => {
  return dispatch => {
    api.get('/items/meta', params)
      .then(
        (response) => {
          if (response.status === 200) {
            dispatch({ type: actionTypes.GET_METADATA, response: response.data })
          }
        }
      )
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.log('fail!');
        }
      })
  }
}
export const PostContact = params => {
  return dispatch => {
    api.post('/items/contact', params)
      .then(
        (response) => {
          // console.log({response});
          if (response.status === 200) {
            dispatch({ type: actionTypes.POST_CONTACT, response: response.data })
          }
        }
      )
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.log('fail!');
        }
      })
  }
}
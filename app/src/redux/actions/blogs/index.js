
import api from '../../../api/axiosServices'

export const GetListBlogs = params => {
  return dispatch => {
    api.get('/items/content', params)
    .then(
      (response) => {
        if (response.status === 200) {
          dispatch({ type: 'GET_LIST_BLOGS', response: response.data })
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
export const GetBanner = params => {
  return dispatch => {
    api.get('/items/banner_item', params)
    .then(
      (response) => {
        if (response.status === 200) {
          dispatch({ type: 'GET_BANNER', response: response.data })
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
          dispatch({ type: 'GET_METADATA', response: response.data })
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
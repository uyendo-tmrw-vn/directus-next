
import api from '../../../api/axiosServices'

export const GetListBlogs = params => {
  return dispatch => {
    api.get('/items/blogs', params)
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
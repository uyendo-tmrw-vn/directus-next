import * as actionTypes from '../types'

const initialState = {
  loading: false,
  error: ''
}

const BlogsReducer = (state = initialState, action) => {
  switch (action.type) {

    // list blog 
    case actionTypes.GET_LIST_BLOGS_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.GET_LIST_BLOGS_SUCCESS: {
      return {
        ...state,
        GetListBlogs: action.response.data,
        loading: false
      }
    }
    case actionTypes.GET_LIST_BLOGS_ERRORL: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    case actionTypes.GET_BANNER:
      return {
        ...state,
        GetBanner: action.response.data,
      }
    case actionTypes.GET_METADATA:
      return {
        ...state,
        GetMetadata: action.response.data,
      }
    case actionTypes.POST_CONTACT:
      return {
        ...state,
        PostContact: action.response.data,
      }
    default:
      return { ...state }
  }
}
export default BlogsReducer

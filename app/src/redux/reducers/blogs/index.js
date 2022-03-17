const initialState = {
  }
  
  const BlogsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_LIST_BLOGS':
        return {
          ...state,
          GetListBlogs: action.response.data,
        }
      default:
        return { ...state }
    }
  }
  export default BlogsReducer
  
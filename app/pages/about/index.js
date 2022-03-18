import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useEffect } from 'react'
import { GetListBlogs } from '../../src/redux/actions/blogs'

const codeStyle = {
  background: '#ebebeb',
  width: '90vw',
  padding: 10,
  border: '1px solid grey',
  marginTop: 50,
  marginBottom: 50,
  marginLeft:'auto',
  marginRight:'auto',
  overflowX:'auto'
}

const ShowReduxState = () => {

  const reducers = useSelector((state) => state.BlogsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if (reducers&& Object.keys(reducers).length ===0) {
      dispatch(GetListBlogs())
    }
  }, [reducers])

  return (
    <>
      <pre style={codeStyle}>
        <code>{JSON.stringify(reducers, null, 4)}</code>
      </pre>
    </>
  )
}

export default ShowReduxState

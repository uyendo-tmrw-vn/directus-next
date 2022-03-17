import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useEffect } from 'react'
import { GetListBlogs } from '../../src/redux/actions/blogs'

const codeStyle = {
  background: '#ebebeb',
  width: 800,
  padding: 10,
  border: '1px solid grey',
  marginBottom: 10,
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
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </>
  )
}

export default ShowReduxState

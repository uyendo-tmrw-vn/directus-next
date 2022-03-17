import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

import styles from '../src/styles/Home.module.scss'
import { GetListBlogs } from '../src/redux/actions/blogs'

const Index = () => {

  const [listBlogs, setListBlogs] = useState([])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetListBlogs())
  }, [dispatch])

  const reducers = useSelector((state) => state.BlogsReducer)

  useEffect(() => {
    if (reducers && reducers.GetListBlogs) {
      setListBlogs(reducers.GetListBlogs)
    }
  }, [reducers])

  return (
    <>
      <div className='uyendo'>
        <ul>
          {
            listBlogs && listBlogs.length && listBlogs.map((item,key) => {
              return <li key={key}>id:{item.id} - {item.description} - {item.date_created}</li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Index

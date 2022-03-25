import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

import moment from 'moment'
import { Loading } from '@/components/Loading'
import { GetBanner, GetListBlogs } from '@/redux/actions/blogAction'
import { Carousel } from 'antd';


const Home = () => {

  const [listBlogs, setListBlogs] = useState([])
  const [banner, setBanner] = useState()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetListBlogs())
    dispatch(GetBanner())
  }, [dispatch])

  const reducers = useSelector((state) => state.BlogsReducer)

  useEffect(() => {
    console.log({ reducers });
    if (reducers && reducers.GetBanner) {
      setBanner(reducers.GetBanner)
    }
    if (reducers && reducers.GetListBlogs) {
      setListBlogs(reducers.GetListBlogs)
    }
  }, [reducers])

  return (
    <>
      {reducers.loading && <Loading />}
      <div className="bg-gray-200 font-sans leading-normal tracking-normal">
        <Carousel autoplay>
          {banner && banner.length > 0 && banner.map((item, key) => {
            return <div key={key} className="w-full m-0 p-0 bg-cover bg-center">
              <div className="w-full m-0 p-0 bg-cover bg-center" style={{ backgroundImage: `url( ${process.env.API_URL}/assets/${item.image})`, height: '60vh', maxHeight: '460px' }}></div>
            </div>
          })
          }
        </Carousel>

        {/* <!--Container--> */}
        <div className="container px-4 md:px-0 max-w-6xl mx-auto ">
          <div className="mx-0 sm:mx-6">
            <div className=" w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
              {/* <!--Posts Container--> */}
              <div className="flex flex-wrap justify-between -mx-3">
                {
                  listBlogs && listBlogs.length > 0 && listBlogs.map((item, key) => {
                    return <div key={key + 1} className="w-full md:w-1/3 px-3 py-6 flex flex-col ">
                      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <div className="flex flex-wrap no-underline hover:no-underline flex-col h-[100%]">
                          <Link href={`/blog-detail/${item.slug}`}>
                            <a className="cursor-pointer h-48 position-relative overflow-hidden block"><img src={item?.image ? `${process.env.API_URL}/assets/${item?.image}` : 'https://cdn.directus.io/docs/v9/reference/files/original-20220216A.jpg'} className="w-full rounded-t" /></a>
                          </Link>
                          <div className='p-6 flex-1 flex flex-col justify-between'>
                            <div>
                              <p className="w-full text-gray-600 text-xs md:text-sm">{moment(item.date_created).format('LLLL')}</p>
                              <Link href={`/blog-detail/${item.slug}`}>
                                <a className="w-full font-bold text-xl text-gray-900 d-block leading-3">{item.title}</a>
                              </Link>
                            </div>
                            <div className="flex items-center justify-between mt-5">
                              <Link href={`/blog-detail/${item.slug}`}>
                                <a className="font-italic d-block text-sm">Read more...</a>
                              </Link>
                              {/* <img src={item?.image ? `${process.env.API_URL}/assets/${item?.user_created}` : 'https://cdn.directus.io/docs/v9/reference/files/original-20220216A.jpg'} className="w-8 h-8 rounded-full mr-4 avatar" />
                              <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

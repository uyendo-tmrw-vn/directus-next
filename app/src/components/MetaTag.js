import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMetaData } from '../redux/actions/blogs'

const MetaTag = ({ title, description, ogType, ogImage, twImage }) => {
  const router = useRouter()
  const [dataMeta, setDataMeta] = useState()
  const dispatch = useDispatch()
  const reducers = useSelector((state) => state.BlogsReducer)

  useEffect(() => {
    dispatch(GetMetaData())
  }, [dispatch])

  useEffect(() => {
    if (reducers && reducers.GetMetadata) {
      setDataMeta(reducers.GetMetadata)
    }
  }, [reducers])

  return (
    <Head>
      {
        dataMeta && <>
          <title>{dataMeta.site_name}</title>
          <link rel="icon" href={`${process.env.NEXT_PUBLIC_GRAPHQL}/assets/${dataMeta?.site_favicon}`} />
          <meta name="robots" content="follow, index" />
          <meta name="description" content={dataMeta.site_description} />
          <meta property="og:url" content={`${process.env.NEXT_PUBLIC_GRAPHQL}${router.asPath}`} />
          <meta property="og:type" content={ogType} />
          <meta property="og:site_name" content={dataMeta.site_name} />
          <meta property="og:description" content={dataMeta.site_description} />
          <meta property="og:title" content={dataMeta.site_name} />
        </>
      }
    </Head>
  )
}

export default MetaTag
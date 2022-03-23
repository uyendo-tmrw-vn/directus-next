import { Provider } from 'react-redux'
import { useStore } from '../src/redux/store'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';

import { animated, Transition } from "react-spring";

import { ActiveLink } from '../src/hooks'

import '../src/styles/index.scss'
import { MetaTag } from '../src/components';

const codeStyle = {
  background: '#ebebeb',
  width: '90vw',

}

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const router = useRouter();
  const items = [
    {
      id: router.route,
      Component,
      pageProps,
    },
  ];
  return (
    <Provider store={store}>
      <div>
        <MetaTag/>

        {/* <!--Nav--> */}
        <nav className="menu bg-gray-900 p-4 mt-0 w-full fixed ">
          <div className="container mx-auto flex items-center">
            <div className="flex text-white font-extrabold">
              <Link className="flex text-white text-base no-underline hover:text-white hover:no-underline" href="/">
                👻 DeMo
              </Link>
            </div>
            <div className="flex pl-4 text-sm">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="mr-2">
                  <ActiveLink activeClassName="active" href="/">
                    <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2">HOME</a>
                  </ActiveLink>
                </li>
                <li className="mr-2">
                  <ActiveLink activeClassName="active" href="/contact">
                    <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2">CONTACT</a>
                  </ActiveLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className='main pt-[70px]'>
          <Transition
            items={items}
            keys={(item) => item.id}
            initial={{ top: 0, opacity: 0 }}
            from={{ top: -20, opacity: 0, position: "relative" }}
            enter={{ top: 0, opacity: 1, position: "relative" }}
            trail={300}
          >
            {(
              styles,
              { pageProps: animatedPageProps, Component: AnimatedComponent },
              key
            ) => (
              <animated.div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <AnimatedComponent {...animatedPageProps} />
              </animated.div>
            )}
          </Transition>
        </main>

        <footer className="bg-gray-900">
          <div className="container max-w-6xl mx-auto flex items-center px-2 py-3">

            <div className="w-full mx-auto flex flex-wrap items-center">
              <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <Link className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline text-base text-gray-200" href="/">
                  👻 DeMo
                </Link>
              </div>
              <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                  <li>
                    <Link className="inline-block py-2 px-3 text-white no-underline" href="/">Active</Link>
                  </li>
                  <li>
                    <Link className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="/">link</Link>
                  </li>
                  <li>
                    <Link className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="/">link</Link>
                  </li>
                  <li>
                    <Link className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="/">link</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </Provider>
  )
}

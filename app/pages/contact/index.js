import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { Form, Input, Button, Checkbox, Alert, Spin } from 'antd';
import { PostContact } from '@/redux/actions/blogAction';
import { Loading } from '@/components/Loading';

const contact = () => {
    const [form] = Form.useForm();
    const reducers = useSelector((state) => state.BlogsReducer)
    const dispatch = useDispatch()

    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const submitContact = (data) => {
        const params = {
            "email": data.email,
            "message": data.message,
            "name": data.name
        }
        dispatch(PostContact(params))
        setIsLoading(true)
    }


    useEffect(() => {
        if (reducers &&reducers.PostContact) {
            if (reducers.PostContact.id) {
                setIsLoading(false)
                setIsSuccess(true)
                form.setFieldsValue({
                    email: '',
                    message: '',
                    name: ''
                })
            }

            setTimeout(() => {
                setIsSuccess(false)
            }, 3000);
        }
    }, [reducers])

    return (
        <div className='container mx-auto px-4 py-10'>
             {isLoading && <Loading/>}
            <div className="relative flex items-top justify-center bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-8 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                    Get in touch
                                </h1>
                                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                    Fill in the form to start a conversation
                                </p>

                                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        Acme Inc, Street, State,
                                        Postal Code
                                    </div>
                                </div>

                                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        +44 1234567890
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        info@acme.org
                                    </div>
                                </div>
                            </div>

                            <Form layout="vertical" className="p-6 flex flex-col justify-center" form={form} onFinish={submitContact} name="basic" >

                                <Form.Item rules={[{ required: true }]} name="name" className='mb-2' label="Name">
                                    <Input placeholder="Full Name" className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </Form.Item>
                                <Form.Item rules={[{ required: true }, { type: 'email' }]} name="email" className='mb-2' label="Email">
                                    <Input placeholder="Email" className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </Form.Item>
                                <Form.Item rules={[{ required: true }]} name="message" className='mb-2' label="Name">
                                    <Input.TextArea placeholder="Message" className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold rounded-lg mt-3 ease-in-out duration-300">
                                        Submit
                                    </Button>
                                </Form.Item>
                                {isSuccess&& <Alert message="Submit Success" type="success" /> }
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact

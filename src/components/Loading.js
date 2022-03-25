import { Spin } from 'antd';
import React from 'react';

export const Loading = () => {
    return (
        <Spin spinning={true} className="Loading-full fixed w-full h-full left-0 top-0 flex items-center justify-center bg-[#00000047] z-10" />
    );
};

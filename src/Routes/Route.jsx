import React from 'react';
import {
  createBrowserRouter,
  
} from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage/Errorpage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children:[{
        index: true,
        path: "/",
        Component: 

    },
]
  },
]);
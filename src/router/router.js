import { createBrowserRouter, redirect } from "react-router-dom";

import { getLocalStorage } from "../service/config";

import Login from "../pages/Login";
import Main from "../pages/Main";
import Pass from "../pages/Pass";
import Error from "../pages/Error";

import App from "../App";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <App />
            ),
            children: [
                {
                    path: '/',
                    element: <Login />,

                },
                {
                    path: '/main',
                    loader: () => (!getLocalStorage() ? redirect('/error') : null),
                    element: <Main />
                },
                {
                    path: '/pass',
                    element: <Pass />
                },
                {
                    path: '/error',
                    element: <Error />
                }
            ]
        }
    ]

)
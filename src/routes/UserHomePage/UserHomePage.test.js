import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserHomePage from './UserHomePage'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <UserHomePage>
            </UserHomePage>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
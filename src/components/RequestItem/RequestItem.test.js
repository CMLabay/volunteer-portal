import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RequestItem from './RequestItem'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <RequestItem>
            </RequestItem>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
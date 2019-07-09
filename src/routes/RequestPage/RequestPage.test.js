import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RequestPage from './RequestPage'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <RequestPage>
            </RequestPage>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
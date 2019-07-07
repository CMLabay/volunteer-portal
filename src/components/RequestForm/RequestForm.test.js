import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RequestForm from './RequestForm'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <RequestForm>
            </RequestForm>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
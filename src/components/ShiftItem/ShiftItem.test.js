import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ShiftItem from './ShiftItem'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ShiftItem>
            </ShiftItem>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
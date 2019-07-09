import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ShiftList from './ShiftList'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ShiftList>
            </ShiftList>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
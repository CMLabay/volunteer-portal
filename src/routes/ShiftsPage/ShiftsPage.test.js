import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ShiftsPage from './ShiftsPage'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ShiftsPage>
            </ShiftsPage>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
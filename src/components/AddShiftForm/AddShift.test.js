import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddShiftForm from './AddShiftForm'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <AddShiftForm>
            </AddShiftForm>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
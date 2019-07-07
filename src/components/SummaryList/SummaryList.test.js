import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SummaryList from './SummaryList'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <SummaryList>
            </SummaryList>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RaceDropDown from './RaceDropDown'
import renderer from 'react-test-renderer';

describe('race drop down component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <RaceDropDown>
                </RaceDropDown>
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the ui as expected', () => {
        const tree = renderer
        .create(
            <BrowserRouter>
            <RaceDropDown></RaceDropDown>
            </BrowserRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
    })
})
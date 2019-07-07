import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import renderer from 'react-test-renderer';

describe('registration form', () =>{


    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <RegistrationForm>
                </RegistrationForm>
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer
        .create(
            <BrowserRouter>
            <RegistrationForm></RegistrationForm>
            </BrowserRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
    })
})
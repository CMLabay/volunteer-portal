import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm'

describe('Login form component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <LoginForm></LoginForm>
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders teh UI as expected', () => {
        const tree = renderer
            .create(
                <BrowserRouter>
                <LoginForm></LoginForm>
                </BrowserRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

})
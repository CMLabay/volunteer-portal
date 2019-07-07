import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import renderer from 'react-test-renderer';

describe('NavBar component', () => {
    let navLinks = [
        {
            link:"Home", 
            route:"admin"
        },
        {
            link:"Logout",
            route:"/"
        }
    ]
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <NavBar navLinks={navLinks}></NavBar>
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', ()=> {
        const tree = renderer
            .create(
                <BrowserRouter>
                    <NavBar navLinks={navLinks}></NavBar>
                </BrowserRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
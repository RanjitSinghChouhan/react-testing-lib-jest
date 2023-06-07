import { render, screen } from "@testing-library/react"
import Skills from "./Skills"

describe('Skills', () => {
    const skills = ['hello', 'hi', 'you']
    test('render array', () => {
        render(<Skills skills={skills}/>);
        const arr = screen.getByRole("list");
        expect(arr).toBeInTheDocument();
    });

    test('render list of skills', () => {
        render(<Skills skills={skills}/>);
        const arrItems = screen.getAllByRole("listitem");
        expect(arrItems).toHaveLength(skills.length);
    })

    test('render login button', () => {
        render(<Skills skills={skills}/>);
        const loginButton = screen.getByRole('button', {
            name: "LogIn"
        });
        expect(loginButton).toBeInTheDocument();
    });

    test('render not login button', () => {
        render(<Skills skills={skills}/>);
        //here getByRole won't work
        const notLoginButton = screen.queryByRole('button', {
            name: "Learn React"
        });
        expect(notLoginButton).not.toBeInTheDocument();
    });

    test('render learn react button', async() => {
        // screen.debug()
        render(<Skills skills={skills}/>);
        //here getByRole won't work
        const learnReactButton = await screen.findByRole('button', {
            name: "Learn React"
        }, {
            timeout: 2000
        });
        expect(learnReactButton).toBeInTheDocument();
    });
})
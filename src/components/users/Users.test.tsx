import {render, screen} from '@testing-library/react';
import Users from './Users';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Users', () => {
    test('render list', async() => {
        render(<Users/>);
        const listUser = await screen.findAllByRole('listitem');
        expect(listUser).toHaveLength(3)
    });

    test('render error', async() => {
        server.use(
            rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
                return res(ctx.status(500));
            })
        );
        render(<Users/>);
        const error = await screen.findByText("Error fetching users");
        expect(error).toBeInTheDocument();
        
    })
})
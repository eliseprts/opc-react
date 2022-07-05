import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { render } from '../../utils/test'

import Freelances from './Freelances'

// CONFIGURATION

// Simulated data
const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne frontend',
        picture: '',
    }

]

// Server
const server = setupServer(
    // URl to intercept
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        // Pass mocked data in what it's returned in json
        return res(ctx.json({ freelancersList: freelancersMockedData }))
    })
)

// Active API simulation before test from the server
beforeAll(() => server.listen())
// Reset of everything we could have added in terms of duration for our test before each test
afterEach(() => server.resetHandlers())
// Close the API simulation once the tests are finished
afterAll(() => server.close())


test('Should render without crash', async () => {
    render(
        <Freelances />
    )
    // Test if the loader is displayed
    expect(screen.getByTestId('loader')).toBeTruthy()
    // Wait for the element to be removed from the DOM to perform the rest of the tests
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    // Test if the data are displayed
    await waitFor(() => {
        expect(screen.getByText('Harry Potter')).toBeTruthy()
        expect(screen.getByText('Hermione Granger')).toBeTruthy()
    })
})

import Results, { formatJobList, formatFetchParams } from "./Results"

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { render } from '../../utils/test'

describe('The function formatJobList', () => {
    test('should add a comma to an item', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    test('should not add a comma to the last item', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

describe('The formatFetchParams function', () => {
    it('should use the right format for param', () => {
        const expectedState = 'a1=answer1'
        expect(formatFetchParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it('should concatenate params with an &', () => {
        const expectedState = 'a1=answer1&a2=answer2'
        expect(formatFetchParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
            expectedState
        )
    })
})

// CONFIGURATION

// Simulated data
const resultsMockedData = [
    {
        title: 'seo',
        description: `Le SEO est en charge du référencement web d'une page`,
    },
    {
        title: 'frontend',
        description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
    },
]

// Server
const server = setupServer(
    // URl to intercept
    rest.get('http://localhost:8000/results', (req, res, ctx) => {
        // Pass mocked data in what it's returned in json
        return res(ctx.json({ resultsData: resultsMockedData }))
    })
)

// Active API simulation before test from the server
beforeAll(() => server.listen())
// Reset of everything we could have added in terms of duration for our test before each test
afterEach(() => server.resetHandlers())
// Close the API simulation once the tests are finished
afterAll(() => server.close())

describe('The Result component', () => {
    test('should display the results after the data is loaded', async () => {
        render(
            <Results />
        )
        await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
        const jobTitleElements = screen.getAllByTestId('job-title')
        expect(jobTitleElements[0].textContent).toBe('seo')
        expect(jobTitleElements.length).toBe(2)
        const jobDescriptionElements = screen.getAllByTestId('job-description')
        expect(jobDescriptionElements[1].textContent).toBe(resultsMockedData[1].description)
        expect(jobDescriptionElements.length).toBe(2)
    })
})
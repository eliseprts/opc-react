import { screen } from '@testing-library/react'
import Home from './Home'
import { render } from '../../utils/test'

describe('The Home component', () => {
    it('should render title', () => {
        render(
            <Home />
        )
        expect(
            screen.getByRole('heading', {
                level: 1, 
                text: 'Repérez vos besoins, on s\'occupe du reste, avec les meilleurs talents',
            })
        ).toBeTruthy()
    })
})
import Footer from './Footer'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context/context'

describe('Footer', () => {
    test('Should render without crash', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
        fireEvent.click(nightModeButton)
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
    })
})

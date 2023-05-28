import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {act} from 'react-dom/test-utils'
import actionMovies from '../assets/action-movies/action-movies-data'
import App from '../App'

describe('Displaying Movie Data', () => {
    it('displays the correct number of movie posters', () => {
        render(<App />)
        const moviePosters = screen.getAllByRole('img')
        expect(moviePosters.length).toBe(4)
    })
    it('displays a different set of movie posters when the forward button is clicked', async () => {
        const user = userEvent.setup()
        //Creating an array of the movie titles of the first four movies
        let actionMovieTitles = []
        for(let i=0; i < 4; i++){
            actionMovieTitles[i] = actionMovies[i].title + ' ' + 'Poster';
        }
        render(<App />)
        const firstPage = screen.getAllByRole('img').map(poster => poster.getAttribute('alt'))
        //This piece of code needs to wrapped around the act API
        //Because it causes an update in the state of a component
        await act(async () => {
            await user.click(screen.getByRole('button', {name: '→'}))
        })
        //Get the new set of movies
        const secondPage = screen.getAllByRole('img').map(poster => poster.getAttribute('alt'))
        expect(firstPage).not.toEqual(secondPage)
        //Expect the first page to display the first four movies
        expect(firstPage).toEqual(actionMovieTitles)
    })
    it('displays the initial set of movie posters when the back button is clicked', async () => {
        const user = userEvent.setup()
        render(<App />)
        const firstPage = screen.getAllByRole('img').map(poster => poster.getAttribute('alt'))
        await act(async () => {
            await user.click(screen.getByRole('button', {name: '→'}))
        })
        //Each interaction needs to be wrapped in its own act method
        await act(async () => {
            await user.click(screen.getByRole('button', {name: '←'}))
        })
        const currentPage = screen.getAllByRole('img').map(poster => poster.getAttribute('alt'))
        //going forward and back again, should land us at the same page
        expect(currentPage).toEqual(firstPage)
    })
    it('displays the details of a movie once clicked', async () => {
        const user = userEvent.setup()
        render(<App />)
        //Because tests are often concrete and not really generic
        //I'll attempt to click the image of a movie I expect to be displayed
        const testMovie = actionMovies[2]
        const testFigure = screen.getByRole('img', {name: 'Sonic the Hedgehog 2 Poster'})

        await act(async () => {
            await user.click(testFigure)
        })
        
        const testOverview = await screen.findByText(testMovie.overview)
        const testBackdrop = await screen.findByRole('img', {name: 'Sonic the Hedgehog 2 Backdrop'})
        //Assertions
        expect(testOverview).toBeInTheDocument
        expect(testBackdrop).toBeInTheDocument
    })
})

describe('Interacting with the shopping cart', () => {
    it('Increases the quantities of movies in the shopping cart correctly', async () => {
        const user = userEvent.setup()
        render(<App />)
        const increaseButton = screen.getByTestId(`increase-${actionMovies[0].id}`)
        const movieQuantity = screen.getByTestId(`quantity-${actionMovies[0].id}`)

        await act(async () => {
            await user.click(increaseButton)
        })

        await act(async () => {
            await user.click(increaseButton)
        })

        expect(+movieQuantity.textContent).toEqual(2)
    })
})
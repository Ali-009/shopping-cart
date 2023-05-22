import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {act} from 'react-dom/test-utils'
import CatalogueDisplay from '../components/CatalogueDisplay'
import actionMovies from '../movie-data/action-movies'

describe('DisplayCatalogue', () => {
    it('displays the correct number of movies', () => {
        render(<CatalogueDisplay movieData={actionMovies}/>)
        const moviePosters = screen.getAllByRole('img')
        expect(moviePosters.length).toBe(5)
    })
    it('displays a different set of movies the forward button is clicked', async () => {
        const user = userEvent.setup()
        render(<CatalogueDisplay movieData={actionMovies}/>)
        const firstPage = screen.getAllByRole('img').map(poster => poster.getAttribute('alt'))
        //This piece of code needs to wrapped around the act API
        //Because it causes an update in the state of a component
        await act(async () => {
            await user.click(screen.getByRole('button', {name: '→'}))
        })
        //Get the new set of movies
        const secondPage = screen.getAllByRole('img').map(poster => poster.getAttribute('alt'))
        expect(firstPage).not.toEqual(secondPage)
    })
    it('displays the initial set of movies when the back button is clicked', async () => {
        const user = userEvent.setup()
        render(<CatalogueDisplay movieData={actionMovies}/>)
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
})
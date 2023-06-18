import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {act} from 'react-dom/test-utils'
import actionMovies from '../assets/action-movies/action-movies-data'
import App from '../App'
import {BrowserRouter} from 'react-router-dom'

beforeEach(async () =>{
    //The localStorage should be cleared before performing the tests
    localStorage.clear()
    const user = userEvent.setup()
    render(<App />, {wrapper: BrowserRouter})
    const cataloguePageLink = screen.getByText('Catalogue')
    await clickElement(user, cataloguePageLink, 1)
})

describe('Displaying Movie Data', () => {

    it('Displays the correct number of movie posters', async () => {
        const moviePosters = screen.getAllByRole('figure')
        expect(moviePosters.length).toBe(4)
    })
    it('Displays a different set of movie posters when the forward button is clicked', async () => {
        const user = userEvent.setup()
        //Creating an array of the movie titles of the first four movies
        let actionMovieTitles = []
        for(let i=0; i < 4; i++){
            actionMovieTitles[i] = actionMovies[i].title + ' ' + 'Poster';
        }
        const firstPage = screen.getAllByRole('figure').map(poster => poster.children[0].getAttribute('alt'))
        //This piece of code needs to wrapped around the act API
        //Because it causes an update in the state of a component
        await act(async () => {
            await user.click(screen.getByRole('button', {name: 'Scroll Forward'}))
        })
        //Get the new set of movies
        const secondPage = screen.getAllByRole('figure').map(poster => poster.children[0].getAttribute('alt'))
        expect(firstPage).not.toEqual(secondPage)
        //Expect the first page to display the first four movies
        expect(firstPage).toEqual(actionMovieTitles)
    })
    it('Displays the initial set of movie posters when the back button is clicked', async () => {
        const user = userEvent.setup()
        const firstPage = screen.getAllByRole('figure').map(poster => poster.children[0].getAttribute('alt'))
        await act(async () => {
            await user.click(screen.getByRole('button', {name: 'Scroll Forward'}))
        })
        //Each interaction needs to be wrapped in its own act method
        await act(async () => {
            await user.click(screen.getByRole('button', {name: 'Scroll Backward'}))
        })
        const currentPage = screen.getAllByRole('figure').map(poster => poster.children[0].getAttribute('alt'))
        //going forward and back again, should land us at the same page
        expect(currentPage).toEqual(firstPage)
    })
    it('Displays the details of a movie once clicked', async () => {
        const user = userEvent.setup()
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

//An asynchronous function that pushes a given button an n number of times
async function clickElement(user, element, n){
    for(let i = 0; i < n; i++){
        await act(async () => {
            await user.click(element)
        })
    }
}

describe('Increases the amount of items in the shopping cart', () => {
    it('Increases the quantities of movies in the shopping cart correctly', async () => {
        const user = userEvent.setup()
        const increaseButton = screen.getByTestId(`increase-${actionMovies[0].id}`)
        const movieQuantity = screen.getByTestId(`quantity-${actionMovies[0].id}`)
    
        await clickElement(user, increaseButton, 2)
    
        expect(+movieQuantity.textContent).toEqual(2)
    })
})


describe('Decreases amount of items in the shopping cart', () => {

    beforeEach(async () => {
        const user = userEvent.setup()
        const increaseButton = screen.getByTestId(`increase-${actionMovies[0].id}`)
        await clickElement(user, increaseButton, 3)
    })

    it('Decreases the quantity of movies in the shopping cart correctly', async () => {
        const user = userEvent.setup()
        const decreaseButton = screen.getByTestId(`decrease-${actionMovies[0].id}`)
        const movieQuantity = screen.getByTestId(`quantity-${actionMovies[0].id}`)

        await clickElement(user, decreaseButton, 2)

        expect(+movieQuantity.textContent).toEqual(1)
    })

    it('Decreases the quantity of movies in the shopping cart to zero correctly', async () => {
        const user = userEvent.setup()
        const decreaseButton = screen.getByTestId(`decrease-${actionMovies[0].id}`)
        const movieQuantity = screen.getByTestId(`quantity-${actionMovies[0].id}`)

        await clickElement(user, decreaseButton, 3)

        expect(+movieQuantity.textContent).toEqual(0)
    })
    it('Doesn\'t throw an error when attempting to decrease quantity below zero', async () => {
        const user = userEvent.setup()
        const decreaseButton = screen.getByTestId(`decrease-${actionMovies[0].id}`)
        const movieQuantity = screen.getByTestId(`quantity-${actionMovies[0].id}`)

        await clickElement(user, decreaseButton, 6)

        expect(+movieQuantity.textContent).toEqual(0)      
    })
})
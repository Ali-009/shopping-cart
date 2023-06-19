import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {act} from 'react-dom/test-utils'
import actionMovies from '../assets/action-movies/action-movies-data'
import App from '../App'
import {BrowserRouter} from 'react-router-dom'

//An asynchronous function that clicks a given element an n number of times
async function clickElement(user, element, n){
    for(let i = 0; i < n; i++){
        await act(async () => {
            await user.click(element)
        })
    }
}

beforeEach(async () => {
    //The localStorage needs to be cleared before performing the tests
    localStorage.clear()
    render(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup()
    //The shopping cart needs to be populated before performing tests on it
    const cataloguePageLink = screen.getByText('Catalogue')
    await clickElement(user, cataloguePageLink, 1)
    //Adding three copies of the second movie, and two copies of the third movie to the cart
    const increaseButton1 = screen.getByTestId(`increase-${actionMovies[1].id}`)
    await clickElement(user, increaseButton1, 3)
    const increaseButton2 = screen.getByTestId(`increase-${actionMovies[2].id}`)
    await clickElement(user, increaseButton2, 2)
    //The test now switches to the shopping cart page
    const shoppingCartLink = screen.getByRole('img', {name: 'Shopping Cart'})
    await clickElement(user, shoppingCartLink, 1)
})

describe('Shopping Cart', () => {
    it('Can adjust the quantity of order items', async () => {
        const user = userEvent.setup()
        //The buttons can be referenced in the shopping cart, the same way
        //they are refernced in the catalogue
        const shoppingCartIncrease1 = screen.getByTestId(`increase-${actionMovies[1].id}`)
        const shoppingCartDecrease2 = screen.getByTestId(`decrease-${actionMovies[2].id}`)
        const movieQuantity1 = screen.getByTestId(`quantity-${actionMovies[1].id}`)
        const movieQuantity2 = screen.getByTestId(`quantity-${actionMovies[2].id}`)
        //Next step is to increase the quantity of one movie, and decrease the quantity of another
        await clickElement(user, shoppingCartIncrease1, 2)
        await clickElement(user, shoppingCartDecrease2, 1)
        expect(+movieQuantity1.textContent).toEqual(5)
        expect(+movieQuantity2.textContent).toEqual(1)
    })
    it('Displays correct total prices for each item', () => {
        const totalPrice1 = screen.getByTestId(`price-${actionMovies[1].id}`)
        const totalPrice2 = screen.getByTestId(`price-${actionMovies[2].id}`)
        //Each movie is priced at 40$
        //The shopping cart initially has 3 copies of the first movie, so in total all copies cost 120$
        //The shopping cart initially has 2 copies of the second movie, so in total all copies cost 80$
        expect(totalPrice1.textContent).toEqual('120$')
        expect(totalPrice2.textContent).toEqual('80$')
    })
    it('Displays the correct final total for the purchase', () => {
        //The final total with our setup should be 120 + 80 = 200$
        const finalTotal = screen.getByTestId('shopping-cart-total')
        expect(finalTotal.textContent).toEqual('200$')
    })
})
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import CatalogueDisplay from '../components/CatalogueDisplay'

describe('MovieSearch', () => {
    it('Retrieves the posters of ', () => {
        user = userEvent.setup()
        render(<CatalogueDisplay />)

    })
})
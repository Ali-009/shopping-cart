import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import CatalogueDisplay from '../components/CatalogueDisplay'
import actionMovies from '../movie-data/action-movies'

describe('DisplayCatalogue', () => {
    it('Displays the correct number of movies', () => {
        render(<CatalogueDisplay movieData={actionMovies}/>)
        const moviePosters = screen.getAllByRole('img');
        expect(moviePosters.length).toBe(10);
    })
})
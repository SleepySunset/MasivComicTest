import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { ComicRating } from '../ComicRating';

describe('ComicRating', () => {
    it('Should render ComicRating component', () => {
        const actualComic = {};

        render(<ComicRating actualComic={actualComic} />);

        const stars = screen.getAllByRole('radio');
        expect(stars.length).toBe(5);
    });
});

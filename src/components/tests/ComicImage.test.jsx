import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ComicImage } from '../ComicImage';

describe('ComicImage', () => {
    it('Should render ComicImage component with correct image and title', () => {
        const actualComic = {
            title: 'Test Comic',
            img: 'https://example.com/testcomic.jpg',
        };

        render(<ComicImage actualComic={actualComic} />);

        const titleElement = screen.getByText(actualComic.title);
        const imgElement = screen.getByAltText(actualComic.title);

        expect(titleElement).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', actualComic.img);
    });
});

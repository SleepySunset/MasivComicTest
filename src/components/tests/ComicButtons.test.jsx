import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ComicButtons } from '../ComicButtons';

describe('ComicButton', () => {
    it('Should render ComicButtons component with correct buttons and functionality', () => {
        const actualComic = { num: 2 };
        const lastComic = { num: 5 };
        let calledId;
        const setComicId = (id) => {
            calledId = id;
        };

        render(
            <ComicButtons actualComic={actualComic} lastComic={lastComic} setComicId={setComicId} />
        );

        const prevButton = screen.getByText('Prev');
        const nextButton = screen.getByText('Next');
        const randomButton = screen.getByText('Random');

        expect(prevButton).not.toHaveAttribute('disabled');
        expect(nextButton).not.toHaveAttribute('disabled');
        expect(randomButton).not.toHaveAttribute('disabled');

        fireEvent.click(prevButton);
        expect(calledId).toBe(1);
        fireEvent.click(nextButton);
        expect(calledId).toBe(3);
        fireEvent.click(randomButton);
        expect(calledId).toBeGreaterThanOrEqual(1);
        expect(calledId).toBeLessThanOrEqual(lastComic.num);
    });
});

import { render, screen } from '@testing-library/react';
import LoadScreen from './LoadScreen';

beforeEach(() => {
    render(<LoadScreen />)
})

test('Loadscreen phase loading on page', () => {
    const loadPhrases = [
        "Counting number of thumbs currently up...",
        "Collecting tomato residue for analysis...",
        "Scanning obscure blogs from 2007...",
        "Viewing stars given in telescope...",
        "Waiting for last judge to raise placard...",
    ];
    const loadPhraseText = screen.getByRole('heading').textContent;
    expect(loadPhrases).toContain(loadPhraseText);
})
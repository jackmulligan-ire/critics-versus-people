import { render, screen } from '@testing-library/react';
import Motto from './Motto';

const setUp = () => render(<Motto />);

test('Motto renders on page', () => {
    setUp();
    const mottoPhrases = [
        "They panned it, we stan it",  
        "They're like 'Huh?', we say 'Bruh!'",
        "They say it's a classic, we think it's tragic",
        "We think it rocked, they say it sucked!",
        "They hate it, we love it",
        "They say it's okay, we thought it slayed!",
        "They ignored it, we adored it",
    ];
    const mottoPhraseText = screen.getByRole('heading', {
        name: /they/i
    }).textContent;
    expect(mottoPhrases).toContain(mottoPhraseText);
})
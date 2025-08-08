import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Banner from './Banner';

describe('Banner Component', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Banner />);
        expect(getByText('Banner Content')).toBeInTheDocument();
    });

    it('displays the correct title', () => {
        const { getByText } = render(<Banner title="Welcome" />);
        expect(getByText('Welcome')).toBeInTheDocument();
    });
});
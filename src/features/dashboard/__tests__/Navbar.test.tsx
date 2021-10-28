import { render, screen } from '@utils/test-utils';
import Navbar from '../Navbar';

describe('Navbar', () => {
    test('should render ', () => {
        const el = render(<Navbar />);

        expect(el.baseElement).toBeInTheDocument();
    });
});

import { render, screen } from '@utils/test-utils';
import Footer from '../Footer';

describe('Sidebar', () => {
    test('should render ', () => {
        const el = render(<Footer />);

        expect(el.baseElement).toBeInTheDocument();
    });
});

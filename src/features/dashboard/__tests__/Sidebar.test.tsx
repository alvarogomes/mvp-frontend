import { render, screen } from '@utils/test-utils';
import Sidebar from '../Sidebar';

describe('Sidebar', () => {
    test('should render ', () => {
        const el = render(<Sidebar />);

        expect(el.baseElement).toBeInTheDocument();
    });
});

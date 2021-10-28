import { render, fireEvent, screen } from '@utils/test-utils';
import SplitDetails from '../SplitDetails';

describe('No Reports', () => {
    test('should be rendered', () => {
        const el = render(<SplitDetails />);
        expect(el.baseElement).toBeInTheDocument();
    });
});

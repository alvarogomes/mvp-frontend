import { render, fireEvent, screen } from '@utils/test-utils';
import NoReports from '../NoReports';

describe('No Reports', () => {
    test('should be rendered', () => {
        const el = render(<NoReports />);
        expect(el.baseElement).toBeInTheDocument();
    });
});

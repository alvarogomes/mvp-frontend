import { render, screen } from '@utils/test-utils';
import DashboardLayout from '../_Dashboard.layout';

describe('DashboardLayout', () => {
    test('should render', () => {
        const el = render(<DashboardLayout />);
        expect(el.baseElement).toBeInTheDocument();
    });
});

import { render, screen } from '@utils/test-utils';
import Chart from '@components/Chart';

const props = {
    reports: [],
    isProjects: true,
};

describe('Chart', () => {
    test('should render chart', () => {
        render(<Chart {...props} />);

        const chart = screen.getByTestId('chart');

        expect(chart).toBeInTheDocument();
    });
});

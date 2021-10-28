import { render, screen } from '@utils/test-utils';
import ChartIcon from '@components/ChartIcon';

const props = {
    color: 'blue',
    title: 'hello',
};

describe('Chart Icon', () => {
    test('should render chart icon with text', () => {
        render(<ChartIcon {...props} />);
        const icon = screen.getByText('hello');
        expect(icon).toBeInTheDocument();
    });
});

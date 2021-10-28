import { render, fireEvent, screen } from '@utils/test-utils';
import ProjectDetailsTable from '../ProjectDetailsTable';

const operations = [];

describe('No Reports', () => {
    test('should be rendered', () => {
        const el = render(<ProjectDetailsTable operations={operations} />);
        expect(el.baseElement).toBeInTheDocument();
    });
});

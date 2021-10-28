import { render, fireEvent, screen } from '@utils/test-utils';
import AllProjectsAllGateways from '../AllProjectsAllGateways';

describe('No Reports', () => {
    test('should be rendered ', () => {
        const el = render(<AllProjectsAllGateways />);
        expect(el.baseElement).toBeInTheDocument();
    });
});

import { render, fireEvent, screen } from '@utils/test-utils';
import GatewayDetailsTable from '../GatewayDetailsTable';

const operations = [];

describe('No Reports', () => {
    test('should be rendered', () => {
        const el = render(<GatewayDetailsTable operations={operations} />);
        expect(el.baseElement).toBeInTheDocument();
    });
});

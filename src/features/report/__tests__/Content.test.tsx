import { render, fireEvent, screen } from '@utils/test-utils';
import Content from '../Content';

describe('No Reports', () => {
    test('should be rendered', () => {
        const el = render(<Content />);
        expect(el.baseElement).toBeInTheDocument();
    });
});

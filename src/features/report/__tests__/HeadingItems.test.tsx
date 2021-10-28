import { render, fireEvent, screen } from '@utils/test-utils';
import HeadingItems from '../HeadingItems';

describe('No Reports', () => {
    test('should be rendered', () => {
        const el = render(<HeadingItems />);
        expect(el.baseElement).toBeInTheDocument();
    });
});

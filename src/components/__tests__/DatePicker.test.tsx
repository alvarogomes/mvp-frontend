import { render, screen } from '@utils/test-utils';
import DatePicker from '@components/DatePicker';

import userEvent from '@testing-library/user-event';

describe('DatePicker', () => {
    test('should render DatePicker with "from date" params', () => {
        const props = {
            title: 'From date',
            queryParam: 'from',
        };
        render(<DatePicker {...props} />);

        const datePickerToggle = screen.getByTestId('date-picker-trigger');

        userEvent.click(datePickerToggle);

        const datePicker = screen.getByTestId('date-picker');

        expect(datePicker).toBeInTheDocument();
    });

    test('should render DatePicker with "to date" params', () => {
        const props = {
            title: 'To date',
            queryParam: 'to',
        };
        render(<DatePicker {...props} />);

        const datePickerToggle = screen.getByTestId('date-picker-trigger');

        userEvent.click(datePickerToggle);

        const datePicker = screen.getByTestId('date-picker');

        expect(datePicker).toBeInTheDocument();
    });
});

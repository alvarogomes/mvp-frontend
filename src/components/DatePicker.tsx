import { Button } from '@chakra-ui/button';
import { CalendarIcon } from '@chakra-ui/icons';
import {
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@chakra-ui/popover';
import { useState, ReactElement } from 'react';
import Calendar from 'react-calendar';

import moment from 'moment';
import { Flex } from '@chakra-ui/layout';
import { setReportQuery } from '@features/report/report.slice';
import { useAppDispatch } from '@store/hooks';

interface DatePickerProps {
    title: string;
    queryParam: string;
}

export default function DatePicker({
    title,
    queryParam,
}: DatePickerProps): ReactElement {
    const [selected, setSelected] = useState(false);
    const [date, setDate] = useState(new Date());
    const dispatch = useAppDispatch();

    function handleChange(val) {
        setDate(val);
        setSelected(true);
        dispatch(
            setReportQuery({
                [queryParam]: moment(val).format('yyyy-MM-DD'),
            })
        );
    }

    function handleClear() {
        setSelected(false);
        dispatch(
            setReportQuery({
                [queryParam]: '',
            })
        );
    }

    return (
        <Popover>
            <PopoverTrigger>
                <Button
                    color="white"
                    bg="secondary"
                    rightIcon={<CalendarIcon />}
                    data-testid="date-picker-trigger"
                >
                    {!selected ? title : moment(date).format('yyyy-MM-DD')}
                </Button>
            </PopoverTrigger>
            <PopoverContent w="100%">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Select a {title}</PopoverHeader>
                <PopoverBody>
                    <Flex data-testid="date-picker">
                        <Calendar onChange={handleChange} value={date} />
                        <Button size="sm" ml="2" onClick={handleClear}>
                            Clear
                        </Button>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

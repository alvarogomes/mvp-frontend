import { render, fireEvent, screen } from '@utils/test-utils';
import { Accordion } from '@chakra-ui/accordion';
import ProjectItem from '../ProjectItem';

const props = {
    id: '1rret',
    operations: [],
    isGateway: false,
};

describe('No Reports', () => {
    test('should be rendered', () => {
        const el = render(
            <Accordion allowMultiple allowToggle>
                <ProjectItem {...props} />
            </Accordion>
        );
        expect(el.baseElement).toBeInTheDocument();
    });
});

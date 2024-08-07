import { createBoard } from '@wixc3/react-board';
import { BackgroundShorthand } from '../../../components/background-shorthand/background-shorthand';

export default createBoard({
    name: 'BackgroundShorthand',
    Board: () => <BackgroundShorthand />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1229,
        windowHeight: 753,
    },
});

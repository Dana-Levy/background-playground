import { createBoard } from '@wixc3/react-board';
import { BackgroundColor } from '../../../components/background-color/background-color';
import styles from './background-color.board.module.scss';

export default createBoard({
    name: 'Background-Color',
    Board: () => <BackgroundColor className={styles.backgroundColor} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 1366,
    },
});

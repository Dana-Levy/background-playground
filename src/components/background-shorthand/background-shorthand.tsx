import classNames from 'classnames';
import styles from './background-shorthand.module.scss';

export interface BackgroundShorthandProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BackgroundShorthand = ({ className }: BackgroundShorthandProps) => {
    return <div className={classNames(styles.root, className)}>
            <div className={styles.shorthand}>
                <h1>background shorthand</h1>
            </div>
        </div>;
};

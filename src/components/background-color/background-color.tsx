import classNames from 'classnames';
import styles from './background-color.module.scss';

export interface BackgroundColorProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BackgroundColor = ({ className }: BackgroundColorProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.shorthand}>
                <h1>background shorthand</h1>
            </div>
        </div>
    );
};

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
            <div className={styles.div1}>
                <div className={classNames(styles.div2, styles.container)}>Hex #00b8f2</div>
                <div className={classNames(styles.div3, styles.container)}>rgb(0, 184, 242)</div>
                <div className={classNames(styles.div4, styles.container)}>
                    rgb(0, 184, 242,50%)
                </div>
                <div className={classNames(styles.div5, styles.container)}>hsl(194.2 100% 47%)</div>
                <div className={classNames(styles.div6, styles.container)}>
                    oklab(73.33% -0.12 -0.13)
                </div>
                <div className={classNames(styles.div7, styles.container)}>
                    lab(69.41 -29 -46.85)
                </div>
                <div className={classNames(styles.div7, styles.container)}>
                    lch(69.41 55.1 238.24)
                </div>
            </div>
            <div className={styles.div1}>
                <div className={classNames(styles.container, styles.div8)}>
                    {' '}
                    background-clip: border-box;
                </div>
                <div className={classNames(styles.container, styles.div9)}>
                    {' '}
                    background-clip: padding-box;
                </div>
                <div className={classNames(styles.container, styles.div10)}>
                    background-clip: content-box
                </div>
                <div className={classNames(styles.container, styles.div11)}>
                    background-clip: text; color:transparent;
                </div>
            </div>
            <div className={styles.div13} />
            <div className={classNames(styles.div14, styles.container)}>
                <p className={styles.p1}>This is a paragraph.</p>
            </div>
            <div className={styles.div16}></div>
            <div className={styles.div17} />
        </div>
    );
};

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
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.caseContainer}>
                <div className={styles.item}>
                    <p>
                        An example of a background shorthand with three layers and a background
                        attachment property
                        <br />
                        *For scrolling behavior, the overflow property must be set
                    </p>
                </div>
                <div className={classNames(styles.bgScroll, styles.item)}>
                    <p>
                        The background-attachment CSS property sets whether a background
                        image&apos;s position is fixed within the viewport, or scrolls with its
                        containing block. The background-attachment CSS property sets whether a
                        background image&apos;s position is fixed within the viewport, or scrolls
                        with its containing block.The background-attachment CSS property sets
                        whether a background image&apos;s position is fixed within the viewport, or
                        scrolls with its containing block.The background-attachment CSS property
                        sets whether a background image&apos;s position is fixed within the
                        viewport, or scrolls with its containing block. The background-attachment
                        CSS property sets whether a background image&apos;s position is fixed within
                        the viewport, or scrolls with its containing block. The
                        background-attachment CSS property sets whether a background image&apos;s
                        position is fixed within the viewport, or scrolls with its containing
                        block.The background-attachment CSS property sets whether a background
                        image&apos;s position is fixed within the viewport, or scrolls with its
                        containing block.The background-attachment CSS property sets whether a
                        background image&apos;s position is fixed within the viewport, or scrolls
                        with its containing block. The background-attachment CSS property sets
                        whether a background image&apos;s position is fixed within the viewport, or
                        scrolls with its containing block. The background-attachment CSS property
                        sets whether a background image&apos;s position is fixed within the
                        viewport, or scrolls with its containing block.The background-attachment CSS
                        property sets whether a background image&apos;s position is fixed within the
                        viewport, or scrolls with its containing block.The background-attachment CSS
                        property sets whether a background image&apos;s position is fixed within the
                        viewport, or scrolls with its containing block. The background-attachment
                        CSS property sets whether a background image&apos;s position is fixed within
                        the viewport, or scrolls with its containing block. The
                        background-attachment CSS property sets whether a background image&apos;s
                        position is fixed within the viewport, or scrolls with its containing
                        block.The background-attachment CSS property sets whether a background
                        image&apos;s position is fixed within the viewport, or scrolls with its
                        containing block.The background-attachment CSS property sets whether a
                        background image&apos;s position is fixed within the viewport, or scrolls
                        with its containing block. The background-attachment CSS property sets
                        whether a background image&apos;s position is fixed within the viewport, or
                        scrolls with its containing block. The background-attachment CSS property
                        sets whether a background image&apos;s position is fixed within the
                        viewport, or scrolls with its containing block.The background-attachment CSS
                        property sets whether a background image&apos;s position is fixed within the
                        viewport, or scrolls with its containing block.The background-attachment CSS
                        property sets whether a background image&apos;s
                    </p>
                </div>
            </div>
            <div className={styles.caseContainer}>
                <div className={styles.item}>
                    <p>
                        An example of a background shorthand with 2 layers border (clip property).
                    </p>
                </div>
                <div className={classNames(styles.item, styles.shorthand, styles.effect)}></div>
            </div>
            <div className={styles.caseContainer}>
                <div className={styles.item}>
                    <p>Here is an example of a background shorthand variable per layer</p>
                </div>
                <div className={classNames(styles.item, styles.effect, styles.bgLayer)}></div>
            </div>
            <div className={styles.caseContainer}>
                <div className={styles.item}>
                    <p>Here is an example of a background shorthand variable per layer</p>
                </div>
                <div className={classNames(styles.item, styles.effect, styles.bgVariable)}></div>
            </div>
        </div>
    );
};

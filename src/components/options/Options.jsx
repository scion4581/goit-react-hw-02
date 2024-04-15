import css from './Options.module.css';
import clsx from 'clsx';

export default function Options({onUpdate, onReset, totalFeedback}) {

    const handleClick = (buttonType) => {
        if (buttonType === 'reset') {
            onReset();
            return;
        }
        onUpdate(buttonType);
    }

    return (
        <div className={css.optionsButtons}>
            <button onClick={() => handleClick('good')}>Good</button>
            <button onClick={() => handleClick('neutral')}>Neutral</button>
            <button onClick={() => handleClick('bad')}>Bad</button>
            <button className={clsx(css.resetOptionsButton, totalFeedback === 0 && css.hideOptionsButton)} onClick={() => handleClick('reset')}>Reset</button>
        </div>     
    );
}
import css from './Feedback.module.css';

export default function Feedback({ feedbacks, totalFeedback, positiveFeedback}) {
    return (
        <ul className={css.feedbackSummary}>
            <li>Good: {feedbacks.good}</li>
            <li>Neutral: {feedbacks.neutral}</li>
            <li>Bad: {feedbacks.bad}</li>
            <li>Total: {totalFeedback}</li> 
            <li>Positive: {positiveFeedback}%</li> 
        </ul>
    );
}
import PropTypes from 'prop-types'; 
import { ButtonList, Btn } from "./leaveFeedback.styled";

export const FeedbackOptions = ({onLeaveFeedback, options}) => 
<ButtonList>
    {options.map((option, i) => <Btn key={i} onClick={() => onLeaveFeedback(option)}>{option.charAt(0).toUpperCase() + option.slice(1)}</Btn>)}
</ButtonList>;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,    
}
import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import 'typeface-roboto';

const QuoteMachine = ({selectedQuote, assignNewQuoteIndex}) => (
    <Card>
        <CardContent>
            <Typography id="text">
                {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={assignNewQuoteIndex} id="new-quote">Next quote</Button>
            <IconButton href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=FCC`)} target="_blank" id="tweet-quote">
                <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
        </CardActions>
       
    </Card>   
)

export default QuoteMachine;
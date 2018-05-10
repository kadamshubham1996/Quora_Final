
import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Badge from 'react-bootstrap/lib/Badge'
import AppActions from '../../actions/AppActions'
export default class Answer extends React.Component{
    constructor()
    {
        super();
        this.handelUpVoteClick = this.handelUpVoteClick.bind(this);
        this.handelDownVoteClick = this.handelDownVoteClick.bind(this);
    }

    handelUpVoteClick(){
        const answerId=this.props.answer.answerId;
        AppActions.addUpvote(answerId)
        
    }

    handelDownVoteClick(){
        const answerId=this.props.answer.answerId;
        AppActions.addDownvote(answerId)
    }

    render(){
        let answer = this.props.answer;
        
        return(
            <div>
                <p>
                {this.props.index}&nbsp;:&nbsp;
                {answer.answerString}<br/>
                &nbsp;&nbsp;<Button bsStyle="success" bsSize="small" onClick={this.handelUpVoteClick}>Upvotes&nbsp;<Badge>{answer.upvoteCount}</Badge></Button>
                &nbsp;&nbsp;<Button bsStyle="danger" bsSize="small" onClick={this.handelDownVoteClick}>Downvotes&nbsp;<Badge>{answer.downvoteCount}</Badge></Button>
                </p>
            </div>
        );
    }

}
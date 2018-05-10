import React from 'react'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import AppActions from '../../actions/AppActions'
export default class QAnswer extends React.Component{
    constructor(){
        super();
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }
          
    handleSubmitClick(){
        const qId = this.props.questionId;
        const answer = this.answerText.value;
        AppActions.addAns(answer,qId)
        this.answerText="";
    }

    render(){
        return(
            <Form inline>
                <FormGroup>
                    <FormControl inputRef={ref =>this.answerText = ref} type="text" placeholder="Type your Answer"/>
                </FormGroup>&nbsp;
                <Button bsStyle="primary"onClick={this.handleSubmitClick}>Submit</Button>
            </Form>
        );
    }
}

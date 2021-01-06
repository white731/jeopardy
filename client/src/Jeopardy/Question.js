import { Header, Grid, Button, Form, Segment, Card } from "semantic-ui-react"
import { useState } from "react"
import styled from "styled-components"

const Question = ({question, setQuestion, setScore, score}) => {

  const [selectedAnswer, setSelectedAnswer] = useState("")
  // const [selectedScore, setSelectedScore] = useState(0)
  

  const checkAnswer = (answer) => {
    // debugger
    if (answer === question.correct_answer){
      alert ("Thats correct")
      setScore(score+question.points)
    } else {
      alert ("That's Not Correct")
    }
    setQuestion(null)
  } 


const renderQuestion = () => {
  console.log(question)
  if (question){
    if (question.answer1 != "") {
      return (
        <>
          <Header>{question.question}</Header>
            <Grid>
              <Grid.Row>
                <Card onClick={()=> checkAnswer(question.answer1) }>
                  <StyledSegment >{question.answer1}</StyledSegment>
                </Card>
                <Card onClick={()=> checkAnswer(question.answer2) }>
                  <StyledSegment >{question.answer2}</StyledSegment>
                </Card>
                <Card onClick={()=>checkAnswer(question.answer3)}>
                  <StyledSegment >{question.answer3}</StyledSegment>
                </Card>
                <Card onClick={()=>checkAnswer(question.answer4)}>
                  <StyledSegment >{question.answer4}</StyledSegment>
                </Card>
              </Grid.Row>
          </Grid>
        </>
      )
    }
    return (
      <>
      <Header>{question.question}</Header>
      <Form onSubmit={() => checkAnswer(selectedAnswer)}>
        <Form.Input
        placeholder = "enter answer here"
        value = {selectedAnswer}
        onChange = {(e)=>setSelectedAnswer(e.target.value)}
        />
        <Form.Button>Submit Answer</Form.Button>
      </Form>

      </>
    )
  }
}

const choiceOutcome = () => {

}

return (
  <>
    <Header>
      {renderQuestion()}
      {choiceOutcome()}
    </Header>
  </>
)
}
export default Question

const StyledSegment = styled(Card.Header)`
height: 70px !important;
width: 200px !important;
margin: 10px !important;
`
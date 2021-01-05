import { Header, Grid, Card, Segment } from "semantic-ui-react"

const Jeopardy = () => {


  return(
    <>
      <Header>Welcome to Jeopardy!</Header>
      <Grid columns={5} divided>
        <Grid.Row stretched>
          {/* <Grid.Column>
            <Segment>Cows</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Plants</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Programming</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Family</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Travel</Segment>
          </Grid.Column> */}
        </Grid.Row>
  </Grid>
    </>
  )

}
export default Jeopardy
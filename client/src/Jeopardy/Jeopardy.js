import { Header, Grid, Card, Segment } from "semantic-ui-react"
import Categories from "./Categories"
import CategoryData from "./CategoryData"
import { useState } from "react"

const Jeopardy = () => {

  const [score, setScore] = useState(0)


  return(
    <>
      <Header textAlign="center">Welcome to Jeopardy!</Header>
      <Header >Your score is...{score}</Header>
      <Grid columns={5} divided>
        <Grid.Row stretched>
          <Categories/>
          <CategoryData setScore={setScore} score={score}/>
        </Grid.Row>
  </Grid>
    </>
  )

}
export default Jeopardy
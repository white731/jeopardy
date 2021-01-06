import { Header, Grid, Card, Segment } from "semantic-ui-react"
import Categories from "./Categories"
import CategoryData from "./CategoryData"

const Jeopardy = () => {


  return(
    <>
      <Header textAlign="center">Welcome to Jeopardy!</Header>
      <Grid columns={5} divided>
        <Grid.Row stretched>
          <Categories/>
          <CategoryData/>
        </Grid.Row>
  </Grid>
    </>
  )

}
export default Jeopardy
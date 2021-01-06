import { Grid, Segment } from "semantic-ui-react"
import { useState, useEffect } from "react"
import Axios from "axios"
import Tile from "./Tile"
import Question from "./Question"
import { useHistory } from "react-router-dom"

const CategoryData = ({setScore, score}) => {

  const [categoryData, setCategoryData] = useState([])
  const [question, setQuestion] = useState(null)
  const history = useHistory()


  useEffect(()=>{
    getCategoryData()
  },[])

  const getCategoryData = async()=>{
    try{
      let res = await Axios.get('/api/categories/all_cards')
      console.log(res.data)
      setCategoryData(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  const renderTiles = () => {
    return(
      categoryData.map(c => (
          <Grid.Column>
            <Segment onClick={()=>setQuestion(c)}><Tile {...c}/></Segment>
          </Grid.Column>
        )
      )
    )
  }


  return(
    <>
    {renderTiles()}
    <Question question={question} setQuestion={setQuestion} setScore={setScore} score={score}/>
    </>
  )
}

export default CategoryData
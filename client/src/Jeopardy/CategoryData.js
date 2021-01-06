import { Grid, Segment } from "semantic-ui-react"
import { useState, useEffect } from "react"
import Axios from "axios"
import Tile from "./Tile"
import Question from "./Question"
import { useHistory } from "react-router-dom"

const CategoryData = () => {

  const [categoryData, setCategoryData] = useState([])
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

  const renderQuestion = (id) => {
    console.log("almost here")
    history.push(`/question/${id}`)
    
  }

  return(
    categoryData.map(c => (
          <Grid.Column>
            <Segment onClick={()=>renderQuestion(c.id)}><Tile {...c}/></Segment>
          </Grid.Column>
      ))
    )
}

export default CategoryData
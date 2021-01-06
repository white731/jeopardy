import { Grid, Segment } from "semantic-ui-react"
import { useState, useEffect } from "react"
import Axios from "axios"
import Tile from "./Tile"

const CategoryData = () => {

  const [categoryData, setCategoryData] = useState([])

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

  return(
    categoryData.map(c => (
          <Grid.Column>
            <Segment><Tile {...c}/></Segment>
          </Grid.Column>
      ))
    )
}

export default CategoryData
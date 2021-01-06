import { Grid, Segment, Header } from "semantic-ui-react"
import { useState, useEffect } from "react"
import Axios from "axios"

const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    getCategories()
  },[])


  const getCategories = async()=>{
    try{
      let res = await Axios.get('/api/categories')
      console.log(res.data)
      setCategories(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  return(
    categories.map((c,i) => (
          <Grid.Column key={i}>
            <Segment>
              <Header >
                {c.name}
              </Header>
            </Segment>
          </Grid.Column>
      ))
    )
}

export default Categories
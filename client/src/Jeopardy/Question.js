import { Header, Grid, Button } from "semantic-ui-react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Axios from "axios"

const Question = () => {

  const [categoryData, setCategoryData] = useState([])

  const {id} = useParams(":id")

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

const renderQuestion = () => {
  const question = categoryData.find(x => x.id == id)
  console.log(question)
  if (question) {
    return (
      <>
        <Header>{question.question}</Header>
        <Button>{question.answer1}</Button>
        <Button>{question.answer2}</Button>
        <Button>{question.answer3}</Button>
        <Button>{question.answer4}</Button>
      </>
    )
  }
}

return (
  <>
    <Header>
      {renderQuestion()}
    </Header>
  </>
)
}
export default Question
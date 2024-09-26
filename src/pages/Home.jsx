import { Link } from 'react-router-dom'
import Card from './components/Card'

function Home() {

  const object =[
    {
      image : 'https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_642,h_502,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
      heding: 'Pizza',
      id : 1,
      paragraph : 'Pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil. These toppings are added over a piece of bread covered with sauce.'
    },
    {
      image : 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      heding: 'Burger',
      id : 2,
      paragraph : 'The term is applied variously to (1) a patty of ground beef, sometimes called hamburg steak, Salisbury steak, or Vienna steak, (2) a sandwich consisting of a patty of ground beef served within a split bread roll, with various garnishes, or (3) the ground beef itself, which is used as a base in many sauces, casseroles This combo provides your body with protein, carbohydrates'
    },
  ]

  return (
    <>
    
     <div className="wrapper">
     {object.map((value,index)=>(
      <Link to={`news/${value.id}`} style={{textDecoration:"none" , color:"black"}}>
        <Card
        key={index}
        image={value.image}
        heding={value.heding}
        paragraph={value.paragraph}
      />
      </Link>
     ))}
     </div>
    </>
  )
}

export default Home

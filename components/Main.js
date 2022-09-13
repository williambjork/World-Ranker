import Header from "./Header"
import Carousel from "./Carousel"
import Card from "./Card"


function Main() {
  return (
    <div className="bgmesh h-screen w-screen overflow-hidden">
      
      <Header />
      <Carousel />
      <Card  maintitle="Card one" subtitle="wow" />
      <Card maintitle="Card two" subtitle="ok" />
      <Card maintitle="Card three" subtitle="cool" />
      </div>

   
  )
}

export default Main
import React ,{useEffect} from 'react'
import SportItem from './SportItem'
import Cricket from "../../asset/cricket.jpeg";
import Chess from "../../asset/chess.jpeg";
import Badminton from "../../asset/badminton.jpeg";
import Football from "../../asset/football.jpeg";
import Carrom from "../../asset/carrom.jpeg";
import Snooker from "../../asset/snooker.jpeg";
import Table_tennis from  "../../asset/table_tennis.jpeg";
import Lawn_tennis from  "../../asset/lwan_tennis.jpeg";
import Basketball from  "../../asset/basketball.jpeg";
import Volleyball from  "../../asset/vollyballl.jpeg";


const DUMMY_DATA = [
  {
    id: 1,
    name: "Cricket",
    minimun_Player: 22,
    src: Cricket ,
    status : "true",
    clg: "gehu"
  },
  {
    id: 2,
    name: "Chess",
    minimun_Player: 2,
    src: Chess,
    status : "true",
    clg: "gehu"
  },
  {
    id: 3,
    name: "Badminton",
    minimun_Player: 2,
    clg: "gehu",
    status : "false",
    src: Badminton,
  },
  
  {
    id: 4,
    name: "Football",
    minimun_Player: 22,
    clg: "gehu",
    status : "true",
    src: Football,
  },
  {
    id: 5,
    name: "Vollyball",
    minimun_Player: 14,
    clg: "gehu",
    status : "true",
    src: Volleyball,
  },
  {
    id: 6,
    name: "Carrom",
    minimun_Player: 2,
    clg: "gehu",
    status : "true",
    src: Carrom,
  },
  {
    id: 7,
    name: "Lawn-Tennis",
    minimun_Player: 2,
    clg: "gehu",
    status : "true",
    src: Lawn_tennis,
  },
  {
    id: 8,
    name: "Table-Tennis",
    minimun_Player: 2,
    clg: "gehu",
    status : "true",
    src: Table_tennis,
  },
  {
    id: 9,
    name: "Snooker",
    minimun_Player: 2,
    clg: "gehu",
    status : "true",
    src: Snooker,
  },
  {
    id: 10,
    name: "Basketball",
    minimun_Player: 14,
    clg: "gehu",
    status : "true",
    src: Basketball,
  },

  
]

const SportsList = (props) => {

  
  useEffect(()=>{
    
  } , [])

  const gehu = DUMMY_DATA.filter((s) => {
    return (s.clg === "gehu");

  });
  // const geu = DUMMY_DATA.filter((s) => {
  //   return (s.clg === "geu");

  // });
  // const geub = DUMMY_DATA.filter((s) => {
  //   return (s.clg === "geub");

  // });

  return (
    <section className='bg-gray-700 w-screen h-full pt-10' >
      <div> 
    
      <div className='w-screen h-max grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-x-3 gap-y-14   place-items-center p-5  '>
        {gehu.map((item) => {

          return <SportItem key={item.id} sport={item} onShowForm ={props.onShowForm} sports={props.sport} />
        })}
      </div></div>
    
     

    </section>
  )
}

export default SportsList
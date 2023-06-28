import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import datas from "../datas/data.json"


import Slider from '../components/Slider/Slider'
import InfoHouse from '../components/InfoHouse/InfoHouse'
import Collapse from '../components/Collapse/Collapse'


export default function Housing() {

  const arrayId = []
  datas.map((house) => arrayId.push(house.id))

  const navigate = useNavigate()
  const { id } = useParams();
  const index = arrayId.indexOf(id)


  useEffect(() => {
    if(index === - 1){
      navigate("/error")
      return;
    }
  }, [id, index, navigate])


  const houseData = datas[index];
  const { title, location, tags, description, equipments, host, pictures, rating } = houseData;
  const {name, picture} = host
  const [firstname, lastname] = name.split(' ')


  return (
    <div>
        <Slider
          sliderImgs={pictures}
        />

        <InfoHouse
        houseTitle={title}
        location={location}
        tags={tags}
        firstname={firstname}
        lastname={lastname}
        thumbnail={picture}
        rate={rating}
        />
      <div className='collapsesContainer'>
      <Collapse label="Description">
         <p>{description}</p>
      </Collapse>
        <Collapse label="Equipements">
          {equipments.map((equipement, index) => <p key={index}>{equipement}</p>)}
        </Collapse>
      </div>
     
    </div>
  )
}

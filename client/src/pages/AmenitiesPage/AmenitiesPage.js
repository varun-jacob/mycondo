import axios from "axios";
import React, { useState, useEffect } from "react";
import Amenity from "../../components/Amenity/Amenity";
import "./AmenitiesPage.scss";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const AmenitiesPage = (props) => {
  const [amenities, setAmenities] = useState([]);
  const condoId = props.match.params.condoId
  const residentId = props.match.params.residentId


  useEffect(() => {
    axios
        .get(`${SERVER_URL}/condos/${condoId}/amenities`)
        .then((result) => {
            setAmenities(result.data)
            console.log(amenities)
        })
        .catch((err) => {
            console.log(err)
        })     
  }, [])

  return (
      <section className="amenities">
            <h2 className="amenities__header">Amenities</h2>
            <div className="amenities__list">
                {amenities.map(amenity => {
                    return (
                        <Amenity key={amenity.id} id={amenity.id} name={amenity.name} image={amenity.image_url} startTime={amenity.start_time} endTime={amenity.end_time} condoId={condoId} residentId={residentId}/>
                    )
                })}
            </div>
      </section>
  )
}
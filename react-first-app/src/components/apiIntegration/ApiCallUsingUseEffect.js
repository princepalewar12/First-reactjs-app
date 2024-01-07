import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ApiCallUsingUseEffect = () => {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    const getPhotoData = async () => {
      try {
        const responseData = await axios.get(
          "https://fakestoreapiserver.reactbd.com/photos"
        );
        setPhotoData(responseData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPhotoData();
  }, []);

  return (
    <>
      {photoData.map((photoData) => (
        <Card style={{ width: "18rem",display: "inline-flex", flexWrap: "nowrap" }}>
        <Card.Img variant="top"style={{width:"286px", height:"180px"}} src={photoData.url} />
        <Card.Body>
          <Card.Title>{photoData.title}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      )
        
      )}
    </>
  );
};

export default ApiCallUsingUseEffect;

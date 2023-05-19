import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const ViewDetails = () => {
    const [toyDetails, setToyDetails] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${_id}`)
          .then((res) => res.json())
          .then((data) => {
            setToyDetails(data);
          });
      }, []);

    return (
        <div>
            sdfghjkl;
            {toyDetails.length}
        </div>
    );
};

export default ViewDetails;
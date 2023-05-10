// const TripDetails = () =>{
//     return(
//         <h1>This is the TripDetails page!</h1>
//     )
// }

// export default TripDetails;





import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TRIPS } from '../utils/queries';
import AddTrip from '../components/AddTrip';

const TripDetails = () => {
  const { loading, data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <h1>All Trips</h1> */}
      <AddTrip trips={trips} />
      
    </>
  );
};

export default TripDetails;

import React, { useEffect, useReducer } from 'react';
import { fetchPetsByStatus } from '../api/PetStoreService';
import { Link } from 'react-router-dom';

const initialState = {
  pets: [],
  loading: true,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, pets: action.payload, loading: false };
    case 'FETCH_ERROR':
      return { ...state, error: 'Failed to fetch pets', loading: false };
    default:
      return state;
  }
}

function PetDashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchPetsByStatus('available')  // Change to 'pending' or 'sold' as needed
      .then(response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  return (
    <div>
      <h1>Available Pets</h1>
      {state.loading ? <p>Loading...</p> :
        state.error ? <p>{state.error}</p> :
          <ul>
            {state.pets.map(pet => (
              <li key={pet.id}>
                {pet.name} - <Link to={`/pets/edit/${pet.id}`}>Edit</Link>
              </li>
            ))}
          </ul>
      }
    </div>
  );
}

export default PetDashboard;

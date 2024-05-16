import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPetsByStatus, updatePet } from '../api/PetStoreService';

function PetEditForm() {
  const { petId } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState({
    id: petId,
    name: '',
    category: { id: 1, name: 'Dogs' },
    photoUrls: ["string"],
    tags: [{ id: 0, name: "string" }],
    status: 'available'
  });

  useEffect(() => {
    const getPetDetails = async () => {
      try {
        const response = await fetchPetsByStatus('available'); 
        const petData = response.data.find(p => p.id === parseInt(petId));
        if (petData) {
          setPet(petData);
        } else {
          navigate('/pets'); 
        }
      } catch (error) {
        console.error('Error fetching pet details:', error);
        navigate('/pets');
      }
    };

    getPetDetails();
  }, [petId, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "category.name") {
      setPet(prevState => ({ ...prevState, category: { ...prevState.category, name: value } }));
    } else {
      setPet(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updatePet(pet);
      navigate('/pets'); 
    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={pet.name} onChange={handleChange} required />
      </label>
      <label>
        Category Name:
        <input type="text" name="category.name" value={pet.category.name} onChange={handleChange} required />
      </label>
     
      <label>
        Status:
        <select name="status" value={pet.status} onChange={handleChange}>
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="sold">Sold</option>
        </select>
      </label>
      <button type="submit">Update Pet</button>
    </form>
  );
}

export default PetEditForm;

import React, { useContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { PortfolioContext } from '../context/PortfolioContext';

const ManageContact = () => {
  const { portfolio, setPortfolio } = useContext(PortfolioContext);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axiosInstance.get('/contact');
        setEmail(response.data.email);
        setPhone(response.data.phone);
      } catch (error) {
        console.error('Error fetching contact information:', error);
      }
    };
    fetchContact();
  }, []);

  const handleUpdateContact = async () => {
    try {
      const response = await axiosInstance.put('/contact', { email, phone });
      setPortfolio((prevState) => ({
        ...prevState,
        contact: response.data,
      }));
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating contact information:', error);
    }
  };

  return (
    <div className="bg-secondary px-5 py-32">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Manage Contact
        </h2>
        {isEditing ? (
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Update Email"
              className="block mx-auto mb-4 p-2"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Update Phone"
              className="block mx-auto mb-4 p-2"
            />
            <button onClick={handleUpdateContact} className="btn-primary">
              Save Changes
            </button>
            <button onClick={() => setIsEditing(false)} className="btn-secondary ml-4">
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p className="py-2">
              <span className="font-bold">Email:</span> {email}
            </p>
            <p className="py-2">
              <span className="font-bold">Phone:</span> {phone}
            </p>
            <button onClick={() => setIsEditing(true)} className="btn-primary">
              Edit Contact
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageContact;

import React, { useEffect, useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import TicketBookingForm from './Form'; 
import { Link } from 'react-router-dom';

const CardComp = () => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleShowModal = (show) => {
    setSelectedShow(show);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowBookingForm(false); 
  };



  return (
    <div>
     <h1>All shows</h1> 
    <div className='Cardstyle'>
      {data &&
        data.map((eachShow) => (
          <div className='Cardstyle'>
          <Card key={eachShow.show.id} className='Eachcardstyle'>
            <Card.Body>
              <Card.Title>{eachShow.show.name}</Card.Title>
              <Card.Text>
                Premiered: {eachShow.show.premiered}
                <br />
                Status: {eachShow.show.status}
              </Card.Text>
              <Button variant="primary" onClick={() => handleShowModal(eachShow)}>
                Show details
              </Button>
            </Card.Body>
          </Card>
          </div>
        ))}

      <Modal show={showModal} onHide={handleCloseModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{selectedShow && selectedShow.show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedShow && (
            <>
              <p>{selectedShow.show.summary}</p>
              <div className='Summary'>
                <img src={selectedShow.show.image.original} className='Imagestlye' alt="Show Poster" />
                <div className='data'>
                  <p>Premiered: {selectedShow.show.premiered}</p>
                  <p>Status: {selectedShow.show.status}</p>
                  <p>Average Rating: {selectedShow.show.rating.average}</p>
                  <Button variant="primary" href={selectedShow.show.url}>
                    Go to website
                  </Button>
                  <div >
                  <Link to="/book-tickets">
                <Button className='Booking'>BOOK TICKETS</Button>
              </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {showBookingForm && <TicketBookingForm onClose={handleCloseModal} />}
    </div>
    </div>
  );
}

export default CardComp;

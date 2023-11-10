import React, { useRef, useState, useCallback, useEffect } from "react";

import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import Error from "./components/Error.jsx";

import { updateUserPlaces, fetchUserPlaces } from "./http.js";
import logoImg from "./assets/logo.png";

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [errorFetching, setErrorFetching] = useState(false);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places);
      } catch (error) {
        setErrorFetching({
          message: error.message || "Failed to fetch user places.",
        });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message: error.message || "Failed to update places.",
      });
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      );

      try {
        await updateUserPlaces(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id)
        );
      } catch (error) {
        setUserPlaces(userPlaces);
        setErrorUpdatingPlaces({
          message: error.message || "Error trying to delete place.",
        });
      }

      setModalIsOpen(false);
    },
    [userPlaces]
  );

  function handleErrorUpdating() {
    setErrorUpdatingPlaces(null);
  }

  return (
    <>
      <Modal open={errorUpdatingPlaces} onCancel={handleErrorUpdating}>
        {errorUpdatingPlaces && (
          <Error
            title="An error occurred while trying to update places"
            message={errorUpdatingPlaces.message}
            onConfirm={handleErrorUpdating}
          />
        )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {errorFetching ? (
          <Error
            title="Error trying to fetch saved data :("
            message={errorFetching.message}
          />
        ) : (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            loadingText="Fetching saved places..."
            isLoading={isFetching}
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;

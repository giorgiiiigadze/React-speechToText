import { createContext, useContext, useEffect, useState } from "react";
import { fetchAudioById, fetchAudios } from "../services/audioService";

const AudiosContext = createContext(null);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const ARTIFICIAL_DELAY = 600;

export function AudiosProvider({ children }) {
  const [audios, setAudios] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadAudios = async () => {
    try {
      setLoading(true);
      setError(null);
      await sleep(ARTIFICIAL_DELAY);
      
      const data = await fetchAudios();
      setAudios(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const loadAudioById = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAudioById(id);
      setCurrentAudio(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AudiosContext.Provider
      value={{
        audios,
        currentAudio,
        loading,
        error,
        loadAudios,
        loadAudioById,
        setCurrentAudio,
      }}
    >
      {children}
    </AudiosContext.Provider>
  );
}

export function useAudios() {
  const context = useContext(AudiosContext);
  if (!context) {
    throw new Error("useAudios must be used inside AudiosProvider");
  }
  return context;
}

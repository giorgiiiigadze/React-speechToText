import api from "./api";

export const fetchAudios = async () => {
  const response = await api.get("/audios/api/audios");
  return response.data;
};

export const fetchAudioById = async (id) => {
  const response = await api.get(`/audios/api/audios/${id}/`);
  return response.data;
};
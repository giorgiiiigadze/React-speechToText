import { useRef, useState } from "react";
import { useAudios } from '../../../context/AudioContext'
import { useToast } from '../../../context/MessageContext/MessageContext'

import "../AudioImage/AudioImage.css"

export default function AudioImage({
  audio,
  size,
  padding = 0,
  borderRadius = 8,
  editable = false,
}) {

  const { addToast } = useToast()
  const { uploadAudioImage } = useAudios();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  function handleFileChange(e) {
    if (!editable) return;

    const file = e.target.files[0];
    if (!file) return;

    setPreviewImage(URL.createObjectURL(file));

    uploadAudioImage(audio.id, file).finally(() => {
      setPreviewImage(null);
    });
  }

  function handleClick() {
    if(!editable) return;

    if (audio?.is_deleted){
      addToast("Cant upload image when audio is deleted") 
    };
    fileInputRef.current?.click();
  }

  const imageSrc = previewImage || audio?.image;

  return (
    <div
      className={`audio-image-container ${
        editable ? "editable" : ""
      }`}
      style={{
        width: size,
        height: size,
        padding,
        borderRadius,
      }}
      onClick={handleClick}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={audio?.title || "Audio image"}
          draggable={false}
        />
      ) : (
        <div className="audio-image-placeholder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </div>
      )}

      {editable && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileChange}
          disabled={audio?.is_deleted}
        />
      )}
    </div>
  );
}

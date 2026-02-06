import { useRef, useState } from "react";
import "../ProfileImage/ProfileImage.css";

export default function ProfileImage({
  src,
  name,
  size = 32,
  padding = 0,
  borderRadius = 8,
  editable = false,
  onChange,
}) {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  const imageSrc = previewImage || src;

  function handleFileChange(e) {
    if (!editable) return;

    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);

    onChange?.(file);

    // optional cleanup
    return () => URL.revokeObjectURL(previewUrl);
  }

  function handleClick() {
    if (editable) fileInputRef.current?.click();
  }

  function getInitials(text) {
    if (!text) return "?";
    return text
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  return (
    <div
      className={`profile-image-container ${editable ? "editable" : ""}`}
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
          alt={name || "Profile image"}
          draggable={false}
        />
      ) : (
        <div className="profile-image-placeholder">
          {name ? (
            getInitials(name)
          ) : (
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          )}
        </div>
      )}

      {editable && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileChange}
        />
      )}
    </div>
  );
}

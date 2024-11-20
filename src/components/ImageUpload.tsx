import React, { useState } from 'react';

interface ImageUploadProps {
  onImageUpload: (url: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] ?? null);
  };

  const handleUpload = () => {
    // TODO: העלאת התמונה לשרת והחזרת ה-URL
    const imageUrl = '// URL של התמונה שהועלתה';
    onImageUpload(imageUrl);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        העלאה
      </button>
    </div>
  );
};

export default ImageUpload;
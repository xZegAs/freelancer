function ImagePreviewModal({ image, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={image} alt="Preview" onClick={(e) => e.stopPropagation()} />
      </div>
    </div>
  );
}

export default ImagePreviewModal;

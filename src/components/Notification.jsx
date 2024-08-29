const Notification = ({ errorMessage, message }) => {
  if (message === null && errorMessage === null) {
    return null;
  }

  return (
    <div>
      {errorMessage && <div className="error">{errorMessage}</div>}
      {message && <div className="success">{message}</div>}
    </div>
  );
};

export default Notification;

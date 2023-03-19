const createError = (status, message, errorCod) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  err.errorCod = errorCod;
  err.date = new Date();

  return err;
};

export default createError;

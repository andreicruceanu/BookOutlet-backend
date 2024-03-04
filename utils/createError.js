const createError = (status, message, errorCode) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  err.errorCode = errorCode ? errorCode : undefined;

  return err;
};

export default createError;

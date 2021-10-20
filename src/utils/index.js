export const handleErrorResponse = ({
  statusCode = 400,
  msg = "Something went wrong :(",
  res,
}) => res.status(statusCode).json({ msg });

export const handleSuccessResponse = ({
  statusCode = 200,
  msg = "Successfully",
  data = "",
  res,
}) => res.status(statusCode).json({ msg, data });

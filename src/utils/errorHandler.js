// Handle Error In Case Error Catch
// Input -> Error
// Output -> Show Error Message Toast

import toast from "react-hot-toast";

export function errorHandler(error) {
  const message = error.response?.data?.message ?? "Something went Wrong!";

  toast.error(message);
}

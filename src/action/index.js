export const setPoll = (polls) => {
  return {
    type: "POLL",
    payload: polls,
  };
};

export const updateStateObject = (
    previousState,
    updatedProperties
  ) => ({
    ...previousState,
    ...updatedProperties,
  })
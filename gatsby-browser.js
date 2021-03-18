export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Este disponibilă o actualizare`
  )

  if (answer === true) {
    window.location.reload()
  }
}

// export const shouldUpdateScroll = () => {
//   return false;
// };
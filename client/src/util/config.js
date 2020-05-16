export const options = {
  autoClose: false,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0.5,
}
export const urlPrefix = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : ''

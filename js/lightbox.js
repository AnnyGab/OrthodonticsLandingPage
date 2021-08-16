const images = document.querySelectorAll('.img-gallery')
const imagesLight = document.querySelector('.add-image')
const lightContainer = document.querySelector('.image-light')
const hamburguer1 = document.querySelector('.hamburguer')

images.forEach((image) => {
  image.addEventListener('click', () => {
    showImage(image.getAttribute('src'))
  })
})

lightContainer.addEventListener('click', (e) => {
  if (e.target !== imagesLight) {
    lightContainer.classList.toggle('show')
    imagesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '1'
  }
})

const showImage = (image) => {
  imagesLight.src = image
  lightContainer.classList.toggle('show')
  imagesLight.classList.toggle('showImage')
  hamburguer1.style.opacity = '0'
}

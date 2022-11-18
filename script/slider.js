const cardTemplate = document.querySelector('#card-template').content.querySelector('.choice-suit__card')
const buttonChangeSlider = document.querySelector('.choice-suit__slider-treck-button')
const cardContainer = document.querySelector('.choice-suit__card-container')


// Создание новой карточки
const createSliderCard = (item) => {
  const cardNew = cardTemplate.cloneNode(true)
  const image = cardNew.querySelector('.choice-suit__slider-content')
  image.src = item.image

  const cardTitle = cardNew.querySelector('.choice-suit__slider-title')
  cardTitle.textContent = item.title

  const cardDescription = cardNew.querySelector('.choice-suit__slider-description')
  cardDescription.textContent = item.description

  const cardPrice = cardNew.querySelector('.choice-suit__slider-price')
  cardPrice.textContent = item.price

  return cardNew
}

// Рендерим
const renderCard = (item) => {
  cardContainer.prepend(createSliderCard(item))
}

// Прогоняем по массиву
cardsMassiveWoman.forEach((item) => {
  renderCard(item)
})

const cardTemplate = document.querySelector('#card-template').content.querySelector('.choice-suit__card')
const cardTemplateMen = document.querySelector('#card-template_men').content.querySelector('.choice-suit__card')
const buttonChangeSlider = document.querySelector('.choice-suit__slider-treck-button')
const cardContainer = document.querySelector('.choice-suit__card-container')
const buttonGenW = document.querySelector('#genW')
const buttonGenM = document.querySelector('#genM')

// Переключатель кнопок размеров
const isActiveSizeButton = (evt) => {
  if (evt.target.classList.contains('choice-suit__size-panel-button')) {
    evt.target.classList.toggle('choice-suit__size-panel-button_active')
  }
}

// Создание новой карточки
const createSliderCard = (item) => {
  if(buttonGenW.classList.contains('choice-suit__gender-bar-button_active')) {
  const cardNew = cardTemplate.cloneNode(true)
  cardNew.addEventListener('click', isActiveSizeButton)
  const image = cardNew.querySelector('.choice-suit__slider-content')
  image.src = item.image

  const cardTitle = cardNew.querySelector('.choice-suit__slider-title')
  cardTitle.textContent = item.title

  const cardDescription = cardNew.querySelector('.choice-suit__slider-description')
  cardDescription.textContent = item.description

  const cardPrice = cardNew.querySelector('.choice-suit__slider-price')
  cardPrice.textContent = item.price

  buttonGenM.addEventListener('click', () => {
    cardNew.remove()
  })

  buttonGenW.addEventListener('click', () => {
    cardNew.remove()
  })

  return cardNew

} else if(buttonGenM.classList.contains('choice-suit__gender-bar-button_active')) {
  const cardNew = cardTemplateMen.cloneNode(true)
  cardNew.addEventListener('click', isActiveSizeButton)
  const image = cardNew.querySelector('.choice-suit__slider-content')
  image.src = item.image

  const cardTitle = cardNew.querySelector('.choice-suit__slider-title')
  cardTitle.textContent = item.title

  const cardDescription = cardNew.querySelector('.choice-suit__slider-description')
  cardDescription.textContent = item.description

  const cardPrice = cardNew.querySelector('.choice-suit__slider-price')
  cardPrice.textContent = item.price

  buttonGenM.addEventListener('click', () => {
    cardNew.remove()
  })

  buttonGenW.addEventListener('click', () => {
    cardNew.remove()
  })

  return cardNew
}}

// Рендерим
const renderCard = (item) => {
  cardContainer.append(createSliderCard(item))
}

// Прогоняем по массиву
cardsMassiveWoman.slice(0, 2).map((item) => {
  renderCard(item)
  return
})

buttonGenM.addEventListener('click', () => {
  buttonGenW.classList.remove('choice-suit__gender-bar-button_active')
  buttonGenM.classList.add('choice-suit__gender-bar-button_active')
  cardsMassiveMen.slice(0, 2).map((item) => {
    renderCard(item)
    return
  })
})

buttonGenW.addEventListener('click', () => {
  buttonGenM.classList.remove('choice-suit__gender-bar-button_active')
  buttonGenW.classList.add('choice-suit__gender-bar-button_active')
  cardsMassiveWoman.slice(0, 2).map((item) => {
    renderCard(item)
    return
  })
})

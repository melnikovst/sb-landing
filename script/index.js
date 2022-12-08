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
  image.src = item.image1

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

  const treckZero = cardNew.querySelector('#treck0')
  const treckFirst = cardNew.querySelector('#treck1')
  const treckSecond = cardNew.querySelector('#treck2')
  const treckThird = cardNew.querySelector('#treck3')

/*----------------------------SLIDER-----------------------------------------*/
  const sliderLine = cardNew.querySelector('.choice-suit__slider-item')
  let offset = 0
  let trecker = 0

  cardNew.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('choice-suit__card-button-right')) {
      offsetUper(offset)
      treckerUp()
      sliderLine.style.left = -offset + 'px'
    }
    if (evt.target.classList.contains('choice-suit__card-button-left')) {
      offsetDowner(offset)
      treckerDown()
      sliderLine.style.left = -offset + 'px'
    }
  })

  const offsetUper = () => {
    offset += 432
    if (offset > 1296) {
      offset = 0
    }
  }

  const offsetDowner = () => {
    offset -= 432
    if (offset < 0) {
      offset = 1296
    }
  }

  const treckerUp = () => {
    trecker += 1
    if (trecker > 3) {
      trecker = 0
      treckZero.classList.add('choice-suit__slider-treck-button_selected')
      treckThird.classList.remove('choice-suit__slider-treck-button_selected')
    }
    if(trecker === 1) {
      treckZero.classList.remove('choice-suit__slider-treck-button_selected')
      treckFirst.classList.add('choice-suit__slider-treck-button_selected')
    }
    if(trecker === 2) {
      treckFirst.classList.remove('choice-suit__slider-treck-button_selected')
      treckSecond.classList.add('choice-suit__slider-treck-button_selected')
    }
    if (trecker === 3) {
      treckSecond.classList.remove('choice-suit__slider-treck-button_selected')
      treckThird.classList.add('choice-suit__slider-treck-button_selected')
    }
  }

  const treckerDown = () => {
    trecker -= 1
    if (trecker < 0) {
      trecker = 3
    }
    if(trecker === 0) {
      treckZero.classList.add('choice-suit__slider-treck-button_selected')
      treckFirst.classList.remove('choice-suit__slider-treck-button_selected')
    }

    if(trecker === 1) {
      treckFirst.classList.add('choice-suit__slider-treck-button_selected')
      treckSecond.classList.remove('choice-suit__slider-treck-button_selected')
    }
    if(trecker === 2) {
      treckSecond.classList.add('choice-suit__slider-treck-button_selected')
      treckThird.classList.remove('choice-suit__slider-treck-button_selected')
    }
    if (trecker === 3) {
      treckThird.classList.add('choice-suit__slider-treck-button_selected')
      treckZero.classList.remove('choice-suit__slider-treck-button_selected')
    }
  }

  /*-------------------Иновационная функция добавления картинок в слайдер---------------------*/
  const sliderItems = cardNew.querySelector('.choice-suit__slider-item')

  const checkerImageCard = () => {
  let check = 0

  if (check === 0) {
    const newPhoto = document.createElement('img')
    newPhoto.src = item.image2
    sliderItems.append(newPhoto)
    check += 1
  }
    if (check === 1) {
      const newPhoto = document.createElement('img')
      newPhoto.src = item.image3
      sliderItems.append(newPhoto)
      check += 1
    }
    if (check === 2) {
      const newPhoto = document.createElement('img')
      newPhoto.src = item.image4
      sliderItems.append(newPhoto)
      check += 1
    }
    return
  }

checkerImageCard()

  return cardNew

/*---------------------------------ДЕЛАЕМ МУЖСКУЮ КАРТОЧКУ----------------------------------------------*/
} else if (buttonGenM.classList.contains('choice-suit__gender-bar-button_active')) {
  const cardNew = cardTemplateMen.cloneNode(true)
  cardNew.addEventListener('click', isActiveSizeButton)
  const image = cardNew.querySelector('.choice-suit__slider-content')
  image.src = item.image1

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

  const treckZero = cardNew.querySelector('#treck0')
  const treckFirst = cardNew.querySelector('#treck1')
  const treckSecond = cardNew.querySelector('#treck2')
  const treckThird = cardNew.querySelector('#treck3')
  /*----------------------------SLIDER-----------------------------------------*/
  const sliderLine = cardNew.querySelector('.choice-suit__slider-item')
  let offset = 0
  let trecker = 0

  cardNew.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('choice-suit__card-button-right')) {
      offsetUper(offset)
      treckerUp()
      sliderLine.style.left = -offset + 'px'
    }
    if (evt.target.classList.contains('choice-suit__card-button-left')) {
      offsetDowner(offset)
      treckerDown()
      sliderLine.style.left = -offset + 'px'
    }
  })

  const offsetUper = () => {
    offset += 432
    if (offset > 1296) {
      offset = 0
    }
  }

  const offsetDowner = () => {
    offset -= 432
    if (offset < 0) {
      offset = 1296
    }
  }

  const treckerUp = () => {
    trecker += 1
    if (trecker > 3) {
      trecker = 0
      treckZero.classList.add('choice-suit__slider-treck-button_selected')
      treckThird.classList.remove('choice-suit__slider-treck-button_selected')
    }
    if(trecker === 1) {
      treckZero.classList.remove('choice-suit__slider-treck-button_selected')
      treckFirst.classList.add('choice-suit__slider-treck-button_selected')
    }
    if(trecker === 2) {
      treckFirst.classList.remove('choice-suit__slider-treck-button_selected')
      treckSecond.classList.add('choice-suit__slider-treck-button_selected')
    }
    if (trecker === 3) {
      treckSecond.classList.remove('choice-suit__slider-treck-button_selected')
      treckThird.classList.add('choice-suit__slider-treck-button_selected')
    }
  }

  const treckerDown = () => {
    trecker -= 1
    if (trecker < 0) {
      trecker = 3
    }
    if(trecker === 0) {
      treckZero.classList.add('choice-suit__slider-treck-button_selected')
      treckFirst.classList.remove('choice-suit__slider-treck-button_selected')
    }

    if(trecker === 1) {
      treckFirst.classList.add('choice-suit__slider-treck-button_selected')
      treckSecond.classList.remove('choice-suit__slider-treck-button_selected')
    }
    if(trecker === 2) {
      treckSecond.classList.add('choice-suit__slider-treck-button_selected')
      treckThird.classList.remove('choice-suit__slider-treck-button_selected')
    }
    if (trecker === 3) {
      treckThird.classList.add('choice-suit__slider-treck-button_selected')
      treckZero.classList.remove('choice-suit__slider-treck-button_selected')
    }
  }

    /*-------------------Иновационная функция добавления картинок в слайдер---------------------*/
    const sliderItems = cardNew.querySelector('.choice-suit__slider-item')

    const checkerImageCard = () => {
    let check = 0

    if (check === 0) {
      const newPhoto = document.createElement('img')
      newPhoto.src = item.image2
      sliderItems.append(newPhoto)
      check += 1
    }
      if (check === 1) {
        const newPhoto = document.createElement('img')
        newPhoto.src = item.image3
        sliderItems.append(newPhoto)
        check += 1
      }
      if (check === 2) {
        const newPhoto = document.createElement('img')
        newPhoto.src = item.image4
        sliderItems.append(newPhoto)
        check += 1
      }
      return
    }

  checkerImageCard()

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




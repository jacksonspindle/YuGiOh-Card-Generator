import {React, useState} from 'react'
import style from './style.css'


 class YuGiOhCard{
        constructor(name, element,image, edition, type, effect) {
            this.name = name
            this.element = element
            this.image = image
            this.edition = edition
            this.type = type
            this.effect = effect
        }
    }
    
    class MonsterCard extends YuGiOhCard{
        constructor(name, element,stars, image, edition, type, effect, atkVal, defVal) {
            super(name, element,image, edition, type, effect)
            this.stars = stars
            this.atkVal = atkVal
            this.defVal = defVal
        }
    }

export default function App() {

    const darkMagician = new MonsterCard('Dark Magician','https://www.vippng.com/png/full/515-5151257_yugioh-dark-attribute.png','⭐⭐⭐⭐⭐⭐⭐','https://wallpapercave.com/wp/wp2661766.jpg', '1st Edition', 'Spellcaster', 'The ultimate wizard in terms of attack and defense', 2500, 2100 )
    const blueEyesWhiteDragon = new MonsterCard('Blue Eyes White Dragon','./LIGHT.png','⭐⭐⭐⭐⭐⭐⭐⭐','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c977eabb-4db6-4ef1-9f0c-1fe00e997eaa/dattmhl-56af50b4-f333-43ee-a7be-f5a2f07a1c9a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5NzdlYWJiLTRkYjYtNGVmMS05ZjBjLTFmZTAwZTk5N2VhYVwvZGF0dG1obC01NmFmNTBiNC1mMzMzLTQzZWUtYTdiZS1mNWEyZjA3YTFjOWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EPBhWKmOr5antj8qSU36PT2gl0p6BWZTRkRWU0j69fI', 'LIMTED EDITION', 'Dragon', 'The ultimate wizard in terms of attack and defense', 3000, 2500 )

    const yugiohCards = [darkMagician, blueEyesWhiteDragon, darkMagician]

    const [currentYuGiOhCard, setCurrentYuGiOhCard] = useState(yugiohCards[0])

    return (
        <div>
            <button className='button' onClick={() => setCurrentYuGiOhCard(yugiohCards[0+1])}></button>
            <div className='yugioh-card-container'> 
            
                <div className='yugioh-card'>
                <img src='./monster-card-background.png' className='yugioh-card-element-img'></img>
                    <div className='yugioh-card-name'>
                        <h1>{currentYuGiOhCard.name}</h1>
                        <img  className='yugioh-card-element-img' src={currentYuGiOhCard.element}></img>
                    </div>
                    <div className='yugioh-card-stars'>
                        <h2>{currentYuGiOhCard.stars}</h2>
                    </div>
                    <div className='yugioh-card-image'>
                        <img src={currentYuGiOhCard.image}></img>
                    </div>
                    <div className='yugioh-card-edition'>
                        <h4>{currentYuGiOhCard.edition}</h4>
                        <h4>TGLD-ENA03</h4>
                    </div>
                    <div className='yugioh-card-effect'>
                        <h2>[{currentYuGiOhCard.type.toUpperCase()}]/[EFFECT]</h2>
                        <p>{currentYuGiOhCard.effect}</p>
                    </div>
                    <div className='yugioh-card-attack-values'>
                        <h3>ATK/{currentYuGiOhCard.atkVal}</h3>
                        <h3>DEF/{currentYuGiOhCard.defVal}</h3>
                    </div>
                    <div className='yugioh-card-meta-data'>
                        <p>348338499384</p>
                        <p>Konami Takahashi</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
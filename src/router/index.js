import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from '../views/MainMenu.vue'
import HowToPlay from '../views/HowToPlay.vue'
import CharacterSelector from '../views/CharacterSelector.vue'
import AdventureCamp from '../views/AdventureCamp.vue'
import Game from '../views/Game.vue'
import PlayerSlot from '../views/PlayerSlot.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'MainMenu',
            component: MainMenu        
        },
        {
            path: '/how-to-play',
            name: 'HowToPlay',
            component: HowToPlay        
        },
        {
            path: '/character-selector',
            name: 'CharacterSelector',
            component: CharacterSelector        
        },
        {
            path: '/camp',
            name: 'Camp',
            component: AdventureCamp        
        },
        {
            path: '/game',
            name: 'Game',
            component: Game,
        },
        {
            path: '/playerslot',
            name: 'PlayerSlot',
            component: PlayerSlot
        }

    ]
})
export default router
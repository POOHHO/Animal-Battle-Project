import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from '../views/MainMenu.vue'
import PlayerSlot from '../views/PlayerSlot.vue'
import HowToPlay from '../views/HowToPlay.vue'
import CharacterSelector from '../views/CharacterSelector.vue'
import AdventureCamp from '../views/AdventureCamp.vue'
import Game from '../views/Game.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'MainMenu',
            component: MainMenu     
        },
        {
            path: '/character-selector',
            name: 'CharacterSelector',
            component: CharacterSelector        
        },        
        {
            path: '/:notfoundpath(.*)',
            name: 'PageNotFound',
            component: PageNotFound        
        },
        {
            path: '/playerslot',
            name: 'PlayerSlot',
            component: PlayerSlot
        },
        {
            path: '/how-to-play',
            name: 'HowToPlay',
            component: HowToPlay        
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
        }

    ]
})
export default router
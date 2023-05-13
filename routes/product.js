import { Router } from "express";
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Yashil_Uyim | Urikguli',
        isHome: true
    })
})

router.get('/market', (req, res) => {
    res.render('market', {
        title: 'Market | Urikguli',
        isMarket: true
    })
})

router.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add | Urikguli',
        isAdd: true,
    })
})

export default router;
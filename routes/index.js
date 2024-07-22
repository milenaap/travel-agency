import express from 'express';

const router = express.Router();

router.get('/', (req, res)=> { // req- lo que enviamos : res - lo que express nos responde
    res.render('Inicio');
});
router.get('/nosotros', (req, res)=> { 

    const viajes = 'Viaje a Alemania';

    res.render('nosotros', {
        viajes
    });
});

export default router;
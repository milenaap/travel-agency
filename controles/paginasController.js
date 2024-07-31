import { Viaje} from '../models/Viajes.js';
import { Testimonial } from '../models/Testimoniales.js';


const paginaInicio = (req, res)=> { // req- lo que enviamos : res - lo que express nos responde
    res.render('Inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res)=> { 

    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => { 

    // Consultar BD
    const viajes = await Viaje.findAll();
    


    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res)=> { 

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
}

// Muestra un viaje por su slug

const paginaDetalleViaje = async (req, res) => {
    const { slug } =  req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug }});

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje

}
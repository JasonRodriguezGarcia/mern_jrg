import { Router} from 'express';
import db from '../db.js'; // importamos PouchDB
const router = Router()

// busqueda para precio
router.get('/search', async(req, res) => { // ojo con el order al poner este gues
    // http://localhost:5000/api/v1/cars/search?ano=1990
    const {ano} = req.query
    try {
        const selector = {} // creamos datos para luego consultar con el find, ESTO PARA UN AND
        
        // esto para el OR, OJO tienen que existir los campos nombre y edad en el querystring
        // const selector = {
        //     $or: [
        //         {nombre: nombre},
        //         {edad: {$gt: parseInt(edad)}}

        //     ]
        // }
// https://pouchdb.com/guides/mango-queries.html // mirar !!!
        // // {nombre: 'Maria', edad: { $gt:12} }    //gt para greater than,  gte lte lt
        // if (nombre) {  // si tenemos el selector nombre lo añadimos al selector
        //     selector.nombre = nombre
        // }
        // // ojo del querystring viene string, para edad hay que hacer un parseInt
        // // esto sería un AND POR DEFECTO
        if (ano) {
            selector.ano = {$gt: ano}
        }

        console.log(selector)

        const result = await db.find({
            selector,
            fields: ['_id', '_rev', 'marca', 'modelo', 'ano'],
            limit: 10
        })
        res.json(result.docs)
    }
    catch (error) {
        console.log(error)
    }
    // res.json(nombre)
})



router.get('/', async (req, res) => {
    
    try {
        // Fetch all documents from the 'users_db'
        const result = await db.allDocs({ include_docs: true });
        console.log(result);
  
        // Extract car data from the documents
        // const cars = result.rows.map(row => row.doc);

        // Filter the cars if 'type' is used in the document
        const cars = result.rows
            .filter(row => row.doc.type === 'car')  // Ensure the document type is 'car'
            .map(row => row.doc);  // Map to get the document content

        console.log(cars)
 
        // Send the cars as JSON response
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve cars' });
    }
});
  
router.get('/:id', async (req, res) => {

    const {id} = req.params
    console.log(id)
    try {
        const car = await db.get(id)   // cogemos documento (car)
        // await db..remove(user)   // borra documento
        res.status(200).json({ ...car })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to get car' });
    }
});

router.post('/', async (req, res) => {
    try {
        const car = req.body; // car data from request body
        car.type = "car" // crear un usuario, tipo usuario car (como una tabla cars)
        console.log(car)
        
        // Insert new car into the database
        const response = await db.post(car);
        console.log(response)
        
        // Respond with success
        res.status(201).json({ id: response.id, ...car });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add car' });
    }
});

router.delete('/:id', async (req, res) => {

    const {id} = req.params
    try {
        const car = await db.get(id)   // cogemos documento (car)
        await db.remove(car)   // borra documento
        res.status(200).json({message: "OK"})

    } catch (error) {
        res.status(500).json({ error: 'Failed to delete car' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;  // Get the car ID from the URL
        const updatedCar = req.body;  // The updated car data from the request body

        // Fetch the current car data using the ID
        const existingCar = await db.get(id);
        
        // Update the existing car's data with the new data
        const updatedDoc = {
            ...existingCar,
            ...updatedCar, // This will overwrite any matching fields
        };

        // Save the updated document back to the database
        const response = await db.put(updatedDoc);

        // Send back the updated car data
        res.status(200).json({
            id: response.id,
            rev: response.rev,
            ...updatedCar,  // The updated fields from the request
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});

export default router;
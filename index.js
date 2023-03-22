const { sequelize } = require('./db/connection.js');
const app = require('./app.js');
const { User } = require('./models/User.js');
//import {data} from './usuASD.js';
const { Company } = require('./models/Company.js');
const data = require('./usuASD.js');
const { Colaborator } = require('./models/Colaborator.js');

app.get('/', async (req, res) => {
    const users = await User.findAll({ include: [{ model: Company },{model: Colaborator} ]});
    const company = await Company.findAll();
    res.send(users)
});
app.get('/company', async (req, res) => {

    const company = await Company.findAll();
    res.status(200).json(company)
});



//SOLO EJECUTAR PARA LLENAR LA BASE DE DATOS CON LOS USUARIOS
// app.post('/user', async (req, res) => {
//     try {
//         // const id = "78d4c30f-4166-40a9-afe3-bfbc8a4b5445";
//         // const VLR = "d7ecdd9c-098b-417f-8b00-4669ad1189bb"
//         // const NUMUSE = "96a596d5-8efc-47d5-8837-f9b7ef176c2a"
//         // const MB = "c6c149bf-5093-43e8-af1e-f97d3eeb241b"

//         //const { email, pass, /*id, codemp*/ } = req.body;

//         // if ( !email || !pass) {
//         //     return res.status(500).json({ msg: "No se recibieron los datos necesarios." })
//         // }

//         data?.map(async (e) => {
//             const newUser = await User.create({
//                 email: e['nom-usu'],
//                 pass: e['cla-usu'],
//                 name: e['des-usu']
//             });
//             const colaborator = await Colaborator.findOne({where: {email: e['nom-usu']}});
//             if(colaborator) colaborator.addUser(newUser);
//             e['cod-emp'].map(async (i) => {
//                 const company = await Company.findOne({
//                     where: {codemp: i}
//                 });
//                 // const allCompany = Promise.all(company);
//                 if(company) newUser.addCompany(company);

//                 //console.log("va pasando")
//             })

//         })




//         return res.status(200).json(data);

//     } catch (error) {
//         console.log(error);
//     }
// })

//POST LOGIN
// app.post('/user', async (req, res) => {

//     try {
//         //const id = "5dfc3822-cdd5-40e7-b905-45687fa29dcd";
//         // const codemp = "eab7fe53-412b-4e7e-a4e8-a12519181a96";
//         const { email  /*id, codemp*/ } = req.body;
//         //console.log(req.body)
//         if (!email) {
//             return res.status(500).json({ msg: "No se recibieron los datos necesarios." })
//         }
//         const newUser = await User.findOne({ where: { email: email }, include: { model: Company } });

//         //console.log(newUser);
//         return res.status(200).json({ user: newUser });
//     } catch (error) {
//         console.log(error);
//     }
// })

//GET
app.post('/user', async (req, res) => {
    const { email } = req.body;
    console.log(email)
    try {
        if (!email) {
            return res.status(500).json({ msg: "No se recibieron los datos necesarios." })
        }
        if (email) {
            const user = await User.findOne({ where: { email: email }, include:[{model: Colaborator}, { model: Company } ]});
            res.status(200).json(user)
        }
    } catch (error) {
        console.log(error)
    }

});


app.get('/colaborators/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const infoC = await Colaborator.findOne({ where: { id: id } }, {
            include: [{ model: User, include: [{ model: Company }] }]
        })

        res.status(200).json(infoC)



    } catch (error) {
        console.log(error)
    }
})
app.get('/colaborators', async (req, res) => {
    try {
        const infoC = await Colaborator.findAll({
            include: [{ model: User, include: [{ model: Company }] }]
        })

        res.status(200).json(infoC)



    } catch (error) {
        console.log(error)
    }
})


app.post('/colaborators', async (req, res) => {
    const { name, lastname, email, username, pass, nacionality, civilstate, dni, cuil, domdni, domreal, loc, prov, codpostal, correo, fechanacimiento } = req.body;

    try {
        let colaborator = await Colaborator.create({
            name,
            lastname,
            email,
            username,
            pass,
            nacionality,
            civilstate,
            dni,
            cuil,
            domdni,
            domreal,
            loc,
            prov,
            codpostal,
            correo,
            fechanacimiento
        })
        res.status(200).json(colaborator)
    } catch (error) {
        console.log(error)
    }
})
app.put('/colaborators/:id', async (req, res) => {
    const info = req.body;
    const { id } = req.params;
    console.log(info)
    console.log(id)


    try {


        let updatedColaborator = await Colaborator.update(info, { where: { id } })

        // const updatedColaborator = await Colaborator.findOne({where: {id: id}})
        // info.name ? await updatedColaborator.update({name: info.name}) : "no updatie el name";
        // info.lastname ? await updatedColaborator.update({lastname: info.lastname}) : "no updatie el lastname";
        // info.email ? await updatedColaborator.update({email: info.email}) : "no updatie el email";
        // info.username ? await updatedColaborator.update({username: info.username}) : "no updatie el username";
        // info.pass ? await updatedColaborator.update({pass: info.pass}) : "no updatie el pass";
        // info.nacionality ? await updatedColaborator.update({nacionality: info.nacionality}) : "no updatie el nacionality";
        // info.civilstate ? await updatedColaborator.update({civilstate: info.civilstate}) : "no updatie el civilstate";
        // info.dni ? await updatedColaborator.update({dni: info.dni}) : "no updatie el dni";
        // info.cuil ? await updatedColaborator.update({cuil: info.cuil}) : "no updatie el cuil";
        // info.domdni ? await updatedColaborator.update({domdni: info.domdni}) : "no updatie el domdni";
        // info.domreal ? await updatedColaborator.update({domreal: info.domreal}) : "no updatie el domreal";
        // info.loc ? await updatedColaborator.update({loc: info.loc}) : "no updatie el loc";
        // info.prov ? await updatedColaborator.update({prov: info.prov}) : "no updatie el prov";
        // info.codpostal ? await updatedColaborator.update({codpostal: info.codpostal}) : "no updatie el codpostal";
        // info.correo ? await updatedColaborator.update({correo: info.correo}) : "no updatie el correo";
        // info.fechanacimiento ? await updatedColaborator.update({fechanacimiento: info.fechanacimiento}) : "no updatie el fechanacimiento";

        res.status(200).json(updatedColaborator)
    } catch (error) {
        console.log(error)
    }
})
app.delete('/colaborators/:id', async (req, res) => {
    const { deleted } = req.query

    const { id } = req.params
    try {
        //const deletedColaborator = await Colaborator.findOne({where: {id: id}})
        //si no funciona hacer el find

        let co = await Colaborator.update({
            isDeleted: deleted
        }, {
            where: { id: id }
        })
        res.status(200).send("se cambio")
    } catch (error) {
        res.send(error)

    }
})
//PARA LLENAR LA BASE DE DATOS DE COMPAÑIAS
app.post('/company', async (req, res) => {
    try {
        const { name, codemp } = req.body;
        const newCompany = await Company.create({
            name,
            codemp
        });
        console.log(newCompany);
        return res.status(200).json({ newCompany });
    } catch (error) {
        console.log(error);
    }
})





















































async function main() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });
        app.listen(3002, () => { console.log('Servidor corriendo en puerto 3002') });
    } catch (error) {
        console.error(error);
    }
}

main(); 
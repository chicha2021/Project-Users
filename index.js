const { sequelize } = require('./db/connection.js');
const app = require('./app.js');
const { User } = require('./models/User.js');
const { Company } = require('./models/Company.js');


app.get('/', async (req, res) => {
   const users = await User.findAll({include: {model: Company}});
   const company = await Company.findAll();
    res.send(users)
});




// app.post('/user', async (req, res) => {
//     try {
//         const id = "78d4c30f-4166-40a9-afe3-bfbc8a4b5445";
//         const VLR = "d7ecdd9c-098b-417f-8b00-4669ad1189bb"
//         const NUMUSE = "96a596d5-8efc-47d5-8837-f9b7ef176c2a"
//         const MB = "c6c149bf-5093-43e8-af1e-f97d3eeb241b"

//         const { email, pass, /*id, codemp*/ } = req.body;
//         if ( !email || !pass) {
//             return res.status(500).json({ msg: "No se recibieron los datos necesarios." })
//         }
//         const newUser = await User.create({
//             email,
//             pass
//         });
//         const company = await Company.findAll();

//         newUser.addCompany(company);
     

//         return res.status(200).json({ user: newUser });
//     } catch (error) {
//         console.log(error);
//     }
// })

//POST LOGIN
app.post('/user', async (req, res) => {
   
    try {
        //const id = "5dfc3822-cdd5-40e7-b905-45687fa29dcd";
        // const codemp = "eab7fe53-412b-4e7e-a4e8-a12519181a96";
        const { email  /*id, codemp*/ } = req.body;
        console.log(req.body)
        if ( !email ) {
            return res.status(500).json({ msg: "No se recibieron los datos necesarios." })
        }
        const newUser = await User.findOne({where: {email: email}, include: {model: Company}});
        
        console.log(newUser);
        return res.status(200).json({ user: newUser });
    } catch (error) {
        console.log(error);
    }
})




app.post('/company', async (req, res) => {
    try {
        const { name } = req.body;
        const newCompany = await Company.create({
            name,
        });
        console.log(newCompany);
        return res.status(200).json({ company: newCompany });
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
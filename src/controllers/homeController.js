import { json } from 'body-parser';
import db from '../models/index';
import CRUDservices from '../services/CRUDservices';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();



        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }


}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getCRUD = (red, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (red, res) => {
    let message = await CRUDservices.createNeWUser(red.body);
    console.log(message)
    return res.send('post crud from server');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}

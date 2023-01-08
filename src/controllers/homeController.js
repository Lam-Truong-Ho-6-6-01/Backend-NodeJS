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

let displaygetCRUD = async (red, res) => {
    let data = await CRUDservices.getAllUser();

    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId)
    if (userId) {
        let userData = await CRUDservices.getUserInfoById(userId);

        return res.render('editCRUD.ejs', {
            user: userData
        });
        // let userData
    } else {
        return res.send('User not Found!');
    }



}

let putCRUD = async (red, res) => {
    let data = red.body;
    let AllUser = await CRUDservices.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: AllUser
    })

}
let deleteCRUD = async (red, res) => {
    let id = red.query.id;
    if (id) {
        await CRUDservices.deleteUserById(id);
        return res.send('delete the user success!!')
    } else {
        return res.send('Use not Found')
    }



}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displaygetCRUD: displaygetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}

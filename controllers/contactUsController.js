const ContactUs = require('../models/ContactUs');
const { Op } = require('sequelize');

exports.getAllContactUsMessages = async (req,res) =>{
    try{
        const {page = 1, perPage = 10} = req.query;
        const offset = (page - 1) * perPage;

        const contactUs = await ContactUs.findAll({
            offset,
            limit: perPage,
        });

    if (contactUs.length === 0){
        return res.status(404).json({message: 'No messages found'});
    }

    res.json(contactUs);
    }catch(error) {
        console.error(error)
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'});
    }
};

exports.getMessageById = async (req, res) => {
    try {
      const { id } = req.params;
      const contactus = await ContactUs.findByPk(id);
  
      if (!contactus) {
        return res.status(404).json({ message: 'Message not found' });
      }
  
      res.json(contactus);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.createMessage = async(req, res) => {
    try{
        const {name,email,message} = req.body;
        const contactUs = await ContactUs.create({name,email,message});
        res.status(201).json(contactUs);
    } catch(error){
        res.status(500).json({error:'Internal Server Error'});
    }
};

exports.deleteMessage = async(req,res)=> {
    try {
        const {id} = req.params;
        const contactus = await ContactUs.findByPk(id);
        if(!contactus){
            return res.status(404).json({message: 'Message not found'});
        }
        await contactus.destroy();
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

exports.updateMessage = async(req,res)=>{
    try {
        const { id } = req.params;
        const {name,email,message} = req.body;
        const contactus = await ContactUs.findByPk(id);

        if(!contactus){
            return res.status(404).json({message:'Message not found'});
        }
        contactus.name = name;
        contactus.email = email;
        contactus.message = message;

        await contactus.save();
        res.json(contactus);

    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
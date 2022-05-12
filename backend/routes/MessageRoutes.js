const routes = require("express").Router();
const Messages = require('../modules/MessageSchema')

routes.post('/getmessages', async (req,res)=>{
    const { FullName, Email, Message } = req.body;
  const AddMessages = async () => {
    try {
      if (!FullName || !Email || !Message) {
        res.status(400).json({ error: "Invalid Input" });
      } else {
        const st = new Messages({
        FullName: req.body.FullName,
          Email: req.body.Email,
          Message: req.body.Message,
        });
        const result = await st.save();
        console.log(result);
        res.send(result);
      }
    } catch (err) {
      console.log(err);
    }
  };
  AddMessages();
});

module.exports = routes;
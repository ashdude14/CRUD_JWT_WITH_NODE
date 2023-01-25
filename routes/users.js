const express = require('express');
const router = express.Router();

let users = [
    {
        firstName: "Aashish",
        lastName : "Singh",
        email:"ashish.kumar.singh.jee@gmail.com",
        DOB:"14-10-2000"
    },
    {
        firstName: "Ankit",
        lastName: "Yadav",
        email:"ankit.yadav12@gmail.com",
        DOB:"05-03-2001",
    },
    {
        firstName:"Suresh",
        lastName:"Nagar",
        email:"suresh.nagar5@gmail.com",
        DOB:"04-10-2002",
    }
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
    res.send(users);
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
    const email = req.params.email;
    let filtered_users = users.filter((user) => user.email === email);
    res.send(filtered_users);
});

// POST request: Create a new user
router.post("/",(req,res)=>{
    users.push({"firstName":req.query.firstName,"lastName":req.query.lastName,"email":req.query.email,"DOB":req.query.DOB});
    res.send("The user" + (' ')+ (req.query.firstName) + " Has been added!")
});


// PUT request: Update the details of a user by email ID
//curl --request PUT 'localhost:5000/user/johnsmith@gamil.com?DOB=1/1/1971'
router.put("/:email", (req, res) => {
  const email=req.params.email;
  let filtered_users=users.filter((user)=>user.email==email);
  if(filtered_users.length>0)
  {
        let filtered_user=filtered_users[0];
        let DOB=req.query.DOB;
        let firstName=req.query.firstName;
        let lastName = req.query.lastName;
        if(DOB)
        {
            filtered_user.DOB=DOB;
        }
        if(firstName){
            filtered_user.firstName=firstName;
        }
        if(lastName){
            filtered_user.lastName=lastName;
        }
        users=users.filter((user)=>user.email!=email);
        users.push(filtered_user);
        res.send(`User with the email  ${email} updated.`);

  }
  else
  {
      res.send("Unable to find user!");
  }
});


// DELETE request: Delete a user by email ID
//curl --request DELETE 'localhost:5000/user/johnsmith@gamil.com'
router.delete("/:email", (req, res) => {
    const email = req.params.email;
    users = users.filter((user) => user.email != email);
    res.send(`User with the email  ${email} deleted.`);
});
// JSON STRINGFY
router.get("/",(req,res)=>{
    res.send(JSON.stringify({users},null,4));
})
module.exports=router;

//Initializing the required modules
const authmodel = require("../model/user");

//Function to register the user
module.exports = {
  register: async (req, res) => {
    try {
      console.log("register func called");
      const { email, password } = req.body;

      //Checking if the user already exists
      const existingUser = await authmodel.findOne({
        email,
      });

      //checking if the user already exists

      // if (existingUser) {
      //   return res.status(400).json({
      //     message: "User already exists",
      //   });
      // }

      //validating the field
      if (!email || !password) {
        return res.status(400).json({
          message: "Email and password are required",
        });
      }

      //Creating a new user
      const user = new authmodel({
        email,
        password,
      });

      //Saving the user to the database

      // await user.save();

      res.status(201).json({
        message: "User registered successfully",
        status: 201,
      });

      //how do i send response as url to redirect to login page
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

const users = [];

// add mongo db schema and model here in future
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// model
const User = mongoose.model("user", userSchema);
//get all users
export const getAll = async (req, res) => {
  try {
    // Simulate async operation
    const users = await User.find({});
    res.status(200).json({
      data: users,
      message: "Users fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// get user by id
export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    // const user = users.find(user => user.id.toString() === id);
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: "User not found",
        data: null,
      });
      return;
    }
    res.status(200).json({
      data: user,
      message: "User fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// create user
export const createUser = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.body);
    if (!data) {
      res.status(400).json({
        message: "data expected",
        data: null,
      });
      return;
    }
    // users.push({ ...data, id: users.length + 1 });
    //  write in database

    const user = await User.create(data);
  
    res.status(201).json({
      message: "New User created ",
      data: users.at(-1),
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Update User
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!data) {
      res.status(400).json({
        message: "data expected",
        data: null,
      });
      return;
    }
    //   const userIndex = users.findIndex((user) => user.id.toString() === id);

    const user = await User.findByIdAndUpdate(id, data,{ new: true });
          
      res.status(201).json({
        message: "User updated successfully",
        data: users[userIndex],
      });
    
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    // const userIndex = users.findIndex((user) => user.id.toString() === id);
    await User.findByIdAndDelete(id);
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: "User not found",
        data: null,
      });
      return;
    }

    res.status(200).json({
      message: "User deleted successfully",
      data: deletedUser[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

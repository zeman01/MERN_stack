const users = [];


//get all users
export const getAll = async (req, res) => {
    try {
        // Simulate async operation
        res.status(200).json({
            data: users,
            message: 'Users fetched successfully'
        });
    } catch (error) {
    res.status(500).json({
         message: 'Internal Server Error' });
}}; 

// get user by id
export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = users.find(user => user.id.toString() === id);
        if (!user) {
            res.status(404).json({
                message: 'User not found',
                data: null
            });
            return;
        }
        res.status(200).json({
            data: user,
            message: 'User fetched successfully'
        });

    } catch (error) {
    res.status(500).json({
         message: 'Internal Server Error' });
}};

// create user
export const createUser  = async (req, res) => {
    try {
        const data= req.body;
if(!data){
    res.status(400).json({
        message: 'data expected',
        data: null
    });
    return;
}else{
    users.push({...data, id: users.length + 1});
    res.status(201).json({
        
        message: 'New User created ',
        data: users.at(-1)
    });
}
    } catch (error) {
    res.status(500).json({
         message: 'Internal Server Error' });
}};

// Update User
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data= req.body;
if(!data){
    res.status(400).json({
        message: 'data expected',
        data: null
    });
    return;
}else{
    const userIndex = users.findIndex(user => user.id.toString() === id);
    if (userIndex === -1) {
        res.status(404).json({
            message: 'User not found',
            data: null
        });
        return;
    }
    users[userIndex] = { ...users[userIndex], ...data };
    res.status(200).json({
        
        message: 'User updated successfully',
        data: users[userIndex]
    });
}
    } catch (error) {
    res.status(500).json({
         message: 'Internal Server Error' });
}}; 

// Delete User
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userIndex = users.findIndex(user => user.id.toString() === id);
        if (userIndex === -1) {
            res.status(404).json({
                message: 'User not found',
                data: null
            });
            return;
        }
        const deletedUser = users.splice(userIndex, 1);
        res.status(200).json({
            message: 'User deleted successfully',
            data: deletedUser[0]
        });
    } catch (error) {
    res.status(500).json({
         message: 'Internal Server Error' });
}};
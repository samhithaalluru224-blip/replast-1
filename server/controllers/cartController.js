import User from "../models/User.js";

export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body; // only cartItems from frontend
    const userId = req.userId; // set by authUser middleware

    if (!userId) {
      return res.json({ success: false, message: "Unauthorized" });
    }

    await User.findByIdAndUpdate(userId, { cartItems });

    return res.json({ success: true, message: "Cart updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

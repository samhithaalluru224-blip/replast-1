import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authUser = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    try {
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!tokenDecoded.id) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        req.userId = tokenDecoded.id;

        // Fetch the actual user document (optional, but useful)
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }
        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({ success: false, message: 'Token invalid' });
    }
}

export default authUser;

import Admin from "../model/AdminModel.js";

const cookieExpiresTime = 7;
const options = {
  expires: new Date(Date.now() + cookieExpiresTime * 24 * 60 * 60 * 1000),
  httpOnly: true,
};

// Admin Registration

export const RegisterAdmin = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const admin = await Admin.create({
      name,
      email,
      password,
    });
    const token = admin.genarateToken();
    res.status(200).json({
      message: "succesfully Registered User",
      admin,
      token,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "email already taken",
      });
    }
    res.status(400).json({
      message: "something went wrong",
      error: error.message,
    });
  }
};

//login function
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Invalid email or Password",
    });
  }

  try {
    const admindata = await Admin.findOne({ email }).select("+password");
    if (!admindata) {
      return res.status(400).json({
        message: "invalid Email or Password",
      });
    }
    const token = admindata.genarateToken();
    res.status(200).cookie("token", token, options).json({
      message: "succussfully login user",
    });
  } catch (error) {
    res.status(402).json({
      message: "somthing went wrong",
      message: error.message,
    });
  }
};

//logOut function
export const logoutAdmin = (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    message: "Succesfully LogOut",
  });
};

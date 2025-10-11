import UserModel from "../models/userModel.js";
import { hash } from "../utils/hashUtil.js";

export const register = async (req, res) => {
  try {
    const registerData = req.body;

    console.log(registerData);

    const hashPassword = hash(registerData.password);

    await UserModel.create({
      username: registerData.username,
      email: registerData.email,
      password: registerData.password,
    });

    res.status(201).json({
      message: "Berhasil register, silahkan login",
      data: null,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
      data: null,
    });
  }
};

export const login = async (req, res) => {
  try {
    const loginData = req.body;

    //mencari user berdasarkan email
    const user = await UserModel.findOne({
      email: loginData.email,
    });

    //jika user tidak ditemukan
    if (!user) {
      return res.status(404).json({
        message: "User tidak di temukan",
        data: null,
      });
    }

    //membandingkan password yang didalam db dengan request
    if (compare(loginData.password, user.password)) {
      return res.status(200).json({
        message: "Login berhasil",
        data: {
          username: user.username,
          email: user.email,
          token: "TOKEN",
        },
      });
    }
    res.status(401).json({
      message: "Login gagal",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      data: null,
    });
  }
};

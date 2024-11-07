import bycrypt from "bcrypt";
import { validationResult } from "express-validator";
import db from "../../models/index.cjs";
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../../utils/httpStatusCodes.js";

export const getAll = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

export const findById = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

export const save = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(BAD_REQUEST).json({ errors: errors.array() });
    } else {
      const newUser = await db.User.create({
        ...req.body,
      });
      res.json({ message: "Usuario creado con exito", newUser });
    }
  } catch (error) {
    console.log(error);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

export const update = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(BAD_REQUEST).json({ errors: errors.array() });
    } else {
      const newUser = await db.User.update(
        {
          ...req.body,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      const user = await db.User.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: "Usuario actualizado con exito", user });
    }
  } catch (error) {
    console.log(error);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

export const destroy = async (req, res) => {
  try {
    await db.User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Usuario eliminado con exito" });
  } catch (error) {
    console.log(error);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};

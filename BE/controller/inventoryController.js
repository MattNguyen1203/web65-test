import { Inventories } from "../model/model.js";
import asyncWrapFunc from "../utils/asyncWrapFunc.js";
import throwErr from "../utils/throwErr.js";

const inventoryController = {
  getAll: asyncWrapFunc(async (req, res) => {
    const inventoryList = await Inventories.find();
    return res.status(200).json({ list: inventoryList });
  }),

  filter: asyncWrapFunc(async (req, res) => {
    const query = req.query,
      configObj = { min: "$gte", max: "$lte" };

    Object.keys(query).some(
      (keyQuery) => !Object.keys(configObj).find((keyConfig) => keyConfig === keyQuery)
    ) && throwErr(400, "invalid key query");

    const filterObj = Object.keys(query).reduce((obj, key, index) => {
      return { ...obj, [configObj[key]]: Object.values(query)[index] };
    }, {});

    const foundList = await Inventories.find({ instock: filterObj });
    return res.status(200).json({ list: foundList });
  }),
};

export default inventoryController;

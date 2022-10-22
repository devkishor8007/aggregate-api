const One = require("../model/one-model");

exports.findAll = async (_req, res) => {
  const data = await One.find();
  return res.json({ count: data.length, data });
};

exports.create = async (req, res) => {
  const { name, price, address } = req.body;
  const data = await One.create({
    name,
    address,
    price,
  });
  return res.send(data);
};

exports.createMany = async (_req, res) => {
  const data = await One.create([
    {
      name: "Copy",
      address: "Pokhara",
      price: 300,
    },
    {
      name: "Pen",
      address: "Chitwan",
      price: 430,
    },
    {
      name: "Laptop",
      address: "Ktm",
      price: 280,
    },
    {
      name: "Mobile",
      address: "Chitwan",
      price: 850,
    },
  ]);
  return res.send(data);
};

exports.matchOne = async (_req, res) => {
  const docs = await One.aggregate([
    {
      $match: {
        price: {
          $gt: 450,
        },
      },
    },
  ]);

  return res.json({ count: docs.length, data: docs });
};

exports.paginationOne = async (req, res) => {
  const { limit, skip, price } = req.query;
  const docs = await One.aggregate([
    {
      $match: {
        price: {
          $gt: +price || 100,
        },
      },
    },
    {
      $limit: +limit,
    },
    {
      $skip: +skip,
    },
    {
      $sort: {
        name: 1, // -1 is ascending order and 1 is descending order
      },
    },
  ]);

  return res.json({ count: docs.length, data: docs });
};

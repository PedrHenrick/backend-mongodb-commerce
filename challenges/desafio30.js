db.produtos.updateOne(
  { nome: { $eq: "Big Mac" } },
  { $unset: { curtidas: "" } },
);
db.produtos.find(
  {},
  { _id: 0, nome: true, curtidas: true },
);
// Its returns all documents which have name is abhi
db.product.find({ name: "abhi" });

// Its returns only one documents that comes first with name abhi
db.product.findOne({ name: "abhi" });

// Its returns all documents which have price is greater than 1000;
db.product.find({ price: { $gt: 1000 } });

// Its returns all documents which have price is less than 1000;
db.product.find({ price: { $lt: 1000 } });

// Its returns all documents which have price is equal to 1000;
db.product.find({ price: { $eq: 1000 } });

// Its find product by id
db.product.findById({ id: 1 });

// to count documents
db.product.find({ price: 2000 }).count();

// to limit documents
db.product.find({ price: 2000 }).limit(3);

// to skip documents
db.product.find({ price: 2000 }).skip(2);

// to sort documents in ascending order and -1 for descending order
db.product.find({ price: 2000 }).sort({ price: 1 });

// so, its give data with only name field
db.product.find({}, { name: 1, _id: 0 });

// "And" operator only give documents that pass both conditions
db.products.find({ $and: [{ 'price': { $gt: 10 } }, { 'name': 'Notebook Collection' }] })
db.products.find({ 'price': { $gt: 10 }, 'name': { $eq: 'Notebook Collection' } })

// "or" operator also give documents, if one condition becomes true
db.products.find({ $or: [{ price: 129 }, { price: 39 }] });

// "nor" operator give only documents that not passed given both conditions
db.products.find({ $nor: [{ 'price': { $eq: 100 } }, { 'name': 'Notebook Collection' }] })

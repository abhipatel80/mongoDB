// to add data into database
db.collectionName.create({ name: "abhi", age: 20 });

const data = new db.collectionName({ name: "abhi", age: 20 });
data.save();

db.collectionName.insertOne({ name: "abhi", age: 20 });

// unordered insert
// In unordered Insert if one data give error than that one data will skip and other data are also executed
db.collectionName.insertMany([{ name: "abhi", age: 20 }, { name: "vivek", age: 18 }], { ordered: false });

// ordered insert
// In ordered Insert if one data give error than after other data's execution will stop
db.collectionName.insertMany([{ name: "abhi", age: 20 }, { name: "vivek", age: 18 }], { ordered: true });
db.collectionName.insertMany([{ name: "abhi", age: 20 }, { name: "vivek", age: 18 }]);

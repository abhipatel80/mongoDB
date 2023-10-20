// to update data into database

db.collectionName.updateOne({ _id: 1 }, { $set: { name: "abhi", age: 20 } });

db.collectionName.findByIdAndUpdate({ _id: 1 }, { $set: { age: 18 } }, { new: true });

// to use multiple methods, use updateMany
db.collectionName.updateMany({ _id: 1 }, [
    { $set: { name: "abhi", age: 20 } },
    { $unset: { "age": "" } },
]);

// to rename field 
db.collectionName.updateOne({ _id: 1 }, { $rename: { name: "firstName" } })

// Update Embedded Documents
db.collectionName.updateOne(
    { _id: 1 },
    { $push: { comments: "My comment" } }
);

db.collectionName.updateOne(
    { _id: 1 },
    { $pop: { comments: 1 } }
);

// Delete a Single Document
db.collectionName.deleteOne({ _id: 1 });

db.collectionName.findByIdAndDelete({ _id: 1 });

// Delete Multiple Documents
db.collectionName.deleteMany({ 'price': 55 })

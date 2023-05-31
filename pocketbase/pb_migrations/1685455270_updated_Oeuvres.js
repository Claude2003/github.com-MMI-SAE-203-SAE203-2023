migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ki7plh2o94av67s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oncb9nkz",
    "name": "photo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ki7plh2o94av67s")

  // remove
  collection.schema.removeField("oncb9nkz")

  return dao.saveCollection(collection)
})

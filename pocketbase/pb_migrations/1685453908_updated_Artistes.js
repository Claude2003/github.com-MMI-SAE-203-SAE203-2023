migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lpy3p9fznfxtqf8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxbdfirx",
    "name": "Photo",
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
  const collection = dao.findCollectionByNameOrId("lpy3p9fznfxtqf8")

  // remove
  collection.schema.removeField("zxbdfirx")

  return dao.saveCollection(collection)
})

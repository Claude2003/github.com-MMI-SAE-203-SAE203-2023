migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ki7plh2o94av67s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lqduzdb0",
    "name": "Peint",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ki7plh2o94av67s",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ki7plh2o94av67s")

  // remove
  collection.schema.removeField("lqduzdb0")

  return dao.saveCollection(collection)
})

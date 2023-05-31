migrate((db) => {
  const collection = new Collection({
    "id": "ki7plh2o94av67s",
    "created": "2023-05-30 13:29:43.055Z",
    "updated": "2023-05-30 13:29:43.055Z",
    "name": "Oeuvres",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mcv2i181",
        "name": "nom_de_l_oeuvre",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "abmg1mm1",
        "name": "Description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sggy48c2",
        "name": "Date_de_creation",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ki7plh2o94av67s");

  return dao.deleteCollection(collection);
})

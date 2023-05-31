migrate((db) => {
  const collection = new Collection({
    "id": "lpy3p9fznfxtqf8",
    "created": "2023-05-30 13:32:26.406Z",
    "updated": "2023-05-30 13:32:26.406Z",
    "name": "Artistes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aujwyjzi",
        "name": "Nom_de_l_artiste",
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
        "id": "70s7s9a2",
        "name": "Prenom",
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
        "id": "m6ei1654",
        "name": "Annee_de_naissance",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "yfqwkorb",
        "name": "Annee_de_deces",
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
  const collection = dao.findCollectionByNameOrId("lpy3p9fznfxtqf8");

  return dao.deleteCollection(collection);
})

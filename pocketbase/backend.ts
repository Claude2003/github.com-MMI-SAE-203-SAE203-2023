import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

// 5) récupérer la liste de tous les artistes


export async function allMArtistes() {
    const records = await pb.collection('Artistes').getFullList();
    return records;
}

// 5) récupérer la liste de toutes les oeuvres 
export async function allOeuvres() {
    const records = await pb.collection('Oeuvres').getFullList();
    return records;
}

// 11) récupérer les informations d'un artiste par id

export async function oneID(id) {
    const oneRecord = await pb.collection('Artistes').getOne(id);
    return oneRecord;
}

//listes des oeuvres d'un artiste 

export async function allOeuvresByArtisteName (Nom) {
    const sortedRecordsArtiste = await pb.collection('Artistes').getFullList({
        filter: `Nom ='${Nom}'`,
        expand: 'peint',
    });
    return sortedRecordsArtiste
}

export async function allArtistesSorted() {
    const sortedRecords = await pb.collection('Artistes').getFullList({
        sort: 'Annee_de_naissace',
    });
    return sortedRecords;
}
 
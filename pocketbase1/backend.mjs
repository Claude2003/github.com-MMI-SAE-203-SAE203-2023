<<<<<<< HEAD
import PocketBase from 'pocketbase' ;

var pocketbase_ip=''
if(import.meta.env.MODE === 'production')
pocketbase_ip= 'http://193.168.147.17'
else
pocketbase_ip='http://127.0.0.1:8090'

const pb = new PocketBase (pocketbase_ip)

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
//une fonction qui retourne la liste des œuvres d'un artiste donné
export async function allArtistesSorted() {
    const sortedRecords = await pb.collection('Artistes').getFullList({
        sort: 'Annee_de_naissace',
    });
    return sortedRecords;
}
 //une fonction qui retourne la liste des artistes triés par date (d'une manière chronologique) (frise)
export async function ArtisteSorted(){
  const record = await pb.collection('Artistes').getFullList({sort: 'Annee_de_naissace' })
  return record;
}
//une fonction qui retourne la liste des oeuvres triés par date (d'une manière chronologique) (frise)

export async function OeuvreSorted(){
  const record = await pb.collection('Oeuvres').getFullList({sort: 'Date_de_creation' })
  return record;
}

=====
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
//une fonction qui retourne la liste des œuvres d'un artiste donné
export async function allArtistesSorted() {
    const sortedRecords = await pb.collection('Artistes').getFullList({
        sort: 'Annee_de_naissace',
    });
    return sortedRecords;
}
 //une fonction qui retourne la liste des artistes triés par date (d'une manière chronologique) (frise)
export async function ArtisteSorted(){
  const record = await pb.collection('Artistes').getFullList({sort: 'Annee_de_naissace' })
  return record;
}
//une fonction qui retourne la liste des oeuvres triés par date (d'une manière chronologique) (frise)

export async function OeuvreSorted(){
  const record = await pb.collection('Oeuvres').getFullList({sort: 'Date_de_creation' })
  return record;
}
>>>>>>> 87b1d4ef6834009bc4e286111fca7702ed6f9169

import PocketBase from 'pocketbase' ;
import type { ArtistesResponse } from './pocketbase-types';
export const pb = new PocketBase('http://193.168.146.17:8090') ;

// 5) récupérer la liste de tous les artistes


export async function allMArtistes() {
    const records = await pb.collection('Artistes').getFullList<ArtistesResponse>();
    return records;
}

// 5) récupérer la liste de toutes les oeuvres 
export async function allOeuvres() {
    const records = await pb.collection('Oeuvres').getFullList();
    return records;
}

// 11) récupérer les informations d'un artiste par id

export async function oneID(id: string) {
    const oneRecord = await pb.collection('Artistes').getOne(id);
    return oneRecord;
}

//listes des oeuvres d'un artiste 

export async function allOeuvresByArtisteName (Nom: string) {
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
 
export async function ArtisteSorted(){
    const record = await pb.collection('Artistes').getFullList({sort: 'Annee_de_naissace' })
    return record;
  }
  
  
  export async function OeuvreSorted(){
    const record = await pb.collection('Oeuvres').getFullList({sort: 'Date_de_creation' })
    return record;
  }

 
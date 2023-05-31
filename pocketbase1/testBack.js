import { allMArtistes } from './backend.mjs';
import { allOeuvres } from './backend.mjs';
import { oneID } from './backend.mjs';
import { allOeuvresByArtisteName } from './backend.mjs';
import { allArtistesSorted } from './backend.mjs';
import { OeuvreSorted } from './backend.mjs';
import {ArtisteSorted } from './backend.mjs';
try {
    const records = await allMArtistes();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
 
try {
    const records = await allOeuvres();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}


try {
    const onerecord = await oneID('tg7n1vfrv7gp826');
    console.table(onerecord);
} catch (e) {
    console.error(e);
}

try {
    const oeuvresArtisteByName = await allOeuvresByArtisteName('Canova');
    console.log(JSON.stringify(oeuvresArtisteByName, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const  sortedRecords = await allArtistesSorted();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}


try {
    const record = await ArtisteSorted();
    console.log(JSON.stringify(record, null, 2));
  } catch (e) {
    console.error(e);
  };  
  
try {
    const record = await OeuvreSorted();
    console.log(JSON.stringify(record, null, 2));
  } catch (e) {
    console.error(e);
  };  
  
  
  
  
  
  
  
  
  
  
  
  
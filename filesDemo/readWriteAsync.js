import {readFile, writeFile} from 'fs';
import {join} from 'path';
const filePath = join(process.cwd(), 'file.txt');

//read Asynchronously
readFile(filePath, 'utf8', (err, contents) => {
    if(err) {
        return 
    }
    console.log('File Contents : ', contents);

    const Uppercase = contents.toUpperCase()
    writeFile(filePath, Uppercase, function(err) {
    if(err) {
        throw err
    }
    console.log("file updated")
})
})



console.log("Thank you.....");
console.log("file updates.........");
import { createReadStream } from 'fs';
import { access } from 'fs/promises';
import { __dirName, SOURCE_FOLDER, ERROR_MSG } from './constants.js';

const FILE_TO_READ = 'fileToRead.txt';

const file_path = `${__dirName}/${SOURCE_FOLDER}/${FILE_TO_READ}`;

const read = async () => {
    try {
        await access(file_path);
    } catch {
        throw new Error(ERROR_MSG);
    }
    
    const rs = createReadStream(file_path, {encoding: 'utf-8'});
    rs.pipe(process.stdout);
};

await read();
import { createReadStream } from 'fs';
import { __dirName, SOURCE_FOLDER } from './constants.js';

const FILE_TO_READ = 'fileToRead.txt';

const file_path = `${__dirName}/${SOURCE_FOLDER}/${FILE_TO_READ}`;

const read = async () => {
    const rs = createReadStream(file_path, {encoding: 'utf-8'});
    let result = '';

    rs.on('data', data => result += data);
    rs.on('end', () => process.stdout.write(result));
};

await read();
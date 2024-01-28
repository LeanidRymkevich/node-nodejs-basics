import { createWriteStream } from 'fs';
import { __dirName, SOURCE_FOLDER } from './constants.js';

const FILE_TO_WRITE = 'fileToWrite.txt';

const file_path = `${__dirName}/${SOURCE_FOLDER}/${FILE_TO_WRITE}`;

const write = async () => {
    const ws = createWriteStream(file_path, {encoding: 'utf-8', flags: 'a'});
    process.stdin.on('data', data => ws.write(data));
};

await write();
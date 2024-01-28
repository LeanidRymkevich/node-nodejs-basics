import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib'
import { pipeline } from 'stream/promises';
import { __dirName, file_path, archive_path } from './constants.js';

const decompress = async () => {
    const readableStream = createReadStream(archive_path);
    const writeableStream = createWriteStream(file_path);
    const unzip = createUnzip();

    await pipeline(readableStream, unzip, writeableStream);
};

await decompress();
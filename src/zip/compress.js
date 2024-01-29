import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib'
import { pipeline } from 'stream/promises';
import { __dirName, file_path, archive_path } from './constants.js';

const compress = async () => {
    const readableStream = createReadStream(file_path);
    const writeableStream = createWriteStream(archive_path);
    const gzip = createGzip();

    await pipeline(readableStream, gzip, writeableStream);
};

await compress();
import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const SOURCE_FOLDER = 'files';
const SOURCE_FILE = 'fileToCalculateHashFor.txt';

const fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(fileName);

const filePath = `${__dirName}/${SOURCE_FOLDER}/${SOURCE_FILE}`;

const calculateHash = async () => {
    const hash = createHash('sha256');
    const rs = createReadStream(filePath);

    rs.on('data', data => hash.update(data));
    rs.on('end', () => console.log(`Hash of '${SOURCE_FILE}' is ${hash.digest('hex')}`));
};

await calculateHash();
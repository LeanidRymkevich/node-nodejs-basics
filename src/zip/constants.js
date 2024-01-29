import { dirname } from 'path';
import { fileURLToPath } from 'url';

const SOURCE_FOLDER = 'files';
const FILE_TO_COMPRESS = 'fileToCompress.txt';
const ARCHIVE_FILE = 'archive.gz';

const fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(fileName);

const file_path = `${__dirName}/${SOURCE_FOLDER}/${FILE_TO_COMPRESS}`;
const archive_path = `${__dirName}/${SOURCE_FOLDER}/${ARCHIVE_FILE}`;

export { __dirName, file_path, archive_path };
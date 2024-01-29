import { dirname } from 'path';
import { fileURLToPath } from 'url';

const SOURCE_FOLDER = 'files';
const ERROR_MSG = 'FS operation failed';

const fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(fileName);

export { __dirName, SOURCE_FOLDER, ERROR_MSG };
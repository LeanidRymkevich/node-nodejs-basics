import { access, unlink } from 'fs/promises';
import { __dirName, SOURCE_FOLDER, ERROR_MSG } from './constants.js';

const FILE_TO_DELETE = 'fileToRemove.txt';

const file_path = `${__dirName}/${SOURCE_FOLDER}/${FILE_TO_DELETE}`;

const remove = async () => {
    try {
        await access(file_path);
    } catch {
        throw new Error(ERROR_MSG);
    }

    await unlink(file_path);
};

await remove();
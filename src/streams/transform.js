import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    const ts = new Transform({
        transform(chunk, encoding, callback) {
            const str = chunk.toString().trim();
            const reversedStr = str.split('').reverse().join('');
            
            this.push(`${reversedStr}\n`);

            callback();
        }
    });

    await pipeline(process.stdin, ts, process.stdout);
};

await transform();
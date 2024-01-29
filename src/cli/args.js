const parseArgs = () => {
    let result = process.argv.slice(2, process.argv.length)
                             .reduce((prev, curr, idx, arr) => {
                                if (idx % 2 !== 0) return prev;
                                return prev += `${curr} is ${arr[idx + 1]}, `
                             }, '');
    result = result ? result.slice(0, -2) : result;

    console.log(result);
};

parseArgs();
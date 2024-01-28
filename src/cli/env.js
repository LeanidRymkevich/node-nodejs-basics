const PREFIX = 'RSS_';

const parseEnv = () => {
    let result = Object.keys(process.env).reduce((prev, curr) => {
        if (curr.includes(PREFIX)) {
            return prev += `${curr}=${process.env[curr]}; `;
        } 
        return prev;   
    }, '');
    result = result ? result.slice(0, -2) : result;

    console.log(result);
};

parseEnv();
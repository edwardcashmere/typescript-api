const getTimeStamp = (): string => {
    return new Date().toISOString();
};

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    } else {
        console.error(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [warn] [${namespace}] ${message}`, object);
    } else {
        console.warn(`[${getTimeStamp()}] [warn] [${namespace}] ${message}`);
    }
};

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [debug] [${namespace}] ${message}`, object);
    } else {
        console.debug(`[${getTimeStamp()}] [debug] [${namespace}] ${message}`);
    }
};

export default {
    debug,
    info,
    warn,
    error
};

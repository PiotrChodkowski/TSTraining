interface Descriptor {
    value: any;
    writable: boolean;
    configrurable: boolean;
    get: () => void;
    set: () => void;
}

// Mehod decorator
export function log (instance: any, property: string, descriptor: any) {

    const fn = instance[property];

    descriptor.value = async function (...args: Array<any>) {
        const result = await fn.call(this, ...args);
        console.log(`Result of ${property} is ${result}`) ;
        return result;
    };
}

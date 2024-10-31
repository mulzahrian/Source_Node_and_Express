function samplePromise(){
    return Promise.resolve("ari");
}

const name = await samplePromise();
console.info(name);
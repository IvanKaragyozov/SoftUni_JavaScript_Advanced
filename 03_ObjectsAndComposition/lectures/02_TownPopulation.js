function towns(list){

    // iterate input
    // parse each element
    // store result

    const result = {};

    for (const town of list) {
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        let pop = Number(tokens[1]);

        if(result[name] !== undefined){
            pop += result[name];
        }

        result[name] = pop;
    }

    //print result

    for (let [name, pop] of Object.entries(result)) {
        console.log(`${name} : ${pop}`);
    }
}

towns(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

console.log('-----------------');

towns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);

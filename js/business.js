const goodType = {
    cider: 'cider',
    apples: 'apples',
    suggar: 'suggar',
    water: 'water',
    grain: 'grain'
};

const nodes = new Map ([
    [
        goodType.cider,
        [
            {amount: -4, goodType: goodType.apples, days: 50},
            {amount: -2, goodType: goodType.suggar, days: 50},
            {amount: 2, goodType: goodType.cider, days: 50}
        ]
    ],
    [
        goodType.apples,
        [
            {amount: -3, goodType: goodType.water, days: 40},
            {amount: 2, goodType: goodType.apples, days: 40}
        ]
    ],
    [
        goodType.suggar,
        [
            {amount: -2, goodType: goodType.water, days: 30},
            {amount: 2, goodType: goodType.suggar, days: 30}
        ]
    ],
    [
        goodType.water,
        [
            {amount: 1, goodType: goodType.water, days: 10}
        ]
    ],
    [
        goodType.grain,
        [
            {amount: -2, goodType: goodType.water, days: 30},
            {amount: 2, goodType: goodType.grain, days: 30}
        ]
    ]
]);

// const goodTypeSelect = document.getElementById("goodTypeSelect");
// const amountInput = document.getElementById("amountInput");

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
        acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

// function getLineFor(goodType){
//     return resolve([nodeType], nodes)
// }
function getSummedBundles(bundles){
    let leastCommonMultiplierDays = bundles.map(bundle => bundle.days).reduce(lcm);
    let normalizedBundles = normalizeBundles(bundles, leastCommonMultiplierDays);
    let bundlesPerType = groupBy(normalizedBundles, 'goodType');
    return Object.entries(bundlesPerType).map(([goodType, bundles]) => {
        var totalamount = bundles.reduce((sum, bundle) => sum += bundle.amount, 0);
        return {amount: totalamount, goodType: goodType, days: leastCommonMultiplierDays};
    });
}

function resolve(nodeTypes, nodemap){
    let bundles = nodeTypes
        .map(nodeType => nodemap.get(nodeType))
        .reduce((acc, val) => acc.concat(val), []); //flatten
    let summedBundles = getSummedBundles(bundles);
    let missingTypes = summedBundles
        .filter(bundle => bundle.amount < 0)
        .map(bundle => bundle.goodType);
    let missingBundles = missingTypes
        .map(goodType => nodemap.get(goodType))
        .reduce((acc, val) => acc.concat(val), []); //flatten

    console.log("missing: ", missingTypes);

    if(missingBundles.length < 1) {
        let allBundlesNormalized = getSummedBundles(bundles.concat(missingBundles));

        return {
            nodes: nodeTypes,
            bundles: allBundlesNormalized
        }
    }
    return resolve(nodeTypes.concat(missingTypes), nodemap);
}

function normalizeBundles(bundles, normalizedDays){
    return bundles.map(bundle => ({
        amount: (bundle.amount / bundle.days) * normalizedDays,
        goodType: bundle.goodType,
        days: normalizedDays
    }));
}

function initSelect(select, values){
    const options = values.map(goodType => {
        var opt = document.createElement("option");
        opt.value= goodType;
        opt.text = goodType;
        return opt;
    });
    options.forEach(option => select.add(option));
}

function onGoodTypeChange(value){   
    const line = getLineFor(goodTypeSelect.value);
}
function onAmountChange(value){
    const goodType = document.getElementById("goodTypeSelect").value;
    const amount = document.getElementById("amountInput").value;

    console.debug(goodType);
    console.debug(amount);
}

function lcm(a,b){
    return a/gcd(a,b)*b;
}

function gcd(a,b){
    var t = 0;
    a < b && (t = b, b = a, a = t); // swap them if a < b
    t = a%b;
    return t ? gcd(b,t) : b;
}

(function(){
    const line = resolve([goodType.cider], nodes);
    console.log(line);

    const outputs = line.bundles.map(bundle => bundle.goodType + ", " + bundle.amount)
    console.log("result: ", outputs);
    // initSelect(goodTypeSelect, goodType);
})();
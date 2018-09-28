
const goodTypeSelect = document.getElementById("goodTypeSelect");
const amountInput = document.getElementById("amountInput");
const nodesTable = document.getElementById("nodesTable");

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
    console.log("resolving for: ", nodeTypes);
    let bundles = nodeTypes
        .map(nodeType => nodemap.get(nodeType))
        .reduce((acc, val) => acc.concat(val), []); //flatten
    let summedBundles = getSummedBundles(bundles);
    let missingTypes = summedBundles
        .filter(bundle => bundle.amount < 0)
        .map(bundle => bundle.goodType);
    let redundantOutputTypes = summedBundles
        .filter(bundle => bundle.amount > 0)
        .map(bundle => bundle.goodType)
        .filter(goodType => goodType !== nodeTypes[0]);

    // let missingBundles = missingTypes
    //     .map(goodType => nodemap.get(goodType))
    //     .reduce((acc, val) => acc.concat(val), []); //flatten

    let hasMissingTypes = missingTypes.length > 0;
    let hasRedundantOutput = redundantOutputTypes.length > 0;
        
    if(hasMissingTypes) {
        console.log("missing types: ", missingTypes)
        nodeTypes = nodeTypes.concat(missingTypes);
    } else if(hasRedundantOutput) {
        console.log("redundant output: ", redundantOutputTypes)
        nodeTypes = nodeTypes.concat(nodeTypes[0])
    } else {
        //let allBundlesNormalized = summedBundles;

        return {
            nodes: nodeTypes,
            bundles: summedBundles
        }
    }

    return resolve(nodeTypes, nodemap);
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

function populateNodeTable(nodes){
    let reducer = (acc, currentValue) => acc.set(currentValue, (acc.get(currentValue) || 0) +1);
    let nodeCounts = nodes.reduce(reducer, new Map());

    while(nodesTable.rows.length > 1){
        nodesTable.deleteRow(1);
    }

    [... nodeCounts.entries()].forEach(([nodeValue, nodeCount]) => {
        let newRow = nodesTable.insertRow(-1);
        let amountCell = newRow.insertCell(0);
        let goodTypeCell = newRow.insertCell(1);
        amountCell.appendChild(document.createTextNode(nodeCount));
        goodTypeCell.appendChild(document.createTextNode(nodeValue));
    });
}

function onGoodTypeChange(value){   
    const line = resolve([goodTypeSelect.value], nodes);

    console.debug(line);

    populateNodeTable(line.nodes);
}
function onAmountChange(value){
    const goodType = goodTypeSelect.value;
    const amount = amountInput.value;

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
    initSelect(goodTypeSelect, Object.values(goodType));
    onGoodTypeChange();
})();
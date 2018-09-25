const goodType = [
    'cider',
    'apples',
    'suggar',
    'water',
    'grain'
];

const nodes = { 
    'cider': [
        {amount: -4, goodType: goodType.apples, days: 50},
        {amount: -2, goodType: goodType.suggar, days: 50},
        {amount: 2, goodType: goodType.cider, days: 50}
    ],
    'apples': [
        {amount: -3, goodType: goodType.water, days: 40},
        {amount: 2, goodType: goodType.apples, days: 40}
    ],
    'suggar': [
        {amount: -2, goodType: goodType.water, days: 30},
        {amount: 2, goodType: goodType.suggar, days: 30}
    ],
    'water': [
        {amount: 1, goodType: goodType.water, days: 10}
    ],
    'grain': [
        {amount: -2, goodType: goodType.water, days: 30},
        {amount: 2, goodType: goodType.grain, days: 30}
    ]
};
let goodTypeSelect = document.getElementById("goodTypeSelect");
let amountInput = document.getElementById("amountInput");

function getLineFor(goodType){
    const node = nodes[goodType];
    const leastCommonMultiplierDays = node.map(bundle => bundle.days).reduce(lcm);
    const normalizedBundles = normalizeBundles(node, leastCommonMultiplierDays);
    const summedBundles = normalizedBundles.reduce(
        (entryMap, e) => entryMap.set(e.goodType, [...entryMap.get(e.goodType)||[], e]),
        new Map()
    );

    return line;
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
    console.debug("boerderij", line);
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
    initSelect(goodTypeSelect, goodType);
})();
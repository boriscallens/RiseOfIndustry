
const goodTypeSelect = document.getElementById("goodTypeSelect");
const amountInput = document.getElementById("amountInput");
const daysInput = document.getElementById("daysInput");
const nodesTable = document.getElementById("nodesTable");


const goodType = {
    Car: 'Car',
    Adhesive: 'Adhesive',
    AppleSmoothie: 'AppleSmoothie',
    Apples: 'Apples',
    Axles: 'Axles',
    BagofChips: 'BagofChips',
    BarleyWhiskey: 'BarleyWhiskey',
    Beef: 'Beef',
    BeefStew: 'Vodka',
    Beer: 'Beer',
    Berries: 'Berries',
    BerryPie: 'BerryPie',
    BerrySmoothie: 'BerrySmoothie',
    BinarySwitcher: 'BinarySwitcher',
    Biofuel: 'Biofuel',
    BodyChassis: 'BodyChassis',
    Books: 'Books',
    Bottles: 'Bottles',
    Brandy: 'Brandy',
    Burgers: 'Burgers',
    Buttons: 'Buttons',
    CannedFish: 'CannedFish',
    CannedMutton: 'CannedMutton',
    Cans: 'Cans',
    Capacitors: 'Capacitors',
    CarSeat: 'CarSeat',
    Cardboard: 'Cardboard',
    Ceramic: 'Ceramic',
    Cheese: 'Cheese',
    Chemicals: 'Chemicals',
    ChickenDiner: 'ChickenDiner',
    ChickenMeat: 'ChickenMeat',
    ChickenSoup: 'CannedMutton',
    ChocolateBar: 'ChocolateBar',
    ChocolateCake: 'ChocolateCake',
    Coal: 'Coal',
    Cocoa: 'Cocoa',
    CombustionEngine: 'CombustionEngine',
    ComputerMemory: 'ComputerMemory',
    CookedVegetables: 'CookedVegetables',
    Copper: 'Copper',
    CopperTubing: 'CopperTubing',
    CopperWire: 'CopperTubing',
    Cotton: 'Cotton',
    DeluxeBooks: 'DeluxeBooks',
    DinnerContainer: 'DinnerContainer',
    Diodes: 'Diodes',
    Dough: 'Dough',
    Dye: 'Dye',
    Eggs: 'Eggs',
    EngineBlock: 'EngineBlock',
    ExteriorBody: 'ExteriorBody',
    Fibers: 'Fibers',
    FirstComputer: 'FirstComputer',
    Fish: 'Fish',
    Flour: 'Flour',
    FriedChicken: 'FriedChicken',
    Gas: 'Gas',
    Glass: 'Glass',
    GlassTubes: 'GlassTubes',
    GrapeJuice: 'GrapeJuice',
    Grapes: 'Grapes',
    HardCider: 'HardCider',
    Headlights: 'Headlights',
    HeavyFabric: 'HeavyFabric',
    HeavyPulp: 'HeavyPulp',
    Hops: 'Hops',
    Ink: 'Ink',
    Interface: 'Interface',
    InteriorBody: 'InteriorBody',
    InteriorLining: 'InteriorLining',
    IronOre: 'IronOre',
    LargeFurnitureBase: 'LargeFurnitureBase',
    Leather: 'Leather',
    LeatherFurniture: 'LeatherFurniture',
    LightBulb: 'LightBulb',
    LightFabric: 'LightFabric',
    Milk: 'Milk',
    Mutton: 'Mutton',
    Napkins: 'Napkins',
    Newspapers: 'Newspapers',
    OfficeFurniture: 'OfficeFurniture',
    Oil: 'Oil',
    OliveOil: 'OliveOil',
    Olives: 'Olives',
    OrangeJuice: 'OrangeJuice',
    OrangeSoda: 'OrangeSoda',
    Oranges: 'Oranges',
    Oven: 'Oven',
    Paints: 'Paints',
    Parchment: 'Parchment',
    Pizza: 'Burgers',
    PlasticCutlery: 'PlasticCutlery',
    PlasticFurniture: 'PlasticFurniture',
    Plastics: 'Plastics',
    Potato: 'Potato',
    PremadeDinners: 'PremadeDinners',
    PrintedPaper: 'PrintedPaper',
    Processor: 'Processor',
    PunchCards: 'PunchCards',
    Radiator: 'Radiator',
    RadioReceiver: 'RadioReceiver',
    RawRubber: 'RawRubber',
    RefinedOil: 'RefinedOil',
    Refrigerator: 'Refrigerator',
    RollingChassis: 'RollingChassis',
    Rubber: 'Rubber',
    RubberTubes: 'RubberTubes',
    Sand: 'Sand',
    SmallFurnitureBase: 'SmallFurnitureBase',
    SodaWater: 'SodaWater',
    Soup: 'Soup',
    Steel: 'Steel',
    SteelBarrels: 'SteelBarrels',
    SteelFrame: 'SteelFrame',
    Stovetop: 'Stovetop',
    Sugar: 'Berries',
    SummerClothes: 'SummerClothes',
    Telephones: 'Telephones',
    ThinCardboard: 'ThinCardboard',
    Tire: 'Tire',
    Vegetables: 'Vegetables',
    Vodka: 'Vodka',
    Waffles: 'Waffles',
    Water: 'Water',
    Wheat: 'Wheat',
    Wine: 'Wine',
    WinterClothes: 'WinterClothes',
    Wood: 'Wood',
    WoodenBarrels: 'WoodenBarrels',
    WoodenPlanks: 'WoodenPlanks',
    Wool: 'Mutton',
    WorkClothes: 'WorkClothes',
    Yeast: 'Yeast',
};

const nodes = new Map([
    [goodType.Water, [{ amount: 1, goodType: goodType.Water, days: 10 }]],
    [goodType.Sand, [{ amount: 1, goodType: goodType.Sand, days: 10 }]],
    [goodType.Wood, [{ amount: 1, goodType: goodType.Wood, days: 10 }]],
    [goodType.Fish, [{ amount: 1, goodType: goodType.Fish, days: 10 }]],
    [goodType.IronOre, [{ amount: 1, goodType: goodType.IronOre, days: 10 }]],
    [goodType.Coal, [{ amount: 1, goodType: goodType.Coal, days: 10 }]],
    [goodType.Copper, [{ amount: 1, goodType: goodType.Copper, days: 10 }]],
    [goodType.Gas, [{ amount: 1, goodType: goodType.Gas, days: 10 }]],
    [goodType.Oil, [{ amount: 1, goodType: goodType.Oil, days: 10 }]],
    [goodType.Oranges, [{ amount: 2, goodType: goodType.Oranges, days: 35 }, { amount: -1, goodType: goodType.Water, days: 35 }]],
    [goodType.Apples, [{ amount: 2, goodType: goodType.Apples, days: 35 }, { amount: -1, goodType: goodType.Water, days: 35 }]],
    [goodType.Grapes, [{ amount: 2, goodType: goodType.Grapes, days: 35 }, { amount: -1, goodType: goodType.Water, days: 35 }]],
    [goodType.RawRubber, [{ amount: 2, goodType: goodType.RawRubber, days: 35 }, { amount: -1, goodType: goodType.Water, days: 35 }]],
    [goodType.Olives, [{ amount: 2, goodType: goodType.Olives, days: 35 }, { amount: -1, goodType: goodType.Water, days: 35 }]],
    [goodType.Wheat, [{ amount: 2, goodType: goodType.Wheat, days: 45 }, { amount: -1, goodType: goodType.Water, days: 45 }]],
    [goodType.Hops, [{ amount: 2, goodType: goodType.Hops, days: 45 }, { amount: -1, goodType: goodType.Water, days: 45 }]],
    [goodType.Potato, [{ amount: 2, goodType: goodType.Potato, days: 45 }, { amount: -1, goodType: goodType.Water, days: 45 }]],
    [goodType.Vegetables, [{ amount: 2, goodType: goodType.Vegetables, days: 45 }, { amount: -1, goodType: goodType.Water, days: 45 }]],
    [goodType.Berries, [{ amount: 2, goodType: goodType.Berries, days: 30 }, { amount: -1, goodType: goodType.Water, days: 30 }]],
    [goodType.Cotton, [{ amount: 2, goodType: goodType.Cotton, days: 30 }, { amount: -1, goodType: goodType.Water, days: 30 }]],
    [goodType.Sugar, [{ amount: 2, goodType: goodType.Sugar, days: 30 }, { amount: -1, goodType: goodType.Water, days: 30 }]],
    [goodType.Cocoa, [{ amount: 2, goodType: goodType.Cocoa, days: 30 }, { amount: -1, goodType: goodType.Water, days: 30 }]],
    [goodType.ChickenMeat, [{ amount: 1, goodType: goodType.ChickenMeat, days: 30 }, { amount: -1, goodType: goodType.Wheat, days: 30 }, { amount: -1, goodType: goodType.Water, days: 30 }]],
    [goodType.Eggs, [{ amount: 2, goodType: goodType.Eggs, days: 30 }, { amount: -1, goodType: goodType.Wheat, days: 30 }, { amount: -1, goodType: goodType.Water, days: 30 }]],
    [goodType.Beef, [{ amount: 1, goodType: goodType.Beef, days: 45 }, { amount: -2, goodType: goodType.Wheat, days: 45 }, { amount: -1, goodType: goodType.Water, days: 45 }]],
    [goodType.Leather, [{ amount: 1, goodType: goodType.Leather, days: 45 }, { amount: -2, goodType: goodType.Wheat, days: 45 }, { amount: -1, goodType: goodType.Water, days: 45 }]],
    [goodType.Milk, [{ amount: 1, goodType: goodType.Milk, days: 45 }, { amount: -2, goodType: goodType.Wheat, days: 45 }, { amount: -1, goodType: goodType.Water, days: 45 }]],
    [goodType.Mutton, [{ amount: 1, goodType: goodType.Mutton, days: 30 }, { amount: -1, goodType: goodType.Wheat, days: 30 }, { amount: -1, goodType: goodType.Water, days: 30 }]],
    [goodType.Wool, [{ amount: 2, goodType: goodType.Wool, days: 30 }, { amount: -1, goodType: goodType.Wheat, days: 30 }, { amount: -1, goodType: goodType.Water, days: 30 }]],
    [goodType.WoodenPlanks, [{ amount: 2, goodType: goodType.WoodenPlanks, days: 25 }, { amount: -3, goodType: goodType.Wood, days: 25 }]],
    [goodType.HardCider, [{ amount: 3, goodType: goodType.HardCider, days: 50 }, { amount: -3, goodType: goodType.Apples, days: 50 }, { amount: -1, goodType: goodType.Sugar, days: 50 }]],
    [goodType.Wine, [{ amount: 3, goodType: goodType.Wine, days: 40 }, { amount: -3, goodType: goodType.Grapes, days: 40 }]],
    [goodType.Yeast, [{ amount: 2, goodType: goodType.Yeast, days: 20 }, { amount: -2, goodType: goodType.Berries, days: 20 }, { amount: -1, goodType: goodType.Sugar, days: 20 }]],
    [goodType.AppleSmoothie, [{ amount: 2, goodType: goodType.AppleSmoothie, days: 35 }, { amount: -2, goodType: goodType.Apples, days: 35 }, { amount: -2, goodType: goodType.Water, days: 35 }]],
    [goodType.BerrySmoothie, [{ amount: 2, goodType: goodType.BerrySmoothie, days: 35 }, { amount: -2, goodType: goodType.Berries, days: 35 }, { amount: -2, goodType: goodType.Water, days: 35 }]],
    [goodType.GrapeJuice, [{ amount: 2, goodType: goodType.GrapeJuice, days: 25 }, { amount: -2, goodType: goodType.Grapes, days: 25 }, { amount: -1, goodType: goodType.Water, days: 25 }]],
    [goodType.OrangeJuice, [{ amount: 2, goodType: goodType.OrangeJuice, days: 25 }, { amount: -2, goodType: goodType.Oranges, days: 25 }, { amount: -1, goodType: goodType.Water, days: 25 }]],
    [goodType.SodaWater, [{ amount: 3, goodType: goodType.SodaWater, days: 35 }, { amount: -1, goodType: goodType.Sugar, days: 35 }, { amount: -1, goodType: goodType.Water, days: 35 }]],
    [goodType.ChocolateBar, [{ amount: 2, goodType: goodType.ChocolateBar, days: 25 }, { amount: -1, goodType: goodType.Cocoa, days: 25 }, { amount: -1, goodType: goodType.Milk, days: 25 }]],
    [goodType.Flour, [{ amount: 2, goodType: goodType.Flour, days: 15 }, { amount: -2, goodType: goodType.Wheat, days: 15 }]],
    [goodType.OliveOil, [{ amount: 2, goodType: goodType.OliveOil, days: 25 }, { amount: -4, goodType: goodType.Olives, days: 25 }]],
    [goodType.CopperTubing, [{ amount: 2, goodType: goodType.CopperTubing, days: 20 }, { amount: -3, goodType: goodType.Copper, days: 20 }]],
    [goodType.CopperWire, [{ amount: 3, goodType: goodType.CopperWire, days: 30 }, { amount: -2, goodType: goodType.Copper, days: 30 }]],
    [goodType.Glass, [{ amount: 3, goodType: goodType.Glass, days: 35 }, { amount: -2, goodType: goodType.Sand, days: 35 }, { amount: -1, goodType: goodType.Coal, days: 35 }]],
    [goodType.Steel, [{ amount: 3, goodType: goodType.Steel, days: 40 }, { amount: -2, goodType: goodType.IronOre, days: 40 }, { amount: -1, goodType: goodType.Coal, days: 40 }]],
    [goodType.HeavyPulp, [{ amount: 2, goodType: goodType.HeavyPulp, days: 30 }, { amount: -3, goodType: goodType.Wood, days: 30 }, { amount: -1, goodType: goodType.Water, days: 30 }]],
    [goodType.Ink, [{ amount: 2, goodType: goodType.Ink, days: 35 }, { amount: -2, goodType: goodType.Water, days: 35 }, { amount: -2, goodType: goodType.Coal, days: 35 }]],
    [goodType.Parchment, [{ amount: 2, goodType: goodType.Parchment, days: 25 }, { amount: -2, goodType: goodType.Wood, days: 25 }, { amount: -1, goodType: goodType.Water, days: 25 }]],
    [goodType.Chemicals, [{ amount: 2, goodType: goodType.Chemicals, days: 25 }, { amount: -2, goodType: goodType.Gas, days: 25 }]],
    [goodType.Plastics, [{ amount: 2, goodType: goodType.Plastics, days: 35 }, { amount: -2, goodType: goodType.Oil, days: 35 }, { amount: -1, goodType: goodType.Gas, days: 35 }]],
    [goodType.RefinedOil, [{ amount: 2, goodType: goodType.RefinedOil, days: 25 }, { amount: -2, goodType: goodType.Oil, days: 25 }]],
    [goodType.Rubber, [{ amount: 3, goodType: goodType.Rubber, days: 35 }, { amount: -2, goodType: goodType.RawRubber, days: 35 }]],
    [goodType.Soup, [{ amount: 2, goodType: goodType.Soup, days: 35 }, { amount: -3, goodType: goodType.Vegetables, days: 35 }, { amount: -1, goodType: goodType.Water, days: 35 }]],
    [goodType.Dye, [{ amount: 2, goodType: goodType.Dye, days: 30 }, { amount: -2, goodType: goodType.Berries, days: 30 }, { amount: -1, goodType: goodType.Water, days: 30 }]],
    [goodType.Fibers, [{ amount: 2, goodType: goodType.Fibers, days: 20 }, { amount: -2, goodType: goodType.Cotton, days: 20 }]],
    [goodType.LargeFurnitureBase, [{ amount: 2, goodType: goodType.LargeFurnitureBase, days: 45 }, { amount: -3, goodType: goodType.WoodenPlanks, days: 45 }]],
    [goodType.SmallFurnitureBase, [{ amount: 2, goodType: goodType.SmallFurnitureBase, days: 30 }, { amount: -2, goodType: goodType.WoodenPlanks, days: 30 }]],
    [goodType.WoodenBarrels, [{ amount: 2, goodType: goodType.WoodenBarrels, days: 30 }, { amount: -2, goodType: goodType.WoodenPlanks, days: 30 }]],
    [goodType.Beer, [{ amount: 2, goodType: goodType.Beer, days: 40 }, { amount: -3, goodType: goodType.Hops, days: 40 }, { amount: -1, goodType: goodType.Yeast, days: 40 }, { amount: -1, goodType: goodType.WoodenBarrels, days: 40 }]],
    [goodType.Biofuel, [{ amount: 2, goodType: goodType.Biofuel, days: 15 }, { amount: -3, goodType: goodType.Potato, days: 15 }, { amount: -1, goodType: goodType.RefinedOil, days: 15 }]],
    [goodType.Vodka, [{ amount: 2, goodType: goodType.Vodka, days: 40 }, { amount: -3, goodType: goodType.Potato, days: 40 }, { amount: -1, goodType: goodType.Yeast, days: 40 }, { amount: -1, goodType: goodType.WoodenBarrels, days: 40 }]],
    [goodType.BeefStew, [{ amount: 2, goodType: goodType.BeefStew, days: 30 }, { amount: -2, goodType: goodType.Beef, days: 30 }, { amount: -1, goodType: goodType.Vegetables, days: 30 }, { amount: -1, goodType: goodType.Water, days: 30 }]],
    [goodType.Cheese, [{ amount: 2, goodType: goodType.Cheese, days: 20 }, { amount: -1, goodType: goodType.Milk, days: 20 }, { amount: -3, goodType: goodType.Water, days: 20 }]],
    [goodType.ChocolateCake, [{ amount: 2, goodType: goodType.ChocolateCake, days: 30 }, { amount: -2, goodType: goodType.Flour, days: 30 }, { amount: -1, goodType: goodType.Eggs, days: 30 }, { amount: -2, goodType: goodType.Cocoa, days: 30 }]],
    [goodType.Dough, [{ amount: 2, goodType: goodType.Dough, days: 25 }, { amount: -3, goodType: goodType.Flour, days: 25 }, { amount: -1, goodType: goodType.Water, days: 25 }]],
    [goodType.Bottles, [{ amount: 2, goodType: goodType.Bottles, days: 25 }, { amount: -3, goodType: goodType.Glass, days: 25 }]],
    [goodType.Cans, [{ amount: 2, goodType: goodType.Cans, days: 30 }, { amount: -3, goodType: goodType.Steel, days: 30 }]],
    [goodType.Ceramic, [{ amount: 2, goodType: goodType.Ceramic, days: 45 }, { amount: -4, goodType: goodType.Glass, days: 45 }, { amount: -3, goodType: goodType.Sand, days: 45 }]],
    [goodType.SteelFrame, [{ amount: 2, goodType: goodType.SteelFrame, days: 50 }, { amount: -5, goodType: goodType.Steel, days: 50 }]],
    [goodType.GlassTubes, [{ amount: 2, goodType: goodType.GlassTubes, days: 45 }, { amount: -5, goodType: goodType.Glass, days: 45 }]],
    [goodType.SteelBarrels, [{ amount: 2, goodType: goodType.SteelBarrels, days: 20 }, { amount: -2, goodType: goodType.Steel, days: 20 }]],
    [goodType.Diodes, [{ amount: 2, goodType: goodType.Diodes, days: 50 }, { amount: -2, goodType: goodType.CopperWire, days: 50 }, { amount: -2, goodType: goodType.Glass, days: 50 }]],
    [goodType.LightBulb, [{ amount: 2, goodType: goodType.LightBulb, days: 40 }, { amount: -3, goodType: goodType.CopperWire, days: 40 }, { amount: -1, goodType: goodType.Glass, days: 40 }]],
    [goodType.Radiator, [{ amount: 2, goodType: goodType.Radiator, days: 50 }, { amount: -2, goodType: goodType.CopperTubing, days: 50 }, { amount: -2, goodType: goodType.Steel, days: 50 }]],
    [goodType.Refrigerator, [{ amount: 2, goodType: goodType.Refrigerator, days: 55 }, { amount: -3, goodType: goodType.CopperTubing, days: 55 }, { amount: -1, goodType: goodType.Steel, days: 55 }, { amount: -1, goodType: goodType.Gas, days: 55 }]],
    [goodType.Stovetop, [{ amount: 2, goodType: goodType.Stovetop, days: 50 }, { amount: -3, goodType: goodType.CopperTubing, days: 50 }, { amount: -1, goodType: goodType.Steel, days: 50 }]],
    [goodType.Cardboard, [{ amount: 2, goodType: goodType.Cardboard, days: 50 }, { amount: -3, goodType: goodType.HeavyPulp, days: 50 }]],
    [goodType.PrintedPaper, [{ amount: 2, goodType: goodType.PrintedPaper, days: 50 }, { amount: -3, goodType: goodType.Parchment, days: 50 }, { amount: -1, goodType: goodType.Ink, days: 50 }]],
    [goodType.Adhesive, [{ amount: 2, goodType: goodType.Adhesive, days: 50 }, { amount: -1, goodType: goodType.Chemicals, days: 50 }, { amount: -2, goodType: goodType.Plastics, days: 50 }]],
    [goodType.Paints, [{ amount: 2, goodType: goodType.Paints, days: 40 }, { amount: -1, goodType: goodType.Chemicals, days: 40 }, { amount: -2, goodType: goodType.Dye, days: 40 }]],
    [goodType.RubberTubes, [{ amount: 2, goodType: goodType.RubberTubes, days: 25 }, { amount: -3, goodType: goodType.Rubber, days: 25 }]],
    [goodType.Tire, [{ amount: 2, goodType: goodType.Tire, days: 35 }, { amount: -4, goodType: goodType.Rubber, days: 35 }]],
    [goodType.Buttons, [{ amount: 2, goodType: goodType.Buttons, days: 30 }, { amount: -1, goodType: goodType.Plastics, days: 30 }, { amount: -1, goodType: goodType.CopperWire, days: 30 }]],
    [goodType.PlasticCutlery, [{ amount: 2, goodType: goodType.PlasticCutlery, days: 35 }, { amount: -2, goodType: goodType.Plastics, days: 35 }]],
    [goodType.BagofChips, [{ amount: 2, goodType: goodType.BagofChips, days: 25 }, { amount: -3, goodType: goodType.Potato, days: 25 }, { amount: -1, goodType: goodType.Parchment, days: 25 }]],
    [goodType.CannedFish, [{ amount: 2, goodType: goodType.CannedFish, days: 40 }, { amount: -2, goodType: goodType.Fish, days: 40 }, { amount: -1, goodType: goodType.Cans, days: 40 }]],
    [goodType.CannedMutton, [{ amount: 2, goodType: goodType.CannedMutton, days: 50 }, { amount: -2, goodType: goodType.Mutton, days: 50 }, { amount: -1, goodType: goodType.Cans, days: 50 }]],
    [goodType.ChickenSoup, [{ amount: 2, goodType: goodType.ChickenSoup, days: 45 }, { amount: -3, goodType: goodType.ChickenMeat, days: 45 }, { amount: -2, goodType: goodType.Water, days: 45 }, { amount: -2, goodType: goodType.Vegetables, days: 45 }]],
    [goodType.HeavyFabric, [{ amount: 2, goodType: goodType.HeavyFabric, days: 40 }, { amount: -1, goodType: goodType.Fibers, days: 40 }, { amount: -1, goodType: goodType.Dye, days: 40 }, { amount: -1, goodType: goodType.Leather, days: 40 }]],
    [goodType.LightFabric, [{ amount: 2, goodType: goodType.LightFabric, days: 40 }, { amount: -2, goodType: goodType.Fibers, days: 40 }, { amount: -1, goodType: goodType.Dye, days: 40 }]],
    [goodType.CarSeat, [{ amount: 1, goodType: goodType.CarSeat, days: 30 }, { amount: -5, goodType: goodType.SmallFurnitureBase, days: 30 }, { amount: -4, goodType: goodType.Cotton, days: 30 }]],
    [goodType.LeatherFurniture, [{ amount: 1, goodType: goodType.LeatherFurniture, days: 30 }, { amount: -3, goodType: goodType.SmallFurnitureBase, days: 30 }, { amount: -5, goodType: goodType.Leather, days: 30 }]],
    [goodType.OfficeFurniture, [{ amount: 1, goodType: goodType.OfficeFurniture, days: 30 }, { amount: -3, goodType: goodType.LargeFurnitureBase, days: 30 }, { amount: -3, goodType: goodType.Steel, days: 30 }]],
    [goodType.PlasticFurniture, [{ amount: 1, goodType: goodType.PlasticFurniture, days: 30 }, { amount: -3, goodType: goodType.SmallFurnitureBase, days: 30 }, { amount: -4, goodType: goodType.Plastics, days: 30 }]],
    [goodType.Brandy, [{ amount: 1, goodType: goodType.Brandy, days: 30 }, { amount: -5, goodType: goodType.Wine, days: 30 }, { amount: -2, goodType: goodType.Bottles, days: 30 }]],
    [goodType.BarleyWhiskey, [{ amount: 1, goodType: goodType.BarleyWhiskey, days: 30 }, { amount: -6, goodType: goodType.Wheat, days: 30 }, { amount: -4, goodType: goodType.WoodenBarrels, days: 30 }, { amount: -4, goodType: goodType.Yeast, days: 30 }]],
    [goodType.OrangeSoda, [{ amount: 1, goodType: goodType.OrangeSoda, days: 30 }, { amount: -4, goodType: goodType.SodaWater, days: 30 }, { amount: -3, goodType: goodType.OrangeJuice, days: 30 }, { amount: -1, goodType: goodType.Bottles, days: 30 }]],
    [goodType.Waffles, [{ amount: 1, goodType: goodType.Waffles, days: 30 }, { amount: -4, goodType: goodType.Dough, days: 30 }, { amount: -3, goodType: goodType.Sugar, days: 30 }]],
    [goodType.BerryPie, [{ amount: 1, goodType: goodType.BerryPie, days: 30 }, { amount: -6, goodType: goodType.Berries, days: 30 }, { amount: -4, goodType: goodType.Dough, days: 30 }, { amount: -4, goodType: goodType.Sugar, days: 30 }]],
    [goodType.Burgers, [{ amount: 1, goodType: goodType.Burgers, days: 30 }, { amount: -4, goodType: goodType.Dough, days: 30 }, { amount: -2, goodType: goodType.Vegetables, days: 30 }, { amount: -2, goodType: goodType.Beef, days: 30 }]],
    [goodType.Pizza, [{ amount: 1, goodType: goodType.Pizza, days: 30 }, { amount: -4, goodType: goodType.Cheese, days: 30 }, { amount: -2, goodType: goodType.Dough, days: 30 }, { amount: -2, goodType: goodType.Vegetables, days: 30 }]],
    [goodType.Capacitors, [{ amount: 1, goodType: goodType.Capacitors, days: 30 }, { amount: -1, goodType: goodType.CopperWire, days: 30 }, { amount: -1, goodType: goodType.Cans, days: 30 }, { amount: -1, goodType: goodType.Ceramic, days: 30 }]],
    [goodType.EngineBlock, [{ amount: 1, goodType: goodType.EngineBlock, days: 30 }, { amount: -2, goodType: goodType.Radiator, days: 30 }, { amount: -2, goodType: goodType.Steel, days: 30 }]],
    [goodType.Headlights, [{ amount: 1, goodType: goodType.Headlights, days: 30 }, { amount: -2, goodType: goodType.LightBulb, days: 30 }, { amount: -2, goodType: goodType.Glass, days: 30 }]],
    [goodType.Oven, [{ amount: 1, goodType: goodType.Oven, days: 30 }, { amount: -1, goodType: goodType.Stovetop, days: 30 }, { amount: -1, goodType: goodType.Ceramic, days: 30 }]],
    [goodType.RadioReceiver, [{ amount: 1, goodType: goodType.RadioReceiver, days: 30 }, { amount: -3, goodType: goodType.Diodes, days: 30 }, { amount: -1, goodType: goodType.SmallFurnitureBase, days: 30 }]],
    [goodType.Telephones, [{ amount: 1, goodType: goodType.Telephones, days: 30 }, { amount: -2, goodType: goodType.Diodes, days: 30 }, { amount: -3, goodType: goodType.Plastics, days: 30 }]],
    [goodType.Books, [{ amount: 1, goodType: goodType.Books, days: 30 }, { amount: -3, goodType: goodType.PrintedPaper, days: 30 }]],
    [goodType.DeluxeBooks, [{ amount: 1, goodType: goodType.DeluxeBooks, days: 30 }, { amount: -3, goodType: goodType.PrintedPaper, days: 30 }, { amount: -1, goodType: goodType.Leather, days: 30 }]],
    [goodType.Newspapers, [{ amount: 1, goodType: goodType.Newspapers, days: 30 }, { amount: -3, goodType: goodType.PrintedPaper, days: 30 }, { amount: -1, goodType: goodType.Ink, days: 30 }]],
    [goodType.PunchCards, [{ amount: 1, goodType: goodType.PunchCards, days: 30 }, { amount: -3, goodType: goodType.Cardboard, days: 30 }]],
    [goodType.ThinCardboard, [{ amount: 1, goodType: goodType.ThinCardboard, days: 30 }, { amount: -3, goodType: goodType.Cardboard, days: 30 }]],
    [goodType.InteriorLining, [{ amount: 1, goodType: goodType.InteriorLining, days: 30 }, { amount: -2, goodType: goodType.HeavyFabric, days: 30 }, { amount: -1, goodType: goodType.Cardboard, days: 30 }]],
    [goodType.SummerClothes, [{ amount: 1, goodType: goodType.SummerClothes, days: 30 }, { amount: -2, goodType: goodType.LightFabric, days: 30 }, { amount: -2, goodType: goodType.Dye, days: 30 }]],
    [goodType.WinterClothes, [{ amount: 1, goodType: goodType.WinterClothes, days: 30 }, { amount: -2, goodType: goodType.HeavyFabric, days: 30 }, { amount: -2, goodType: goodType.Wool, days: 30 }]],
    [goodType.WorkClothes, [{ amount: 1, goodType: goodType.WorkClothes, days: 30 }, { amount: -2, goodType: goodType.HeavyFabric, days: 30 }, { amount: -2, goodType: goodType.Leather, days: 30 }]],
    [goodType.Napkins, [{ amount: 1, goodType: goodType.Napkins, days: 30 }, { amount: -3, goodType: goodType.LightFabric, days: 30 }]],
    [goodType.ExteriorBody, [{ amount: 1, goodType: goodType.ExteriorBody, days: 60 }, { amount: -1, goodType: goodType.SteelFrame, days: 60 }, { amount: -2, goodType: goodType.Headlights, days: 60 }]],
    [goodType.InteriorBody, [{ amount: 1, goodType: goodType.InteriorBody, days: 60 }, { amount: -1, goodType: goodType.InteriorLining, days: 60 }, { amount: -2, goodType: goodType.CarSeat, days: 60 }]],
    [goodType.BodyChassis, [{ amount: 1, goodType: goodType.BodyChassis, days: 120 }, { amount: -1, goodType: goodType.InteriorBody, days: 120 }, { amount: -1, goodType: goodType.ExteriorBody, days: 120 }]],
    [goodType.Axles, [{ amount: 1, goodType: goodType.Axles, days: 60 }, { amount: -6, goodType: goodType.Steel, days: 60 }, { amount: -4, goodType: goodType.Tire, days: 60 }]],
    [goodType.CombustionEngine, [{ amount: 1, goodType: goodType.CombustionEngine, days: 60 }, { amount: -8, goodType: goodType.Biofuel, days: 60 }, { amount: -1, goodType: goodType.EngineBlock, days: 60 }]],
    [goodType.RollingChassis, [{ amount: 1, goodType: goodType.RollingChassis, days: 120 }, { amount: -1, goodType: goodType.Axles, days: 120 }, { amount: -1, goodType: goodType.CombustionEngine, days: 120 }]],
    [goodType.Car, [{ amount: 1, goodType: goodType.Car, days: 360 }, { amount: -1, goodType: goodType.BodyChassis, days: 360 }, { amount: -1, goodType: goodType.RollingChassis, days: 360 }]],
    [goodType.Interface, [{ amount: 1, goodType: goodType.Interface, days: 180 }, { amount: -1, goodType: goodType.Buttons, days: 180 }, { amount: -1, goodType: goodType.PunchCards, days: 180 }, { amount: -1, goodType: goodType.OfficeFurniture, days: 180 }]],
    [goodType.BinarySwitcher, [{ amount: 1, goodType: goodType.BinarySwitcher, days: 120 }, { amount: -1, goodType: goodType.Steel, days: 120 }, { amount: -1, goodType: goodType.Diodes, days: 120 }, { amount: -1, goodType: goodType.SmallFurnitureBase, days: 120 }]],
    [goodType.Processor, [{ amount: 1, goodType: goodType.Processor, days: 180 }, { amount: -2, goodType: goodType.BinarySwitcher, days: 180 }, { amount: -1, goodType: goodType.SteelFrame, days: 180 }]],
    [goodType.ComputerMemory, [{ amount: 1, goodType: goodType.ComputerMemory, days: 180 }, { amount: -2, goodType: goodType.GlassTubes, days: 180 }, { amount: -2, goodType: goodType.RubberTubes, days: 180 }, { amount: -2, goodType: goodType.Capacitors, days: 180 }]],
    [goodType.FirstComputer, [{ amount: 1, goodType: goodType.FirstComputer, days: 360 }, { amount: -6, goodType: goodType.PunchCardReader, days: 360 }, { amount: -6, goodType: goodType.Processor, days: 360 }, { amount: -6, goodType: goodType.ComputerMemory, days: 360 }]],
    [goodType.FriedChicken, [{ amount: 1, goodType: goodType.FriedChicken, days: 90 }, { amount: -3, goodType: goodType.ChickenMeat, days: 90 }, { amount: -3, goodType: goodType.OliveOil, days: 90 }, { amount: -3, goodType: goodType.Flour, days: 90 }]],
    [goodType.CookedVegetables, [{ amount: 1, goodType: goodType.CookedVegetables, days: 90 }, { amount: -3, goodType: goodType.Vegetables, days: 90 }, { amount: -3, goodType: goodType.OliveOil, days: 90 }, { amount: -3, goodType: goodType.Potato, days: 90 }]],
    [goodType.ChickenDiner, [{ amount: 1, goodType: goodType.ChickenDiner, days: 180 }, { amount: -1, goodType: goodType.FriedChicken, days: 180 }, { amount: -1, goodType: goodType.CookedVegetables, days: 180 }, { amount: -1, goodType: goodType.OrangeSoda, days: 180 }]],
    [goodType.DinnerContainer, [{ amount: 1, goodType: goodType.DinnerContainer, days: 180 }, { amount: -2, goodType: goodType.ThinCardboard, days: 180 }, { amount: -2, goodType: goodType.Napkins, days: 180 }, { amount: -2, goodType: goodType.PlasticCutlery, days: 180 }]],
    [goodType.PremadeDinners, [{ amount: 1, goodType: goodType.PremadeDinners, days: 360 }, { amount: -2, goodType: goodType.ChickenDiner, days: 360 }, { amount: -2, goodType: goodType.DinnerContainer, days: 360 }, { amount: -2, goodType: goodType.BerryPie, days: 360 }]]
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

function getSummedBundles(bundles) {
    console.log("2. summing bundles", bundles);

    let leastCommonMultiplierDays = bundles.map(bundle => bundle.days).reduce(lcm);
    let normalizedBundles = normalizeBundles(bundles, leastCommonMultiplierDays);
    let bundlesPerType = groupBy(normalizedBundles, 'goodType');
    return Object.entries(bundlesPerType).map(([goodType, bundles]) => {
        var totalamount = bundles.reduce((sum, bundle) => sum += bundle.amount, 0);
        return { amount: totalamount, goodType: goodType, days: leastCommonMultiplierDays };
    });
}

function resolve(nodeTypes, amount, days, nodemap, recursion) {
    console.log("1. resolving for: ", nodeTypes);

    if (recursion > 200) {
        console.log("max recursion reached");
        return null;
    }

    let desiredOutputType = nodeTypes[0];
    let desiredOutputRatio = amount / days;

    performance.mark("bundles-start");
    // todo: first getting the bundles for types and then grouping them again in summedbundles is probably ready for optimization
    let bundles = nodeTypes
        .map(nodeType => nodemap.get(nodeType))
        .reduce((acc, val) => acc.concat(val), []); //flatten

    performance.mark("bundles-end");
    performance.measure("bundles", "bundles-start", "bundles-end")
    console.log("bundles timing: ", performance.getEntriesByName("bundles")[0].duration);
    performance.clearMarks();
    performance.clearMeasures();

    let summedBundles = getSummedBundles(bundles);

    let missingTypes = summedBundles
        .filter(bundle => bundle.amount < 0)
        .map(bundle => bundle.goodType);
    let redundantOutputTypes = summedBundles
        .filter(bundle => bundle.amount > 0)
        .map(bundle => bundle.goodType)
        .filter(goodType => goodType !== desiredOutputType);
    let desiredOutputBundle = summedBundles
        .filter(bundle => bundle.goodType === desiredOutputType)[0];
    let outputRatio = desiredOutputBundle.amount / desiredOutputBundle.days;

    let hasMissingTypes = missingTypes.length > 0;
    let hasReachedOuputRatio = !(amount > 0 && days > 0) || outputRatio >= desiredOutputRatio;
    let hasRedundantOutput = redundantOutputTypes.length > 0;

    if (hasMissingTypes) {
        console.log("?=> missing types: ", missingTypes)
        nodeTypes = nodeTypes.concat(missingTypes);
    } else if (hasRedundantOutput) {
        console.log("+=> redundant output: ", redundantOutputTypes)
        nodeTypes = nodeTypes.concat(desiredOutputType)
    } else if (!hasReachedOuputRatio) {
        let multiplier = Math.ceil(desiredOutputRatio / outputRatio);
        console.log("-=> lacks output. Desired: " + desiredOutputRatio + " current: " + outputRatio + ". Multiplying by " + multiplier);
        nodeTypes = new Array(multiplier).fill(nodeTypes).reduce((acc, val) => acc.concat(val), []); //flatten
    } else {
        return {
            nodes: nodeTypes,
            bundles: summedBundles
        }
    }

    return resolve(nodeTypes, amount, days, nodemap, (recursion || 0) + 1);
}

function normalizeBundles(bundles, normalizedDays) {
    return bundles.map(bundle => ({
        amount: (bundle.amount / bundle.days) * normalizedDays,
        goodType: bundle.goodType,
        days: normalizedDays
    }));
}

function initSelect(select, values) {
    const options = values.map(goodType => {
        var opt = document.createElement("option");
        opt.value = goodType;
        opt.text = goodType;
        return opt;
    });
    options.forEach(option => select.add(option));
}

function populateNodeTable(nodes) {
    let reducer = (acc, currentValue) => acc.set(currentValue, (acc.get(currentValue) || 0) + 1);
    let nodeCounts = nodes.reduce(reducer, new Map());

    while (nodesTable.rows.length > 1) {
        nodesTable.deleteRow(1);
    }

    [...nodeCounts.entries()].forEach(([nodeValue, nodeCount]) => {
        let newRow = nodesTable.insertRow(-1);
        let amountCell = newRow.insertCell(0);
        let goodTypeCell = newRow.insertCell(1);
        amountCell.appendChild(document.createTextNode(nodeCount));
        goodTypeCell.appendChild(document.createTextNode(nodeValue));
    });
}

function onGoodTypeChange(value) {
    const line = resolve([goodTypeSelect.value], amountInput.value, daysInput.value, nodes);

    console.debug(line);

    populateNodeTable(line.nodes);
}
function onAmountChange(value) {
    const line = resolve([goodTypeSelect.value], amountInput.value, daysInput.value, nodes);
    console.debug(line);
    populateNodeTable(line.nodes);
}
function onDaysChange(value) {
    const line = resolve([goodTypeSelect.value], amountInput.value, daysInput.value, nodes);
    console.debug(line);
    populateNodeTable(line.nodes);
}

function lcm(a, b) {
    return a / gcd(a, b) * b;
}

function gcd(a, b) {
    var t = 0;
    a < b && (t = b, b = a, a = t); // swap them if a < b
    t = a % b;
    return t ? gcd(b, t) : b;
}

(function () {
    initSelect(goodTypeSelect, Object.values(goodType));
    onGoodTypeChange();
})();
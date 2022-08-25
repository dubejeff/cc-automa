const priority = [[0, 4, 0], [2, 1, 2], [4, 2, 5], [3, 5, 4], [1, 0, 3], [5, 6, 1], [6, 3, 6], [7, 7, 7]]

const game_resources = {
    scenarios_availables: [{ "title": "1 FAT LIPKI", "page": 3, "playbook": "CC Vol. 1 - Europe", "year": 1941, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 2, "AXISPosture": "Recon", "ALLIES": "Russian", "ALLIESFateDeck": "Russian", "ALLIESNbrOrders": 3, "ALLIESPosture": "Recon", "initiative": "Axis", "starter": "Axis/Allies" }, { "title": "2 HEDGEGROWS & HAND GRENADES", "page": 4, "playbook": "CC Vol. 1 - Europe", "year": 1944, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 4, "AXISPosture": "Defend", "ALLIES": "American", "ALLIESFateDeck": "American", "ALLIESNbrOrders": 3, "ALLIESPosture": "Attack", "initiative": "Axis", "starter": "Allies" }, { "title": "3 BONFIRE OF THE NKVD", "page": 5, "playbook": "CC Vol. 1 - Europe", "year": 1941, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 3, "AXISPosture": "Attack", "ALLIES": "Russian", "ALLIESFateDeck": "Russian", "ALLIESNbrOrders": 4, "ALLIESPosture": "Defend", "initiative": "Axis", "starter": "Axis" }, { "title": "4 CLOSED FOR RENOVATION", "page": 6, "playbook": "CC Vol. 1 - Europe", "year": 1944, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 3, "AXISPosture": "Defend", "ALLIES": "American", "ALLIESFateDeck": "American", "ALLIESNbrOrders": 4, "ALLIESPosture": "Attack", "initiative": "Axis", "starter": "Allies" }, { "title": "5 COLD FRONT", "page": 7, "playbook": "CC Vol. 1 - Europe", "year": 1941, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 3, "AXISPosture": "Defend", "ALLIES": "Russian", "ALLIESFateDeck": "Russian", "ALLIESNbrOrders": 5, "ALLIESPosture": "Attack", "initiative": "Allies", "starter": "Allies" }, { "title": "6 PARALYZED FROM THE WEST DOWN", "page": 8, "playbook": "CC Vol. 1 - Europe", "year": 1944, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": "1-3", "AXISPosture": "Defend", "ALLIES": "American", "ALLIESFateDeck": "American", "ALLIESNbrOrders": 4, "ALLIESPosture": "Attack", "initiative": "Allies", "starter": "Allies" }, { "title": "7 BESSARABIAN NIGHTS", "page": 9, "playbook": "CC Vol. 1 - Europe", "year": 1944, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 3, "AXISPosture": "Recon", "ALLIES": "Russian", "ALLIESFateDeck": "Russian", "ALLIESNbrOrders": 1, "ALLIESPosture": "Defend", "initiative": "Axis", "starter": "Allies" }, { "title": "8 BREAKOUT DANCE", "page": 10, "playbook": "CC Vol. 1 - Europe", "year": 1943, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 3, "AXISPosture": "Recon", "ALLIES": "Russian", "ALLIESFateDeck": "Russian", "ALLIESNbrOrders": 1, "ALLIESPosture": "Recon", "initiative": "Axis", "starter": "Axis" }, { "title": "9 RUSH TO CONTACT", "page": 11, "playbook": "CC Vol. 1 - Europe", "year": 1945, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 4, "AXISPosture": "Defend", "ALLIES": "American", "ALLIESFateDeck": "American", "ALLIESNbrOrders": 6, "ALLIESPosture": "Attack", "initiative": "Axis", "starter": "Allies" }, { "title": "10 COMMANDO SCHOOL", "page": 12, "playbook": "CC Vol. 1 - Europe", "year": 1943, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 4, "AXISPosture": "Attack", "ALLIES": "Russian", "ALLIESFateDeck": "Russian", "ALLIESNbrOrders": 3, "ALLIESPosture": "Defend", "initiative": "Axis", "starter": "Axis" }, { "title": "11 HOLD THE LINE", "page": 13, "playbook": "CC Vol. 1 - Europe", "year": 1944, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 2, "AXISPosture": "Attack", "ALLIES": "American", "ALLIESFateDeck": "American", "ALLIESNbrOrders": 2, "ALLIESPosture": "Defend", "initiative": "Axis", "starter": "Axis" }, { "title": "12 MISTY MOUNTAIN", "page": 14, "playbook": "CC Vol. 1 - Europe", "year": 1944, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 4, "AXISPosture": "Defend", "ALLIES": "American", "ALLIESFateDeck": "American", "ALLIESNbrOrders": 5, "ALLIESPosture": "Attack", "initiative": "Axis", "starter": "Allies" }, { "title": "13 TUSSLE AT MALEME", "page": 11, "playbook": "CC Vol. 2 - Mediterranean", "year": 1941, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 3, "AXISPosture": "Defend", "ALLIES": "Anzac", "ALLIESFateDeck": "British", "ALLIESNbrOrders": 4, "ALLIESPosture": "Attack", "initiative": "Axis", "starter": "Axis" }, { "title": "14 AT THE CROSSROADS", "page": 12, "playbook": "CC Vol. 2 - Mediterranean", "year": 1939, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 3, "AXISPosture": "Defend", "ALLIES": "Polish", "ALLIESFateDeck": "French", "ALLIESNbrOrders": 4, "ALLIESPosture": "Attack", "initiative": "Axis", "starter": "Allies" }, { "title": "15 ARMATA ROMANA", "page": 13, "playbook": "CC Vol. 2 - Mediterranean", "year": 1941, "AXIS": "Rumanian", "AXISFateDeck": "Italian", "AXISNbrOrders": 5, "AXISPosture": "Attack", "ALLIES": "Russian", "ALLIESFateDeck": "Russian", "ALLIESNbrOrders": 3, "ALLIESPosture": "Defend", "initiative": "Axis", "starter": "Axis" }, { "title": "16 THE BLITZKRIEF CHECKED", "page": 14, "playbook": "CC Vol. 2 - Mediterranean", "year": 1940, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 4, "AXISPosture": "Attack", "ALLIES": "French", "ALLIESFateDeck": "French", "ALLIESNbrOrders": 3, "ALLIESPosture": "Defend", "initiative": "Axis", "starter": "Axis" }, { "title": "17 LITTLE STALINGRAD", "page": 15, "playbook": "CC Vol. 2 - Mediterranean", "year": 1943, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 4, "AXISPosture": "Recon", "ALLIES": "Canadian", "ALLIESFateDeck": "British", "ALLIESNbrOrders": 4, "ALLIESPosture": "Recon", "initiative": "Allies", "starter": "Allies" }, { "title": "18 Bridge Hunt", "page": 16, "playbook": "CC Vol. 2 - Mediterranean", "year": 1941, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 3, "AXISPosture": "Attack", "ALLIES": "Yugoslav", "ALLIESFateDeck": "French", "ALLIESNbrOrders": 3, "ALLIESPosture": "Defend", "initiative": "Axis", "starter": "Axis" }, { "title": "19 METAXAS SEASON", "page": 17, "playbook": "CC Vol. 2 - Mediterranean", "year": 1941, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 3, "AXISPosture": "Attack", "ALLIES": "Greek", "ALLIESFateDeck": "French", "ALLIESNbrOrders": 4, "ALLIESPosture": "Defend", "initiative": "Axis", "starter": "Axis" }, { "title": "20 A MARCH IN DECEMBER", "page": 18, "playbook": "CC Vol. 2 - Mediterranean", "year": 1939, "AXIS": "Finnish", "AXISFateDeck": "Italian", "AXISNbrOrders": 3, "AXISPosture": "Attack", "ALLIES": "Russian", "ALLIESFateDeck": "Russian", "ALLIESNbrOrders": 4, "ALLIESPosture": "Recon", "initiative": "Axis", "starter": "Axis" }, { "title": "21 SAINT AGATHA", "page": 19, "playbook": "CC Vol. 2 - Mediterranean", "year": 1943, "AXIS": "Italian", "AXISFateDeck": "Italian", "AXISNbrOrders": 3, "AXISPosture": "Defend", "ALLIES": "American", "ALLIESFateDeck": "American", "ALLIESNbrOrders": 3, "ALLIESPosture": "Attack", "initiative": "Allies", "starter": "Allies" }, { "title": "22 A VERITABLE BLOODBATH", "page": 20, "playbook": "CC Vol. 2 - Mediterranean", "year": 1945, "AXIS": "German", "AXISFateDeck": "German", "AXISNbrOrders": 3, "AXISPosture": "Defend", "ALLIES": "British", "ALLIESFateDeck": "British", "ALLIESNbrOrders": 4, "ALLIESPosture": "Recon", "initiative": "Axis", "starter": "Allies" }, { "title": "23 NO-MAN'S LAND", "page": 21, "playbook": "CC Vol. 2 - Mediterranean", "year": 1942, "AXIS": "Italian", "AXISFateDeck": "Italian", "AXISNbrOrders": 2, "AXISPosture": "Recon", "ALLIES": "British", "ALLIESFateDeck": "British", "ALLIESNbrOrders": 2, "ALLIESPosture": "Recon", "initiative": "Axis", "starter": "Allies" }, { "title": "24 SIX HILLS", "page": 22, "playbook": "CC Vol. 2 - Mediterranean", "year": 1940, "AXIS": "Italian", "AXISFateDeck": "Italian", "AXISNbrOrders": 4, "AXISPosture": "Attack", "ALLIES": "Indian", "ALLIESFateDeck": "British", "ALLIESNbrOrders": 3, "ALLIESPosture": "Defend", "initiative": "Azi", "starter": "Axis" }],
    currentSection: "",
    currentPlayerOrderNbr: 1,
    currentPlayerNbr: 1,
    time: 0,
    combatBotUnitGroupOpFire: 1,
    activePlayer: "",
    nonActivePlayer: "",
    activeOrder: "",
    movementDone: 0,
    noFireAvailable: false
}

const selected_Scenario = {
    title: "[TITLE]",
    page: 0,
    playbook: "[PLAYBOOK]",
    year: "[YEAR]",
    AXIS: "[AXIS]",
    AXISFateDeck: "[AXIS FATE DECK]",
    AXISNbrOrders: "[# ORDERS AXIS]",
    AXISPosture: "[AXIS POSTURE]",
    ALLIES: "[ALLIES]",
    ALLIESFateDeck: "[ALLIES Fate Deck]",
    ALLIESPosture: "[ALLIES POSTURE]",
    ALLIESNbrOrders: "[# ORDERS ALLIES]",
    initiative: "[INITIATIVE]",
    starter: "[STARTER]",
    suddenDeathTime: 0
}

const combat_bot = {
    side: "[SIDE]",
    nationality: "[NATIONALITY]",
    posture: "[POSTURE]",
    fate_deck: "[FATE DECK]",
    nbrOrders: "[# ORDERS]",
    hand: [],
    handSize: 0,
    Initiative: false,
    deck: [],
    combatFP: 0,
    recovered: false,
    routed: false
}

function combatBotOrder() {
    let orderToGive = 99;
    if (combat_bot.nbrOrders >= game_resources.currentPlayerOrderNbr) {
        for (let i = 0; i < combat_bot.hand.length; i++) {
            if (combat_bot.hand[i].Order == "Move") {
                orderToGive = i;
                i = combat_bot.hand.length;
            } else if (combat_bot.hand[i].Order == "Advance") {
                orderToGive = i;
                i = combat_bot.hand.length;
            } else if (combat_bot.hand[i].Order == "Artillery Request") {
                let radioInPlay = document.querySelector('#combatBotRadioInPlay');
                if (radioInPlay.checked) {
                    orderToGive = i;
                    i = combat_bot.hand.length
                }
            } else if (combat_bot.hand[i].Order == "Artillery Denied") {
                let playerRadioInPlay = document.querySelector('#playerRadioInPlay');
                if (playerRadioInPlay.checked) {
                    orderToGive = i;
                    i = combat_bot.hand.length
                }
            } else if (combat_bot.hand[i].Order == "Fire") {
                let playerRadioInPlay = document.querySelector('#combatBotEnemyWithinLOSandRange');
                if (playerRadioInPlay.checked) {
                    orderToGive = i;
                    i = combat_bot.hand.length
                }
            } else if (combat_bot.hand[i].Order == "Recover") {
                let brokenUnit = document.querySelector('#combatBotBrokenUnit');
                let suppressedUnit = document.querySelector('#combatBotSuppressedUnit');
                if (brokenUnit.checked || suppressedUnit.checked) {
                    orderToGive = i;
                    i = combat_bot.hand.length
                }
            } else if (combat_bot.hand[i].Order == "Rout") {
                let combatBotBrokenUnit = document.querySelector('#combatBotBrokenUnit');
                let playerBrokenUnit = document.querySelector('#playerBrokenUnit');
                if (combatBotBrokenUnit.checked || playerBrokenUnit.checked) {
                    orderToGive = i;
                    i = combat_bot.hand.length
                }
            }
        }
    }

    if (orderToGive == 99) {
        if (game_resources.currentPlayerOrderNbr == 1) {
            passOrder();
        } else {
            alert("No more order");
        }
    } else {
        let section = combat_bot.hand[orderToGive].Order.toLowerCase();
        section = section.replace(/\s+/g, '');
        section = section.concat("Section");
        executeOrder(section, combat_bot.hand[orderToGive].Order);
    }

}

function combatBotAction(action) {
    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == action) {
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }

    return actionExecute;
}

function combatBotDraw() {
    //PRIORITY DEFEND : MOVE (TO OBJECTIVE CHITS) > FIRE TO ENEMY UNITS IN LOS AND RANGE > ARTILLERY DENIED > ARTILLERY REQUEST > RECOVER > ROUT > PASS
    //PRIORITY ATTACK : FIRE TO ENEMY UNITS IN LOS AND RANGE > ARTILLERY REQUEST > ROUT > MOVE (TO OBJECTIVE CHITS) > ARTILLERY DENIED > RECOVER > PASS
    //PRIORITY RECON : MOVE (TO OBJECTIVE CHITS) > RECOVER > FIRE TO ENEMY UNITS IN LOS AND RANGE > ARTILLERY DENIED > ARTILLERY REQUEST > ROUT > PASS
    for (let i = combat_bot.hand.length; i < combat_bot.handSize; i++) {
        let rndNumber = Math.floor(Math.random() * combat_bot.deck.length);
        combat_bot.hand.push(combat_bot.deck[rndNumber]);
        combat_bot.deck.splice(rndNumber, 1);
    }
    combat_bot.hand.sort(function (a, b) {
        let rank1 = 0;
        let rank2 = 0;
        let idxOrder = 0;
        let idxPosture = 0;
        if (combat_bot.posture == "Defend") {
            idxPosture = 0;
        } else if (combat_bot.posture == "Attack") {
            idxPosture = 1;
        } else {
            idxPosture = 2;
        }
        if (a.Order == "Move") {
            idxOrder = 0;
        } else if (a.Order == "Advance") {
            idxOrder = 1;
        } else if (a.Order == "Artillery Request") {
            idxOrder = 2;
        } else if (a.Order == "Artillery Denied") {
            idxOrder = 3;
        } else if (a.Order == "Fire") {
            idxOrder = 4;
        } else if (a.Order == "Recover") {
            idxOrder = 5;
        } else if (a.Order == "Rout") {
            idxOrder = 6;
        } else {
            idxOrder = 7;
        }
        rank1 = priority[idxOrder][idxPosture];
        if (b.Order == "Move") {
            idxOrder = 0;
        } else if (b.Order == "Advance") {
            idxOrder = 1;
        } else if (b.Order == "Artillery Request") {
            idxOrder = 2;
        } else if (b.Order == "Artillery Denied") {
            idxOrder = 3;
        } else if (b.Order == "Fire") {
            idxOrder = 4;
        } else if (b.Order == "Recover") {
            idxOrder = 5;
        } else if (b.Order == "Rout") {
            idxOrder = 6;
        } else {
            idxOrder = 7;
        }
        rank2 = priority[idxOrder][idxPosture];
        return rank1 - rank2;
    });
}

function loadCombatBotDeck() {
    combat_bot.deck = [];
    if (combat_bot.fate_deck == "Russian") {
        for (let i = 0; i < russianfatedeck.length; i++) {
            combat_bot.deck.push(germanfatedeck[i]);
        }
    }
    if (combat_bot.fate_deck == "German") {
        for (let i = 0; i < germanfatedeck.length; i++) {
            combat_bot.deck.push(germanfatedeck[i]);
        }
    }
    if (combat_bot.fate_deck == "American") {
        for (let i = 0; i < americanfatedeck.length; i++) {
            combat_bot.deck.push(americanfatedeck[i]);
        }
    }
    if (combat_bot.fate_deck == "Italian") {
        for (let i = 0; i < italianfatedeck.length; i++) {
            combat_bot.deck.push(italianfatedeck[i]);
        }
    }
    if (combat_bot.fate_deck == "French") {
        for (let i = 0; i < frenchfatedeck.length; i++) {
            combat_bot.deck.push(frenchfatedeck[i]);
        }
    }
    if (combat_bot.fate_deck == "British") {
        for (let i = 0; i < britishfatedeck.length; i++) {
            combat_bot.deck.push(britishfatedeck[i]);
        }
    }
}

const player = {
    nationality: null,
    posture: "",
    Initiative: false,
    recovered: false,
    routed: false
}

function selectScenario() {
    selectValue = document.getElementById("scenario_choices").value;
    selected_Scenario.title = game_resources.scenarios_availables[selectValue].title;
    selected_Scenario.page = game_resources.scenarios_availables[selectValue].page;
    selected_Scenario.playbook = game_resources.scenarios_availables[selectValue].playbook;
    selected_Scenario.AXIS = game_resources.scenarios_availables[selectValue].AXIS;
    selected_Scenario.AXISFateDeck = game_resources.scenarios_availables[selectValue].AXISFateDeck;
    selected_Scenario.AXISPosture = game_resources.scenarios_availables[selectValue].AXISPosture;
    selected_Scenario.AXISNbrOrders = game_resources.scenarios_availables[selectValue].AXISNbrOrders;
    selected_Scenario.ALLIES = game_resources.scenarios_availables[selectValue].ALLIES;
    selected_Scenario.ALLIESFateDeck = game_resources.scenarios_availables[selectValue].ALLIESFateDeck;
    selected_Scenario.ALLIESPosture = game_resources.scenarios_availables[selectValue].ALLIESPosture;
    selected_Scenario.ALLIESNbrOrders = game_resources.scenarios_availables[selectValue].ALLIESNbrOrders;
    selected_Scenario.initiative = game_resources.scenarios_availables[selectValue].initiative;
    selected_Scenario.starter = game_resources.scenarios_availables[selectValue].starter;

    document.getElementById("playbook_page").innerHTML = selected_Scenario.page;
    document.getElementById("playbook").innerHTML = selected_Scenario.playbook;
    document.getElementById("AXIS").innerHTML = selected_Scenario.AXIS;
    document.getElementById("ALLIES").innerHTML = selected_Scenario.ALLIES;

    document.getElementById("scenario_info").style.display = "block";
}

function showHideOrder(order, display) {
    if (order != "command confusion") {
        let id = order.concat("OrderCard");
        id = id.replace(/\s+/g, '');
        document.getElementById(id).style.display = display;
    }
}

function prepareCombatBotOrder() {
    showHideOrder("move", "none");
    showHideOrder("advance", "none");
    showHideOrder("artilleryrequest", "none");
    showHideOrder("artillerydenied", "none");
    showHideOrder("fire", "none");
    showHideOrder("recover", "none");
    showHideOrder("rout", "none");
    showHideOrder("passing", "none");
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Order == "Recover") {
            if (combat_bot.recovered || combat_bot.routed) {
                showHideOrder(combat_bot.hand[i].Order.toLowerCase(), "none");
            } else {
                showHideOrder(combat_bot.hand[i].Order.toLowerCase(), "");
            }
        } else if (combat_bot.hand[i].Order == "Rout") {
            if ((player.routed || player.recovered) && (combat_bot.routed || combat_bot.recovered)) {
                showHideOrder(combat_bot.hand[i].Order.toLowerCase(), "none");
            } else {
                showHideOrder(combat_bot.hand[i].Order.toLowerCase(), "");
            }
        } else {
            showHideOrder(combat_bot.hand[i].Order.toLowerCase(), "block");
        }
    }

    if (game_resources.currentPlayerOrderNbr == 1) {
        showHideOrder("passing", "");
    } else {
        showHideOrder("passing", "none");
    }
}

function preparePlayerOrder() {
    showHideOrder("move", "");
    showHideOrder("advance", "");
    if (document.getElementById("playerRadioInPlay").checked) {
        showHideOrder("artilleryrequest", "");
    } else {
        showHideOrder("artilleryrequest", "none");
    }
    if (document.getElementById("combatBotRadioInPlay").checked) {
        showHideOrder("artillerydenied", "");
    } else {
        showHideOrder("artillerydenied", "none");
    }
    if (document.getElementById("playerEnemyWithinLOSandRange").checked) {
        showHideOrder("fire", "");
    } else {
        showHideOrder("fire", "none");
    }
    if (!player.recovered && !player.routed && document.getElementById("playerBrokenUnit").checked) {
        showHideOrder("recover", "");
    } else {
        showHideOrder("recover", "none");
    }
    if (!player.routed && !player.Recovered && !document.getElementById("playerBrokenUnit").checked && !combat_bot.routed && !combat_bot.Recovered && !document.getElementById("combatBotBrokenUnit").checked) {
        showHideOrder("rout", "none");
    } else {
        showHideOrder("rout", "");
    }
    if (game_resources.currentPlayerOrderNbr == 1) {
        showHideOrder("passing", "");
    } else {
        showHideOrder("passing", "none");
    }
}

function nextPlayerTurn() {
    combatBotDraw();
    updateCombatBotOrdersActions();

    if (game_resources.activePlayer == "COMBAT BOT") {
        document.getElementById("ordersSection").style.display = "block";
        document.getElementById("nationality").innerHTML = player.nationality;
        //document.getElementById("playerSection").style.display = "block";
        document.getElementById("combatBotOrdersSection").style.display = "none";
        document.getElementById("playerOrdersSection").style.display = "block";
        let list = document.getElementsByClassName("combatBotAction");
        for (let i = 0; i < list.length; i++) {
            list[i].style.display = "none";
        }
        game_resources.activePlayer = "PLAYER";
        game_resources.nonActivePlayer = "COMBAT BOT";
        game_resources.currentSection = "playerSection";
        preparePlayerOrder();
    } else {
        //document.getElementById("playerSection").style.display = "none";
        document.getElementById("ordersSection").style.display = "block";
        document.getElementById("nationality").innerHTML = combat_bot.nationality;
        document.getElementById("combatBotOrdersSection").style.display = "block";
        document.getElementById("playerOrdersSection").style.display = "none";
        let list = document.getElementsByClassName("combatBotAction");
        for (let i = 0; i < list.length; i++) {
            list[i].style.display = "block";
        }
        game_resources.activePlayer = "COMBAT BOT";
        game_resources.nonActivePlayer = "PLAYER";
        game_resources.currentSection = "ordersSection";
        prepareCombatBotOrder();
    }

    // Change [ACTIVE PLAYER]
    list = document.getElementsByClassName("activePlayer");
    for (i = 0; i < list.length; i++) {
        list[i].innerHTML = game_resources.activePlayer;
    }
    list = document.getElementsByClassName("nonActivePlayer");
    for (i = 0; i < list.length; i++) {
        list[i].innerHTML = game_resources.nonActivePlayer;
    }

    game_resources.currentPlayerOrderNbr = 1;
    game_resources.currentPlayerNbr++;
    if (game_resources.currentPlayerNbr == 3) {
        player.recovered = false;
        player.routed = false;
        combat_bot.recovered = false;
        combat_bot.routed = false;
        game_resources.currentPlayerNbr = 1;
    }
}

function startGame() {

    document.getElementById("setupSection").style.display = "none";
    if (document.querySelector('input[name="forces_select"]:checked').value == 1) {
        player.nationality = selected_Scenario.AXIS;
        player.posture = selected_Scenario.AXISPosture;
        combat_bot.side = "Allies";
        combat_bot.nationality = selected_Scenario.ALLIES;
        combat_bot.fate_deck = selected_Scenario.ALLIESFateDeck;
        combat_bot.posture = selected_Scenario.ALLIESPosture;
        combat_bot.nbrOrders = selected_Scenario.ALLIESNbrOrders;
    } else {
        combat_bot.side = "Axis";
        combat_bot.nationality = selected_Scenario.AXIS;
        combat_bot.fate_deck = selected_Scenario.AXISFateDeck;
        combat_bot.posture = selected_Scenario.AXISPosture;
        combat_bot.nbrOrders = selected_Scenario.AXISNbrOrders;
        player.nationality = selected_Scenario.ALLIES;
        player.posture = selected_Scenario.ALLIESPosture;
    }


    if (selected_Scenario.initiative == combat_bot.side) {
        combat_bot.Initiative = true;
    } else {
        player.Initiative = true;
    }

    if (selected_Scenario.starter == combat_bot.side) {
        game_resources.activePlayer = "PLAYER";
    } else {
        game_resources.activePlayer = "COMBAT BOT";
    }

    if (combat_bot.posture == "Defend") {
        combat_bot.handSize = 4;
    } else if (combat_bot.posture == "Recon") {
        combat_bot.handSize = 5;
    } else {
        combat_bot.handSize = 6;
    }

    loadCombatBotDeck();

    //document.getElementById("statusSection").style.display = "block";

    nextPlayerTurn();

    document.getElementById("combatBotSide").innerHTML = combat_bot.side;
    document.getElementById("combatBotNationality").innerHTML = combat_bot.nationality;
    document.getElementById("combatBotPosture").innerHTML = combat_bot.posture;
    document.getElementById("combatBotFateDeck").innerHTML = combat_bot.fate_deck;
    document.getElementById("combatBotNbrOrders").innerHTML = combat_bot.nbrOrders;
    updateCombatBotOrdersActions();
    document.getElementById("combatBotIntiative").innerHTML = combat_bot.Initiative;
    document.getElementById("combatBotDeckSize").innerHTML = combat_bot.deck.length;
}

function playerMoveOrder() {
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("playerMoveSection").style.display = "block";
    game_resources.currentSection = "playerMoveSection";
}

function combatBotRadioInPlayChange() {
    let combatBotBrokenRadio = document.getElementById('combatBotBrokenRadio');
    let combatBotRadioInPlay = document.getElementById('combatBotRadioInPlay');
    if (combatBotRadioInPlay.checked) {
        combatBotBrokenRadio.removeAttribute('disabled');
    } else {
        combatBotBrokenRadio.checked = false;
        combatBotBrokenRadio.setAttribute('disabled', '')
    }
}

function playerStatusChange() {
    if (game_resources.activePlayer == "PLAYER") {
        preparePlayerOrder();
    }
}

function executeOrder(section, order) {
    document.getElementById("ordersSection").style.display = "none";
    document.getElementById(section).style.display = "block";
    game_resources.currentSection = section;
    game_resources.activeOrder = order;
    discardOrder(game_resources.activeOrder);

    document.getElementById("moveOpFireSection").style.display = "none";
    document.getElementById("playerOpFireDescription").style.display = "none";
    document.getElementById("combatBotNewOpFireDescription").style.display = "none";
    document.getElementById("combatBotAlreadyActivatedOpFireDescription").style.display = "none";
    document.getElementById("moveFireAssaultActionSection").style.display = "none";
    document.getElementById("waterHex").checked = false;
    document.getElementById("alreadyContainFortification").checked = false;
    document.getElementById("moveOrderBoxedFP").checked = false;
    document.getElementById("moveOrderEnemyWithinLOSandRangeOfActive").checked = false;
    document.getElementById("moveOrderEnemyWithinLOSandRangeOfNonActive").checked = false;
    document.getElementById("betterFPOfNonActive").disabled = true;

    game_resources.movementDone = 0;
    document.getElementById("numberMovementDone").innerHTML = game_resources.movementDone;
}

function movement() {
    game_resources.movementDone++;
    document.getElementById("numberMovementDone").innerHTML = game_resources.movementDone;
    if (game_resources.activePlayer == "COMBAT BOT") {
        if (document.getElementById("moveOrderEnemyWithinLOSandRangeOfNonActive").checked) {
            document.getElementById("moveOpFireSection").style.display = "block";
            document.getElementById("playerOpFireDescription").style.display = "block";
        } else {
            document.getElementById("moveOpFireSection").style.display = "none";
            document.getElementById("playerOpFireDescription").style.display = "none";
        }
        if (player.posture == "Defend" && !document.getElementById("waterHex").checked && !document.getElementById("alreadyContainFortification").checked) {
            document.getElementById("hiddenWireMoveSection").style.display = "block";
            document.getElementById("hiddenMineMoveSection").style.display = "block";
        }
        if (document.getElementById("moveOrderEnemyWithinLOSandRangeOfActive").checked && document.getElementById("moveOrderBoxedFP").checked && combatBotAction("AssaultFire")) {
            document.getElementById("moveFireAssaultActionSection").style.display = "block";
        } else {
            document.getElementById("moveFireAssaultActionSection").style.display = "none";
        }
        
    } else {
        if (document.getElementById("moveOrderEnemyWithinLOSandRangeOfNonActive").checked) {
            if (document.getElementById("moveOpFireSection").style.display == "block") {
                if (document.getElementById("betterFPOfNonActive").checked) {
                    if (combatBotOppFireAction()) {
                        document.getElementById("combatBotAlreadyActivatedOpFireDescription").style.display = "none";
                        document.getElementById("combatBotNewOpFireDescription").style.display = "block";
                    } else {
                        document.getElementById("combatBotNewOpFireDescription").style.display = "none";
                        document.getElementById("combatBotAlreadyActivatedOpFireDescription").style.display = "block";
                    }
                } else {
                    document.getElementById("combatBotNewOpFireDescription").style.display = "none";
                    document.getElementById("combatBotAlreadyActivatedOpFireDescription").style.display = "block";
                }
            } else {
                if (combatBotOppFireAction()) {
                    document.getElementById("moveOpFireSection").style.display = "block";
                    document.getElementById("combatBotAlreadyActivatedOpFireDescription").style.display = "none";
                    document.getElementById("combatBotNewOpFireDescription").style.display = "block";
                }
            }
            document.getElementById("betterFPOfNonActive").disabled = false;
        } else {
            document.getElementById("moveOpFireSection").style.display = "none";
        }
        if (combat_bot.posture == "Defend" && !document.getElementById("waterHex").checked && !document.getElementById("alreadyContainFortification").checked) {
            document.getElementById("hiddenWireMoveSection").style.display = "block";
            document.getElementById("hiddenMineMoveSection").style.display = "block";
        } else {
            document.getElementById("hiddenWireMoveSection").style.display = "none";
            document.getElementById("hiddenMineMoveSection").style.display = "none";
        }
        if (document.getElementById("moveOrderEnemyWithinLOSandRangeOfActive").checked && document.getElementById("moveOrderBoxedFP").checked) {
            document.getElementById("moveFireAssaultActionSection").style.display = "block";
        } else {
            document.getElementById("moveFireAssaultActionSection").style.display = "none";
        }
    }
}

function executeOpFire() {
    document.getElementById(game_resources.currentSection).style.display = "none";
    document.getElementById("opFireSection").style.display = "block";
    game_resources.currentSection = "opFireSection";

    document.getElementById("opFireSectionFPCheck").checked = false;
    document.getElementById("opFireSectionFiringAdjacentHexCheck").checked = false;
    document.getElementById("opFireSectionAllFiringPiecesCheck").checked = false;
    document.getElementById("opFireSectionAtLeast1MortarOrMGCheck").checked = false;

    document.getElementById("readyToFireSection").style.display = "block";
    document.getElementById("opFireBoreSightingSection").style.display = "none";
    document.getElementById("opFireCrossfireSection").style.display = "none";
    document.getElementById("opFireHiddenGrenadesSection").style.display = "none";
    document.getElementById("opFireMarksmanshipSection").style.display = "none";
    document.getElementById("opFireSprayFireSection").style.display = "none";
    document.getElementById("opFireSustainedFireSection").style.display = "none";
    document.getElementById("combatBotOpFireDefenseSection").style.display = "none";
    document.getElementById("opFireSectionCombatBotLightWounds").style.display = "none";
    document.getElementById("opFireAttackSection").style.display = "none";
}

function passOrder() {
    document.getElementById("ordersSection").style.display = "none";
    document.getElementById("passSection").style.display = "block";
    game_resources.currentSection = "passSection";
    let DemolitionsActionDeclassifiedEffects = document.getElementsByClassName("demolitions-action-declassified");
    let DemolitionsActionEffects = document.getElementsByClassName("demolitions-action-effect");

    for (let i = 0; i < DemolitionsActionDeclassifiedEffects.length; i++) {
        DemolitionsActionDeclassifiedEffects[i].style.display = "none";
    }
    for (let i = 0; i < DemolitionsActionEffects.length; i++) {
        DemolitionsActionEffects[i].style.display = "none";
    }
    game_resources.activeOrder = "Pass";
}

function discardOrder(order) {
    if (game_resources.activePlayer == "COMBAT BOT") {
        for (let i = 0; i < combat_bot.hand.length; i++) {
            if (combat_bot.hand[i].Order == order) {
                combat_bot.hand.splice(i, 1);
                updateCombatBotOrdersActions();
                break;
            }
        }
        prepareCombatBotOrder();
    } else {
        preparePlayerOrder();
    }
}

function prepareMeleeSection() {
    document.getElementById("meleeSection").style.display = "block";
    document.getElementById("advanceSectionStep1Ambush").style.display = "block";
    document.getElementById("advanceSectionStep2Ambush").style.display = "none";
    if (game_resources.nonActivePlayer == "COMBAT BOT") {
        let ambushActionPlayed = 0;
        while (combatBotAction("Ambush")) {
            ambushActionPlayed++;
        }
        document.getElementById("nbrAmbushPlayed").innerHTML = ambushActionPlayed;
        document.getElementById("ambushActionEffect").style.display = "block";
        document.getElementById("meleeSectionPlayerAmbushCombatBot").style.display = "none";
    } else {
        document.getElementById("ambushActionEffect").style.display = "none";
        document.getElementById("meleeSectionPlayerAmbushCombatBot").style.display = "block";
    }
    document.getElementById("advanceSectionNextStep-1").style.display = "block";
    document.getElementById("advanceSectionNextStep-2").style.display = "none";
    document.getElementById("meleeRollSection").style.display = "none";
    
    displayActionEffects("none", "light-wounds", "-action-effect");
    displayActionEffects("none", "light-wounds", "-action-effect-not-available");
    document.getElementById("meleeSectionMeleeRollResult").innerHTML = "";
    document.getElementById("meleeSectionMeleeEvent").innerHTML = "";
}

function activePlayerToAmbush() {
    document.getElementById("advanceSectionStep1Ambush").style.display = "none";
    document.getElementById("advanceSectionStep2Ambush").style.display = "block";
    if (game_resources.activePlayer == "PLAYER") {
        document.getElementById("ambushActionEffect").style.display = "none";
        document.getElementById("meleeSectionPlayerAmbushCombatBot").style.display = "block";
    } else {
        let ambushActionPlayed = 0;
        while (combatBotAction("Ambush")) {
            ambushActionPlayed++;
        }
        document.getElementById("nbrAmbushPlayed").innerHTML = ambushActionPlayed;
        document.getElementById("ambushActionEffect").style.display = "block";
    }
    document.getElementById("advanceSectionNextStep-1").style.display = "none";
    document.getElementById("advanceSectionNextStep-2").style.display = "block";
}

function resolveMelee() {
    document.getElementById("advanceSectionStep2Ambush").style.display = "none";
    document.getElementById("ambushActionEffect").style.display = "none";
    document.getElementById("meleeSectionPlayerAmbushCombatBot").style.display = "none";
    document.getElementById("advanceSectionNextStep-2").style.display = "none";
    document.getElementById("meleeRollSection").style.display = "block";
}

function orderComplete() {
    document.getElementById(game_resources.currentSection).style.display = "none";
    if (document.getElementById("meleeHex").checked) {
        prepareMeleeSection();
    } else {
        document.getElementById("ordersSection").style.display = "block";
    }
    game_resources.currentSection = "ordersSection";
    game_resources.currentPlayerOrderNbr++;
    if (game_resources.activePlayer == "PLAYER") {
        preparePlayerOrder();
    }
}

function meleeComplete() {
    document.getElementById("meleeSection").style.display = "none";
    document.getElementById("ordersSection").style.display = "block";
    document.getElementById("meleeHex").checked = false;
}
function readyToFire() {
    document.getElementById("opFireAttackSection").style.display = "block";
    document.getElementById("readyToFireSection").style.display = "none";
    if (game_resources.activePlayer == "PLAYER") {
        if (document.getElementById("opFireSectionFPCheck").checked && combatBotAction("Bore Sighting")) {
            document.getElementById("opFireBoreSightingSection").style.display = "block";
        }
        if (combatBotAction("Crossfire")) {
            document.getElementById("opFireCrossfireSection").style.display = "block";
        }
        if (document.getElementById("opFireSectionFiringAdjacentHexCheck").checked && combatBotAction("Hidden Grenades")) {
            document.getElementById("opFireHiddenGrenadesSection").style.display = "block";
        }
        if ((player.fate_deck == "German" || player.fate_deck == "Russian") && combatBotAction("Marksmanship")) {
            document.getElementById("opFireMarksmanshipSection").style.display = "block";
        }
        if (document.getElementById("opFireSectionAllFiringPiecesCheck").checked && combatBotAction("Spray Fire")) {
            document.getElementById("opFireSprayFireSection").style.display = "block";
        }
        if (document.getElementById("opFireSectionAtLeast1MortarOrMGCheck").checked && combatBotAction("Sustained Fire")) {
            document.getElementById("opFireSustainedFireSection").style.display = "block";
        }
        document.getElementById("combatBotOpFireAttackSection").style.display = "block";

    } else {
        if (document.getElementById("opFireSectionFPCheck").checked) {
            document.getElementById("opFireBoreSightingSection").style.display = "block";
        }
        document.getElementById("opFireCrossfireSection").style.display = "block";
        if (document.getElementById("opFireSectionFiringAdjacentHexCheck").checked) {
            document.getElementById("opFireHiddenGrenadesSection").style.display = "block";
        }
        if (player.fate_deck == "German" || player.fate_deck == "Russian") {
            document.getElementById("opFireMarksmanshipSection").style.display = "block";
        }
        if (document.getElementById("opFireSectionAllFiringPiecesCheck").checked) {
            document.getElementById("opFireSprayFireSection").style.display = "block";
        }
        if (document.getElementById("opFireSectionAtLeast1MortarOrMGCheck").checked) {
            document.getElementById("opFireSustainedFireSection").style.display = "block";
        }
        if (combatBotAction("Concealment")) {
            document.getElementById("opFireConcealmentSection").style.display = "block";
        }
        document.getElementById("combatBotOpFireDefenseSection").style.display = "block";
        let lightWoundsCount = 0;
        for (let i = 0; i < combat_bot.hand.length; i++) {
            if (combat_bot.hand[i].Action == "LightWounds") {
                lightWoundsCount++;
            }
        }
        if (lightWoundsCount > 0) {
            document.getElementById("opFireSectionCombatBotLightWounds").style.display = "block";
        }
    }
}


function opFireComplete() {
    document.getElementById(game_resources.currentSection).style.display = "none";
    document.getElementById("moveSection").style.display = "block";
    game_resources.currentSection = "moveSection";
}

function advanceSectionMeleeHexChange() {
    document.getElementById("meleeHex").checked = document.getElementById("advanceSectionMeleeHex").checked;
}

function playerMoveOrderComplete() {
    document.getElementById("playerSection").style.display = "block";
    document.getElementById("playerMoveSection").style.display = "none";
    game_resources.currentSection = "playerSection";
    game_resources.currentPlayerOrderNbr++;
    preparePlayerOrder();
}

function playerAdvanceOrder() {
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("playerAdvancingSection").style.display = "block";
    game_resources.currentSection = "playerAdvancingSection";
}

function playerAdvanceOrderComplete() {
    document.getElementById("playerSection").style.display = "block";
    document.getElementById("playerAdvanceSection").style.display = "none";
    game_resources.currentSection = "playerSection";
    game_resources.currentPlayerOrderNbr++;
    preparePlayerOrder();
}

function playerArtilleryRequestOrder() {
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("playerArtilleryRequestSection").style.display = "block";
    game_resources.currentSection = "playerArtilleryRequestSection";
    //todo
}

function playerArtilleryRequestOrderComplete() {
    document.getElementById("playerSection").style.display = "block";
    document.getElementById("playerArtilleryRequestSection").style.display = "none";
    game_resources.currentSection = "playerSection";
    game_resources.currentPlayerOrderNbr++;
    preparePlayerOrder();
    //todo
}

function playerArtilleryDeniedOrder() {
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("playerArtilleryDeniedSection").style.display = "block";
    game_resources.currentSection = "playerArtilleryDeniedSection";
    //todo
}

function playerArtilleryDeniedOrderComplete() {
    document.getElementById("playerSection").style.display = "block";
    document.getElementById("playerArtilleryDeniedSection").style.display = "none";
    game_resources.currentSection = "playerSection";
    game_resources.currentPlayerOrderNbr++;
    preparePlayerOrder();
    //todo
}

function playerFireOrder() {
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("playerFireSection").style.display = "block";
    game_resources.currentSection = "playerFireSection";

    let lightWoundsActionDeclassifiedEffects = document.getElementsByClassName("light-wounds-action-declassified");
    let lightWoundsActionEffects = document.getElementsByClassName("light-wounds-action-effect");
    let digInActionDeclassifiedEffects = document.getElementsByClassName("dig-in-action-declassified");
    let digInActionEffects = document.getElementsByClassName("dig-in-action-effect");
    let concealmentActionDeclassifiedEffects = document.getElementsByClassName("concealment-action-declassified");
    let concealmentActionEffects = document.getElementsByClassName("concealment-action-effect");

    for (let i = 0; i < lightWoundsActionDeclassifiedEffects.length; i++) {
        lightWoundsActionDeclassifiedEffects[i].style.display = "none";
        digInActionDeclassifiedEffects[i].style.display = "none";
        concealmentActionDeclassifiedEffects[i].style.display = "none";
    }
    for (let i = 0; i < lightWoundsActionEffects.length; i++) {
        lightWoundsActionEffects[i].style.display = "none";
        digInActionEffects[i].style.display = "none";
        concealmentActionEffects[i].style.display = "none";
    }
}

function playerFireOrderComplete() {
    document.getElementById("playerSection").style.display = "block";
    document.getElementById("playerFireSection").style.display = "none";
    game_resources.currentSection = "playerSection";
    game_resources.currentPlayerOrderNbr++;
    preparePlayerOrder();
    //todo
}

function playerRecoverOrder() {
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("playerRecoverSection").style.display = "block";
    game_resources.currentSection = "playerRecoverSection";
    player.recovered = true;
    //todo
}

function playerRecoverOrderComplete() {
    document.getElementById("playerSection").style.display = "block";
    document.getElementById("playerRecoverSection").style.display = "none";
    game_resources.currentSection = "playerSection";
    game_resources.currentPlayerOrderNbr++;
    preparePlayerOrder();
    //todo
}

function playerRoutOrder() {
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("playerRoutSection").style.display = "block";
    game_resources.currentSection = "playerRoutSection";
    if (player.recovered || player.routed) {
        document.getElementById("player").disabled = true;
        document.getElementById("combatBot").checked = true;
        combat_bot.routed = true;
    } else if (combat_bot.recovered || combat_bot.routed) {
        document.getElementById("combatBot").disabled = true;
        document.getElementById("player").checked = true;
        player.routed = true;
    }
    //todo
}

function playerRoutOrderComplete() {
    document.getElementById("playerSection").style.display = "block";
    document.getElementById("playerRoutSection").style.display = "none";
    game_resources.currentSection = "playerSection";
    game_resources.currentPlayerOrderNbr++;
    preparePlayerOrder();
    //todo
}

function playerPassingOrder() {
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("playerPassingSection").style.display = "block";
    game_resources.currentSection = "playerPassingSection";
    let DemolitionsActionDeclassifiedEffects = document.getElementsByClassName("demolitions-action-declassified");
    let DemolitionsActionEffects = document.getElementsByClassName("demolitions-action-effect");

    for (let i = 0; i < DemolitionsActionDeclassifiedEffects.length; i++) {
        DemolitionsActionDeclassifiedEffects[i].style.display = "none";
    }
    for (let i = 0; i < DemolitionsActionEffects.length; i++) {
        DemolitionsActionEffects[i].style.display = "none";
    }
    //todo
}

function playerPassingOrderComplete() {
    document.getElementById("playerSection").style.display = "block";
    document.getElementById("playerPassingSection").style.display = "none";
    game_resources.currentSection = "playerSection";
    game_resources.currentPlayerOrderNbr++;
    preparePlayerOrder();
    //todo
}

function playerBatteryAccess() {
    document.getElementById("playerArtilleryRequestSection").style.display = "none";
    document.getElementById("playerBatteryAccessSection").style.display = "block";
    game_resources.currentSection = "playerBatteryAccessSection";
    let lightWoundsActionDeclassifiedEffects = document.getElementsByClassName("light-wounds-action-declassified");
    let lightWoundsActionEffects = document.getElementsByClassName("light-wounds-action-effect");
    let digInActionDeclassifiedEffects = document.getElementsByClassName("dig-in-action-declassified");
    let digInActionEffects = document.getElementsByClassName("dig-in-action-effect");

    for (let i = 0; i < lightWoundsActionDeclassifiedEffects.length; i++) {
        lightWoundsActionDeclassifiedEffects[i].style.display = "none";
        digInActionDeclassifiedEffects[i].style.display = "none";
    }
    for (let i = 0; i < lightWoundsActionEffects.length; i++) {
        lightWoundsActionEffects[i].style.display = "none";
        digInActionEffects[i].style.display = "none";
    }
    //todo
}

function playerBatteryAccessComplete() {
    document.getElementById("playerSection").style.display = "block";
    document.getElementById("playerBatteryAccessSection").style.display = "none";
    game_resources.currentSection = "playerSection";
    game_resources.currentPlayerOrderNbr++;
    preparePlayerOrder();
    //todo
}

function playerFireForEffect() {
    document.getElementById("playerArtilleryRequestSection").style.display = "none";
    document.getElementById("playerFireForEffectSection").style.display = "block";
    game_resources.currentSection = "playerFireForEffectSection";
    //todo
}

function playerFireForEffectComplete() {
    document.getElementById("playerSection").style.display = "block";
    document.getElementById("playerFireForEffectSection").style.display = "none";
    game_resources.currentSection = "playerSection";
    game_resources.currentPlayerOrderNbr++;
    preparePlayerOrder();
    //todo
}

function smokeRoundCheckChange() {
    selectValue = document.querySelector('#smokeRoundsCheck');
    if (selectValue.checked) {
        document.getElementById("playerFireForEffectSmokeBarrageSection").style.display = "block";
        document.getElementById("playerFireForEffectArtilleryBarrageSection").style.display = "none";
    } else {
        document.getElementById("playerFireForEffectSmokeBarrageSection").style.display = "none";
        document.getElementById("playerFireForEffectArtilleryBarrageSection").style.display = "block";
    }
}

function playerFireSectionUnitSelectionChange() {
    let valeur = document.querySelector('input[name="playerFireSectionUnitSelection"]:checked').value;
    if (valeur == 1) {
        document.getElementById("playerFireSectionOther").style.display = "block";
        document.getElementById("playerFireSectionOrdnance").style.display = "none";
        document.getElementById("playerFireSectionSmokeRoundsCheck").checked = false;
        document.getElementById("playerFireSectionSmokeRounds").style.display = "none";
        document.getElementById("nonSmokeAttackSection").style.display = "block";
    } else {
        document.getElementById("playerFireSectionOther").style.display = "none";
        document.getElementById("playerFireSectionOrdnance").style.display = "block";
        document.getElementById("playerFireSectionSmokeRounds").style.display = "none";
    }
}

function playerFireSectionSmokeRoundsCheckChange() {
    selectValue = document.querySelector('#playerFireSectionSmokeRoundsCheck');
    if (selectValue.checked) {
        document.getElementById("playerFireSectionSmokeRounds").style.display = "block";
        document.getElementById("nonSmokeAttackSection").style.display = "none";
    } else {
        document.getElementById("playerFireSectionSmokeRounds").style.display = "none";
        document.getElementById("nonSmokeAttackSection").style.display = "block";
    }
}

function playerRoutSectionTargetRoutChange() {
    let valeur = document.querySelector('input[name="playerRoutSectionTargetRout"]:checked').value;
    if (valeur == 1) {
        combat_bot.routed = true;
        document.getElementById("activatedPlayer-1").innerHTML = "COMBAT BOT";
        document.getElementById("activatedPlayer-2").innerHTML = "COMBAT BOT";
    } else {
        player.routed = true;
        document.getElementById("activatedPlayer-1").innerHTML = "PLAYER";
        document.getElementById("activatedPlayer-2").innerHTML = "PLAYER";
    }
}

function playerFireAssault() {
    document.getElementById("playerMoveSection").style.display = "none";
    document.getElementById("playerFireAssaultSection").style.display = "block";
    game_resources.currentSection = "playerFireAssaultSection";
}

function playerFireAssaultComplete() {
    document.getElementById("playerFireAssaultSection").style.display = "none";
    document.getElementById("playerMoveSection").style.display = "block";
    game_resources.currentSection = "playerMoveSection";
}

function combatBotHiddenWireAction() {
    let actionExecute = false;
    document.getElementById("msgModalLabel").innerHTML = "COMBAT BOT HIDDEN WIRE"
    if (combat_bot.posture == "Defend") {
        for (let i = 0; i < combat_bot.hand.length; i++) {
            if (combat_bot.hand[i].Action == "Hidden Wire") {
                document.getElementById("msgModalText").innerHTML = "Place a Wire marker [F106] into that hex.";
                combat_bot.hand.splice(i, 1);
                updateCombatBotOrdersActions();
                actionExecute = true;
                document.getElementById("declassifiedMsgModalSection").style.display = "none";
                document.getElementById("msgModalSection").style.display = "block";
                break;
            }
        }
    }
    if (!actionExecute) {
        document.getElementById("declassifiedMsgModalSection").style.display = "block";
        document.getElementById("msgModalSection").style.display = "none";
    }
}

function combatBotHiddenMineAction() {
    let actionExecute = false;
    document.getElementById("msgModalLabel").innerHTML = "COMBAT BOT HIDDEN MINE"
    if (combat_bot.posture == "Defend") {
        for (let i = 0; i < combat_bot.hand.length; i++) {
            if (combat_bot.hand[i].Action == "Hidden Mine") {
                document.getElementById("msgModalText").innerHTML = "Place a Mines marker [F103] into that hex.The Defender then makes a Mine Attack [F103.2] against each of those moving / advancing units.";
                combat_bot.hand.splice(i, 1);
                updateCombatBotOrdersActions();
                actionExecute = true; HiddenWireMineModalSection
                document.getElementById("declassifiedMsgModalSection").style.display = "none";
                document.getElementById("msgModalSection").style.display = "block";
                break;
            }
        }
    }
    if (!actionExecute) {
        document.getElementById("declassifiedMsgModalSection").style.display = "block";
        document.getElementById("msgModalSection").style.display = "none";
    }

}

function playerMoveSectionFireAttackRoll() {
    document.getElementById(game_resources.currentSection).style.display = "none";
    document.getElementById("combatBotOpFireSection").style.display = "block";
    game_resources.currentSection = "combatBotOpFireSection";
    if (combat_bot.posture == "Defend") {
        document.getElementById("combatBotOppFireSectionBoreSightingSection").style.display = "block";
    }
    if (combat_bot.fate_deck == "British" || combat_bot.fate_deck == "German") {
        document.getElementById("combatBotOppFireSectionMarksmanshipSection").style.display = "block";
    }
}

function combatBotOppFireAction() {
    combat_bot.combatFP = 0;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        let card = combat_bot.hand[i];
        if (card.Order == "Fire") {
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            return true;
        }
    }
    return false;
}

function combatBotFireAttackComplete() {
    document.getElementById(game_resources.currentSection).style.display = "none";
    document.getElementById("playerMoveSection").style.display = "block";
    game_resources.currentSection = "playerMoveSection";
}

function drawCardFromDeck() {
    let rndNumber = Math.floor(Math.random() * combat_bot.deck.length);
    let card = combat_bot.deck[rndNumber];
    combat_bot.deck.splice(rndNumber, 1);
    document.getElementById("combatBotDeckSize").innerHTML = combat_bot.deck.length;
    return card;
}

function manageEventTrigger() {
    let result = "<b>";
    let card = drawCardFromDeck();
    let roll = 0;
    let detail = "";
    for (let i = 0; i < eventsdetail.length; i++) {
        if (eventsdetail[i].event == card.Event) {
            detail = eventsdetail[i].detail;
        }
    }
    switch (card.Event) {
        case "Air Support":
        case "Blaze":
        case "Booby Trap":
        case "Dust":
        case "Malfunction":
        case "Rubble":
        case "Shell Shock":
        case "Shellholes":
        case "Walking Wounded":
            result = result.concat(card.Event, " in ", card.Hex);
            break;

        case "Commissar":
            roll = card.White + card.Black;
            result = result.concat(card.Event, " for ", roll, " on Support table");
            break;

        case "Infiltration":
            roll = card.White + card.Black;
            result = result.concat(card.Event, " for ", roll, " on Support table");
            card = drawCardFromDeck();
            result = result.concat(" in ", card.Hex);
            break;

        case "Reinforcements":
            let roll = card.White + card.Black;
            result = card.Event.concat(" for ", roll, " on Support table");
            break;

        default:
            result = result.concat(card.Event);


    }
    result = result.concat("</b>", detail);
    return result;
}

function combatBotFireAttackRoll() {
    let card = drawCardFromDeck();
    let whiteDice = card.White;
    let blackDice = card.Black;
    let trigger = card.Trigger;
    let dicestart = '<i class="bi bi-dice-';
    let diceWhite = '"></i> ';
    let diceBlack = '-fill"></i> ';
    let content = dicestart.concat(whiteDice, diceWhite, dicestart, blackDice, diceBlack);
    document.getElementById("combatBotFireAttackRoll").innerHTML = content;

    if (trigger == "Event!") {
        content = manageEventTrigger();
    } else if (trigger == "Sniper!") {
        card = drawCardFromDeck();
        let hex = card.Hex;
        content = trigger.concat(" in ", hex);
    } else {
        content = trigger;
    }

    document.getElementById("combatBotTriggerDetails").innerHTML = content;
    combat_bot.combatFP = combat_bot.combatFP + whiteDice + blackDice;
    document.getElementById("totalFP").innerHTML = combat_bot.combatFP;

    alert(combat_bot.deck.length);
}

function combatBotRoll(resultSection, resultEvent) {
    let card = drawCardFromDeck();
    let whiteDice = card.White;
    let blackDice = card.Black;
    let trigger = card.Trigger;
    let dicestart = '<i class="bi bi-dice-';
    let diceWhite = '"></i> ';
    let diceBlack = '-fill"></i> ';
    let content = dicestart.concat(whiteDice, diceWhite, dicestart, blackDice, diceBlack);

    document.getElementById(resultSection).innerHTML = content;

    content = "";
    if (trigger == "Event!") {
        content = manageEventTrigger();
    } else if (trigger == "Sniper!") {
        card = drawCardFromDeck();
        let hex = card.Hex;
        content = "<b>"
        content = content.concat(trigger);
        content = content.concat(" in ", hex, "</b>");
    } else if (trigger == "Time!") {
        content = "<b>"
        content = content.concat(trigger, "</b>");
    }

    document.getElementById(resultEvent).innerHTML = content;
}

function combatBotAmbushAction() {

    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == "Ambush") {
            showHideAmbushActionEffect(false);
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }
    if (!actionExecute) {
        showHideAmbushActionEffect(true);
    }
}

function combatBotBoreSightingAction() {

    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == "Bore Sighting") {
            showHideActionEffect(false, "bore-sighting");
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }
    if (!actionExecute) {
        showHideActionEffect(true, "bore-sighting");
    }
}

function combatBotCrossfireAction() {

    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == "Crossfire") {
            showHideActionEffect(false, "crossfire");
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }
    if (!actionExecute) {
        showHideActionEffect(true, "crossfire");
    }
}

function combatBotHiddenGrenadesAction() {

    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == "Hidden Grenades") {
            showHideActionEffect(false, "hidden-grenades");
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }
    if (!actionExecute) {
        showHideActionEffect(true, "hidden-grenades");
    }
}

function combatBotMarksmanshipAction() {

    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == "Marksmanship") {
            showHideActionEffect(false, "marksmanship");
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }
    if (!actionExecute) {
        showHideActionEffect(true, "marksmanship");
    }
}

function combatBotSprayFireAction() {

    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == "Spray Fire") {
            showHideActionEffect(false, "spray-fire");
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }
    if (!actionExecute) {
        showHideActionEffect(true, "spray-fire");
    }
}

function combatBotSustainedFireAction() {

    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == "Sustained Fire") {
            showHideActionEffect(false, "sustained-fire");
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }
    if (!actionExecute) {
        showHideActionEffect(true, "sustained-fire");
    }
}

function gameTimeAdvancement() {
    if (document.getElementById("opFireSectionUnitCanDigInCheck").checked) {
        let actionExecute = false;
        for (let i = 0; i < combat_bot.hand.length; i++) {
            if (combat_bot.hand[i].Action == "Dig In") {
                showHideActionEffect(false, "dig-in");
                combat_bot.hand.splice(i, 1);
                updateCombatBotOrdersActions();
                actionExecute = true;
                break;
            }
        }
        if (!actionExecute) {
            showHideActionEffect(true, "dig-in");
        }
    }
}

function endGame() {
    document.getElementById(game_resources.currentSection).style.display = "none";
    document.getElementById("endOfBattleSection").style.display = "block";
}

function newBattle() {
    window.location.reload();
}

function updateCombatBotOrdersActions() {

    let ordersList = "";
    let actionsList = "";

    for (let i = 0; i < combat_bot.hand.length; i++) {
        ordersList = ordersList.concat(combat_bot.hand[i].Order);
        actionsList = actionsList.concat(combat_bot.hand[i].Action);
        if (i < combat_bot.hand.length - 1) {
            ordersList = ordersList.concat(", ");
            actionsList = actionsList.concat(", ");
        }
    }
    document.getElementById("combatBotOrders").innerHTML = ordersList;
    document.getElementById("combatBotActions").innerHTML = actionsList;
}

function updateCombatBotSection() {


}

function displayActionEffects(display, action, effect) {
    let actionEffects = document.getElementsByClassName(action.concat(effect));
    for (let i = 0; i < actionEffects.length; i++) {
            actionEffects[i].style.display = display;
    }
}

function showHideActionEffect(declassified, action) {
    let actionEffects = document.getElementsByClassName(action.concat("-action-effect"));
    for (let i = 0; i < actionEffects.length; i++) {
        if (declassified) {
            actionEffects[i].style.display = "none";
        } else {
            actionEffects[i].style.display = "block";
        }
    }
    actionEffects = document.getElementsByClassName(action.concat("-action-effect-not-available"));
    for (let i = 0; i < actionEffects.length; i++) {
        if (declassified) {
            actionEffects[i].style.display = "block";
        } else {
            actionEffects[i].style.display = "none";
        }
    }
}

function combatBotConcealAction() {
    /*
    Concealment may only be played just prior to
   the player making a Defense Roll.
    */
    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == "Concealment") {
            showHideActionEffect(false, "concealment");
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }
    if (!actionExecute) {
        showHideActionEffect(true, "concealment");
    }
}

function combatBotLightWoundsAction() {

    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == "Light Wounds") {
            displayActionEffects("block", "light-wounds", "-action-effect");
            displayActionEffects("none", "light-wounds", "-action-effect-not-available");
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }
    if (!actionExecute) {
        displayActionEffects("none", "light-wounds", "-action-effect");
        displayActionEffects("block", "light-wounds", "-action-effect-not-available");
    }
}

function combatBotDemolitionsAction() {

    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == "Demolitions") {
            showHideActionEffect(false, "demolitions");
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }
    if (!actionExecute) {
        showHideDemolitionsActionEffect(true);
    }
}

function combatBotDigInAction() {

    let actionExecute = false;
    for (let i = 0; i < combat_bot.hand.length; i++) {
        if (combat_bot.hand[i].Action == "Dig In") {
            showHideDigInActionEffect(false);
            combat_bot.hand.splice(i, 1);
            updateCombatBotOrdersActions();
            actionExecute = true;
            break;
        }
    }
    if (!actionExecute) {
        showHideDigInActionEffect(true);
    }
}

//Player Actions
function playerAssaultFireAction() {
    document.getElementById("concealmentActionDetail").innerHTML = "";
    document.getElementById("concealmentActionDetail").style.display = "none";
    document.getElementById("concealmentDeclassified").innerHTML = "";
    document.getElementById("concealmentDeclassified").style.display = "none";
    document.getElementById("hiddenEntrenchmentActionDetail").innerHTML = "";
    document.getElementById("hiddenEntrenchmentActionDetail").style.display = "none";
    document.getElementById("hiddenEntrenchmentDeclassified").innerHTML = "";
    document.getElementById("hiddenEntrenchmentDeclassified").style.display = "none";
    document.getElementById("hiddenPillboxActionDetail").innerHTML = "";
    document.getElementById("hiddenPillboxActionDetail").style.display = "none";
    document.getElementById("hiddenPillboxDeclassified").innerHTML = "";
    document.getElementById("hiddenPillboxDeclassified").style.display = "none";

    if (combat_bot.posture == "Defend") {
        document.getElementById("hiddenEntrenchmentActionSection").style.display = "block";
        document.getElementById("hiddenPillboxActionSection").style.display = "block";
    }
}

// MAIN
for (let i = 0; i < game_resources.scenarios_availables.length; i++) {
    const optionNode = document.createElement("option");
    optionNode.value = i;
    const textNode = document.createTextNode(game_resources.scenarios_availables[i].title);
    optionNode.appendChild(textNode);
    document.getElementById("scenario_choices").appendChild(optionNode);
}
document.getElementById("scenario_choices").addEventListener("change", selectScenario);
document.getElementById("start_game_btn").addEventListener("click", startGame);

//STATUS SECTION - statusSection
document.getElementById("combatBotRadioInPlay").addEventListener("change", combatBotRadioInPlayChange);
document.getElementById("combatBotRadioInPlay").addEventListener("change", playerStatusChange);
document.getElementById("combatBotBrokenUnit").addEventListener("change", playerStatusChange);
document.getElementById("playerRadioInPlay").addEventListener("change", playerStatusChange);
document.getElementById("playerBrokenUnit").addEventListener("change", playerStatusChange);
document.getElementById("playerEnemyWithinLOSandRange").addEventListener("change", playerStatusChange);

//ORDERS SECTION - ordersSection
document.getElementById("combatBotOrderBtn").addEventListener("click", combatBotOrder);
document.getElementById("moveOrderBtn").addEventListener("click", function () { executeOrder("moveSection", "Move"); });
document.getElementById("advanceOrderBtn").addEventListener("click", function () { executeOrder("advanceSection", "Advance"); });
document.getElementById("artilleryRequestOrderBtn").addEventListener("click", function () { executeOrder("artilleryrequestSection", "Artillery Request"); });
document.getElementById("artilleryDeniedOrderBtn").addEventListener("click", function () { executeOrder("artillerydeniedSection", "Artillery Denied"); });
document.getElementById("fireOrderBtn").addEventListener("click", function () { executeOrder("fireSection", "Fire"); });
document.getElementById("recoverOrderBtn").addEventListener("click", function () { executeOrder("recoverSection", "Recover"); });
document.getElementById("routOrderBtn").addEventListener("click", function () { executeOrder("routSection", "Rout"); });
document.getElementById("passingOrderBtn").addEventListener("click", function () { executeOrder("passSection", "Pass"); });
document.getElementById("noMoreOrderBtn").addEventListener("click", nextPlayerTurn);

//MOVE SECTION - moveSection
document.getElementById("moveSectionMoveBtn").addEventListener("click", movement);
document.getElementById("moveSectionOpFireBtn").addEventListener("click", executeOpFire);
document.getElementById("moveOrderCompleteBtn").addEventListener("click", orderComplete);

//OP FIRE SECTION - opFireSection
document.getElementById("opFireSectionReadyFireBtn").addEventListener("click", readyToFire);
document.getElementById("opFireSectionDefenseRollBtn").addEventListener("click", function () { combatBotRoll("opFireSectionDefenseResult", "opFireSectionDefenseEvent"); });
document.getElementById("opFireSectionLightWoundsBtn").addEventListener("click", combatBotLightWoundsAction);
document.getElementById("opFireSectionGameTimeAdvancementBtn").addEventListener("click", gameTimeAdvancement);
document.getElementById("opFireSectionEndGameBtn").addEventListener("click", endGame)
document.getElementById("opFireSectionFireAttackCompleteBtn").addEventListener("click", opFireComplete);

//ADVANCE SECTION - advanceSection
document.getElementById("advanceSectionMeleeHex").addEventListener("change", advanceSectionMeleeHexChange);
document.getElementById("advanceOrderCompleteBtn").addEventListener("click", orderComplete);

//MELEE SECTION - meleeSection
document.getElementById("advanceSectionAmbushBtn").addEventListener("click", combatBotLightWoundsAction);
document.getElementById("meleeSectionActiveNextPlayerAmbushBtn").addEventListener("click", activePlayerToAmbush);
document.getElementById("meleeSectionResolveMeleeBtn").addEventListener("click", resolveMelee)
document.getElementById("meleeSectionMeleeRollBtn").addEventListener("click", function () { combatBotRoll("meleeSectionMeleeRollResult", "meleeSectionMeleeEvent"); });
document.getElementById("meleeCompleteBtn").addEventListener("click", meleeComplete);

//ARTILLERY REQUEST SECTION - artilleryRequestSection
document.getElementById("artilleryRequestOrderCompleteBtn").addEventListener("click", orderComplete);

//ARTILLERY DENIED SECTION - artilleryDeniedSection
document.getElementById("artilleryDeniedOrderCompleteBtn").addEventListener("click", orderComplete);

//FIRE SECTION - fireSection
document.getElementById("fireOrderCompleteBtn").addEventListener("click", orderComplete);

//RECOVER SECTION - recoverSection
document.getElementById("recoverOrderCompleteBtn").addEventListener("click", orderComplete);

//ROUT SECTION - routSection
document.getElementById("routOrderCompleteBtn").addEventListener("click", orderComplete);

//PASS SECTION - passSection
document.getElementById("passOrderCompleteBtn").addEventListener("click", orderComplete);

//END OF BATTLE - endOfBattleSection
document.getElementById("newBattle").addEventListener("click", newBattle);

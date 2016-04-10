/* global cm */

var status = -1;

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    if (cm.isQuestFinished(24002)) {
        cm.sendOk("（菲利屋司完全被冰塊包圍。再怎麼說也聽不進去…）");
        cm.dispose();
        return;
    }

    if (cm.isQuestActive(24007) || cm.isQuestFinished(24007)) {
        cm.sendNext("請救救我們");
        cm.dispose();
        return;
    }
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNextS("長老！大家都沒事！可是… 可是我們的村莊…！", 2);
    } else if (status === i++) {
        cm.sendNextPrev("異常冰冷陰森的氣息籠罩著村莊全體。精靈遊俠，從你身上也強烈的感受到這股氣息。");
    } else if (status === i++) {
        cm.sendNextPrevS("精靈遊俠身上的氣息最強烈！該不會… 是黑魔法師的力量？！", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrevS("…小孩已經被困在冰雪之中。再繼續下去連大人也…力量變得越來越強，被這股氣息影響只是遲早的問題罷了。因此我們還在撐，可是快要…", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrevS("全部…都是我的錯… 雖然成功的封印了黑魔法師，然而他留下來的 #r詛咒#k… 連我們的村莊…", 2);
    } else if (status === i++) {
        cm.sendNextPrevS("詛咒嗎？", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrevS("讓村莊結冰的這股力量…", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrev("…黑魔法師對國王下詛咒，因此影響了所有的精靈…");
    } else if (status === i++) {
        cm.sendNextPrevS("對不起…都是我的錯。要不是我被黑魔法師擊中…", 2);
    } else if (status === i++) {
        cm.sendNextPrev("試圖讓新楓之谷滅亡的黑魔法師… 果然是個可怕的傢伙！雖然已經封印成功，然而這種程度… 封印演變為驚人的事件。");
    } else if (status === i++) {
        cm.sendNextPrevS("連精靈遊俠這麼強的人都無法抵擋的詛咒，那麼誰都阻擋不了。", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrevS("沒錯！這不是精靈遊俠的過錯！封印也成功了！這都要怪那個可惡的黑魔法師！", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrevS("可是…不管怎麼樣都要想辦法躲過。或許從一開始就不該和黑魔法師對決！…把精靈們弄成這副德性… 雖然我是國王，可是我沒有這種資格！", 2);
    } else if (status === i++) {
        cm.sendNextPrevS("不要說這種喪氣話，精靈遊俠。倘若能躲得過和黑魔法師的對決…就不會將您，我們的國王精靈遊俠送到險惡的戰場上去了。", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrev("這些都是我們的錯。讓當上國王才不久，年紀輕輕的您… 仗著您有強大力量，把您送到黑魔法師身邊，這都是我們的錯…");
    } else if (status === i++) {
        cm.sendNextPrevS("戰鬥長老太弱了無法和黑魔法師決鬥。我…我真的很對不起精靈遊俠…", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrevS("不，這才不是長老們的錯！先說要去找黑魔法師的人是我…我不後悔前去決鬥。只是後悔自己阻止不了…", 2);
    } else if (status === i++) {
        cm.sendNextPrev("那麼應該是我們大家要後悔。");
    } else if (status === i++) {
        cm.sendNextPrevS("請不要獨自一個人扛下責任。和黑魔法師對決是我們精靈全體的決定，受到這個詛咒也是我們精靈全體必須揹負的包袱、", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrevS("結冰的人也全都擔心精靈遊俠！沒有人有任何怨言！", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrevS("大家…", 2);
    } else if (status === i++) {
        cm.sendNextPrev("真正可怕的不是詛咒。最可怕的是我們精靈彼此之間互相埋怨，互相厭惡，忘了彼此相愛的心。不管黑魔法師下了多麼邪惡的詛咒，只要我們活著，就會想辦法找到解決的方法…");
    } else if (status === i++) {
        cm.sendNextPrev("國王平安無事，因此精靈們還有一線希望。");
    } else if (status === i++) {
        cm.sendNextPrevS("真的有…辦法嗎？", 2);
    } else if (status === i++) {
        cm.sendNextPrev("當然沒辦法立刻阻止詛咒。可是我們是精靈。可以活很久很久…時間總是站在我們這一邊 。");
    } else if (status === i++) {
        cm.sendNextPrev("在黑魔法師的詛咒讓我們全部沉睡前，將櫻花處封印吧！精靈遊俠，如果不能避開詛咒，在詛咒消失前將村莊完全封印 #b和所有精靈一起沉睡吧！#k");
    } else if (status === i++) {
        cm.sendNextPrevS("在詛咒解開之前還需要多少時間，連我也不知道，可是沒有必要害怕時間。靜心等待吧！精靈遊俠。", 4, 1033204);
    } else if (status === i++) {
        cm.sendNextPrevS("一起沉睡再甦醒，或許連黑魔法師的詛咒也能解開！", 4, 1033203);
    } else if (status === i++) {
        cm.sendNextPrev("黑魔法師的詛咒一定不能戰勝時間的力量… 那麼真正的勝利者就是我們了。");
    } else if (status === i++) {
        cm.sendNextPrevS("對… 一定會贏！", 2);
    } else if (status === i++) {
        cm.sendNextPrev("當然了。啊…我也逐漸無法阻擋詛咒的氣息了。那麼快點封印村莊吧！可是，精靈遊俠。在長時間沉睡等待詛咒解除的期間，不要讓懷有邪念的人出現…");
    } else if (status === i++) {
        cm.sendNextPrevS("封印之前還需要做幾項準備。 最好先聽#b亞斯提那#k的話。", 1);
    } else if (status === i++) {
        cm.forceStartQuest(24007, "1");
        cm.dispose();
    } else {
        cm.dispose();
    }
}
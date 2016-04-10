/* global cm */

var status = -1;

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNextS("阿普立恩！ 你還好嗎？ 普力特！？ …呼，只是失去意識罷了…", 2);
    } else if (status === i++) {
        cm.sendNextPrev("精靈遊俠… 你還活著。");
    } else if (status === i++) {
        cm.sendNextPrevS("當然啊！連封印都成功了，不能乾坐在這裡！可是…你看起來不太好耶！你還好嗎？大家都跑到哪去了？", 2);
    } else if (status === i++) {
        cm.sendNextPrev("#b黑魔法師的封印雖然成功#k了，可是他最後施展的魔法引發的爆炸，讓大家散落在各地。我們會來到相同的地方簡直是偶然。");
    } else if (status === i++) {
        cm.sendNextPrevS("啊！這樣啊！真的飛得好遠，可是能平安無事真是太好了…", 2);
    } else if (status === i++) {
        cm.sendNextPrevS("是因為不需要緊張了嗎？我全身無力…不，不只是沒力氣… 我覺得好冷喔！", 2);
    } else if (status === i++) {
        cm.sendNextPrevS("這樣看來…這裡本來是下雪的地區嗎？像這樣燃燒居然會下雪…真的好奇怪…", 2);
    } else if (status === i++) {
        cm.sendNextPrev("…沒感覺到嗎？ 精靈遊俠？ 這個 #r龐大的詛咒#k… 是對普力特，還有其他所有人下的黑魔法師的詛咒。");
    } else if (status === i++) {
        cm.sendNextPrevS("詛…咒？", 2);
    } else if (status === i++) {
        cm.sendNextPrev("寒冷的氣息包圍著你。體力強盛時不曉得會怎樣… 可是現在因為戰鬥的緣故變得很衰弱，非常危險 …黑魔法師可以輕易的將我們束手就擒…");
    } else if (status === i++) {
        cm.sendNextPrevS("其他人都很好。大家都很強壯。可是我很擔心普力特… 這個傢伙的體力相當弱。", 2);
    } else if (status === i++) {
        cm.sendNextPrev("普力特由我來照顧。不用擔心。 …還有精靈遊俠，你才需要更擔心。你是 #b精靈之王#k。對你下的詛咒… #r就等於對精靈全體下詛咒#k不是嗎？");
    } else if (status === i++) {
        cm.sendNextPrevS("...!", 2);
    } else if (status === i++) {
        cm.sendNextPrev("快點前往#b櫻花處#k吧！倘若#b黑魔法師的詛咒真的對精靈全體造成影響#k…身為國王的你，應該去看看。");
    } else if (status === i++) {
        cm.sendNextPrevS("我知道了！ 阿普立恩。 …還能再見到你嗎？", 2);
    } else if (status === i++) {
        if (mode !== 1) {
            cm.dispose();
            return;
        }
        cm.sendNextPrev("…我也希望如此。");
    } else if (status === i++) {
        cm.sendYesNoS("#b(雖然很擔心同伴們… 然而現在只能相信他們。 用回歸技能前往村莊。)", 2);
    } else if (status === i++) {
        cm.dispose();
        cm.warp(910150001, 0);
    } else {
        cm.dispose();
    }
}
/* global qm */

var status = -1;


function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status === i++) {
        qm.dispose();
    } else if (status === i++) {
        if (mode !== 1) {
            qm.dispose();
            return;
        }
        qm.sendNext("或許這是幸運。 這和我們暫時離開因黑魔法師變荒涼的新楓之谷一樣。我們再度回來時這片土地不曉得會變得如何…");
    } else if (status === i++) {
        qm.sendYesNo("等待這個世界變得更美麗的同時，我先沉睡了， 精靈遊俠…");
    } else if (status === i++) {
        qm.sendOk("祝有個美夢…吧…");
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}

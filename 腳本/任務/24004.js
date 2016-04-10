/* global qm */

var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status === i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendYesNo("#b(看見了創造結界的魔法的語言。念出咒語就能完成櫻花處的結界了。至少有100年任何人都無法入侵這個村莊的強大結界… 算是結界嗎？)");
    } else if (status === i++) {
        qm.sendOk("#b(創造結界了。現在村莊安全了…)");
        qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}

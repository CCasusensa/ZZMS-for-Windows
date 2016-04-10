/* global ms */

var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.lockUI(false);
        ms.lockKey(false);
        ms.disableOthers(false);
        ms.teachSkill(20021181, -1, 0);
        ms.teachSkill(20021166, -1, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
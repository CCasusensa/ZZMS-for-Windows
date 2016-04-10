/* global ms */

var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.lockUI(true);
        while (ms.getLevel() < 10) {
            ms.levelUp();
        }
        ms.unequip(1522038, true);
        ms.equip(1522000);
        ms.equip(1352000);
        ms.gainItem(1142336, 1);
        ms.gainItem(2000019, 50);
        ms.getDirectionStatus(true);
        ms.showWZEffect("Effect/Direction5.img/mersedesTutorial/Scene1");
        ms.dispose();
    } else {
        ms.dispose();
    }
}
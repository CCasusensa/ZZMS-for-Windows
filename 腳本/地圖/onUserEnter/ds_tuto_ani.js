/*
 Author: Pungin
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        ms.lockUI(true);
        ms.disableOthers(true);
        ms.playMovie("DemonSlayer" + (ms.getPlayerStat("GENDER") == 0 ? "1" : "2") + ".avi");
    } else {
        ms.dispose();
        ms.warp(931050000, 0);
    }
}
/*
 Author: Pungin
 */
var status = -1;

function start() {
    if (ms.getMapId() == 104000000) {
        ms.environmentChange("maplemap/enter/104000000", 13);
        ms.lockUI(false);
    }
    ms.checkMedalQuest();
    ms.dispose();
}
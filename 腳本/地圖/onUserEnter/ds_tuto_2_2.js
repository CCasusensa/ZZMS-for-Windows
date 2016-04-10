/*
 Author: Pungin
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    if (status == 0) {
        ms.spawnNPCRequestController(2159309, 500, 50);
        ms.getDirectionStatus(true);
        ms.lockUI(true);
        ms.disableOthers(true);
        ms.getDirectionEffect(1, "", [30]);
        ms.getDirectionStatus(true);
    } else if (status == 1) {
        ms.sendNextS("果然擁有相當了得的實力… 這不是好機會嗎？ 我早就想要一較高下，看看誰是最強的軍團長。 好了，就來看看你的力量強呢？還是我的魔法強？", 5, 2159308);
    } else if (status == 2) {
        ms.topMsg("請連續按下控制鍵，阻擋阿卡伊農的攻擊且進行反擊。");
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/guide1/0", [5010, 150, -300, 0, 0]);
        ms.setNPCSpecialAction(2159309, "alert");
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/arkyrimAttack", [0, 0, -7, 1, 1, 0, 2159309, 0]);
        ms.getDirectionEffect(1, "", [2010]);
    } else if (status == 3) {
        ms.environmentChange("demonSlayer/arkAttack0", 5);
        ms.getDirectionEffect(4, "17#17#17#", [4, 2, 3000]);
    } else if (status == 4) {
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/9", [5010, 150, -300, 0, 0]);
        ms.getDirectionEffect(0, "", [370, 0]);
        ms.getDirectionEffect(2, "Skill/3112.img/skill/31121000/effect", [0, 323, 83, 1, 1, 0, 0, 0]);
        ms.environmentChange("demonSlayer/31121000", 5);
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/9", [2000, 0, -100, 0, 0]);
        ms.getDirectionEffect(1, "", [900]);
    } else if (status == 5) {
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/4", [1000, 0, -150, 1, 1, 0, 2159309, 0]);
        ms.environmentChange("demonSlayer/31121000h", 5);
        ms.setNPCSpecialAction(2159309, "teleportation");
        ms.getDirectionEffect(1, "", [570]);
    } else if (status == 6) {
        ms.removeNPCRequestController(2159309);
        ms.spawnNPCRequestController(2159309, 108, 50, 1);
        ms.getDirectionEffect(1, "", [1000]);
    } else if (status == 7) {
        ms.sendNextS("果然很有一套… 真是有趣。 哈哈哈哈！", 5, 2159308);
    } else if (status == 8) {
        ms.setNPCSpecialAction(2159309, "resolve");
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/10", [2000, 0, -150, 1, 1, 0, 2159309, 0]);
        ms.getDirectionEffect(1, "", [1500]);
    } else if (status == 9) {
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/11", [2000, 0, -100, 0, 0]);
        ms.getDirectionEffect(1, "", [1500]);
    } else if (status == 10) {
        ms.getDirectionEffect(2, "Skill/3112.img/skill/31121005/effect", [0, 323, 71, 1, 1, 1, 1, 0]);
        ms.getDirectionEffect(2, "Skill/3112.img/skill/31121005/effect0", [0, 323, 71, 1, 1, -1, 1, 0]);
        ms.environmentChange("demonSlayer/31121005", 5);
        ms.getDirectionEffect(0, "", [364, 0]);
        ms.getDirectionEffect(1, "", [1980]);
    } else if (status == 11) {
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/gateOpen/0", [2100, 918, -195, 1, 1, 0, 0, 0]);
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/gateLight/0", [2100, 926, -390, 1, 1, 0, 0, 0]);
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/gateStair/0", [2100, 879, 30, 1, 1, 1, 0, 0]);
        ms.environmentChange("demonSlayer/openGate", 5);
        ms.getDirectionEffect(1, "", [1950]);
    } else if (status == 12) {
        ms.forceStartQuest(23203);
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/0", [2000, 0, -150, 1, 1, 0, 2159309, 0]);
        ms.getDirectionEffect(1, "", [1200]);
    } else if (status == 13) {
        ms.sendNextS("…噢，黑魔法師親自來迎接你了。 雖然很可惜，就到此為止吧？ 那麼，我得去見見那些被稱為英雄的人長什麼樣子。", 5, 2159308);
    } else if (status == 14) {
        ms.sendNextPrevS("已經不會再見面了！ #h0# 這是你的榮幸。 因為可以死在那個人的手中！ 哈哈哈哈！", 5, 2159308);
    } else if (status == 15) {
        ms.setNPCSpecialAction(2159309, "teleportation");
        ms.getDirectionEffect(1, "", [570]);
    } else if (status == 16) {
        ms.removeNPCRequestController(2159309);
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg2/2", [2000, 0, -100, 0, 0]);
        ms.getDirectionEffect(3, "", [2]);
    } else if (status == 17) {
        ms.environmentChange("demonSlayer/whiteOut", 13);
        ms.getDirectionEffect(1, "", [1950]);
    } else {
        ms.forceCompleteQuest(23203);
        ms.getDirectionStatus(true);
        ms.dispose();
        ms.warp(931050300, 0);
    }
}



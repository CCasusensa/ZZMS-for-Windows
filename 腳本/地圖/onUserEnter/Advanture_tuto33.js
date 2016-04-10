/* global ms */

function action(mode, type, selection) {
    ms.resetMap(ms.getMapId());
    ms.topMsg("請擊退紅寶王.");
    ms.spawnMob(9300815, 0, 0);
    ms.dispose();
}
/*
 * ǻ��¶��� �ҽ� ��ũ��Ʈ �Դϴ�.
 * 
 * ��Ż��ġ : 
 * ��Ż���� : 
 * 
 * ���� : ��ũ��
 * 
 */

function enter(pi) {
    if (pi.getPlayer().getKeyValue("1stJobTrialStatus") == null) {
	pi.getPlayer().message("'����' ���� ���� ���� �ɾ��ּ���.");
        return false;
    } else {
        pi.warp(219000000, "in03");
        return true;
    }
}
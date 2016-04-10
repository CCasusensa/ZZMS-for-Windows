TYPE=VIEW
query=select `a`.`name` AS `accountname`,`a`.`id` AS `accountid`,`c`.`name` AS `name`,`c`.`id` AS `characterid`,`cl`.`offense` AS `offense`,`cl`.`count` AS `count`,`cl`.`lastoffensetime` AS `lastoffensetime`,`cl`.`param` AS `param` from ((`zzms`.`cheatlog` `cl` join `zzms`.`characters` `c`) join `zzms`.`accounts` `a`) where ((`cl`.`id` = `c`.`id`) and (`a`.`id` = `c`.`accountid`) and (`a`.`banned` = 0))
md5=bd053db452f4fa3f1d9dd6d78885984a
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=1
with_check_option=0
timestamp=2016-02-28 14:11:40
create-version=1
source=select `a`.`name` AS `accountname`,`a`.`id` AS `accountid`,`c`.`name` AS `name`,`c`.`id` AS `characterid`,`cl`.`offense` AS `offense`,`cl`.`count` AS `count`,`cl`.`lastoffensetime` AS `lastoffensetime`,`cl`.`param` AS `param` from ((`cheatlog` `cl` join `characters` `c`) join `accounts` `a`) where ((`cl`.`id` = `c`.`id`) and (`a`.`id` = `c`.`accountid`) and (`a`.`banned` = 0)) ;
client_cs_name=utf8
connection_cl_name=utf8_general_ci
view_body_utf8=select `a`.`name` AS `accountname`,`a`.`id` AS `accountid`,`c`.`name` AS `name`,`c`.`id` AS `characterid`,`cl`.`offense` AS `offense`,`cl`.`count` AS `count`,`cl`.`lastoffensetime` AS `lastoffensetime`,`cl`.`param` AS `param` from ((`zzms`.`cheatlog` `cl` join `zzms`.`characters` `c`) join `zzms`.`accounts` `a`) where ((`cl`.`id` = `c`.`id`) and (`a`.`id` = `c`.`accountid`) and (`a`.`banned` = 0))

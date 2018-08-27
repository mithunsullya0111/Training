create user 'mithun'@'%' IDENTIFIED BY 'Abcd@123';

GRANT ALL ON sales.* TO 'mithun'@'%';


create database payment;

use payment;

create table wallet(
id int(10) unsigned NOT NULL auto_increment comment "ID",
cid int(10) unsigned NOT NULL comment "Customer Id",
sid int(10) unsigned NOT NULL comment "Subscription Id",
line_item_id int(11) comment "Line item Id",
line_item_aid int(11) comment "Line item Id",
amount decimal(10,2) comment "amount",
total decimal(10,2) comment "total",
transaction_id varchar(255) comment "Transaction Id",
payment_id varchar(255) comment "Payment Id",
transaction_type varchar(255) comment "Transaction type",
reversal varchar(255) comment "reversal",
`status` tinyint(1) comment "status",
created datetime comment "Creation Time",
updated datetime comment "Update time",
user_id int(11) comment "User Id",
delivery_date date comment "Delivery date",
primary key(id)
);


create table transactions(
id int(10) unsigned not null auto_increment comment "id",
cid int(10) unsigned not null comment "id",
sid int(10) unsigned not null comment "id",
amount decimal(10,2) comment "amount",
total decimal(10,2) comment "amount",
transaction_id varchar(255) comment "teansaction id",
payment_id varchar(255) unique key  comment "payment id",
transaction_type varchar(255) unique key  comment "teansaction type",
`status` tinyint(1) comment "status",
created datetime comment "creation time",
updated datetime comment "updated time",
response varchar(45),
primary key(id)
);

START TRANSACTION;
insert into wallet values (1,1,1,12,20,15000.00,20000.00,'5','10','online','Paytm','1',
'2018-05-05','2018-05-05',2,'2018-05-05');
insert into transactions values (1,1,1,15000.00,20000.00,'5','10','online',
1,'2018-05-05','2018-05-05','Yes');

commit;

select * from transactions;

start transaction;
update transactions
set cid=10
where id=1;

rollback;


start transaction;
update wallet
set cid=101
where id=1;

savepoint a;
update transactions
set cid=10
where id=1;

rollback to savepoint a;

select * from wallet;

GRANT select,delete,update ON payment.wallet TO 'mithun'@'%';
 
revoke delete on wallet from 'mithun'; 



delete
from wallet
where id=1;

delete from wallet;

update wallet
set cid=1000
where id=1;

update wallet
set cid=1550;

rename table wallet to customer_wallet;



create table sales_order( entity_id int(10) unsigned NOT NULL auto_increment primary key COMMENT "Entity id", state varchar(32) comment "State", `status` varchar(32) comment "Status", coupon_code varchar(255) comment "Coupon Code", protect_code varchar(255) comment "Project Code", shipping_description varchar(255) comment "Shipping Description", is_virtual smallint(5) unsigned comment "Is Virtual", store_id smallint(5) unsigned comment "Store Id", customer_id int(10) unsigned comment "Customer Id",
 base_discount_amount decimal(12,4) comment "Base Discount Amount",
 base_discount_canceled decimal(12,4) comment "Base Discount Cancelled", 
 base_discount_invoiced decimal(12,4) comment "Base Discount Invoiced", 
 base_discount_refunded decimal(12,4) comment "Base Discount Refunded", 
 base_grand_total decimal(12,4) comment "Base Grand Total", 
 base_shipping_amount decimal(12,4) comment "Base Shipping Amount", 
 base_shipping_canceled decimal(12,4) comment "Base Shipping Cancelled", 
 base_shipping_invoiced decimal(12,4) comment "Base Shipping Invoiced", 
 base_shipping_refunded decimal(12,4) comment "Base Shipping Refunded", 
 base_shipping_tax_amount decimal(12,4) comment "Base Shipping Tax Amount", 
 base_shipping_tax_refunded decimal(12,4) comment "Base Shipping Tax Refunded", 
 base_subtotal decimal(12,4) comment "Base Subtotal", 
 base_subtotal_canceled decimal(12,4) comment "Base Subtotal Cancelled", 
 base_subtotal_invoiced decimal(12,4) comment "Base Subtotal Invoiced", 
 base_subtotal_refunded decimal(12,4) comment "Base Subtotal Refunded", 
 base_tax_amount decimal(12,4) comment "Base Tax Amount", 
 base_tax_canceled decimal(12,4) comment "Base Tax Cancelled",
 base_tax_invoiced decimal(12,4) comment "Base Tax Invoiced", 
 base_tax_refunded decimal(12,4) comment "Base Tax Refunded", base_to_global_rate decimal(12,4) comment "Base To Global rate", base_to_order_rate decimal(12,4) comment "Base To Order Rate", base_total_canceled decimal(12,4) comment "Base Total Cancelled", 
 base_total_invoiced decimal(12,4) comment "Base Total Invoiced", base_total_invoiced_cost decimal(12,4) comment "Base Total Invoiced Cost", base_total_offline_refunded decimal(12,4) comment "Base Total Offline Refunded", base_total_online_refunded decimal(12,4) comment "Base Total Online Refunded", 
 base_total_paid decimal(12,4) comment "Base Total Invoiced", base_total_qty_ordered decimal(12,4) comment "Base Total Quantity Ordered", base_total_refunded  decimal(12,4) comment "Base Total Refunded", discount_amount decimal(12,4) comment "Discount Amount", discount_canceled decimal(12,4) comment "Discount Cancelled", discount_invoiced decimal(12,4) comment "Discount Invoiced",
 discount_refunded decimal(12,4) comment "Discount Refunded",
 grand_total decimal(12,4) comment "Grand Total", created_at timestamp NOT NULL default CURRENT_TIMESTAMP comment "Created At", updated_at timestamp NOT NULL default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment "Updated At" )

SELECT * FROM sales.sales_order;

create table sales_order_item( item_id int(10) unsigned not null auto_increment primary key comment "Item Id", order_id int(10) unsigned not null default 0, parent_item_id int(10) unsigned, quote_item_id int(10) unsigned, store_id smallint(10) unsigned, `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Created At', `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Updated At',  product_id int(10) unsigned,   product_type varchar(255),    product_options text,    weight decimal(12,4) DEFAULT 0,    is_virtual smallint(5) unsigned,    sku varchar(255), `name` varchar(255),    description text,    applied_rule_ids text,    additional_data text,        is_qty_decimal smallint(5) unsigned default 0,       no_discount smallint(5) unsigned default 0,       qty_backordered decimal(12,4) default 0,  qty_canceled decimal(12,4) default 0,       qty_invoiced decimal(12,4) default 0,       qty_ordered decimal(12,4) default 0,       qty_refunded decimal(12,4) default 0,       qty_shipped decimal(12,4) default 0,       base_cost decimal(12,4) default 0,       price decimal(12,4) not null,       base_price decimal(12,4) not null,       original_price decimal(12,4) default 0,       base_original_price decimal(12,4) default 0,       tax_percent decimal(12,4) default 0,       tax_amount decimal(12,4) default 0,       foreign key(order_id) references sales_order(entity_id) )

SELECT * FROM sales.sales_order_item;

alter table sales_order_item add column subscription_info int(11);
alter table sales_order_item add column subscription_type text;
alter table sales_order_item add column no_of_days text;


alter table sales_order_item DROP foreign key sales_order_item_ibfk_1;

alter table sales_order_item add foreign key(order_id) references sales_order(entity_id);

insert into sales_order values(2,"Maharashtra","Middle","15","16","mumbai",80,120,200,50.0,50.0,40.0,54.0,1.00,152.5,72.00,62.0,120.0,215.5,112.5,5.0,2.2,4.00,20.0,70.0,75.5,74.4,20.0,71.0,51.0,81.8,92.0,17.0,1.0,8.0,71.0,71.7,8.9,42.0,71.0,34.0,
61.7,42.5,"2018-11-01 3:22:07","2018-11-02 6:22:07");



insert into sales_order_item values(11,2,22,34,1,default,"1996-1-02 6:22:07",50,"very nice","hope",40.0,3,"super","helmet","good","hello","world",2,5,10.0,23.4,23.0,12.3,
166.83,188.3,155.3,120.3,100.3,18.32,121.3,15.3,15.0,75,"simple","90");


update sales_order
set state="Goa"
where entity_id=2;

select * from sales_order_item;










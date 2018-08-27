use testdata;

select mc.mccsid as Mccsid, mc.name as Customer_name,mc.mobile as Mobile,ma.name as Apartment,
mb.name as Block,mf.name as Flat,mc.created as Start_Date,mc.referral_contact as Referral_Contact,
mw.created as Latest_Recharge,mw.total as Wallet_Total,from_unixtime(mw.created)
from mcart_customers as mc 
	inner join mc_apartment as ma on mc.acode=ma.id
    inner join mc_block as mb on mc.bcode=mb.id
    inner join mc_flat as mf on mc.fcode=mf.id
    inner join mcart_wallet as mw on mc.mccsid=mw.mccsid
    where mw.id in (select max(id) from mcart_wallet group by mccsid);
    

select * from mcart_wallet;

use testdata;

select * from mcart_wallet where id in 
(select max(id) from mcart_wallet group by mccsid) and mccsid=221;


select mccsid,sum(amount)
from mcart_wallet
group by mccsid;


select transaction_type,
case when transaction_type="Recharge" then "Purchases" else transaction_type end
from mcart_wallet;

select mc.id as subscription_ID,mc.mccsid as Mccssid,mc.mobile as Mobile,mc.name as Label,ms.product_id as Product_ID,ms.subscription_type as Subscription_type,ms.amount as Subscription_amount,
ms.quantity as Subscription_Quantity, ma.name as Apartment, mb.name as Block, mf.name as Flat, ms.start_date as Subscription_Start_Date,
ms.end_date as Subscription_End_Date,ms.stop_date as Subscription_Stop_Date,ms.resume_date as Subscription_Resume_Date,ms.created as Subscription_Created_Date,ms.status as Subscription_Status

from mcart_customers as mc 
inner join mcart_subscriptions as ms on mc.mccsid=ms.mccsid
inner join mc_apartment as ma on mc.acode= ma.id
inner join mc_block as mb on mc.bcode=mb.id
inner join mc_flat as mf on mc.fcode=mf.id;



select mc.name as Name,mc.mobile as Mobile, md.pid as Prduct_Id,
ms.subscription_type as Subscription_Type,
md.quantity as Product_quantity,
md.amount as Product_amount,
md.delivery_date as Product_Delivery_date,
mdis.mobile_number as Distributor_Mobile_Number,mdis.name as Distributor_Name,
mdb.mobile_number as Delivery_Boy_Mobile_Number,
mdb.name as Delivery_Boy_Name,
mc.acode as Mcart_apartment_ID,
ma.name as Apartment,
mc.bcode as Mcart_block_ID,
mb.name as block,
mc.fcode as Mcart_flat_ID,
mf.name as flat

from mc_distribution as md inner join mcart_customers as mc on md.mccsid=mc.mccsid
inner join mcart_subscriptions as ms on ms.mccsid=mc.mccsid
inner join mc_distributors as mdis on md.mcdid=mdis.id
inner join mc_delivery_boys as mdb on md.mcdbid=mdb.id
inner join mc_apartment as ma on mc.acode=ma.id
inner join mc_block as mb on mc.bcode=mb.id
inner join mc_flat as mf on mc.fcode=mf.id;





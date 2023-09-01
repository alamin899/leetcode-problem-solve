select Visits.customer_id,count(Visits.customer_id) as count_no_trans from Visits 
left join Transactions on Transactions.visit_id = Visits.visit_id
where Visits.visit_id NOT IN (select visit_id from Transactions)
GROUP BY Visits.customer_id;
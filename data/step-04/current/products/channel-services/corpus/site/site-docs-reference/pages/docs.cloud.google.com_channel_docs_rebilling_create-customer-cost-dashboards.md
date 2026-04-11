---
title: "Create customer cost dashboards using Looker Studio \_|\_ Channel Services\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/channel/docs/rebilling/create-customer-cost-dashboards
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/channel/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/channel/docs/rebilling/create-customer-cost-dashboards
  title: "Create customer cost dashboards using Looker Studio \_|\_ Channel Services\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Channel Services
Guides
Send feedback
Create customer cost dashboards using Looker Studio
Stay organized with collections
Save and categorize content based on your preferences.
You can combine Channel Services data export with Looker Studio to
create cost dashboards to share with your customer or channel partner
(distributor-only), populated with costs configured using repricing
configurations .
This page shows you how to repurpose the generic Billing usage and cost
insights
dashboard
with your customer's or channel partner's data, so you can share with them. You
may be already familiar with this dashboard if you have previously set up your
own cost dashboard following Visualize your costs with
Looker Studio .
Objectives
This tutorial shows you how to complete these tasks:
Set up your own copy of the Billing usage and cost insights dashboard
with reseller-configured costs.
Understand how to adapt the BigQuery view to a specific customer or
channel partner (distributor-only).
Costs
In this document, you use the following billable components of Google Cloud:
BigQuery : Depending on the size of the
BigQuery dataset, you might incur storage costs for the
export table in BigQuery and query costs for analysis. Also, if
your customer or channel partner views the dashboard, you might also incur
query costs.
BI Engine : If you choose to create
BI Engine reservations to improve the performance of your
dashboards, you incur costs for the reservation you create in
BI Engine.
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
For more information on BigQuery pricing, see
Pricing in the BigQuery
documentation.
For more information on BI Engine pricing, see the
Pricing page. BI Engine
reservations can improve the
performance of Looker Studio dashboards. This page does not include
instructions on creating BI Engine reservations. Learn about
reserving BI Engine
capacity .
Before you begin
Set up Channel Services data export to
BigQuery .
To use the dashboard, you must enable BigQuery exports for
Channel Services data.
After you enable the data export, it takes a few hours for the dataset to be
populated with Cloud Billing data. You might see some network
data transfer first, then some VM charges, then Pub/Sub usage, and
so on. After you've got data in your dataset, you can run queries against
it.
If your organization already has BigQuery exports set up, you
must have permissions to create BigQuery
views
in the project that hosts the datasets.
Optionally, if you want to create a new dataset for the
BigQuery views, you must have permissions to create
BigQuery
datasets .
Get the following information about your Google Cloud environment:
The project ID where your BigQuery export is hosted.
The dataset names for your export and for views for customer cost data.
Create BigQuery views of customer costs
Typically, costs shared with customers and channel partners contains only costs
for that customer or channel partner and does not contain your own cost. With
Channel Services data export, you can create BigQuery views to
reduce visibility of the data without using extra storage. Learn more about
BigQuery views .
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, enter the following statement:
CREATE OR REPLACE VIEW
` PROJECT_ID . DATASET_NAME . VIEW_NAME ` AS (
SELECT
* EXCEPT ( cost ,
credits ,
customer_name ,
customer_cost ,
customer_repricing_config_name ,
channel_partner_name ,
channel_partner_cost ,
channel_partner_repricing_config_name ,
customer_correlation_id ),
COALESCE ((
SELECT
SUM ( c . customer_amount )
FROM
UNNEST ( credits ) AS c ), 0 ) AS credits_sum_amount ,
COALESCE ((
SELECT
SUM ( c . customer_amount )
FROM
UNNEST ( credits ) AS c ), 0 ) + customer_cost AS net_cost ,
PARSE_DATE ( "%Y%m" , invoice . month ) AS Invoice_Month ,
DATE ( export_time ) AS date ,
FROM
` PROJECT_ID . DATASET_NAME . reseller_billing_detailed_export_v1 `
WHERE
DATE ( export_time ) > = DATE_SUB ( CURRENT_DATE (), INTERVAL 13 MONTH )
-- Adjust this to your use case.
AND billing_account_id = ' BILLING_SUBACCOUNT_ID ' )
Where the variables are as follows:
PROJECT_ID : The project ID that hosts your export
datasets.
DATASET_NAME : The BigQuery dataset
that contains your export. You may choose a different dataset for the
BigQuery view .
VIEW_NAME : The name of the
BigQuery view.
BILLING_SUBACCOUNT_ID : The billing subaccount ID
of the resold to restrict cost data to.
Click play_circle Run .
For more information about how to run queries, see Running interactive
queries .
Note: We recommend you create a separate view for each customer or channel
partner to minimize the chance of accidental cost leak. Likewise, the preceding
query preemptively excludes columns that could be sensitive.
Adjust the query to your use case
If you are building the dashboard for a channel partner, replace
customer_cost / customer_amount / customer_name with
channel_partner_cost / channel_partner_amount / channel_partner_name . There
are no CRM IDs for channel partners.
If you want to customer resource names to filter the view, change the last line
of the WHERE clause to filter on
customer_name / customer_correlation_id / channel_partner_name .
Convert non-USD cost amounts to USD
The preceding query does not perform currency conversion. To convert all costs
to USD using the information in the export, first, change the relevant part of
the query (involving credits_sum_amount , net_cost ) to:
COALESCE ((
SELECT
SUM ( c . customer_amount )
FROM
UNNEST ( credits ) AS c ), 0 ) / currency_conversion_rate AS credits_sum_amount ,
COALESCE ((
SELECT
SUM ( c . customer_amount )
FROM
UNNEST ( credits ) AS c ), 0 ) / currency_conversion_rate + customer_cost / currency_conversion_rate AS net_cost ,
Then, add currency to the EXCEPT list and override the currency column in
the query:
'USD' AS currency ,
Replace record count with usage amount
In the Overview tab of the dashboard, the table on the right contains record
count breakdown by SKU. If you find usage amount is more useful (for example,
for Google Workspace Partners this field represents seat counts), you can
customize this table to suit your need.
To change "Record Count" to usage amount:
Open the dashboard, and click Edit .
Hold the pointer over the table, then click Show properties ( edit ) to open the Setup tab.
In the Setup tab, under Metric , click Record Count .
In the list of fields, search select usage.amount .
Hold the pointer over SUM and click the ( edit ) icon.
In the "Name" box, type a name such as "Usage Amount" or "Seats".
Create and share a copy of the dashboard
To create a copy:
Open the Billing usage and cost insights
dashboard .
On the top right, click Menu ( more_vert ), then click
content_copy Make a copy .
Create a data source using the view you just created. Select the view as the
data source for the new report.
Click Copy Report .
You can now access the dashboard from your Looker Studio home
page .
To share the report with your customer:
Click Edit in the top right.
Change the name of the report. Make any changes as desired.
Click Share in the top right and share the report with your customer.
Learn about ways to share a
dashboard .
Clean up
If you don't want to keep the dashboard anymore, delete the view and
Looker Studio dashboard.
To delete the BigQuery view, follow the instructions for
deleting views .
To delete the Looker Studio dashboard, open
Looker Studio ,
locate the dashboard, and from the menu menu , click Remove .
If you created BI Engine reservations, you can delete unused
ones .
What's next
Understand the Channel Services data tables in
BigQuery .
Review example queries for your Channel Services data
export .
Create repricing configurations to configure cost for your
customer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

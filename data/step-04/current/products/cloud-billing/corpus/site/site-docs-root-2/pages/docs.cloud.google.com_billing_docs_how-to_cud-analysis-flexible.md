---
title: "Calculate savings with Compute flexible commitments \_|\_ Cloud Billing \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/cud-analysis-flexible
  title: "Calculate savings with Compute flexible commitments \_|\_ Cloud Billing\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
Guides
Send feedback
Calculate savings with Compute flexible commitments
Stay organized with collections
Save and categorize content based on your preferences.
Compute flexible committed use discounts (CUDs) are the discounts you receive
when you purchase a spend-based Compute flexible commitment.
Compute flexible CUDs are ideal for scenarios where you have predictable
Google Cloud spend needs that span usage beyond a single service.
Compute flexible CUDs apply to your spend across one or more of the following
services:
Compute Engine
Google Kubernetes Engine
Cloud Run
Spending on instance-based billing is also eligible for
Cloud Run. For the latest list of services and SKUs covered by
CUDs, see New SKUs added .
Note : This document discusses some spend-based committed use discounts (CUDs) that
automatically migrated to a new consumption model, which leverages discounts rather than credits.
The migration date is indicated by a notification in the Google Cloud console Billing Overview
page. For more information about the improvements, the affected CUDs, and any required actions on
your part, see Spend-based CUDs .
You can purchase a single flexible commitment for a 1-year or
3-year term to cover your eligible spend across all three services. When you
purchase a Compute flexible commitment, you commit to a minimum level of hourly
spend on eligible resources across one or more of these services.
You can view the CUDs page
or the CUD analysis report
for a summary of your commitment spending. To learn more about analyzing
spend-based commitments that are specific to a service, see
Analyzing the effectiveness of spend-based commitments .
Refer to the guides on this page to learn about the following tasks:
View your Compute flexible CUDs in your Cloud Billing BigQuery export
Calculate your overall flexible CUDs savings
Calculate your potential discount based on your current usage
Review Compute flexible commitments in the CUD analysis report
To view a summary of your Compute flexible commitments in the CUD analysis
report, complete the following steps.
In the Google Cloud console, go to the CUD analysis page.
Go to CUD analysis
At the prompt, choose the Cloud Billing account that you want to view.
In the Analyze drop-down, select Compute Flexible CUD .
Adjust the other filters, such as Regions and Time range , to your
preference.
The CUD analysis report shows the details of your Compute flexible CUDs for the
period specified in the filter, including summary cards, a stacked bar chart,
and a summary table of the commitment's totals.
To learn more about details included in the analysis
report, see Understand the CUD analysis report .
To purchase commitments from the CUD analysis page, select Purchase CUDs .
You can view and purchase
CUD recommendations
for the commitment by selecting
lightbulb
Recommendations .
If you have a non-USD account, use the CUD analysis report to view savings,
analysis chart details, commitment covered costs, and eligible costs not covered
in your local currency. Active commitments can be viewed in both USD and your
local currency.
Note: Compute Flexible CUD recommendations now cover your eligible usage
across all in-scope services. This includes Compute Engine,
Google Kubernetes Engine, Cloud Run, and Cloud Run Functions.
To understand the monthly cost of your active commitment, see
Analyze commitment costs and credits on your invoice or statement .
Understand your bill
Google Cloud uses consumption models to apply prices.
Usage covered by a commitment is billed at a discounted price (for example,
the Compute Flexible CUD - 1 Year consumption model price). For more
information, see
Commitment utilization criteria .
Any overutilization of the CUD exceeding the commitment is billed at the
default on-demand price.
The amount that you pay for the commitment itself is based on the equivalent
discounted spend, not the on-demand spend.
The following example scenarios explain how your commitment amount and your
usage relate to each other to produce your total cost savings.
Example of usage equaling the committed spend amount
This example uses a Cloud Billing account where the spend-based CUD
equals the usage commitment for the one-hour period.
You purchase a 1-year commitment for $36/hour of discounted spend.
You use exactly enough eligible resources that would have cost $50 at
on-demand prices.
Your usage is billed at the discounted rate, fully utilizing your
commitment.
Total cost = $36 (your commitment fee) .
In this example, your Compute flexible commitment covers all of your usage and
there's no overage. Your final cost for the hour is $36 with the
flexible CUD. Without the discount, the total cost for the hour
would've been $50.
Example of using more than the committed spend amount
This example uses a Cloud Billing account where the actual usage is
more than the spend-based commitment purchased. This results in an overage,
where you pay the on-demand rate for the amount beyond your commitment.
You purchase a 1-year commitment for $28.80/hour of discounted spend. This
covers $40 worth of on-demand usage.
You consume $50 of on-demand equivalent usage.
The first $40 of usage is covered by your commitment and costs you $28.80.
The remaining $10 of usage (overage) is billed at the on-demand price.
Total cost = $28.80 (commitment) + $10 (overage) = $38.80 .
In this example, your flexible commitment covers some of your
usage. You paid $10 in overage at the on-demand rates and received a 28%
discount on the $40 of on-demand equivalent costs covered by your commitment.
Your final cost for the hour is $38.80 with the CUD. Without the discount, the
total cost for the hour would've been $50.
Example of using less than the committed spend amount
This example uses a Cloud Billing account where the actual usage is
less than the committed spend amount. This results in an unused portion of
the commitment.
You purchase a 1-year commitment for $43.20/hour of discounted spend. This
covers $60 worth of on-demand usage.
You only consume $50 of on-demand equivalent usage.
You are still billed for your full commitment fee.
Total cost = $43.20 . You paid for a commitment you did not fully use.
In this example, your CUD covers all of your usage and there was no overage.
However, you committed to $60 of on-demand equivalent spend and only spent $50,
failing to use the last $10. Your final cost for the hour is $43.20 with the
CUD. Without the discount, the total cost for the hour would've been $50.
Understand your invoice or statement
You can view all three components of the spend-based CUD on
your invoice or statement.
Commitment fee - The charges for your purchased spend-based commitments
are tracked by SKU. The SKU description follows the pattern:
Commitment - dollar-based .
For the commitment fees for a Compute flexible CUD for a 1-year term, the
SKU description appears as Commitment - dollar based v1: for 1 year .
The SKU description of the commitment fee for a Compute flexible CUD for a
3-year term appears as Commitment - dollar based v1: for 3 years .
On-demand costs - Individual charges for your usage at the on-demand
equivalent cost are displayed by SKU . Look at the SKU description
column for each service. For example, N1 CORE running in Americas .
Credits - These offset the portion of your on-demand equivalent costs
that are covered by your CUD. Information about each
credit is displayed in the Credit type , Credit ID , and
Credit name columns. And the SKU description column displays
the service that received the credit.
For example, a credit for a Compute flexible CUD for the usage of
N1 CORE running in Americas appears as:
Credit type : COMMITTED_USAGE_DISCOUNT_DOLLAR_BASE
Credit name : Committed use discount - dollar based: GCE Commitments
SKU description : N1 CORE running in Americas
Analyze commitment costs and credits on your invoice or statement
To view and analyze detailed costs and credits for a given invoice or
statement, access the
Cost table report ,
a cost management tool that you can use to understand the costs that reconcile
to your invoice.
Open the cost table report
To view your CUDs details in the cost table, start by
configuring your report as follows:
Set the report
Table configuration Group by setting
to No grouping , to view a
flat table .
In the view_column
Column display options selector ,
ensure the Credit type and Credit name columns are visible.
To view the detailed commitment fees for Compute flexible
CUDs, in the SKU description column, look for
Commitment - dollar-based .
In the table, you can
sort on the SKU description column
and look for commitment SKUs. All CUDs SKU descriptions contain the key word
Commitment .
In the
SKUs filter ,
you can filter on just the commitment SKUs.
All CUDs SKUs contain the key word Commitment . The SKU descriptions for
Compute flexible commitments follows the pattern:
Commitment - dollar-based v1: GCE for [timeframe] .
In the
Services filter ,
you can filter for just the Service you want to view.
For example, to view commitment fees only for Compute Engine usage,
in the Services filter , select Compute Engine.
To view your usage costs together with commitment credits for your
Compute flexible CUDs, do the following:
In the table,
sort on the Credit type column
in ascending order.
In the Services filter ,
select Compute Engine to filter by the service that supports
Compute flexible commitments.
For rows that display a credit type of
COMMITTED_USAGE_DISCOUNT_DOLLAR_BASE , and a credit name of
Committed use discount - dollar based: GCE Commitments , in the SKU
description column, note the specific instance or service that earned
the discount. For example:
N1 Predefined Instance Ram running in Americas .
Sort on the
SKU description column
and look for the rows for the
specific instance or service that earned a discount. For example:
N1 Predefined Instance Ram running in Americas .
For a particular SKU, look for all the rows that show your usage costs
charged at the on-demand equivalent prices, and the rows that show the
CUD credit to offset the portion of your on-demand equivalent costs that
are covered by your CUD.
For example, in your cost table report, you might see the following charges
and credits for N1 Predefined Instance Ram running in Americas :
SKU description
Credit type
Credit name
Cost
N1 Predefined Instance Ram running in Americas
$10.25
N1 Predefined Instance Ram running in Americas
COMMITTED_USAGE_DISCOUNT_DOLLAR_BASE
Committed use discount - dollar based: GCE Commitments
$-7.25
N1 Predefined Instance Ram running in Americas
COMMITTED_USAGE_DISCOUNT_DOLLAR_BASE
Committed use discount - dollar based: GCE Commitments
$-3.00
Understand your Cloud Billing reports
Cloud Billing reports
let you view your Google Cloud usage costs and credits to discover and analyze
trends. The Cloud Billing reports provide a variety of
user-configurable options to view the costs that are important to you,
including options to
view your credits .
Open Cloud Billing Reports
View Compute flexible commitments
You can review your Compute flexible commitments in your Cloud Billing
report by setting
specific report filters :
In the Credits filter, select Committed use discounts (spend based) .
In the
SKUs filter ,
search for and select SKUs with GCE for 1 year or
GCE for 3 years .
View commitment components
To view the
individual components
that contain your CUDs,
group your costs by SKU .
The default report view (not grouped by SKU) doesn't break out the CUD
components but instead includes the net of the three components.
View commitment fees
To view only your ongoing commitment fees ,
limit the report results to the relevant commitment fee SKUs using the
SKUs filter .
For example, select the SKUs filter and type Commitment [YOUR COMMITMENT
TYPE] .
To understand how your commitment fees and credits are applied to your
Cloud Billing account and projects, see
Attribution of CUD fees and credits .
View your Compute flexible CUDs in your Cloud Billing BigQuery export
You can use Cloud Billing export to
BigQuery to
export detailed Google Cloud billing data.
Use the following query to view your Commitment fees in your
BigQuery export.
Standard SQL
SELECT
invoice . month AS invoice_month ,
SUM ( cost ) as commitment_fees
FROM PROJECT . DATASET . TABLE
WHERE sku . description LIKE "%GCE for 1 year%"
OR sku . description LIKE "%GCE for 3 year%"
GROUP BY 1
;
To view your committed use Credits , use the following sample query:
Standard SQL
SELECT
invoice . month AS invoice_month ,
SUM ( credits . amount ) as CUD_credits ,
FROM PROJECT . DATASET . TABLE
LEFT JOIN UNNEST ( credits ) AS credits
WHERE credits . full_name LIKE 'Committed use discount - dollar based: GCE Commitments%'
GROUP BY 1
;
To view both your credits drawn down by all-usage SKUs and commitment fees, use
the following sample query:
Standard SQL
SELECT * FROM project . dataset . gcp_billing_export_v1_XXXXXX_XXXXXX_XXXXXX
LEFT JOIN UNNEST ( credits ) AS credits
WHERE credits . full_name LIKE 'Committed use discount - dollar based: GCE Commitments%'
OR sku . description LIKE "%GCE for 1 year%"
OR sku . description LIKE "%GCE for 3 year%" `
;
Calculate your overall flexible CUDs savings
The total effective savings from flexible CUDs vary depending on
the resources used in a given month and the on-demand pricing of those
resources. Because flexible CUDs savings are dependent on
underlying SKUs, you might see discount rates that differ from advertised list
discounts. It's important to calculate your total effective
flexible CUDs savings so you can understand the effectiveness
of your overall discount.
To calculate your total effective flexible CUDs savings, use the
following components:
On-Demand Rate - The percentage rate you pay for on-demand VM
usage. This is usually 1 (for 100%), but it could be lower if other
on-demand VM savings are in effect in your account.
Flexible CUDs SKU Price - The customized price you pay for your
flexible CUDs, available in the
Pricing page in the Google Cloud console .
The SKU description begins with Commitment - dollar based .
A commitment fee for a 1-year flexible commitment appears as
Commitment - dollar based v1: GCE for 1 year .
A commitment fee for a 3-year flexible commitment appears as
Commitment - dollar based v1: GCE for 3 years .
Flexible CUDs Discount Percentage - The incremental savings that
flexible CUDs provide over standard on-demand VM usage. This
is usually 28% for 1-year commitments and 46% for 3-year commitments, but
might vary based on other savings in effect on your account. Your
Google Cloud account team might provide this to you, or you can use your
customized flexible CUDs SKU Price to calculate it.
Total Effective Flexible CUDs Savings - Your effective savings with
flexible CUDs with your On-Demand Rate.
If you know your incremental flexible CUDs discount, input that
value into this equation:
Total Effective Flexible CUDs Savings = 1 - (On-Demand Rate - (On-Demand
Rate * Flexible CUDs Discount Percentage))
The result varies between 1-year commitments and 3-year commitments, and may
vary for different on-demand VMs based on your on-demand rate.
If you don't know this incremental flexible CUD percentage, you
can calculate it by using the Flexible CUDs SKU Price in the
Pricing page in the Google Cloud console :
Flexible CUDs Discount Percentage = 1 - (Flexible CUDs SKU Price * 100)
If you have other savings in effect for on-demand VMs, your
Flexible CUDs Discount Percentage might be lower than the
standard 28% for 1-year commitments and 46% for 3-year commitments.
For information about viewing and managing your purchased commitments, see:
View and download the cost details of your invoice or statement
Get a Cloud Billing document such as an invoice, statement, or receipt
View your cost and payment history
Example of calculating flexible CUDs total savings
This example shows how to calculate your total savings from a 3-year
flexible commitment.
In this example, you have a Flexible CUDs SKU Price of $0.0054 and an
On-Demand Rate of 100%. To understand the Total Effective Flexible CUDs
Savings , multiply your Flexible CUDs SKU Price of $0.0054 by 100 for a
product of 0.54. Then, subtract 0.54 from 1 to determine your Flexible CUDs
Discount Percentage , which is 0.46 or 46% in this example. Finally, input your
On-Demand Rate and Flex CUDs Discount Percentage into the Total
Effective Flexible CUDs Savings formula:
Total Effective Flexible CUDs Savings = 1 - (On-Demand Rate - (On-Demand Rate*
Flexible CUDs Discount Percentage))
The entire calculation for this example is:
Multiply your Flexible CUDs SKU Price of $0.0054 by 100 for a product
of 0.54.
Subtract 0.54 from 1 to determine your Flexible CUDs Discount
Percentage as 0.46 or 46%.
Input your On-Demand Rate into the formula to calculate
Total Effective Flexible CUDs Savings .
**Total Effective Flexible CUDs Savings** = 1 - (1 - (1 * .46))
Your Total Effective Flexible CUDs Savings are .46 or 46%.
Calculate your potential discount based on your current usage
After you set up your Cloud Billing export ,
you can analyze your past usage and calculate how that usage would've been
discounted by flexible CUDs. The calculation is determined by the
following parameters:
Variable/Field name
Description
LOOK_BACK_WINDOW
The retrospective window for the analysis (such as 30 days, 90
days).
credits_from_existing_cuds
Hourly credits received from active commitments already
purchased.
credits_from_existing_suds
Hourly credits received automatically from
sustained use discounts (SUDs) .
cost_eligible_for_additional_flex_cuds_considering_cud_credits
Hourly eligible undiscounted usage, excluding CUDs credits only.
cost_eligible_for_additional_flex_cuds_considering_cud_and_sud_credits
Hourly eligible undiscounted usage, excluding CUDs and SUDs
credits.
min_cost_eligible_for_additional_flex_cuds_considering_cud_credits
Minimum undiscounted usage, excluding CUDs credits only.
min_cost_eligible_for_additional_flex_cuds_considering_cud_and_sud_credits
Minimum undiscounted usage, excluding CUDs and SUDs credits; the most
conservative estimate based on the look_back_window.
Use the following query to understand how an hourly, undiscounted portion of
your usage would be affected by a CUD.
– IMPORTANT :
– YOU MUST REPLACE ` PROJECT . DATASET . TABLE ` -- BILLING_BQ_EXPORT_TABLE_NAME
– WITH THE BILLING BigQuery TABLE NAME IN THE QUERIES BELOW .
DECLARE LOOK_BACK_WINDOW INT64 DEFAULT 30 ;
-- Hourly data for the window.
WITH
base AS (
SELECT
* ,
IF
( total_cost >= credits_from_existing_cuds ,
( total_cost - credits_from_existing_cuds ),
0 ) AS cost_eligible_for_additional_flex_cuds_considering_cud_credits ,
IF
( total_cost >= ( credits_from_existing_cuds + credits_from_existing_suds ),
( total_cost - ( credits_from_existing_cuds + credits_from_existing_suds )),
0 ) AS cost_eligible_for_additional_flex_cuds_considering_cud_and_sud_credits
FROM (
SELECT
usage_start_time ,
SUM ( cost ) AS total_cost ,
( SUM ((
SELECT
SUM ( c . amount )
FROM
UNNEST ( credits ) AS c
WHERE
c . type IN ( "COMMITTED_USAGE_DISCOUNT" ,
"COMMITTED_USAGE_DISCOUNT_DOLLAR_BASE" ))) * - 1 ) AS credits_from_existing_cuds ,
( SUM ((
SELECT
SUM ( c . amount )
FROM
UNNEST ( credits ) AS c
WHERE
c . type IN ( "SUSTAINED_USAGE_DISCOUNT" ))) * - 1 ) AS credits_from_existing_suds ,
FROM
` PROJECT . DATASET . TABLE ` -- BILLING_BQ_EXPORT_TABLE_NAME
WHERE
1 = 1
AND DATE ( _PARTITIONTIME ) >= DATE_ADD ( CURRENT_DATE (), INTERVAL - LOOK_BACK_WINDOW DAY )
AND usage_start_time >= TIMESTAMP ( DATE_ADD ( CURRENT_DATE (), INTERVAL - LOOK_BACK_WINDOW DAY ))
AND usage_start_time TIMESTAMP ( CURRENT_DATE ())
AND service . description = "Compute Engine"
AND ( 1 = 0
OR sku . description LIKE 'C2D AMD Instance Core running in%'
OR sku . description LIKE 'C2D AMD Instance Ram running in%'
OR sku . description LIKE 'C2D AMD Sole Tenancy Instance Core running in%'
OR sku . description LIKE 'C2D AMD Sole Tenancy Instance RAM running in%'
OR sku . description LIKE 'C2D AMD Sole Tenancy Instance Ram running in%'
OR sku . description LIKE 'Compute optimized Core running in%'
OR sku . description LIKE 'Compute optimized Instance Core running in%'
OR sku . description LIKE 'Compute optimized Instance Ram running in%'
OR sku . description LIKE 'Compute optimized Ram running in%'
OR sku . description LIKE 'Compute-optimized Sole Tenancy Instance Core running in%'
OR sku . description LIKE 'Compute-optimized Sole Tenancy Instance RAM running in%'
OR sku . description LIKE 'Compute-optimized Sole Tenancy Instance Ram running in%'
OR sku . description LIKE 'Custom E2 Instance Core running in%'
OR sku . description LIKE 'Custom E2 Instance Ram running in%'
OR sku . description LIKE 'Custom Extended Instance Ram running in%'
OR sku . description LIKE 'Custom Instance Core running in%'
OR sku . description LIKE 'Custom Instance Ram running in%'
OR sku . description LIKE 'E2 Instance Core running in%'
OR sku . description LIKE 'E2 Instance Ram running in%'
OR sku . description LIKE 'N1 Predefined Instance Core running in%'
OR sku . description LIKE 'N1 Predefined Instance Ram running in%'
OR sku . description LIKE 'N2 Custom Extended Instance Ram running in%'
OR sku . description LIKE 'N2 Custom Instance Core running in%'
OR sku . description LIKE 'N2 Custom Instance Ram running in%'
OR sku . description LIKE 'N2 Instance Core running in%'
OR sku . description LIKE 'N2 Instance Ram running in%'
OR sku . description LIKE 'N2 Sole Tenancy Instance Core running in%'
OR sku . description LIKE 'N2 Sole Tenancy Instance RAM running in%'
OR sku . description LIKE 'N2 Sole Tenancy Instance Ram running in%'
OR sku . description LIKE 'N2D AMD Custom Extended Instance Ram running in%'
OR sku . description LIKE 'N2D AMD Custom Extended Ram running in%'
OR sku . description LIKE 'N2D AMD Custom Instance Core running in%'
OR sku . description LIKE 'N2D AMD Custom Instance Ram running in%'
OR sku . description LIKE 'N2D AMD Instance Core running in%'
OR sku . description LIKE 'N2D AMD Instance Ram running in%'
OR sku . description LIKE 'N2D AMD Sole Tenancy Instance Core running in%'
OR sku . description LIKE 'N2D AMD Sole Tenancy Instance RAM running in%'
OR sku . description LIKE 'N2D AMD Sole Tenancy Instance Ram running in%'
OR sku . description LIKE 'Sole Tenancy Instance Core running in%'
OR sku . description LIKE 'Sole Tenancy Instance RAM running in%'
OR sku . description LIKE 'Sole Tenancy Instance Ram running in%' )
GROUP BY
usage_start_time ))
SELECT
*
FROM
base
ORDER BY
usage_start_time DESC ;
-- Minimum flex eligible on demand spend in the window.
WITH
base AS (
SELECT
* ,
IF
( total_cost >= credits_from_existing_cuds ,
( total_cost - credits_from_existing_cuds ),
0 ) AS cost_eligible_for_additional_flex_cuds_considering_cud_credits ,
IF
( total_cost >= ( credits_from_existing_cuds + credits_from_existing_suds ),
( total_cost - ( credits_from_existing_cuds + credits_from_existing_suds )),
0 ) AS cost_eligible_for_additional_flex_cuds_considering_cud_and_sud_credits
FROM (
SELECT
usage_start_time ,
SUM ( cost ) AS total_cost ,
( SUM ((
SELECT
SUM ( c . amount )
FROM
UNNEST ( credits ) AS c
WHERE
c . type IN ( "COMMITTED_USAGE_DISCOUNT" ,
"COMMITTED_USAGE_DISCOUNT_DOLLAR_BASE" ))) * - 1 ) AS credits_from_existing_cuds ,
( SUM ((
SELECT
SUM ( c . amount )
FROM
UNNEST ( credits ) AS c
WHERE
c . type IN ( "SUSTAINED_USAGE_DISCOUNT" ))) * - 1 ) AS credits_from_existing_suds ,
FROM
` PROJECT . DATASET . TABLE ` -- BILLING_BQ_EXPORT_TABLE_NAME
WHERE
1 = 1
AND DATE ( _PARTITIONTIME ) >= DATE_ADD ( CURRENT_DATE (), INTERVAL - LOOK_BACK_WINDOW DAY )
AND usage_start_time >= TIMESTAMP ( DATE_ADD ( CURRENT_DATE (), INTERVAL - LOOK_BACK_WINDOW DAY ))
AND usage_start_time TIMESTAMP ( CURRENT_DATE ())
AND service . description = "Compute Engine"
AND ( 1 = 0
OR sku . description LIKE 'C2D AMD Instance Core running in%'
OR sku . description LIKE 'C2D AMD Instance Ram running in%'
OR sku . description LIKE 'C2D AMD Sole Tenancy Instance Core running in%'
OR sku . description LIKE 'C2D AMD Sole Tenancy Instance RAM running in%'
OR sku . description LIKE 'C2D AMD Sole Tenancy Instance Ram running in%'
OR sku . description LIKE 'Compute optimized Core running in%'
OR sku . description LIKE 'Compute optimized Instance Core running in%'
OR sku . description LIKE 'Compute optimized Instance Ram running in%'
OR sku . description LIKE 'Compute optimized Ram running in%'
OR sku . description LIKE 'Compute-optimized Sole Tenancy Instance Core running in%'
OR sku . description LIKE 'Compute-optimized Sole Tenancy Instance RAM running in%'
OR sku . description LIKE 'Compute-optimized Sole Tenancy Instance Ram running in%'
OR sku . description LIKE 'Custom E2 Instance Core running in%'
OR sku . description LIKE 'Custom E2 Instance Ram running in%'
OR sku . description LIKE 'Custom Extended Instance Ram running in%'
OR sku . description LIKE 'Custom Instance Core running in%'
OR sku . description LIKE 'Custom Instance Ram running in%'
OR sku . description LIKE 'E2 Instance Core running in%'
OR sku . description LIKE 'E2 Instance Ram running in%'
OR sku . description LIKE 'N1 Predefined Instance Core running in%'
OR sku . description LIKE 'N1 Predefined Instance Ram running in%'
OR sku . description LIKE 'N2 Custom Extended Instance Ram running in%'
OR sku . description LIKE 'N2 Custom Instance Core running in%'
OR sku . description LIKE 'N2 Custom Instance Ram running in%'
OR sku . description LIKE 'N2 Instance Core running in%'
OR sku . description LIKE 'N2 Instance Ram running in%'
OR sku . description LIKE 'N2 Sole Tenancy Instance Core running in%'
OR sku . description LIKE 'N2 Sole Tenancy Instance RAM running in%'
OR sku . description LIKE 'N2 Sole Tenancy Instance Ram running in%'
OR sku . description LIKE 'N2D AMD Custom Extended Instance Ram running in%'
OR sku . description LIKE 'N2D AMD Custom Extended Ram running in%'
OR sku . description LIKE 'N2D AMD Custom Instance Core running in%'
OR sku . description LIKE 'N2D AMD Custom Instance Ram running in%'
OR sku . description LIKE 'N2D AMD Instance Core running in%'
OR sku . description LIKE 'N2D AMD Instance Ram running in%'
OR sku . description LIKE 'N2D AMD Sole Tenancy Instance Core running in%'
OR sku . description LIKE 'N2D AMD Sole Tenancy Instance RAM running in%'
OR sku . description LIKE 'N2D AMD Sole Tenancy Instance Ram running in%'
OR sku . description LIKE 'Sole Tenancy Instance Core running in%'
OR sku . description LIKE 'Sole Tenancy Instance RAM running in%'
OR sku . description LIKE 'Sole Tenancy Instance Ram running in%' )
GROUP BY
usage_start_time ))
SELECT
MIN ( cost_eligible_for_additional_flex_cuds_considering_cud_credits ) AS
min_cost_eligible_for_additional_flex_cuds_considering_cud_credits ,
MIN ( cost_eligible_for_additional_flex_cuds_considering_cud_and_sud_credits ) AS
min_cost_eligible_for_additional_flex_cuds_considering_cud_and_sud_credits FROM
base ;
Support
If you have questions regarding CUDs on your bill, contact
Cloud Billing Support
for help.
Related topics
Learn more about CUDs
Get recommendations for committed use discounts
View and download the cost details of your invoice or statement
Understand your savings with cost breakdown reports
Get a Cloud Billing document such as an invoice, statement, or receipt
View your cost and payment history
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

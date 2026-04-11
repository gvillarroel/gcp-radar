---
title: "Create and manage repricing configurations \_|\_ Channel Services \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/channel/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations
  title: "Create and manage repricing configurations \_|\_ Channel Services \_|\_\
    \ Google Cloud Documentation"
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
Create and manage repricing configurations
Stay organized with collections
Save and categorize content based on your preferences.
Note: Repricing is only available to Google Cloud partners. Adjustments
made in repricing configuration won't change the costs shown to customers in
their Google Cloud console. To share a customer's costs with them, consider
creating a Looker Studio dashboard .
This document explains repricing configurations and how to use them with your
partner accounts.
You can use custom repricing configurations to markup or discount direct
customer costs, list prices, and specific SKU groups by a set percentage. These
adjustments are reflected in the final billing cost for a customer or channel
partner and are included as part of BigQuery data
exports .
The Repricing section of the Partner Sales Console Customers
page
shows active and upcoming repricing configurations for your customers'
Google Cloud subscriptions.
Rebilling Basis
Rebilling Basis is the relative price point against which repricing rule
multipliers (and conditional overrides) are applied. The RESELLER_MARGIN credit
is always hidden from end customers and channel partners. Other credits may be
repriced or completely hidden based on the Rebilling Basis selection.
We support these possible values for Rebilling Basis:
Direct Customer Cost - Uses the actual cost and all discounts, except
Reseller Margin.
List Price - Uses the list_price of each sku and hides all
credits(including CUDs) from end customer costs.
For example, consider a Repricing Rule of List Price -17% with an override for
BigQuery: Direct Customer Cost +20% . The resulting data in Rebilling BQ Export
looks like the following:
sku
list_price
cost
customer_cost
credit.type
credit.amount
credit.customer_amount
Partner Cost (cost + SUM(credit.amount))
End Customer Cost (customer_cost + SUM(credit.customer_amount))
Compute
120
100
99.6 (120*.83)
RESELLER_MARGIN
COMMITTED_USAGE_DISCOUNT
-10
-10
0 (margin hidden)
0 (hidden due to list price)
80
99.6
BigQuery
120
100
120 (100*1.2)
RESELLER_MARGIN
COMMITTED_USAGE_DISCOUNT
-10
-10
0 (margin hidden)
-12 (DCC+20%)
80
108
Note: If an entitlement does not have any repricing configuration specified,
then it defaults to Direct Customer Cost + 0% , which implies no
modifications to the cost (except removal of RESELLER_MARGIN).
View repricing configurations
To view more details about the current repricing configurations for a customer,
navigate to the Customers
page of the
Partner Sales Console and select the customer's Name to view their
details. Click Repricing then select Manage repricing to view the
current configurations for each entitlement.
The repricing management pane has a table with the following columns:
Active on : The date an upcoming configuration becomes active, the date
the current configuration became active, and the date when past
configurations were active.
Base rule : The value affected by the configuration, either Direct
customer cost or List price .
Overrides : Lists any overrides applied to a SKU group to activate as
part of the configuration.
Export SKU groups
If you want a general overview of the SKU groups available per platform across
all of your customers, you can export CSV file from the Repricing section of the
Customers page. While on the Manage repricing page, click View SKU
Groups , search for the required SKU group and then click
download next to the platform you want to
export. The exported CSV file contains the SKU Name, SKU ID, Service Name, and
Service ID for each public SKU available and private SKU used by your customers.
You can also export SKU groups using the API, with the List SKU
groups and List
billable SKUs in a SKU
group
endpoints.
Create repricing configurations
To create a new repricing configuration, follow these steps:
In the Partner Sales Console, open the Customers page
Select Repricing .
Click Manage repricing to open the configurations pane.
Click Add repricing configuration .
Select the start date for your new configuration.
Set the configuration's value:
Select List price or Direct customer cost as a base rule.
Select - for a discount, or + for a markup.
Select the percentage (up to 100% for discounts and 1000% for markups)
to apply to the final cost.
Click Save to finish.
This new configuration affects all of your available SKUs. If you want to set
discounts on a per-SKU basis, you can add overrides to your configuration.
Add overrides to a custom rule
You can use overrides to set repricing configurations for specific SKU groups
( Learn more about SKU Groups ). These
overrides go live with the main configuration when that configuration becomes
active. These overrides can be re-ordered to prioritize rules for SKUs that may
appear in multiple groups. These override rules are evaluated top-down approach
( Examples ). You can
add overrides when creating a new rule or when modifying an existing rule.
Note: SKUs could be in multiple SKU groups. Overlapping configurations on the
same sku on lower ranked sku group will be ignored. See
examples to
understand more.
To set an override while viewing a configuration's details, follow these steps:
Click Add override rule .
Select a SKU group to apply the override to.
Set the override's value:
Select List price or Direct customer cost as a base rule.
Select - for a discount, or + for a markup.
Select the percentage (up to 100% for discounts and 1000% for markups)
to apply to the final cost.
Click Save to finish.
You can use drag_indicator or expand_more / expand_less
to change the ordering of overrides. You can only add 10 override rules for
any given repricing configuration.
Modify and update configurations
You can update active configurations for a customer or channel partner up to 10
times for any given invoice month. Creating too many mid-month updates might
cause unpredictable billing results for the ongoing month for customers, so we
recommend updating configurations mid-month only when absolutely necessary.
Updates to pricing configurations might take up to 24 hours to take effect.
Note: If you edit an active configuration in the middle of an invoice month then
you might have to manually adjust the invoices for that month, to account for
different billing rules applied at different times in the month.
To update a configuration from the Manage repricing pane, follow these
steps:
Click edit next to the rule you want to
modify.
A dialog is displayed showing the rule you're about to edit along with
important notes about that configuration. Click Continue .
Make any changes to your base rule, edit existing overrides, add new
overrides, or remove existing overrides.
Click Save to finish your updates.
Delete configurations
You can only remove configurations before their selected invoice month begins.
To remove a custom rule, click delete next
to the rule you want to remove.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

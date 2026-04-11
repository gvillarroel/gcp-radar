---
title: "Understand your savings with cost breakdown reports \_|\_ Cloud Billing \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/cost-breakdown
  title: "Understand your savings with cost breakdown reports \_|\_ Cloud Billing\
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
Understand your savings with cost breakdown reports
Stay organized with collections
Save and categorize content based on your preferences.
Note : This document discusses some spend-based committed use discounts (CUDs) that
automatically migrate to a new consumption model, which leverages discounts rather than credits.
The migration date is indicated by a notification in the Google Cloud console Billing Overview
page. For more information about the improvements, the affected CUDs, and any required actions on
your part, see Spend-based CUDs .
Overview
For the selected date range and filters, the Cost breakdown report shows
your base usage cost (calculated from
on-demand prices )
and how discounts, credits, adjustments, and taxes affect this cost to arrive
at your total.
The waterfall chart
displays Charges in orange, Credits in green, and Subtotals and
Totals in blue.
Permissions required to access the cost breakdown report
To view the cost breakdown report for your Cloud Billing account,
you need a role that includes the following
permission
on your Cloud Billing account:
billing.accounts.getSpendingInformation
to view costs and usage for a billing account.
To gain this permission using a predefined role, ask your administrator to
grant you one of the following
Cloud Billing IAM
roles on your Cloud Billing account:
Billing Account Administrator
Billing Account Costs Manager
Billing Account Viewer
For more information about billing permissions, see:
Overview of Cloud Billing access control
Create custom roles for Cloud Billing
Understanding predefined IAM roles for Cloud Billing
Access the report
To view the Cost breakdown report for your Cloud Billing account:
In the Google Cloud console, go to your Cloud Billing account.
Go to your Cloud Billing account
At the prompt, choose the Cloud Billing account
for which you'd like to view reports. The Billing Overview page opens for
the selected billing account.
On the billing account Overview page, the Savings calculation includes
all eligible discounts and credits. The View details link takes you
to the Cost breakdown report:
Alternatively, in the Cost management section of the Billing navigation menu ,
select Cost breakdown .
How to read the cost breakdown chart
From left to right, the chart displays bars for charges, then credits, then
subtotal, then any invoice-level charges, and then total, aggregated for all
costs incurred during the selected
time range .
The first bar on the chart is the
gross cost of your usage ,
which represents the amount that you would've paid during the
selected time range if you were charged only at the
on-demand rate
for your Google Cloud usage. Then, the report shows you how much you
saved, broken out by
savings types
(for example, committed use discounts and sustained use discounts). Finally,
if your
time range is configured for invoice month ,
the report shows your
invoice-level charges
such as tax and adjustments (if any) applied for the selected invoice months.
If your Cloud Billing account is associated with a custom pricing
contract , the
on-demand rate
used to calculate the
gross cost of your usage
depends on the
time range
of the costs you're analyzing:
For costs incurred before May 1, 2021, your on-demand rate is based
on your contract prices, and includes the savings you earned compared
to list prices.
For costs incurred after May 1, 2021, your on-demand rate is based on
the publicly available list prices. The savings you earn with your custom
contract prices (compared to list prices) is displayed on the report as a
negotiated savings
credit.
Below the chart is a summary table of the information in the report. The summary
table includes a row for each bar on the chart, displays the effective
% rates of costs and savings, and provides links to open related report pages
where you can view the details behind specific cost breakdown report values.
Examples
For a Cloud Billing account associated with
standard list prices (and for any billing account viewing costs
incurred prior to May 1, 2021), the cost breakdown report displays a
Usage cost column, along with any applicable credits and
invoice-level charges:
Figure 1 : Example of a cost breakdown report, showing
the base usage cost and how that cost was affected by any credits,
adjustments, and taxes. Click the image to view an enlarged version.
For a Cloud Billing account associated with a
custom pricing contract , when viewing the report using a time
range that starts May 1, 2021 , or later, the cost breakdown report
displays a **Usage cost** column, and a
Negotiated savings column, as well as any other applicable
credits and invoice-level charges:
Figure 2 : Example of the cost breakdown report for a
Cloud Billing account associated with a custom pricing
contract. Click the image to view an enlarged version.
About on-demand rates
Each Cloud Billing account is associated with a price list , which provides
the prices per SKU for your usage of Google Cloud Platform services,
Google Maps Platform, and Google Workspace.
If your Cloud Billing account is using standard list prices,
your on-demand rates are based on the publicly available price list.
If your Cloud Billing account is associated with a custom
pricing contract, your on-demand rates are based on your custom price list.
On the cost breakdown report, when viewing the report using a time range
that starts before May 1, 2021, the
gross cost of your usage
is calculated using your custom contract prices.
When viewing the report using a time range that starts after May 1,
2021, the gross cost of your usage is calculated using
list prices .
To view your prices per SKU for your Cloud Billing account, see the
Pricing table report or
export your Cloud Billing prices to BigQuery .
If you have questions regarding pricing, contact your Account Representative
for more details.
Configure your report settings
You can select the costs you want to analyze and configure the display of your
cost breakdown report using the Time range and other filters .
As you configure the report, your page URL updates to include your selections;
use
link Share
to copy the URL to share the report. Click the
get_app
Download CSV
selector located above the summary table to download the filtered cost
breakdown data.
Figure 3 : Example of the cost breakdown report for a
Cloud Billing emphasizing the available report settings and
filters, including time range, projects, services, and SKUs.
Time range
Set the range of time for the usage costs you want to analyze. You can select
between Usage date or Invoice month . By default, when you first access
the report, the Time range is set to Invoice month , with the most recent
complete month selected.
Usage date returns actual usage and cost data incurred during the date
range selected. When you select Usage date , you can choose a preset or
custom time range for charting your cost data (available back to January
2017).
When you set a usage date time range, the cost breakdown report doesn't
display
invoice-level charges ,
such as tax, contractual credits, surcharges, or adjustments.
Invoice month returns usage and charges on the invoices issued for the
months selected. When you select Invoice month , you can set a range based
on complete months (available back to May 2019).
When you set an invoice month time range, the cost breakdown report
includes
invoice-level charges ,
such as tax, contractual credits, surcharges, or adjustments.
If your Cloud Billing account is associated with a custom pricing
contract , the
on-demand rate
used to calculate the
gross cost of your usage
depends on the
Time range
of the costs you are analyzing:
When viewing the report using a time range that starts before May 1,
2021, the
gross cost of your usage
is calculated using your custom contract prices, and includes the savings you
earned compared to list prices. On the report, these charges are displayed
in the Usage cost
bar.
When viewing the report using a time range that starts after May 1,
2021, the gross cost of your usage is calculated using publicly available
list prices .
On the report, these charges are displayed
in the Usage cost
bar. Additionally, the savings you earn with your custom contract prices
(compared to list prices) is displayed on the report as a
Negotiated savings
credit.
Filters
The Cost breakdown report can show all charges and credits for the entire
Cloud Billing account, or you can filter it to focus on a specific set
of resources. By default, when you first access the report, the filters are
configured to include all values. As you set your filters, the amounts
displayed in the report adjust to represent the aggregated charges
and credits based on the filters selected.
Subaccounts : If you're viewing a primary billing account with
subaccounts ,
you can select all subaccounts (default) or select a subset of subaccounts
by clicking them in the list.
Folders & Organizations : Folders and organizations are components of a
project hierarchy ,
the resource hierarchy mapping of a project. If the Time range is
configured to start on or after January 1, 2022 , you can select all
folders and organizations (default) that are associated with the
projects that are linked to the Cloud Billing account ,
or select a subset of folders and organizations.
The values in the selector are listed in alphabetical order by resource
name. To determine if a value is an organization or a folder, look at the
ID number following each name .
ID numbers are prefaced with folders/ or organizations/ to indicate the
type of resource.
For the Cloud Billing account you're viewing, if none of the
linked projects
are associated with any folders or organizations, then this filter option
isn't displayed. To learn more about organizations, folders, and project
hierarchy, see
Billing reports: Analyzing your costs by project hierarchy .
Projects : You can select all Google Cloud projects under the
Cloud Billing account (default) or select a subset of projects
by clicking them in the list.
Services : You can select all services (default) or select a subset of
services by clicking them in the list.
SKUs : You can select all SKUs (default) or select a subset of SKUs by
clicking them in the list. To learn more about SKUs, see the
pricing table report .
Applications : You can select all
App Hub
applications (default) or select a subset of applications by clicking
them in the list.
App Hub applications might incur usage and costs in more than
one billing account and associated projects. Cost data filtered by
application might be based on partial data, limited to projects and costs
for the Cloud Billing account you are actively viewing.
To filter on costs that are not part of an App Hub application,
select [Charges not specific to an
application] .
Locations : By default, all locations are enabled. By clicking the
location tiles, you can filter on a subset of locations by geography
(such as Europe), multi-region (such as Global), or region (such as
us-east1). Specifically, the report is filtered by the regions and
multi-regions selected.
Use the tiles in geography to quickly select
(or deselect) all regions and multi-regions in that geography. Multi-regions
tiles are marked with an asterisk (for example, us* ).
Learn more about
geography and regions .
Labels : Labels are key and value pairs you attach to resource usage (for
example, Compute Engine or Cloud Storage). To filter usage by label:
Expand the Labels section.
Select the label Key .
Select the Value under that key you want to filter on (the default
is all values under the selected key).
To add another label with a different key, click + Add Label , and
then select the key and values for the label filter.
To remove a label filter, click
delete (delete)
for each label key-value pair that you want to remove.
If you want to view costs for Google Kubernetes Engine, you can filter your
resources using the following label keys:
goog-fleet-project : Filter cluster resources by fleet host
project ,
if the cluster is registered to a fleet.
goog-k8s-cluster-location : Filter GKE resources by
location.
goog-k8s-cluster-name : Filter GKE resources
by cluster.
goog-k8s-node-pool-name : Filter cluster resources by node pool.
To filter GKE resources using the following label keys, you
must enable cost allocation for your GKE
clusters :
k8s-namespace : Filter GKE resources
by namespace.
k8s-namespace-labels : Filter GKE resources by fleet
namespace
label .
When filtering by label keys, you can't select labels applied
to a project. You can select other user-created labels that you set up and
applied to Google Cloud services. For more information about labels,
see
common uses of labels
and
creating and managing resource labels .
Chart unit
The chart unit setting is located above the bar chart and controls the
value unit for the amounts displayed in the bar chart. By default, when you
first access the report, the chart unit is configured to display the values in
currency. You can toggle the chart units between
currency
($) and percent (%) by selecting the preferred option.
The $ icon represents the currency setting for the chart unit
option. The actual type of currency that's used to calculate your costs
matches the
currency of your Cloud Billing account .
When viewing the values in the bar chart using currency , the
amounts of charges, credits, and subtotals and totals are prefaced with the
symbol for the currency of your Cloud Billing account (for example,
USD: $, GBP: £, EUR: €, or JPY: ¥).
Understand the values in the chart and report summary
The cost breakdown chart shows the following, if applicable to your
Cloud Billing account. If you don't incur these types of
charges or credits, you won't see these items on your report.
Charges
Usage cost : The monthly cost of your cloud usage calculated
using the
on-demand rates
in effect for your Cloud Billing account.
CUDs fees in Usage costs :
For previously purchased Legacy spend-based CUDs and
Resource-based CUDs , the Usage cost amount includes the fees for any
committed use discounts
(CUDs) you purchased, and before any credits are applied.
For the new
Spend-based CUDs program ,
the fee to purchase spend-based CUD discounts is excluded from the Usage
cost amount. Instead, the spend-based CUD discounts fee is included in the
net calculation of the
Spend-based CUD discounts savings
amount.
Savings and credits
The following savings, discounts, and credits appear on the report if applicable
to your Cloud Billing account and selected Time range :
Negotiated savings : A credit that
displays for Cloud Billing accounts associated with a
custom pricing contract .
The Negotiated savings amount represents your cost savings computed using
this equation:
Negotiated savings = Costs at Contract price - Costs at List price
Negotiated savings is available when using a starting
Time range
set to May 1, 2021, or later.
Note that for Cloud Billing accounts associated with a custom
pricing contract , when you configure the report using a starting
Time range
set prior to May 1, 2021, the Negotiated savings bar isn't displayed.
In these instances, the
Usage cost
bar is displayed, which shows the gross cost of your cloud usage calculated
using your
contract prices .
Spend-based CUD discounts :
This is the net impact of the new
spend-based commitments , which includes
the fees paid for your spend-based CUDs as well as the discounts earned
based on your
consumption model . When your
commitments are fully utilized, this bar appears as a green credits bar. If
your commitments are underutilized, this bar can appear as an orange charge
bar, representing
wasted usage .
Legacy spend-based CUD credits : For spend-based committed use discounts
(CUDs) that aren't part of the new pricing model
or were purchased before the new pricing model was available, this is the
gross credit earned in exchange for your commitment to spend a minimum amount
for a service in a particular region. This credit offsets your costs
calculated at list prices.
Learn more about spend-based committed use discounts .
Learn how to
analyze the granular details of your CUDs purchase costs and credits ,
To analyze the effectiveness of the CUDs that you purchased,
view the CUD analysis page .
Resource-based CUD credits : Compute Engine
lets you purchase committed use contracts in return for deeply
discounted prices for VM usage. This is the gross savings you realized from
your purchase of Compute Engine commitments.
Learn more about resource-based committed use discounts .
Learn how to
analyze the granular details of your CUDs purchase costs and credits ,
To analyze the effectiveness of the CUDs that you purchased,
view the CUD analysis page .
Free tier usage : Some products offer free resource usage up to specified
limits. For some services, credits are applied to implement the free tier
usage.
Learn more about free tiers .
Promotional credits : The total savings you received from promotional
credits, such as
spend-based milestone credits ,
Google Cloud Free Trial ,
and marketing campaign credits, or other grants to use Google Cloud.
Sustained use discounts (Compute Engine): This credit represents
the automatic savings you receive for running eligible
Compute Engine instances for a significant portion of the month,
with no commitment required.
Learn more about sustained use discounts .
Reseller margin : For resellers only, this is the Reseller Program
Discount credit you receive for selling eligible Google Cloud products.
Spending-based discounts : The total savings you earned for the time period
you're viewing. Spending-based discounts offer progressively larger discounts
based on your total spend over a defined period, or discounts that are
applied after a contractual spending threshold is reached.
Subscription credits : The total savings you earned from long-term
subscriptions to services that are purchased in exchange for discounts.
These credits are typically applied to Base + Overage subscriptions, also
known as Non-Unified Commitment Service (Non-UCS) subscriptions.
Others : Other credits or discounts that aren't associated with the
current categories.
See Cloud Billing Reports to
learn more about savings and credits .
Invoice-level charges
Invoice-level charges are generated when an invoice is issued and are only
displayed in the report when you're viewing your costs by Invoice month .
When you set a Usage date time range, the cost breakdown report doesn't
display invoice-level charges. When you set an Invoice month time range,
the Cost breakdown report includes invoice-level charges, if applicable
to your Cloud Billing account.
Adjustments : The total of any adjustments that were applied to your
invoices (if applicable), for the selected invoice months. Adjustments are
credits or surcharges applied to your Cloud Billing account due to
billing corrections and contractual requirements. An adjustment might be
issued in a different month than it's applied. For guidance on analyzing
adjustments, see
Understand memos and adjustments .
Tax : The taxes that applied to your usage for the selected invoice
months, for each tax type.
Learn more about invoice-level charges:
See the
Cost Table report
for a detailed, tabular view of your monthly costs for a given invoice or
statement (by invoice month and document number).
See
Cloud Billing Reports
for an at-a-glance report view of charges by invoice month, including
invoice-level charges.
View your
Cloud Billing documents
to see all your invoices and other documents issued to your account.
Open the document to see account balance details and where credit or debit
memos are applied.
Report summary
Below the chart is a summary table of the information in the chart.
The summary table includes a row for each bar on the chart, and displays the
effective % rates of charges and credits.
When you hold your pointer over a row in the summary table, the corresponding
bar in the preceding chart is emphasized.
Click the View report links to open the corresponding report pages where
you can view the details behind specific cost breakdown report values.
Links to the Reports page open the report with the same filters you set
here.
The Usage cost row shows gross costs. The View report link in
the Usage cost row opens a report excluding all Savings options
in the Report's filter settings.
The View report link in the Cost row opens a report including all
Savings options in the Report's filter settings.
Not on the chart
The following is not shown on the cost breakdown chart:
Cost breakdown by individual invoice : Typically, one invoice is issued
per month, per Cloud Billing account, but it's possible to receive
more than one invoice in a month. The cost breakdown chart aggregates
the costs and credits for all invoices issued during the selected invoice
months. You can't view the breakdown report for an individual invoice.
BigQuery flat rate savings : The cost of
BigQuery flat rate is included in the Usage cost bar;
we don't separate the savings you achieved from purchasing
BigQuery flat rate.
Cloud Storage Growth plan : The cost of Cloud Storage is
included in the Usage cost bar; we don't separate the savings
you achieved from purchasing the Cloud Storage Growth plan.
Promotional or custom pricing : For Cloud Billing accounts
associated with a custom pricing contract, when viewing cost incurred
using a starting time range before May 1, 2021, the cost of resources
in the Usage cost bar is calculated using your contract prices.
To view your prices per SKU, see the
Pricing table report
or
export your Cloud Billing prices to BigQuery .
If you have questions regarding pricing, contact your Account Representative
for more details.
Project hierarchy filter options : When viewing cost incurred using a
starting time range before January 1, 2022, the Folders &
Organizations filter selector is inactive. For the Cloud Billing
account you're viewing, if none of the
linked projects
are associated with any folders or organizations, then the Folders &
Organizations filter isn't shown.
To learn more about organizations, folders, and project
hierarchy, see
Billing reports: Analyzing your costs by project hierarchy .
Share or bookmark the URL of a customized report
You can bookmark or share the URL of a Cost breakdown report you've
customized. As you configure your cost breakdown report by setting the time
range and filters, your page URL updates to include your selections.
You can share the report by copying the URL . Click
link Share to
copy the URL to your clipboard.
Optionally, in your browser, you can bookmark the URL to save the URL
with your report settings.
Note: As you configure your report by setting filters and groupings, your page
URL updates to include your selections. It's possible that the URL length
limit might be reached if you select many settings (for example, selecting 374
SKUs out of 375). In these instances, the
link Share button
is disabled and you see a notification on the reports page: The URL
may no longer reflect your selected filters, due to length limitations .
Download cost breakdown data to a CSV file
You can download the cost breakdown data to a comma-separated values (CSV) file
using the get_app
Download CSV selector located above the summary table. The CSV file
includes a column for each of the items in the
summary table
of the report, such as cost, credits, subtotal, taxes, adjustments, and total;
and a single row that shows the amount for each item. The CSV file doesn't
include the Effective rate data that's shown in the summary table.
CSV filename
For the cost breakdown data, the CSV filename follows this pattern:
[Billing Account name]_Cost Breakdown, [YYYY-MM-DD] - [YYYY-MM-DD].csv
For example, a CSV file of the cost breakdown data downloaded for a
Cloud Billing account named My Billing Account , for a date range
of October 1 to December 31, 2022 , is named:
My Billing Account_Cost Breakdown, 2022-10-01 - 2022-12-31.csv
Note: If you download a report with the same date range multiple times, then
the default report name will be the same. If you configured your report
with a specific set of parameters, you might want to rename the CSV file to
something that'll help you differentiate between reports run using the same
date range but using different report settings or filters.
Related topics
View your Cloud Billing reports and cost trends
Analyze the effectiveness of your committed use discounts
Export Cloud Billing data to BigQuery
View your cost and payment history
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

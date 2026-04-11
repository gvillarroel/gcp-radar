---
title: "Understand Your monthly invoice \_|\_ Cloud Billing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/read-invoice
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/read-invoice
  title: "Understand Your monthly invoice \_|\_ Cloud Billing \_|\_ Google Cloud Documentation"
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
Understand Your monthly invoice
Stay organized with collections
Save and categorize content based on your preferences.
Overview
When you
request invoiced billing ,
Google extends a line of credit to you for your computing costs, and you receive
an invoice each month. Typically, invoiced billing is used by large
businesses.
An invoice for a particular month should be available by the fifth business
day of the following month. For example, your September invoice will be ready
no later than the fifth business day of October. Invoices aren't generated on
weekends or bank holidays, so you should expect invoices to be delayed during
those periods.
You might receive multiple invoices that are split across a set of transactions,
when they involve resellers or multiple countries. For more information, see
Split invoicing for agency model transactions .
Cost data available in an invoice
The invoice total generally includes all costs incurred during a given calendar
month. Sometimes, at the end of a calendar month, there is a delay
in usage reporting. The costs of late-reported usage might
not be included on that month's invoice and instead might roll over to the next
month's invoice. As a result, your invoice might include costs for
more than one calendar month.
When you
view your invoice details
or
online reports , the usage is shown with the actual usage date.
Other data specific to an invoice includes the totals of any taxes and
adjustments.
For a detailed breakdown of the taxes on an invoice,
view the cost table report ,
or
view the details of your invoice .
For guidance on understanding and analyzing any adjustments, see
Understand memos and adjustments .
Download your invoice
If your account is configured for monthly invoicing, you can
download your invoice
in the following two formats:
PDF: The PDF format is intended for your Accounts Payable department to
review your monthly Google Cloud cost totals and to learn how and when
to pay Google. Your PDF invoice is summarized and doesn't provide details
for every resource cost or cost per subaccount (for resellers).
CSV: Prior to your January 2021 invoice, the CSV format provided more
details than those included in the PDF. Starting with your
January 2021 invoice, these details have been removed and now the CSV
invoice mirrors the PDF and includes the invoice header information and
cost totals. You can view the invoice cost details in the downloadable
Cost Table report ,
including project-level costs and additional details you might need, such
as service IDs, credit IDs, labels, and total costs by subaccount
(for resellers). You can access this report from the Google Cloud console.
Note: If you want to review and analyze detailed month-to-month costs for
projects, SKUs, and subaccounts (for resellers) view your
Cost Table report and download it to
CSV for analysis.
If you want to collect and analyze more granular data on how you are
billed, we recommend you enable
Cloud Billing Export to BigQuery .
For more information, review
key concepts for Cloud Billing data export, online reports, and
invoices .
Columns in the CSV invoice
Caution: Starting with your January 2021 invoice (available in February 2021),
we removed the detailed usage cost line items from your invoices. This means the
columns described here no longer appear on your CSV invoice. The content
provided here is maintained for historical purposes only . If your organization
previously processed the invoice CSV and you need the invoice cost details,
download the CSV from the Cost Table report
and process it in place of the invoice CSV.
For invoices prior to January 2021 , the following columns appear in the
CSV invoice:
Field
Description
Account Name
The name of the Cloud Billing Account that the usage is associated
with.
Account ID
The Cloud Billing Account ID that the usage is associated
with.
Source*
* As of November 2019, this field is removed from the invoice
CSV.
The name of the project that generated the Cloud Billing data.
Caution : Starting with your November 2019
invoice (available in December 2019), we removed the project-level
cost detail from your invoices and statements. This means that the
Source field no longer appears in the invoice CSV.
Product
The Google Cloud service that reported the Cloud Billing
data.
Resource Type
A description of the resource used by the service. For example, a resource
type for Cloud Storage is Standard Storage US .
SKU ID
The ID of the resource used by the service. For the full list of SKUs,
see the
Pricing table report .
Description
A description of the type of cost for the line item.
Start Date
The date when the invoice period began.
End Date
The date when the invoice period ended.
Quantity
The quantity of units used.
Unit
The billing unit of the usage (such as hour or gibibyte month).
Amount
The calculated cost of the usage.
Note: Invoice usage details don't include a column for the SKU price. If you
have negotiated pricing, the invoice amount has that pricing applied to it. To
view your prices per SKU, see the Pricing table report
or export your Cloud Billing prices to BigQuery . If you have questions regarding pricing per SKU, contact
your Account Representative for more details.
Related topics
Cost table report: View and download the cost details of your invoice or statement
Get a Cloud Billing document such as an invoice, statement, or receipt
View your cost and payment history
Export Cloud Billing data to BigQuery
Key concepts for Cloud Billing data export, online reports, and invoices
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

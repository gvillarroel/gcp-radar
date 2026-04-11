---
title: "View your commitments \_|\_ Cloud Billing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/cuds-list-overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/cuds-list-overview
  title: "View your commitments \_|\_ Cloud Billing \_|\_ Google Cloud Documentation"
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
View your commitments
Stay organized with collections
Save and categorize content based on your preferences.
The Committed use discounts (CUDs) page in the Google Cloud console shows a
summary of your commitments.
Use this page to view high-level information about your commitments, and
take actions such as changing the auto-renewal settings for resource-based CUDs,
or viewing recommendations for additional commitments.
Permissions required to view commitments
To view the Committed use discounts page for your Cloud Billing
account, you must be a Billing Account Administrator
or Billing Account Viewer
on the Cloud Billing account.
Access the commitments page
To view the Committed use discounts page for your Cloud Billing
account:
In the Google Cloud console, go to the Committed use discounts page.
Go to Committed use
discounts
At the prompt, choose the Cloud Billing account that
you want to view.
The CUDs page opens and shows a list of the active
commitments for the selected billing account.
Information in the commitments table
To filter your
commitments by their properties, select Filter .
You can use the columns in the table to get the following information:
Use the Active commitment column to see the total quantity of
commitments you've purchased for the filters that you select. For example,
if you have multiple spend-based Cloud SQL commitments in
europe-west2 , the Active commitment column shows the total amount for
those commitments.
Note: If you've purchased a new spend-based commitment, the commitment is
active at the beginning of the next hour.
For resource-based commitments, use the Auto-renew column to set up or
cancel auto-renewal for the commitment.
Learn more about what you need to consider when you turn on auto-renewal .
If you have eligible usage that could be covered by an additional
commitment, use the Recommendation column to view details
about recommended commitments.
To view additional columns, click Column display options
view_column , and select one or
more of these columns:
Price : The current hourly price for new and renewed commitments.
Commitment fee SKU : The SKU associated with the commitment fee. Use the
Commitment fee SKU to get your current price in your Pricing
export
Scope : The level at which the commitment is applied, such as a project
or billing account.
Download your commitment data
You can download the information about your commitments as a comma-separated
value (CSV) file for offline analysis. The CSV file contains the information you
see on the Committed use discounts page, and includes the subscription ID
for your commitments.
You can use the subscription ID to join your CUDs data to your usage data in the
BigQuery export. For example, you can import your
BigQuery dataset and CSV file to Looker Studio for
analysis, and then use data blends to combine the data
sources .
To download your commitment data, click Download CSV , and choose
Flat list .
Related topics
Analyze the effectiveness of your CUDs
Calculate your savings with Compute Engine Flexible CUDs
To learn how to purchase resource-based commitments for Compute Engine,
see the following sections of the Compute Engine documentation:
Purchase commitments without attached reservations
Purchase commitments with attached reservations
Purchase commitments for licenses
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

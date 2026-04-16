---
title: "Committed use discounts \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/cuds
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/cuds
  title: "Committed use discounts \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Resources
Send feedback
Committed use discounts
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how committed use discounts work with Google Cloud NetApp Volumes.
About committed use discounts
NetApp Volumes provides spend-based
committed use discounts (CUDs) for your predictable storage needs to help you
keep costs low on resources you need. You can purchase capacity for your storage
pools in Flex, Standard, Premium, or Extreme service levels at heavily
discounted prices in return for committing to a minimum spending rate of $11.38
per hour, about $100,000 per year, at your billing account level for a one or
three-year period.
How committed use discounts work
NetApp Volumes CUDs are ideal for workloads where you have
predictable storage needs. When you commit to a consistent amount of storage
capacity, you receive discounted prices on your committed spend rates. Your
commitments start the following calendar day after your date of purchase. Your
spend-based committed use discounts apply to the eligible usage on your account
each hour. If you use more storage capacity in the hour than your initial
commitment, the overage is charged at your regular, on-demand rate. If you use
less storage capacity per hour than your initial commitment, the discount
doesn't carry over to the next hour.
CUD pricing
15% discount on on-demand pricing for a one-year commitment invoiced
monthly.
20% discount on on-demand pricing for a three-year commitment invoiced
monthly.
If you want to be invoiced in full at the start of the contract, contact your
sales representative for more options. Discount percentages are the same in
every region. For regional pricing information, see NetApp Volumes pricing .
How CUDs apply to NetApp Volumes usage
CUDs automatically apply to aggregate NetApp Volumes storage
capacity on Flex, Standard, Premium, and Extreme service levels and in all
regions at your billing account level.
CUDs don't apply to storage capacity on the cold tier, or to other
NetApp Volumes features usage such as cross region replication
(CRR) or backups.
To view the full list of NetApp Volumes CUD eligible SKUs see
NetApp Volumes Capacity SKU Group .
Purchasing NetApp Volumes commitments
You can purchase commitments from any Cloud Billing account, and the discount
applies to any eligible usage in projects paid for by that Cloud Billing
account. Any overage is charged at your regular, on-demand rate. Before you
purchase a CUD, make sure to read the Service specific terms
regarding Committed Units.
Warning: Once you purchase a CUD, you can't cancel it.
When you purchase a NetApp Volumes CUD, you pay the same
commitment fee for the entirety of the commitment period, even if the price of
applicable usage changes. In the event of a price change, you still receive the
same hourly discounts you signed up for. The commitment fee is billed
monthly or upfront, depending on the type of CUD.
Use the following instructions to purchase a CUD for NetApp Volumes
using the Google Cloud console.
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
In the Google Cloud console, go to Billing and click Committed use
discounts (CUDs) .
In the Committed use discounts page, click Purchase .
From the Product list, select Google Cloud NetApp Volumes .
Under Commitment details , complete the following actions:
Enter a name in the Commitment name field that helps you identify
the commitment that you're purchasing.
Choose a commitment period of one or three years.
Enter the on-demand price that matches your planned usage in the
Hourly on-demand commitment field.
Caution: Only include approved additional discounts when calculating your
hourly on-demand commitment. Inclusion of discounts that haven't been
approved can result in an increase in billed usage due to on-demand
pricing.
Review the information you provided and click Purchase to purchase
the commitment.
For more information about purchasing spend-based CUDs, see Google Cloud
Committed use discounts .
CUD analysis
Google Cloud console provides a committed use discount dashboard that provides a
summary of your commitments which include the following fields:
Region
Cost
Term
Start and end dates
Trailing 30 day calculations for commitment cost, savings, utilization, and
coverage
Google Cloud console also provides a commitment analysis report that helps you to
visualize and understand the effectiveness and financial impact of the CUDs you
have purchased.
To view the spend-based CUDs for your Cloud Billing account, you must be a Billing Account Administrator
or Billing Account Viewer on the Cloud Billing
account.
For more information about how you can understand the analysis of your CUD based
discount, see Analyze the effectiveness of spend-based commitments .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

---
title: "Estimate your monthly costs \_|\_ Cloud Billing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/estimate-costs
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/estimate-costs
  title: "Estimate your monthly costs \_|\_ Cloud Billing \_|\_ Google Cloud Documentation"
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
Estimate your monthly costs
Stay organized with collections
Save and categorize content based on your preferences.
To get estimates for your planned Google Cloud workloads, use the
Google Cloud pricing calculator
to get an idea of the costs for hypothetical workloads. For example, if you want
to budget for a new application, the tool helps you estimate how much the
infrastructure for the application might cost every month.
With the pricing calculator, you can estimate costs for a wide range of
Google Cloud services and products.
Optional: Link your Cloud Billing account to the pricing calculator
If your Cloud Billing account is associated with a custom pricing
contract, you can link the billing account to the pricing calculator to get cost
estimates that factor in your contract prices.
Permissions required to link a billing account
To link the billing account to the pricing calculator, you must be assigned a
role on the Cloud Billing account that gives you the permissions
needed to view the custom contract prices associated with the billing account.
Custom role
Predefined roles
If you're using a custom role to access contract prices, you need a role
granted on your Cloud Billing account that includes the following
permissions :
billing.accounts.get
billing.accounts.list
billing.billingAccountPrice.get
billing.billingAccountPrices.list
billing.billingAccountServices.get
billing.billingAccountServices.list
billing.billingAccountSkuGroupSkus.get
billing.billingAccountSkuGroupSkus.list
billing.billingAccountSkuGroups.get
billing.billingAccountSkuGroups.list
billing.billingAccountSkus.get
billing.billingAccountSkus.list
To gain the required permissions using a
predefined role , ask your administrator to grant you one of the
following
Cloud Billing IAM roles on your
Cloud Billing account:
Billing Account Viewer
Billing Account Administrator
For more information about Cloud Billing permissions,
see:
Overview of Cloud Billing access control
Create custom roles for Cloud Billing
Understanding predefined Identity and Access Management roles for Cloud Billing
Access the pricing calculator
With the pricing calculator, you can estimate costs for a wide range of
Google Cloud services and products.
Go to the pricing calculator
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Structure of CUD metadata export \_|\_ Cloud Billing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export
  title: "Structure of CUD metadata export \_|\_ Cloud Billing \_|\_ Google Cloud\
    \ Documentation"
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
Structure of CUD metadata export
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document provides reference information for the schema of
Cloud Billing committed use discount (CUD) metadata that's exported
daily to each table in BigQuery. This export provides a daily
snapshot of your
spend-based CUDs
commitment metadata to a BigQuery table,
which you can join with other billing data exports for better CUD management
and reporting.
Ingress and egress rules
If you use VPC Service Controls
for BigQuery resources on your project or organization, you must
create ingress and egress rules to properly enable data exports to BigQuery.
Create an ingress rule
that gives the individual access to create the export:
- ingressFrom:
identities:
- PRINCIPAL_IDENTIFIER_OF_USER_INITIATING_EXPORT
sources:
- accessLevel: "*"
ingressTo:
operations:
- serviceName: bigquery.googleapis.com
methodSelectors:
- method: "*"
resources:
- projects/ YOUR_PROJECT_ID_TO_HOST_EXPORT_DATA
title: 'Ingress Rule Name'
See Principal identifiers
for more information about principal identifier formats.
Create an
egress rule
to allow Google Cloud access to the BigQuery dataset through VPC Service Controls:
- egressTo:
operations:
- serviceName: bigquery.googleapis.com
methodSelectors:
- method: "*"
resources:
- projects/132468967293
egressFrom:
identityType: ANY_IDENTITY
sources:
- accessLevel: "*"
sourceRestriction: RESTRICTION_STATUS
title: 'Egress Rule Name'
Note: If you skip this step, you will receive the following error when you
attempt to initiate the export:
You don't have permissions to enable the dataset .
Schema of the CUD export data
In your BigQuery dataset, your Cloud Billing account
CUD data is loaded into a data table named cud_subscriptions_export .
The following information describes the schema of the data that's exported to
BigQuery.
Field
Type
Description
billing_account_id
String
The 18-character, alphanumeric billing account ID associated with the
CUD data, for example, 010101-F0FFF0-10XX01 .
cud_product.id
String
The subscription definition ID, for example
344fffc1-17f9-4e34-abf2-cfffff409fa2 .
cud_product.display_name
String
The friendly name of the product associated with the commitment, for
example Flexible CUD .
cud_product.type
String
The type of product commitment, for example Spend-Based .
consumption_model.id
String
The ID of the
consumption model
used by the CUD, for example 5515-81A8-03A2 .
consumption_model.description
String
The description of the
consumption model
for the CUD, for example Cloud Spanner CUD - 1 Year .
subscription.entitlement_scope
String
The scope of the entitlement for the CUD, for example, an account-scoped
entitlement might be billingAccounts/010101-F0FFF0-10XX01 .
subscription.instance_id
String
The subscription instance ID which is a GUID, for example
769c55ea-c50f-4258-bcf5-04b6688fa5fa .
subscription.display_name
String
The display name for the CUD, defined by the customer at time of purchase,
for example Recommended Cloud Run CUD commitment in us-central1 on
Sep 3, 2023 .
region
String
The region associated with the CUD, for example us-central1 .
commitent_amount.unit
String
The measurement unit of resource consumption for the commitment, for
example, $/hr .
commitent_amount.value
Numeric
The commitment amount purchased, for example 100 or
0.05 .
term
String
The term of the commitment in
ISO 8601
duration format, where P1Y represents one year, and
P3Y represents three years.
start_time
Timestamp
The start timestamp for the commitment, for example
2024-09-27 18:08:20 UTC .
end_time
Timestamp
The end timestamp for the commitment, for example
2025-02-18 12:11:20 UTC .
state
String
The state of the commitment, for example
Active or Expired .
Related topics
Topics related to exported Cloud Billing data
Set up Cloud Billing data export to BigQuery
Example queries for Cloud Billing data export to BigQuery
Visualize spend over time with Looker Studio
Cost and pricing reports available in the Google Cloud console
View your Cloud Billing reports and cost trends
View and download the cost details of your invoice or statement
View and download prices for Google's cloud services
Understand your savings with cost breakdown reports
Analyze the effectiveness of your committed use discounts
View your cost and payment history
Previous
arrow_back
Structure of Pricing data export
Next
Example queries for Cloud Billing
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

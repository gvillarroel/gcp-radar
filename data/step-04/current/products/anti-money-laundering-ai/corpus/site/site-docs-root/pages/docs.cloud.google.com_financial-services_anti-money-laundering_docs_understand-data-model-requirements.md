---
title: "Understand the AML data model and requirements \_|\_ Anti Money Laundering\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/understand-data-model-requirements
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/understand-data-model-requirements
  title: "Understand the AML data model and requirements \_|\_ Anti Money Laundering\
    \ AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Send feedback
Understand the AML data model and requirements
Stay organized with collections
Save and categorize content based on your preferences.
At the core of AML AI is a detailed and up-to-date understanding
of parties of the bank and their activity, covering, in particular, the
following data:
Transactional activity
Account holdings
Party demographics
Risk investigation data
This page covers the creation and management of data used by
AML AI, including details of the data model, data schema, and
data requirements for AML. The schema itself, including details for the
individual fields, appears in the AML input data model
( CSV file ). A synthetic example dataset is also
available through the Quickstart .
The following prerequisites are not covered on this page:
Setup to use AML AI with an AML dataset (see
Set up a project and permissions )
Security and compliance features (see pages under
Security and compliance features )
Overview of data requirements
The AML data model accepts information on retail or commercial parties, their
accounts and transactions, and detailed information on risk cases related to
these parties. This section introduces important aspects of the data model that
are valid across the different entities.
The AML data model schema is arranged into three areas: core banking data, risk
investigation data, and supplementary data.
Core banking data
Tables : Party , AccountPartyLink ,
Transaction
Purpose : Serves as a structured collection of data on your customers and
their banking activity, used in detection of risk. All parties, accounts and
transactions to be monitored should be included. Provide either retail or
commercial data in an AML AI dataset
Risk investigation data
Table : RiskCaseEvent
Purpose :
Serves as a structured collection of data on risk investigation
processes and parties previously identified as risky
Assists in the creation of training labels for AML risk models
Supplementary data
Table : PartySupplementaryData
Purpose : Optional table that can contain additional information relevant
to identifying money laundering risk that is not covered in the rest of the
schema. You should start using AML AI without providing any
supplementary data.
Table relationships
The following diagram describes the table relationships, primary keys, and
foreign keys.
Note: Since AML AI uses data over time, primary keys may include
validity_start_time to allow accurate representation of data over time. For
example, AML AI can capture when a customer was added to or
removed from a joint account. For more details, see
understanding how data changes over time .
Errors
When you create a dataset, AML AI automatically performs data
validation checks. For information about these checks, the error messages and
how to fix them, see
Data validation errors .
For more information about the technical schema, see
AML input data model
( CSV file ).
To understand the data duration requirements and scope, see
Understand data scope and duration .
When you have tables ready in BigQuery, you can use
AML AI to
create and manage a dataset .
Note: Most model governance policies define a requirement to track data lineage
used across all ML operations from engine configuration, training, and
evaluation. To ensure data remains unchanged, we recommend that you create a
snapshot of your BigQuery tables. In the case that you don't snapshot
data, AML AI operations read the BigQuery tables each
time an operation uses the dataset, so changes to the dataset could impact
tuning, training, backtesting, and predictions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

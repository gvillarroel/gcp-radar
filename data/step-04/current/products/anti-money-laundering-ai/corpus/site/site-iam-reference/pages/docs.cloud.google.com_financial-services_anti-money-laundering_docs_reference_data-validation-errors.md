---
title: "Data validation errors \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/data-validation-errors
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/data-validation-errors
  title: "Data validation errors \_|\_ Anti Money Laundering AI \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Data validation errors | Anti Money Laundering AI | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Anti Money Laundering AI
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Discover
Product overview
Process overview
Architectural overview
Security and compliance features
Documentation policy
Glossary
Quickstart
Train and test models designed to detect money laundering
Get started
Set up a project and permissions
Create an instance
Prepare Big Query datasets and tables
Prepare data for AML AI
Understand the AML data model and requirements
Understand data scope and duration
Select data for best performance and typology coverage
Create and manage AML AI datasets
Generate a model and evaluate performance
Overview of model preparation
Configure an engine
Manage engine versions
Create and manage engine configs
Generate a model
Create and manage models
Evaluate a model
Copy models to new instances
Create and manage backtest results
Generate risk scores and explainability
Register your parties
Party registration sharing for multiple instances
Prepare to generate prediction outputs
Create and manage prediction results
Understand prediction outputs
Best practices for your investigation process
Prepare for model and risk governance
Collect model and risk governance artifacts
Evaluate model fairness
Troubleshoot
Troubleshoot AML AI
Data validation errors
Administer AML AI
Access control
Access control with IAM
Authenticate to AML AI
Data residency
VPC service controls
Encryption
Understand encryption in transit
Encrypt data at rest (CMEK)
Monitor AML AI resources
Use audit logs
Use platform logs
Manage instances
Manage long-running operations
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Data validation checks and error output
Accessing data validation errors
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Data validation errors
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Data validation checks and error output
Accessing data validation errors
Gathering and merging the core data needed to run AML AI may be
error-prone. To address this, AML AI has built-in data
validation checks to provide you actionable feedback on how to address
dataset-related issues.
The data validation checks are executed during two phases of the model
deployment process, with any resulting errors included in the long-running
operation (LRO) response.
One check is executed as part of the creation of the dataset.
Validation is also run at the beginning of other operations (tune, train,
backtest, and predict).
Note: If a dataset fails validation as part of tuning or training, the operation
stops and you are not charged for that AML AI API request. See
the Pricing page .
The LRO
Status
contains one
ErrorInfo
message for each failed check. The ErrorInfo message's reason field contains
a stable string constant while other relevant information is provided in the
metadata field. For more information on RPC errors, see
AIP-193 .
Data validation checks and error output
Every validation failure contains the following corresponding error information:
Field
Description
reason
Unique identifier for this type of error
metadata["count"]
Number of occurrences of this error
metadata["data_ table"]
The name of the input table in which the error
occurred
metadata["data_ field"]
The name of the field in the input table in
which the error occurred
metadata["description"]
Detailed, actionable error description exposed
in metadata
metadata["test"]
Illustrative (pseudo-SQL) statement explaining
the logic of the validation
The following table lists all data validation checks performed by
AML AI, their descriptions, and an example test response:
reason
metadata["description"]
metadata["test"]
NOT_ NULL_ COLUMN_ WITH_ NULLS
One or more NOT NULL columns contain one or more null values.
X IS NULL
DATE_ TIME_ DIFFERENCE
The validity_ start_ time cannot include dates that are greater than today's date and validity_ start_ time must be greater than threshold.
DATETIME_DIFF( CURRENT_TIMESTAMP(), validity_ start_ time, DAY) < 0
EXCESSIVE_ ACCOUNTS_ FOR_ PARTY
Number of accounts for the party exceeds the predefined threshold.
COUNT( DISTINCT account_ id) > {{ var( 'overlarge_ account_ count')}}
EXCESSIVE_ PARTIES_ FOR_ SHARED_ ACCOUNT
Number of account holders for the account exceeds the predefined threshold.
COUNT( DISTINCT party_ id) > {{ var( 'overlarge_ account_ holders')}} GROUP BY account_ id
MISSING_ AML_ EXIT_ LABELS
All, or no parties have AML exit events. Useful AML model labels cannot be created.
COUNT( party_ id) WHERE type IN {{ positive_ event_ types}}) IN (0, count( party)
DUPLICATE_ PRIMARY_ KEY
There is a duplicate primary key value in the database resulting in a unique key violation. Note that for tables with validity_ start_ time , the primary key includes validity_ start_ time .
GROUP BY X, validity_ start_ time HAVING count( 1) > 1
NAN_ VALUE_ IN_ FLOAT_ COLUMN
One or more columns contains a NaN (Not a Number) floating point value.
X is NAN
INSUFFICIENT_ DATE_ RANGE
(Only up to v004.002) The date range in the dataset specifies an insufficient number of months for any AML AI operation. The sufficient number of months for prediction is 24, and more for other operations.
COUNTIF( (MAX( {{transaction_ time_ column}}) - MIN( {{transaction_ time_ column}})) > 3 years)/ COUNT( *) < {{ var( 'short_ timeframe_ ratio') }} GROUP BY account_ id
EMPTY_ TABLE
One or more required tables in the database is empty.
COUNT( *) FROM X < 1
UNSUPPORTED_ VALUE
One or more columns include values that are not in the set of allowed values.
X NOT IN ("a1", "b2", "c3")
DUPLICATE_ RISK_ CASE_ EVENTS_ TYPE_ AML_ EXIT
Party was exited from the bank multiple times. AML_ EXIT risk case event type is not allowed to occur multiple times.
party_ id, risk_ case_ id, countif( type = "AML_ EXIT") > 1
DUPLICATE_ RISK_ CASE_ EVENTS_ TYPE_ AML_ PROCESS_ START
Multiple AML investigation processes were initiated against the party in this risk case.
party_ id, risk_ case_ id, countif( type = "AML_ PROCESS_ START") > 1
DUPLICATE_ RISK_ CASE_ EVENTS_ TYPE_ AML_ PROCESS_ END
Multiple AML investigation processes were closed against the party in this risk case.
Party_ id, risk_ case_ id countif( type = "AML_ PROCESS_ END") > 1
UNNORMALIZED_ BOOKED_ AMOUNT_ CURRENCY
Normalized booked amount includes multiple currencies in the Transaction table. All normalized amounts need to be in the same currency.
COUNT( DISTINCT normalized_ booked_ amount. currency_ code) != 1
NEGATIVE_ TRANSACTION_ NORMALIZED_ BOOKED_ AMOUNT
Normalized booked amount value for one or more transactions is negative. Data schema prohibits negative values for this field.
normalized_ booked_ amount. units < 0 OR normalized_ booked_ amount. nanos < 0
COLUMN_ EXISTENCE
One or more required columns don't exist in the database.
X DOES NOT EXIST IN {{table_ name}}
TABLE_ EXISTENCE
One or more required tables don't exist in the database.
TABLE {{table_ name}} DOES NOT EXIST
SUPPLEMENTARY_DATA_COLUMN_NAMES
One or more party_supplementary_data_id values is not in the range of allowed values. IDs may use alphanumeric characters as well as underscores, and should start with an alphanumeric character.
NOT EXISTS REGEXP_CONTAINS(party_supplementary_data_id, "^[a-zA-Z0-9][a-zA-Z0-9_]*$") AND supplementary_data_payload.value IS NOT NULL
EXCESSIVE_PARTY_SUPPLEMENTARY_DATA_IDS
Number of distinct party_supplementary_data_id values exceeds the maximum of 100.
COUNT(DISTINCT party_supplementary_data_id) > 100
MISSING_PARTY_SUPPLEMENTARY_DATA_ID
One or more party supplementary data IDs that was present in the dataset used for model creation is missing in this dataset.
X NOT IN (DISTINCT {party_supplementary_data_ids used in model})
AML_SUSPICIOUS_ACTIVITY_START_AFTER_AML_PROCESS_START
AML suspicious activity starts after the AML process starts for at least one risk case and party.
EXISTS(RCE1, RCE2) WHERE RCE1.party_id = RCE2.party_id AND RCE1.risk_case_id = RCE2.risk_case_id AND RCE1.type = "AML_PROCESS_START" AND RCE2.type = "AML_SUSPICIOUS_ACTIVITY_START" AND RCE1.event_time <= RCE2.event_time
EXCESSIVE_NUMBER_OF_PARTIES
The dataset contains more parties than supported by this engine version.
COUNT(DISTINCT party_id) >= THRESHOLD
EXCESSIVE_RISK_CASES_PER_PARTY
Number of risk cases for at least one party exceeds the predefined threshold.
COUNT(DISTINCT risk_case_id) > THRESHOLD GROUP BY party_id
INCONSISTENT_SUSPICIOUS_PERIOD
Suspicious period for at least one party and risk case doesn't conform to requirements - suspicious activity start without corresponding end, or suspicious activity end without corresponding start.
(party_id, risk_case_id, type = "AML_SUSPICIOUS_ACTIVITY_END") MUTEX (party_id, risk_case_id, type = "AML_SUSPICIOUS_ACTIVITY_START")
INCONSISTENT_SUSPICIOUS_PERIOD
Suspicious period for at least one party and risk case doesn't conform to requirements - more than one suspicious activity start or end.
COUNT(party_id, risk_case_id, type = "AML_SUSPICIOUS_ACTIVITY_END" OR "AML_SUSPICIOUS_ACTIVITY_START") > 1
INCONSISTENT_SUSPICIOUS_PERIOD
Suspicious period for at least one party and risk case doesn't conform to requirements - suspicious activity period end before suspicious activity start.
party_id, risk_case_id, type = "AML_SUSPICIOUS_ACTIVITY_END" event time < party_id, risk_case_id, type = "AML_SUSPICIOUS_ACTIVITY_START" event time
JOINABILITY_ISSUE_ACCOUNT_ID
The account_id in the table cannot be found in the AccountPartyLink table. The account_id must exist in the AccountPartyLink table.
account_id NOT IN (SELECT account_id FROM account_party_link)
JOINABILITY_ISSUE_ACCOUNT_ID_IS_DELETED
The account_id is deleted from the AccountPartyLink table (without undeletion) at the validity start / event times in the other tables.
account_id (FROM account_party_link) is_entity_deleted = TRUE WHEN account_id (FROM transaction) validity_start_time
JOINABILITY_ISSUE_MIN_ACCOUNT_ID_VALIDITY_START_TIME
The minimum account_id validity start time in the AccountPartyLink table is later than the validity start time in Transactions table.
account_id (FROM account_party_link) MIN validity_start_time > account_id (FROM transaction) validity_start_time
JOINABILITY_ISSUE_PARTY_ID
The party_id in the table cannot be found in the Party table. The party_id must exist in the Party table.
party_id NOT IN (SELECT party_id FROM party)
JOINABILITY_ISSUE_PARTY_ID_IS_DELETED
The party_id is deleted from the Party table (without undeletion) at the validity start / event times in the other tables.
party_id (FROM party) is_entity_deleted = TRUE WHEN party_id (FROM account_party_link) validity_start_time
NO_AML_PROCESS_START_FOR_RISK_CASE
One or multiple positive risk cases that resulted in an exit or SAR don't include AML PROCESS START event.
(party_id, risk_case_id COUNTIF(type = "AML_PROCESS_START") = 0) WHEN party_id, risk_case_id COUNTIF(type = "AML_EXIT" OR "AML_SAR" ) = 1)
UNSUPPORTED_DATA_TYPE
Column present with incorrect data type. See AML AI Input Data model documentation for correct types.
X DATA_TYPE IS NOT "expected_data_type"
MISSING_DATA_FOR_REQUIRED_TIME_RANGE
(Starting from major engine version v004.007) There are one or multiple periods in the required time range without any valid entries in the Party, Transaction, or AccountPartyLink table.
No valid entry in the required time range for some months.
EXCESSIVE_NUMBER_OF_RISK_TYPOLOGIES
(Starting from major engine version v004.009) The dataset contains more distinct risk typologies than supported by this engine version. The threshold of supported risk typologies is 100.
COUNT(DISTINCT risk_typology_id) > [EV THRESHOLD]
REPEATED_RISK_TYPOLOGY_FOR_RISK_CASE_EVENT
(Starting from major engine version v004.009) The risk_typology_measurements field includes the same risk_typology_id multiple times within the same risk case event.
COUNT(DISTINCT risk_case_event_id, risk_typology_id)) > 1
Accessing data validation errors
Data validation errors are included in the LRO response. See
Manage long-running operations
for more information. The
platform logs also
contain an entry with the LRO response.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial

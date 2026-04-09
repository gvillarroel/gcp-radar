---
title: "Engine versions \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/engine-versions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/engine-versions
  title: "Engine versions \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Anti Money Laundering AI
Reference
Send feedback
Engine versions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists minor engine versions available to all
AML AI customers. For more information on engine version naming, see
the
engine version glossary entry .
aml-retail.default
This table lists the retail-specific engine versions.
Tuning
Major
Minor
Description
Release date
Lifecycle stage
v004
010
Latest version :
202507-000
More reliable training performance when using optional enum input fields.
July 10, 2025
ACTIVE
009
202507-000
Maintenance release - extends support for this major engine version.
September 3, 2025
ACTIVE
202504-000
Maintenance release - extends support for this major engine version.
April 20, 2025
ACTIVE
202412-001
New recall per typology metric added to backtesting.
Input schema extended to include typology labels for risk case events.
New features introduced in v004.007 are separated into a new feature family to improve investigator usability.
December 24, 2024
ACTIVE
008
202504-000
Maintenance release - extends support for this major engine version.
April 17, 2025
ACTIVE
202411-001
Tuning and training processes updated to better align with backtesting.
November 21, 2024
ACTIVE
007
202506-000
Maintenance release - extends support for this major engine version.
June 26, 2025
ACTIVE
202503-000
Maintenance release - extends support for this major engine version.
April 17, 2025
ACTIVE
202410-000
New "Unusual counterparty activity" features are introduced to
recognize suspicious parties through their inbound and outbound
transactions with exited parties.
More reliable tuning performance, in particular for small
datasets.
A new data validation is applied to ensure there are no periods
with missing data in Party, Transaction or AccountPartyLink tables.
October 29, 2024
ACTIVE
005
202508-000
Maintenance release extends support for this major engine version.
September 3, 2025
ACTIVE
202505-000
Maintenance release extends support for this major engine version.
June 5, 2025
ACTIVE
202503-000
Maintenance release - extends support for this major engine version.
April 14, 2025
ACTIVE
202409-000
New recommended field counterparty_account.region_code added to the Transaction table.
The new engine version uses this field to account for risks associated with the region of the counterparty account.
October 01, 2024
ACTIVE
004
202508-000
Maintenance release - extends support for this major engine version.
September 3, 2025
ACTIVE
202505-000
Maintenance release - extends support for this major engine version.
June 5, 2025
ACTIVE
202503-000
Maintenance release - extends support for this major engine version.
March 26, 2025
ACTIVE
202412-000
Maintenance release - extends support for this major engine version.
December 1, 2024
ACTIVE
202408-000
Reduction in total requirement for transaction and account data from 41 to 30 months
Performance improvements across several feature families, focusing on more recent high risk activity
Adjustment to the calculation of the PartyRecall metric in the rare corner case when many customers have the same prediction score and it's not possible to exactly produce the number of partyInvestigationsPerPeriod positive predictions
Uses latest FATF high risk geos, published in Jan 2024
September 16, 2024
ACTIVE
002
202502-000
Fixes a known issue where prediction results may occasionally contain duplicate entries
April 10, 2025
ACTIVE
202406-000
Additional data validation errors with more granular checks and corresponding actionable error messages
Improved accuracy and better descriptions for existing data validation checks
A bugfix for processing of alert events in the Risk Case Event table
Improved reliability of training, prediction and backtesting operations for very large datasets, >> 20 million parties
Reduction in time taken for tuning, that is creating an engine config
July 11, 2024
LIMITED
001 (DEPRECATED)
202402-000
More sensitive skew metric for model and data quality monitoring.
Bugfix for recall metrics.
April 25, 2024
LIMITED
000 (DEPRECATED)
202401-000
Adds feature family Importance metric to the model metadata
March 12, 2024
LIMITED
202312-001
Improves usability of party supplementary data by allowing use of human readable party supplementary data IDs
Adds support for inheriting hyperparameters instead of re-tuning
March 1, 2024
DECOMMISSIONED
202312-000
Supports datasets containing up to 130 million parties
Adds KYC and tenure features versus the previous version
December 1, 2023
LIMITED
v003
000
202502-000
Fixes a known issue where prediction results may occasionally contain duplicate entries
April 10, 2025
ACTIVE
202312-000
Improves usability of party supplementary data by allowing use of human readable party supplementary data IDs
Adds support for inheriting hyperparameters instead of re-tuning
March 1, 2024
LIMITED
202311-000
Supports datasets containing up to 20 million parties
V003 adds improved labeling methodology versus previous versions
November 15, 2023
LIMITED
aml-commercial.default
This table lists the commercial-specific engine versions.
Tuning
Major
Minor
Description
Release date
Lifecycle stage
v004
010
Latest version :
202603-000
Higher data validation threshold for number of accounts per party
April 2, 2026
ACTIVE
202507-000
More reliable training performance when using optional enum input fields.
July 10, 2025
ACTIVE
009
202603-000
Higher data validation threshold for number of accounts per party
April 2, 2026
ACTIVE
202502-000
Maintenance release - extends support for this major engine version.
February 28, 2025
ACTIVE
202412-001
New recall per typology metric added to backtesting.
Input schema extended to include typology labels for risk case events.
New features released in v004.007 are separated out into a new feature family "Counterparty risk indicators" to improve investigator usability.
December 24, 2024
ACTIVE
008
202505-000
Maintenance release - extends support for this major engine version.
July 10, 2025
ACTIVE
202503-000
Maintenance release - extends support for this major engine version.
March 26, 2025
ACTIVE
202411-001
Tuning and training processes updated to better align with backtesting.
November 21, 2024
ACTIVE
007
202503-000
Maintenance release - extends support for this major engine version.
March 19, 2025
ACTIVE
202410-000
New "Unusual counterparty activity" features are introduced to
recognize suspicious parties through their inbound and outbound
transactions with exited parties.
A new data validation is applied to ensure there are no periods
with missing data in Party, Transaction or AccountPartyLink tables.
October 29, 2024
ACTIVE
005
202508-000
Maintenance release - extends support for this major engine version.
September 3, 2025
ACTIVE
202505-000
Maintenance release - extends support for this major engine version.
June 5, 2025
ACTIVE
202503-000
Maintenance release - extends support for this major engine version.
March 19, 2025
ACTIVE
202409-000
New recommended field counterparty_account.region_code added to the Transaction table.
The new engine version uses this field to account for risks associated with the region of the counterparty account.
October 01, 2024
ACTIVE
004
202505-000
Maintenance release - extends support for this major engine version.
June 12, 2025
ACTIVE
202503-000
Maintenance release - extends support for this major engine version.
March 19, 2025
ACTIVE
202412-000
Maintenance release - extends support for this major engine version.
December 1, 2024
ACTIVE
202408-000
Reduction in total requirement for transaction and account data from 41 to 30 months
Performance improvements across several feature families, focusing on more recent high risk activity
Adjustment to the calculation of the PartyRecall metric in the rare corner case when many customers have the same prediction score and it's not possible to exactly produce the number of partyInvestigationsPerPeriod positive predictions
Uses latest FATF high risk geos, published in Jan 2024
September 16, 2024
ACTIVE
002
202502-000
Fixes a known issue where prediction results may occasionally contain duplicate entries
April 10, 2025
ACTIVE
202406-000
Additional data validation errors with more granular checks and corresponding actionable error messages
Improved accuracy and better descriptions for existing data validation checks
A bugfix for processing of alert events in the Risk Case Event table
Improved reliability of training, prediction and backtesting operations for very large datasets, >> 20 million parties
Reduction in time taken for tuning, that is creating an engine config
July 11, 2024
LIMITED
001 (DEPRECATED)
202402-000
More sensitive skew metric for model and data quality monitoring.
Bugfix for recall metrics.
April 25, 2024
LIMITED
000 (DEPRECATED)
202401-001
More reliable tuning performance, in particular for small datasets
March 13, 2024
LIMITED
202401-000
Adds feature family Importance metric to the model metadata
March 12, 2024
DECOMMISSIONED
202312-001
Improves usability of party supplementary data by allowing use of human readable party supplementary data IDs
Adds support for inheriting hyperparameters instead of re-tuning
March 1, 2024
DECOMMISSIONED
202312-000
Supports datasets containing up to 130 million parties
Performance neutral versus the previous version
December 1, 2023
LIMITED
v003
000
202502-000
Fixes a known issue where prediction results may occasionally contain duplicate entries
April 10, 2025
ACTIVE
202312-000
Improves usability of party supplementary data by allowing use of human readable party supplementary data IDs
Adds support for inheriting hyperparameters instead of re-tuning
March 1, 2024
LIMITED
202311-000
Supports datasets containing up to 20 million parties
V003 adds improved labeling methodology versus previous versions
November 15, 2023
LIMITED
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

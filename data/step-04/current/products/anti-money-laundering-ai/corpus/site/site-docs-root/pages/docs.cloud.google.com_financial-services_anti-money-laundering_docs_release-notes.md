---
title: "AML AI release notes \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/release-notes
  title: "AML AI release notes \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

AML AI release notes | Anti Money Laundering AI | Google Cloud Documentation
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
Anti Money Laundering AI
Quotas
Pricing
Locations
Release notes
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
February 03, 2026
December 06, 2025
September 03, 2025
July 10, 2025
June 26, 2025
May 28, 2025
April 17, 2025
April 09, 2025
December 24, 2024
November 25, 2024
November 18, 2024
October 31, 2024
October 14, 2024
October 01, 2024
September 16, 2024
July 11, 2024
April 25, 2024
March 15, 2024
March 13, 2024
March 12, 2024
March 04, 2024
February 28, 2024
January 22, 2024
December 01, 2023
November 15, 2023
June 29, 2023
Home
Documentation
Industry solutions
Anti Money Laundering AI
Resources
Was this helpful?
Send feedback
AML AI release notes
Stay organized with collections
Save and categorize content based on your preferences.
On this page
February 03, 2026
December 06, 2025
September 03, 2025
July 10, 2025
June 26, 2025
May 28, 2025
April 17, 2025
April 09, 2025
December 24, 2024
November 25, 2024
November 18, 2024
October 31, 2024
October 14, 2024
October 01, 2024
September 16, 2024
July 11, 2024
April 25, 2024
March 15, 2024
March 13, 2024
March 12, 2024
March 04, 2024
February 28, 2024
January 22, 2024
December 01, 2023
November 15, 2023
June 29, 2023
This page documents production updates to AML AI. Check this
page for announcements about new or updated features, bug fixes, known issues,
and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
February 03, 2026
Announcement
Copy an AML AI model to a separate AML AI instance. See Copy models to new instances to find out more about how this works.
December 06, 2025
Announcement
Manage production alerting in a separate instance or project from model training and evaluation without paying twice for registered parties. See Party registration sharing for multiple instances to find out more about how this works.
September 03, 2025
Announcement
New minor engine versions released for retail line of business within the v004 tuning version. This extends support for the major version and includes no significant changes compared to the previous minor version.
Announcement
New minor engine version released for commercial line of business within the v004 tuning version. This extends support for the major version and includes no significant changes versus the previous minor version.
July 10, 2025
Announcement
A new major engine version is now available for Retail and Commercial lines of business, within the v4 tuning version. This includes a more reliable training performance when using optional enum input fields.
Announcement
New minor engine version released for commercial line of business within the v004 tuning version. This extends support for the major version and includes no significant changes over the previous minor version.
June 26, 2025
Announcement
New minor engine version released for retail line of business within the v004 tuning version. This extends support for the major version and includes no significant changes versus the previous minor version.
May 28, 2025
Announcement
A new minor engine version is available for Retail and Commercial lines of business, within the v3 tuning version and first v4 major version. These engine versions fix a known issue where prediction results may occasionally contain duplicate entries.
April 17, 2025
Announcement
New minor engine versions released for retail and commercial lines of business within the v004 tuning version. These extend support for the major version and include no significant changes versus the previous minor versions.
April 09, 2025
Fixed
A bug was identified that can occasionally lead to parties appearing multiple times in prediction results. For engine versions v004.005 and later, this can also impact risk scores.
As of April 09, 2025 this bug has been fixed in-place for all existing engine versions in major version v004.004 and later.
Google recommends checking the risk scores output generated prior to this fix, or with engine versions that have not been fixed.
For impacted engine versions within major versions v003.000, v004.002 or v004.004: Check whether the same party_id occurs multiple times in predictions output for a given risk_period_end_time. If so, remove these duplicate rows. The risk scores themselves are not affected.
For impacted engine versions within major version v004.005 or later: Re-run prediction results. Risk scores might have been impacted for this run.
December 24, 2024
Announcement
A new major engine version is now available for Retail and Commercial lines of business, within the v4 tuning version. This includes:
New recall per typology metric added to backtesting.
Input schema extended to include typology labels for risk case events.
New features introduced in v004.007 are separated into a new feature family to improve investigator usability.
November 25, 2024
Announcement
A new major engine version is available for Retail and Commercial lines of business, within the v4 tuning version. This includes technical improvements and simplifications for tuning and training.
November 18, 2024
Announcement
Two major engine versions within the v4 tuning version are no longer used by customers and are deprecated as of today. We recommend customers use the most recent engine versions instead. Deprecation overrides the support timeline for all minor versions within these major engine versions.
October 31, 2024
Announcement
A new major engine version is available for Retail and Commercial lines of business, within the v4 tuning version. These engine versions:
Introduce a new feature area within the unusual-counterparty-activity feature family focused on surfacing suspicious parties through their inbound and outbound transactions with exited parties.
Apply a new data validation to ensure there are no periods in the required time range without any valid entries in the Party, Transaction, or AccountPartyLink table.
The retail engine version also has more reliable tuning performance, in particular for small datasets. This improvement was already present in commercial engine versions.
October 14, 2024
Announcement
The API is now available in the australia-southeast1 region. For more information on supported regions, see AML AI locations .
October 01, 2024
Change
A new major engine version is now available for Retail and Commercial lines of business, within the v4 tuning version. This includes:
New recommended field counterparty_account.region_code added to the Transaction table.
The new engine version uses this field to account for risks associated with the region of the counterparty account.
September 16, 2024
Announcement
A new major engine version is now available for Retail and Commercial lines of business, within the v4 tuning version. This includes:
Reduction of the total requirement for Transaction and Account data from 41 to 30 months
Performance improvements across several feature families, focusing on more recent high risk activity
Adjustment to the calculation of the PartyRecall metric in the rare corner case when many customers have the same prediction score and it's not possible to yield exactly partyInvestigationsPerPeriod positive predictions
Uses the latest FATF high risk geos, published in Jan 2024 ( High-Risk Jurisdictions subject to a Call for Action and Jurisdictions under Increased Monitoring )
July 11, 2024
Announcement
A new major engine version is now available for Retail and Commercial lines of business, within the v4 tuning version. This includes:
Additional data validation errors with more granular checks and corresponding actionable error messages
Improved accuracy and better descriptions for existing data validation checks
A fix for processing of alert events in the Risk Case Event table
Improved reliability of training, prediction, and backtesting operations for very large datasets (greater than 20 million parties)
Reduction in the time taken for tuning when creating an engine config
April 25, 2024
Announcement
A new major engine version is now available for Retail and Commercial lines of business, within the v4 tuning version. This includes:
More sensitive skew metrics for better model and data quality monitoring
A bugfix for risk score threshold estimation used in recall metrics in AML AI resource metadata
March 15, 2024
Announcement
Improved the party de-registration process. You can now remove parties without prediction intent (that is, those parties not included in a create prediction results request ) within a 45-day window following registration.
March 13, 2024
Announcement
Released a new v4 engine versions for the commercial line of business, with more reliable tuning performance, in particular for small datasets.
March 12, 2024
Announcement
Added a new metric to AML AI, providing insight into the importance of each feature family to an AML AI Model. This metric is available in new v4 engine versions . It allows you to:
Act on model monitoring outputs in the context of their importance to a model
Check the contribution of your Party Supplementary Data to a model
March 04, 2024
Announcement
AML AI has improved handling of supplementary risk indicators included in your datasets. This includes:
Release of new engine versions within both v003 and v004, improving usability of party supplementary data. You can now use letters, numbers, and underscores for the party supplementary data ID .
Addition of new data validations for party supplementary data IDs.
Feature
Save time and cost when adopting new EngineVersions:
For new engine versions, including versions in v003 and v004, you can now inherit hyperparameters from an existing engine config instead of re-tuning. This leads to quicker creation, and there are no additional costs for tuning.
All of your existing engine versions can be used as a source for inheriting hyperparameters.
See Configure an Engine to find out more about how this works.
February 28, 2024
Announcement
Added a new engine version page so you can keep track of the latest engine version releases.
January 22, 2024
Announcement
Added a quickstart guide and a sample dataset to use with it. You can use these together for end-to-end functional testing of the AML AI API prior to, or in parallel to, moving sensitive customer data to Google Cloud.
December 01, 2023
Announcement
V4 engine versions for retail and commercial lines of business are now available. These engine versions extend support to datasets with up to 130 million parties and 2+ years of transactions. The retail engine versions include new KYC feature families including occupation, tenure, and assets for improved risk detection performance.
The following fields are now included in the AML input schema :
occupation
civil_status_code
education_level_code
assets_value_range
November 15, 2023
Announcement
V3 engine versions for retail and commercial lines of business are now available. These engine versions improve the labeling methodology and address bugs in earlier engine versions, improving both reliability and performance.
June 29, 2023
Announcement
AML AI is generally available with release version v1 .
Feature
The API supports the following capabilities:
Model tuning through engineConfig resources
Backtesting and prediction using a model
Exporting metadata from an engine config, model, backtest, or prediction resource
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

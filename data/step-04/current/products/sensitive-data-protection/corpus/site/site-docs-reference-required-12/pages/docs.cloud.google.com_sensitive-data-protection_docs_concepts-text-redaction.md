---
title: "Text classification and redaction \_|\_ Sensitive Data Protection \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-text-redaction
knowledge_key: corpus
source_id: site-docs-reference-required-12
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/analyzing-and-reporting
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-text-redaction
  title: "Text classification and redaction \_|\_ Sensitive Data Protection \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Text classification and redaction
Stay organized with collections
Save and categorize content based on your preferences.
Text classification
Given the following text input:
Please update my records with the following information:
Email address: foo@example.com
National Provider Identifier: 1245319599
Driver's license: AC333991
The output is a list of findings, organized into the following categories:
InfoType
Likelihood
Offset (Where in the string the potential InfoType was found)
Example output is shown in the table below.
InfoType
Likelihood
Offset
US_HEALTHCARE_NPI
VERY_LIKELY
122
EMAIL_ADDRESS
LIKELY
72
US_DRIVERS_LICENSE_NUMBER
LIKELY
155
CANADA_BC_PHN
VERY_UNLIKELY
122
UK_TAXPAYER_REFERENCE
VERY_UNLIKELY
122
CANADA_PASSPORT
VERY_UNLIKELY
155
Automatic text redaction
Automatic redaction produces an output with sensitive data matches removed
instead of giving you a list of findings.
Example automation redaction input:
Please update my records with the following information:
Email address: foo@example.com
National Provider Identifier: 1245319599
Driver's license: AC333991
Example output using a placeholder of "***":
Please update my records with the following information:
Email address: ***
National Provider Identifier: ***
Driver's license: ***
Resources
For more information about using Sensitive Data Protection to redact text,
see
Redacting Sensitive Data From Text Content .
For more information about using Sensitive Data Protection to de-identify
sensitive data in text content—which includes "masking" sensitive
data, replacing sensitive data with a "token" string, and encrypting and
replacing sensitive data using a randomly generated or pre-determined
key—see
De-identifying sensitive data in text content .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

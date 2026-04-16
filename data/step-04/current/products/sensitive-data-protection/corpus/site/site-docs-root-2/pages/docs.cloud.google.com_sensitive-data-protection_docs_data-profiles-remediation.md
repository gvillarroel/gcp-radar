---
title: "Remediate findings from the data profiler \_|\_ Sensitive Data Protection\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles-remediation
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-method-types
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles-remediation
  title: "Remediate findings from the data profiler \_|\_ Sensitive Data Protection\
    \ \_|\_ Google Cloud Documentation"
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
Remediate findings from the data profiler
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the steps you can take to remediate findings from data profiles.
High data risk
Data assets with high data risk have evidence of sensitive information
without additional protections. To lower the data risk score, consider doing the
following:
For BigQuery columns that contain sensitive data, apply a
BigQuery policy tag
to restrict access to accounts with specific access rights.
Before you make this change, make sure your service agent has the permissions
required to profile tables with column-level restrictions. Otherwise,
Sensitive Data Protection shows an error. For more information, see
Troubleshoot issues with the data profiler .
De-identify the raw sensitive data using de-identification techniques like
masking and tokenization .
Enable
automatic tagging
and opt to automatically set the data risk of the profiled data assets to
Low .
If the high-risk data is not needed, consider removing it.
Note:
If you delete a column from a table and that table is reprofiled, no
column data profile
is generated for the deleted column. If you want to keep a
history of past data profiles—for example, for auditing
purposes— configure the profiler to export
data profiles to BigQuery .
High free-text score
A column with a high free-text score ,
especially one that has evidence of multiple infoTypes (like
PHONE_NUMBER , US_SOCIAL_SECURITY_NUMBER , and DATE_OF_BIRTH ), might contain
unstructured data and instances of personally identifiable
information (PII). This column can be a note or comment field. Freeform text
presents a potential risk. For example, in such fields, someone might enter
"Customer was born on January 1, 1985".
Sensitive Data Protection is built to handle unstructured data. To
better understand this kind of data, consider doing the following:
For BigQuery and Cloud Storage data, you can identify the
exact locations of the PII by running an on-demand
inspection on the
BigQuery table or Cloud Storage bucket.
De-identify the raw sensitive data using techniques like masking
and tokenization .
What's next
Learn about how Sensitive Data Protection calculates the data risk and
sensitivity levels of your data assets .
Learn about how tokenization makes data usable without sacrificing privacy .
Learn about how
Forrester named Google Cloud a leader in unstructured data security platforms .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

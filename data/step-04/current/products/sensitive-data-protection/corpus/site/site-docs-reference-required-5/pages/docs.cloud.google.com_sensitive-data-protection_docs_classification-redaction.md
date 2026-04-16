---
title: "Classification, redaction, and de-identification \_|\_ Sensitive Data Protection\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/classification-redaction
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/classification-redaction
  title: "Classification, redaction, and de-identification \_|\_ Sensitive Data Protection\
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
Classification, redaction, and de-identification
Stay organized with collections
Save and categorize content based on your preferences.
The Sensitive Data Protection helps you understand, manage, and protect sensitive data.
With the Sensitive Data Protection, you can easily classify and redact sensitive
data contained in text-based content and images, including content stored in
Google Cloud storage repositories.
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
Image classification
Sensitive Data Protection uses Optical Character Recognition (OCR)
technology to recognize text prior to classification. Similar to text
classification, it returns findings, but it also adds a bounding box
where the text was found.
Storage classification
Storage classification scans data stored in Cloud Storage, Firestore in Datastore mode (Datastore),
and BigQuery. Instead of streaming data into Sensitive Data Protection, you
specify in your request the storage location for the Cloud Storage
bucket, Datastore kind, or BigQuery table you
want Sensitive Data Protection to scan.
When scanning files in Cloud Storage locations, Sensitive Data Protection
supports scanning of binary, text, image, Microsoft Word, Microsoft Excel,
Microsoft Powerpoint, PDF, and Apache Avro
files. A list of file extensions for the file types within Cloud Storage
that Sensitive Data Protection can scan is available on the API reference page for
FileType .
Files of types that are unrecognized are scanned as binary files.
The results of the scan can be either saved to a new BigQuery
table or published to a Pub/Sub topic. From there, you can use
built-in BigQuery tools to run rich SQL analytics or tools
such as Looker Studio to generate reports.
For more information about scanning storage repositories for sensitive data
using Sensitive Data Protection, see Inspecting storage and databases for
sensitive data .
For more information about visualizing scan results using other Google Cloud
tools, see Analyzing and reporting on Sensitive Data Protection
findings .
What's next
Learn more about image inspection and redaction .
Learn about transformation methods
that you can use with Sensitive Data Protection.
Work through the Redacting Sensitive Data with Sensitive Data Protection
codelab.
Learn more about creating a de-identified copy of data in
storage .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

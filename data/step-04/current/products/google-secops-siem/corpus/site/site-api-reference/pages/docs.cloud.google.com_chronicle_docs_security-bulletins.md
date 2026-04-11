---
title: "Security bulletins \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/security-bulletins
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/security-bulletins
  title: "Security bulletins \_|\_ Google Security Operations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Resources
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
This page provides all security bulletins related to Google Security Operations.
GCP-2025-075
Published: 2025-12-07
Description
Description
Severity
Notes
A vulnerability in the custom integrations feature of Google Security Operations SOAR
could let an authenticated user with an IDE role to achieve Remote Code
Execution (RCE) on the server. The vulnerability was due to insufficient validation of
the Python package code, allowing an attacker to upload a package with a
malicious setup.py file. This file could then be executed
during installation, compromising of the server.
What should I do?
No customer action is required. All customers have been automatically upgraded
to the fixed version: 6.3.64 or higher.
High
CVE-2025-13428
GCP-2025-049
Published: 2025-09-04
Description
Description
Severity
Notes
A critical vulnerability was found in Google Security Operations SOAR
versions 6.3.54.0 and 6.3.53.2. An authenticated user with permissions to
upload ZIP files (for example, when importing Use Cases) could upload a
ZIP archive capable of writing files to arbitrary locations on the
server's file system.
The system for extracting files from ZIP archives couldn't prevent files
within the archive from being written outside their intended destination
folder. This is also known as a Directory Traversal or Zip Slip
vulnerability.
What should I do?
No customer action is required. All customers have been automatically
upgraded to the fixed version or higher: 6.3.54.1 or 6.3.53.3
What vulnerabilities are being addressed?
An attacker could exploit this vulnerability to overwrite application
files. By overwriting a JavaScript file used by the report
generation feature, an attacker could achieve Remote Code Execution
(RCE) on the Google SecOps SOAR instance. The attacker
could run their own code on the server.
High
CVE-2025-9918
GCP-2023-028
Published: 2023-09-19
Updated: 2024-05-29
Description
Description
Severity
Notes
2024-05-29 Update : The new feeds no longer use the
shared service account, but it remains active for existing feeds to avoid
service disruptions. Changes to the source in older feeds are blocked to
prevent misuse of the shared service account. Customers can continue using
their old feeds normally, as long as they don't change the source.
Customers can configure Google SecOps to ingest data from
customer-owned Cloud Storage buckets using an ingestion feed. Until
recently, Google SecOps provided a shared service account that
customers used to grant permission to the bucket. An opportunity existed
such that one customer's Google SecOps instance could be configured
to ingest data from another customer's Cloud Storage bucket. After
performing an impact analysis, we found no current or prior exploitation
of this vulnerability. The vulnerability was present in all versions of
Google SecOps prior to Sept 19, 2023.
What should I do?
As of Sept 19, 2023, Google SecOps has been updated to address
this vulnerability. No customer action is required.
What vulnerabilities are being addressed?
Previously, Google SecOps provided a shared service account
that customers used to grant permission to a bucket. Because different
customers gave the same Google SecOps service account permission to
their bucket, an exploitation vector existed that allowed one customer's
feed to access a different customer's bucket when a feed was being created
or modified. This exploitation vector required knowledge of the bucket
URI. Now, during feed creation or modification, Google SecOps uses
unique service accounts for each customer.
High
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

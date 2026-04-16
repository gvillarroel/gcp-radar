---
title: "Sensitive Data Protection data security \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/data-security
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/data-security
  title: "Sensitive Data Protection data security \_|\_ Google Cloud Documentation"
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
Resources
Send feedback
Sensitive Data Protection data security
Stay organized with collections
Save and categorize content based on your preferences.
This topic provides information about Sensitive Data Protection and data security,
including certifications, compliance (including GDPR), and encryption. For
additional information about data security and Google Cloud, see Google Cloud
Security .
Certifications
Sensitive Data Protection meets various certifications and compliance standards,
including the following. This is not an exhaustive list.
ISO/IEC 27001
ISO/IEC 27017:2015
ISO/IEC 27018:2014
Payment Card Industry Data Security Standard (PCI
DSS)
HIPAA business associate agreement
(BAA)
Multi-Tier Cloud Security (MTCS) Singapore Standard (SS)
584
For more information about the compliance offerings that Google Cloud
services satisfy, see Compliance resource center .
GDPR
Compliance with the European Union General Data Protection Regulation (GDPR) is
a top priority for Google Cloud and our customers.
While Sensitive Data Protection offers several built-in infoType
detectors that may be applicable to GDPR
compliance, you may need to build your own custom infoType
detectors , and should test thoroughly to
ensure that the tool fits your specific needs.
You are encouraged to read the Google Cloud and GDPR
overview to learn more about the available resources for GDPR
compliance with Google Cloud.
Encryption
For information about encryption in transit and Google Cloud services, see
Encryption in Transit in Google Cloud .
For information about encryption at rest and Google Cloud services, see
Encryption at Rest in
Google Cloud .
How data is stored
Sensitive Data Protection processes and stores your data depending on
the service method that you use.
Content methods
When you use content
methods to process your data,
your data isn't stored on Google Cloud. Your request configuration and
payload are processed synchronously in memory and are not cached.
Storage methods
Storage methods are asynchronous operations that let you inspect Google Cloud
data, such as data in BigQuery tables and Cloud Storage
buckets. You control how that data is stored, accessed, and protected, just like
any resource that you own in Google Cloud.
Sensitive Data Protection processes your data in the same region where it
resides and stores the inspection job in that region.
The inspection job includes the configuration details that you set and the
result summary. The result summary
that
Sensitive Data Protection stores doesn't include any of the inspected data
and the actual strings containing the sensitive information (also called
quotes in
Sensitive Data Protection). You can delete the job, including the result
summary, through the
Google Cloud console or through
the
DLP API .
When configuring your inspection job, you can instruct
Sensitive Data Protection to export the findings to a BigQuery
table of your choice. Depending on your settings, the quotes can be included in
the exported findings. You own the BigQuery table and control how
it's stored, accessed, and protected.
Hybrid methods
Hybrid methods are asynchronous operations that let you inspect data that is
stored anywhere, including data stored outside Google Cloud. In your
inspection job, you specify where you want Sensitive Data Protection to
process the data and save the job.
The inspection job includes the configuration details that you set and the
result summary. The result summary
that
Sensitive Data Protection stores doesn't include any of the inspected data
and the actual strings containing the sensitive information (also called
quotes in
Sensitive Data Protection). You can delete the job, including the result
summary, through the
Google Cloud console or through
the
DLP API .
When configuring your inspection job, you can instruct
Sensitive Data Protection to export the findings to a BigQuery
table of your choice. Depending on your settings, the quotes can be included in
the exported findings. You own the BigQuery table and control how
it's stored, accessed, and protected.
Discovery
Sensitive Data Protection processes your data assets in the region or
multi-region where they reside and stores the generated data profiles in the
same region or multi-region. For more information about how the
discovery service supports data residency requirements, see Data
residency considerations .
How custom infoTypes are stored
You create a custom infoType by
specifying a regular expression or a list of terms (words and phrases) that you
want to scan for. You can provide the terms by listing them directly in the
Sensitive Data Protection request. Alternatively, you can reference a
BigQuery table or a Cloud Storage file or folder containing
the list of terms.
The terms that make up a custom infoType are potentially sensitive. They are
stored depending on how you provide them to Sensitive Data Protection:
If you list the terms directly in a content
method , then the data is processed synchronously
in memory and isn't stored or cached.
If you list the terms directly in an inspection job, then the terms are saved
with the inspection job. For more information about how inspection jobs are
stored, see Storage methods and Hybrid
methods .
If you list the terms directly in an inspection template, then the terms are
saved with the inspection template. The inspection template is stored in the
region that you set when creating the template. You can delete an inspection
template through the
Google Cloud console
or through the
DLP API .
If you store the terms in a BigQuery table or
Cloud Storage file or folder, then you control how they are
stored, accessed, and protected, just like any resource that you own in
Google Cloud.
Privacy
For information about how Google Cloud protects your privacy, see Privacy
Resource Center .
Next steps
For information about the security measures in place for Google's Cloud
Services, see the Google Cloud Security page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

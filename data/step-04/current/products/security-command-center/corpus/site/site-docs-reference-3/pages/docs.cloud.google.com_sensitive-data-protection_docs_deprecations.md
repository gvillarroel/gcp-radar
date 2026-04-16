---
title: "Sensitive Data Protection deprecations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/deprecations
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/deprecations
  title: "Sensitive Data Protection deprecations \_|\_ Google Cloud Documentation"
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
Sensitive Data Protection deprecations
Stay organized with collections
Save and categorize content based on your preferences.
The
Google Cloud Platform Terms of Service (section "Discontinuation of Services")
defines the deprecation policy that applies to Sensitive Data Protection.
The deprecation policy only applies to the services,
features, or products listed therein.
After a service, feature, or product is officially
deprecated, it continues to be available for at least the period of time defined in the
Terms of Service. After this period of time, the service is scheduled for shutdown.
Feature
Deprecated date
Shutdown date
Details
Send inspection results
from Sensitive Data Protection to Data Catalog
February 3, 2025
September 30, 2025
Data Catalog is deprecated. For more information, see
Transition from
Data Catalog to Knowledge Catalog .
We recommend that you send the inspection results
to Knowledge Catalog instead.
To migrate existing job triggers that use the Publish to
Data Catalog ( PublishFindingsToCloudDataCatalog )
action, see Migrate
to the Publish to Dataplex Universal Catalog action .
Tag tables in
Knowledge Catalog based on insights from data profiles
February 3, 2025
September 30, 2025
Data Catalog is deprecated. For more information, see
Transition from
Data Catalog to Knowledge Catalog .
We recommend that you add
Knowledge Catalog aspects based on insights from data profiles
instead. To migrate existing discovery configurations that use the deprecated
Send to Dataplex as tags action, see
Migrate to
the Send to Dataplex Catalog as aspects action .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

---
title: "TagTemplateMigration \_|\_ Data Catalog Documentation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/TagTemplateMigration
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-catalog/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/TagTemplateMigration
  title: "TagTemplateMigration \_|\_ Data Catalog Documentation \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Data Catalog API methods that are related to Data Catalog search and metadata are deprecated and will be discontinued on January 30, 2026. See Transition from Data Catalog to Dataplex Universal Catalog . Methods that are related to policy tags and policy tag taxonomies are not deprecated.
Home
Technology areas
Data Catalog
Documentation
Reference
Send feedback
TagTemplateMigration
Stay organized with collections
Save and categorize content based on your preferences.
Configuration related to the opt-in status for the migration of TagTemplates to Dataplex Universal Catalog.
Enums
TAG_TEMPLATE_MIGRATION_UNSPECIFIED
Default value. Migration of Tag Templates from Data Catalog to Dataplex Universal Catalog is not performed.
For projects that are under an organization, the project inherits the organization's configuration when you set the project-level configuration to unspecified ( TAG_TEMPLATE_MIGRATION_UNSPECIFIED ). This means that when migration is enabled at the organization level, and the project-level configuration is unspecified, the project is migrated. To explicitly opt-in or opt-out individual projects, set the project-level configuration to enabled ( TAG_TEMPLATE_MIGRATION_ENABLED ) or disabled ( TAG_TEMPLATE_MIGRATION_DISABLED ).
TAG_TEMPLATE_MIGRATION_ENABLED
Migration of Tag Templates from Data Catalog to Dataplex Universal Catalog is enabled.
TAG_TEMPLATE_MIGRATION_DISABLED
Migration of Tag Templates from Data Catalog to Dataplex Universal Catalog is disabled.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]

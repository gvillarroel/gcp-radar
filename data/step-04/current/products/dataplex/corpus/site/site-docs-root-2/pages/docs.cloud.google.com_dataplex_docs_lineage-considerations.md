---
title: "Data lineage considerations \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/lineage-considerations
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/lineage-considerations
  title: "Data lineage considerations \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Guides
Send feedback
Data lineage considerations
Stay organized with collections
Save and categorize content based on your preferences.
This document provides information on data lineage compliance and limitations.
Data lineage is enabled on a per-project basis, not a
per-system basis.
This means that after you enable the Data Lineage API, lineage information
can be automatically reported for multiple systems in the project, depending on
each system's product-level lineage control.
Automatic lineage tracking is supported for the following systems:
Product-level lineage controls in Google Cloud supported systems
System
Available lineage controls
BigQuery, Cloud Data Fusion
There is no configurability to restrict lineage tracking to only Cloud Data Fusion
or BigQuery when the Data Lineage API is enabled in a project.
Cloud Composer
Cloud Composer uses environment-level data lineage
integration control. Data lineage is automatically
enabled for all new Cloud Composer environments, provided they meet the
requirements. See
Data lineage with Knowledge Catalog (formerly Dataplex Universal Catalog) for more
information. For existing environments, you can enable or disable
data lineage integration in environment settings.
Dataflow
Dataflow jobs can capture lineage events and publish them to the Data Lineage API.
See Use data lineage in Dataflow for more information.
Managed Service for Apache Spark
Managed Service for Apache Spark Spark jobs can capture lineage events and publish them to the Data Lineage API.
See Data lineage Managed Service for Apache Spark integration for more information.
Looker (Google Cloud core) ( Preview )
Looker (Google Cloud core) metadata from BigQuery sources can be visualized using data lineage. Data lineage must be enabled at the Looker (Google Cloud core) resource level and at the data lineage service level. See Track data lineage with Knowledge Catalog for more information.
Vertex AI
Data lineage is automatically enabled for Vertex AI artifacts and parameters, such as models, datasets, pipeline templates, and components. The lineage of a pipeline includes factors that contributed to its creation, as well as artifacts and metadata derived afterwards.
See Track the lineage of pipeline artifacts for more information.
Important: See Supported systems
for details on the support status of these systems. When a new system becomes
available, depending on the level of that system's
lineage control, the Data Lineage API can automatically start harvesting
lineage data.
Billing impact
When you enable the Data Lineage API on a project, review
the impact on your billing charges because the Data Lineage API is enabled
on a per-project basis (see the previous section for details).
For more information about how data lineage is charged, see
Knowledge Catalog pricing .
For BigQuery Omni, lineage processing
is distributed to specific regions, and costs depend on the regions where
the processing is performed.
Data lineage compliance
Data lineage records metadata about data movement but
doesn't capture the data itself. See data lineage information model and
Data Lineage API reference
for details on what fields are included in the metadata.
Data lineage as part of Knowledge Catalog offers VPC-SC support.
Knowledge Catalog doesn't offer the ability to use
Customer Managed Encryption Keys to protect the harvested lineage metadata.
Data lineage limitations
When you select a node in the lineage graph, the node details side panel
will be empty when:
the resources is located in another organization, or
the user is not a member of the organization hosting the resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

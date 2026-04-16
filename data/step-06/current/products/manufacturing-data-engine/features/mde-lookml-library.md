---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.444Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "MDE LookML library"
feature_slug: "mde-lookml-library"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-set-up-a-new-mde-looker-project"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/overview"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect"
keywords:
  - "mde"
  - "lookml"
  - "library"
  - "provides"
  - "common"
  - "components"
  - "and"
  - "configuration"
---

# MDE LookML library

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Provides common MDE LookML components and configuration packages.

## Extended Definition

Provides common MDE LookML components and configuration packages.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-set-up-a-new-mde-looker-project](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-set-up-a-new-mde-looker-project)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/overview](https://docs.cloud.google.com/manufacturing-data-engine/docs/overview)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect)

## Supporting Pages

### "Use the LookML Library \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)
- Source ID: `site-docs-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how you can extend the base view to define a dimension called device : include : "//mde lookml lib/mde abstract core/views/dimension/ .view" view : dim source { derived table : { sql : SELECT FROM mde dimension.metadata-store where bucket number = BUCKET NUMBER ;; } view label : "DIM - Device" extends : [ dim base ] dimension : device name { type : string sql : JSON VALUE(${TABLE}.instance,"$.device name") ;; } } And, similarly, the library provides base views per MDE archetype for modeling record tables in BigQuery as fact tables.
- Use the LookML Library The LookML Library for MDE provides abstract core files, and packaged views, explores and dashboards to help you get started with building your own LookML models on top of the MDE data in BigQuery.
- For example, in your project model file you can extend the dim tag by defining additional dimension fields on the deviceMetadata object, as the following script shows: view : +dim tag { dimension : device type { type : string sql : JSON VALUE(${TABLE}.instance,"$.deviceMetadata.deviceType") ;; } dimension : location { type : string sql : JSON VALUE(${TABLE}.instance,"$.deviceMetadata.location") ;; } } Dashboards access is defined in the default configuration package The LookML model defined in the MDE Project Template imports all the dashboards from the default package in MDE LookML Library .
- The library provides content in two directories: mde abstract core mde packages Abstract core directory The mde abstract core directory provides base views that you can use to model MDE metadata buckets as dimensions and MDE record tables as fact tables in Looker.

### "Set up a Looker project \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-set-up-a-new-mde-looker-project](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-set-up-a-new-mde-looker-project)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- We also provide a library that includes MDE-specific LookML base components and starter configuration packages to reduce the time it takes to model your MDE data in LookML.
- The LookML model in MDE Looker Project Template imports the LookML explore file and dashboards from the default configuration package in the MDE LookML Library .
- Configure authentication for the MDE LookML Library using the SSH method and obtain the public SSH key of your Looker project.
- A user account with at least the following Identity and Access Management (IAM) roles for the Google Cloud project referenced: roles/iam.serviceAccountCreator roles/iam.serviceAccountKeyAdmin roles/resourcemanager.projectIamAdmin roles/source.admin Workstation with a local installation of: git Google Cloud CLI How to bootstrap a new LookML project Set the default gcloud project to your MDE deployment project.

### Overview \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/overview](https://docs.cloud.google.com/manufacturing-data-engine/docs/overview)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MDE provides a zero code pre-configured set of Google Cloud infrastructure that is able to ingest, process, and store data from industrial devices in the cloud based on the user's configuration.
- Components The following are components of MDE: Configuration Manager : Manages the user configurations and exposes them to other solution components.
- Adaptability : As MDE deploys fully in your own Google Cloud tenant project, all MDE components (such as Pub/Sub, Dataflow, and BigQuery) are transparent and can be used as if you had built the platform yourself.
- MDE provides a secure, efficient and reliable data lake containing all manufacturing information, and acts as a data hub for all use cases to connect and access manufacturing information.

### "Manufacturing Connect \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect](https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/manufacturing-connect)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With a library of 270+ supported automation protocols (and the option to add more), entire factories can be quickly connected to Manufacturing Data Engine (MDE).
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Relationship with MDE For customers using both MC and MDE : The MC web interface includes the interface to MDE, enabling a seamless edge-to-cloud user experience.
- MC : A cloud-based app that deploys in customers' Google Cloud tenants for managing all edge instances and MDE from a single web interface.


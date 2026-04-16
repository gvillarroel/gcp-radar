---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.440Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Configuration Packages"
feature_slug: "configuration-packages"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/development-mode"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/overview"
keywords:
  - "configuration"
  - "packages"
  - "provides"
  - "file"
  - "based"
  - "package"
  - "system"
  - "for"
---

# Configuration Packages

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Provides a file-based configuration package system for atomic deployments and GitOps integration.

## Extended Definition

Provides a file-based configuration package system for atomic deployments and GitOps integration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/development-mode](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/development-mode)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/overview](https://docs.cloud.google.com/manufacturing-data-engine/docs/overview)

## Supporting Pages

### Package lifecycle \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Execute the REST API request with the following information: Method : DELETE Endpoint : /configuration/v1/configuration-packages/$PACKAGE-ID Response code : 200 OK Response body (JSON) : { "id" : "87e160db-8ff9-403a-a873-e6674f6ac3cb" , "name" : "postman-test-configuration-package" , "provider" : "google" , "latestStatus" : "DELETED" , "status" : [ { "code" : "NOT LOADED" , "updatedTime" : "1742550114832" , "messages" : [] }, { "code" : "VALIDATED" , "updatedTime" : "1742550114832" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully validated all buckets in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all ingestion-specifications in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all metadata-instances in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all parsers in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all types in the package" } ] }, { "code" : "LOADED" , "updatedTime" : "1742550115241" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully applied all ingestion-specification in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all buckets in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all metadata-instances in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all types in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all parsers in the package" } ] }, { "code" : "ACTIVATED" , "updatedTime" : "1742550115327" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully activated all ingestion-specification, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all message classes, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all buckets, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all metadata instance, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all types, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all parsers, if there is any, in the package" } ] }, { "code" : "DELETED" , "updatedTime" : "1742567553260" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully deleted all parsers, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully deleted all message classes, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully deleted all types, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all metadata instance, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully deleted all buckets, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully deleted all ingestion-specification, if there is any, in the package" } ] } ] } Console Click Cloud Configuration .
- Request body : multiform data with key=”packageArchive”, value=configuration-package-zip file .
- Response body (JSON) : { "configurationPackages" : [ { "id" : "0505ed17-ad20-458d-9128-d44783704acb" , "name" : "default-configuration-package" , "provider" : "google" , "latestStatus" : "ACTIVATED" , "status" : [ { "code" : "NOT LOADED" , "updatedTime" : "1742501535249" , "messages" : [] }, { "code" : "VALIDATED" , "updatedTime" : "1742501535249" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully validated all buckets in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all metadata-instances in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all parsers in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all types in the package" } ] }, { "code" : "LOADED" , "updatedTime" : "1742501536740" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully applied all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all buckets in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all metadata-instances in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all types in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all parsers in the package" } ] }, { "code" : "ACTIVATED" , "updatedTime" : "1742501537289" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully activated all ingestion-specification, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all message classes, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all buckets, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all metadata instance, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all types, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all parsers, if there is any, in the package" } ] } ] }, { "id" : "4adaecc2-54b9-482b-90d6-380f5d4b2be6" , "name" : "basic-configuration" , "provider" : "google" , "latestStatus" : "ACTIVATED" , "status" : [ { "code" : "NOT LOADED" , "updatedTime" : "1742566718210" , "messages" : [] }, { "code" : "VALIDATED" , "updatedTime" : "1742566718210" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully validated all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all parsers in the package" }, { "severity" : "INFO" , "message" : "Successfully validated all types in the package" } ] }, { "code" : "LOADED" , "updatedTime" : "1742566718696" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully applied all message classes in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all types in the package" }, { "severity" : "INFO" , "message" : "Successfully applied all parsers in the package" } ] }, { "code" : "ACTIVATED" , "updatedTime" : "1742566718792" , "messages" : [ { "severity" : "INFO" , "message" : "Successfully activated all ingestion-specification, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all message classes, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all buckets, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all metadata instance, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all types, if there is any, in the package" }, { "severity" : "INFO" , "message" : "Successfully activated all parsers, if there is any, in the package" } ] } ] } ], "nextPageToken" : "" } Console You can see the list of existing configuration packages on the Cloud Configuration section, in the Configurations page.
- Delete an existing configuration package Starting in v1.5.0, MDE supports an environment flag that can change the environment to development mode , which lets you delete configuration entities and delete configuration packages.

### "Use the LookML Library \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, in your project model file you can extend the dim tag by defining additional dimension fields on the deviceMetadata object, as the following script shows: view : +dim tag { dimension : device type { type : string sql : JSON VALUE(${TABLE}.instance,"$.deviceMetadata.deviceType") ;; } dimension : location { type : string sql : JSON VALUE(${TABLE}.instance,"$.deviceMetadata.location") ;; } } Dashboards access is defined in the default configuration package The LookML model defined in the MDE Project Template imports all the dashboards from the default package in MDE LookML Library .
- Use the LookML Library The LookML Library for MDE provides abstract core files, and packaged views, explores and dashboards to help you get started with building your own LookML models on top of the MDE data in BigQuery.
- The following example shows how you can define a fact view called sensor readings : include : "//mde lookml lib/mde abstract core/views/fact/fct numeric archetype.view" view : fct sensor readings { extends : [ fct numeric archetype ] label : "FCT - Sensor Readings" sql table name : mde data.sensor-readings ;; } Packages The mde packages directory contains prebuilt LookML packages for MDE.
- The library provides content in two directories: mde abstract core mde packages Abstract core directory The mde abstract core directory provides base views that you can use to model MDE metadata buckets as dimensions and MDE record tables as fact tables in Looker.

### Development mode \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/development-mode](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/development-mode)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You will need to switch the environment mode to development first For more information about configuration packages, see Configuration package lifecycle .
- Configuration packages can be activated.
- Configuration packages can be uploaded.
- Configuration packages can be removed.

### Overview \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/overview](https://docs.cloud.google.com/manufacturing-data-engine/docs/overview)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MDE provides a zero code pre-configured set of Google Cloud infrastructure that is able to ingest, process, and store data from industrial devices in the cloud based on the user's configuration.
- Real-time Analytics : Calculates streaming analytics and transformations based on user configurations.
- Semantic flexibility : Uses integrated data contextualization engine to optionally enrich incoming sensors or variable data streams, enabling multiple user-definable contextualization perspectives based on the following standards: ISA-95 hierarchy Digital Twins Definition Language (DTDL) OPC Unified Architecture (OPC-UA) companion specs Asset Administration Shell (AAS) Data Transformation and Enrichment : Maps, transforms, and contextualizes data according to user-defined schemas.
- This allows users to query their data independently of where it is stored and enables them using the same configuration language to create specific queries to the manufacturing information.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.441Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "BigQuery datasets"
feature_slug: "bigquery-datasets"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/overview"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/quotas"
keywords:
  - "datasets"
  - "adds"
  - "the"
  - "mde"
  - "dimension"
  - "and"
  - "system"
  - "to"
---

# BigQuery datasets

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Adds the mde_data, mde_dimension, and mde_system datasets to improve data table governance.

## Extended Definition

Adds the mde_data, mde_dimension, and mde_system datasets to improve data table governance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/overview](https://docs.cloud.google.com/manufacturing-data-engine/docs/overview)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/quotas](https://docs.cloud.google.com/manufacturing-data-engine/docs/quotas)

## Supporting Pages

### "Use the LookML Library \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how you can extend the base view to define a dimension called device : include : "//mde lookml lib/mde abstract core/views/dimension/ .view" view : dim source { derived table : { sql : SELECT FROM mde dimension.metadata-store where bucket number = BUCKET NUMBER ;; } view label : "DIM - Device" extends : [ dim base ] dimension : device name { type : string sql : JSON VALUE(${TABLE}.instance,"$.device name") ;; } } And, similarly, the library provides base views per MDE archetype for modeling record tables in BigQuery as fact tables.
- If you used the MDE Project Template to bootstrap a new MDE project, the provided Looker model automatically imports the views and explores from the default package: connection : "@{looker connection}" DEFAULT MDE EXPLORES ########## include : "//mde lookml lib/mde packages/default/explores/default.explore.lkml" CUSTOM VIEWS ################ include : "/views/dimension/ .view" include : "/views/fact/ .view" Once your project is set up, you can use the default default explores in Looker to analyze data.
- The library provides content in two directories: mde abstract core mde packages Abstract core directory The mde abstract core directory provides base views that you can use to model MDE metadata buckets as dimensions and MDE record tables as fact tables in Looker.
- The default Looker configuration package provides a fact table per record table linked to an MDE type, as well tag and source dimensions, which correspond to the tag and source metadata buckets in MDE, respectively.

### Overview \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/overview](https://docs.cloud.google.com/manufacturing-data-engine/docs/overview)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The use cases enabled by MDE fall primarily into three categories: Analytical use cases : Combine MDE with Google Cloud data analytics products to produce reports, calculate KPIs, and create real-time dashboards using data streamed from the manufacturing floor.
- Full flexibility : Can work with any edge stack, just requires data to land in Pub/Sub directly or using Message Queuing Telemetry Transport (MQTT) bridge, with custom definition parsers to map incoming data schemas to the MDE standard.
- Overview Manufacturing Data Engine (MDE) is an end-to-end solution that delivers scalable and seamless connectivity between the factory floor and the cloud, in combination with Manufacturing Connect (MC) .
- MDE provides a zero code pre-configured set of Google Cloud infrastructure that is able to ingest, process, and store data from industrial devices in the cloud based on the user's configuration.

### "Model records and metadata \_|\_ Manufacturing Data Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In such cases, you can let MDE reject the message and have it moved a dead letter queue, or you can create a generic Not Available metadata instance in your bucket to link records to it if a link to a full contextualized instance not be created.
- For example, you can create a type for 'machine-state' records and another for 'sensor-readings' We also recommend persisting data at the most atomic level and refraining from pre-aggregating data before sending it to MDE.
- Here are some specific things you can do to understand the realities of the underlying source data: Meet with source system experts : What is the quality of the data in the source systems?
- MDE keeps track of the history of metadata instances per bucket and writes that metadata to sinks that support it, such as BigQuery.

### "Quotas and system limits \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/quotas](https://docs.cloud.google.com/manufacturing-data-engine/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Quotas system does the following: Monitors your consumption of Google Cloud products and services Restricts your consumption of those resources Provides a way to request changes to the quota value and automate quota adjustments In most cases, when you attempt to consume more of a resource than its quota allows, the system blocks access to the resource, and the task that you're trying to perform fails.
- Quotas and system limits This document lists the quotas and system limits that apply to Manufacturing Data Engine.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- For detailed information, see the respective Google Cloud products quotas pages: Google Kubernetes Engine (GKE) Pub/Sub Dataflow BigQuery Bigtable Cloud Storage Request a quota adjustment To adjust most quotas, use the Google Cloud console.


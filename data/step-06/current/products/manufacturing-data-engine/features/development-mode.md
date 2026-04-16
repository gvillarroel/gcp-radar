---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:50.440Z"
product_name: "Manufacturing Data Engine"
product_slug: "manufacturing-data-engine"
feature_name: "Development Mode"
feature_slug: "development-mode"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/development-mode"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle"
  - "https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib"
keywords:
  - "development"
  - "mode"
  - "allows"
  - "deletion"
  - "of"
  - "mde"
  - "entities"
  - "and"
---

# Development Mode

Product: Manufacturing Data Engine
Coverage: MEDIUM

## Step 02 Summary

Allows deletion of MDE entities and configuration packages for development use.

## Extended Definition

Allows deletion of MDE entities and configuration packages for development use.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/development-mode](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/development-mode)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle)
- [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)

## Supporting Pages

### Development mode \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/development-mode](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/operate/development-mode)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After enabling the Development Mode the following actions are allowed: MDE entities (types, message classes, parsers, metadata buckets and file ingestion especifications) can be deleted.
- If any of these actions are triggered in Production Mode ( Development Mode is disabled), you will receive an error similar to this: 412 - The system is not in development mode and no delete operations can be executed.
- Starting on v1.5.0, Manufacturing Data Engine (MDE) has a Development Mode to protect the deployment from involuntary changes that could have an impact on the configuration of the system.
- A warning banner will appear on the top of the Configurations page with the following message: "Development mode is enabled", and the tag next to the toggle will change to Development .

### "Model records and metadata \_|\_ Manufacturing Data Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/model/how-to-model-data)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, while attributes of the machine to which the tag belongs to (for example, the manufacturer of a sensor installed in the machine) could be modelled in two separate buckets (tag bucket and machine bucket), it's generally better to model such hierarchical relationships in a single bucket.
- Modelling types Types describe semantically and structurally similar records that you want to store together and describe with a common set of metadata, and for which you want to establish a common constraint on the data field.
- General recommendations Before starting with metadata modeling, you should understand the following: The data consumption needs of downstream users .
- MDE keeps track of the history of metadata instances per bucket and writes that metadata to sinks that support it, such as BigQuery.

### Package lifecycle \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/lifecycle)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete an existing configuration package Starting in v1.5.0, MDE supports an environment flag that can change the environment to development mode , which lets you delete configuration entities and delete configuration packages.
- After the package is uploaded, MDE will process it by running the following stages: Validation : In this stage, MDE validates the contents of the package, it ensures that all the files are syntactically correct and that they are in the right place.
- Activation : In this stage MDE activates the configuration and makes it visible to the rest of the environment users.
- That's why these features are only enabled in development mode, and you should use them with caution.

### "Use the LookML Library \_|\_ Manufacturing Data Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib](https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/analyze/how-to-use-the-mde-lookml-lib)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the LookML Library The LookML Library for MDE provides abstract core files, and packaged views, explores and dashboards to help you get started with building your own LookML models on top of the MDE data in BigQuery.
- The following example shows how you can extend the base view to define a dimension called device : include : "//mde lookml lib/mde abstract core/views/dimension/ .view" view : dim source { derived table : { sql : SELECT FROM mde dimension.metadata-store where bucket number = BUCKET NUMBER ;; } view label : "DIM - Device" extends : [ dim base ] dimension : device name { type : string sql : JSON VALUE(${TABLE}.instance,"$.device name") ;; } } And, similarly, the library provides base views per MDE archetype for modeling record tables in BigQuery as fact tables.
- If you used the MDE Project Template to bootstrap a new MDE project, the provided Looker model automatically imports the views and explores from the default package: connection : "@{looker connection}" DEFAULT MDE EXPLORES ########## include : "//mde lookml lib/mde packages/default/explores/default.explore.lkml" CUSTOM VIEWS ################ include : "/views/dimension/ .view" include : "/views/fact/ .view" Once your project is set up, you can use the default default explores in Looker to analyze data.
- The library provides content in two directories: mde abstract core mde packages Abstract core directory The mde abstract core directory provides base views that you can use to model MDE metadata buckets as dimensions and MDE record tables as fact tables in Looker.


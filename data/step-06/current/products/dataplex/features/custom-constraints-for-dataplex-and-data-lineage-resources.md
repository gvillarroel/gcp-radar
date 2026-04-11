---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.594Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Custom constraints for Dataplex and data lineage resources"
feature_slug: "custom-constraints-for-dataplex-and-data-lineage-resources"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints"
  - "https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
keywords:
  - "custom"
  - "constraints"
  - "for"
  - "dataplex"
  - "and"
  - "lineage"
  - "resources"
  - "organization"
---

# Custom constraints for Dataplex and data lineage resources

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Organization Policy custom constraints can enforce granular controls on selected Dataplex and data lineage resource fields.

## Extended Definition

Organization Policy custom constraints can enforce granular controls on selected Dataplex and data lineage resource fields.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints](https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)

## Supporting Pages

### "Manage data lineage resources using custom constraints \_|\_ Knowledge Catalog\

- URL: [https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints](https://docs.cloud.google.com/dataplex/docs/lineage-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The output is the following: Operation denied by org policy on resource 'projects/ PROJECT ID /locations/ LOCATION ': ["customConstraints/custom.denyLineageProcess"] Data lineage supported resources and operations The following custom constraint fields are available to use when you create or update a data lineage process: resource.name resource.displayName resource.origin.name resource.origin.sourceType Custom constraints are checked for the following methods: CreateProcess UpdateProcess ProcessopenLineageRunEvent Example custom organization policies for common use cases The following table provides the syntax of some custom constraints for common use cases: For more information about CEL macros available for use in custom constraint conditions, see Common Expression Language .
- Disable the creation of data lineage processes by BigQuery or Managed Service for Apache Spark name : organizations/ ORGANIZATION ID /customConstraints/custom.denyLineageProcessesCreation resourceTypes : - datalineage.googleapis.com/Process methodTypes : - CREATE condition : "resource.origin.sourceType == 'BIGQUERY' resource.origin.sourceType == 'DATAPROC'" actionType : DENY displayName : Deny data lineage processes created by BigQuery or Managed Service for Apache Spark.
- To create a YAML file for a custom constraint: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : - datalineage.googleapis.com/ RESOURCE TYPE methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .
- Home Documentation Data analytics Knowledge Catalog Guides Send feedback Manage data lineage resources using custom constraints Stay organized with collections Save and categorize content based on your preferences.

### "Manage Dataplex Universal Catalog resources using custom constraints \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations Custom constraints and organization policies aren't supported on the following resources: dataplex.googleapis.com/Lake dataplex.googleapis.com/Zone dataplex.googleapis.com/Task dataplex.googleapis.com/Asset dataplex.googleapis.com/Environment Before you begin Sign in to your Google Cloud account.
- Description Constraint syntax Require a specific aspect type for entry types name : organizations/ ORGANIZATION ID /customConstraints/custom.requireAspectTypeForEntryType resourceTypes : - dataplex.googleapis.com/EntryType methodTypes : - CREATE - UPDATE condition : "resource.requiredAspects.exists(value, value.type ==" projects/ PROJECT ID /locations/ LOCATION /aspectTypes/exampleAspectType") actionType : DENY displayName : All entry types require aspect type exampleAspectType description : All entry types require the aspect type exampleAspectType Require a minimum sampling rate for data profiling scans name : organizations/ ORGANIZATION ID /customConstraints/custom.minimumSamplingDataScans resourceTypes : - dataplex.googleapis.com/DataScan methodTypes : - CREATE - UPDATE condition : "resource.dataProfileSpec.samplingPercent > = 20.0" actionType : ALLOW displayName : Require minimum sampling for data profiling scans description : All data profiling scans need at least 20% sampling rate Dataplex Universal Catalog supported resources The following table lists the Dataplex Universal Catalog resources that you can reference in custom constraints.
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-valid-entry-groups.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.denyDataplexEntryGroup resourceTypes : - dataplex.googleapis.com/EntryGroup methodTypes : - CREATE condition : "resource.description.contains('invalid name')" actionType : DENY displayName : Validate entry group description description : All new entry groups have valid descriptions.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: dataplex.googleapis.com/AspectType dataplex.googleapis.com/EntryType dataplex.googleapis.com/EntryGroup dataplex.googleapis.com/DataScan dataplex.googleapis.com/MetadataJob To learn more about Organization Policy, see Custom organization policies .

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The primary resources offered by this service are Lakes, Zones and Assets which collectively allow a data administrator to organize, manage, secure and catalog data across their organization located across cloud projects in a variety of storage systems including Cloud Storage and BigQuery. com. google. cloud. dataplex. v1.
- They collectively let data administrators organize, manage, secure, and catalog data located across cloud projects in their organization in a variety of storage systems, including Cloud Storage and BigQuery. com. google. cloud. dataplex. v1.
- Builder A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery.
- Lake A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery.


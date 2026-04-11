---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:22:50.095Z"
product_name: "Service Catalog"
product_slug: "service-catalog"
feature_name: "Private Catalog catalog sharing"
feature_slug: "private-catalog-catalog-sharing"
latest_feature_date: "2020-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/service-catalog/docs/share-catalog"
  - "https://docs.cloud.google.com/service-catalog/docs/terraform-configuration"
  - "https://docs.cloud.google.com/service-catalog/docs/form-schema-overview"
keywords:
  - "private"
  - "catalog"
  - "sharing"
  - "adds"
  - "more"
  - "console"
  - "options"
  - "for"
---

# Private Catalog catalog sharing

Product: Service Catalog
Coverage: LOW

## Step 02 Summary

Private Catalog adds more Cloud Console options for sharing catalogs.

## Extended Definition

Private Catalog adds more Cloud Console options for sharing catalogs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog)
- [https://docs.cloud.google.com/service-catalog/docs/terraform-configuration](https://docs.cloud.google.com/service-catalog/docs/terraform-configuration)
- [https://docs.cloud.google.com/service-catalog/docs/form-schema-overview](https://docs.cloud.google.com/service-catalog/docs/form-schema-overview)

## Supporting Pages

### Sharing a catalog \_|\_ Service Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin You must have the Catalog Admin ( roles/cloudprivatecatalogproducer.admin ) OR Catalog Manager ( roles/cloudprivatecatalogproducer.manager ) role for the Google Cloud project where Service Catalog is enabled, and the folder, project, or organization where you're sharing the catalog.
- Grant the following Identity and Access Management (IAM) roles to users who will use the shared catalog: Catalog Consumer ( roles/cloudprivatecatalog.consumer ) OR the IAM Viewer ( roles/viewer ) role for the relevant organization, project, or folder.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- If your catalog contains DM-based solutions, the Deployment Manager Editor ( roles/deploymentmanager.editor ) role for the project where your users deploy the solution.

### "Creating a Terraform configuration \_|\_ Service Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-catalog/docs/terraform-configuration](https://docs.cloud.google.com/service-catalog/docs/terraform-configuration)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Creating a Cloud Storage bucket To set up Cloud Storage, create a bucket in the same project where you enabled Service Catalog for your organization: In the Google Cloud console, go to the Cloud Storage Buckets page.
- To create the Terraform configuration as a Service Catalog solution: Go to the Service Catalog Admin Solutions page in the Google Cloud console.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- You must have the following Identity and Access Management (IAM) roles : Catalog Admin OR Catalog Manager for the Google Cloud organization associated with the Google Cloud project which has Service Catalog enabled.

### Overview of Form Schema \_|\_ Service Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-catalog/docs/form-schema-overview](https://docs.cloud.google.com/service-catalog/docs/form-schema-overview)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Unsupported features The following features are not currently supported in Form Schema: Global options Complex validation messages (only one message is supported) Validation message interpolation Validation message functions Custom validation Widgets not supported: actions , fieldset , radios-inline , radiobuttons , help , template , tab , tabarray Options not supported: onChange , feedback , disabledSuccessState , disabledErrorState , ngModelOptions , htmlClass , fieldHtmlClass , labelHtmlClass , copyValueTo , destroyStrategy Post-process function Events Manual field insertion Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Type-to-widget mapping If no widget is specified in the Form Schema, a default value is used based on the JSON Schema Type of the field, as follows: Schema Type Schema Form Widget string text number number integer number boolean checkbox object fieldset string + enum radio (3 or less choices) string + enum select (4 or more choices) array + enum checkboxes array array Widget A widget is specified as a string that refers to one of the following data structures.
- Inherits readonly from schema. condition String A logical expression that determines whether the field is shown. titleMap Title map Provides text labels for the options in checkboxes , radio , and select widgets. required Special handling for types Object For type object , the field additionalProperties defines whether or not extra properties can be present.


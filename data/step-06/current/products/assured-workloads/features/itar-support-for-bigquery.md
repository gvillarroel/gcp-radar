---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:30.787Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "ITAR support for BigQuery"
feature_slug: "itar-support-for-bigquery"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/compliance-programs"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar"
  - "https://docs.cloud.google.com/assured-workloads/docs/migrate-workload"
keywords:
  - "itar"
  - "bigquery"
  - "compliance"
  - "program"
  - "supports"
  - "assured"
  - "workloads"
---

# ITAR support for BigQuery

Product: Assured Workloads
Coverage: MEDIUM

## Step 02 Summary

The ITAR compliance program supports BigQuery in Assured Workloads.

## Extended Definition

The ITAR compliance program supports BigQuery in Assured Workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/compliance-programs](https://docs.cloud.google.com/assured-workloads/docs/compliance-programs)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar](https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar)
- [https://docs.cloud.google.com/assured-workloads/docs/migrate-workload](https://docs.cloud.google.com/assured-workloads/docs/migrate-workload)

## Supporting Pages

### Control packages \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/compliance-programs](https://docs.cloud.google.com/assured-workloads/docs/compliance-programs)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Premium What's next Learn how to create an Assured Workloads folder Learn more about controlling access to data by personnel Learn which products are supported for each control package Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Therefore, if you're pursuing a FedRAMP Moderate ATO for your workloads deployed in Assured Workloads, you can use any FedRAMP High authorized Google Cloud service in your FedRAMP Moderate workloads.
- Home Documentation Security Assured Workloads Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- This means that Assured Workloads support cases are restricted to FedRAMP-adjudicated first-level and second-level support staff located in the US.

### "Data Boundary for International Traffic in Arms Regulations (ITAR) \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar](https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites To remain compliant as a user of the ITAR control package, verify that you satisfy and adhere to the following prerequisites: Create an ITAR folder using Assured Workloads and deploy your ITAR workloads only in that folder.
- BigQuery Affected BigQuery features Feature Description Enabling BigQuery on a new folder BigQuery is supported, but it isn't automatically enabled when you create a new Assured Workloads folder due to an internal configuration process.
- Administrator controls BigQuery will disable unsupported APIs but administrators with sufficient permissions to create Assured Workloads folders can enable an unsupported API.
- To check whether the process is finished and to enable BigQuery, complete the following steps: In the Google Cloud console, go to the Assured Workloads page.

### Migrate a workload \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/migrate-workload](https://docs.cloud.google.com/assured-workloads/docs/migrate-workload)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The expected allowed values are [us-west4, us-west1, us-west2, us-west3, us-central1, us-east1, us-east4, us-south1, us-central2, us-east5]." } ] } } ] } ], "nextPageToken" : "Ch8wLDc0MzY3NTExNCwzMzg4ODM1NTM2NDQ0NTg4MDMy" } To filter the findings by more than one asset type, add each as an additional query parameter: GET https://assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-west1/workloads/00-701ea036-7152-4781-a867-9f5:analyzeWorkloadMove?project = projects/my-project-123 & asset types = cloudresourcemanager.googleapis.com/Project & asset types = serviceusage.googleapis.com/Service & page size = 5 & page token = CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA The results will only contain any findings of the specified types ( cloudresourcemanager.googleapis.com/Project and serviceusage.googleapis.com/Service ): { "assetMoveAnalyses" : [ { "asset" : "//serviceusage.googleapis.com/projects/130536381852/services/bigquerymigration.googleapis.com" , "assetType" : "serviceusage.googleapis.com/Service" , "analysisGroups" : [ { "displayName" : "DISALLOWED SERVICES" , "analysisResult" : { "warnings" : [ { "detail" : "This service is not allowed by the gcp.restrictServiceUsage org policy effective at the target" } ] } } ] }, { "asset" : "//cloudresourcemanager.googleapis.com/projects/my-project-123" , "assetType" : "cloudresourcemanager.googleapis.com/Project" , "analysisGroups" : [ { "displayName" : "ORG POLICIES" , "analysisResult" : { "warnings" : [ { "detail" : "constraints/gcp.resourceLocations: Target applies/inherits this custom policy and it is not applied by the source.
- Although you can change the default list of supported services for an Assured Workloads folder by changing its resource usage restriction organization policy —thus allowing non-compliant services to be deployed in your folder— the non-compliant service and its resources will be ignored by background compliance checks.
- For example, if you have a project that you want to move to an Assured Workloads folder configured for FedRAMP Moderate, you can proactively address any potential compliance violations that might occur before moving the project.
- Although the findings don't prevent you from moving the project, they may result in compliance violations in the destination Assured Workloads folder.


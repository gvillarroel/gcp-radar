---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:30.785Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "IL5 compliance program"
feature_slug: "il5-compliance-program"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/overview"
  - "https://docs.cloud.google.com/assured-workloads/docs/compliance-programs"
  - "https://docs.cloud.google.com/assured-workloads/docs/apply-updates"
keywords:
  - "il5"
  - "compliance"
  - "program"
  - "generally"
  - "available"
  - "assured"
  - "workloads"
---

# IL5 compliance program

Product: Assured Workloads
Coverage: MEDIUM

## Step 02 Summary

The IL5 compliance program is generally available in Assured Workloads.

## Extended Definition

The IL5 compliance program is generally available in Assured Workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/overview](https://docs.cloud.google.com/assured-workloads/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/docs/compliance-programs](https://docs.cloud.google.com/assured-workloads/docs/compliance-programs)
- [https://docs.cloud.google.com/assured-workloads/docs/apply-updates](https://docs.cloud.google.com/assured-workloads/docs/apply-updates)

## Supporting Pages

### Overview of Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/overview](https://docs.cloud.google.com/assured-workloads/docs/overview)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Assured Workloads capabilities Assured Workloads provides a variety of capabilities to help you meet your compliance and regulatory requirements, including the following: Regional data boundaries and regulatory data boundaries for compliance enforcement Personnel data access controls Encryption key management controls Compliance updates Monitoring for violations The following sections describe these capabilities.
- For example, Assured Workloads lets the following organizations meet their compliance obligations: Organizations with strict regulations for data storage, key management, and access (such as financial services, healthcare, and governmental bodies).
- These notifications include information about the Assured Workloads folder, audit logs, and affected organization policies to enable informed review and remediation of the causes for non-compliance.
- As improvements are made to available control packages, you can evaluate whether your deployed Assured Workloads folder configurations are the same as the most recently available version.

### Apply workload updates \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/apply-updates](https://docs.cloud.google.com/assured-workloads/docs/apply-updates)
- Source ID: `site-docs-reference-2`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This feature does not incur any additional charges, nor does it affect the behavior of Assured Workloads monitoring ; you will still be alerted when your folder falls out of compliance with its current configuration, regardless of whether updates to its configuration are available.
- For example: GET https://us-central1-assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-west1/workloads/00-701ea036-7152-4781-a867-9f5/updates If successful, you will receive a JSON response similar to the following example: { "workloadUpdates" : [ { "name" : "organizations/919698298765/locations/us-central1/workloads/00-701ea036-7152-4781-a867-9f5/updates/5320de45-6c98-41af-b4a0-2ef930b124c3" , "state" : "AVAILABLE" , "createTime" : "2024-10-01T16:33:10.154368Z" , "updateTime" : "2024-10-01T16:33:10.154368Z" , "details" : { "orgPolicyUpdate" : { "appliedPolicy" : { "resource" : "folders/376585579673" , "constraint" : "constraints/gcp.resourceLocations" , "rule" : { "values" : { "allowedValues" : [ "us-central1" , ] } } }, "suggestedPolicy" : { "resource" : "folders/376585579673" , "constraint" : "constraints/gcp.resourceLocations" , "rule" : { "values" : { "allowedValues" : [ "us-central1" , "us-central2" , "us-west1" , ] } } } } } } ], "nextPageToken" : "chEKD4IBDAid1e-3BhCo68f6AQ" } Apply workload updates Applying a workload update to a workload is a long-running operation.
- Supported update types This feature supports viewing and applying the following types of updates on an Assured Workloads folder: Organization policy constraints : Any organization policy constraints that are applicable to your workload and enforced by Assured Workloads can be included in a workload update, with the following exceptions: gcp.resourceLocations gcp.restrictCmekCryptoKeyProjects Note: gcp.restrictServiceUsage updates are available in the Google Cloud console but are not available when using the Assured Workloads API.
- For example: PUT https://us-west1-assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-west1/workloads/00-701ea036-7152-4781-a867-9f5:enableComplianceUpdates View workload updates To view workload updates, complete the following steps: Console In the Google Cloud console, go to the Assured Workloads page.

### Control packages \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/compliance-programs](https://docs.cloud.google.com/assured-workloads/docs/compliance-programs)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Premium What's next Learn how to create an Assured Workloads folder Learn more about controlling access to data by personnel Learn which products are supported for each control package Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Therefore, if you're pursuing a FedRAMP Moderate ATO for your workloads deployed in Assured Workloads, you can use any FedRAMP High authorized Google Cloud service in your FedRAMP Moderate workloads.
- Home Documentation Security Assured Workloads Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- This means that Assured Workloads support cases are restricted to FedRAMP-adjudicated first-level and second-level support staff located in the US.


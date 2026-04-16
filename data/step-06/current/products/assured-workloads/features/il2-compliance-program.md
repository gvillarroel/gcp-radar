---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:30.727Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "IL2 compliance program"
feature_slug: "il2-compliance-program"
latest_feature_date: "2023-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/overview"
  - "https://docs.cloud.google.com/assured-workloads/docs/apply-updates"
  - "https://docs.cloud.google.com/assured-workloads/docs/compliance-programs"
keywords:
  - "il2"
  - "compliance"
  - "program"
  - "generally"
  - "available"
---

# IL2 compliance program

Product: Assured Workloads
Coverage: MEDIUM

## Step 02 Summary

The IL2 compliance program is generally available.

## Extended Definition

The IL2 compliance program is generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/overview](https://docs.cloud.google.com/assured-workloads/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/docs/apply-updates](https://docs.cloud.google.com/assured-workloads/docs/apply-updates)
- [https://docs.cloud.google.com/assured-workloads/docs/compliance-programs](https://docs.cloud.google.com/assured-workloads/docs/compliance-programs)

## Supporting Pages

### Overview of Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/overview](https://docs.cloud.google.com/assured-workloads/docs/overview)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Key management Depending on the control package, various key management controls are available to support regulatory compliance.
- Assured Workloads capabilities Assured Workloads provides a variety of capabilities to help you meet your compliance and regulatory requirements, including the following: Regional data boundaries and regulatory data boundaries for compliance enforcement Personnel data access controls Encryption key management controls Compliance updates Monitoring for violations The following sections describe these capabilities.
- For example, Assured Workloads lets the following organizations meet their compliance obligations: Organizations with strict regulations for data storage, key management, and access (such as financial services, healthcare, and governmental bodies).
- To enable separation of duties, the Data Boundary for ITAR control package uses a key management project that is separate from other deployed resources and creates a unique key ring for storage within a compliance location.

### Apply workload updates \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/apply-updates](https://docs.cloud.google.com/assured-workloads/docs/apply-updates)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This feature does not incur any additional charges, nor does it affect the behavior of Assured Workloads monitoring ; you will still be alerted when your folder falls out of compliance with its current configuration, regardless of whether updates to its configuration are available.
- For example, if you deploy a workload for a control package when it's in the Preview launch stage and that control package later becomes generally available, you must first redeploy your workload using the GA version before you can apply updates.
- However, it's still your responsibility to review each available update to verify that it meets your organization's regulatory or compliance requirements.
- For example: GET https://us-central1-assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-west1/workloads/00-701ea036-7152-4781-a867-9f5/updates If successful, you will receive a JSON response similar to the following example: { "workloadUpdates" : [ { "name" : "organizations/919698298765/locations/us-central1/workloads/00-701ea036-7152-4781-a867-9f5/updates/5320de45-6c98-41af-b4a0-2ef930b124c3" , "state" : "AVAILABLE" , "createTime" : "2024-10-01T16:33:10.154368Z" , "updateTime" : "2024-10-01T16:33:10.154368Z" , "details" : { "orgPolicyUpdate" : { "appliedPolicy" : { "resource" : "folders/376585579673" , "constraint" : "constraints/gcp.resourceLocations" , "rule" : { "values" : { "allowedValues" : [ "us-central1" , ] } } }, "suggestedPolicy" : { "resource" : "folders/376585579673" , "constraint" : "constraints/gcp.resourceLocations" , "rule" : { "values" : { "allowedValues" : [ "us-central1" , "us-central2" , "us-west1" , ] } } } } } } ], "nextPageToken" : "chEKD4IBDAid1e-3BhCo68f6AQ" } Apply workload updates Applying a workload update to a workload is a long-running operation.

### Control packages \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/compliance-programs](https://docs.cloud.google.com/assured-workloads/docs/compliance-programs)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Where available, you can view each control package's page for comprehensive information about supported products and its configuration details.
- A control package is a set of controls that, when combined together, supports the baseline for a compliance framework, statute, or regulation.
- Regulatory data boundaries provide certified controls tailored to meet specific regulatory and compliance statute requirements.
- For more information, see the United States Defense Information Systems compliance card .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:33.574Z"
product_name: "Access Transparency"
product_slug: "access-transparency"
feature_name: "Workload Identity Federation"
feature_slug: "workload-identity-federation"
latest_feature_date: "2025-01-24"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
keywords:
  - "Google Cloud Workload Identity Federation coverage"
  - "Access Transparency support for Workload Identity Federation"
  - "Access Transparency for Workload Identity Federation"
  - "Workload Identity Federation in Access Transparency"
  - "Workload Identity Federation"
  - "WIF and Access Transparency"
  - "WIF"
---

# Workload Identity Federation

Product: Access Transparency
Coverage: HIGH

## Step 02 Summary

Access Transparency now supports Workload Identity Federation in GA.

## Extended Definition

For Google Cloud, Workload Identity Federation support for Access Transparency means Access Transparency is included in the official federated-identity supported-services matrix as a GA capability. In that matrix, the Access Transparency entries for both Console (federated) and Google Cloud API show “No known limitations,” indicating it is supported for federated workload identity access.

## Evidence Summary

The cited IAM documentation explicitly lists Access Transparency in the Workload Identity Federation support table and marks it GA with no known console (federated) or API limitations.

## Source Links

- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)

## Supporting Pages

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: The page is centered on Workforce and Workload Identity Federation and is useful for contextual understanding of the federation feature, but not for Access Transparency.

Evidence snippets:
- Other: No known limitations Cloud Trace GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Translation GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Vision API GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Workstations GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cluster Director GA Console (federated): Cluster Director doesn't support Workload Identity Federation in the console (federated).
- Google Kubernetes Engine GA Console (federated): No known limitations Google Cloud API: If you use Workload Identity Federation for GKE to programmatically run kubectl commands against a different GKE cluster from a Pod, you must use service account impersonation, as described in Alternative: link Kubernetes ServiceAccounts to IAM .
- Workload Identity Federation Workload Identity Federation lets your workloads programmatically access Google Cloud products by using workload-provided identities such as IAM roles for AWS workloads, Kubernetes service accounts for GKE workloads, or GitHub identities for your deployment pipelines.
- Google Cloud Managed Service for Apache Kafka GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Workload Identity Federation for GKE is supported for authentication to the open source Apache Kafka APIs .


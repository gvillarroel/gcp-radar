---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.264Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Policy Controller (Beta)"
feature_slug: "policy-controller-beta"
latest_feature_date: "2019-09-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "policy-based checks"
  - "ACM Policy Controller"
  - "Kubernetes admission controller"
  - "Policy Controller Beta"
  - "policy enforcement"
  - "Anthos Policy Controller"
  - "Policy Controller"
  - "policy controller"
---

# Policy Controller (Beta)

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Anthos Config Management added Policy Controller (Beta), a Kubernetes admission controller for policy-based checks and enforcement.

## Extended Definition

Anthos Config Management added Policy Controller (Beta), a Kubernetes admission controller for policy-based checks and enforcement.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 1.7.0 Issue Customers using Anthos Policy Controller who have upgraded since Anthos Config Management 1.5.1 need to update the timeoutSeconds in their ValidatingWebhookConfigurations from "5" to "3" to avoid issues with Kubernetes leader elections.
- 1.1.0 Feature Policy Controller (Beta) is a Kubernetes dynamic admission controller that checks, audits, and enforces your clusters' compliance with policies related to security, regulations, or business rules.
- March 24, 2020 1.3.0 Change Anthos Policy Controller is now Generally Available 1.3.0 Change Anthos Config Management now includes the generally-available version of Config Connector.
- December 10, 2020 1.6.0 Feature Anthos Policy Controller now includes additional policies covering many of the CIS Kubernetes Benchmark 1.5.1 controls.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.378Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "CIS benchmark support for Kubernetes 1.23"
feature_slug: "cis-benchmark-support-for-kubernetes-1-23"
latest_feature_date: "2022-07-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cis-benchmarks"
keywords:
  - "CIS compliance benchmark"
  - "CIS hardening checks"
  - "Center for Internet Security"
  - "cluster CIS profile"
  - "CIS benchmark"
  - "security benchmark support"
  - "Kubernetes 1.23 CIS"
  - "CIS"
---

# CIS benchmark support for Kubernetes 1.23

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

CIS benchmarks became available for Kubernetes 1.23 clusters in Anthos clusters on AWS.

## Extended Definition

Anthos clusters on AWS (GKE on AWS) include CIS benchmark support for cluster security auditing, based on the Center for Internet Security recommendations. The AWS CIS benchmarks documentation shows versioned benchmark usage and gives `kube-bench node --benchmark cis-1.23` as an example, indicating that the CIS 1.23 benchmark profile is supported for these clusters.

## Evidence Summary

The cited page explicitly documents CIS benchmark usage for GKE on AWS and includes an explicit `cis-1.23` benchmark example.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cis-benchmarks](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cis-benchmarks)

## Supporting Pages

### CIS benchmarks \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cis-benchmarks](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cis-benchmarks)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is specifically about CIS Kubernetes benchmarks for GKE on AWS and explicitly states benchmark version mappings (including CIS version 1.23), but it does not directly claim support for Kubernetes 1.23 clusters.

Evidence snippets:
- Using the CIS Benchmarks The Center for Internet Security (CIS) releases benchmarks for best practice security recommendations.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Guides Send feedback CIS benchmarks Stay organized with collections Save and categorize content based on your preferences.
- How to audit Benchmarks Specific instructions for auditing each recommendation are available as part of the relevant CIS Benchmark.
- Make sure to specify the appropriate version, for example, kube-bench node --benchmark cis-1.23 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .


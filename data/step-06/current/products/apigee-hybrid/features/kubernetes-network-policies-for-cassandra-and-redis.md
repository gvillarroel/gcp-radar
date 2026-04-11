---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.254Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Kubernetes network policies for Cassandra and Redis"
feature_slug: "kubernetes-network-policies-for-cassandra-and-redis"
latest_feature_date: "2023-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
keywords:
  - "pod network isolation"
  - "db pod isolation"
  - "Kubernetes network policies"
  - "k8s network policy"
  - "Cassandra and Redis pods"
  - "Redis network policy"
  - "Cassandra network policy"
---

# Kubernetes network policies for Cassandra and Redis

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

New Kubernetes network policies were added to secure Cassandra and Redis pods inside Apigee hybrid clusters.

## Extended Definition

New Kubernetes network policies were added to secure Cassandra and Redis pods inside Apigee hybrid clusters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- See Customize Ingress access logs . v1.9.0 Feature Kubernetes network policies Starting in version 1.9, Apigee hybrid offers new Kubernetes network policies to secure Cassandra and Redis pods within an Apigee Hybrid cluster.
- See cassandra.auth.secret and redis.auth.secret in the Configuration properties reference . (Fixed in Apigee hybrid v1.9.1) 269451743 In certain circumstances, upgrading from Apigee hybrid v1.8.3 to v1.9.0 could fail with an error message when creating the virtual hosts. (Fixed in Apigee hybrid v1.9.1) 269738951 The example network policies are now included in the apigeectl/examples/network-policies directory. see Configuring Kubernetes network policies . (Fixed in Apigee hybrid v1.9.1) 270371160 In Apigee hybrid v1.8.7, we removed certain insecure TLS ciphers.
- For information on new installations, see The big picture . v1.9.1 Fixed Bug ID Description 269738951 The example network policies are now included in the apigeectl/examples/network-policies directory. see Configuring Kubernetes network policies .
- See Configuring Kubernetes network policies . v1.9.0 Feature CSI Backup and Restore Starting with Apigee hybrid 1.9, you can back up and restore your hybrid data using CSI (Container Storage Interface) snapshots.


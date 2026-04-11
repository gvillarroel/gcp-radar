---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:48.426Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "GKE Pod endpoints in Connectivity Tests"
feature_slug: "gke-pod-endpoints-in-connectivity-tests"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list"
keywords:
  - "gke"
  - "pod"
  - "endpoints"
  - "in"
  - "connectivity"
  - "tests"
  - "can"
  - "use"
---

# GKE Pod endpoints in Connectivity Tests

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Connectivity Tests can use a GKE Pod as the source or destination endpoint for a test and evaluate IP masquerading and network policies for that Pod.

## Extended Definition

Connectivity Tests can use a GKE Pod as the source or destination endpoint for a test and evaluate IP masquerading and network policies for that Pod.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create)
- [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list)

## Supporting Pages

### Roles and permissions | Network Intelligence Center - Connectivity Tests | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Roles and permissions Network Intelligence Center - Connectivity Tests Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control This page describes the Identity and Access Management (IAM) roles and permissions needed for running Connectivity Tests.
- You can grant users or service accounts permissions or predefined roles, or you can create a custom role that uses permissions that you specify.
- The IAM permissions use a prefix of networkmanagement.

### Method: projects.locations.global.connectivityTests.create | Network Intelligence Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.locations.global.connectivityTests.create Network Intelligence Center Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create Documentation · Networking · Network Intelligence Center · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · Authorization scopes · Try it!
- After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.
- Creates a new Connectivity Test.

### Method: projects.locations.global.connectivityTests.list | Network Intelligence Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.locations.global.connectivityTests.list Network Intelligence Center Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list Documentation · Networking · Network Intelligence Center · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · JSON representation · Authorization scopes · Try it!
- Lists all Connectivity Tests owned by a project.


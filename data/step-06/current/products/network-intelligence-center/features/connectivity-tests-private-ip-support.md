---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:48.452Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Connectivity Tests private IP support"
feature_slug: "connectivity-tests-private-ip-support"
latest_feature_date: "2021-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list"
keywords:
  - "connectivity"
  - "tests"
  - "private"
  - "ip"
  - "can"
  - "test"
  - "paths"
  - "to"
---

# Connectivity Tests private IP support

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Connectivity Tests can test paths to private IP addresses outside the RFC 1918 address space.

## Extended Definition

Connectivity Tests can test paths to private IP addresses outside the RFC 1918 address space.

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
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Roles and permissions Network Intelligence Center - Connectivity Tests Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control This page describes the Identity and Access Management (IAM) roles and permissions needed for running Connectivity Tests.
- You can grant users or service accounts permissions or predefined roles, or you can create a custom role that uses permissions that you specify.

### Method: projects.locations.global.connectivityTests.create | Network Intelligence Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Method: projects.locations.global.connectivityTests.create Network Intelligence Center Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create Documentation · Networking · Network Intelligence Center · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · Authorization scopes · Try it!
- Creates a new Connectivity Test.
- After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.

### Method: projects.locations.global.connectivityTests.list | Network Intelligence Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Method: projects.locations.global.connectivityTests.list Network Intelligence Center Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list Documentation · Networking · Network Intelligence Center · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · JSON representation · Authorization scopes · Try it!
- Lists all Connectivity Tests owned by a project.


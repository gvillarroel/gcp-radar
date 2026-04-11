---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:48.437Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Connectivity Tests"
feature_slug: "connectivity-tests"
latest_feature_date: "2025-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun"
keywords:
  - "connectivity"
  - "tests"
  - "now"
  - "analyzes"
  - "configurations"
  - "that"
  - "use"
  - "custom"
---

# Connectivity Tests

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Connectivity Tests now analyzes configurations that use custom producer ports in Private Service Connect backends; Connectivity Tests now analyzes configurations that use NAT64 in Public NAT.

## Extended Definition

Connectivity Tests now analyzes configurations that use custom producer ports in Private Service Connect backends; Connectivity Tests now analyzes configurations that use NAT64 in Public NAT.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list)
- [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun)

## Supporting Pages

### Roles and permissions | Network Intelligence Center - Connectivity Tests | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can grant users or service accounts permissions or predefined roles, or you can create a custom role that uses permissions that you specify.
- Roles and permissions Network Intelligence Center - Connectivity Tests Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control This page describes the Identity and Access Management (IAM) roles and permissions needed for running Connectivity Tests.
- The IAM permissions use a prefix of networkmanagement.

### Method: projects.locations.global.connectivityTests.list | Network Intelligence Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Method: projects.locations.global.connectivityTests.list Network Intelligence Center Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/list Documentation · Networking · Network Intelligence Center · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · JSON representation · Authorization scopes · Try it!
- Lists all Connectivity Tests owned by a project.

### Method: projects.locations.global.connectivityTests.rerun | Network Intelligence Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Method: projects.locations.global.connectivityTests.rerun Network Intelligence Center Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun Documentation · Networking · Network Intelligence Center · Reference · Send feedback · HTTP request · Path parameters · Request body · Response body · Authorization scopes · Try it!
- After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.
- Rerun an existing ConnectivityTest.


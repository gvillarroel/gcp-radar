---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:48.436Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Public destination resolution for serverless connectivity tests"
feature_slug: "public-destination-resolution-for-serverless-connectivity-tests"
latest_feature_date: "2025-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun"
keywords:
  - "public"
  - "destination"
  - "resolution"
  - "for"
  - "serverless"
  - "connectivity"
  - "tests"
  - "can"
---

# Public destination resolution for serverless connectivity tests

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Connectivity Tests can fully resolve public destinations within Google Cloud for tests from Cloud Run, Cloud Run functions, and App Engine.

## Extended Definition

Connectivity Tests can fully resolve public destinations within Google Cloud for tests from Cloud Run, Cloud Run functions, and App Engine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create)
- [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun)

## Supporting Pages

### Roles and permissions | Network Intelligence Center - Connectivity Tests | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Roles and permissions Network Intelligence Center - Connectivity Tests Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control This page describes the Identity and Access Management (IAM) roles and permissions needed for running Connectivity Tests.
- You can grant users or service accounts permissions or predefined roles, or you can create a custom role that uses permissions that you specify.

### Method: projects.locations.global.connectivityTests.create | Network Intelligence Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Method: projects.locations.global.connectivityTests.create Network Intelligence Center Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/create Documentation · Networking · Network Intelligence Center · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · Authorization scopes · Try it!
- After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.
- Creates a new Connectivity Test.

### Method: projects.locations.global.connectivityTests.rerun | Network Intelligence Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Method: projects.locations.global.connectivityTests.rerun Network Intelligence Center Google Cloud Documentation Source URL: https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1beta1/projects.locations.global.connectivityTests/rerun Documentation · Networking · Network Intelligence Center · Reference · Send feedback · HTTP request · Path parameters · Request body · Response body · Authorization scopes · Try it!
- After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.
- Rerun an existing ConnectivityTest.


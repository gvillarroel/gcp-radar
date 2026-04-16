---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.774Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "WebSocket support for IAP session management"
feature_slug: "websocket-support-for-iap-session-management"
latest_feature_date: "2024-04-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/tutorial-gce"
  - "https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview"
  - "https://docs.cloud.google.com/iap/docs/managing-access"
  - "https://docs.cloud.google.com/iap/docs/enabling-cloud-run"
keywords:
  - "websocket"
  - "for"
  - "iap"
  - "session"
  - "management"
  - "identity"
  - "aware"
  - "proxy"
---

# WebSocket support for IAP session management

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Identity-Aware Proxy supports WebSocket connections for managing Compute Engine resource sessions.

## Extended Definition

Identity-Aware Proxy supports WebSocket connections for managing Compute Engine resource sessions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview)
- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)

## Supporting Pages

### "Setting up IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up IAP To set up IAP for your project, follow these steps: In the Google Cloud console, go to the Security > Identity-Aware Proxy page and select the project that you want to enable IAP for.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Setting up IAP for Compute Engine Stay organized with collections Save and categorize content based on your preferences.
- GO TO THE IDENTITY-AWARE PROXY PAGE If you haven't configured your project's OAuth consent screen, you're prompted to do so: Caution: Don't enter any confidential information on the OAuth consent screen.
- This guide describes how to set up a Compute Engine instance with Identity-Aware Proxy (IAP).

### "Overview of IAP for on-premises apps \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview](https://docs.cloud.google.com/iap/docs/cloud-iap-for-on-prem-apps-overview)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Overview of IAP for on-premises apps Stay organized with collections Save and categorize content based on your preferences.
- When the IAP on-prem connector is deployed and IAP is enabled for the newly created on-prem connector backend service, IAP secures your app with identity and context based Identity and Access Management (IAM) access policies.
- Identity-Aware Proxy (IAP) allows you to manage access to HTTP-based apps outside of Google Cloud.
- The following is an example of routing parameters defined for a IAP connector Deployment Manager template. routing : - name : hr mapping : - name : host source : www.hr-domain.com destination : hr-internal.domain.com - name : sub source : sheets.hr-domain.com destination : sheets.hr-internal.domain.com - name : finance mapping : - name : host source : www.finance-domain.com destination : finance-internal.domain.com Each routing name corresponds to a new, Ambassador-created Compute Engine backend service resource.

### "Manage access to IAP-secured resources \_|\_ Identity-Aware Proxy \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Manage access to IAP-secured resources Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to manage individual or group access to Identity-Aware Proxy (IAP) secured resources at the resource level.
- Go to the Identity-Aware Proxy page Select the resource you want to secure with IAP.
- Go to the Identity-Aware Proxy page Select the resource that is secured with IAP.

### Enable IAP for Cloud Run \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enable IAP for Cloud Run Stay organized with collections Save and categorize content based on your preferences.
- There are two ways to enable Identity-Aware Proxy for your Cloud Run services.
- Setting up IAP access Go to the Identity-Aware Proxy page .
- Can't set up IAP through the gcloud CLI The IAP service account is not provisioned If you are seeing this error, run the following command: gcloud beta services identity create --service=iap.googleapis.com --project=[PROJECT ID] IAP service account doesn't need run.routes.invoke permission During the IAP with Cloud Run Preview, Cloud Run didn't perform the run.routes.invoke permission check for calls from IAP that use the Cloud Run Invoker role.


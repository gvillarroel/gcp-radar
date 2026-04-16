---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.772Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "IAP for Cloud Run"
feature_slug: "iap-for-cloud-run"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/enabling-cloud-run"
  - "https://docs.cloud.google.com/iap/docs/enabling-compute-howto"
  - "https://docs.cloud.google.com/iap/docs/enabling-app-engine"
  - "https://docs.cloud.google.com/iap/docs/tutorial-gce"
keywords:
  - "iap"
  - "for"
  - "run"
  - "identity"
  - "aware"
  - "proxy"
  - "can"
  - "be"
---

# IAP for Cloud Run

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Identity-Aware Proxy can be enabled directly on Cloud Run services without configuring a load balancer; Identity-Aware Proxy supports Cloud Run applications to help guard access using identity and context.

## Extended Definition

Identity-Aware Proxy can be enabled directly on Cloud Run services without configuring a load balancer; Identity-Aware Proxy supports Cloud Run applications to help guard access using identity and context.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)
- [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)
- [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine)
- [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)

## Supporting Pages

### Enable IAP for Cloud Run \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/enabling-cloud-run](https://docs.cloud.google.com/iap/docs/enabling-cloud-run)
- Source ID: `site-docs-root`
- Final score: 370
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Can't set up IAP through the gcloud CLI The IAP service account is not provisioned If you are seeing this error, run the following command: gcloud beta services identity create --service=iap.googleapis.com --project=[PROJECT ID] IAP service account doesn't need run.routes.invoke permission During the IAP with Cloud Run Preview, Cloud Run didn't perform the run.routes.invoke permission check for calls from IAP that use the Cloud Run Invoker role.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enable IAP for Cloud Run Stay organized with collections Save and categorize content based on your preferences.
- If the IAP service account is not in the list of principals, you can create it by running the following gcloud command: gcloud beta services identity create --service=iap.googleapis.com --project= PROJECT ID gcloud If you have not previously done so in the project, create the IAP service agent by running the following command.
- Service Agent failure causes set IAM error Enabling IAP on a new project for the first time can cause the following error: Setting IAM permissions failed This because the Cloud Run Service Agent failed.

### "Enable IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)
- Source ID: `site-docs-root`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enable IAP for Compute Engine Stay organized with collections Save and categorize content based on your preferences.
- API Run the following command to prepare a policy.json file. cat << EOF > policy.json { "name": " AUTHZ POLICY NAME ", "target": { "loadBalancingScheme": "INTERNAL MANAGED", "resources": [ "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ LOCATION /forwardingRules/ FORWARDING RULE ID " ], }, "action": "CUSTOM", "httpRules": [ { "from": { "sources": { "ipBlocks": [ { "prefix": "10.0.0.0", "length": 24 } ] } } } ], "customProvider": { "cloudIap": {} } } EOF Run the following command to enable IAP on a forwarding rule. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @policy.json \ "https://networksecurity.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /authzPolicies" Replace the following: PROJECT ID : The Google Cloud project ID.
- API Run the following command to prepare a settings.json file. cat << EOF > settings.json { "iap": { "enabled":true } } EOF Run the following command to enable IAP. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @settings.json \ "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID / REGION /backendServices/ BACKEND SERVICE NAME " After you enable IAP, you can use the Google Cloud CLI to modify the IAP access policy using the IAM role roles/iap.httpsResourceAccessor .
- Enable IAP on a forwarding rule You can enable IAP on a forwarding rule by using the load balancer authorization policies framework. gcloud Run the following command to prepare a policy.yaml file.

### "Enabling IAP for App Engine \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/enabling-app-engine](https://docs.cloud.google.com/iap/docs/enabling-app-engine)
- Source ID: `site-docs-root`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enabling IAP for App Engine Stay organized with collections Save and categorize content based on your preferences.
- API Run the following command to prepare a settings.json file. cat << EOF > settings.json { "iap": { "enabled":true } } EOF Run the following command to enable IAP. curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Accept: application/json" \ -H "Content-Type: application/json" \ -d @settings.json \ "https://appengine.googleapis.com/v1/apps/ PROJECT ID ?updateMask=iap" After you enable IAP, you can use the Google Cloud CLI to modify the IAP access policy using the IAM role roles/iap.httpsResourceAccessor .
- Turning on IAP On the Identity-Aware Proxy page, under Applications , find the application you want to restrict access to.
- This page explains how to secure an App Engine instance with Identity-Aware Proxy (IAP) .

### "Setting up IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- Source ID: `site-docs-root`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up IAP To set up IAP for your project, follow these steps: In the Google Cloud console, go to the Security > Identity-Aware Proxy page and select the project that you want to enable IAP for.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Setting up IAP for Compute Engine Stay organized with collections Save and categorize content based on your preferences.
- This guide describes how to set up a Compute Engine instance with Identity-Aware Proxy (IAP).
- GO TO THE IDENTITY-AWARE PROXY PAGE If you haven't configured your project's OAuth consent screen, you're prompted to do so: Caution: Don't enter any confidential information on the OAuth consent screen.


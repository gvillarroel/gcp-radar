---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.771Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Custom OAuth clients for IAP"
feature_slug: "custom-oauth-clients-for-iap"
latest_feature_date: "2026-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/custom-oauth-configuration"
  - "https://docs.cloud.google.com/iap/docs/enabling-compute-howto"
  - "https://docs.cloud.google.com/iap/docs/customizing"
  - "https://docs.cloud.google.com/iap/docs/tutorial-gce"
keywords:
  - "custom"
  - "oauth"
  - "clients"
  - "for"
  - "iap"
  - "identity"
  - "aware"
  - "proxy"
---

# Custom OAuth clients for IAP

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Identity-Aware Proxy can use custom OAuth clients for organization-external users, branded consent screens, and inherited default clients.

## Extended Definition

Identity-Aware Proxy can use custom OAuth clients for organization-external users, branded consent screens, and inherited default clients.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)
- [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)
- [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing)
- [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)

## Supporting Pages

### "Use custom OAuth clients with IAP \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/custom-oauth-configuration](https://docs.cloud.google.com/iap/docs/custom-oauth-configuration)
- Source ID: `site-docs-root`
- Final score: 325
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document describes when and how to use custom OAuth clients for Identity-Aware Proxy (IAP) .
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Use custom OAuth clients with IAP Stay organized with collections Save and categorize content based on your preferences.
- Terraform To apply the custom OAuth client using Terraform, do the following: resource "google iap settings" "iap settings" { name = IAP RESOURCE NAME access settings { oauth settings { oauth client id = CLIENT ID oauth client secret = CLIENT SECRET } } } Replace the following: IAP RESOURCE NAME : the resource name of the iap settings resource for the service, which has the following format: projects/ PROJECT NUMBER /iap web/ REGION /services/ SERVICE NAME CLIENT ID : the client ID from the OAuth credentials that you generated earlier CLIENT SECRET : the client secret from the OAuth credentials that you generated earlier REST API Create a settings JSON file. cat iap-oauth.json { "accessSettings": { "oauthSettings": { "clientId": " CLIENT ID ", "clientSecret": " CLIENT SECRET " } } } EOF Replace the following: CLIENT ID : The client ID from the OAuth credentials that you generated earlier.
- App Engine This section describes how to enable custom OAuth clients on App Engine. gcloud Before you set up your project and IAP, you need an up-to-date version of gcloud CLI.

### "Enable IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)
- Source ID: `site-docs-root`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enable IAP for Compute Engine Stay organized with collections Save and categorize content based on your preferences.
- The policy allows clients with an IP address range of 10.0.0.0/24 to enable IAP on a forwarding rule. $ cat << EOF > policy.yaml action : CUSTOM description : authz policy with Cloud IAP name : AUTHZ POLICY NAME httpRules : - from : sources : - ipBlocks : - prefix : "10.0.0.0" length : 24 customProvider : cloudIap : {} target : loadBalancingScheme : EXTERNAL MANAGED resources : - https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ LOCATION /forwardingRules/ FORWARDING RULE ID EOF Run the following command to enable IAP on a forwarding rule. gcloud network-security authz-policies import AUTHZ POLICY NAME \ --source=policy.yaml \ --location= LOCATION \ --project= PROJECT ID Replace the following: PROJECT ID : The Google Cloud project ID.
- Turning on IAP On the Identity-Aware Proxy page, under APPLICATIONS , find the load balancer that serves the instance group you want to restrict access to.
- This page explains how to secure a Compute Engine instance with Identity-Aware Proxy (IAP) .

### Customize IAP \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customize IAP settings IAP provides the following customization settings: Field Description access settings.cors settings.allow http options Control HTTP OPTIONS (CORS preflight) access settings.oauth settings.login hint Simplify login for users of a G Suite domain application settings.access denied page settings.access denied page uri Show a custom error page when access is denied application settings.csm settings.rctoken aud Issue GKE Enterprise and Istio RCTokens access settings.gcip settings Authenticate with Identity Platform access settings.ReauthSettings Set a reauthentication policy.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Customize IAP Stay organized with collections Save and categorize content based on your preferences.
- To learn more about roles and permissions for IAP, see Identity-Aware Proxy roles and permissions .
- This document describes how to customize Identity-Aware Proxy (IAP) settings.

### "Setting up IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GO TO THE IDENTITY-AWARE PROXY PAGE If you haven't configured your project's OAuth consent screen, you're prompted to do so: Caution: Don't enter any confidential information on the OAuth consent screen.
- Set up IAP To set up IAP for your project, follow these steps: In the Google Cloud console, go to the Security > Identity-Aware Proxy page and select the project that you want to enable IAP for.
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Setting up IAP for Compute Engine Stay organized with collections Save and categorize content based on your preferences.
- This guide describes how to set up a Compute Engine instance with Identity-Aware Proxy (IAP).


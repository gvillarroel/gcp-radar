---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.780Z"
product_name: "Identity-Aware Proxy"
product_slug: "identity-aware-proxy"
feature_name: "Compute Engine"
feature_slug: "compute-engine"
latest_feature_date: "2017-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iap/docs/enabling-compute-howto"
  - "https://docs.cloud.google.com/iap/docs/tutorial-gce"
  - "https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto"
  - "https://docs.cloud.google.com/iap/docs/managing-access"
keywords:
  - "compute"
  - "engine"
  - "identity"
  - "aware"
  - "proxy"
  - "provides"
  - "based"
  - "access"
---

# Compute Engine

Product: Identity-Aware Proxy
Coverage: MEDIUM

## Step 02 Summary

Cloud Identity-Aware Proxy provides identity-based access protection for App Engine standard environment, Compute Engine, and GKE.

## Extended Definition

Cloud Identity-Aware Proxy provides identity-based access protection for App Engine standard environment, Compute Engine, and GKE.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)
- [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)

## Supporting Pages

### "Enable IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)
- Source ID: `site-docs-root`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Enable IAP for Compute Engine Stay organized with collections Save and categorize content based on your preferences.
- This page explains how to secure a Compute Engine instance with Identity-Aware Proxy (IAP) .
- Turning on IAP On the Identity-Aware Proxy page, under APPLICATIONS , find the load balancer that serves the instance group you want to restrict access to.
- Setting up IAP access Go to the Identity-Aware Proxy page .

### "Setting up IAP for Compute Engine \_|\_ Identity-Aware Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/iap/docs/tutorial-gce](https://docs.cloud.google.com/iap/docs/tutorial-gce)
- Source ID: `site-docs-root`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Setting up IAP for Compute Engine Stay organized with collections Save and categorize content based on your preferences.
- This guide describes how to set up a Compute Engine instance with Identity-Aware Proxy (IAP).
- On the IAM & admin > Identity-Aware Proxy right side Access section, click Add .
- GO TO THE CREATE AN INSTANCE TEMPLATE PAGE Use the default values except for the following: Machine type: micro (f1-micro) Access scopes: Set access for each API Compute Engine: Read Only Firewall: Allow HTTP traffic In the Management section, under Automation > Startup script , copy and paste the following script: Copyright 2021 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

### "Setting up context-aware access with Identity-Aware Proxy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- Source ID: `site-docs-root`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Setting up context-aware access with Identity-Aware Proxy Stay organized with collections Save and categorize content based on your preferences.
- This guide describes how to extend Identity-Aware Proxy (IAP) access policies using access levels and the Identity and Access Management (IAM) Conditions Framework .
- Example policy.json file { "policy" : { "bindings" : [ { "role" : "roles/iap.httpsResourceAccessor" , "members" : [ "group" : EXAMPLE GROUP@GOOGLE.COM , "user: EXAMPLE USER@GOOGLE.COM " ], "condition" : { "expression" : "" accessPolicies/ ORGANIZATION NUMBER /accessLevels/ ACCESS LEVEL NAME " in request.auth.access levels && request.path.startsWith(" / ")" , "title" : " CONDITION NAME " } } ] } } Set your new policy.json file using the setIamPolicy method. curl -i -H "Content-Type:application/json" \ -H "Authentication: Bearer $(gcloud auth print-access-token)" \ ${IAP BASE URL}/compute/services/${BACKEND SERVICE NAME}:setIamPolicy \ -d @${JSON NEW POLICY} Use hostname and path conditions Access to your app can be secured using the hostname and path of a request URL.
- Example policy.json file { "policy" : { "bindings" : [ { "role" : "roles/iap.httpsResourceAccessor" , "members" : [ "group: EXAMPLE GROUP@GOOGLE.COM " , "user: EXAMPLE USER@GOOGLE.COM " ], "condition" : { "expression" : "" accessPolicies/ ORGANIZATION NUMBER /accessLevels/ ACCESS LEVEL NAME " in request.auth.access levels && request.path.startsWith(" / ")" , "title" : " CONDITION NAME " } } ] } } Set your new policy.json file using the setIamPolicy method. curl -i -H "Authentication: Bearer $(gcloud auth print-access-token)" \ ${GAE BASE URL}:setIamPolicy -d @${JSON NEW POLICY} App Engine services and versions You can also update the IAM policy of a App Engine service, all versions, or a specific version of a service.

### "Manage access to IAP-secured resources \_|\_ Identity-Aware Proxy \_|\_\

- URL: [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- Source ID: `site-iam-reference`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Identity-Aware Proxy Guides Send feedback Manage access to IAP-secured resources Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to manage individual or group access to Identity-Aware Proxy (IAP) secured resources at the resource level.
- When you're finished adding email addresses and setting roles, click Add Remove access Go to the Identity-Aware Proxy page .
- Add access Go to the Identity-Aware Proxy page .


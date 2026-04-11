---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:30:05.320Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Identity-Aware Proxy SAML attribute propagation"
feature_slug: "identity-aware-proxy-saml-attribute-propagation"
latest_feature_date: "2022-07-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-app-engine"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-kubernetes-engine"
keywords:
  - "identity"
  - "aware"
  - "proxy"
  - "saml"
  - "attribute"
  - "propagation"
  - "iap"
  - "enables"
---

# Identity-Aware Proxy SAML attribute propagation

Product: Chrome Enterprise Premium
Coverage: LOW

## Step 02 Summary

IAP SAML attribute propagation enables SAML attributes to be passed through Identity-Aware Proxy authentication flows.

## Extended Definition

IAP SAML attribute propagation enables SAML attributes to be passed through Identity-Aware Proxy authentication flows.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-app-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-app-engine)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-kubernetes-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-kubernetes-engine)

## Supporting Pages

### "Securing App Engine apps with IAP \_|\_ Chrome Enterprise Premium \_|\_\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-app-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-app-engine)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page walks you through deploying an App Engine standard or flexible environment application and securing it with Identity-Aware Proxy (IAP) .
- Turning on IAP On the Identity-Aware Proxy page, under Applications , find the application you want to restrict access to.
- Go to the Identity-Aware Proxy page Select the project you want to secure with IAP.
- Setting up IAP access Go to the Identity-Aware Proxy page .

### "Securing Compute Engine apps and resources with IAP \_|\_ Chrome Enterprise\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Turning on IAP On the Identity-Aware Proxy page, under APPLICATIONS , find the load balancer that serves the instance group you want to restrict access to.
- This page explains how to secure a Compute Engine instance with Identity-Aware Proxy (IAP) .
- Go to the Identity-Aware Proxy page Select the project you want to secure with IAP.
- Setting up IAP access Go to the Identity-Aware Proxy page .

### "Securing GKE apps and resources with IAP \_|\_ Chrome Enterprise Premium\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-kubernetes-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-kubernetes-engine)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page explains how to secure a Google Kubernetes Engine (GKE) instance with Identity-Aware Proxy (IAP) .
- Go to the Identity-Aware Proxy page Select the project you want to secure with IAP.
- Setting up IAP access Go to the Identity-Aware Proxy page .
- If you are using an earlier GKE version, use cloud.google.com/v1beta1 . apiVersion: cloud.google.com/v1 kind: BackendConfig metadata: name: CONFIG DEFAULT namespace: my-namespace spec: iap: enabled: true Associate a service port with a BackendConfig You also need to associate Service ports with your BackendConfig to trigger turning on IAP.


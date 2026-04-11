---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.254Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Apigee hybrid Anthos Service Mesh version support (1.13)"
feature_slug: "apigee-hybrid-anthos-service-mesh-version-support-1-13"
latest_feature_date: "2022-08-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
keywords:
  - "Anthos Service Mesh 1.13"
  - "ASM v1.13"
  - "ASM 1.13"
  - "supported platform"
  - "1.13 support"
  - "version support"
  - "Apigee hybrid 1.8"
---

# Apigee hybrid Anthos Service Mesh version support (1.13)

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee hybrid 1.8 added support for Anthos Service Mesh version 1.13 on supported platforms.

## Extended Definition

Apigee hybrid 1.8 added support for Anthos Service Mesh version 1.13 on supported platforms.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- See Supported platforms for ASM version support for each supported version of Apigee Hybrid. (Fixed in Apigee hybrid v1.7.0) 208322185 Apigee hybrid Cassandra backup and restore can now use either a user-provided custom secret or a generated secret (Fixed in Apigee hybrid v1.6.3) 207762842 Hybrid logging functionality has been reworked.
- See orgScopedUDCA in the Configuration property reference . v1.8.0 Fixed Bug ID Description 239854141 apigee-pull-push.sh now uses gcr source repositories. (Fixed in Apigee hybrid v1.8.0) 238370197 Fixed an issue where the timeTaken variable's value could sometimes be calculated incorrectly. (Fixed in Apigee hybrid v1.7.3) 236399482 Added support for ASM v1.13. (Fixed in Apigee hybrid v1.7.2) 236129944 Fixed the controller crashloopbackoff due to null pointer issue. (Fixed in Apigee hybrid v1.6.9) 236129944 Fixed the controller crashloopbackoff resulting from null pointer. (Fixed in Apigee hybrid v1.7.2) 234620567 Fix logger issue in Anthos BareMetal with CentOS. (Fixed in Apigee hybrid v1.6.9) 234355351 Fixed issue with message processor pods restarting frequently.
- This is because in certain circumstances Watcher did not send the correct deployment status due to using the wrong selector for the Apigee Ingress Gateway. (Fixed in Apigee hybrid v1.8.3) 251435916 Fixed an issue where in certain circumstances, MP pods would scale without traffic. (Fixed in Apigee hybrid v1.7.5) 249144084 Reuse existing target IPs if DNS resolution fail on DNS cache refresh. (Fixed in Apigee hybrid v1.8.1) 245664917 During the upgrade to Apigee hybrid 1.8.x, after running apigeectl init and confirming that check-ready succeeded, the Cassandra schema validation job was in an error state.
- Note: Fixed in Apigee hybrid 1.8.4 and newer. (Fixed in Apigee hybrid v1.8.5) 262699558 The watcher component no longer fails when using Kubernetes Secret to store hybrid service account secret. (Fixed in Apigee hybrid v1.7.6) 263840644 Fixed a conflict with an existing ASM on the cluster. (Fixed in Apigee hybrid v1.8.6) 265374889 Fixed an issue where in some circumstances the Java Callout would to fail due with the following error: Failed to execute JavaCallout.


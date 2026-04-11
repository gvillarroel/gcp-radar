---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.256Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "apigeectl --v verbosity option"
feature_slug: "apigeectl-v-verbosity-option"
latest_feature_date: "2022-08-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
keywords:
  - "command output verbosity"
  - "kubectl-style verbosity"
  - "verbosity flag"
  - "apigeectl verbosity option"
  - "log verbosity"
  - "-v flag"
  - "apigeectl --v"
  - "v option"
---

# apigeectl --v verbosity option

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee hybrid added the apigeectl --v option to control log verbosity, matching kubectl's verbosity flag format.

## Extended Definition

Apigee hybrid added the apigeectl --v option to control log verbosity, matching kubectl's verbosity flag format.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- See REST Resource: organizations.keyvaluemaps and REST Resource: v1.organizations.environments.keyvaluemaps . v1.8.0 Feature apigeectl now supports the --v option to set the log verbosity level Starting in version 1.8, apigeectl includes a --v option to set log verbosity levels in the format --v=int , for example apigeectl apply --v=5 .
- It is replaced with the --v option which lets you specify the log verbosity level in the format --v=int , for example apigeectl apply --v=5 .
- This will be consistent with CG SaaS and OPDK. (Fixed in Apigee hybrid v1.8.0) 202403896 Upgrade to Apigee hybrid v1.6 from v1.5 could fail due to annotation size. (Fixed in Apigee hybrid v1.5.8) v1.8.0 Deprecated The apigeectl --verbose option has been deprecated.
- This is the same as the kubectl --v option.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For multi-region installations, each region requires its own cluster (individual clusters do not span regions). kmsEncryptionKey Advanced Introduced in version: 1.0.0 Default value: defaults.org.kmsEncryptionKey Chart: apigee-org , apigee-env Optional.
- See nodeSelector . synchronizer.nodeSelector.value Basic Introduced in version: 1.0.0 Default value: None Chart: apigee-env Optional node selector label value used for targeting Kubernetes nodes for synchronizer runtime services.
- The minimum value is 1. runtime.nodeSelector.key Basic Introduced in version: 1.0.0 Default value: None Chart: apigee-env Optional Node selector label key for targeting Kubernetes nodes for runtime services.
- See Configure Seccomp profiles for pod security . synchronizer.annotations Advanced Introduced in version: 1.5.0 Default value: None Chart: apigee-env Optional key/value map used to annotate pods.


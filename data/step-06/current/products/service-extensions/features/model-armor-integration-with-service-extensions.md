---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:58.260Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Model Armor integration with Service Extensions"
feature_slug: "model-armor-integration-with-service-extensions"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services"
  - "https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions"
  - "https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch"
keywords:
  - "model"
  - "armor"
  - "integration"
  - "with"
  - "extensions"
  - "can"
  - "be"
  - "configured"
---

# Model Armor integration with Service Extensions

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Model Armor can be configured with Service Extensions to protect AI workloads on supported Application Load Balancers.

## Extended Definition

Model Armor can be configured with Service Extensions to protect AI workloads on supported Application Load Balancers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions)
- [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch)

## Supporting Pages

### Configure an extension to call a Google service | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Programmability type, select Google services and then select a Model Armor service endpoint—for example modelarmor.us-central1.rep.googleapis.com.
- The name must conform with RFC-1034, use only lowercase letters, numbers, and hyphens, and have a maximum length of 63 characters.
- Configure an extension to call a Google service Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services For Extension name, specify a unique name.
- Additionally, the first character must be a letter and the last character must be a letter or a number.

### REST Resource: projects.locations.lbTrafficExtensions | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: projects.locations.lbTrafficExtensions Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions Documentation · Networking · Service Extensions · Reference · Send feedback · Resource: LbTrafficExtension · JSON representation ·

### Method: projects.locations.authzExtensions.patch | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.locations.authzExtensions.patch Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch Documentation · Networking · Service Extensions · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · IAM Permissions · Updates the parameters of the specified AuthzExtension resource.
- PATCH https://networkservices.googleapis.com/v1/{authzExtension.name=projects/ /locations/ /authzExtensions/ } The URL uses gRPC Transcoding syntax.


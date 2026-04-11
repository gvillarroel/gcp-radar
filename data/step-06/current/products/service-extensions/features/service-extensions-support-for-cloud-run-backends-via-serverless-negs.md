---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:58.262Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Service Extensions support for Cloud Run backends via serverless NEGs"
feature_slug: "service-extensions-support-for-cloud-run-backends-via-serverless-negs"
latest_feature_date: "2024-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions"
  - "https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch"
  - "https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions"
keywords:
  - "extensions"
  - "for"
  - "run"
  - "backends"
  - "via"
  - "serverless"
  - "negs"
  - "can"
---

# Service Extensions support for Cloud Run backends via serverless NEGs

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Service Extensions can now be hosted on backend services that use serverless network endpoint groups pointing to Cloud Run services.

## Extended Definition

Service Extensions can now be hosted on backend services that use serverless network endpoint groups pointing to Cloud Run services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions)
- [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch)
- [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions)

## Supporting Pages

### REST Resource: projects.locations.authzExtensions | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: projects.locations.authzExtensions Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions Documentation · Networking · Service Extensions · Reference · Send feedback · Resource: AuthzExtension · JSON representation · WireFormat · Methods · AuthzExtension is a resource that allows traffic forwarding to a callout backend service to make an authorization decision.

### Method: projects.locations.authzExtensions.patch | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.locations.authzExtensions.patch Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch Documentation · Networking · Service Extensions · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · IAM Permissions · Updates the parameters of the specified AuthzExtension resource.
- PATCH https://networkservices.googleapis.com/v1/{authzExtension.name=projects/ /locations/ /authzExtensions/ } The URL uses gRPC Transcoding syntax.

### REST Resource: projects.locations.lbTrafficExtensions | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: projects.locations.lbTrafficExtensions Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.lbTrafficExtensions Documentation · Networking · Service Extensions · Reference · Send feedback · Resource: LbTrafficExtension · JSON representation ·


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:58.259Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "GKE Gateway extensions"
feature_slug: "gke-gateway-extensions"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services"
  - "https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch"
keywords:
  - "gke"
  - "gateway"
  - "extensions"
  - "now"
  - "supports"
  - "using"
  - "to"
  - "insert"
---

# GKE Gateway extensions

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

GKE Gateway now supports using extensions to insert custom logic into the load balancing processing path.

## Extended Definition

GKE Gateway now supports using extensions to insert custom logic into the load balancing processing path.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch)

## Supporting Pages

### Cloud Load Balancing and Cloud CDN extensions overview | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Load Balancing and Cloud CDN extensions overview Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview Documentation · Networking · ... lets you use extensions to instruct supported Application Load Balancers to use plugins or send callouts from the load balancing data path to callout backend services or Google services...

### Configure an extension to call a Google service | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Configure an extension to call a Google service Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services For Extension name, specify a unique name.

### Method: projects.locations.authzExtensions.patch | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.locations.authzExtensions.patch Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.authzExtensions/patch Documentation · Networking · Service Extensions · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · IAM Permissions · Updates the parameters of the specified AuthzExtension resource.
- PATCH https://networkservices.googleapis.com/v1/{authzExtension.name=projects/ /locations/ /authzExtensions/ } The URL uses gRPC Transcoding syntax.


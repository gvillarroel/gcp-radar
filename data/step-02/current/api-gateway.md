# API Gateway

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 21
Unique features: 19

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-01-12 | Apigee API Hub integration for API Gateway metadata publishing |  | API Gateway can publish API metadata to Apigee API Hub to provide a unified API catalog, improved discovery, and centralized lifecycle governance across gateways. |
| 2025-11-12 | OpenAPI 3.0.x specification support |  | API Gateway now supports OpenAPI version 3.0.x specifications directly, including all patch versions, without requiring conversion to OpenAPI 2.0. |
| 2025-07-23 | TLS 1.0 and TLS 1.1 deprecation in API Gateway | 2025-07-23 | API Gateway is deprecating TLS 1.0 and 1.1 and enforces TLS 1.2+ for new security settings, with older protocol connections returning 400 errors; deprecated on 2025-07-23. |
| 2025-06-09 | Regional API Gateway quota increase |  | The maximum number of API Gateways that can be created per region has been increased to 50. |
| 2025-04-02 | Data residency support for API Gateway data at rest |  | API Gateway now supports data residency requirements for customer data stored at rest. |
| 2025-03-26 | CMEK-compliant data-at-rest encryption for API Gateway |  | API Gateway customer data at rest is now CMEK-compliant without requiring customer configuration changes. |
| 2025-03-25 | Workforce Identity Federation support for API Gateway |  | API Gateway now supports Workforce Identity Federation so workforce identities from external providers can authenticate and authorize access using IAM. |
| 2021-01-21 | API Gateway availability in us-east1 region |  | API Gateway was introduced in the us-east1 Google Cloud region. |
| 2021-01-21 | Cloud Run gRPC backend support in API Gateway |  | API Gateway now supports using Cloud Run backend services with gRPC. |
| 2021-01-21 | gcloud CLI support for API Gateway |  | API Gateway has been added to the gcloud command group so it can be managed through the Google Cloud CLI. |
| 2020-09-08 | API Gateway API public availability |  | API Gateway API became publicly visible so it can be viewed and enabled without allowlisting. |
| 2020-09-08 | API Gateway default gateway hostname pattern |  | Newly created gateways now use the default hostname format with GATEWAY_ID and HASH; Newly created gateways now use the default hostname format with GATEWAY_ID and HASH. |
| 2020-09-08 | API Gateway gcloud beta command group |  | API Gateway was added to the gcloud beta command group for CLI access. |
| 2020-09-08 | Removal of deprecated fields in API Gateway Alpha API |  | Deprecated fields were removed from alpha versions of the API Gateway API. |
| 2020-07-01 | API Gateway REST API reference update |  | The API Gateway REST API reference was updated to the latest Alpha version; The API Gateway REST API reference was updated to the latest Alpha version. |
| 2020-07-01 | OpenAPI host property optional for API Gateway API configs |  | OpenAPI specifications for API Gateway API configs no longer require the host property. |
| 2020-04-01 | API config metadata update in API Gateway gcloud CLI |  | The API Gateway gcloud CLI added the ability to update API config labels or display name. |
| 2020-04-01 | API Gateway gcloud CLI API lifecycle management |  | The gcloud CLI gained support for creating, listing, updating, and deleting APIs. |
| 2020-04-01 | API Gateway web console development UI |  | Google Cloud Console gained a web UI for developing APIs on API Gateway. |

Source file slug: `api-gateway.md`


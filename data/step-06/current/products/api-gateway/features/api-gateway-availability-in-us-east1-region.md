---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:04:48.100Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "API Gateway availability in us-east1 region"
feature_slug: "api-gateway-availability-in-us-east1-region"
latest_feature_date: "2021-01-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/ListLocationsResponse"
keywords:
  - "available in us-east1"
  - "us-east1 support"
  - "us-east1"
  - "regional availability"
  - "supported region"
  - "region launch"
  - "region availability"
  - "API Gateway region"
---

# API Gateway availability in us-east1 region

Product: API Gateway
Coverage: LOW

## Step 02 Summary

API Gateway was introduced in the us-east1 Google Cloud region.

## Extended Definition

The provided API Gateway location schema includes a documented `locationId` field for location resources, with an example canonical location ID of `us-east1`. In the same context, location metadata can include a `cloud.googleapis.com/region` label whose example value is also `us-east1`, indicating Google documents API Gateway locations using this region identifier. This excerpt only shows `us-east1` as an example value, so it does not on its own confirm full regional launch or full availability coverage.

## Evidence Summary

The cited page shows `us-east1` as an example `locationId`/region label value in API Gateway location data, but it does not explicitly state feature availability or launch timing for that region.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/ListLocationsResponse)

## Supporting Pages

### ListLocationsResponse \_|\_ API Gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/ListLocationsResponse)
- Source ID: `site-api-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- For example: "projects/example-project/locations/us-east1" locationId string The canonical id for this location.
- For example: "us-east1" . displayName string The friendly name for this location, typically a nearby city name.
- For example {"cloud.googleapis.com/region": "us-east1"} An object containing a list of "key": value pairs.


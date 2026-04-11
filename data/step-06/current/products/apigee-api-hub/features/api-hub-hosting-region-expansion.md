---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:36.637Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API hub hosting region expansion"
feature_slug: "api-hub-hosting-region-expansion"
latest_feature_date: "2024-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/locations"
keywords:
  - "australia-southeast1"
  - "region availability"
  - "southamerica-east1"
  - "asia-southeast1"
  - "europe-west2"
  - "asia-south"
  - "us-east4"
  - "us-west1"
---

# API hub hosting region expansion

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub added new deployment regions including us-east4, us-west1, europe-west2, asia-southeast1, asia-south, southamerica-east1, and australia-southeast1.

## Extended Definition

The official Apigee API hub locations documentation indicates that API hub resources can be provisioned in a set of Google Cloud regions, including us-east4 (Northern Virginia), us-west1 (Oregon), europe-west2 (London), asia-southeast1 (Singapore), asia-south1 (Mumbai), southamerica-east1 (Sao Paulo), and australia-southeast1 (Sydney). It also documents these regions as eligible Cloud Scheduler fallback locations for API hub features, which reflects broader regional deployment and operational availability.

## Evidence Summary

The page lists concrete API hub-supported regions and fallback locations, supporting the regional expansion claim, but does not explicitly confirm the exact expansion date or that all listed locations were newly added on 2024-10-18.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations)

## Supporting Pages

### API hub locations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly documents where API hub instances can be provisioned, including region-level availability and fallback behavior, which is central to evaluating hosting-region changes.

Evidence snippets:
- Americas Region description Region name Details Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Montreal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Europe Region description Region name Details Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zurich europe-west6 Low CO 2 Asia-Pacific Region description Region name Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Middle East Region description Region name Dammam me-central2 Doha me-central1 Tel Aviv me-west1 Africa Region description Region name Johannesburg africa-south1 Cloud Scheduler location fallbacks API hub uses Cloud Scheduler for some of its features.
- API hub location Cloud Scheduler fallback location Johannesburg ( africa-south1 ) Belgium ( europe-west1 ) Delhi ( asia-south2 ) Mumbai ( asia-south1 ) Melbourne ( australia-southeast2 ) Sydney ( australia-southeast1 ) Finland ( europe-north1 ) Warsaw ( europe-central2 ) Madrid ( europe-southwest1 ) Belgium ( europe-west1 ) Netherlands ( europe-west4 ) Belgium ( europe-west1 ) Milan ( europe-west8 ) Zurich ( europe-west6 ) Paris ( europe-west9 ) Belgium ( europe-west1 ) Berlin ( europe-west10 ) Frankfurt ( europe-west3 ) Turin ( europe-west12 ) Zurich europe-west6 Doha ( me-central1 ) Mumbai ( asia-south1 ) Dammam ( me-central2 ) Mumbai ( asia-south1 ) Tel Aviv ( me-west1 ) Frankfurt ( europe-west3 ) Toronto ( northamerica-northeast2 ) Montreal ( northamerica-northeast1 ) Santiago ( southamerica-west1 ) São Paulo ( southamerica-east1 ) Columbus ( us-east5 ) Northern Virginia ( us-east4 ) Dallas ( us-south1 ) Iowa ( us-central1 ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, if you choose US multi-region , Vertex AI could be provisioned in us-west1 , us-central1 , or any other valid region within the US multi-region .


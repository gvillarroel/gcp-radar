---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.172Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Data residency"
feature_slug: "data-residency"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
  - "https://docs.cloud.google.com/apigee/docs/locations"
  - "https://docs.cloud.google.com/apigee/docs/apihub/locations"
keywords:
  - "geographic"
  - "choose"
  - "where"
  - "residency"
  - "organizations"
  - "regions"
  - "lets"
---

# Data residency

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee data residency lets organizations choose supported geographic regions where Apigee data is stored; Apigee data residency lets organizations choose supported geographic regions where Apigee data is stored.

## Extended Definition

Apigee data residency lets organizations choose supported geographic regions where Apigee data is stored; Apigee data residency lets organizations choose supported geographic regions where Apigee data is stored.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/locations](https://docs.cloud.google.com/apigee/docs/locations)
- [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations)

## Supporting Pages

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-root-2`
- Final score: 340
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data residency for Apigee meets compliance and regulatory requirements by allowing you to specify the geographic locations (regions) where Apigee data is stored.
- How to view the region If you have already provisioned your org ( PROJECT ID ) for use with data residency, you can use the getProjectMapping API to display the regions associated with a project: Authorize gcloud to access the Cloud Platform with your Google user credentials: gcloud auth login Call the API: curl -X GET https://apigee.googleapis.com/v1/organizations/ PROJECT ID :getProjectMapping \ -H "Authorization: Bearer $(gcloud auth print-access-token)" Where PROJECT ID is your Apigee organization name or Google Cloud project ID.
- Data residency regions Data residency allows you to choose the region (physical location) during provisioning where data is stored.
- If you choose to enable data residency when provisioning an Apigee Subscription or Pay-as-you-go organization, the following services are in scope under Apigee's FedRAMP Authority To Operate (ATO): The regionalized Apigee organization's control plane, runtime plane, and analytics .

### Apigee locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/locations](https://docs.cloud.google.com/apigee/docs/locations)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These locations represent the geographical regions where Apigee resources, such as the Apigee runtime infrastructure and Apigee API Analytics data, are stored and accessed.
- Americas Control plane hosting jurisdiction description Control plane hosting jurisdiction name Details United States us (multiple regions in United States) Service endpoint: us-apigee.googleapis.com Canada ca (multiple regions in Canada) Service endpoint: ca-apigee.googleapis.com Consumer data region description Consumer data region name Details Iowa us-central1 Low CO 2 Oregon us-west1 Low CO 2 Los Angeles us-west2 Salt Lake City us-west3 Las Vegas us-west4 South Carolina us-east1 Northern Virginia us-east4 Columbus us-east5 Dallas us-south1 Montréal northamerica-northeast1 Low CO 2 Toronto northamerica-northeast2 Low CO 2 Europe Control plane hosting jurisdiction description Control plane hosting jurisdiction name Details European Union eu (multiple regions in the European Union) Service endpoint: eu-apigee.googleapis.com Germany de (multiple regions in Germany) Service endpoint: de-apigee.googleapis.com France fr (single region europe-west9) Service endpoint: fr-apigee.googleapis.com Switzerland ch (single region europe-west6) Service endpoint: ch-apigee.googleapis.com Consumer data region description Consumer data region name Details Belgium europe-west1 Low CO 2 Frankfurt europe-west3 Netherlands europe-west4 Zurich europe-west6 Low CO 2 Milan europe-west8 Paris europe-west9 Low CO 2 Turin europe-west12 Warsaw europe-central2 Madrid europe-southwest1 Low CO 2 Finland europe-north1 Low CO 2 Asia-Pacific Control plane hosting jurisdiction description Control plane hosting jurisdiction name Details Australia au (multiple regions in Australia) Service endpoint: au-apigee.googleapis.com India in (multiple regions in India) Service endpoint: in-apigee.googleapis.com Japan jp (multiple regions in Japan) Service endpoint: jp-apigee.googleapis.com Consumer data region description Consumer data region name Details Sydney australia-southeast1 Melbourne australia-southeast2 Mumbai asia-south1 Delhi asia-south2 Tokyo asia-northeast1 Osaka asia-northeast2 Middle East Control plane hosting juridiction description Control plane hosting jurisdiction name Details Qatar qa (single region me-central1) Service endpoint: qa-apigee.googleapis.com Saudi Arabia sa (single region me-central2) Service endpoint: sa-apigee.googleapis.com Israel il (single region me-west1) Service endpoint: il-apigee.googleapis.com Consumer data region description Consumer data region name Details Doha me-central1 Dammam me-central2 Tel Aviv me-west1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Americas Region description Region name Details Iowa us-central1 Low CO 2 API hub supported Oregon us-west1 Low CO 2 API hub supported Los Angeles us-west2 API hub supported Salt Lake City us-west3 API hub supported Las Vegas us-west4 API hub supported Montréal northamerica-northeast1 Low CO 2 API hub supported Toronto northamerica-northeast2 Low CO 2 API hub supported Mexico northamerica-south1 South Carolina us-east1 API hub supported Northern Virginia us-east4 API hub supported Columbus us-east5 API hub supported Dallas us-south1 API hub supported Santiago southamerica-west1 Low CO 2 API hub supported São Paulo southamerica-east1 Low CO 2 API hub supported Europe Region description Region name Details Belgium europe-west1 Low CO 2 API hub supported London europe-west2 Low CO 2 API hub supported Frankfurt europe-west3 API hub supported Netherlands europe-west4 API hub supported Zurich europe-west6 Low CO 2 API hub supported Milan europe-west8 API hub supported Paris europe-west9 Low CO 2 API hub supported Berlin europe-west10 API hub supported td> Turin europe-west12 API hub supported Warsaw europe-central2 API hub supported Madrid europe-southwest1 Low CO 2 API hub supported Finland europe-north1 Low CO 2 API hub supported Stockholm europe-north2 Low CO 2 Asia-Pacific Region description Region name Details Sydney australia-southeast1 API hub supported Melbourne australia-southeast2 API hub supported Mumbai asia-south1 API hub supported Delhi asia-south2 API hub supported Singapore asia-southeast1 API hub supported Jakarta asia-southeast2 API hub supported Bangkok asia-southeast3 API hub supported Tokyo asia-northeast1 API hub supported Osaka asia-northeast2 API hub supported Seoul asia-northeast3 API hub supported Taiwan asia-east1 API hub supported Hong Kong asia-east2 API hub supported Middle East Region description Region name Details Doha me-central1 API hub supported Dammam me-central2 API hub supported Tel Aviv me-west1 API hub supported Africa Region description Region name Details Johannesburg africa-south1 API hub supported Select an Apigee API Analytics region You select the region where your Apigee API Analytics data is stored when you provision your Apigee organization.
- Americas Region description Region name Details Iowa us-central1 Low CO 2 API hub supported Oregon us-west1 Low CO 2 API hub supported Los Angeles us-west2 API hub supported Salt Lake City us-west3 API hub supported Las Vegas us-west4 API hub supported Montréal northamerica-northeast1 Low CO 2 API hub supported Toronto northamerica-northeast2 Low CO 2 API hub supported South Carolina us-east1 API hub supported Northern Virginia us-east4 API hub supported Columbus us-east5 API hub supported Dallas us-south1 API hub supported Santiago southamerica-west1 Low CO 2 API hub supported São Paulo southamerica-east1 API hub supported Europe Region description Region name Details Belgium europe-west1 Low CO 2 London europe-west2 Low CO 2 API hub supported Frankfurt europe-west3 API hub supported Netherlands europe-west4 API hub supported Zurich europe-west6 Low CO 2 API hub supported Milan europe-west8 API hub supported Paris europe-west9 Low CO 2 API hub supported Berlin europe-west10 API hub supported Turin europe-west12 API hub supported Madrid europe-southwest1 Low CO 2 API hub supported Warsaw europe-central2 API hub supported Finland europe-north1 Low CO 2 API hub supported Asia-Pacific Region description Region name Details Sydney australia-southeast1 API hub supported Melbourne australia-southeast2 API hub supported Mumbai asia-south1 API hub supported Delhi asia-south2 API hub supported Singapore asia-southeast1 API hub supported Jakarta asia-southeast2 API hub supported Taiwan asia-east1 API hub supported Hong Kong asia-east2 API hub supported Tokyo asia-northeast1 API hub supported Osaka asia-northeast2 API hub supported Seoul asia-northeast3 API hub supported Middle East Region description Region name Details Doha me-central1 API hub supported Dammam me-central2 API hub supported Tel Aviv me-west1 API hub supported Africa Region description Region name Details Johannesburg africa-south1 API hub supported Select an Apigee API control plane hosting jurisdiction You select the specific Apigee control plane hosting jurisdiction where your data is stored when you provision your Apigee instance.

### API hub locations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations)
- Source ID: `site-docs-reference-2`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API hub and data residency Apigee API hub provides data residency to keep your data-at-rest physically within a specified geographical region or location.
- Supported locations The following table lists the Google Cloud regions where you can provision an API hub instance.
- This page provides information about data residency and the locations where API hub is available.
- To help comply with data residency requirements, Google Cloud gives you the ability to control where that data is stored.


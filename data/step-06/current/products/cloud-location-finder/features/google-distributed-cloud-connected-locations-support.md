---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:37.377Z"
product_name: "Cloud Location Finder"
product_slug: "cloud-location-finder"
feature_name: "Google Distributed Cloud connected locations support"
feature_slug: "google-distributed-cloud-connected-locations-support"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations"
  - "https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations"
  - "https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations/list"
  - "https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations/list"
keywords:
  - "distributed"
  - "connected"
  - "locations"
  - "location"
  - "finder"
  - "supports"
---

# Google Distributed Cloud connected locations support

Product: Cloud Location Finder
Coverage: MEDIUM

## Step 02 Summary

Cloud Location Finder supports Google Distributed Cloud connected locations.

## Extended Definition

Cloud Location Finder supports Google Distributed Cloud connected locations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations)
- [https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations)
- [https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations/list](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations/list)
- [https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations/list](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations/list)

## Supporting Pages

### "REST Resource: projects.locations.cloudLocations \_|\_ Cloud Location Finder\

- URL: [https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations)
- Source ID: `site-api-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Distributed, hybrid, and multicloud Cloud Location Finder Reference Send feedback REST Resource: projects.locations.cloudLocations Stay organized with collections Save and categorize content based on your preferences.
- CLOUD LOCATION TYPE GDCC ZONE CloudLocation type for Google Distributed Cloud Connected Zone.
- Methods get Retrieves a resource containing information about a cloud location. list Lists cloud locations under a given project and location. search Searches for cloud locations from a given source location.
- Unique name of the cloud location including project and location using the form: projects/{projectId}/locations/{location}/cloudLocations/{cloudLocation} containingCloudLocation string Output only.

### "REST Resource: projects.locations.cloudLocations \_|\_ Cloud Location Finder\

- URL: [https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations)
- Source ID: `site-api-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Distributed, hybrid, and multicloud Cloud Location Finder Reference Send feedback REST Resource: projects.locations.cloudLocations Stay organized with collections Save and categorize content based on your preferences.
- CLOUD LOCATION TYPE GDCC ZONE CloudLocation type for Google Distributed Cloud Connected Zone.
- Methods get Retrieves a resource containing information about a cloud location. list Lists cloud locations under a given project and location. search Searches for cloud locations from a given source location.
- Unique name of the cloud location including project and location using the form: projects/{projectId}/locations/{location}/cloudLocations/{cloudLocation} containingCloudLocation string Output only.

### "Method: projects.locations.cloudLocations.list \_|\_ Cloud Location Finder\

- URL: [https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations/list](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1/projects.locations.cloudLocations/list)
- Source ID: `site-api-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Distributed, hybrid, and multicloud Cloud Location Finder Reference Send feedback Method: projects.locations.cloudLocations.list Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the parent resource: cloudlocationfinder.cloudLocations.list For more information, see the IAM documentation .
- HTTP request GET https://cloudlocationfinder.googleapis.com/v1/{parent=projects/ /locations/ }/cloudLocations The URL uses gRPC Transcoding syntax.
- If successful, the response body contains data with the following structure: JSON representation { "cloudLocations" : [ { object ( CloudLocation ) } ] , "nextPageToken" : string } Fields cloudLocations[] object ( CloudLocation ) Output only.

### "Method: projects.locations.cloudLocations.list \_|\_ Cloud Location Finder\

- URL: [https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations/list](https://docs.cloud.google.com/location-finder/docs/reference/rest/v1alpha/projects.locations.cloudLocations/list)
- Source ID: `site-api-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Distributed, hybrid, and multicloud Cloud Location Finder Reference Send feedback Method: projects.locations.cloudLocations.list Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the parent resource: cloudlocationfinder.cloudLocations.list For more information, see the IAM documentation .
- HTTP request GET https://cloudlocationfinder.googleapis.com/v1alpha/{parent=projects/ /locations/ }/cloudLocations The URL uses gRPC Transcoding syntax.
- If successful, the response body contains data with the following structure: JSON representation { "cloudLocations" : [ { object ( CloudLocation ) } ] , "nextPageToken" : string } Fields cloudLocations[] object ( CloudLocation ) Output only.


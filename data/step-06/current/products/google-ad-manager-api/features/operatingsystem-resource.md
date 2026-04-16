---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.684Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "OperatingSystem resource"
feature_slug: "operatingsystem-resource"
latest_feature_date: "2025-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
  - "https://developers.google.com/ad-manager/api/beta/authentication"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications"
keywords:
  - "operatingsystem"
  - "resource"
  - "the"
  - "api"
  - "now"
  - "includes"
---

# OperatingSystem resource

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API now includes the OperatingSystem resource.

## Extended Definition

The API now includes the OperatingSystem resource.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- [https://developers.google.com/ad-manager/api/beta/authentication](https://developers.google.com/ad-manager/api/beta/authentication)
- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits)
- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications)

## Supporting Pages

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This API allows managing Ad Manager data through various REST resources.
- REST Resource: v1.networks.reports Methods create POST /v1/{parent}/reports API to create a Report object. get GET /v1/{name} API to retrieve a Report object. list GET /v1/{parent}/reports API to retrieve a list of Report objects. patch PATCH /v1/{report.name} API to update a Report object. run POST /v1/{name}:run Initiates the execution of an existing report asynchronously.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://admanager.googleapis.com REST Resource: v1.networks Methods get GET /v1/{name} API to retrieve a Network object. list GET /v1/networks API to retrieve all the networks the current user has access to.

### Authentication \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/authentication](https://developers.google.com/ad-manager/api/beta/authentication)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-05 UTC."],[],["To access the Ad Manager API, you need an access token, generated using Application Default Credentials (ADC) or custom credentials.
- Install the Google Cloud CLI, then initialize it by running the following command: gcloud init Create local authentication credentials for your Google Account and set the project ID to a project where the Ad Manager API is enabled: gcloud auth application-default login --scopes = "https://www.googleapis.com/auth/admanager" gcloud auth application-default set-quota-project PROJECT ID Alternatively, authenticate as a Service Account setting the environment variable GOOGLE APPLICATION CREDENTIALS to the path of your key file.
- Create credentials Click the tab for your authentication type and follow the instructions to create your credentials: Service Account On Google Cloud To authenticate a workload running on Google Cloud, you use the credentials of the service account attached to the compute resource where your code is running.
- For information about which resources you can attach a service account to, and help with attaching the service account to the resource, see the documentation on attaching a service account .

### "REST Resource: networks.adUnits \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The AdUnit resource represents an ad unit and includes various fields such as name, ID, parent path, sizes, labels, and status.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-10 UTC."],[],["The content details the AdUnit resource, its JSON representation, and related components.
- Resource: AdUnit JSON representation AdUnitParent JSON representation AdUnitStatus TargetWindow AdUnitSize JSON representation EnvironmentType LabelFrequencyCap JSON representation FrequencyCap JSON representation TimeUnit SmartSizeMode Methods Resource: AdUnit The AdUnit resource.
- Home Products Ad Manager API (Beta) Reference Send feedback REST Resource: networks.adUnits Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: networks.applications \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Ad Manager API (Beta) Reference Send feedback REST Resource: networks.applications Stay organized with collections Save and categorize content based on your preferences.
- Resource: Application JSON representation Methods Resource: Application An application that has been added to or "claimed" by the network to be used for targeting purposes.
- The API provides get and list methods to retrieve individual Application objects or a list of Application objects, respectively.
- Page Summary outlined flag The Application resource represents a mobile app claimed by a network for targeting purposes.


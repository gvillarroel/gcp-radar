---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.680Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Contact resource read/write methods"
feature_slug: "contact-resource-read-write-methods"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/migration"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
  - "https://developers.google.com/ad-manager/api/beta/authentication"
  - "https://developers.google.com/ad-manager/api/beta/reports"
keywords:
  - "contact"
  - "resource"
  - "read"
  - "write"
  - "methods"
  - "the"
  - "api"
  - "now"
---

# Contact resource read/write methods

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API now supports reading and writing Contact resources.

## Extended Definition

The API now supports reading and writing Contact resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- [https://developers.google.com/ad-manager/api/beta/authentication](https://developers.google.com/ad-manager/api/beta/authentication)
- [https://developers.google.com/ad-manager/api/beta/reports](https://developers.google.com/ad-manager/api/beta/reports)

## Supporting Pages

### "Migrate from the Ad Manager SOAP API \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/migration](https://developers.google.com/ad-manager/api/beta/migration)
- Source ID: `site-docs-root-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Conversely, the REST API can only read, write, and run Interactive Reports.
- The Ad Manager API also has methods for reading single entities.
- When multithreading, use the pagination token from the first page to ensure you are reading from the same result set: First thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } Second thread GET networks/ ${ NETWORK CODE } /orders?pageSize = 50&pageToken = ${ TOKEN FROM INITIAL REQUEST } & skip = 50 Migrate reports The SOAP API can only read and run reports in the deprecated Reports tool.
- The following table shows an example mapping for Order methods: SOAP method REST methods getOrdersByStatement networks.orders.get networks.orders.list Authenticate To authenticate with the Ad Manager API (Beta), you can use your existing Ad Manager SOAP API credentials or create new ones.

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- REST Resource: v1.networks.contacts Methods batchCreate POST /v1/{parent}/contacts:batchCreate API to batch create Contact objects. batchUpdate POST /v1/{parent}/contacts:batchUpdate API to batch update Contact objects. create POST /v1/{parent}/contacts API to create a Contact object. get GET /v1/{name} API to retrieve a Contact object. list GET /v1/{parent}/contacts API to retrieve a list of Contact objects. patch PATCH /v1/{contact.name} API to update a Contact object.
- REST Resource: v1.networks.reports Methods create POST /v1/{parent}/reports API to create a Report object. get GET /v1/{name} API to retrieve a Report object. list GET /v1/{parent}/reports API to retrieve a list of Report objects. patch PATCH /v1/{report.name} API to update a Report object. run POST /v1/{name}:run Initiates the execution of an existing report asynchronously.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://admanager.googleapis.com REST Resource: v1.networks Methods get GET /v1/{name} API to retrieve a Network object. list GET /v1/networks API to retrieve all the networks the current user has access to.

### Authentication \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/authentication](https://developers.google.com/ad-manager/api/beta/authentication)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In other words, the full admanager read and write scope only grants write access to entities the user can edit in the Ad Manager UI.
- We recommend using the narrower admanager.readonly scope if your application does not need to write data.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-05 UTC."],[],["To access the Ad Manager API, you need an access token, generated using Application Default Credentials (ADC) or custom credentials.
- Install the Google Cloud CLI, then initialize it by running the following command: gcloud init Create local authentication credentials for your Google Account and set the project ID to a project where the Ad Manager API is enabled: gcloud auth application-default login --scopes = "https://www.googleapis.com/auth/admanager" gcloud auth application-default set-quota-project PROJECT ID Alternatively, authenticate as a Service Account setting the environment variable GOOGLE APPLICATION CREDENTIALS to the path of your key file.

### Create and run reports \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reports](https://developers.google.com/ad-manager/api/beta/reports)
- Source ID: `site-docs-root-2`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Result name in the format networks/[NETWORK CODE]/reports/[REPORT ID]/results/[RESULT ID] p result . response . report result else puts "No response received." end Node.js // Run request const [ operation ] = await admanagerClient . runReport ( request ); const [ response ] = await operation . promise (); // Result name in the format networks/[NETWORK CODE]/reports/[REPORT ID]/results/[RESULT ID] console . log ( response . reportResult ); cURL Request curl -H "Authorization: Bearer ${ ACCESS TOKEN } " \ "https://admanager.googleapis.com/v1/networks/ ${ NETWORK CODE } /operations/reports/runs/ ${ OPERATION ID } " Response { "name" : "networks/234093456/operations/reports/runs/6485392645" , "metadata" : { "@type" : "type.googleapis.com/google.ads.admanager.v1.RunReportMetadata" , "percentComplete" : 100 , "report" : "networks/234093456/reports/4555265029" }, "done" : true , "response" : { "@type" : "type.googleapis.com/google.ads.admanager.v1.RunReportResponse" , "reportResult" : "networks/234093456/reports/4555265029/results/7031632628" } } Read result rows The Result resource has a single method, networks.reports.results.fetchRows , to read a paginated list of rows.
- 0 , # Max poll delay of 30 seconds timeout : 60 60 # Total timeout of 1 hour in seconds } result = client . run report request result . wait until done! ( retry policy : options ) if result . response? p result . response else puts "No response received." end Node.js const options = { initialRetryDelayMillis : 500 , // Initial delay of 500ms retryDelayMultiplier : 1.5 , maxRetryDelayMillis : 30 , // Max poll delay of 30 seconds totalTimeoutMillis : 60 60 1000 // Total timeout of 1 hour } const [ operation ] = await admanagerClient . runReport ( request ); operation . backoffSettings = options ; const [ response ] = await operation . promise (); console . log ( response ); cURL Request curl -H "Authorization: Bearer ${ ACCESS TOKEN } " \ "https://admanager.googleapis.com/v1/networks/ ${ NETWORK CODE } /operations/reports/runs/ ${ OPERATION ID } " Response { "name" : "networks/234093456/operations/reports/runs/6485392645" , "metadata" : { "@type" : "type.googleapis.com/google.ads.admanager.v1.RunReportMetadata" , "percentComplete" : 50 , "report" : "networks/234093456/reports/4555265029" }, "done" : false , } Get the result resource name After the report run Operation is complete, it contains the resource name of the Result .
- RunReportResourceNamesSnippet . g . cs PHP use Google\Ads\AdManager\V1\Client\ReportServiceClient ; use Google\Ads\AdManager\V1\RunReportRequest ; use Google\Ads\AdManager\V1\RunReportResponse ; use Google\ApiCore\ApiException ; use Google\ApiCore\OperationResponse ; use Google\Rpc\Status ; function run report sample ( string $formattedName ) : void { // Create a client. $reportServiceClient = new ReportServiceClient (); // Prepare the request message. $request = ( new RunReportRequest ()) - > setName ( $formattedName ); // Call the API and handle any network failures. try { $response = $reportServiceClient - > runReport ( $request ); $response - > pollUntilComplete (); if ( $response - > operationSucceeded ()) { $result = $response - > getResult (); printf ( 'Operation successful with response data: %s' .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-12 UTC."],[],["The Ad Manager API allows you to create, run, and read reports.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.678Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Application resource"
feature_slug: "application-resource"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications"
  - "https://developers.google.com/ad-manager/api/beta/authentication"
  - "https://developers.google.com/ad-manager/api/authentication"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications/list"
keywords:
  - "application"
  - "resource"
  - "the"
  - "api"
  - "now"
  - "includes"
---

# Application resource

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API now includes the Application resource.

## Extended Definition

The API now includes the Application resource.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications)
- [https://developers.google.com/ad-manager/api/beta/authentication](https://developers.google.com/ad-manager/api/beta/authentication)
- [https://developers.google.com/ad-manager/api/authentication](https://developers.google.com/ad-manager/api/authentication)
- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications/list](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications/list)

## Supporting Pages

### "REST Resource: networks.applications \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Ad Manager API (Beta) Reference Send feedback REST Resource: networks.applications Stay organized with collections Save and categorize content based on your preferences.
- Resource: Application JSON representation Methods Resource: Application An application that has been added to or "claimed" by the network to be used for targeting purposes.
- The API provides get and list methods to retrieve individual Application objects or a list of Application objects, respectively.
- Page Summary outlined flag The Application resource represents a mobile app claimed by a network for targeting purposes.

### Authentication \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/authentication](https://developers.google.com/ad-manager/api/beta/authentication)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-05 UTC."],[],["To access the Ad Manager API, you need an access token, generated using Application Default Credentials (ADC) or custom credentials.
- Install the Google Cloud CLI, then initialize it by running the following command: gcloud init Create local authentication credentials for your Google Account and set the project ID to a project where the Ad Manager API is enabled: gcloud auth application-default login --scopes = "https://www.googleapis.com/auth/admanager" gcloud auth application-default set-quota-project PROJECT ID Alternatively, authenticate as a Service Account setting the environment variable GOOGLE APPLICATION CREDENTIALS to the path of your key file.
- Linux or macOS export GOOGLE APPLICATION CREDENTIALS = KEY FILE PATH Windows set GOOGLE APPLICATION CREDENTIALS = KEY FILE PATH Web application Open the Google API Console Credentials page .
- The Ad Manager client libraries use Application Default Credentials to generate access tokens with Ad Manager API scopes.

### Authentication \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/authentication](https://developers.google.com/ad-manager/api/authentication)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Determine your authentication type Check the table below to see which authentication type is most appropriate for your Ad Manager API application: Choose your OAuth2 authentication type Service account Choose this if you only need access to your own Ad Manager data.
- All Google Ad Manager API calls must be authorized through OAuth2 an open standard that allows users to grant permissions to third-party applications, so the application can interact with web services on the user's behalf.
- Generating OAuth2 credentials involves creating a new project in the Google API Console and following specific steps for either service account or web application types.
- OAuth2 enables your Ad Manager API client application to access a user's Ad Manager account without having to handle or store the user's username or password.

### "Method: networks.applications.list \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications/list](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications/list)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The API allows retrieval of a list of Application objects using an HTTP GET request to a specified endpoint.
- If successful, the response body contains data with the following structure: JSON representation { "applications" : [ { object ( Application ) } ] , "nextPageToken" : string , "totalSize" : integer } Fields applications[] object ( Application ) The Application objects from the specified network. nextPageToken string A token, which can be sent as pageToken to retrieve the next page.
- For more information, see https://developers.google.com/ad-manager/api/beta/field-masks Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/admanager https://www.googleapis.com/auth/admanager.readonly For more information, see the OAuth 2.0 Overview .
- Home Products Ad Manager API (Beta) Reference Send feedback Method: networks.applications.list Stay organized with collections Save and categorize content based on your preferences.


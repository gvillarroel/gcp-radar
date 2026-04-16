---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.135Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Hurma connector"
feature_slug: "hurma-connector"
latest_feature_date: "2025-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/data-source-parameters"
  - "https://developers.google.com/looker-studio/connector/firebase-cache"
  - "https://developers.google.com/looker-studio/connector/build"
keywords:
  - "hurma"
  - "connector"
  - "connects"
  - "looker"
  - "studio"
  - "through"
  - "custom"
  - "json"
---

# Hurma connector

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Connects Looker Studio to Hurma data through a custom JSON source.

## Extended Definition

Connects Looker Studio to Hurma data through a custom JSON source.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- [https://developers.google.com/looker-studio/connector/firebase-cache](https://developers.google.com/looker-studio/connector/firebase-cache)
- [https://developers.google.com/looker-studio/connector/build](https://developers.google.com/looker-studio/connector/build)

## Supporting Pages

### "Overridable config parameters \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When to avoid defining a parameter as overridable It is recommended to learn how Connectors, Data Sources, and Reports work in relation to each other by reviewing How Looker Studio connects to your data .
- For example, if the parameter name is ds0.zipcode , to set ZIP Code to 94094 , the JSON is as follows: { "ds0.zipcode" : "94094" } URL Encode the parameter object After you create the parameter object, use JSON.stringify() to turn it into a string, then use [encodeURIComponent] to URL encode it. var params = { "ds0.zipcode" : "94094" }; var paramsAsString = JSON . stringify ( params ); var encodedParams = encodeURIComponent ( paramsAsString ) This results in the following encoded string: "%7B%22ds0.zipcode%22%3A%2294094%22%7D" Build the report URL Once you have the URL encoded parameter object, append it to the report view URL using the params query parameter. https://lookerstudio.google.com/reporting/ REPORT ID /page/ PAGE ID ?params=%7B%22ds0.zipcode%22%3A%2294094%22%7D Make sure you replace REPORT ID and PAGE ID with the values for your report and page.
- Home Products Looker Studio Community Connectors Overridable config parameters Stay organized with collections Save and categorize content based on your preferences.
- Report URL parameters For parameters that are allowed to be modified in the report URL , values can be set through a URL-encoded JSON object appended to the report URL in view mode .

### Cache with Firebase \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/firebase-cache](https://developers.google.com/looker-studio/connector/firebase-cache)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Enhance dashboard performance and bypass external API rate limits by implementing a custom cache for your Looker Studio connector.
- Home Products Looker Studio Community Connectors Cache with Firebase Stay organized with collections Save and categorize content based on your preferences.
- When you use Looker Studio Advanced Services , your connector code in Apps Script does not have access to the data.
- Service account should have Firebase Admin IAM role. / function getServiceAccountCreds () { return JSON . parse ( scriptProperties . getProperty ( SERVICE ACCOUNT CREDS )); } function getOauthService () { var serviceAccountCreds = getServiceAccountCreds (); var serviceAccountKey = serviceAccountCreds [ SERVICE ACCOUNT KEY ]; var serviceAccountEmail = serviceAccountCreds [ SERVICE ACCOUNT EMAIL ]; return OAuth2 . createService ( 'FirebaseCache' ) . setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' ) . setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' ) . setPrivateKey ( serviceAccountKey ) . setIssuer ( serviceAccountEmail ) . setPropertyStore ( scriptProperties ) . setCache ( CacheService . getScriptCache ()) . setScope ([ 'https://www.googleapis.com/auth/userinfo.email' , 'https://www.googleapis.com/auth/firebase.database' ]); } Additional resources The Chrome UX Connector facilitates a dashboard based on a 20GB BigQuery table to thousands of users.

### "Build a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/build](https://developers.google.com/looker-studio/connector/build)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Also standardizes the object structure for single vs multiple packages. @param {Object} request Data request parameters. @param {string} responseString Response from the API. @return {Object} Contains package names as keys and associated download count information(object) as values. / function normalizeResponse ( request , responseString ) { var response = JSON . parse ( responseString ); var package list = request . configParams . package . split ( ',' ); var mapped response = {}; if ( package list . length == 1 ) { mapped response [ package list [ 0 ]] = response ; } else { mapped response = response ; } return mapped response ; } / Formats the parsed response from external data source into correct tabular format and returns only the requestedFields @param {Object} parsedResponse The response string from external data source parsed into an object in a standard format. @param {Array} requestedFields The fields requested in the getData request. @returns {Array} Array containing rows of data in key-value pairs for each field. / function getFormattedData ( response , requestedFields ) { var data = []; Object . keys ( response ). map ( function ( packageName ) { var package = response [ packageName ]; var downloadData = package . downloads ; var formattedData = downloadData . map ( function ( dailyDownload ) { return formatData ( requestedFields , packageName , dailyDownload ); }); data = data . concat ( formattedData ); }); return data ; } Complete the project manifest The manifest file contains information about your Community Connector that is required to deploy and use your connector in Looker Studio.
- Update the manifest to include the following data: npm-downloads/src/appsscript.json View on GitHub { "dependencies" : { "libraries" : [] }, "dataStudio" : { "name" : "npm Downloads" , "logoUrl" : "https://raw.githubusercontent.com/npm/logos/master/npm%20square/n-64.png" , "company" : "Google Data Studio Developer Relations" , "companyUrl" : "https://developers.google.com/datastudio/" , "addonUrl" : "https://github.com/googledatastudio/community-connectors/tree/master/npm-downloads#readme" , "supportUrl" : "https://github.com/googledatastudio/community-connectors/issues" , "description" : "Get npm package download counts." , "sources" : [ "npm" ], "templates" : { "default" : "1twu0sHjqR5dELAPyGJcw4GS3-D0 NTrQ" } }, "oauthScopes" : [ "https://www.googleapis.com/auth/script.external request" ] } For details on Looker Studio manifest, see the reference manifest reference .
- The connector code utilizes specific functions like getAuthType() , getConfig() , getSchema() , and getData() to interact with Looker Studio and fetch data from the desired source.
- Home Products Looker Studio Community Connectors Build a Community Connector Stay organized with collections Save and categorize content based on your preferences.


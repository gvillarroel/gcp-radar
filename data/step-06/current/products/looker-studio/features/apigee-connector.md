---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.204Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Apigee connector"
feature_slug: "apigee-connector"
latest_feature_date: "2023-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/build"
  - "https://developers.google.com/looker-studio/connector/data-source-parameters"
  - "https://developers.google.com/looker-studio/connector/publish-connector"
keywords:
  - "apigee"
  - "connector"
  - "lets"
  - "users"
  - "build"
  - "looker"
  - "studio"
  - "reports"
---

# Apigee connector

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Apigee connector lets users build Looker Studio reports and dashboards from Apigee analytics and monetization data.

## Extended Definition

The Apigee connector lets users build Looker Studio reports and dashboards from Apigee analytics and monetization data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/build](https://developers.google.com/looker-studio/connector/build)
- [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- [https://developers.google.com/looker-studio/connector/publish-connector](https://developers.google.com/looker-studio/connector/publish-connector)

## Supporting Pages

### "Build a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/build](https://developers.google.com/looker-studio/connector/build)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Community Connectors Build a Community Connector Stay organized with collections Save and categorize content based on your preferences.
- Also standardizes the object structure for single vs multiple packages. @param {Object} request Data request parameters. @param {string} responseString Response from the API. @return {Object} Contains package names as keys and associated download count information(object) as values. / function normalizeResponse ( request , responseString ) { var response = JSON . parse ( responseString ); var package list = request . configParams . package . split ( ',' ); var mapped response = {}; if ( package list . length == 1 ) { mapped response [ package list [ 0 ]] = response ; } else { mapped response = response ; } return mapped response ; } / Formats the parsed response from external data source into correct tabular format and returns only the requestedFields @param {Object} parsedResponse The response string from external data source parsed into an object in a standard format. @param {Array} requestedFields The fields requested in the getData request. @returns {Array} Array containing rows of data in key-value pairs for each field. / function getFormattedData ( response , requestedFields ) { var data = []; Object . keys ( response ). map ( function ( packageName ) { var package = response [ packageName ]; var downloadData = package . downloads ; var formattedData = downloadData . map ( function ( dailyDownload ) { return formatData ( requestedFields , packageName , dailyDownload ); }); data = data . concat ( formattedData ); }); return data ; } Complete the project manifest The manifest file contains information about your Community Connector that is required to deploy and use your connector in Looker Studio.
- Update the manifest to include the following data: npm-downloads/src/appsscript.json View on GitHub { "dependencies" : { "libraries" : [] }, "dataStudio" : { "name" : "npm Downloads" , "logoUrl" : "https://raw.githubusercontent.com/npm/logos/master/npm%20square/n-64.png" , "company" : "Google Data Studio Developer Relations" , "companyUrl" : "https://developers.google.com/datastudio/" , "addonUrl" : "https://github.com/googledatastudio/community-connectors/tree/master/npm-downloads#readme" , "supportUrl" : "https://github.com/googledatastudio/community-connectors/issues" , "description" : "Get npm package download counts." , "sources" : [ "npm" ], "templates" : { "default" : "1twu0sHjqR5dELAPyGJcw4GS3-D0 NTrQ" } }, "oauthScopes" : [ "https://www.googleapis.com/auth/script.external request" ] } For details on Looker Studio manifest, see the reference manifest reference .
- An invalid or blank entry will revert to the default value.' ); config . newTextInput () . setId ( 'package' ) . setName ( 'Enter a single package name or multiple names separated by commas (no spaces!)' ) . setHelpText ( 'e.g. "googleapis" or "package,somepackage,anotherpackage"' ) . setPlaceholder ( DEFAULT PACKAGE ) . setAllowOverride ( true ); config . setDateRangeRequired ( true ); return config . build (); } Note: The DataStudio Apps Script service makes it easier to write a community connector.

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
- For example, a connector providing weather data could include a location parameter that lets report viewers request a weather report from a locale different than the default.

### "Publish a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/publish-connector](https://developers.google.com/looker-studio/connector/publish-connector)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Publishing your Community Connector in the Looker Studio Connector Gallery increases its visibility and allows all Looker Studio users to easily find and use it.
- Publishing will let all Looker Studio users easily find your connector and provide visibility to your connector based on connector name, description, and listed data sources.
- Remove your published connector from the gallery To remove your Community Connector from the gallery, send a removal request to looker-studio-developer-feedback@google.com .
- Home Products Looker Studio Community Connectors Publish a Community Connector Stay organized with collections Save and categorize content based on your preferences.


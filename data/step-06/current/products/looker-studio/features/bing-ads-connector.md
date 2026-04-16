---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.129Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Bing Ads connector"
feature_slug: "bing-ads-connector"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/build"
  - "https://developers.google.com/looker-studio/connector/publish-connector"
  - "https://developers.google.com/looker-studio/connector/use"
keywords:
  - "bing"
  - "ads"
  - "connector"
  - "connects"
  - "looker"
  - "studio"
---

# Bing Ads connector

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Connects Looker Studio to Bing Ads data.

## Extended Definition

Connects Looker Studio to Bing Ads data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/build](https://developers.google.com/looker-studio/connector/build)
- [https://developers.google.com/looker-studio/connector/publish-connector](https://developers.google.com/looker-studio/connector/publish-connector)
- [https://developers.google.com/looker-studio/connector/use](https://developers.google.com/looker-studio/connector/use)

## Supporting Pages

### "Publish a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/publish-connector](https://developers.google.com/looker-studio/connector/publish-connector)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag Publishing your Community Connector in the Looker Studio Connector Gallery increases its visibility and allows all Looker Studio users to easily find and use it.
- Publishing will let all Looker Studio users easily find your connector and provide visibility to your connector based on connector name, description, and listed data sources.
- Remove your published connector from the gallery To remove your Community Connector from the gallery, send a removal request to looker-studio-developer-feedback@google.com .
- Home Products Looker Studio Community Connectors Publish a Community Connector Stay organized with collections Save and categorize content based on your preferences.

### "Use and test a Community Connector \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/use](https://developers.google.com/looker-studio/connector/use)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To load your connector in Looker Studio, replace the HEAD DEPLOYMENT ID placeholder in the following link with your connector’s Head Deployment ID and follow the link in your browser: https://lookerstudio.google.com/datasources/create?connectorId= HEAD DEPLOYMENT ID For more information on deployments, view the Deploy a Community Connector guide.
- Home Products Looker Studio Community Connectors Use and test a Community Connector Stay organized with collections Save and categorize content based on your preferences.
- As you develop your Community Connector, you can use and test it in Looker Studio using the Head Deployment.

### "Build a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/build](https://developers.google.com/looker-studio/connector/build)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Also standardizes the object structure for single vs multiple packages. @param {Object} request Data request parameters. @param {string} responseString Response from the API. @return {Object} Contains package names as keys and associated download count information(object) as values. / function normalizeResponse ( request , responseString ) { var response = JSON . parse ( responseString ); var package list = request . configParams . package . split ( ',' ); var mapped response = {}; if ( package list . length == 1 ) { mapped response [ package list [ 0 ]] = response ; } else { mapped response = response ; } return mapped response ; } / Formats the parsed response from external data source into correct tabular format and returns only the requestedFields @param {Object} parsedResponse The response string from external data source parsed into an object in a standard format. @param {Array} requestedFields The fields requested in the getData request. @returns {Array} Array containing rows of data in key-value pairs for each field. / function getFormattedData ( response , requestedFields ) { var data = []; Object . keys ( response ). map ( function ( packageName ) { var package = response [ packageName ]; var downloadData = package . downloads ; var formattedData = downloadData . map ( function ( dailyDownload ) { return formatData ( requestedFields , packageName , dailyDownload ); }); data = data . concat ( formattedData ); }); return data ; } Complete the project manifest The manifest file contains information about your Community Connector that is required to deploy and use your connector in Looker Studio.
- Update the manifest to include the following data: npm-downloads/src/appsscript.json View on GitHub { "dependencies" : { "libraries" : [] }, "dataStudio" : { "name" : "npm Downloads" , "logoUrl" : "https://raw.githubusercontent.com/npm/logos/master/npm%20square/n-64.png" , "company" : "Google Data Studio Developer Relations" , "companyUrl" : "https://developers.google.com/datastudio/" , "addonUrl" : "https://github.com/googledatastudio/community-connectors/tree/master/npm-downloads#readme" , "supportUrl" : "https://github.com/googledatastudio/community-connectors/issues" , "description" : "Get npm package download counts." , "sources" : [ "npm" ], "templates" : { "default" : "1twu0sHjqR5dELAPyGJcw4GS3-D0 NTrQ" } }, "oauthScopes" : [ "https://www.googleapis.com/auth/script.external request" ] } For details on Looker Studio manifest, see the reference manifest reference .
- The connector code utilizes specific functions like getAuthType() , getConfig() , getSchema() , and getData() to interact with Looker Studio and fetch data from the desired source.
- Home Products Looker Studio Community Connectors Build a Community Connector Stay organized with collections Save and categorize content based on your preferences.


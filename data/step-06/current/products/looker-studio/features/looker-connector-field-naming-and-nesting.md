---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.145Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Looker connector field naming and nesting"
feature_slug: "looker-connector-field-naming-and-nesting"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/calculated-fields"
  - "https://developers.google.com/looker-studio/connector/build"
  - "https://developers.google.com/looker-studio/connector/reference"
keywords:
  - "looker"
  - "connector"
  - "field"
  - "naming"
  - "nesting"
  - "now"
  - "hides"
  - "prepended"
---

# Looker connector field naming and nesting

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Looker connector now hides prepended view names and nests fields under their corresponding views.

## Extended Definition

The Looker connector now hides prepended view names and nests fields under their corresponding views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- [https://developers.google.com/looker-studio/connector/build](https://developers.google.com/looker-studio/connector/build)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)

## Supporting Pages

### "Using calculated fields in schema \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Community Connectors Using calculated fields in schema Stay organized with collections Save and categorize content based on your preferences.
- Formula aggregation "SUM($cost) / SUM($units)" AUTO "$cost + $units" NONE Examples of calculated fields in schema function getSchema ( request ) { var cc = DataStudioApp . createCommunityConnector (); var fields = cc . getFields (); var types = cc .
- Page Summary outlined flag The formula field property enables the addition of calculated fields to your connector's schema using supported functions.
- The formula field property can be used to add calculated fields to your connector's schema.

### "Build a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/build](https://developers.google.com/looker-studio/connector/build)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Also standardizes the object structure for single vs multiple packages. @param {Object} request Data request parameters. @param {string} responseString Response from the API. @return {Object} Contains package names as keys and associated download count information(object) as values. / function normalizeResponse ( request , responseString ) { var response = JSON . parse ( responseString ); var package list = request . configParams . package . split ( ',' ); var mapped response = {}; if ( package list . length == 1 ) { mapped response [ package list [ 0 ]] = response ; } else { mapped response = response ; } return mapped response ; } / Formats the parsed response from external data source into correct tabular format and returns only the requestedFields @param {Object} parsedResponse The response string from external data source parsed into an object in a standard format. @param {Array} requestedFields The fields requested in the getData request. @returns {Array} Array containing rows of data in key-value pairs for each field. / function getFormattedData ( response , requestedFields ) { var data = []; Object . keys ( response ). map ( function ( packageName ) { var package = response [ packageName ]; var downloadData = package . downloads ; var formattedData = downloadData . map ( function ( dailyDownload ) { return formatData ( requestedFields , packageName , dailyDownload ); }); data = data . concat ( formattedData ); }); return data ; } Complete the project manifest The manifest file contains information about your Community Connector that is required to deploy and use your connector in Looker Studio.
- Update the manifest to include the following data: npm-downloads/src/appsscript.json View on GitHub { "dependencies" : { "libraries" : [] }, "dataStudio" : { "name" : "npm Downloads" , "logoUrl" : "https://raw.githubusercontent.com/npm/logos/master/npm%20square/n-64.png" , "company" : "Google Data Studio Developer Relations" , "companyUrl" : "https://developers.google.com/datastudio/" , "addonUrl" : "https://github.com/googledatastudio/community-connectors/tree/master/npm-downloads#readme" , "supportUrl" : "https://github.com/googledatastudio/community-connectors/issues" , "description" : "Get npm package download counts." , "sources" : [ "npm" ], "templates" : { "default" : "1twu0sHjqR5dELAPyGJcw4GS3-D0 NTrQ" } }, "oauthScopes" : [ "https://www.googleapis.com/auth/script.external request" ] } For details on Looker Studio manifest, see the reference manifest reference .
- The following example fetches data based on the incoming request and returns the package statistics: npm-downloads/src/main.js View on GitHub // https://developers.google.com/datastudio/connector/reference#getdata function getData ( request ) { request . configParams = validateConfig ( request . configParams ); var requestedFields = getFields (). forIds ( request . fields . map ( function ( field ) { return field . name ; }) ); try { var apiResponse = fetchDataFromApi ( request ); var normalizedResponse = normalizeResponse ( request , apiResponse ); var data = getFormattedData ( normalizedResponse , requestedFields ); } catch ( e ) { cc . newUserError () . setDebugText ( 'Error fetching data from API.
- An info and an input field are defined in the getConfig() function: npm-downloads/src/main.js View on GitHub // https://developers.google.com/datastudio/connector/reference#getconfig function getConfig () { var config = cc . getConfig (); config . newInfo () . setId ( 'instructions' ) . setText ( 'Enter npm package names to fetch their download count.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.
- The response contains the connector configuration with the following structure: { configParams : [ { type : string ( ConfigType ), name : string , displayName : string , helpText : string , placeholder : string , isDynamic : boolean , parameterControl : { allowOverride : boolean }, options : [ { label : string , value : string } ] } ], dateRangeRequired : boolean , isSteppedConfig : boolean } Field name Type Description configParams[] object The user provided values required by the connector.
- Looker Studio doesn't currently use this field, but may in the future. semantics.isReaggregatable boolean true indicates that Aggregation can be applied to this field; In Looker Studio Aggregation is set to SUM by default and the user can change the Aggregation . false indicates Aggregation should not be applied to this field; In Looker Studio Aggregation is set to Auto by default and the user can't change the Aggregation .
- The parameter JavaScript object contains data with the following structure: { "configParams" : object } Field Name Type Description configParams Object A JavaScript object containing the user provided values for the config parameters defined by the connector.


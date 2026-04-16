---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.144Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Google Ads connector additional fields"
feature_slug: "google-ads-connector-additional-fields"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/calculated-fields"
  - "https://developers.google.com/looker-studio/connector/build"
  - "https://developers.google.com/looker-studio/connector/reference"
keywords:
  - "ads"
  - "connector"
  - "additional"
  - "fields"
  - "now"
  - "exposes"
  - "conversion"
  - "profit"
---

# Google Ads connector additional fields

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Google Ads connector now exposes additional conversion, profit, and customer fields.

## Extended Definition

The Google Ads connector now exposes additional conversion, profit, and customer fields.

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
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Formula aggregation "SUM($cost) / SUM($units)" AUTO "$cost + $units" NONE Examples of calculated fields in schema function getSchema ( request ) { var cc = DataStudioApp . createCommunityConnector (); var fields = cc . getFields (); var types = cc .
- Home Products Looker Studio Community Connectors Using calculated fields in schema Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The formula field property enables the addition of calculated fields to your connector's schema using supported functions.
- The formula field property can be used to add calculated fields to your connector's schema.

### "Build a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/build](https://developers.google.com/looker-studio/connector/build)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Also standardizes the object structure for single vs multiple packages. @param {Object} request Data request parameters. @param {string} responseString Response from the API. @return {Object} Contains package names as keys and associated download count information(object) as values. / function normalizeResponse ( request , responseString ) { var response = JSON . parse ( responseString ); var package list = request . configParams . package . split ( ',' ); var mapped response = {}; if ( package list . length == 1 ) { mapped response [ package list [ 0 ]] = response ; } else { mapped response = response ; } return mapped response ; } / Formats the parsed response from external data source into correct tabular format and returns only the requestedFields @param {Object} parsedResponse The response string from external data source parsed into an object in a standard format. @param {Array} requestedFields The fields requested in the getData request. @returns {Array} Array containing rows of data in key-value pairs for each field. / function getFormattedData ( response , requestedFields ) { var data = []; Object . keys ( response ). map ( function ( packageName ) { var package = response [ packageName ]; var downloadData = package . downloads ; var formattedData = downloadData . map ( function ( dailyDownload ) { return formatData ( requestedFields , packageName , dailyDownload ); }); data = data . concat ( formattedData ); }); return data ; } Complete the project manifest The manifest file contains information about your Community Connector that is required to deploy and use your connector in Looker Studio.
- The following example fetches data based on the incoming request and returns the package statistics: npm-downloads/src/main.js View on GitHub // https://developers.google.com/datastudio/connector/reference#getdata function getData ( request ) { request . configParams = validateConfig ( request . configParams ); var requestedFields = getFields (). forIds ( request . fields . map ( function ( field ) { return field . name ; }) ); try { var apiResponse = fetchDataFromApi ( request ); var normalizedResponse = normalizeResponse ( request , apiResponse ); var data = getFormattedData ( normalizedResponse , requestedFields ); } catch ( e ) { cc . newUserError () . setDebugText ( 'Error fetching data from API.
- SUM ); return fields ; } // https://developers.google.com/datastudio/connector/reference#getschema function getSchema ( request ) { return { schema : getFields (). build ()}; } Fetch and return data with getData() This function is called to get data for the given request.
- NONE ) . build (); } If your data source requires OAuth 2.0 authentication, view the OAuth 2.0 authentication guide and add the additional required functions to your connector.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.
- Example function getSchema ( request ) { var cc = DataStudioApp . createCommunityConnector (); var fields = cc . getFields (); var types = cc .
- Example function getConfig ( request ) { var cc = DataStudioApp . createCommunityConnector (); var config = cc . getConfig (); config . newTextInput () . setId ( 'exampleTextInput' ) . setName ( 'Single line text' ) . setHelpText ( 'Helper text for single line text' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newTextArea () . setId ( 'exampleTextArea' ) . setName ( 'Text area' ) . setHelpText ( 'Helper text for text area' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newSelectSingle () . setId ( 'exampleSelectSingle' ) . setName ( 'Select single' ) . setHelpText ( 'Helper text for select single' ) . setAllowOverride ( true ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newSelectMultiple () . setId ( 'exampleSelectMultiple' ) . setName ( 'Select multiple' ) . setHelpText ( 'Helper text for select multiple' ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newCheckbox () . setId ( 'exampleCheckbox' ) . setName ( 'This is a checkbox' ) . setHelpText ( 'Helper text for checkbox' ); config . newInfo () . setId ( 'exampleInfo' ) . setText ( 'Examle instructions text used in Info' ) config . setDateRangeRequired ( true ); config . setIsSteppedConfig ( false ); return config . build (); } Legacy @return {object} A JavaScript object representing the connector configuration that should be displayed to the user.
- It will be in YYYY-MM-DD format. scriptParams Name Type Description sampleExtraction boolean If true , the getData() request is for automatic semantic type detection . lastRefresh string A timestamp that marks the most recent request for a refresh of data. dimensionsFilters name type description fieldName string The name of the field to be filtered values string[] An array of values to use for the operator. type "INCLUDE" "EXCLUDE" Whether data matching this filter should be included or excluded from the getData() response. operator FilterOperator The operator to apply Note: If more than 20 fields are in the request, then multiple getData requests will be sent.


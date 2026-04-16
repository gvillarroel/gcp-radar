---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.146Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Looker connector value format support"
feature_slug: "looker-connector-value-format-support"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/build"
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/connector/semantics"
keywords:
  - "looker"
  - "connector"
  - "value"
  - "format"
  - "now"
  - "displays"
  - "lookml"
  - "formatting"
---

# Looker connector value format support

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Looker connector now displays LookML value_format formatting in Looker Studio reports.

## Extended Definition

The Looker connector now displays LookML value_format formatting in Looker Studio reports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/build](https://developers.google.com/looker-studio/connector/build)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)

## Supporting Pages

### "Build a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/build](https://developers.google.com/looker-studio/connector/build)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Also standardizes the object structure for single vs multiple packages. @param {Object} request Data request parameters. @param {string} responseString Response from the API. @return {Object} Contains package names as keys and associated download count information(object) as values. / function normalizeResponse ( request , responseString ) { var response = JSON . parse ( responseString ); var package list = request . configParams . package . split ( ',' ); var mapped response = {}; if ( package list . length == 1 ) { mapped response [ package list [ 0 ]] = response ; } else { mapped response = response ; } return mapped response ; } / Formats the parsed response from external data source into correct tabular format and returns only the requestedFields @param {Object} parsedResponse The response string from external data source parsed into an object in a standard format. @param {Array} requestedFields The fields requested in the getData request. @returns {Array} Array containing rows of data in key-value pairs for each field. / function getFormattedData ( response , requestedFields ) { var data = []; Object . keys ( response ). map ( function ( packageName ) { var package = response [ packageName ]; var downloadData = package . downloads ; var formattedData = downloadData . map ( function ( dailyDownload ) { return formatData ( requestedFields , packageName , dailyDownload ); }); data = data . concat ( formattedData ); }); return data ; } Complete the project manifest The manifest file contains information about your Community Connector that is required to deploy and use your connector in Looker Studio.
- Update the manifest to include the following data: npm-downloads/src/appsscript.json View on GitHub { "dependencies" : { "libraries" : [] }, "dataStudio" : { "name" : "npm Downloads" , "logoUrl" : "https://raw.githubusercontent.com/npm/logos/master/npm%20square/n-64.png" , "company" : "Google Data Studio Developer Relations" , "companyUrl" : "https://developers.google.com/datastudio/" , "addonUrl" : "https://github.com/googledatastudio/community-connectors/tree/master/npm-downloads#readme" , "supportUrl" : "https://github.com/googledatastudio/community-connectors/issues" , "description" : "Get npm package download counts." , "sources" : [ "npm" ], "templates" : { "default" : "1twu0sHjqR5dELAPyGJcw4GS3-D0 NTrQ" } }, "oauthScopes" : [ "https://www.googleapis.com/auth/script.external request" ] } For details on Looker Studio manifest, see the reference manifest reference .
- The following example fetches data based on the incoming request and returns the package statistics: npm-downloads/src/main.js View on GitHub // https://developers.google.com/datastudio/connector/reference#getdata function getData ( request ) { request . configParams = validateConfig ( request . configParams ); var requestedFields = getFields (). forIds ( request . fields . map ( function ( field ) { return field . name ; }) ); try { var apiResponse = fetchDataFromApi ( request ); var normalizedResponse = normalizeResponse ( request , apiResponse ); var data = getFormattedData ( normalizedResponse , requestedFields ); } catch ( e ) { cc . newUserError () . setDebugText ( 'Error fetching data from API.
- An invalid or blank entry will revert to the default value.' ); config . newTextInput () . setId ( 'package' ) . setName ( 'Enter a single package name or multiple names separated by commas (no spaces!)' ) . setHelpText ( 'e.g. "googleapis" or "package,somepackage,anotherpackage"' ) . setPlaceholder ( DEFAULT PACKAGE ) . setAllowOverride ( true ); config . setDateRangeRequired ( true ); return config . build (); } Note: The DataStudio Apps Script service makes it easier to write a community connector.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.
- Example function getConfig ( request ) { var cc = DataStudioApp . createCommunityConnector (); var config = cc . getConfig (); config . newTextInput () . setId ( 'exampleTextInput' ) . setName ( 'Single line text' ) . setHelpText ( 'Helper text for single line text' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newTextArea () . setId ( 'exampleTextArea' ) . setName ( 'Text area' ) . setHelpText ( 'Helper text for text area' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newSelectSingle () . setId ( 'exampleSelectSingle' ) . setName ( 'Select single' ) . setHelpText ( 'Helper text for select single' ) . setAllowOverride ( true ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newSelectMultiple () . setId ( 'exampleSelectMultiple' ) . setName ( 'Select multiple' ) . setHelpText ( 'Helper text for select multiple' ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newCheckbox () . setId ( 'exampleCheckbox' ) . setName ( 'This is a checkbox' ) . setHelpText ( 'Helper text for checkbox' ); config . newInfo () . setId ( 'exampleInfo' ) . setText ( 'Examle instructions text used in Info' ) config . setDateRangeRequired ( true ); config . setIsSteppedConfig ( false ); return config . build (); } Legacy @return {object} A JavaScript object representing the connector configuration that should be displayed to the user.
- SemanticType Enum Value Description Example YEAR YYYY "2017" YEAR QUARTER YYYYQ "20171" YEAR MONTH YYYYMM "201703" YEAR WEEK YYYYww "201707" YEAR MONTH DAY YYYYMMDD "20170317" YEAR MONTH DAY HOUR YYYYMMDDHH "2017031403" YEAR MONTH DAY SECOND YYYYMMDDHHMMSS "20170314031545" QUARTER (1, 2, 3, 4) "1" MONTH MM "03" WEEK ww "07" MONTH DAY MMDD "0317" DAY OF WEEK A decimal number 0-6 with 0 representing Sunday "0" DAY DD "17" HOUR HH "02" MINUTE mm "12" DURATION A Duration of Time (in seconds) 6340918234 COUNTRY Country "United States" COUNTRY CODE Country Code "US" CONTINENT Continent "Americas" CONTINENT CODE Continent Code "019" SUB CONTINENT Sub Continent "North America" SUB CONTINENT CODE Sub Continent Code "003" REGION Region "California" REGION CODE Region Code "CA" CITY City "Mountain View" CITY CODE City Code "1014044" METRO CODE Metro Code "200807" LATITUDE LONGITUDE Latitude and Longitude "51.5074, -0.1278" NUMBER Decimal Number 14 PERCENT Decimal percentage (can be over 1.0) 1.0 TEXT Free form text "Here is some text" BOOLEAN true or false true URL A URL as text "https://www.google.com" Formula Semantic Types Enum Value Description Formula HYPERLINK A link with a text label "HYPERLINK($url, $description)" IMAGE A URL of an image "IMAGE($image url, $alt text)" IMAGELINK A link with an image label "HYPERLINK($url, $image field)" Note: See HYPERLINK and IMAGE help center docs for more information.
- It will be in YYYY-MM-DD format. scriptParams Name Type Description sampleExtraction boolean If true , the getData() request is for automatic semantic type detection . lastRefresh string A timestamp that marks the most recent request for a refresh of data. dimensionsFilters name type description fieldName string The name of the field to be filtered values string[] An array of values to use for the operator. type "INCLUDE" "EXCLUDE" Whether data matching this filter should be included or excluded from the getData() response. operator FilterOperator The operator to apply Note: If more than 20 fields are in the request, then multiple getData requests will be sent.

### "Data types and semantic types \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic semantic type detection If you have not defined any semantic types in your schema, then Looker Studio will attempt to automatically detect them based on the data type property and the format of the data values returned by your connector.
- The semantic type can either be defined in the connector schema, or can be automatically detected by Looker Studio based on the data type property defined in your connector and the data values returned by your connector.
- To see which semantic types are available, please consult the semantic types documentation Community Connector schema and Looker Studio fields When you define the schema for your community connector, there are various properties for each field that will determine how the field is represented and used in Looker Studio.
- There are several ways to improve semantic type detection in your code: Recommended: Pass predefined values Return a predefined value for each field that best represents the semantic type for the field and is known to be properly be detected by Looker Studio.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.170Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Looker connector advanced matches filters for date and time dimensions"
feature_slug: "looker-connector-advanced-matches-filters-for-date-and-time-dimensions"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/connector/filters"
  - "https://developers.google.com/looker-studio/connector/bigquery-row-level-security"
keywords:
  - "looker"
  - "connector"
  - "advanced"
  - "matches"
  - "filters"
  - "date"
  - "time"
  - "dimensions"
---

# Looker connector advanced matches filters for date and time dimensions

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Looker connector supports Matches (advanced) filters on date and time dimensions.

## Extended Definition

The Looker connector supports Matches (advanced) filters on date and time dimensions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)

## Supporting Pages

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.
- It will be in YYYY-MM-DD format. scriptParams Name Type Description sampleExtraction boolean If true , the getData() request is for automatic semantic type detection . lastRefresh string A timestamp that marks the most recent request for a refresh of data. dimensionsFilters name type description fieldName string The name of the field to be filtered values string[] An array of values to use for the operator. type "INCLUDE" "EXCLUDE" Whether data matching this filter should be included or excluded from the getData() response. operator FilterOperator The operator to apply Note: If more than 20 fields are in the request, then multiple getData requests will be sent.
- Don't return the field if your connector applies filters . dimensionsFilters DimensionsFilters A nested array of the user selected filters.
- Response Example { "schema" : [ { "name" : "Created" , "label" : "Date Created" , "description" : "The date that this was created" , "dataType" : "STRING" , "group" : "Date" , "isDefault" : true , "semantics" : { "conceptType" : "DIMENSION" , "semanticGroup" : "DATE AND TIME" , "semanticType" : "YEAR MONTH DAY" , "isReaggregatable" : false } }, { "name" : "Amount" , "label" : "Amount (USD)" , "description" : "The cost in US dollars" , "dataType" : "NUMBER" , "isHidden" : true , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "CURRENCY" , "semanticType" : "CURRENCY USD" , } }, { "name" : "AmountPer" , "label" : "Amount Per Dimension" , "description" : "The summed cost" , "dataType" : "NUMBER" , "group" : "Money" , "formula" : "sum(Amount)" , "isDefault" : true , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "CURRENCY" , "semanticType" : "CURRENCY USD" , "isReaggregatable" : true } }, { "name" : "Probability" , "label" : "Probability (Close rate)" , "description" : "The probability that a store closes" , "dataType" : "NUMBER" , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "NUMERIC" , "semanticType" : "PERCENT" , "isReaggregatable" : false } }, { "name" : "OpportunityName" , "label" : "Opportunity Name" , "description" : "The name of the opportunity" , "dataType" : "STRING" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "TEXT" , "isReaggregatable" : false } }, { "name" : "IsVerified" , "label" : "Verified Status" , "description" : "Whether or not the store is verified" , "dataType" : "BOOLEAN" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "BOOLEAN" , "isReaggregatable" : false } }, { "name" : "Company" , "label" : "Incorporated Company Name" , "description" : "The name of the company the store belongs to" , "dataType" : "STRING" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "TEXT" , "isReaggregatable" : false } } ] } getData() Returns the tabular data for the given request.

### Filters \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The report user has configured two filters: country is IN LIST of Canada, USA source is IN LIST of Social, Organic The report user has configured a chart component with the source dimension and sessions metric getData() is executed by Looker Studio with the following request object: { "fields" : [ { "name" : "source" }, { "name" : "sessions" }, { "name" : "country" , "forFilterOnly" : true } ], "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "Canada" , "USA" ], "type" : "INCLUDE" , "operator" : "IN LIST" }], [{ "fieldName" : "source" , "values" : [ "Social" , "Organic" ], "type" : "INCLUDE" , "operator" : "IN LIST" }] ] } Connector responds with filtered data.
- For example, for the following filter, the connector should only include values that have a country of USA AND a source of Social . { "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "USA" ], "type" : "INCLUDE" , "operator" : "EQUALS" }], [{ "fieldName" : "source" , "values" : [ "Social" ], "type" : "INCLUDE" , "operator" : "EQUALS" }] ] } OR together each sub-array in the request.dimensionsFilters array.
- For example, for the following filter, the connector should only include values that have a country of USA OR a country of Canada . { "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "Canada" ], "type" : "INCLUDE" , "operator" : "EQUALS" }, { "fieldName" : "country" , "values" : [ "USA" ], "type" : "INCLUDE" , "operator" : "EQUALS" }] ] } Caution: The difference between OR and AND is subtle.
- Page Summary outlined flag Looker Studio can apply filters to data from community connectors, but applying filters within the connector itself can significantly enhance performance.

### "BigQuery row-level security with Advanced Services \_|\_ Community Connectors\

- URL: [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Community Connectors BigQuery row-level security with Advanced Services Stay organized with collections Save and categorize content based on your preferences.
- YEAR MONTH DAY ); return fields ; } function getSchema ( request ) { return { schema : getFields (). build () } ; } var SERVICE ACCOUNT CREDS = 'SERVICE ACCOUNT CREDS' ; var SERVICE ACCOUNT KEY = 'private key' ; var SERVICE ACCOUNT EMAIL = 'client email' ; var BILLING PROJECT ID = 'project id' ; / Copy the entire credentials JSON file from creating a service account in GCP. / function getServiceAccountCreds () { return JSON . parse ( scriptProperties . getProperty ( SERVICE ACCOUNT CREDS )); } function getOauthService () { var serviceAccountCreds = getServiceAccountCreds (); var serviceAccountKey = serviceAccountCreds [ SERVICE ACCOUNT KEY ] ; var serviceAccountEmail = serviceAccountCreds [ SERVICE ACCOUNT EMAIL ] ; return OAuth2 . createService ( 'RowLevelSecurity' ) . setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' ) . setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' ) . setPrivateKey ( serviceAccountKey ) . setIssuer ( serviceAccountEmail ) . setPropertyStore ( scriptProperties ) . setCache ( CacheService . getScriptCache ()) . setScope ( [ 'https://www.googleapis.com/auth/bigquery.readonly' ] ); } var BASE SQL = 'SELECT d.region, d.sales, d.date ' + 'FROM datastudio-solutions.row level security.data d ' + 'INNER JOIN datastudio-solutions.row level security.access a ' + 'ON d.region = a.region ' + 'where a.email=@email' ; function getData ( request ) { var accessToken = getOauthService (). getAccessToken (); var serviceAccountCreds = getServiceAccountCreds (); var billingProjectId = serviceAccountCreds [ BILLING PROJECT ID ] ; var email = Session . getEffectiveUser (). getEmail (); var bqTypes = DataStudioApp . createCommunityConnector ().
- Update manifest View Manifest reference and complete the manifest with all required information including the following: set dataStudio.forceViewersCredentials to true . set dataStudio.advancedServices.data to true .
- The implementation involves creating a Community Connector, setting up a service account, and constructing a BigQuery query that filters data based on the viewer's email.


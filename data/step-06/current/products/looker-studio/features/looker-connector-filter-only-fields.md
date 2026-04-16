---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.181Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Looker connector filter-only fields"
feature_slug: "looker-connector-filter-only-fields"
latest_feature_date: "2024-05-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/filters"
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/connector/bigquery-row-level-security"
keywords:
  - "looker"
  - "connector"
  - "filter"
  - "only"
  - "fields"
  - "studio"
  - "displays"
  - "lookml"
---

# Looker connector filter-only fields

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Looker Studio displays LookML-defined filters as filter-only fields in charts that use a Looker data source.

## Extended Definition

Looker Studio displays LookML-defined filters as filter-only fields in charts that use a Looker data source.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)

## Supporting Pages

### Filters \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The report user has configured two filters: country is IN LIST of Canada, USA source is IN LIST of Social, Organic The report user has configured a chart component with the source dimension and sessions metric getData() is executed by Looker Studio with the following request object: { "fields" : [ { "name" : "source" }, { "name" : "sessions" }, { "name" : "country" , "forFilterOnly" : true } ], "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "Canada" , "USA" ], "type" : "INCLUDE" , "operator" : "IN LIST" }], [{ "fieldName" : "source" , "values" : [ "Social" , "Organic" ], "type" : "INCLUDE" , "operator" : "IN LIST" }] ] } Connector responds with filtered data.
- If a report contains filters and a community connector returns unfiltered data for all fields requested then Looker Studio will apply filters to the connector response.
- Page Summary outlined flag Looker Studio can apply filters to data from community connectors, but applying filters within the connector itself can significantly enhance performance.
- Filter information is passed in the getData() request object , and the connector can use this information to filter data before sending it back to Looker Studio.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.
- When sampleExtraction is set to `true , the date two days earlier than today is given as both the start and end date. fields[].name string The names of the requested fields. fields[].forFilterOnly boolean Marks a field only used for filtering the request.
- You should define only one default dimension and one default metric for the schema. defaultAggregationType string( DefaultAggregationType ) An optional property that indicates what aggregation Looker Studio should default to for this field.
- Home Products Looker Studio Community Connectors Reference Community Connector API Reference Stay organized with collections Save and categorize content based on your preferences.

### "BigQuery row-level security with Advanced Services \_|\_ Community Connectors\

- URL: [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- YEAR MONTH DAY ); return fields ; } function getSchema ( request ) { return { schema : getFields (). build () } ; } var SERVICE ACCOUNT CREDS = 'SERVICE ACCOUNT CREDS' ; var SERVICE ACCOUNT KEY = 'private key' ; var SERVICE ACCOUNT EMAIL = 'client email' ; var BILLING PROJECT ID = 'project id' ; / Copy the entire credentials JSON file from creating a service account in GCP. / function getServiceAccountCreds () { return JSON . parse ( scriptProperties . getProperty ( SERVICE ACCOUNT CREDS )); } function getOauthService () { var serviceAccountCreds = getServiceAccountCreds (); var serviceAccountKey = serviceAccountCreds [ SERVICE ACCOUNT KEY ] ; var serviceAccountEmail = serviceAccountCreds [ SERVICE ACCOUNT EMAIL ] ; return OAuth2 . createService ( 'RowLevelSecurity' ) . setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' ) . setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' ) . setPrivateKey ( serviceAccountKey ) . setIssuer ( serviceAccountEmail ) . setPropertyStore ( scriptProperties ) . setCache ( CacheService . getScriptCache ()) . setScope ( [ 'https://www.googleapis.com/auth/bigquery.readonly' ] ); } var BASE SQL = 'SELECT d.region, d.sales, d.date ' + 'FROM datastudio-solutions.row level security.data d ' + 'INNER JOIN datastudio-solutions.row level security.access a ' + 'ON d.region = a.region ' + 'where a.email=@email' ; function getData ( request ) { var accessToken = getOauthService (). getAccessToken (); var serviceAccountCreds = getServiceAccountCreds (); var billingProjectId = serviceAccountCreds [ BILLING PROJECT ID ] ; var email = Session . getEffectiveUser (). getEmail (); var bqTypes = DataStudioApp . createCommunityConnector ().
- Home Products Looker Studio Community Connectors BigQuery row-level security with Advanced Services Stay organized with collections Save and categorize content based on your preferences.
- NONE ) . build (); } function getConfig ( request ) { var config = cc . getConfig (); config . newInfo () . setId ( 'generalInfo' ) . setText ( 'This is an example connector to showcase row level security.' ); return config . build (); } function getFields () { var fields = cc . getFields (); var types = cc .
- Example Code The following is a complete example of the connector code: main.js var cc = DataStudioApp . createCommunityConnector (); var scriptProperties = PropertiesService . getScriptProperties (); function isAdminUser () { return true ; } function getAuthType () { var AuthTypes = cc .


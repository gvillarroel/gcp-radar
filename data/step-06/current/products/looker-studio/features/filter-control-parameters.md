---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.132Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Filter control parameters"
feature_slug: "filter-control-parameters"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/data-source-parameters"
  - "https://developers.google.com/looker-studio/connector/reference"
keywords:
  - "filter"
  - "control"
  - "parameters"
  - "allows"
  - "default"
  - "values"
  - "use"
---

# Filter control parameters

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Allows filter control default values to use parameters.

## Extended Definition

Allows filter control default values to use parameters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use a blank or default report To use a blank report or the default report, configure your Linking API as follows: Report type Set the reportId control parameter Set data source ( ds ) parameters.
- It allows developers to define data sources, control report behavior, and customize settings through URL parameters, supporting connectors like BigQuery, Looker, and more.
- Key Point: Control parameters, other than reportId , and Report parameters can be set when using a blank or default report.
- Initiate the report creation workflow with a blank report: https://lookerstudio.google.com/reporting/create Initiate the report creation workflow with a blank report and sets the report name: https://lookerstudio.google.com/reporting/create?r.reportName=MyNewReport Use the default report template with a Google Sheets connector configuration: https://lookerstudio.google.com/reporting/create? ds.connector=googleSheets &ds.spreadsheetId=1Q-w7KeeJj1jk3wFcFm4NsPlppNscs0CtHf EP9fsYOo &ds.worksheetId=0 Embed a report To embed a report created with the Linking API, set URL parameters and include the /embed/ path.

### "Overridable config parameters \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Overridable config parameters allow report editors to modify default values in a data source, enhancing flexibility and enabling user-configurable report templates.
- Parameter values are set via report properties panel or report URL, with URL parameters overriding report and default values, and report properties overriding defaults.
- Allow report editors to modify parameters values The data source owner controls which parameters are allowed to be modified in reports.
- Allow report viewers to modify parameters values Report editors control which parameters can be modified by report viewers .

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.
- It will be in YYYY-MM-DD format. scriptParams Name Type Description sampleExtraction boolean If true , the getData() request is for automatic semantic type detection . lastRefresh string A timestamp that marks the most recent request for a refresh of data. dimensionsFilters name type description fieldName string The name of the field to be filtered values string[] An array of values to use for the operator. type "INCLUDE" "EXCLUDE" Whether data matching this filter should be included or excluded from the getData() response. operator FilterOperator The operator to apply Note: If more than 20 fields are in the request, then multiple getData requests will be sent.
- Example Note: In the response, order of values in rows must match the order of fields in the schema. { "schema": [ { "name": "OpportunityName", "dataType": "STRING" }, { "name": "IsVerified", "dataType": "BOOLEAN" }, { "name": "Created", "dataType": "STRING" }, { "name": "Amount", "dataType": "NUMBER" } ], "rows": [ { "values": ["Interesting", true, "2017-05-23", "120453.65"] }, { "values": ["SF", false, "2017-03-03", "362705286.92"] }, { "values": ["Spring Sale", true, "2017-04-21", "870.12"] } ], "filtersApplied": false } BigQuery @return {object} A JavaScript object representing the BigQuery query configuration.
- The response contains the connector configuration with the following structure: { configParams : [ { type : string ( ConfigType ), name : string , displayName : string , helpText : string , placeholder : string , isDynamic : boolean , parameterControl : { allowOverride : boolean }, options : [ { label : string , value : string } ] } ], dateRangeRequired : boolean , isSteppedConfig : boolean } Field name Type Description configParams[] object The user provided values required by the connector.


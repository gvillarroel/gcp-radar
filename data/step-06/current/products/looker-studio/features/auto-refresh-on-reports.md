---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.206Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Auto refresh on reports"
feature_slug: "auto-refresh-on-reports"
latest_feature_date: "2023-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/data-source-parameters"
  - "https://developers.google.com/looker-studio/connector/reference"
keywords:
  - "auto"
  - "refresh"
  - "reports"
  - "editors"
  - "can"
  - "configure"
  - "report"
  - "automatically"
---

# Auto refresh on reports

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Editors can configure a report to automatically refresh data at a predefined cadence while the report is open.

## Extended Definition

Editors can configure a report to automatically refresh data at a predefined cadence while the report is open.

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
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Looker Studio Linking API enables the creation of dynamic URLs that link to pre-configured reports, streamlining user access and data interaction.
- Use case and benefits The Linking API can be used to provide pre-configured reports for your customers to view and interact with their data.
- When an error occurs and no dialog is automatically displayed, look for the info button towards the top right of the report.
- If user has view access to the template report, they will automatically have view access to any embedded data source.

### "Overridable config parameters \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the data source owner has allowed zipcode to be modified in reports (figure 2) then report editors will only be capable of allowing zipcode to be modified by report viewers .
- Allow report editors to modify parameters values The data source owner controls which parameters are allowed to be modified in reports.
- When to avoid defining a parameter as overridable It is recommended to learn how Connectors, Data Sources, and Reports work in relation to each other by reviewing How Looker Studio connects to your data .
- Page Summary outlined flag Overridable config parameters allow report editors to modify default values in a data source, enhancing flexibility and enabling user-configurable report templates.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- The single-select value can be overridden in reports. { configParams : [ { type : "TEXTINPUT" , name : "exampleTextInput" , displayName : "Single line text" , helpText : "Helper text for single line text" , placeholder : "Lorem Ipsum" }, { type : "TEXTAREA" , name : "exampleTextArea" , displayName : "Text area" , helpText : "Helper text for text area" , placeholder : "Lorem Ipsum" }, { type : "SELECT SINGLE" , name : "exampleSELECT SINGLE" , displayName : "Select single" , helpText : "Helper text for select-single" , parameterControl : { allowOverride : true }, options : [ { label : "Lorem foo" , value : "lorem" }, { label : "Ipsum bar" , value : "ipsum" }, { label : "Sit" , value : "amet" } ] }, { type : "SELECT MULTIPLE" , name : "exampleSELECT MULTIPLE" , displayName : "Select multiple" , helpText : "Helper text for select-multiple" , options : [ { label : "Lipsum" , value : "lipsum" }, { label : "Foo Bar" , value : "foobar" }, { label : "Dolor Sit" , value : "amet" } ] }, { type : "CHECKBOX" , name : "exampleCheckbox" , displayName : "This is a checkbox" , helpText : "Helper text for checkbox" , }, { type : "INFO" , name : "exampleInfo" , text : "Example instructions text used in Info" } ], dateRangeRequired : false } getSchema() Returns the schema for the given request.
- It will be in YYYY-MM-DD format. scriptParams Name Type Description sampleExtraction boolean If true , the getData() request is for automatic semantic type detection . lastRefresh string A timestamp that marks the most recent request for a refresh of data. dimensionsFilters name type description fieldName string The name of the field to be filtered values string[] An array of values to use for the operator. type "INCLUDE" "EXCLUDE" Whether data matching this filter should be included or excluded from the getData() response. operator FilterOperator The operator to apply Note: If more than 20 fields are in the request, then multiple getData requests will be sent.
- If set to true , data source creators can enable this for report editors Default value for allowOverride is false .
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.


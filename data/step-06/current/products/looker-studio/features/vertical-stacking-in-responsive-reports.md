---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.143Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Vertical stacking in responsive reports"
feature_slug: "vertical-stacking-in-responsive-reports"
latest_feature_date: "2025-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles"
keywords:
  - "vertical"
  - "stacking"
  - "responsive"
  - "reports"
  - "now"
  - "allow"
  - "multiple"
  - "components"
---

# Vertical stacking in responsive reports

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Responsive reports now allow multiple components to be stacked within a column in a section; Responsive reports now allow multiple components to be stacked within a column in a section.

## Extended Definition

Responsive reports now allow multiple components to be stacked within a column in a section; Responsive reports now allow multiple components to be stacked within a column in a section.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles](https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.
- Example https : //lookerstudio.google.com/reporting/create? c . reportId = 12345 & r . reportName = MyNewReport & r . measurementId = G - XXXXXXXXXX & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . projectId = project - 1234 & ds . ds0 . type = TABLE & ds . ds0 . datasetId = 456 & ds . ds0 . tableId = 789 Data source parameters Data source parameters allow you to define a data source configuration and the data to access for data sources in the template report.
- Set to true to use the data source configuration specified via the Linking API to refresh data source fields and update report components with new field selections. true is typically specified when switching the connector type or for connector types where a configuration change yields different fields (e.g. fields for BigQuery data sources often change with different table configurations).
- Considerations when using refreshFields : If refreshFields is set to false and the data source configuration specified via the Linking API yields different fields from what's used in the template report, the user will likely see a configuration error for the affected components.

### "Services that allow conditional role bindings \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles](https://docs.cloud.google.com/iam/docs/resource-types-with-conditional-roles)
- Source ID: `site-iam-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Services that allow conditions You can add conditions to allow policies for resources from the following services: Cloud Bigtable Admin API Binary Authorization BigQuery Certificate Authority Service Chrome Enterprise Premium Cloud Deploy Cloud Key Management Service (Cloud KMS) Cloud Logging Cloud Run Cloud Storage Cloud Workstations Compute Engine Managed Service for Apache Spark Identity-Aware Proxy (IAP) Identity and Access Management (IAM) Resource Manager Secret Manager Service Management Spanner Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security IAM Reference Send feedback Services that allow conditional role bindings Stay organized with collections Save and categorize content based on your preferences.
- If you need to grant conditional access to a resource that doesn't allow conditions or a resource that doesn't have an allow policy, see Support for inherited conditions .
- To see which resource types for these services have allow policies, see Resource types that accept allow policies .

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- The single-select value can be overridden in reports. { configParams : [ { type : "TEXTINPUT" , name : "exampleTextInput" , displayName : "Single line text" , helpText : "Helper text for single line text" , placeholder : "Lorem Ipsum" }, { type : "TEXTAREA" , name : "exampleTextArea" , displayName : "Text area" , helpText : "Helper text for text area" , placeholder : "Lorem Ipsum" }, { type : "SELECT SINGLE" , name : "exampleSELECT SINGLE" , displayName : "Select single" , helpText : "Helper text for select-single" , parameterControl : { allowOverride : true }, options : [ { label : "Lorem foo" , value : "lorem" }, { label : "Ipsum bar" , value : "ipsum" }, { label : "Sit" , value : "amet" } ] }, { type : "SELECT MULTIPLE" , name : "exampleSELECT MULTIPLE" , displayName : "Select multiple" , helpText : "Helper text for select-multiple" , options : [ { label : "Lipsum" , value : "lipsum" }, { label : "Foo Bar" , value : "foobar" }, { label : "Dolor Sit" , value : "amet" } ] }, { type : "CHECKBOX" , name : "exampleCheckbox" , displayName : "This is a checkbox" , helpText : "Helper text for checkbox" , }, { type : "INFO" , name : "exampleInfo" , text : "Example instructions text used in Info" } ], dateRangeRequired : false } getSchema() Returns the schema for the given request.
- Example function getConfig ( request ) { var cc = DataStudioApp . createCommunityConnector (); var config = cc . getConfig (); config . newTextInput () . setId ( 'exampleTextInput' ) . setName ( 'Single line text' ) . setHelpText ( 'Helper text for single line text' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newTextArea () . setId ( 'exampleTextArea' ) . setName ( 'Text area' ) . setHelpText ( 'Helper text for text area' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newSelectSingle () . setId ( 'exampleSelectSingle' ) . setName ( 'Select single' ) . setHelpText ( 'Helper text for select single' ) . setAllowOverride ( true ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newSelectMultiple () . setId ( 'exampleSelectMultiple' ) . setName ( 'Select multiple' ) . setHelpText ( 'Helper text for select multiple' ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newCheckbox () . setId ( 'exampleCheckbox' ) . setName ( 'This is a checkbox' ) . setHelpText ( 'Helper text for checkbox' ); config . newInfo () . setId ( 'exampleInfo' ) . setText ( 'Examle instructions text used in Info' ) config . setDateRangeRequired ( true ); config . setIsSteppedConfig ( false ); return config . build (); } Legacy @return {object} A JavaScript object representing the connector configuration that should be displayed to the user.
- It will be in YYYY-MM-DD format. scriptParams Name Type Description sampleExtraction boolean If true , the getData() request is for automatic semantic type detection . lastRefresh string A timestamp that marks the most recent request for a refresh of data. dimensionsFilters name type description fieldName string The name of the field to be filtered values string[] An array of values to use for the operator. type "INCLUDE" "EXCLUDE" Whether data matching this filter should be included or excluded from the getData() response. operator FilterOperator The operator to apply Note: If more than 20 fields are in the request, then multiple getData requests will be sent.
- The response contains the connector configuration with the following structure: { configParams : [ { type : string ( ConfigType ), name : string , displayName : string , helpText : string , placeholder : string , isDynamic : boolean , parameterControl : { allowOverride : boolean }, options : [ { label : string , value : string } ] } ], dateRangeRequired : boolean , isSteppedConfig : boolean } Field name Type Description configParams[] object The user provided values required by the connector.


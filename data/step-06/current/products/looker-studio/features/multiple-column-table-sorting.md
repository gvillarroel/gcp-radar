---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.164Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Multiple-column table sorting"
feature_slug: "multiple-column-table-sorting"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/connector/bigquery-row-level-security"
keywords:
  - "multiple"
  - "column"
  - "table"
  - "sorting"
  - "chart"
  - "viewers"
  - "can"
  - "sort"
---

# Multiple-column table sorting

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Table chart viewers can sort by multiple columns using Shift-click on column headers.

## Extended Definition

Table chart viewers can sort by multiple columns using Shift-click on column headers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.
- This is only applicable to time based partitioning (E.g. using a time based partitioning column or the PARTITIONTIME pseudocolumn) and does not work for integer range partitioned tables.
- Set to true if the table is partitioned and you want to use the partitioning column as a date range dimension.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Hidden fields don't show up on the fields screen, or as a selectable field for charts, but can be used in calculated field formulas.
- Response Example { "schema" : [ { "name" : "Created" , "label" : "Date Created" , "description" : "The date that this was created" , "dataType" : "STRING" , "group" : "Date" , "isDefault" : true , "semantics" : { "conceptType" : "DIMENSION" , "semanticGroup" : "DATE AND TIME" , "semanticType" : "YEAR MONTH DAY" , "isReaggregatable" : false } }, { "name" : "Amount" , "label" : "Amount (USD)" , "description" : "The cost in US dollars" , "dataType" : "NUMBER" , "isHidden" : true , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "CURRENCY" , "semanticType" : "CURRENCY USD" , } }, { "name" : "AmountPer" , "label" : "Amount Per Dimension" , "description" : "The summed cost" , "dataType" : "NUMBER" , "group" : "Money" , "formula" : "sum(Amount)" , "isDefault" : true , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "CURRENCY" , "semanticType" : "CURRENCY USD" , "isReaggregatable" : true } }, { "name" : "Probability" , "label" : "Probability (Close rate)" , "description" : "The probability that a store closes" , "dataType" : "NUMBER" , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "NUMERIC" , "semanticType" : "PERCENT" , "isReaggregatable" : false } }, { "name" : "OpportunityName" , "label" : "Opportunity Name" , "description" : "The name of the opportunity" , "dataType" : "STRING" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "TEXT" , "isReaggregatable" : false } }, { "name" : "IsVerified" , "label" : "Verified Status" , "description" : "Whether or not the store is verified" , "dataType" : "BOOLEAN" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "BOOLEAN" , "isReaggregatable" : false } }, { "name" : "Company" , "label" : "Incorporated Company Name" , "description" : "The name of the company the store belongs to" , "dataType" : "STRING" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "TEXT" , "isReaggregatable" : false } } ] } getData() Returns the tabular data for the given request.
- Example function getConfig ( request ) { var cc = DataStudioApp . createCommunityConnector (); var config = cc . getConfig (); config . newTextInput () . setId ( 'exampleTextInput' ) . setName ( 'Single line text' ) . setHelpText ( 'Helper text for single line text' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newTextArea () . setId ( 'exampleTextArea' ) . setName ( 'Text area' ) . setHelpText ( 'Helper text for text area' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newSelectSingle () . setId ( 'exampleSelectSingle' ) . setName ( 'Select single' ) . setHelpText ( 'Helper text for select single' ) . setAllowOverride ( true ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newSelectMultiple () . setId ( 'exampleSelectMultiple' ) . setName ( 'Select multiple' ) . setHelpText ( 'Helper text for select multiple' ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newCheckbox () . setId ( 'exampleCheckbox' ) . setName ( 'This is a checkbox' ) . setHelpText ( 'Helper text for checkbox' ); config . newInfo () . setId ( 'exampleInfo' ) . setText ( 'Examle instructions text used in Info' ) config . setDateRangeRequired ( true ); config . setIsSteppedConfig ( false ); return config . build (); } Legacy @return {object} A JavaScript object representing the connector configuration that should be displayed to the user.
- The single-select value can be overridden in reports. { configParams : [ { type : "TEXTINPUT" , name : "exampleTextInput" , displayName : "Single line text" , helpText : "Helper text for single line text" , placeholder : "Lorem Ipsum" }, { type : "TEXTAREA" , name : "exampleTextArea" , displayName : "Text area" , helpText : "Helper text for text area" , placeholder : "Lorem Ipsum" }, { type : "SELECT SINGLE" , name : "exampleSELECT SINGLE" , displayName : "Select single" , helpText : "Helper text for select-single" , parameterControl : { allowOverride : true }, options : [ { label : "Lorem foo" , value : "lorem" }, { label : "Ipsum bar" , value : "ipsum" }, { label : "Sit" , value : "amet" } ] }, { type : "SELECT MULTIPLE" , name : "exampleSELECT MULTIPLE" , displayName : "Select multiple" , helpText : "Helper text for select-multiple" , options : [ { label : "Lipsum" , value : "lipsum" }, { label : "Foo Bar" , value : "foobar" }, { label : "Dolor Sit" , value : "amet" } ] }, { type : "CHECKBOX" , name : "exampleCheckbox" , displayName : "This is a checkbox" , helpText : "Helper text for checkbox" , }, { type : "INFO" , name : "exampleInfo" , text : "Example instructions text used in Info" } ], dateRangeRequired : false } getSchema() Returns the schema for the given request.

### "BigQuery row-level security with Advanced Services \_|\_ Community Connectors\

- URL: [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Add all tables and charts in the report.
- The manifest should look like this: { ... "dataStudio" : { "forceViewersCredentials" : true , "advancedServices" : { "data" : true }, ... } "oauthScopes" : [ "https://www.googleapis.com/auth/script.external request" , "https://www.googleapis.com/auth/userinfo.email" ], ... } Implement a service account Create a service account in your Google Cloud project.
- Update manifest View Manifest reference and complete the manifest with all required information including the following: set dataStudio.forceViewersCredentials to true . set dataStudio.advancedServices.data to true .
- Page Summary outlined flag This solution enables creating a BigQuery dashboard where viewers see only their relevant data based on a pre-defined mapping.


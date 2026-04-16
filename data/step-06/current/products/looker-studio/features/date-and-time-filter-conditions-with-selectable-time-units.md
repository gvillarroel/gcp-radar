---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.170Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Date and time filter conditions with selectable time units"
feature_slug: "date-and-time-filter-conditions-with-selectable-time-units"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/visualization/interactions-guide"
  - "https://developers.google.com/looker-studio/connector/reference"
keywords:
  - "date"
  - "time"
  - "filter"
  - "conditions"
  - "selectable"
  - "units"
  - "report"
  - "editors"
---

# Date and time filter conditions with selectable time units

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Report editors can specify both a value and a time unit for date and time filter conditions such as Is in the Last and Is Before.

## Extended Definition

Report editors can specify both a value and a time unit for date and time filter conditions such as Is in the Last and Is Before.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.
- Examples A Google Sheets configuration: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 A Google Sheets configuration with the first row used as headers and hidden and filtered cells included: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.hasHeader=true &ds.ds3.includeHiddenCells=true &ds.ds3.includeFilteredCells=true A Google Sheets configuration with a range (A1:D20): https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.range=A1%3AD20 Looker Parameter name Description ds. alias .connector link Optional.
- The URL above can be simplified to the following: https : //lookerstudio.google.com/reporting/create? c . reportId = 12345 & r . reportName = MyNewReport & ds . datasourceName = MyNewDataSource & ds . connector = bigQuery & ds . type = TABLE & ds . projectId = bigquery - public - data & ds . datasetId = samples & ds . tableId = shakespeare Configures a report with a single BigQuery data source ( ds0 ) and updates only the billing project ID of the data source: https://lookerstudio.google.com/reporting/create? c.reportId=12345 &r.reportName=MyNewReport &ds.ds0.billingProjectId=my-billing-project Configures a report with two data sources, a BigQuery data source ( ds0 ) and a Google Analytics data source ( ds1 ).

### "Using community visualizations as filters \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- Source ID: `site-docs-reference-2`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Suppose a user selected the cells corresponding to "Monday evening" and "Friday afternoon", and you wanted to filter the rest of the dashboard to only show data from either "Monday evening" or "Friday afternoon".Your interactionData would look like this: var interactionData = { "concepts" : [ "dayOfWeekDimensionId" , "timeOfDayDimensionId" ], "values" : [ [ "Monday" , "evening" ], [ "Friday" , "afternoon" ] ] } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Your interactionData would look like this: var interactionData = { "concepts" : [ "languageDimensionId" ], "values" : [[ "Spanish" ]] } Multiple dimension filter This heatmap shows temperature by day of week and time of day (two dimensions and one metric).
- Page Summary outlined flag Community visualizations can act as chart filters, allowing users to interact with them and filter other charts in the report.
- Looker Studio will ignore messages sent by dscc.sendInteraction if the report editor has not enabled "filter" interactions for your visualization.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- If a user applies a date range filter for a report, then the date range provided will reflect the user selection.
- Response Example { "schema" : [ { "name" : "Created" , "label" : "Date Created" , "description" : "The date that this was created" , "dataType" : "STRING" , "group" : "Date" , "isDefault" : true , "semantics" : { "conceptType" : "DIMENSION" , "semanticGroup" : "DATE AND TIME" , "semanticType" : "YEAR MONTH DAY" , "isReaggregatable" : false } }, { "name" : "Amount" , "label" : "Amount (USD)" , "description" : "The cost in US dollars" , "dataType" : "NUMBER" , "isHidden" : true , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "CURRENCY" , "semanticType" : "CURRENCY USD" , } }, { "name" : "AmountPer" , "label" : "Amount Per Dimension" , "description" : "The summed cost" , "dataType" : "NUMBER" , "group" : "Money" , "formula" : "sum(Amount)" , "isDefault" : true , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "CURRENCY" , "semanticType" : "CURRENCY USD" , "isReaggregatable" : true } }, { "name" : "Probability" , "label" : "Probability (Close rate)" , "description" : "The probability that a store closes" , "dataType" : "NUMBER" , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "NUMERIC" , "semanticType" : "PERCENT" , "isReaggregatable" : false } }, { "name" : "OpportunityName" , "label" : "Opportunity Name" , "description" : "The name of the opportunity" , "dataType" : "STRING" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "TEXT" , "isReaggregatable" : false } }, { "name" : "IsVerified" , "label" : "Verified Status" , "description" : "Whether or not the store is verified" , "dataType" : "BOOLEAN" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "BOOLEAN" , "isReaggregatable" : false } }, { "name" : "Company" , "label" : "Incorporated Company Name" , "description" : "The name of the company the store belongs to" , "dataType" : "STRING" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "TEXT" , "isReaggregatable" : false } } ] } getData() Returns the tabular data for the given request.
- The single-select value can be overridden in reports. { configParams : [ { type : "TEXTINPUT" , name : "exampleTextInput" , displayName : "Single line text" , helpText : "Helper text for single line text" , placeholder : "Lorem Ipsum" }, { type : "TEXTAREA" , name : "exampleTextArea" , displayName : "Text area" , helpText : "Helper text for text area" , placeholder : "Lorem Ipsum" }, { type : "SELECT SINGLE" , name : "exampleSELECT SINGLE" , displayName : "Select single" , helpText : "Helper text for select-single" , parameterControl : { allowOverride : true }, options : [ { label : "Lorem foo" , value : "lorem" }, { label : "Ipsum bar" , value : "ipsum" }, { label : "Sit" , value : "amet" } ] }, { type : "SELECT MULTIPLE" , name : "exampleSELECT MULTIPLE" , displayName : "Select multiple" , helpText : "Helper text for select-multiple" , options : [ { label : "Lipsum" , value : "lipsum" }, { label : "Foo Bar" , value : "foobar" }, { label : "Dolor Sit" , value : "amet" } ] }, { type : "CHECKBOX" , name : "exampleCheckbox" , displayName : "This is a checkbox" , helpText : "Helper text for checkbox" , }, { type : "INFO" , name : "exampleInfo" , text : "Example instructions text used in Info" } ], dateRangeRequired : false } getSchema() Returns the schema for the given request.
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.


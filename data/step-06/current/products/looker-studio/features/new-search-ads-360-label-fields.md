---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.200Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "New Search Ads 360 label fields"
feature_slug: "new-search-ads-360-label-fields"
latest_feature_date: "2023-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/connector/calculated-fields"
  - "https://developers.google.com/looker-studio/integrate/linking-api"
keywords:
  - "search"
  - "ads"
  - "360"
  - "label"
  - "fields"
  - "connector"
  - "now"
  - "includes"
---

# New Search Ads 360 label fields

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The New Search Ads 360 connector now includes label fields for accounts, campaigns, and ad groups.

## Extended Definition

The New Search Ads 360 connector now includes label fields for accounts, campaigns, and ad groups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)

## Supporting Pages

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Example function getConfig ( request ) { var cc = DataStudioApp . createCommunityConnector (); var config = cc . getConfig (); config . newTextInput () . setId ( 'exampleTextInput' ) . setName ( 'Single line text' ) . setHelpText ( 'Helper text for single line text' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newTextArea () . setId ( 'exampleTextArea' ) . setName ( 'Text area' ) . setHelpText ( 'Helper text for text area' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newSelectSingle () . setId ( 'exampleSelectSingle' ) . setName ( 'Select single' ) . setHelpText ( 'Helper text for select single' ) . setAllowOverride ( true ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newSelectMultiple () . setId ( 'exampleSelectMultiple' ) . setName ( 'Select multiple' ) . setHelpText ( 'Helper text for select multiple' ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newCheckbox () . setId ( 'exampleCheckbox' ) . setName ( 'This is a checkbox' ) . setHelpText ( 'Helper text for checkbox' ); config . newInfo () . setId ( 'exampleInfo' ) . setText ( 'Examle instructions text used in Info' ) config . setDateRangeRequired ( true ); config . setIsSteppedConfig ( false ); return config . build (); } Legacy @return {object} A JavaScript object representing the connector configuration that should be displayed to the user.
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.
- The response contains the connector configuration with the following structure: { configParams : [ { type : string ( ConfigType ), name : string , displayName : string , helpText : string , placeholder : string , isDynamic : boolean , parameterControl : { allowOverride : boolean }, options : [ { label : string , value : string } ] } ], dateRangeRequired : boolean , isSteppedConfig : boolean } Field name Type Description configParams[] object The user provided values required by the connector.
- Example function getSchema ( request ) { var cc = DataStudioApp . createCommunityConnector (); var fields = cc . getFields (); var types = cc .

### "Using calculated fields in schema \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Formula aggregation "SUM($cost) / SUM($units)" AUTO "$cost + $units" NONE Examples of calculated fields in schema function getSchema ( request ) { var cc = DataStudioApp . createCommunityConnector (); var fields = cc . getFields (); var types = cc .
- Home Products Looker Studio Community Connectors Using calculated fields in schema Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The formula field property enables the addition of calculated fields to your connector's schema using supported functions.
- The formula field property can be used to add calculated fields to your connector's schema.

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- Example A Search Console configuration for a URL-prefix property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr &ds.ds5.connector=searchConsole &ds.ds5.siteUrl=https%3A%2F%2Fwww.example.com%2Fwelcome &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB A Search Console configuration for a Domain property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr ds.ds5.connector=searchConsole &ds.ds5.siteUrl=sc-domain%3Aexample.com &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB Template permissions To ensure the best user experience for users, it's important to correctly set report access permissions for your template report and associated data sources.
- Set to true to use the data source configuration specified via the Linking API to refresh data source fields and update report components with new field selections. true is typically specified when switching the connector type or for connector types where a configuration change yields different fields (e.g. fields for BigQuery data sources often change with different table configurations).
- Example Connect to a Looker Explore: https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr &ds.ds5.connector=looker &ds.ds5.instanceUrl=my.looker.com &ds.ds5.model=thelook &ds.ds5.explore=orders Search Console Parameter name Description ds. alias .connector link Optional.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.180Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Group Others"
feature_slug: "group-others"
latest_feature_date: "2024-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/date-range"
  - "https://developers.google.com/looker-studio/connector/reference"
keywords:
  - "group"
  - "others"
  - "chart"
  - "setting"
  - "aggregates"
  - "out"
  - "range"
  - "results"
---

# Group Others

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Group Others chart setting aggregates out-of-range results into an Others category for comparison against the remaining data.

## Extended Definition

The Group Others chart setting aggregates out-of-range results into an Others category for comparison against the remaining data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/date-range](https://developers.google.com/looker-studio/connector/date-range)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- Examples A Google Sheets configuration: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 A Google Sheets configuration with the first row used as headers and hidden and filtered cells included: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.hasHeader=true &ds.ds3.includeHiddenCells=true &ds.ds3.includeFilteredCells=true A Google Sheets configuration with a range (A1:D20): https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.range=A1%3AD20 Looker Parameter name Description ds. alias .connector link Optional.
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).
- Replace vs update - Data source configurations When setting data source parameters, the presence or omission of the ds.connector parameter in the Linking API URL indicates the intention to replace or update the template data source configuration, respectively.

### Date range control \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/date-range](https://developers.google.com/looker-studio/connector/date-range)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag When fetching data requiring a date range, leverage Looker Studio's date range features by setting dateRangeRequired to true in your connector's getConfig response.
- Then, Looker Studio will include a start and end date with every getData request made to your connector. getData behavior when dateRangeRequired is true When dateRangeRequired is set to true in your getConfig response, each getData request will contain a dateRange object with startDate and endDate parameters.
- Home Products Looker Studio Community Connectors Date range control Stay organized with collections Save and categorize content based on your preferences.
- If you are working with a data source that requires a date range when fetching data, you can take advantage of the [Looker Studio date range features].

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- However, setting this field will not override the group that Looker Studio uses in the Type option for the fields editor.
- Enum Value Description CURRENCY AED United Arab Emirates Dirham (dh) CURRENCY ALL Albanian Lek (Lek) CURRENCY ARS Argentine Pesos ($) CURRENCY AUD Australian Dollar ($) CURRENCY BDT Bangladeshi Taka (৳) CURRENCY BGN Bulgarian Lev (lev) CURRENCY BOB Bolivian Boliviano (Bs) CURRENCY BRL Brazilian Real (R$) CURRENCY CAD Canadian Dollar ($) CURRENCY CDF Congolese Franc (FrCD) CURRENCY CHF Swiss Franc (CHF) CURRENCY CLP Chilean Peso ($) CURRENCY CNY Chinese Yuan (¥) CURRENCY COP Colombian Peso ($) CURRENCY CRC Costa Rican Colon (₡) CURRENCY CZK Czech Koruna (Kč) CURRENCY DKK Danish Krone (kr.) CURRENCY DOP Dominican Peso (RD$) CURRENCY EGP Egyptian Pound (£) CURRENCY ETB Ethiopian Birr (Birr) CURRENCY EUR Euro (€) CURRENCY GBP British Pound Sterling (£) CURRENCY HKD Hong Kong Dollar ($) CURRENCY HRK Croatian Kuna (kn) CURRENCY HUF Hungarian Forint (Ft) CURRENCY IDR Indonesian Rupiah (Rp) CURRENCY ILS Israeli New Sheqel (₪) CURRENCY INR Indian Rupee (₹) CURRENCY IRR Iranian Rial (Rial) CURRENCY ISK Icelandic Krona (kr) CURRENCY JMD Jamaican Dollar ($) CURRENCY JPY Japanese Yen (¥) CURRENCY KRW South Korean Won (₩) CURRENCY LKR Sri Lankan Rupee (Rs) CURRENCY LTL Lithuanian Litas (Lt) CURRENCY MNT Mongolian Tugrik (₮) CURRENCY MVR Maldivian Rufiyaa (Rf) CURRENCY MXN Mexican Peso ($) CURRENCY MYR Malaysian Ringgit (RM) CURRENCY NOK Norwegian Krone (kr) CURRENCY NZD New Zealand Dollars ($) CURRENCY PAB Panamanian Balboa (B/.) CURRENCY PEN Peruvian Nuevo Sol (S/.) CURRENCY PHP Philippine Peso (₱) CURRENCY PKR Pakistani Rupee (Rs) CURRENCY PLN Polish Zloty (zł) CURRENCY RON Romanian Leu (RON) CURRENCY RSD Serbian Dinar (din) CURRENCY RUB Russian Ruble (₽) CURRENCY SAR Saudi Riyal (Rial) CURRENCY SEK Swedish Krona (kr) CURRENCY SGD Singapore Dollar ($) CURRENCY THB Thai Baht (฿) CURRENCY TRY Turkish Lira (₺) CURRENCY TWD New Taiwan Dollar (NT$) CURRENCY TZS Tanzanian Shilling (TSh) CURRENCY UAH Ukrainian Hryvnia (грн.) CURRENCY USD US Dollar ($) CURRENCY UYU US Dollar ($) CURRENCY VEF Uruguayan Peso ($) CURRENCY VND Venezuela Bolivar Fuerte (Bs) CURRENCY YER Vietnamese Dong (₫) CURRENCY ZAR Yemeni Rial (Rial) SemanticGroup This is only a list of suggested values, you are free to choose values outside this list.
- Response Example { "schema" : [ { "name" : "Created" , "label" : "Date Created" , "description" : "The date that this was created" , "dataType" : "STRING" , "group" : "Date" , "isDefault" : true , "semantics" : { "conceptType" : "DIMENSION" , "semanticGroup" : "DATE AND TIME" , "semanticType" : "YEAR MONTH DAY" , "isReaggregatable" : false } }, { "name" : "Amount" , "label" : "Amount (USD)" , "description" : "The cost in US dollars" , "dataType" : "NUMBER" , "isHidden" : true , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "CURRENCY" , "semanticType" : "CURRENCY USD" , } }, { "name" : "AmountPer" , "label" : "Amount Per Dimension" , "description" : "The summed cost" , "dataType" : "NUMBER" , "group" : "Money" , "formula" : "sum(Amount)" , "isDefault" : true , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "CURRENCY" , "semanticType" : "CURRENCY USD" , "isReaggregatable" : true } }, { "name" : "Probability" , "label" : "Probability (Close rate)" , "description" : "The probability that a store closes" , "dataType" : "NUMBER" , "semantics" : { "conceptType" : "METRIC" , "semanticGroup" : "NUMERIC" , "semanticType" : "PERCENT" , "isReaggregatable" : false } }, { "name" : "OpportunityName" , "label" : "Opportunity Name" , "description" : "The name of the opportunity" , "dataType" : "STRING" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "TEXT" , "isReaggregatable" : false } }, { "name" : "IsVerified" , "label" : "Verified Status" , "description" : "Whether or not the store is verified" , "dataType" : "BOOLEAN" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "BOOLEAN" , "isReaggregatable" : false } }, { "name" : "Company" , "label" : "Incorporated Company Name" , "description" : "The name of the company the store belongs to" , "dataType" : "STRING" , "semantics" : { "conceptType" : "DIMENSION" , "semanticType" : "TEXT" , "isReaggregatable" : false } } ] } getData() Returns the tabular data for the given request.
- Example function getConfig ( request ) { var cc = DataStudioApp . createCommunityConnector (); var config = cc . getConfig (); config . newTextInput () . setId ( 'exampleTextInput' ) . setName ( 'Single line text' ) . setHelpText ( 'Helper text for single line text' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newTextArea () . setId ( 'exampleTextArea' ) . setName ( 'Text area' ) . setHelpText ( 'Helper text for text area' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newSelectSingle () . setId ( 'exampleSelectSingle' ) . setName ( 'Select single' ) . setHelpText ( 'Helper text for select single' ) . setAllowOverride ( true ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newSelectMultiple () . setId ( 'exampleSelectMultiple' ) . setName ( 'Select multiple' ) . setHelpText ( 'Helper text for select multiple' ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newCheckbox () . setId ( 'exampleCheckbox' ) . setName ( 'This is a checkbox' ) . setHelpText ( 'Helper text for checkbox' ); config . newInfo () . setId ( 'exampleInfo' ) . setText ( 'Examle instructions text used in Info' ) config . setDateRangeRequired ( true ); config . setIsSteppedConfig ( false ); return config . build (); } Legacy @return {object} A JavaScript object representing the connector configuration that should be displayed to the user.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.172Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Filter value suggestions"
feature_slug: "filter-value-suggestions"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/filters"
  - "https://developers.google.com/looker-studio/visualization/interactions-guide"
  - "https://developers.google.com/looker-studio/connector/reference"
keywords:
  - "filter"
  - "value"
  - "suggestions"
  - "report"
  - "editors"
  - "can"
  - "choose"
  - "suggested"
---

# Filter value suggestions

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Report editors can choose suggested filter values from the underlying data when using Equal to or In conditions.

## Extended Definition

Report editors can choose suggested filter values from the underlying data when using Equal to or In conditions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)

## Supporting Pages

### Filters \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The report user has configured two filters: country is IN LIST of Canada, USA source is IN LIST of Social, Organic The report user has configured a chart component with the source dimension and sessions metric getData() is executed by Looker Studio with the following request object: { "fields" : [ { "name" : "source" }, { "name" : "sessions" }, { "name" : "country" , "forFilterOnly" : true } ], "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "Canada" , "USA" ], "type" : "INCLUDE" , "operator" : "IN LIST" }], [{ "fieldName" : "source" , "values" : [ "Social" , "Organic" ], "type" : "INCLUDE" , "operator" : "IN LIST" }] ] } Connector responds with filtered data.
- Example: { "schema" : [ { "name" : "source" , "dataType" : "STRING" }, { "name" : "sessions" , "dataType" : "NUMBER" }, { "name" : "country" , "dataType" : "STRING" } ], "rows" : [ { "values" : [ "Social" , 60 , "USA" ]}, { "values" : [ "Social" , 50 , "Canada" ]}, { "values" : [ "Social" , 40 , "UK" ]}, { "values" : [ "Organic" , 90 , "USA" ]}, { "values" : [ "Organic" , 80 , "Canada" ]}, { "values" : [ "Organic" , 70 , "UK" ]}, { "values" : [ "Newspaper" , 30 , "USA" ]}, { "values" : [ "Newspaper" , 20 , "Canada" ]}, { "values" : [ "Newspaper" , 10 , "UK" ]}, ], "filtersApplied" : false } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Original data source sessions country Social 60 USA Social 50 Canada Social 40 UK Organic 90 USA Organic 80 Canada Organic 70 UK Newspaper 30 USA Newspaper 20 Canada Newspaper 10 UK Filtered data source sessions Social 60 Social 50 Organic 90 Organic 80 getData() response { "schema" : [ { "name" : "source" , "dataType" : "STRING" }, { "name" : "sessions" , "dataType" : "NUMBER" }, ], "rows" : [ { "values" : [ "Social" , 60 ]}, { "values" : [ "Social" , 50 ]}, { "values" : [ "Organic" , 90 ]}, { "values" : [ "Organic" , 80 ]} ], "filtersApplied" : true } Key Point: response.rows[].values does not have an entry for country and filtersApplied is set to true .
- For example, for the following filter, the connector should only include values that have a country of USA AND a source of Social . { "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "USA" ], "type" : "INCLUDE" , "operator" : "EQUALS" }], [{ "fieldName" : "source" , "values" : [ "Social" ], "type" : "INCLUDE" , "operator" : "EQUALS" }] ] } OR together each sub-array in the request.dimensionsFilters array.

### "Using community visualizations as filters \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Suppose a user selected the cells corresponding to "Monday evening" and "Friday afternoon", and you wanted to filter the rest of the dashboard to only show data from either "Monday evening" or "Friday afternoon".Your interactionData would look like this: var interactionData = { "concepts" : [ "dayOfWeekDimensionId" , "timeOfDayDimensionId" ], "values" : [ [ "Monday" , "evening" ], [ "Friday" , "afternoon" ] ] } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example data.interactions : "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } If value.data is not undefined, the visualization is currently filtering other components of the dashboard.
- Example: const handleInteraction = () = > { // this is the interactionId defined in the config const interactionId = "interactionConfigId" ; // the ID of the field you want to filter on const dimensionId = "qt ky8sltutsb" ; // the value of the field you want to filter on const value = "USA" ; // the interaction type - only FILTER is supported right now const FILTER = dscc .
- FILTER ; let interactionData = { concepts : [ dimensionId ], values : [[ value ]] }; // send Looker Studio an instruction to filter other charts in the dashboard dscc . sendInteraction ( interactionId , FILTER , interactionData ); }; Note: Make sure the interactionId matches a config.interactions[].id in your config.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Enum Value Description CURRENCY AED United Arab Emirates Dirham (dh) CURRENCY ALL Albanian Lek (Lek) CURRENCY ARS Argentine Pesos ($) CURRENCY AUD Australian Dollar ($) CURRENCY BDT Bangladeshi Taka (৳) CURRENCY BGN Bulgarian Lev (lev) CURRENCY BOB Bolivian Boliviano (Bs) CURRENCY BRL Brazilian Real (R$) CURRENCY CAD Canadian Dollar ($) CURRENCY CDF Congolese Franc (FrCD) CURRENCY CHF Swiss Franc (CHF) CURRENCY CLP Chilean Peso ($) CURRENCY CNY Chinese Yuan (¥) CURRENCY COP Colombian Peso ($) CURRENCY CRC Costa Rican Colon (₡) CURRENCY CZK Czech Koruna (Kč) CURRENCY DKK Danish Krone (kr.) CURRENCY DOP Dominican Peso (RD$) CURRENCY EGP Egyptian Pound (£) CURRENCY ETB Ethiopian Birr (Birr) CURRENCY EUR Euro (€) CURRENCY GBP British Pound Sterling (£) CURRENCY HKD Hong Kong Dollar ($) CURRENCY HRK Croatian Kuna (kn) CURRENCY HUF Hungarian Forint (Ft) CURRENCY IDR Indonesian Rupiah (Rp) CURRENCY ILS Israeli New Sheqel (₪) CURRENCY INR Indian Rupee (₹) CURRENCY IRR Iranian Rial (Rial) CURRENCY ISK Icelandic Krona (kr) CURRENCY JMD Jamaican Dollar ($) CURRENCY JPY Japanese Yen (¥) CURRENCY KRW South Korean Won (₩) CURRENCY LKR Sri Lankan Rupee (Rs) CURRENCY LTL Lithuanian Litas (Lt) CURRENCY MNT Mongolian Tugrik (₮) CURRENCY MVR Maldivian Rufiyaa (Rf) CURRENCY MXN Mexican Peso ($) CURRENCY MYR Malaysian Ringgit (RM) CURRENCY NOK Norwegian Krone (kr) CURRENCY NZD New Zealand Dollars ($) CURRENCY PAB Panamanian Balboa (B/.) CURRENCY PEN Peruvian Nuevo Sol (S/.) CURRENCY PHP Philippine Peso (₱) CURRENCY PKR Pakistani Rupee (Rs) CURRENCY PLN Polish Zloty (zł) CURRENCY RON Romanian Leu (RON) CURRENCY RSD Serbian Dinar (din) CURRENCY RUB Russian Ruble (₽) CURRENCY SAR Saudi Riyal (Rial) CURRENCY SEK Swedish Krona (kr) CURRENCY SGD Singapore Dollar ($) CURRENCY THB Thai Baht (฿) CURRENCY TRY Turkish Lira (₺) CURRENCY TWD New Taiwan Dollar (NT$) CURRENCY TZS Tanzanian Shilling (TSh) CURRENCY UAH Ukrainian Hryvnia (грн.) CURRENCY USD US Dollar ($) CURRENCY UYU US Dollar ($) CURRENCY VEF Uruguayan Peso ($) CURRENCY VND Venezuela Bolivar Fuerte (Bs) CURRENCY YER Vietnamese Dong (₫) CURRENCY ZAR Yemeni Rial (Rial) SemanticGroup This is only a list of suggested values, you are free to choose values outside this list.
- If set to true , data source creators can enable this for report editors Default value for allowOverride is false .
- The single-select value can be overridden in reports. { configParams : [ { type : "TEXTINPUT" , name : "exampleTextInput" , displayName : "Single line text" , helpText : "Helper text for single line text" , placeholder : "Lorem Ipsum" }, { type : "TEXTAREA" , name : "exampleTextArea" , displayName : "Text area" , helpText : "Helper text for text area" , placeholder : "Lorem Ipsum" }, { type : "SELECT SINGLE" , name : "exampleSELECT SINGLE" , displayName : "Select single" , helpText : "Helper text for select-single" , parameterControl : { allowOverride : true }, options : [ { label : "Lorem foo" , value : "lorem" }, { label : "Ipsum bar" , value : "ipsum" }, { label : "Sit" , value : "amet" } ] }, { type : "SELECT MULTIPLE" , name : "exampleSELECT MULTIPLE" , displayName : "Select multiple" , helpText : "Helper text for select-multiple" , options : [ { label : "Lipsum" , value : "lipsum" }, { label : "Foo Bar" , value : "foobar" }, { label : "Dolor Sit" , value : "amet" } ] }, { type : "CHECKBOX" , name : "exampleCheckbox" , displayName : "This is a checkbox" , helpText : "Helper text for checkbox" , }, { type : "INFO" , name : "exampleInfo" , text : "Example instructions text used in Info" } ], dateRangeRequired : false } getSchema() Returns the schema for the given request.
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.


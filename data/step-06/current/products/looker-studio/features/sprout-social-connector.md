---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.138Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Sprout Social connector"
feature_slug: "sprout-social-connector"
latest_feature_date: "2025-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/auth"
  - "https://developers.google.com/looker-studio/connector/filters"
  - "https://developers.google.com/looker-studio/connector"
keywords:
  - "sprout"
  - "social"
  - "connector"
  - "connects"
  - "looker"
  - "studio"
  - "through"
  - "windsor"
---

# Sprout Social connector

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Connects Looker Studio to Sprout Social data through Windsor.ai.

## Extended Definition

Connects Looker Studio to Sprout Social data through Windsor.ai.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)
- [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- [https://developers.google.com/looker-studio/connector](https://developers.google.com/looker-studio/connector)

## Supporting Pages

### Authentication \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Community Connectors Authentication Stay organized with collections Save and categorize content based on your preferences.
- You would have to have a checkForValidCreds // function defined for this to work. const validCreds = checkForValidCreds ( username , token ); if ( ! validCreds ) { return { errorCode : "INVALID CREDENTIALS" , }; } const userProperties = PropertiesService . getUserProperties (); userProperties . setProperty ( "dscc.username" , username ); userProperties . setProperty ( "dscc.token" , token ); return { errorCode : "NONE" , }; } KEY data-studio/auth.gs View on GitHub / Sets the credentials. @param {Request} request The set credentials request. @return {object} An object with an errorCode. / function setCredentialsKey ( request ) { const key = request . key ; // Optional // Check if the provided key is valid through a call to your service. // You would have to have a checkForValidKey function defined for // this to work. const validKey = checkForValidKey ( key ); if ( ! validKey ) { return { errorCode : "INVALID CREDENTIALS" , }; } const userProperties = PropertiesService . getUserProperties (); userProperties . setProperty ( "dscc.key" , key ); return { errorCode : "NONE" , }; } Note: See setCredentials() for the full documentation.
- You would have to have a checkForValidCreds // function defined for this to work. const validCreds = checkForValidCreds ( username , password ); if ( ! validCreds ) { return { errorCode : "INVALID CREDENTIALS" , }; } const userProperties = PropertiesService . getUserProperties (); userProperties . setProperty ( "dscc.username" , username ); userProperties . setProperty ( "dscc.password" , password ); return { errorCode : "NONE" , }; } USER TOKEN data-studio/auth.gs View on GitHub / Sets the credentials. @param {Request} request The set credentials request. @return {object} An object with an errorCode. / function setCredentialsUserToken ( request ) { const creds = request . userToken ; const username = creds . username ; const token = creds . token ; // Optional // Check if the provided username and token are valid through a // call to your service.
- You would have to have a checkForValidCreds // function defined for this to work . var validCreds = checkForValidCreds ( path , key ); if ( ! validCreds ) { return { errorCode : 'INVALID CREDENTIALS' } ; } var userProperties = PropertiesService . getUserProperties (); userProperties . set Property ( 'dscc.path' , path ); userProperties . set Property ( 'dscc.key' , key ); return { errorCode : 'NONE' } ; } USER PASS data-studio/auth.gs View on GitHub / Sets the credentials. @param {Request} request The set credentials request. @return {object} An object with an errorCode. / function setCredentialsUserPass ( request ) { const creds = request . userPass ; const username = creds . username ; const password = creds . password ; // Optional // Check if the provided username and password are valid through a // call to your service.

### Filters \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- The report user has configured two filters: country is IN LIST of Canada, USA source is IN LIST of Social, Organic The report user has configured a chart component with the source dimension and sessions metric getData() is executed by Looker Studio with the following request object: { "fields" : [ { "name" : "source" }, { "name" : "sessions" }, { "name" : "country" , "forFilterOnly" : true } ], "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "Canada" , "USA" ], "type" : "INCLUDE" , "operator" : "IN LIST" }], [{ "fieldName" : "source" , "values" : [ "Social" , "Organic" ], "type" : "INCLUDE" , "operator" : "IN LIST" }] ] } Connector responds with filtered data.
- Page Summary outlined flag Looker Studio can apply filters to data from community connectors, but applying filters within the connector itself can significantly enhance performance.
- If a report contains filters and a community connector returns unfiltered data for all fields requested then Looker Studio will apply filters to the connector response.
- Filter information is passed in the getData() request object , and the connector can use this information to filter data before sending it back to Looker Studio.

### Looker Studio Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector](https://developers.google.com/looker-studio/connector)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Community connectors can be shared directly with any user and/or can be submitted for inclusion in both the in-product gallery and the public Looker Studio Connector Gallery for any user to find and use.
- By building a connector, you can leverage Looker Studio as a robust and free reporting solution for your customers, promoting your connector and potentially monetizing it.
- Home Products Looker Studio Community Connectors Looker Studio Community Connectors Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag Looker Studio Community Connectors allow you to connect Looker Studio to any internet accessible data source using Google Apps Script.


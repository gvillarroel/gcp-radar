---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.131Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Workduo connector"
feature_slug: "workduo-connector"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/data-source-parameters"
  - "https://developers.google.com/looker-studio/connector/publish-connector"
  - "https://developers.google.com/looker-studio/connector/auth"
keywords:
  - "workduo"
  - "connector"
  - "connects"
  - "looker"
  - "studio"
  - "workday"
  - "through"
---

# Workduo connector

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Connects Looker Studio to Workday data through Workduo.

## Extended Definition

Connects Looker Studio to Workday data through Workduo.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- [https://developers.google.com/looker-studio/connector/publish-connector](https://developers.google.com/looker-studio/connector/publish-connector)
- [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)

## Supporting Pages

### "Overridable config parameters \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- When to avoid defining a parameter as overridable It is recommended to learn how Connectors, Data Sources, and Reports work in relation to each other by reviewing How Looker Studio connects to your data .
- Home Products Looker Studio Community Connectors Overridable config parameters Stay organized with collections Save and categorize content based on your preferences.
- For example, if the parameter name is ds0.zipcode , to set ZIP Code to 94094 , the JSON is as follows: { "ds0.zipcode" : "94094" } URL Encode the parameter object After you create the parameter object, use JSON.stringify() to turn it into a string, then use [encodeURIComponent] to URL encode it. var params = { "ds0.zipcode" : "94094" }; var paramsAsString = JSON . stringify ( params ); var encodedParams = encodeURIComponent ( paramsAsString ) This results in the following encoded string: "%7B%22ds0.zipcode%22%3A%2294094%22%7D" Build the report URL Once you have the URL encoded parameter object, append it to the report view URL using the params query parameter. https://lookerstudio.google.com/reporting/ REPORT ID /page/ PAGE ID ?params=%7B%22ds0.zipcode%22%3A%2294094%22%7D Make sure you replace REPORT ID and PAGE ID with the values for your report and page.
- Roles The user roles referenced throughout the document: Role Definition Connector developer A user that has built a community connector .

### "Publish a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/publish-connector](https://developers.google.com/looker-studio/connector/publish-connector)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag Publishing your Community Connector in the Looker Studio Connector Gallery increases its visibility and allows all Looker Studio users to easily find and use it.
- Publishing will let all Looker Studio users easily find your connector and provide visibility to your connector based on connector name, description, and listed data sources.
- Remove your published connector from the gallery To remove your Community Connector from the gallery, send a removal request to looker-studio-developer-feedback@google.com .
- Home Products Looker Studio Community Connectors Publish a Community Connector Stay organized with collections Save and categorize content based on your preferences.

### Authentication \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Looker Studio Community Connectors Authentication Stay organized with collections Save and categorize content based on your preferences.
- You would have to have a checkForValidCreds // function defined for this to work. const validCreds = checkForValidCreds ( username , token ); if ( ! validCreds ) { return { errorCode : "INVALID CREDENTIALS" , }; } const userProperties = PropertiesService . getUserProperties (); userProperties . setProperty ( "dscc.username" , username ); userProperties . setProperty ( "dscc.token" , token ); return { errorCode : "NONE" , }; } KEY data-studio/auth.gs View on GitHub / Sets the credentials. @param {Request} request The set credentials request. @return {object} An object with an errorCode. / function setCredentialsKey ( request ) { const key = request . key ; // Optional // Check if the provided key is valid through a call to your service. // You would have to have a checkForValidKey function defined for // this to work. const validKey = checkForValidKey ( key ); if ( ! validKey ) { return { errorCode : "INVALID CREDENTIALS" , }; } const userProperties = PropertiesService . getUserProperties (); userProperties . setProperty ( "dscc.key" , key ); return { errorCode : "NONE" , }; } Note: See setCredentials() for the full documentation.
- You would have to have a checkForValidCreds // function defined for this to work. const validCreds = checkForValidCreds ( username , password ); if ( ! validCreds ) { return { errorCode : "INVALID CREDENTIALS" , }; } const userProperties = PropertiesService . getUserProperties (); userProperties . setProperty ( "dscc.username" , username ); userProperties . setProperty ( "dscc.password" , password ); return { errorCode : "NONE" , }; } USER TOKEN data-studio/auth.gs View on GitHub / Sets the credentials. @param {Request} request The set credentials request. @return {object} An object with an errorCode. / function setCredentialsUserToken ( request ) { const creds = request . userToken ; const username = creds . username ; const token = creds . token ; // Optional // Check if the provided username and token are valid through a // call to your service.
- You would have to have a checkForValidCreds // function defined for this to work . var validCreds = checkForValidCreds ( path , key ); if ( ! validCreds ) { return { errorCode : 'INVALID CREDENTIALS' } ; } var userProperties = PropertiesService . getUserProperties (); userProperties . set Property ( 'dscc.path' , path ); userProperties . set Property ( 'dscc.key' , key ); return { errorCode : 'NONE' } ; } USER PASS data-studio/auth.gs View on GitHub / Sets the credentials. @param {Request} request The set credentials request. @return {object} An object with an errorCode. / function setCredentialsUserPass ( request ) { const creds = request . userPass ; const username = creds . username ; const password = creds . password ; // Optional // Check if the provided username and password are valid through a // call to your service.


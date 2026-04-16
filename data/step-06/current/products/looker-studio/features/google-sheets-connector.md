---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.135Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Google Sheets connector"
feature_slug: "google-sheets-connector"
latest_feature_date: "2025-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/pscc-requirements"
  - "https://developers.google.com/looker-studio/connector/publish-connector"
  - "https://developers.google.com/looker-studio/connector/auth"
keywords:
  - "sheets"
  - "connector"
  - "connects"
  - "looker"
  - "studio"
  - "through"
  - "supermetrics"
  - "partner"
---

# Google Sheets connector

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Connects Looker Studio to Google Sheets data through Supermetrics; A partner connector that brings Google Sheets data into Looker Studio.

## Extended Definition

Connects Looker Studio to Google Sheets data through Supermetrics; A partner connector that brings Google Sheets data into Looker Studio.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/pscc-requirements](https://developers.google.com/looker-studio/connector/pscc-requirements)
- [https://developers.google.com/looker-studio/connector/publish-connector](https://developers.google.com/looker-studio/connector/publish-connector)
- [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)

## Supporting Pages

### "Partner Connector requirements \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/pscc-requirements](https://developers.google.com/looker-studio/connector/pscc-requirements)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Community Connectors Partner Connector requirements Stay organized with collections Save and categorize content based on your preferences.
- See example pages from existing partners: Funnel , Supermetrics , CallRail . supportUrl should be a hosted page to get support for your connector.
- The verification process is a different process from the connector review and is handled by a separate team, not Looker Studio.
- Apps Script Before submitting your connector for review, complete the following in Apps Script: Share view access of your Apps Script project with the following: data-studio-contrib-qa@googlegroups.com data-studio-contrib@google.com Create a deployment named Production and update the Production deployment to the version of code you intend to publish.

### "Publish a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/publish-connector](https://developers.google.com/looker-studio/connector/publish-connector)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Publishing your Community Connector in the Looker Studio Connector Gallery increases its visibility and allows all Looker Studio users to easily find and use it.
- Publishing will let all Looker Studio users easily find your connector and provide visibility to your connector based on connector name, description, and listed data sources.
- Remove your published connector from the gallery To remove your Community Connector from the gallery, send a removal request to looker-studio-developer-feedback@google.com .
- Home Products Looker Studio Community Connectors Publish a Community Connector Stay organized with collections Save and categorize content based on your preferences.

### Authentication \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Community Connectors Authentication Stay organized with collections Save and categorize content based on your preferences.
- You would have to have a checkForValidCreds // function defined for this to work. const validCreds = checkForValidCreds ( username , token ); if ( ! validCreds ) { return { errorCode : "INVALID CREDENTIALS" , }; } const userProperties = PropertiesService . getUserProperties (); userProperties . setProperty ( "dscc.username" , username ); userProperties . setProperty ( "dscc.token" , token ); return { errorCode : "NONE" , }; } KEY data-studio/auth.gs View on GitHub / Sets the credentials. @param {Request} request The set credentials request. @return {object} An object with an errorCode. / function setCredentialsKey ( request ) { const key = request . key ; // Optional // Check if the provided key is valid through a call to your service. // You would have to have a checkForValidKey function defined for // this to work. const validKey = checkForValidKey ( key ); if ( ! validKey ) { return { errorCode : "INVALID CREDENTIALS" , }; } const userProperties = PropertiesService . getUserProperties (); userProperties . setProperty ( "dscc.key" , key ); return { errorCode : "NONE" , }; } Note: See setCredentials() for the full documentation.
- You would have to have a checkForValidCreds // function defined for this to work. const validCreds = checkForValidCreds ( username , password ); if ( ! validCreds ) { return { errorCode : "INVALID CREDENTIALS" , }; } const userProperties = PropertiesService . getUserProperties (); userProperties . setProperty ( "dscc.username" , username ); userProperties . setProperty ( "dscc.password" , password ); return { errorCode : "NONE" , }; } USER TOKEN data-studio/auth.gs View on GitHub / Sets the credentials. @param {Request} request The set credentials request. @return {object} An object with an errorCode. / function setCredentialsUserToken ( request ) { const creds = request . userToken ; const username = creds . username ; const token = creds . token ; // Optional // Check if the provided username and token are valid through a // call to your service.
- You would have to have a checkForValidCreds // function defined for this to work . var validCreds = checkForValidCreds ( path , key ); if ( ! validCreds ) { return { errorCode : 'INVALID CREDENTIALS' } ; } var userProperties = PropertiesService . getUserProperties (); userProperties . set Property ( 'dscc.path' , path ); userProperties . set Property ( 'dscc.key' , key ); return { errorCode : 'NONE' } ; } USER PASS data-studio/auth.gs View on GitHub / Sets the credentials. @param {Request} request The set credentials request. @return {object} An object with an errorCode. / function setCredentialsUserPass ( request ) { const creds = request . userPass ; const username = creds . username ; const password = creds . password ; // Optional // Check if the provided username and password are valid through a // call to your service.


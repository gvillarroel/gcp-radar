---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.190Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Third-party connector controls"
feature_slug: "third-party-connector-controls"
latest_feature_date: "2024-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/auth"
  - "https://developers.google.com/looker-studio/connector/semantics"
  - "https://developers.google.com/looker-studio/connector/reference"
keywords:
  - "third"
  - "party"
  - "connector"
  - "controls"
  - "workspace"
  - "admins"
  - "can"
  - "restrict"
---

# Third-party connector controls

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Workspace admins can restrict users from enabling data sources that use third-party connectors.

## Extended Definition

Workspace admins can restrict users from enabling data sources that use third-party connectors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)
- [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)

## Supporting Pages

### Authentication \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OAUTH2 data-studio/auth.gs View on GitHub / Resets the auth service. / function resetAuthOAuth2 () { getOAuthService (). reset (); } PATH USER PASS / Resets the auth service . / function resetAuth () { var userProperties = PropertiesService . getUserProperties (); userProperties . deleteProperty ( 'dscc.path' ); userProperties . deleteProperty ( 'dscc.username' ); userProperties . deleteProperty ( 'dscc.password' ); } PATH KEY / Resets the auth service . / function resetAuth () { var userProperties = PropertiesService . getUserProperties (); userProperties . deleteProperty ( 'dscc.path' ); userProperties . deleteProperty ( 'dscc.key' ); } USER PASS data-studio/auth.gs View on GitHub / Resets the auth service. / function resetAuthUser () { const userProperties = PropertiesService . getUserProperties (); userProperties . deleteProperty ( "dscc.username" ); userProperties . deleteProperty ( "dscc.password" ); } USER TOKEN data-studio/auth.gs View on GitHub / Resets the auth service. / function resetAuthUserToken () { const userTokenProperties = PropertiesService . getUserProperties (); userTokenProperties . deleteProperty ( "dscc.username" ); userTokenProperties . deleteProperty ( "dscc.password" ); } KEY data-studio/auth.gs View on GitHub / Resets the auth service. / function resetAuthKey () { const userProperties = PropertiesService . getUserProperties (); userProperties . deleteProperty ( "dscc.key" ); } Note: See resetAuth() for the full documentation. isAuthValid() This function is called to determine if the authentication for the third-party service is valid.
- NONE ). build (); } Note: See getAuthType() for the full documentation. resetAuth() This function will clear any credentials stored for the user for the third-party service.
- You can close this tab" ); } get3PAuthorizationUrls() This function is called to get the URL that is required to initiate the auth flow for the third-party service.
- If isAuthValid returns false then the URL returned will be displayed to the user as a button or link so that they can authorize access to the third-party service.

### "Data types and semantic types \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request all columns and cache the response If it's possible to request all columns for the third-party service from which you're fetching data then on the first semantic detection request received from Looker Studio fetch all columns and cache the results.
- Return only n number of records If the third-party service from which you're fetching data supports row limits when requesting data then return a small subset of rows to Looker Studio instead of the full data set.
- The other benefit of this approach is that it is much quicker since it does not require you to make HTTP requests to the third-party service for data.
- For subsequent semantic detection requests fetch column values from the cache instead of making additional HTTP requests to the third-party service.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Response Example { "type" : "USER TOKEN" , "helpUrl" : "https://www.example.org/connector-auth-help" } Required Auth functions isAuthValid() Checks if the 3rd-party service credentials are valid.
- If false then the user will likely be notified that auth has expired and they will be asked to reauthorize. resetAuth() Clears user credentials for the third-party service.
- Example function getConfig ( request ) { var cc = DataStudioApp . createCommunityConnector (); var config = cc . getConfig (); config . newTextInput () . setId ( 'exampleTextInput' ) . setName ( 'Single line text' ) . setHelpText ( 'Helper text for single line text' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newTextArea () . setId ( 'exampleTextArea' ) . setName ( 'Text area' ) . setHelpText ( 'Helper text for text area' ) . setPlaceholder ( 'Lorem Ipsum' ); config . newSelectSingle () . setId ( 'exampleSelectSingle' ) . setName ( 'Select single' ) . setHelpText ( 'Helper text for select single' ) . setAllowOverride ( true ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newSelectMultiple () . setId ( 'exampleSelectMultiple' ) . setName ( 'Select multiple' ) . setHelpText ( 'Helper text for select multiple' ) . addOption ( config . newOptionBuilder () . setLabel ( 'Lorum foo' ) . setValue ( 'lorem' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Ipsum Bar' ) . setValue ( 'ipsum' )) . addOption ( config . newOptionBuilder () . setLabel ( 'Sit' ) . setValue ( 'amet' )); config . newCheckbox () . setId ( 'exampleCheckbox' ) . setName ( 'This is a checkbox' ) . setHelpText ( 'Helper text for checkbox' ); config . newInfo () . setId ( 'exampleInfo' ) . setText ( 'Examle instructions text used in Info' ) config . setDateRangeRequired ( true ); config . setIsSteppedConfig ( false ); return config . build (); } Legacy @return {object} A JavaScript object representing the connector configuration that should be displayed to the user.
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.


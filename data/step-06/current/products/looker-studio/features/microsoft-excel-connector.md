---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.174Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Microsoft Excel connector"
feature_slug: "microsoft-excel-connector"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/user-identity"
  - "https://developers.google.com/looker-studio/connector/share"
  - "https://developers.google.com/looker-studio/connector/auth"
keywords:
  - "microsoft"
  - "excel"
  - "connector"
  - "lets"
  - "looker"
  - "studio"
  - "access"
  - "stored"
---

# Microsoft Excel connector

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Microsoft Excel connector lets Looker Studio access data stored in Excel worksheets.

## Extended Definition

The Microsoft Excel connector lets Looker Studio access data stored in Excel worksheets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/user-identity](https://developers.google.com/looker-studio/connector/user-identity)
- [https://developers.google.com/looker-studio/connector/share](https://developers.google.com/looker-studio/connector/share)
- [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)

## Supporting Pages

### "Access user identity properties \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/user-identity](https://developers.google.com/looker-studio/connector/user-identity)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Community Connectors Access user identity properties Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag Community Connectors allow you to build data sources that can access the effective user's identity, enabling personalized data retrieval.
- Implementation steps Accessing the user OAuth token Your connector can access Google services and APIs on behalf of the user by passing the user's OAuth token.
- Your connector can leverage the user's OAuth token to access Google services and APIs on their behalf for custom data integrations.

### "Share a Community Connector \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/share](https://developers.google.com/looker-studio/connector/share)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Distribute To distribute your connector to all Looker Studio users, you can request to be published in the Looker Studio Connector Gallery and/or share a direct link .
- Home Products Looker Studio Community Connectors Share a Community Connector Stay organized with collections Save and categorize content based on your preferences.
- Now that you have built , used , and deployed your connector, you may want to share it with other Looker Studio users.
- Without read access their Looker Studio account will not be able to read and execute the script.

### Authentication \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Community Connectors Authentication Stay organized with collections Save and categorize content based on your preferences.
- OAUTH2 data-studio/auth.gs View on GitHub / Returns true if the auth service has access. @return {boolean} True if the auth service has access. / function isAuthValidOAuth2 () { return getOAuthService (). hasAccess (); } PATH USER PASS / Returns true if the auth service has access . @ return { boolean } True if the auth service has access . / function isAuthValid () { var userProperties = PropertiesService . getUserProperties (); var path = userProperties . getProperty ( 'dscc.path' ); var userName = userProperties . getProperty ( 'dscc.username' ); var password = userProperties . getProperty ( 'dscc.password' ); // This assumes you have a validateCredentials function that // can validate if the path , userName and password are correct . return validateCredentials ( path , userName , password ); } PATH KEY / Returns true if the auth service has access . @ return { boolean } True if the auth service has access . / function isAuthValid () { var userProperties = PropertiesService . getUserProperties (); var path = userProperties . getProperty ( 'dscc.path' ); var key = userProperties . getProperty ( 'dscc.key' ); // This assumes you have a validateCredentials function that // can validate if the path and key are correct . return validateCredentials ( path , key ); } USER PASS data-studio/auth.gs View on GitHub / Returns true if the auth service has access. @return {boolean} True if the auth service has access. / function isAuthValidUserPass () { const userProperties = PropertiesService . getUserProperties (); const userName = userProperties . getProperty ( "dscc.username" ); const password = userProperties . getProperty ( "dscc.password" ); // This assumes you have a validateCredentials function that // can validate if the userName and password are correct. return validateCredentials ( userName , password ); } USER TOKEN data-studio/auth.gs View on GitHub / Returns true if the auth service has access. @return {boolean} True if the auth service has access. / function isAuthValidUserToken () { const userProperties = PropertiesService . getUserProperties (); const userName = userProperties . getProperty ( "dscc.username" ); const token = userProperties . getProperty ( "dscc.token" ); // This assumes you have a validateCredentials function that // can validate if the userName and token are correct. return validateCredentials ( userName , token ); } KEY data-studio/auth.gs View on GitHub / Returns true if the auth service has access. @return {boolean} True if the auth service has access. / function isAuthValidKey () { const userProperties = PropertiesService . getUserProperties (); const key = userProperties . getProperty ( "dscc.key" ); // This assumes you have a validateKey function that can validate // if the key is valid. return validateKey ( key ); } Note: See isAuthValid() for the full documentation.
- Example of returning the authorization Url using the OAuth2 for Apps Script library: data-studio/auth.gs View on GitHub / Gets the 3P authorization URL. @return {string} The authorization URL. @see https://developers.google.com/apps-script/reference/script/authorization-info / function get3PAuthorizationUrls () { return getOAuthService (). getAuthorizationUrl (); } Note: If you are using Apps Script Advanced Services or Google APIs for your connector, you might need to get your Connector verified.
- USER PASS ) . setHelpUrl ( "https://www.example.org/connector-auth-help" ) . build (); } USER TOKEN data-studio/auth.gs View on GitHub / Returns the Auth Type of this connector. @return {object} The Auth type. / function getAuthTypeUserToken () { const cc = DataStudioApp . createCommunityConnector (); return cc . newAuthTypeResponse () . setAuthType ( cc .


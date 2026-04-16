---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.157Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Looker connector BigQuery OAuth authorization"
feature_slug: "looker-connector-bigquery-oauth-authorization"
latest_feature_date: "2025-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/reference"
  - "https://developers.google.com/looker-studio/connector/auth"
  - "https://developers.google.com/looker-studio/connector/bigquery-row-level-security"
keywords:
  - "looker"
  - "connector"
  - "bigquery"
  - "oauth"
  - "authorization"
  - "can"
  - "use"
  - "credentials"
---

# Looker connector BigQuery OAuth authorization

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

The Looker connector can use the BigQuery OAuth credentials associated with Looker so users can view and interact with Looker Explores backed by BigQuery data.

## Extended Definition

The Looker connector can use the BigQuery OAuth credentials associated with Looker so users can view and interact with Looker Explores backed by BigQuery data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)
- [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)

## Supporting Pages

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQueryParameterType ; var configuration = DataStudioApp . createCommunityConnector () . newBigQueryConfig () . setBillingProjectId ( 'billingProjectId' ) . setQuery ( 'myQueryString' ) . setUseStandardSql ( true ) . setAccessToken ( 'myAccessToken' ) . addQueryParameter ( 'myUrlParameterName' , bqTypes .
- BigQueryParameterType ; var configuration = DataStudioApp . createCommunityConnector () . newBigQueryConfig () . setBillingProjectId ( 'billingProjectId' ) . setQuery ( 'myQueryString' ) . setUseStandardSql ( true ) . setAccessToken ( 'myAccessToken' ) . addQueryParameter ( 'myUrlParameterName' , bqTypes .
- This is an authorization code that can be used for further OAuth 2.0 handling. error object On a failed OAuth 2.0 flow attempt this will be present and contain the value of the error query parameter from OAuth 2.0 callback request received from the 3rd-party service.
- Note: It is expected that an authorization URL will always be returned, regardless of the current auth status. authCallback() Handles the authorization response received from the 3rd party service as part of the OAuth 2.0 authorization process.

### Authentication \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/auth](https://developers.google.com/looker-studio/connector/auth)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OAUTH2 PATH USER PASS PATH KEY USER PASS USER TOKEN KEY NONE getAuthType() required required required resetAuth() required required isAuthValid() required required authCallback() required get3PAuthorizationUrls() required setCredentials() required Warning: To ensure credentials are kept secret, your connector must use a supported authentication type and should not rely on connector configuration (i.e. getConfig ) fields to obtain credentials. getAuthType() This function should return the authentication type for the connector.
- Example of returning the authorization Url using the OAuth2 for Apps Script library: data-studio/auth.gs View on GitHub / Gets the 3P authorization URL. @return {string} The authorization URL. @see https://developers.google.com/apps-script/reference/script/authorization-info / function get3PAuthorizationUrls () { return getOAuthService (). getAuthorizationUrl (); } Note: If you are using Apps Script Advanced Services or Google APIs for your connector, you might need to get your Connector verified.
- Depending on the authentication type, specific functions such as getAuthType() , resetAuth() , isAuthValid() , authCallback() , get3PAuthorizationUrls() , and setCredentials() need to be implemented within the connector.
- OAUTH2 data-studio/auth.gs View on GitHub / Returns true if the auth service has access. @return {boolean} True if the auth service has access. / function isAuthValidOAuth2 () { return getOAuthService (). hasAccess (); } PATH USER PASS / Returns true if the auth service has access . @ return { boolean } True if the auth service has access . / function isAuthValid () { var userProperties = PropertiesService . getUserProperties (); var path = userProperties . getProperty ( 'dscc.path' ); var userName = userProperties . getProperty ( 'dscc.username' ); var password = userProperties . getProperty ( 'dscc.password' ); // This assumes you have a validateCredentials function that // can validate if the path , userName and password are correct . return validateCredentials ( path , userName , password ); } PATH KEY / Returns true if the auth service has access . @ return { boolean } True if the auth service has access . / function isAuthValid () { var userProperties = PropertiesService . getUserProperties (); var path = userProperties . getProperty ( 'dscc.path' ); var key = userProperties . getProperty ( 'dscc.key' ); // This assumes you have a validateCredentials function that // can validate if the path and key are correct . return validateCredentials ( path , key ); } USER PASS data-studio/auth.gs View on GitHub / Returns true if the auth service has access. @return {boolean} True if the auth service has access. / function isAuthValidUserPass () { const userProperties = PropertiesService . getUserProperties (); const userName = userProperties . getProperty ( "dscc.username" ); const password = userProperties . getProperty ( "dscc.password" ); // This assumes you have a validateCredentials function that // can validate if the userName and password are correct. return validateCredentials ( userName , password ); } USER TOKEN data-studio/auth.gs View on GitHub / Returns true if the auth service has access. @return {boolean} True if the auth service has access. / function isAuthValidUserToken () { const userProperties = PropertiesService . getUserProperties (); const userName = userProperties . getProperty ( "dscc.username" ); const token = userProperties . getProperty ( "dscc.token" ); // This assumes you have a validateCredentials function that // can validate if the userName and token are correct. return validateCredentials ( userName , token ); } KEY data-studio/auth.gs View on GitHub / Returns true if the auth service has access. @return {boolean} True if the auth service has access. / function isAuthValidKey () { const userProperties = PropertiesService . getUserProperties (); const key = userProperties . getProperty ( "dscc.key" ); // This assumes you have a validateKey function that can validate // if the key is valid. return validateKey ( key ); } Note: See isAuthValid() for the full documentation.

### "BigQuery row-level security with Advanced Services \_|\_ Community Connectors\

- URL: [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- YEAR MONTH DAY ); return fields ; } function getSchema ( request ) { return { schema : getFields (). build () } ; } var SERVICE ACCOUNT CREDS = 'SERVICE ACCOUNT CREDS' ; var SERVICE ACCOUNT KEY = 'private key' ; var SERVICE ACCOUNT EMAIL = 'client email' ; var BILLING PROJECT ID = 'project id' ; / Copy the entire credentials JSON file from creating a service account in GCP. / function getServiceAccountCreds () { return JSON . parse ( scriptProperties . getProperty ( SERVICE ACCOUNT CREDS )); } function getOauthService () { var serviceAccountCreds = getServiceAccountCreds (); var serviceAccountKey = serviceAccountCreds [ SERVICE ACCOUNT KEY ] ; var serviceAccountEmail = serviceAccountCreds [ SERVICE ACCOUNT EMAIL ] ; return OAuth2 . createService ( 'RowLevelSecurity' ) . setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' ) . setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' ) . setPrivateKey ( serviceAccountKey ) . setIssuer ( serviceAccountEmail ) . setPropertyStore ( scriptProperties ) . setCache ( CacheService . getScriptCache ()) . setScope ( [ 'https://www.googleapis.com/auth/bigquery.readonly' ] ); } var BASE SQL = 'SELECT d.region, d.sales, d.date ' + 'FROM datastudio-solutions.row level security.data d ' + 'INNER JOIN datastudio-solutions.row level security.access a ' + 'ON d.region = a.region ' + 'where a.email=@email' ; function getData ( request ) { var accessToken = getOauthService (). getAccessToken (); var serviceAccountCreds = getServiceAccountCreds (); var billingProjectId = serviceAccountCreds [ BILLING PROJECT ID ] ; var email = Session . getEffectiveUser (). getEmail (); var bqTypes = DataStudioApp . createCommunityConnector ().
- Implement the required OAuth2 code for the service account: var SERVICE ACCOUNT CREDS = 'SERVICE ACCOUNT CREDS' ; var SERVICE ACCOUNT KEY = 'private key' ; var SERVICE ACCOUNT EMAIL = 'client email' ; var BILLING PROJECT ID = 'project id' ; / Copy the entire credentials JSON file from creating a service account in GCP. / function getServiceAccountCreds () { return JSON . parse ( scriptProperties . getProperty ( SERVICE ACCOUNT CREDS )); } function getOauthService () { var serviceAccountCreds = getServiceAccountCreds (); var serviceAccountKey = serviceAccountCreds [ SERVICE ACCOUNT KEY ] ; var serviceAccountEmail = serviceAccountCreds [ SERVICE ACCOUNT EMAIL ] ; return OAuth2 . createService ( 'RowLevelSecurity' ) . setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' ) . setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' ) . setPrivateKey ( serviceAccountKey ) . setIssuer ( serviceAccountEmail ) . setPropertyStore ( scriptProperties ) . setCache ( CacheService . getScriptCache ()) . setScope ( [ 'https://www.googleapis.com/auth/bigquery.readonly' ] ); } Implement getData() Construct your BigQuery query.
- Home Products Looker Studio Community Connectors BigQuery row-level security with Advanced Services Stay organized with collections Save and categorize content based on your preferences.
- The manifest should look like this: { ... "dataStudio" : { "forceViewersCredentials" : true , "advancedServices" : { "data" : true }, ... } "oauthScopes" : [ "https://www.googleapis.com/auth/script.external request" , "https://www.googleapis.com/auth/userinfo.email" ], ... } Implement a service account Create a service account in your Google Cloud project.


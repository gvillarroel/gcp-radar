---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.137Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Looker connector row limit increase"
feature_slug: "looker-connector-row-limit-increase"
latest_feature_date: "2025-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/bigquery-row-level-security"
  - "https://developers.google.com/looker-studio/connector/firebase-cache"
  - "https://developers.google.com/looker-studio/connector/connect-to-bigquery"
keywords:
  - "looker"
  - "connector"
  - "row"
  - "limit"
  - "increase"
  - "raises"
  - "query"
  - "export"
---

# Looker connector row limit increase

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Raises Looker connector query and export limits to 75,000 rows.

## Extended Definition

Raises Looker connector query and export limits to 75,000 rows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)
- [https://developers.google.com/looker-studio/connector/firebase-cache](https://developers.google.com/looker-studio/connector/firebase-cache)
- [https://developers.google.com/looker-studio/connector/connect-to-bigquery](https://developers.google.com/looker-studio/connector/connect-to-bigquery)

## Supporting Pages

### "BigQuery row-level security with Advanced Services \_|\_ Community Connectors\

- URL: [https://developers.google.com/looker-studio/connector/bigquery-row-level-security](https://developers.google.com/looker-studio/connector/bigquery-row-level-security)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Looker Studio Community Connectors BigQuery row-level security with Advanced Services Stay organized with collections Save and categorize content based on your preferences.
- YEAR MONTH DAY ); return fields ; } function getSchema ( request ) { return { schema : getFields (). build () } ; } var SERVICE ACCOUNT CREDS = 'SERVICE ACCOUNT CREDS' ; var SERVICE ACCOUNT KEY = 'private key' ; var SERVICE ACCOUNT EMAIL = 'client email' ; var BILLING PROJECT ID = 'project id' ; / Copy the entire credentials JSON file from creating a service account in GCP. / function getServiceAccountCreds () { return JSON . parse ( scriptProperties . getProperty ( SERVICE ACCOUNT CREDS )); } function getOauthService () { var serviceAccountCreds = getServiceAccountCreds (); var serviceAccountKey = serviceAccountCreds [ SERVICE ACCOUNT KEY ] ; var serviceAccountEmail = serviceAccountCreds [ SERVICE ACCOUNT EMAIL ] ; return OAuth2 . createService ( 'RowLevelSecurity' ) . setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' ) . setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' ) . setPrivateKey ( serviceAccountKey ) . setIssuer ( serviceAccountEmail ) . setPropertyStore ( scriptProperties ) . setCache ( CacheService . getScriptCache ()) . setScope ( [ 'https://www.googleapis.com/auth/bigquery.readonly' ] ); } var BASE SQL = 'SELECT d.region, d.sales, d.date ' + 'FROM datastudio-solutions.row level security.data d ' + 'INNER JOIN datastudio-solutions.row level security.access a ' + 'ON d.region = a.region ' + 'where a.email=@email' ; function getData ( request ) { var accessToken = getOauthService (). getAccessToken (); var serviceAccountCreds = getServiceAccountCreds (); var billingProjectId = serviceAccountCreds [ BILLING PROJECT ID ] ; var email = Session . getEffectiveUser (). getEmail (); var bqTypes = DataStudioApp . createCommunityConnector ().
- The implementation involves creating a Community Connector, setting up a service account, and constructing a BigQuery query that filters data based on the viewer's email.
- Conditional: If you are taking user input via the connector getConfig , you should incorporate the input as BigQuery parameters .

### Connect to BigQuery \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/connect-to-bigquery](https://developers.google.com/looker-studio/connector/connect-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In a Community Connector, you can access BigQuery data in three separate ways: [Looker Studio Advanced Services] Apps Script BigQuery Service BigQuery REST API This table summarizes the pros and cons: Looker Studio Advanced Services Apps Script BigQuery Service BigQuery REST API Reference [Looker Studio Advanced Services] Apps Script BigQuery Service BigQuery REST API Flow of data BigQuery > Looker Studio BigQuery > Apps Script > Looker Studio BigQuery > Apps Script > Looker Studio Calculated fields supported via getschema Yes Yes Yes Can be used with a service account/custom access control Yes No (effective user's credentials enforced) Yes Filters are automatically pushed down Yes No No Additional data transformation needed in getData No Yes Yes Fetched data can be accessed in Apps Script (Lets you do additional transformation) No Yes Yes Custom caching supported No Yes Yes UrlfetchApp Quota applied No No Yes Example implementation World Bank data connector Apps Script BigQuery Service Chrome UX Connector Unless you need to transform the fetched data from BigQuery or need custom caching, in most use cases, you can use Looker Studio Advanced Services .
- Implementation steps There are multiple ways to bring your BigQuery data into Looker Studio: Using the native BigQuery connector in the Looker Studio UI Developing and using a Community Connector Using the native BigQuery connector in the Looker Studio UI Users can use the native BigQuery connector in Looker Studio to visualize BigQuery tables or specific queries.
- Example: Querying birth-rate data from BigQuery [This guide][Visualizing BigQuery Data Using Looker Studio] shows how an end-user can use Looker Studio's native BigQuery connector from the Looker Studio UI to visualize BigQuery data.
- For basic data visualization needs, the native BigQuery connector within Looker Studio UI is often sufficient, while Community Connectors cater to more complex requirements and advanced functionalities.

### Cache with Firebase \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/firebase-cache](https://developers.google.com/looker-studio/connector/firebase-cache)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Enhance dashboard performance and bypass external API rate limits by implementing a custom cache for your Looker Studio connector.
- Objective: Increase dashboard performance and avoid external API rate-limits by implementing a custom cache for your connector.
- Service account should have Firebase Admin IAM role. / function getServiceAccountCreds () { return JSON . parse ( scriptProperties . getProperty ( SERVICE ACCOUNT CREDS )); } function getOauthService () { var serviceAccountCreds = getServiceAccountCreds (); var serviceAccountKey = serviceAccountCreds [ SERVICE ACCOUNT KEY ]; var serviceAccountEmail = serviceAccountCreds [ SERVICE ACCOUNT EMAIL ]; return OAuth2 . createService ( 'FirebaseCache' ) . setAuthorizationBaseUrl ( 'https://accounts.google.com/o/oauth2/auth' ) . setTokenUrl ( 'https://accounts.google.com/o/oauth2/token' ) . setPrivateKey ( serviceAccountKey ) . setIssuer ( serviceAccountEmail ) . setPropertyStore ( scriptProperties ) . setCache ( CacheService . getScriptCache ()) . setScope ([ 'https://www.googleapis.com/auth/userinfo.email' , 'https://www.googleapis.com/auth/firebase.database' ]); } Additional resources The Chrome UX Connector facilitates a dashboard based on a 20GB BigQuery table to thousands of users.
- Home Products Looker Studio Community Connectors Cache with Firebase Stay organized with collections Save and categorize content based on your preferences.


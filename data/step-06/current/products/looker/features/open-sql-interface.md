---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.500Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Open SQL Interface"
feature_slug: "open-sql-interface"
latest_feature_date: "2025-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-queries"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "open"
  - "sql"
  - "interface"
  - "now"
  - "supports"
  - "explores"
  - "use"
  - "conditionally"
---

# Open SQL Interface

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Open SQL Interface now supports Explores that use the conditionally_filters parameter and enables previously disabled Explores; The Open SQL Interface is generally available and the corresponding Looker Labs toggle is removed.

## Extended Definition

The Open SQL Interface now supports Explores that use the conditionally_filters parameter and enables previously disabled Explores; The Open SQL Interface is generally available and the corresponding Looker Labs toggle is removed.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)

## Supporting Pages

### Admin settings - Queries \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- A SQL Interface query section that appears when a query has been issued through the Open SQL Interface .
- Queries that are issued from the Open SQL Interface have a Source value of Sql interface .
- An Open in SQL Runner link that will open the query in SQL Runner .

### Admin settings - Self-service Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Enabling the APIs to support Google Sheets uploads To support uploading data from Google Sheets, the following APIs must be enabled in the Google Cloud console by an IAM user with the IAM roles/serviceusage.serviceUsageAdmin permission: This API must be enabled in the Google Cloud project that houses the BigQuery connection that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page: BigQuery API: Required for all BigQuery operations These APIs must be enabled in the Google Cloud project that is associated with the service account used to upload data (the service account that is used for PDT processes on your BigQuery connection , which may or may not be the same as the Google Cloud project that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page): BigQuery API: Required for all BigQuery operations Google Sheets API: Required for retrieving the names of each sheet in a Google Sheets document Google Drive API: Required for BigQuery to read files from Drive Perform the following steps to enable the APIs: From the Google Cloud console Open project picker , select the project that houses the BigQuery connection that is specified in the Default BigQuery connection drop-down menu of the Self-service Explores admin page.
- The Data uploads table shows the following information about the data uploads on your instance: The name of the self-service Explore, which is also a hyperlink that opens the self-service Explore The owner of the data upload The date that the data was uploaded A Delete button that allows Looker admins to delete the file upload and its associated self-service Explore Looker admins can open any self-service Explore on the instance by using the links in the Data uploads table.
- To create the OAuth client and enter the credentials in your Looker instance, follow these steps: In the Google Cloud console, use the Google Cloud console Open project picker to select the Google Cloud project that is associated with the service account used to upload data (the service account that is used for PDT processes on your BigQuery connection ).
- Be mindful of changing the settings on the Self-service Explores admin page if your instance has existing self-service Explores: If you disable data uploads, your users will no longer be able to access existing self-service Explores from the Explore menu, and any Looks or dashboards that rely on the data may be affected.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Looker only supports OpenID Connect authentication using OpenID Connect's Authorization Code Flow .
- The following section is from an example of a discovery document: { "issuer": "https://accounts.google.com", "authorization endpoint": "https://accounts.google.com/o/oauth2/v2/auth", "token endpoint": "https://www.googleapis.com/oauth2/v4/token", "userinfo endpoint": "https://www.googleapis.com/oauth2/v3/userinfo", "revocation endpoint": "https://accounts.google.com/o/oauth2/revoke", "jwks uri": "https://www.googleapis.com/oauth2/v3/certs", "response types supported": [ "code", "token", "id token", "code token" "code id token", "token id token", "code token id token", "none" ], "subject types supported": [ "public" ], "id token signing alg values supported": [ "RS256" ], "scopes supported": [ "openid", "email", "profile" ], "token endpoint auth methods supported": [ "client secret post", "client secret basic" ], "claims supported": [ "aud", "email", "email verified", "exp", "family name", "given name", "iat", "iss", "locale", "name", "picture", "sub" ], Configuring OpenID Connect auth settings To configure OpenID Connect authentication for your Looker instance, select OpenID Connect from the Authentication section of the Admin panel.
- Your Looker groups will still mirror your OpenID Connect configuration, but you will be able to do additional group and user management within Looker, such as adding OpenID Connect users to Looker-specific groups or assigning Looker roles directly to OpenID Connect users.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .


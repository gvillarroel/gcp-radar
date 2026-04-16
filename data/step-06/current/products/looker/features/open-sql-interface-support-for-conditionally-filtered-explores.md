---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.494Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Open SQL Interface support for conditionally filtered Explores"
feature_slug: "open-sql-interface-support-for-conditionally-filtered-explores"
latest_feature_date: "2025-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "open"
  - "sql"
  - "interface"
  - "conditionally"
  - "filtered"
  - "explores"
  - "supports"
  - "use"
---

# Open SQL Interface support for conditionally filtered Explores

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Open SQL Interface supports Explores that use the conditionally_filters parameter.

## Extended Definition

The Open SQL Interface supports Explores that use the conditionally_filters parameter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- [https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)

## Supporting Pages

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

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Control the actions a user can perform Create a permission set with the appropriate permissions, then assign a group or user to a role with that permission set Control what fields a user can access Create a model with the appropriate fields, then assign a group or user to a role with that model Control what data a user can access Create a model with the appropriate data limitations, then assign a group or user to a role with that model - or - Use access filters to limit a user to the appropriate data - or - Use user attributes to provide differing database credentials to a group or user - or - Use user attributes with access grants to restrict access to specific Explores, joins, views, or fields Control what database connections a Looker developer can access Create a project with the appropriate connections, associate the project with a set of models, then assign a group or user to a role with those models Feature access can also affect content access .
- To limit access to specific Explores, joins, views, or fields, create access grants that limit access to only those users who are assigned the allowed user attribute values, as described on the access grant parameter documentation page.
- Instead, you'll map your LDAP, SAML, or OpenID Connect groups to Looker roles during the setup process, and will only be able to change assigned roles from the LDAP, SAML, or OpenID Connect setup pages.
- Making use of your user permission infrastructure (LDAP, SAML, and OpenID Connect) If you already have an LDAP, SAML or OpenID infrastructure setup, you can use that system to manage user logins.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Looker only supports OpenID Connect authentication using OpenID Connect's Authorization Code Flow .
- The following section is from an example of a discovery document: { "issuer": "https://accounts.google.com", "authorization endpoint": "https://accounts.google.com/o/oauth2/v2/auth", "token endpoint": "https://www.googleapis.com/oauth2/v4/token", "userinfo endpoint": "https://www.googleapis.com/oauth2/v3/userinfo", "revocation endpoint": "https://accounts.google.com/o/oauth2/revoke", "jwks uri": "https://www.googleapis.com/oauth2/v3/certs", "response types supported": [ "code", "token", "id token", "code token" "code id token", "token id token", "code token id token", "none" ], "subject types supported": [ "public" ], "id token signing alg values supported": [ "RS256" ], "scopes supported": [ "openid", "email", "profile" ], "token endpoint auth methods supported": [ "client secret post", "client secret basic" ], "claims supported": [ "aud", "email", "email verified", "exp", "family name", "given name", "iat", "iss", "locale", "name", "picture", "sub" ], Configuring OpenID Connect auth settings To configure OpenID Connect authentication for your Looker instance, select OpenID Connect from the Authentication section of the Admin panel.
- Your Looker groups will still mirror your OpenID Connect configuration, but you will be able to do additional group and user management within Looker, such as adding OpenID Connect users to Looker-specific groups or assigning Looker roles directly to OpenID Connect users.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .


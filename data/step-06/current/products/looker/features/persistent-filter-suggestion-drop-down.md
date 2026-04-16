---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.432Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "persistent filter suggestion drop-down"
feature_slug: "persistent-filter-suggestion-drop-down"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "persistent"
  - "filter"
  - "suggestion"
  - "drop"
  - "down"
  - "keeps"
  - "downs"
  - "open"
---

# persistent filter suggestion drop-down

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Keeps filter suggestion drop-downs open to make multi-select filtering easier for tag list and advanced filters.

## Extended Definition

Keeps filter suggestion drop-downs open to make multi-select filtering easier for tag list and advanced filters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### "Admin settings - Persistent Derived Tables \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- Source ID: `site-docs-reference-required-4`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To open the Persistent Derived Tables page, follow these steps: Click the Looker Main menu icon menu and select Admin , if the Admin menu isn't already displayed. (If you are in the Explore or Develop section of the Looker Main menu , you may have to click the back arrow to see the Admin menu.) From the Admin menu, select Persistent Derived Tables .
- Published as Stable View : A Boolean that filters the Persistent Derived Tables page for persisted tables and displays Yes for persisted tables that were published as a stable view, and No for persisted tables that were not published as a stable view, as determined by their publish as db view parameter value.
- The following options are available: Not Triggered in the Last : Filters the Persistent Derived Tables page by persisted tables that have not been triggered in a specified number of hours and minutes.
- To access the PDT Event Log Explore from the Connections page, select the Show PDT Event Log option from the gear icon drop-down menu settings for each connection.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- In the Looker User Attributes field, a drop-down list of Looker user attributes for the instance appears.
- The Display pagination drop-down menu.
- The Display pagination drop-down menu.
- The following section is from an example of a discovery document: { "issuer": "https://accounts.google.com", "authorization endpoint": "https://accounts.google.com/o/oauth2/v2/auth", "token endpoint": "https://www.googleapis.com/oauth2/v4/token", "userinfo endpoint": "https://www.googleapis.com/oauth2/v3/userinfo", "revocation endpoint": "https://accounts.google.com/o/oauth2/revoke", "jwks uri": "https://www.googleapis.com/oauth2/v3/certs", "response types supported": [ "code", "token", "id token", "code token" "code id token", "token id token", "code token id token", "none" ], "subject types supported": [ "public" ], "id token signing alg values supported": [ "RS256" ], "scopes supported": [ "openid", "email", "profile" ], "token endpoint auth methods supported": [ "client secret post", "client secret basic" ], "claims supported": [ "aud", "email", "email verified", "exp", "family name", "given name", "iat", "iss", "locale", "name", "picture", "sub" ], Configuring OpenID Connect auth settings To configure OpenID Connect authentication for your Looker instance, select OpenID Connect from the Authentication section of the Admin panel.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Creating a custom color collection To create a custom color collection, follow these steps: Select last New color collection option from the Default Visualization Colors collection drop-down menu.
- When Reduce Filter Queries is enabled, Looker moves any filter that requests suggestions into a dialog where the filter won't fetch suggestions until a user clicks on it in the dialog.
- Deleting a custom color collection You can delete a custom color collection by selecting the collection from the drop-down menu and clicking the Delete button that appears.
- Selecting an existing color collection To set an existing color collection as your default, choose the color collection from the drop-down menu and click Update .


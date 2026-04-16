---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.532Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Login Consent Configuration"
feature_slug: "login-consent-configuration"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "login"
  - "consent"
  - "configuration"
  - "displays"
  - "configurable"
  - "screen"
  - "users"
  - "signing"
---

# Login Consent Configuration

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Login Consent Configuration displays a configurable consent screen to users signing in to the Looker instance.

## Extended Definition

Login Consent Configuration displays a configurable consent screen to users signing in to the Looker instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, Login Consent Configuration causes a consent screen to be displayed to all users who attempt to sign in to the Looker instance.
- The consent screen will display the message that was entered in the Message Configuration field, and will require users to click the I Agree button on the consent screen before they can sign in to the instance.
- If the Login Consent Configuration option is enabled, in the Message Configuration field, enter the message that will be displayed to all users who attempt to sign in to the Looker instance.
- Login Consent Configuration Note: This setting is available only for Looker (Google Cloud core) instances.

### Admin settings - Google authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Google Cloud console requires that you configure an OAuth consent screen , which lets your users choose how to grant access to their private data and provides a link to your organization's terms of service and privacy policy.
- Click Configure consent screen . (If you have configured OAuth consent for a previous project, you won't see this option, and you can skip to step 13.) The Google Cloud console displays the OAuth consent screen page.
- Clicking on the Looker permissions that you granted in order to log on shows the details that users see in the consent screen that you customized previously.
- You can use this workflow to help you customize your consent screen and view what users will see.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Your Looker groups will still mirror your OpenID Connect configuration, but you will be able to do additional group and user management within Looker, such as adding OpenID Connect users to Looker-specific groups or assigning Looker roles directly to OpenID Connect users.
- In the New User Groups and New User Roles fields, enter the names of any Looker groups or roles to which you want to assign new Looker users when they first sign in to Looker: These groups and roles are applied to new users on their initial login.
- The Advanced Role Management section contains these options: Prevent Individual OpenID Connect Users from Receiving Direct Roles : Turning this option on prevents Looker admins from assigning Looker roles directly to OpenID Connect users.
- Turning this on is useful as a fallback during OpenID Connect setup should OpenID Connect configuration problems occur later, or if you need to support some users who do not have accounts in your OpenID Connect directory.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.391Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Disable Connection"
feature_slug: "disable-connection"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-connections"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap"
keywords:
  - "disable"
  - "connection"
  - "lets"
  - "admins"
  - "database"
  - "so"
  - "looker"
  - "stops"
---

# Disable Connection

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Disable Connection lets admins disable a database connection so Looker stops sending queries to it and returns an error to users.

## Extended Definition

Disable Connection lets admins disable a database connection so Looker stops sending queries to it and returns an error to users.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Onboarding When enabled, Looker admins and developers who log in to a new Looker instance will see the Looker onboarding walkthrough, which guides users through the four major steps to make use of a Looker instance: Adding a connection Creating a project Editing project files as needed Exploring data Once any combination of admins or developers completes the full guide, it stops being displayed.
- Application Time Zone When displaying data in an Explore, a Look, or a dashboard, Looker can convert time data from the connection's Database Time Zone to the appropriate time zone for that user.
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- The Settings page in the General section of the Admin panel lets Looker admins configure the instance-wide settings for Looker.

### Admin settings - Connections \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- Source ID: `site-docs-reference-required-4`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Show Databases This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the metadata of your connection.
- Actions available for some connections Depending on the connection dialect, the gear drop-down menu to the right of the connection may offer the following additional options: Option Description Show Tables This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the metadata of your connection.
- Show Processes This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the processes running on this connection, the state they are in, how long they have been running, and other info.
- The same page that you use to create a connection will appear (described on the Connecting Looker to your database documentation page), but with the relevant information already filled out.

### Admin settings - LDAP authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-ldap)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have configured LDAP to make user-specific connections to your database, you could pair your LDAP user attributes with Looker user attributes to make your database connections user-specific in Looker.
- The Advanced Role Management section contains these options: Prevent Individual LDAP Users from Receiving Direct Roles : Turning this option on prevents Looker admins from assigning Looker roles directly to LDAP users.
- If you are logged in to Looker using LDAP and want to disable LDAP authentication, be careful to first do both of the following steps: Ensure that you have other credentials to sign in.
- When all of the first three options are enabled, Looker admins cannot modify membership of mirrored groups and can only assign roles to users through LDAP mirrored groups.


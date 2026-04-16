---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.525Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Database Connection Pooling"
feature_slug: "database-connection-pooling"
latest_feature_date: "2024-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-connections"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
keywords:
  - "database"
  - "connection"
  - "pooling"
  - "now"
  - "generally"
  - "available"
  - "level"
  - "setting"
---

# Database Connection Pooling

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Database connection pooling is now generally available and is available as a connection-level setting for supported dialects.

## Extended Definition

Database connection pooling is now generally available and is available as a connection-level setting for supported dialects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)

## Supporting Pages

### Admin settings - Connections \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- Source ID: `site-docs-reference-required-4`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Actions available for some connections Depending on the connection dialect, the gear drop-down menu to the right of the connection may offer the following additional options: Option Description Show Tables This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the metadata of your connection.
- Actions available for all connections All connections offer these options from the gear drop-down menu to the far right of each connection: Option Description SQL Runner This option brings you to Looker's SQL Runner, with the proper connection and schema already selected.
- Three-dot Options menu more vert Actions that you can take for an SSH server configuration: test connections to an SSH server , add a database connection to an SSH server , edit an SSH server configuration , or delete an SSH server configuration.
- The SSH Servers tab lists the SSH server configurations that you have added, indicates the status of connections to the SSH servers, and lists the database connections using each SSH server.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- See more about how this setting and a user's permissions affect their ability to deliver Looker content and alert notifications in the Permissions overview section on this page. looker internal email domain allowlist user attribute In addition to the email domains that are included in the global Email Domain Allowlist for Scheduled Content field, you can also specify email domains on a per-group level using the looker internal email domain allowlist user attribute .
- Application Time Zone When displaying data in an Explore, a Look, or a dashboard, Looker can convert time data from the connection's Database Time Zone to the appropriate time zone for that user.
- Force BigQuery Readonly Scope usage Enabling this setting signs out users that have OAuth credentials that allow read and write scope on any of BigQuery connections.
- User Specific Time Zones When adding a connection , you specify what time zone your database stores time information as the Database Time Zone .

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Control the actions a user can perform Create a permission set with the appropriate permissions, then assign a group or user to a role with that permission set Control what fields a user can access Create a model with the appropriate fields, then assign a group or user to a role with that model Control what data a user can access Create a model with the appropriate data limitations, then assign a group or user to a role with that model - or - Use access filters to limit a user to the appropriate data - or - Use user attributes to provide differing database credentials to a group or user - or - Use user attributes with access grants to restrict access to specific Explores, joins, views, or fields Control what database connections a Looker developer can access Create a project with the appropriate connections, associate the project with a set of models, then assign a group or user to a role with those models Feature access can also affect content access .
- Folders let you set access levels that determine which users may edit folder contents (such as Looks and dashboards), view the contents in a folder, and change settings: A user needs to have at least the View access level to a folder to see that the folder exists, to view the Looks and dashboards inside it, and to copy the Looks and dashboards in the folder.
- Control developer access to database connections Unlike regular users, Looker developers are not fully constrained by models and access filters, because they can make additions or changes to LookML models.
- This restriction defined through projects also flows through to the Looker SQL Runner, which ensures that your developers cannot get access to prohibited database connections by using SQL Runner.


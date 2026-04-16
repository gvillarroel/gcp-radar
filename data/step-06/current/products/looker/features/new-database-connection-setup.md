---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.478Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "New Database Connection Setup"
feature_slug: "new-database-connection-setup"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-connections"
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
  - "https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition"
keywords:
  - "database"
  - "connection"
  - "setup"
  - "modernized"
  - "add"
  - "edit"
  - "page"
  - "enhanced"
---

# New Database Connection Setup

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

A modernized Add/Edit Connection page with enhanced validation, connection testing, and a configuration summary; A modernized Add/Edit Connection page with enhanced validation, connection testing, and a configuration summary.

## Extended Definition

A modernized Add/Edit Connection page with enhanced validation, connection testing, and a configuration summary; A modernized Add/Edit Connection page with enhanced validation, connection testing, and a configuration summary.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)

## Supporting Pages

### Admin settings - Connections \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- Source ID: `site-docs-reference-required-4`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Editing connections To edit an existing connection, open the Connections page by selecting the Admin menu, and then, under Database , choose Connections .
- Clicking a database connection opens the Edit Connection page for that database connection.
- Three-dot Options menu more vert Actions that you can take for an SSH server configuration: test connections to an SSH server , add a database connection to an SSH server , edit an SSH server configuration , or delete an SSH server configuration.
- The same page that you use to create a connection will appear (described on the Connecting Looker to your database documentation page), but with the relevant information already filled out.

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- You may also use LDAP to apply user-specific database connections to Looker queries, as described on the LDAP authentication documentation page.
- Control the actions a user can perform Create a permission set with the appropriate permissions, then assign a group or user to a role with that permission set Control what fields a user can access Create a model with the appropriate fields, then assign a group or user to a role with that model Control what data a user can access Create a model with the appropriate data limitations, then assign a group or user to a role with that model - or - Use access filters to limit a user to the appropriate data - or - Use user attributes to provide differing database credentials to a group or user - or - Use user attributes with access grants to restrict access to specific Explores, joins, views, or fields Control what database connections a Looker developer can access Create a project with the appropriate connections, associate the project with a set of models, then assign a group or user to a role with those models Feature access can also affect content access .
- Control developer access to database connections Unlike regular users, Looker developers are not fully constrained by models and access filters, because they can make additions or changes to LookML models.
- Instead, you'll map your LDAP, SAML, or OpenID Connect groups to Looker roles during the setup process, and will only be able to change assigned roles from the LDAP, SAML, or OpenID Connect setup pages.

### "Quickstart: Create a Looker (Google Cloud core) public secure connection\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- Source ID: `site-docs-reference-required-4`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about creating and configuring an instance, see the Looker (Google Cloud core) documentation: Create a Looker (Google Cloud core) instance Set up a custom domain for a Looker (Google Cloud core) instance that uses public connections Configure an IP allowlist for Looker (Google Cloud core) Prepare a Looker (Google Cloud core) instance for users Connect to your database Use the sample LookML project on a Looker (Google Cloud core) instance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- What's next This Quickstart covered how to create a Standard Looker (Google Cloud core) instance that uses a public secure network connection and Google-managed encryption and that requires no deferred or denied maintenance windows and no additional users beyond the default number that is provided for a Standard edition.
- Create a Looker (Google Cloud core) public secure connection standard edition instance Learn how to create a Looker (Google Cloud core) instance that uses default configuration settings.
- When you click the button, depending on what Looker instances already exist in this project, you'll see one of the following: If a Looker (Google Cloud core) instance already exists within this project, the Instances page will open.


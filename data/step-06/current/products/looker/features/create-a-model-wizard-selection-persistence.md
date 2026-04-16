---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.527Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Create a model wizard selection persistence"
feature_slug: "create-a-model-wizard-selection-persistence"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config"
keywords:
  - "create"
  - "model"
  - "wizard"
  - "selection"
  - "persistence"
  - "preserves"
  - "selections"
  - "even"
---

# Create a model wizard selection persistence

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Create a model wizard preserves selections even if users close steps before finishing model creation.

## Extended Definition

The Create a model wizard preserves selections even if users close steps before finishing model creation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config)

## Supporting Pages

### "Admin settings - Persistent Derived Tables \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- Source ID: `site-docs-reference-required-4`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- PDT Event Log Explore Looker includes a prebuilt model named system activity that allows exploration of the PDT event log, which is a table in a database connection's temp schema that tracks the trigger and build activity of persisted tables.
- You can access the model with the Recent Build Events and Recent Trigger Events links in the Options three-dot menu more vert of the Persistent Derived Tables page, or from the Connections page in the Looker Admin panel.
- A visualization that shows all the create events that have occurred recently, grouped by a summary of the types of actions that caused the events.
- To clear your filter selections and start over at any point, click Clear All .

### Create Signed Embed Url \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This function does not strictly require all group ids, user attribute names, or model names to exist at the moment the embed url is created.
- Timezone values are validated against the IANA Timezone standard and can be seen in the Application Time Zone dropdown list on the Looker General Settings admin page. permissions string[] models string[] group ids string[] external group id string A unique value identifying an embed-exclusive group.
- Permissions for the embed user are defined by the groups in which the embed user is a member ( group ids property) and the lists of models and permissions assigned to the embed user.
- Home Documentation Data analytics Looker API Reference Send feedback Create Signed Embed Url Stay organized with collections Save and categorize content based on your preferences.

### Create OIDC Test Configuration \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Looker email/password logins are always disabled for regular users when ldap is enabled. audience string OpenID Provider Audience auth requires role boolean Users will not be allowed to login at all unless a role for them is found in OIDC if set to true authorization endpoint string OpenID Provider Authorization Url default new user group ids string[] default new user groups Group [] Expand Group definition... can lock object Operations the current user is able to perform on this object can add to content metadata boolean Group can be used in content access controls contains current user lock boolean Currently logged in user is group member external group id lock string External Id group if embed group externally managed lock boolean Group membership controlled outside of Looker id lock string Unique Id include by default lock boolean New users are added to this group by default name string Name of group user count lock integer Number of users included in this group default new user role ids string[] default new user roles Role [] Expand Role definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of Role permission set lock PermissionSet (Read only) Permission set Expand PermissionSet definition... can lock object Operations the current user is able to perform on this object all access lock boolean built in lock boolean id lock string Unique Id name string Name of PermissionSet permissions string[] url lock string Link to get this item permission set id string (Write-Only) Id of permission set model set lock ModelSet (Read only) Model set Expand ModelSet definition... can lock object Operations the current user is able to perform on this object all access lock boolean built in lock boolean id lock string Unique Id models string[] name string Name of ModelSet url lock string Link to get this item model set id string (Write-Only) Id of model set internal lock boolean Is this a Looker internal role url lock string Link to get this item users url lock string Link to get list of users with this role enabled boolean Enable/Disable OIDC authentication for the server groups OIDCGroupRead [] Expand OIDCGroupRead definition... id lock string Unique Id looker group id lock string Unique Id of group in Looker looker group name lock string Name of group in Looker name lock string Name of group in OIDC roles Role [] Expand Role definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of Role permission set lock PermissionSet (Read only) Permission set permission set id string (Write-Only) Id of permission set model set lock ModelSet (Read only) Model set model set id string (Write-Only) Id of model set internal lock boolean Is this a Looker internal role url lock string Link to get this item users url lock string Link to get list of users with this role groups attribute string Name of user record attributes used to indicate groups.
- This list (if provided) must be a comma separated list of string like 'email,ldap,google' scopes string[] secret string (Write-Only) Relying Party Secret (provided by OpenID Provider) set roles from groups boolean Set user roles in Looker based on groups from OIDC test slug lock string Slug to identify configurations that are created in order to run a OIDC config test token endpoint string OpenID Provider Token Url user attribute map email string Name of user record attributes used to indicate email address field user attribute map first name string Name of user record attributes used to indicate first name user attribute map last name string Name of user record attributes used to indicate last name user attributes OIDCUserAttributeRead [] Expand OIDCUserAttributeRead definition... name lock string Name of User Attribute in OIDC required lock boolean Required to be in OIDC assertion for login to be allowed to succeed user attributes UserAttribute [] Expand UserAttribute definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of user attribute label string Human-friendly label for user attribute type string Type of user attribute ("string", "number", "datetime", "yesno", "zipcode", "advanced filter string", "advanced filter number") default value string Default value for when no value is set on the user is system lock boolean Attribute is a system default is permanent lock boolean Attribute is permanent and cannot be deleted value is hidden boolean If true, users will not be able to view values of this attribute user can view boolean Non-admin users can see the values of their attributes and use them in filters user can edit boolean Users can change the value of this attribute for themselves hidden value domain whitelist string Destinations to which a hidden attribute may be sent.
- This list (if provided) must be a comma separated list of string like 'email,ldap,google' scopes string[] secret string (Write-Only) Relying Party Secret (provided by OpenID Provider) set roles from groups boolean Set user roles in Looker based on groups from OIDC test slug lock string Slug to identify configurations that are created in order to run a OIDC config test token endpoint string OpenID Provider Token Url user attribute map email string Name of user record attributes used to indicate email address field user attribute map first name string Name of user record attributes used to indicate first name user attribute map last name string Name of user record attributes used to indicate last name user attributes OIDCUserAttributeRead [] user attributes with ids OIDCUserAttributeWrite [] userinfo endpoint string OpenID Provider User Information Url allow normal group membership boolean Allow OIDC auth'd users to be members of non-reflected Looker groups.
- Home Documentation Data analytics Looker API Reference Send feedback Create OIDC Test Configuration Stay organized with collections Save and categorize content based on your preferences.


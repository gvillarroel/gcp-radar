---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.539Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "OIDC to SAML user migration"
feature_slug: "oidc-to-saml-user-migration"
latest_feature_date: "2023-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config"
keywords:
  - "oidc"
  - "saml"
  - "user"
  - "migration"
  - "looker"
  - "now"
  - "supports"
  - "merging"
---

# OIDC to SAML user migration

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker now supports merging users from OIDC into SAML during SAML authentication setup.

## Extended Definition

Looker now supports merging users from OIDC into SAML during SAML authentication setup.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config)

## Supporting Pages

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Merging users when using Looker (Google Cloud core) When you're using Looker (Google Cloud core) and SAML, merging works as described in the previous section.
- You can merge users from the following systems: Looker Email/Password (not available for Looker (Google Cloud core)) Google LDAP (not available for Looker (Google Cloud core)) OIDC If you have more than one system in place, you can specify more than one system to merge by in this field.
- To pair SAML attributes with corresponding Looker user attributes, follow these steps: Enter the name of the SAML attribute in the SAML Attribute field and the name of the Looker user attribute that you want to pair it with in the Looker User Attributes field.
- Your Looker groups will still mirror your SAML configuration, but you will be able to do additional group and user management within Looker, such as adding SAML users to Looker-specific groups or assigning Looker roles directly to SAML users.

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- To be eligible to migrate, the standard user account must meet all of the following criteria: The account isn't using an identity provider, such as Google, SAML, or OpenID Connect, as their method of authentication into Looker.
- If you want the user to view certain user interface (UI) text in a specific language, Looker supports the UI translations that are shown in the following table.
- If you want to undo a migration, you must delete the service account and add the user again as a standard user to the Looker instance.
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.

### Create SAML Test Configuration \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set this only if you want Looker to validate the audience value returned by the IdP. allowed clock drift integer Count of seconds of clock drift to allow when validating timestamps of assertions. user attribute map email string Name of user record attributes used to indicate email address field user attribute map first name string Name of user record attributes used to indicate first name user attribute map last name string Name of user record attributes used to indicate last name new user migration types string Merge first-time saml login to existing user account by email addresses.
- Set this only if you want Looker to validate the audience value returned by the IdP. allowed clock drift integer Count of seconds of clock drift to allow when validating timestamps of assertions. user attribute map email string Name of user record attributes used to indicate email address field user attribute map first name string Name of user record attributes used to indicate first name user attribute map last name string Name of user record attributes used to indicate last name new user migration types string Merge first-time saml login to existing user account by email addresses.
- Used when 'groups finder type' is set to 'grouped attribute values' groups SamlGroupRead [] Expand SamlGroupRead definition... id lock string Unique Id looker group id lock string Unique Id of group in Looker looker group name lock string Name of group in Looker name lock string Name of group in Saml roles Role [] Expand Role definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of Role permission set lock PermissionSet (Read only) Permission set permission set id string (Write-Only) Id of permission set model set lock ModelSet (Read only) Model set model set id string (Write-Only) Id of model set internal lock boolean Is this a Looker internal role url lock string Link to get this item users url lock string Link to get list of users with this role url lock string Link to saml config groups with role ids SamlGroupWrite [] Expand SamlGroupWrite definition... id string Unique Id looker group id lock string Unique Id of group in Looker looker group name string Name of group in Looker name string Name of group in Saml role ids string[] url lock string Link to saml config auth requires role boolean Users will not be allowed to login at all unless a role for them is found in Saml if set to true user attributes SamlUserAttributeRead [] Expand SamlUserAttributeRead definition... name lock string Name of User Attribute in Saml required lock boolean Required to be in Saml assertion for login to be allowed to succeed user attributes UserAttribute [] Expand UserAttribute definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of user attribute label string Human-friendly label for user attribute type string Type of user attribute ("string", "number", "datetime", "yesno", "zipcode", "advanced filter string", "advanced filter number") default value string Default value for when no value is set on the user is system lock boolean Attribute is a system default is permanent lock boolean Attribute is permanent and cannot be deleted value is hidden boolean If true, users will not be able to view values of this attribute user can view boolean Non-admin users can see the values of their attributes and use them in filters user can edit boolean Users can change the value of this attribute for themselves hidden value domain whitelist string Destinations to which a hidden attribute may be sent.
- Looker email/password logins are always disabled for regular users when ldap is enabled. test slug lock string Slug to identify configurations that are created in order to run a Saml config test modified at lock string When this config was last modified modified by lock string User id of user who last modified this config default new user roles Role [] Expand Role definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of Role permission set lock PermissionSet (Read only) Permission set Expand PermissionSet definition... can lock object Operations the current user is able to perform on this object all access lock boolean built in lock boolean id lock string Unique Id name string Name of PermissionSet permissions string[] url lock string Link to get this item permission set id string (Write-Only) Id of permission set model set lock ModelSet (Read only) Model set Expand ModelSet definition... can lock object Operations the current user is able to perform on this object all access lock boolean built in lock boolean id lock string Unique Id models string[] name string Name of ModelSet url lock string Link to get this item model set id string (Write-Only) Id of model set internal lock boolean Is this a Looker internal role url lock string Link to get this item users url lock string Link to get list of users with this role default new user groups Group [] Expand Group definition... can lock object Operations the current user is able to perform on this object can add to content metadata boolean Group can be used in content access controls contains current user lock boolean Currently logged in user is group member external group id lock string External Id group if embed group externally managed lock boolean Group membership controlled outside of Looker id lock string Unique Id include by default lock boolean New users are added to this group by default name string Name of group user count lock integer Number of users included in this group default new user role ids string[] default new user group ids string[] set roles from groups boolean Set user roles in Looker based on groups from Saml groups attribute string Name of user record attributes used to indicate groups.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.535Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "SAML Authentication"
feature_slug: "saml-authentication"
latest_feature_date: "2024-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "saml"
  - "authentication"
  - "looker"
  - "core"
  - "supports"
---

# SAML Authentication

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker (Google Cloud core) supports SAML authentication.

## Extended Definition

Looker (Google Cloud core) supports SAML authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)

## Supporting Pages

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enabling mirror SAML groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- If you are using Looker (Google Cloud core) , the Bypass Login Page option is available automatically if SAML is used as the primary authentication method, and defaults to disabled.
- If authentication at the IdP was successful, Looker then validates the SAML assertions, accepts authentication, updates user information, and forwards the user to the requested URL, bypassing the Log In page.
- However, it is only possible if one of the two following conditions are met: Condition 1 : Users are authenticating into Looker (Google Cloud core) using their Google identities through the SAML protocol.

### Create SAML Test Configuration \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If 'false', user will be removed from non-reflected groups on login. allow roles from normal groups boolean SAML auth'd users will inherit roles from non-reflected Looker groups. allow direct roles boolean Allows roles to be directly assigned to SAML auth'd users. url lock string Link to get this item Response 200: SAML test config Datatype Description (object) SamlConfig can lock object Operations the current user is able to perform on this object enabled boolean Enable/Disable Saml authentication for the server idp cert string Identity Provider Certificate (provided by IdP) idp cert multi SamlIdpCertMulti Identity Provider Multiple Certificates (provided by IdP) Expand SamlIdpCertMulti definition... signing string[] multi certs supported boolean Indicates whether this SAML configuration is set up to use multiple Identity Provider certificates (idp cert multi) or a single certificate (idp cert).
- Used when 'groups finder type' is set to 'grouped attribute values' groups SamlGroupRead [] Expand SamlGroupRead definition... id lock string Unique Id looker group id lock string Unique Id of group in Looker looker group name lock string Name of group in Looker name lock string Name of group in Saml roles Role [] Expand Role definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of Role permission set lock PermissionSet (Read only) Permission set permission set id string (Write-Only) Id of permission set model set lock ModelSet (Read only) Model set model set id string (Write-Only) Id of model set internal lock boolean Is this a Looker internal role url lock string Link to get this item users url lock string Link to get list of users with this role url lock string Link to saml config groups with role ids SamlGroupWrite [] Expand SamlGroupWrite definition... id string Unique Id looker group id lock string Unique Id of group in Looker looker group name string Name of group in Looker name string Name of group in Saml role ids string[] url lock string Link to saml config auth requires role boolean Users will not be allowed to login at all unless a role for them is found in Saml if set to true user attributes SamlUserAttributeRead [] Expand SamlUserAttributeRead definition... name lock string Name of User Attribute in Saml required lock boolean Required to be in Saml assertion for login to be allowed to succeed user attributes UserAttribute [] Expand UserAttribute definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of user attribute label string Human-friendly label for user attribute type string Type of user attribute ("string", "number", "datetime", "yesno", "zipcode", "advanced filter string", "advanced filter number") default value string Default value for when no value is set on the user is system lock boolean Attribute is a system default is permanent lock boolean Attribute is permanent and cannot be deleted value is hidden boolean If true, users will not be able to view values of this attribute user can view boolean Non-admin users can see the values of their attributes and use them in filters user can edit boolean Users can change the value of this attribute for themselves hidden value domain whitelist string Destinations to which a hidden attribute may be sent.
- Looker email/password logins are always disabled for regular users when ldap is enabled. test slug lock string Slug to identify configurations that are created in order to run a Saml config test modified at lock string When this config was last modified modified by lock string User id of user who last modified this config default new user roles Role [] Expand Role definition... can lock object Operations the current user is able to perform on this object id lock string Unique Id name string Name of Role permission set lock PermissionSet (Read only) Permission set Expand PermissionSet definition... can lock object Operations the current user is able to perform on this object all access lock boolean built in lock boolean id lock string Unique Id name string Name of PermissionSet permissions string[] url lock string Link to get this item permission set id string (Write-Only) Id of permission set model set lock ModelSet (Read only) Model set Expand ModelSet definition... can lock object Operations the current user is able to perform on this object all access lock boolean built in lock boolean id lock string Unique Id models string[] name string Name of ModelSet url lock string Link to get this item model set id string (Write-Only) Id of model set internal lock boolean Is this a Looker internal role url lock string Link to get this item users url lock string Link to get list of users with this role default new user groups Group [] Expand Group definition... can lock object Operations the current user is able to perform on this object can add to content metadata boolean Group can be used in content access controls contains current user lock boolean Currently logged in user is group member external group id lock string External Id group if embed group externally managed lock boolean Group membership controlled outside of Looker id lock string Unique Id include by default lock boolean New users are added to this group by default name string Name of group user count lock integer Number of users included in this group default new user role ids string[] default new user group ids string[] set roles from groups boolean Set user roles in Looker based on groups from Saml groups attribute string Name of user record attributes used to indicate groups.
- If 'false', user will be removed from non-reflected groups on login. allow roles from normal groups boolean SAML auth'd users will inherit roles from non-reflected Looker groups. allow direct roles boolean Allows roles to be directly assigned to SAML auth'd users. url lock string Link to get this item 400: Bad Request Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 403: Permission Denied Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 404: Not Found Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link 422: Validation Error Datatype Description (object) ValidationError message lock string Error details errors ValidationErrorDetail [] Expand ValidationErrorDetail definition... field lock string Field with error code lock string Error code message lock string Error info message documentation url lock string Documentation link documentation url lock string Documentation link 429: Too Many Requests Datatype Description (object) Error message lock string Error details documentation url lock string Documentation link Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- You can merge users from the following systems: Looker Email/Password (not available for Looker (Google Cloud core)) Google LDAP (not available for Looker (Google Cloud core)) SAML If you have multiple authentication systems in place, you can specify more than one system to merge by in this field.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- Looker only supports OpenID Connect authentication using OpenID Connect's Authorization Code Flow .
- The following section is from an example of a discovery document: { "issuer": "https://accounts.google.com", "authorization endpoint": "https://accounts.google.com/o/oauth2/v2/auth", "token endpoint": "https://www.googleapis.com/oauth2/v4/token", "userinfo endpoint": "https://www.googleapis.com/oauth2/v3/userinfo", "revocation endpoint": "https://accounts.google.com/o/oauth2/revoke", "jwks uri": "https://www.googleapis.com/oauth2/v3/certs", "response types supported": [ "code", "token", "id token", "code token" "code id token", "token id token", "code token id token", "none" ], "subject types supported": [ "public" ], "id token signing alg values supported": [ "RS256" ], "scopes supported": [ "openid", "email", "profile" ], "token endpoint auth methods supported": [ "client secret post", "client secret basic" ], "claims supported": [ "aud", "email", "email verified", "exp", "family name", "given name", "iat", "iss", "locale", "name", "picture", "sub" ], Configuring OpenID Connect auth settings To configure OpenID Connect authentication for your Looker instance, select OpenID Connect from the Authentication section of the Admin panel.


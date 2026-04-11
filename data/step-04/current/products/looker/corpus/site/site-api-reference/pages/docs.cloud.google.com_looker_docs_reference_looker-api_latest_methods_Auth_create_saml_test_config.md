---
title: "Create SAML Test Configuration \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config
  title: "Create SAML Test Configuration \_|\_ Looker \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
API Reference
Send feedback
Create SAML Test Configuration
Stay organized with collections
Save and categorize content based on your preferences.
Version 4.0.26.6 (latest)
Create a SAML test configuration.
Calls to this endpoint may be denied by Looker (Google Cloud core) .
Request
POST
/saml_test_configs
Datatype
Description
Request
HTTP Request
body
HTTP Body
Expand HTTP Body definition...
body
SamlConfig
SAML test config
Expand SamlConfig definition...
can
lock
object
Operations the current user is able to perform on this object
enabled
boolean
Enable/Disable Saml authentication for the server
idp_cert
string
Identity Provider Certificate (provided by IdP)
idp_cert_multi
SamlIdpCertMulti
Identity Provider Multiple Certificates (provided by IdP)
multi_certs_supported
boolean
Indicates whether this SAML configuration is set up to use multiple Identity Provider certificates (idp_cert_multi) or a single certificate (idp_cert). When true, idp_cert_multi is used; otherwise, idp_cert is used.
idp_url
string
Identity Provider Url (provided by IdP)
idp_issuer
string
Identity Provider Issuer (provided by IdP)
idp_audience
string
Identity Provider Audience (set in IdP config). Optional in Looker. Set this only if you want Looker to validate the audience value returned by the IdP.
allowed_clock_drift
integer
Count of seconds of clock drift to allow when validating timestamps of assertions.
user_attribute_map_email
string
Name of user record attributes used to indicate email address field
user_attribute_map_first_name
string
Name of user record attributes used to indicate first name
user_attribute_map_last_name
string
Name of user record attributes used to indicate last name
new_user_migration_types
string
Merge first-time saml login to existing user account by email addresses. When a user logs in for the first time via saml this option will connect this user into their existing account by finding the account with a matching email address by testing the given types of credentials for existing users. Otherwise a new user account will be created for the user. This list (if provided) must be a comma separated list of string like 'email,ldap,google'
alternate_email_login_allowed
boolean
Allow alternate email-based login via '/login/email' for admins and for specified users with the 'login_special_email' permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled.
test_slug
lock
string
Slug to identify configurations that are created in order to run a Saml config test
modified_at
lock
string
When this config was last modified
modified_by
lock
string
User id of user who last modified this config
default_new_user_roles
Role []
default_new_user_groups
Group []
default_new_user_role_ids
string[]
default_new_user_group_ids
string[]
set_roles_from_groups
boolean
Set user roles in Looker based on groups from Saml
groups_attribute
string
Name of user record attributes used to indicate groups. Used when 'groups_finder_type' is set to 'grouped_attribute_values'
groups
SamlGroupRead []
groups_with_role_ids
SamlGroupWrite []
auth_requires_role
boolean
Users will not be allowed to login at all unless a role for them is found in Saml if set to true
user_attributes
SamlUserAttributeRead []
user_attributes_with_ids
SamlUserAttributeWrite []
groups_finder_type
string
Identifier for a strategy for how Looker will find groups in the SAML response. One of ['grouped_attribute_values', 'individual_attributes']
groups_member_value
string
Value for group attribute used to indicate membership. Used when 'groups_finder_type' is set to 'individual_attributes'
bypass_login_page
boolean
Bypass the login page when user authentication is required. Redirect to IdP immediately instead.
allow_normal_group_membership
boolean
Allow SAML auth'd users to be members of non-reflected Looker groups. If 'false', user will be removed from non-reflected groups on login.
allow_roles_from_normal_groups
boolean
SAML auth'd users will inherit roles from non-reflected Looker groups.
allow_direct_roles
boolean
Allows roles to be directly assigned to SAML auth'd users.
url
lock
string
Link to get this item
Response
200: SAML test config
Datatype
Description
(object)
SamlConfig
can
lock
object
Operations the current user is able to perform on this object
enabled
boolean
Enable/Disable Saml authentication for the server
idp_cert
string
Identity Provider Certificate (provided by IdP)
idp_cert_multi
SamlIdpCertMulti
Identity Provider Multiple Certificates (provided by IdP)
Expand SamlIdpCertMulti definition...
signing
string[]
multi_certs_supported
boolean
Indicates whether this SAML configuration is set up to use multiple Identity Provider certificates (idp_cert_multi) or a single certificate (idp_cert). When true, idp_cert_multi is used; otherwise, idp_cert is used.
idp_url
string
Identity Provider Url (provided by IdP)
idp_issuer
string
Identity Provider Issuer (provided by IdP)
idp_audience
string
Identity Provider Audience (set in IdP config). Optional in Looker. Set this only if you want Looker to validate the audience value returned by the IdP.
allowed_clock_drift
integer
Count of seconds of clock drift to allow when validating timestamps of assertions.
user_attribute_map_email
string
Name of user record attributes used to indicate email address field
user_attribute_map_first_name
string
Name of user record attributes used to indicate first name
user_attribute_map_last_name
string
Name of user record attributes used to indicate last name
new_user_migration_types
string
Merge first-time saml login to existing user account by email addresses. When a user logs in for the first time via saml this option will connect this user into their existing account by finding the account with a matching email address by testing the given types of credentials for existing users. Otherwise a new user account will be created for the user. This list (if provided) must be a comma separated list of string like 'email,ldap,google'
alternate_email_login_allowed
boolean
Allow alternate email-based login via '/login/email' for admins and for specified users with the 'login_special_email' permission. This option is useful as a fallback during ldap setup, if ldap config problems occur later, or if you need to support some users who are not in your ldap directory. Looker email/password logins are always disabled for regular users when ldap is enabled.
test_slug
lock
string
Slug to identify configurations that are created in order to run a Saml config test
modified_at
lock
string
When this config was last modified
modified_by
lock
string
User id of user who last modified this config
default_new_user_roles
Role []
Expand Role definition...
can
lock
object
Operations the current user is able to perform on this object
id
lock
string
Unique Id
name
string
Name of Role
permission_set
lock
PermissionSet
(Read only) Permission set
Expand PermissionSet definition...
can
lock
object
Operations the current user is able to perform on this object
all_access
lock
boolean
built_in
lock
boolean
id
lock
string
Unique Id
name
string
Name of PermissionSet
permissions
string[]
url
lock
string
Link to get this item
permission_set_id
string
(Write-Only) Id of permission set
model_set
lock
ModelSet
(Read only) Model set
Expand ModelSet definition...
can
lock
object
Operations the current user is able to perform on this object
all_access
lock
boolean
built_in
lock
boolean
id
lock
string
Unique Id
models
string[]
name
string
Name of ModelSet
url
lock
string
Link to get this item
model_set_id
string
(Write-Only) Id of model set
internal
lock
boolean
Is this a Looker internal role
url
lock
string
Link to get this item
users_url
lock
string
Link to get list of users with this role
default_new_user_groups
Group []
Expand Group definition...
can
lock
object
Operations the current user is able to perform on this object
can_add_to_content_metadata
boolean
Group can be used in content access controls
contains_current_user
lock
boolean
Currently logged in user is group member
external_group_id
lock
string
External Id group if embed group
externally_managed
lock
boolean
Group membership controlled outside of Looker
id
lock
string
Unique Id
include_by_default
lock
boolean
New users are added to this group by default
name
string
Name of group
user_count
lock
integer
Number of users included in this group
default_new_user_role_ids
string[]
default_new_user_group_ids
string[]
set_roles_from_groups
boolean
Set user roles in Looker based on groups from Saml
groups_attribute
string
Name of user record attributes used to indicate groups. Used when 'groups_finder_type' is set to 'grouped_attribute_values'
groups
SamlGroupRead []
Expand SamlGroupRead definition...
id
lock
string
Unique Id
looker_group_id
lock
string
Unique Id of group in Looker
looker_group_name
lock
string
Name of group in Looker
name
lock
string
Name of group in Saml
roles
Role []
Expand Role definition...
can
lock
object
Operations the current user is able to perform on this object
id
lock
string
Unique Id
name
string
Name of Role
permission_set
lock
PermissionSet
(Read only) Permission set
permission_set_id
string
(Write-Only) Id of permission set
model_set
lock
ModelSet
(Read only) Model set
model_set_id
string
(Write-Only) Id of model set
internal
lock
boolean
Is this a Looker internal role
url
lock
string
Link to get this item
users_url
lock
string
Link to get list of users with this role
url
lock
string
Link to saml config
groups_with_role_ids
SamlGroupWrite []
Expand SamlGroupWrite definition...
id
string
Unique Id
looker_group_id
lock
string
Unique Id of group in Looker
looker_group_name
string
Name of group in Looker
name
string
Name of group in Saml
role_ids
string[]
url
lock
string
Link to saml config
auth_requires_role
boolean
Users will not be allowed to login at all unless a role for them is found in Saml if set to true
user_attributes
SamlUserAttributeRead []
Expand SamlUserAttributeRead definition...
name
lock
string
Name of User Attribute in Saml
required
lock
boolean
Required to be in Saml assertion for login to be allowed to succeed
user_attributes
UserAttribute []
Expand UserAttribute definition...
can
lock
object
Operations the current user is able to perform on this object
id
lock
string
Unique Id
name
string
Name of user attribute
label
string
Human-friendly label for user attribute
type
string
Type of user attribute ("string", "number", "datetime", "yesno", "zipcode", "advanced_filter_string", "advanced_filter_number")
default_value
string
Default value for when no value is set on the user
is_system
lock
boolean
Attribute is a system default
is_permanent
lock
boolean
Attribute is permanent and cannot be deleted
value_is_hidden
boolean
If true, users will not be able to view values of this attribute
user_can_view
boolean
Non-admin users can see the values of their attributes and use them in filters
user_can_edit
boolean
Users can change the value of this attribute for themselves
hidden_value_domain_whitelist
string
Destinations to which a hidden attribute may be sent. Once set, cannot be edited.
url
lock
string
Link to saml config
user_attributes_with_ids
SamlUserAttributeWrite []
Expand SamlUserAttributeWrite definition...
name
string
Name of User Attribute in Saml
required
boolean
Required to be in Saml assertion for login to be allowed to succeed
user_attribute_ids
string[]
url
lock
string
Link to saml config
groups_finder_type
string
Identifier for a strategy for how Looker will find groups in the SAML response. One of ['grouped_attribute_values', 'individual_attributes']
groups_member_value
string
Value for group attribute used to indicate membership. Used when 'groups_finder_type' is set to 'individual_attributes'
bypass_login_page
boolean
Bypass the login page when user authentication is required. Redirect to IdP immediately instead.
allow_normal_group_membership
boolean
Allow SAML auth'd users to be members of non-reflected Looker groups. If 'false', user will be removed from non-reflected groups on login.
allow_roles_from_normal_groups
boolean
SAML auth'd users will inherit roles from non-reflected Looker groups.
allow_direct_roles
boolean
Allows roles to be directly assigned to SAML auth'd users.
url
lock
string
Link to get this item
400: Bad Request
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
403: Permission Denied
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
404: Not Found
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
422: Validation Error
Datatype
Description
(object)
ValidationError
message
lock
string
Error details
errors
ValidationErrorDetail []
Expand ValidationErrorDetail definition...
field
lock
string
Field with error
code
lock
string
Error code
message
lock
string
Error info message
documentation_url
lock
string
Documentation link
documentation_url
lock
string
Documentation link
429: Too Many Requests
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]

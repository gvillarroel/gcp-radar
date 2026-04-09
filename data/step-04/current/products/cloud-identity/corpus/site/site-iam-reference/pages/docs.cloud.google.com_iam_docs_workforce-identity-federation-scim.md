---
title: "SCIM provisioning for Workforce Identity Federation \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/workforce-identity-federation-scim
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/workforce-identity-federation-scim
  title: "SCIM provisioning for Workforce Identity Federation \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

SCIM provisioning for Workforce Identity Federation | Identity and Access Management (IAM) | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
IAM
Identity and Access Management (IAM)
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Grant roles in the Google Cloud console
Grant roles using client libraries
IAM and your security architecture
Identity management for Google Cloud
Configure identities for users
Identities for users
Create and manage Google groups in the Google Cloud console
Best practices for using Google groups
Federate identities for users
Workforce identity federation
SCIM provisioning for Workforce Identity Federation
Configure Workforce Identity Federation
Microsoft Entra ID
Microsoft Entra ID with a large number of groups
Okta
Other OIDC or SAML 2.0
Access BigQuery data in Power BI with Microsoft Entra
Configure SCIM
Microsoft Entra ID
Okta
OIDC or SAML 2.0
Obtain short-lived credentials for Workforce Identity Federation
Manage workforce identity pools and providers
Delete Workforce Identity Federation users and their data
Set up user access to console (federated)
Sign in to the gcloud CLI with your federated identity
Integrate OAuth applications
OAuth application integration overview
Manage OAuth applications
Configure identities for workloads
Identities for workloads
Create and manage service accounts
About service accounts
Service accounts
Service account credentials
Service account impersonation
Service account types
Roles for service account authentication
Create and grant roles to service agents
Create service accounts
Manage service accounts
List and edit service accounts
Disable and enable service accounts
Delete and undelete service accounts
Manage tags for service accounts
Attach service accounts to resources
Use custom organization policies for service accounts and keys
Service account best practices
Best practices for using service accounts
Best practices for using service accounts in deployment pipelines
Use managed workload identities
About managed workload identities
Compute Engine
Create managed workload identities for GCE
GKE
Create managed workload identities for GKE
Troubleshoot managed workload identities for GKE
Use custom organization policies
Federate identities for external workloads
Workload Identity Federation
Configure Workload Identity Federation
AWS or Azure
Active Directory
Deployment pipelines
Kubernetes
Workloads with X.509 certificates
Other identity providers
Authenticate workloads using Google auth libraries
Manage workload identity pools and providers
Best practices for using Workload Identity Federation
Let customers access their Google Cloud resources from your product or service
Download credential configuration and grant access
Integrate Cloud Run and Workload Identity Federation
Use custom organization policies
Create and manage service account keys
Migrate from service account keys
Service account key rotation
Create and delete service account keys
List and get service account keys
Upload a public key
Disable and enable service account keys
Best practices for managing service account keys
Built-in identities for resources
Control access to resources
About IAM access controls
Roles and permissions
Principals
Policy types
Allow policies
Allow policy inheritance
Deny policies
Principal access boundary policies
Access change propagation
IAM Conditions
Choose roles to grant
Choose which type of role to use
Find the right predefined roles
Get predefined role suggestions with Gemini assistance
View grantable roles
Roles for specific job functions
Predefined roles for job functions
Billing-related job functions
Networking-related job functions
Auditing-related job functions
Create and manage custom roles
Create and manage custom roles
Manage tags for custom roles
Use Deployment Manager to maintain custom roles
Grant access
Manage access to projects, folders, and organizations
Manage access to service accounts
Manage access to other resources
Test allow policy changes
Grant access conditionally
Manage conditional role bindings
Configure temporary access
Configure resource-based access
Tags and conditional access
Set limits on granting roles
Lint conditions in allow policies
Deny access
Restrict the resources that a principal can access
Create and apply principal access boundary policies
View principal access boundary policies
Edit principal access boundary policies
Remove principal access boundary policies
Temporary elevated access
Temporary elevated access overview
Control temporary elevated access with PAM
PAM overview
Permissions and setup
Create entitlements
View, update, and delete entitlements
Configure PAM settings
View and export PAM settings
View grants
Revoke grants
Audit entitlement and grant events
Best practices for PAM
Request temporary elevated access with PAM
Withdraw grants
Approve or deny grants with PAM
Create short-lived credentials for a service account
Create short-lived credentials for multiple service accounts
Restrict a credential's Cloud Storage permissions
Credential Access Boundaries overview
Create a downscoped short-lived credential
Migrate to the Service Account Credentials API
Test permissions for custom user interfaces
Use custom organization policies for allow policies
Use IAM to help prevent exfiltration from data pipelines
Optimize your IAM configuration
Use IAM securely
Optimize IAM policies by using Policy Intelligence tools
Help secure IAM using VPC Service Controls
Monitor
Audit logging
IAM API audit logging
IAM SCIM audit logging
Service Account Credentials API audit logging
Privileged Access Manager audit logging
Security Token Service API audit logging
Example logs for service accounts
Example logs for Workforce Identity Federation
Example logs for Workforce OAuth application integration
Example logs for Workload Identity Federation
Analyze access to resources
Monitor service account usage
Tools to understand service account usage
Monitor usage patterns for service accounts and keys
Review allow policy history
Review security insights
Troubleshoot
Troubleshoot permission error messages
Permission error messages
Request missing permissions
Resolve permission errors
Troubleshoot allow and deny policies
Troubleshoot organization policy errors for service accounts
Troubleshoot "withcond" in policies and role bindings
Troubleshoot Workforce Identity Federation
Troubleshoot Workload Identity Federation
Samples
All Identity and Access Management code samples
Code samples for all products
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Capabilities
Considerations
Mapping OIDC and SAML providers to SCIM configuration
Supported and unsupported endpoints
Limitations Protocol feature limitations
SCIM behavior limitations
Attribute limitations
What's next
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
SCIM provisioning for Workforce Identity Federation
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Capabilities
Considerations
Mapping OIDC and SAML providers to SCIM configuration
Supported and unsupported endpoints
Limitations Protocol feature limitations
SCIM behavior limitations
Attribute limitations
What's next
If your identity provider (IdP) supports System for Cross-domain Identity Management (SCIM) ,
you can configure your IdP to provision and manage groups in Google Cloud.
Important: This feature applies only to Gemini Enterprise.
Capabilities
Workforce Identity Federation SCIM support provides the following capabilities:
Identity synchronization: Sync read-only copies of user data from your IdP
to get a holistic view of user properties and memberships in Google Cloud.
Group flattening: SCIM processes groups from your IdP so that all direct
and indirect (nested) memberships for a user are flattened and synced to the
Google Cloud Group Membership Service (GMS). IAM then uses
these flattened groups for policy checks, overcoming the size constraints often
found in IdP tokens.
Gemini Enterprise integration: SCIM tenants support sharing in
Gemini Enterprise. The SCIM tenant enables two features related
to sharing notebooks within NotebookLM Enterprise:
Autocomplete for email addresses and groups
The use of the group's name instead of its object ID (UUID)
To learn more, see Share a notebook with a
group .
Considerations
When you use Workforce Identity Federation SCIM support, the following
considerations apply:
You must set up a workforce identity pool and provider before configuring a
SCIM tenant.
Each workforce identity pool supports only one SCIM tenant. To configure a
new SCIM tenant in the same workforce identity pool, you must first delete
the existing one. When deleting a SCIM tenant, you have two options:
Soft delete (Default): Deleting a SCIM tenant initiates a 30-day
soft-delete period. During this time, the tenant is hidden and cannot be
used, and you cannot create a new SCIM tenant in the same workforce
identity pool.
Hard delete: To permanently and immediately delete a SCIM tenant,
use the --hard-delete flag with the delete command. This action is
irreversible and lets you create a new SCIM tenant in the same workforce
identity pool immediately after the deletion completes. Alternatively,
you can create a new workforce identity pool and a new SCIM tenant or
use a workforce identity pool that hasn't previously been configured
with a SCIM tenant.
When you use SCIM, you map attributes in both the workforce identity pool
provider and the SCIM tenant. The google.subject attribute must uniquely
refer to the same identities. You specify the google.subject in the
workforce identity pool provider by using the --attribute-mapping flag and
in the SCIM tenant using the --claim-mapping flag. Mapping non-unique
identity values can cause Google Cloud to treat different IdP identities
as the same identity. As a result, access that's granted to one user or group
identity can extend to others but revoking access from one might not remove it
from all.
To use SCIM to map groups, set --scim-usage=enabled-for-groups . When you
map groups using SCIM, any group mapping that's defined in the workforce
identity pool provider is ignored. When referring to SCIM-managed groups,
the mapped attribute is google.group , not google.groups . google.groups
only refers to token-mapped groups.
When using SCIM, token-based attributes that are mapped with
--attribute-mapping can still be used for authentication and in principal
identifiers.
For Microsoft Entra ID configuration, to enable human-readable group names in
Gemini Enterprise, use SCIM.
Mapping OIDC and SAML providers to SCIM configuration
There must be consistency between the attribute mapping in the workforce identity
pool provider configuration ( --attribute-mapping ) and the claim
mappings in the SCIM tenant ( --claim-mapping ). The underlying IdP
attribute used to populate google.subject (for users) must be the same,
whether it's being read from a token claim or a SCIM attribute.
If these mappings are inconsistent, users might be able to sign in but won't be
recognized as members of their SCIM-provisioned groups. For example, if the
provider uses assertion.email for google.subject , the
SCIM tenant must also use the equivalent SCIM attribute
(for example, user.emails[0].value ) for google.subject .
The following table provides reference examples for mapping common IdP token
claims to SCIM attributes:
Google attribute
Workforce identity pool provider mapping (Token)
SCIM tenant mapping (SCIM)
google.subject
assertion.oid
user.externalId
google.subject
assertion.email
user.emails[0].value
google.subject
assertion.email.lowerAscii()
user.emails[0].value.lowerAscii()
google.subject
assertion.preferred_username
user.userName
google.subject
assertion.sub
Incompatible
google.group
N/A (Mapped using SCIM)
group.externalId
Note: When you use SCIM for groups, you must update your provider with
--scim-usage=enabled-for-groups . The
google.groups attribute in the provider mapping is ignored for
group-based authorization; instead, use google.group .
Supported and unsupported endpoints
The following standard SCIM protocol endpoints are supported:
/Users : manage user resources. Supported operations: Create , Get ,
Update , Delete , Patch , and Put .
/Groups : manage group resources. Supported operations: Create , Get ,
Update , Delete , and Patch . The PUT method isn't supported for groups.
/Schemas : retrieve schema information.
/ServiceProviderConfig : retrieve the service provider configuration.
Note: SCIM integration with Okta does not support Import Users and Import Groups
features from Google Cloud to Okta.
The following SCIM protocol endpoints aren't supported:
/Me
/Bulk
/Search
/ResourceTypes
Limitations
The following sections describe the limitations and deviations of the Workforce Identity Federation SCIM implementation from the SCIM specifications (RFC 7643 and 7644).
Protocol feature limitations
Filter support: When you list users or groups using the /Users or /Groups
endpoints, filter expressions only support the eq (equals) operator. You can
combine multiple eq filters with and . Other SCIM filter operators, such as
co (contains) or sw (starts with), aren't supported.
Pagination: The IAM SCIM API does not support standard pagination
for listing users or groups.
startIndex : this parameter is always 1 . The API returns up to 100 results
regardless of the value that you provide for startIndex .
itemsPerPage : the maximum number of resources that are returned in a single
response is 100.
totalResults : the API does not return the actual total count of matching
resources. The totalResults field in the response is always equal to the
number of items that are returned in that response, with a maximum of 100.
Get Group and list Groups without filter: GetGroup and ListGroups APIs
return an empty member list. To retrieve members for a specific group, use the
ListGroups API with a member filter.
Non-compliant JSON response with invalid tokens: APIs that contain invalid
API token result in a 401 HTTP error from Google Cloud. The response is
not a JSON structure as required by the specifications.
SCIM behavior limitations
Immutable identifiers: The values of SCIM attributes that are mapped to
google.subject or google.group are treated as
immutable identifiers within Google Cloud. If you need to change these
values, you must permanently delete the user or group from your IdP and then
recreate it with the new value.
Single email requirement: For successful SCIM synchronization, each user
must have exactly one email address of type work . Provisioning or updates
will fail if your IdP sends multiple emails or if the single email provided is
not typed as work .
Case-insensitive transformations: Limited Common Expression Language
(CEL) transformations are supported for SCIM claim mappings.
Only .lowerAscii() is supported for case-insensitive comparisons for
user.userName and user.emails[0].value .
Attribute limitations
The following sections describe the attribute support for users, groups, and
the enterprise user schema extension.
User attributes
The following table details the support for user attributes:
Attribute
Sub-attributes
Supported
Limitations
userName
N/A
Yes
N/A
name
formatted , familyName , givenName , middleName , honorificPrefix , honorificSuffix
Yes
N/A
displayName
N/A
Yes
N/A
nickName
N/A
Yes
N/A
profileUrl
N/A
Yes
N/A
title
N/A
Yes
N/A
userType
N/A
Yes
N/A
preferredLanguage
N/A
Yes
N/A
locale
N/A
Yes
N/A
timezone
N/A
Yes
N/A
active
N/A
Yes
N/A
password
N/A
No
N/A
emails
display , type , value , primary
Yes
Only the work email type is supported.
phoneNumbers
display , type , value , primary
Yes
N/A
ims
display , type , value
Yes
N/A
photos
display , type , value
Yes
N/A
addresses
formatted , streetAddress , locality , region , postalCode , country
Yes
N/A
groups
N/A
No
N/A
entitlements
display , type , value
Yes
N/A
roles
type , value
Yes
display isn't supported.
x509Certificates
type , value
Yes
display isn't supported.
Group attributes
The following table details the support for group attributes:
Attribute
Supported sub-attributes
displayName
N/A
externalId
N/A
members
value , type , $ref , display
Enterprise user schema extension attributes
The following table details the support for the enterprise user schema extension:
Attribute
Supported sub-attributes
employeeNumber
N/A
costCenter
N/A
organization
N/A
division
N/A
department
N/A
manager
value , $ref , displayName
What's next
Configure SCIM support for Workforce Identity Federation
IAM SCIM audit logging
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial

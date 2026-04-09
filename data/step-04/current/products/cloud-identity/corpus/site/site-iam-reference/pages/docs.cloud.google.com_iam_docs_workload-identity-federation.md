---
title: "Workload Identity Federation \_|\_ Identity and Access Management (IAM) \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/workload-identity-federation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/workload-identity-federation
  title: "Workload Identity Federation \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Workload Identity Federation | Identity and Access Management (IAM) | Google Cloud Documentation
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
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
Why Workload Identity Federation?
Workload identity pools
Workload identity pool providers OIDC provider with local JWKs
Attribute mappings
Attribute conditions
Access management Direct resource access
Alternative: Service account impersonation
Principal scopes and security
Principal types
What's next
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Workload Identity Federation
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Why Workload Identity Federation?
Workload identity pools
Workload identity pool providers OIDC provider with local JWKs
Attribute mappings
Attribute conditions
Access management Direct resource access
Alternative: Service account impersonation
Principal scopes and security
Principal types
What's next
This document provides an overview of Workload Identity Federation.
Using Workload Identity Federation, you can provide on-premises or multicloud
workloads with access to Google Cloud resources by using federated identities
instead of a service account key.
You can use Workload Identity Federation with workloads that authenticate
using
X.509 client certificates ;
that run on
Amazon Web Services (AWS) or Azure ;
on-premises
Active Directory ;
deployment services, such as
GitHub and GitLab ;
and with any identity provider (IdP) that supports
OpenID Connect (OIDC) or Security Assertion Markup Language (SAML) V2.0 .
Why Workload Identity Federation?
Applications running outside Google Cloud can use
service account keys
to access Google Cloud resources. However, service account keys are
powerful credentials, and can present a security risk if they are not managed
correctly. Workload Identity Federation eliminates the maintenance and
security burden associated with service account keys.
With Workload Identity Federation, you can use Identity and Access Management (IAM)
to grant IAM roles to principals
that are based on federated identities in a workload identity pool. You can
grant access to the principals on specific Google Cloud resources. This
approach is called direct access . Alternatively, you can grant access to a
service account, which can then access Google Cloud resources. This
approach is called service account impersonation .
Workload identity pools
A workload identity pool is an entity that lets you manage external
identities.
In general, we recommend creating a new pool for each non-Google Cloud
environment that needs to access Google Cloud resources, such as
development, staging, or production environments.
Workload identity pool providers
A workload identity pool provider is an entity that describes a relationship
between Google Cloud and your IdP, including the following:
AWS
Microsoft Entra ID
GitHub
GitLab
Kubernetes clusters
Okta
On-premises Active Directory Federation Services (AD FS)
Terraform
Workload Identity Federation follows the OAuth 2.0 token exchange
specification. You provide a credential from your IdP to the Security Token Service ,
which verifies the identity on the credential, and then returns a federated
token in exchange.
OIDC provider with local JWKs
To federate workloads that don't have a public OIDC endpoint, you can upload
OIDC JSON Web Key Sets (JWKS) directly to the pool. This is common if you have
Terraform or GitHub Enterprise hosted in your own environment or you have
regulatory requirements not to expose public URLs. For more information, see
Manage OIDC JWKs (Optional) .
Attribute mappings
The tokens issued by your external IdP contain one or more
attributes. Some IdPs refer to these attributes as claims .
Google Security Token Service tokens also contain one or more attributes, as listed
in the following table:
Attribute
Description
google.subject
Required. A unique identifier for the user. This attribute is used in
IAM principal:// role bindings and appears in
Cloud Logging logs.
The value must be unique and can't exceed 127 characters.
google.groups
Optional. A set of groups that the identity belongs to. This attribute is
used in IAM principalSet:// role bindings to
grant access to all members of a group.
attribute. NAME
Optional. You can define up to 50 custom attributes and use these
attributes in IAM principalSet:// role
bindings to grant access to all identities with a certain attribute.
An attribute mapping defines how to derive the value of the Google
Security Token Service token attribute from an external token. For each Google
Security Token Service token attribute, you can define an attribute mapping,
formatted as follows:
TARGET_ATTRIBUTE = SOURCE_EXPRESSION
Replace the following:
TARGET_ATTRIBUTE is an attribute of the Google
Security Token Service token
SOURCE_EXPRESSION is a
Common Expression Language (CEL)
expression that transforms one or more attributes from the tokens issued by
your external IdP
The following list provides attribute mapping examples:
Assign the assertion attribute sub to google.subject :
google.subject=assertion.sub
Concatenate multiple assertion attributes:
google.subject='myprovider::' + assertion.aud + '::' + assertion.sub
Map a GUID-valued assertion attribute workload_id
to a name, and assign the result to a custom attribute named attribute.my_display_name :
attribute.my_display_name={
"8bb39bdb-1cc5-4447-b7db-a19e920eb111": "Workload1",
"55d36609-9bcf-48e0-a366-a3cf19027d2a": "Workload2"
}[assertion.workload_id]
Use CEL logical operators and functions
to set a custom attribute named attribute.environment to either
prod or test , depending on the identity's Amazon Resource Name (ARN):
attribute.environment=assertion.arn.contains(":instance-profile/Production") ? "prod" : "test"
Use the extract function
to populate a custom attribute aws_role with the name of the assumed role or,
if no role has been assumed, with the identity's ARN.
attribute.aws_role=assertion.arn.contains('assumed-role') ? assertion.arn.extract('{account_arn}assumed-role/') + 'assumed-role/' + assertion.arn.extract('assumed-role/{role_name}/') : assertion.arn
Use the split function
splits a string on the provided separator value. For example, to extract the attribute username from an email address attribute by splitting its value at the @ and using the first string, use the following attribute mapping:
attribute.username=assertion.email.split("@")[0]
join function
joins a list of strings on the provided separator value. For example, to
populate the custom attribute department by concatenating a list of
strings with . as a separator, use the following attribute mapping:
attribute.department=assertion.department.join(".")
When you use X.509 client certificates, Google provides default mappings from
certificate attributes.
For AWS, Google provides default mappings, which cover most common scenarios.
You can also supply custom mappings.
For OIDC providers, you supply the mappings. To construct the mapping, consult
the provider's documentation for a list of attributes on their credentials.
For more details, see the API documentation for the
attributeMapping field .
Attribute conditions
An attribute condition is a CEL expression that can check assertion attributes
and target attributes. If the attribute condition evaluates to true for a
given credential, the credential is accepted. Otherwise, the credential is
rejected.
You can use an attribute condition to restrict which identities can authenticate
using your workload identity pool.
Attribute conditions are useful in scenarios such as the following:
If your workload uses an IdP that's available to the general
public, you can restrict access so only the identities you choose have access
to your workload identity pool.
If you're using an IdP with multiple cloud platforms, you can
prevent credentials intended for use with another platform from being used
with Google Cloud, and vice-versa. This helps avoid the
confused deputy problem .
The attribute condition for a workload identity pool provider can use the
assertion keyword, which refers to a map that represents the authentication
credential issued by the IdP. You can use dot notation to access
the map's values. For example, AWS credentials include an arn value, which you
can access as assertion.arn . In addition, the attribute condition can use any
attribute that is defined in the provider's attribute mapping .
The following example only allows requests from identities that have a specific
AWS role:
attribute.aws_role == " ROLE_MAPPING "
For more details, see the API documentation for the
attributeCondition field .
Access management
The token exchange flow returns a federated access token. You can use this
federated access token to grant your workload access on behalf of
principal identities on Google Cloud resources and obtain a
short-lived OAuth 2.0 access token .
You can use this access token to provide IAM access.
We recommend that you use Workload Identity Federation to provide access
directly to a Google Cloud resource .
Although most Google Cloud APIs support Workload Identity Federation,
some APIs have limitations .
As an alternative, you can use service account impersonation .
The short-lived access token lets you call any Google Cloud APIs that the
resource or service account has access to.
Direct resource access
You can use direct resource access to grant to your external identity access
directly on a Google Cloud resource using resource-specific roles.
Alternative: Service account impersonation
As an alternative to providing direct resource access you
can use service account impersonation .
Note: Use fully qualified resource names when granting roles to external
identities, and use your project number , not your project ID .
You must grant your service account the role Workload Identity User
( roles/iam.workloadIdentityUser ).
Principal scopes and security
You grant access to principals or subsets thereof by using principal types .
Warning: Although you can grant access to all of the identities in a workload
identity pool, doing so can incur risk. We recommend that you limit access
using attributes and conditions .
Principal types
The following table describes how to define principals as individuals and groups
of identities:
Identities
Identifier format
Single identity
principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/ workloadIdentityPools/ POOL_ID /subject/ SUBJECT_ATTRIBUTE_VALUE
All identities in a group
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/ workloadIdentityPools/ POOL_ID /group/ GROUP_ID
All identities with a specific attribute value
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/ workloadIdentityPools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
What's next
Use Workload Identity Federation to let your workloads access resources
from AWS or Azure ,
X.509 Certificates ,
Active Directory ,
Deployment pipelines , or
OIDC or SAML providers .
Learn how to manage workload identity pools
using the Google Cloud CLI or the REST API.
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
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

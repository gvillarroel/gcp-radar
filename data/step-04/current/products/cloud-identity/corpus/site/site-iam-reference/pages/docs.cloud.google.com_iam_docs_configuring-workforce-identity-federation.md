---
title: "Configure Workforce Identity Federation \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation
  title: "Configure Workforce Identity Federation \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure Workforce Identity Federation | Identity and Access Management (IAM) | Google Cloud Documentation
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
Other OIDC or SAML 2. 0
Access Big Query data in Power BI with Microsoft Entra
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
Before you begin
Costs
Required roles
Configure Workforce Identity Federation Create a workforce identity pool
Create a workforce identity pool provider
Verify your provider configuration Edit your provider configuration
Workforce principal identifiers for IAM policies
Grant IAM roles to principals
Delete users
What's next
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Configure Workforce Identity Federation
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Costs
Required roles
Configure Workforce Identity Federation Create a workforce identity pool
Create a workforce identity pool provider
Verify your provider configuration Edit your provider configuration
Workforce principal identifiers for IAM policies
Grant IAM roles to principals
Delete users
What's next
This guide describes how to configure Workforce Identity Federation with an
identity provider (IdP) that supports OIDC
or SAML 2.0 .
For IdP-specific instructions, see the following:
Configure Microsoft Entra ID-based Workforce Identity Federation
Configure Okta-based Workforce Identity Federation
Before you begin
Make sure that you have a Google Cloud organization set up.
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
See more code actions.
Light code theme
Dark code theme
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
Enable the Identity and Access Management (IAM) and Resource Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
For sign-in, your IdP must provide signed authentication information:
OIDC IdPs must provide a JWT, and SAML IdP responses must be signed.
To receive important information about changes to your organization or
Google Cloud products, you must provide Essential Contacts .
For more information, see the Workforce Identity Federation overview .
Costs
Workforce Identity Federation is available
as a no-cost feature. However, Workforce Identity Federation detailed audit logging uses Cloud Logging. To learn about Logging pricing,
see Google Cloud Observability pricing .
Required roles
To get the permissions that
you need to configure Workforce Identity Federation,
ask your administrator to grant you the
Workforce Identity Pool Admin ( roles/iam.workforcePoolAdmin )
IAM role on the organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Alternatively, the Owner basic role ( roles/owner ) also
includes permissions to configure Workforce Identity Federation.
You should not grant basic roles in a production environment, but you can grant them in a
development or test environment.
Configure Workforce Identity Federation
To configure Workforce Identity Federation, you create a workforce identity pool
and a workforce identity pool provider .
Create a workforce identity pool
To create the pool, execute the following command:
gcloud Console
More
To create the workforce identity pool, run the following command:
gcloud iam workforce-pools create WORKFORCE_POOL_ID \
--organization = ORGANIZATION_ID \
--display-name = " DISPLAY_NAME " \
--description = " DESCRIPTION " \
--session-duration = SESSION_DURATION \
--location = global
Replace the following:
WORKFORCE_POOL_ID : an ID that you choose to represent
your Google Cloud workforce pool. The pool ID must be globally unique
across all workforce identity pools in Google Cloud. For information on
formatting the ID, see the Query parameters
section in the API documentation.
ORGANIZATION_ID : the numeric organization ID of
your Google Cloud organization for the workforce identity pool.
Workforce identity pools are available across all projects and
folders in the organization.
DISPLAY_NAME : Optional. A display name for your
workforce identity pool.
DESCRIPTION : Optional. A workforce identity pool
description.
SESSION_DURATION : Optional. The session duration,
expressed as a number appended with s —for example, 3600s . Session
duration determines how long the Google Cloud access tokens,
console (federated)
sign-in sessions, and gcloud CLI sign-in sessions from this
workforce pool are valid. Session duration defaults to one hour (3600s). The
session duration value must be between 15 minutes (900s) and 12 hours
(43200s).
Tip: Run gcloud iam workforce-pools create --help to find other
parameters you can customize for this command.
To create the workforce identity pool, do the following:
In the Google Cloud console, go to the Workforce Identity Pools
page:
Go to Workforce Identity Pools
Select the organization for your workforce identity pool. Workforce
identity pools are available across all projects and folders in an
organization.
Click Create pool and do the following:
In the Name field, enter the display name of the pool. The pool ID
is automatically derived from the name as you type, and it is
displayed under the Name field. You can update the pool ID by
clicking Edit next to the pool ID.
Optional: In Description , enter a description of the pool.
To create the workforce identity pool, click Next .
The workforce identity pool's session duration defaults to one hour (3600s).
The session duration determines how long the Google Cloud access tokens,
console (federated) ,
and gcloud CLI sign-in sessions from this workforce pool
are valid. After you create the pool, you can update the pool to set
a custom session duration. The session duration must be from 15
minutes (900s) to 12 hours (43200s).
Create a workforce identity pool provider
This section describes how to create a
workforce identity pool provider
to enable your IdP users to access Google Cloud. You can configure the provider to use either the OIDC or SAML protocol.
Create an OIDC workforce pool provider
To create a workforce identity pool provider using the OIDC protocol, do the
following:
In your OIDC IdP, register a new application for Google Cloud
Workforce Identity Federation. Note the client ID and issuer URI
provided by the IdP. You use them in this document.
If you plan to set up user access to the console, add the following
redirect URL to your OIDC IdP:
https://auth.cloud.google/signin-callback/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID
Replace the following:
WORKFORCE_POOL_ID : the workforce identity pool ID
WORKFORCE_PROVIDER_ID : the ID of the workforce
identity pool provider that you create later in this document.
To learn how to configure console (federated) sign-in, see
Set up user access to the console (federated) .
In Google Cloud, to create the provider, do the following:
gcloud Console
More
Code flow Implicit flow
More
To create an OIDC provider that uses authorization code flow
for web sign-in, run the following command:
gcloud iam workforce-pools providers create-oidc WORKFORCE_PROVIDER_ID \
--workforce-pool= WORKFORCE_POOL_ID \
--display-name=" DISPLAY_NAME " \
--description=" DESCRIPTION " \
--issuer-uri=" ISSUER_URI " \
--client-id=" OIDC_CLIENT_ID " \ --client-secret-value=" OIDC_CLIENT_SECRET " \
--web-sso-response-type="code" \
--web-sso-assertion-claims-behavior="merge-user-info-over-id-token-claims" \
--web-sso-additional-scopes=" WEB_SSO_ADDITIONAL_SCOPES " \
--attribute-mapping=" ATTRIBUTE_MAPPING " \
--attribute-condition=" ATTRIBUTE_CONDITION " \
--jwk-json-path=" JWK_JSON_PATH " \
--detailed-audit-logging \
--location=global
Replace the following:
WORKFORCE_PROVIDER_ID : A unique workforce
identity pool provider ID. The prefix gcp- is reserved and can't be used in a workforce identity pool or workforce identity pool provider ID.
WORKFORCE_POOL_ID : The workforce identity pool ID
to connect your IdP to.
DISPLAY_NAME : An optional user-friendly display
name for the provider; for example, idp-eu-employees .
DESCRIPTION : An optional workforce provider
description; for example, IdP for Partner Example Organization employees .
ISSUER_URI : The OIDC issuer URI, in a
valid URI format, that starts with https ; for example,
https://example.com/oidc . Note: For security reasons, ISSUER_URI must use the HTTPS scheme.
OIDC_CLIENT_ID : The OIDC client ID that is
registered with your OIDC IdP; the ID must match the aud claim
of the JWT that is issued by your IdP.
OIDC_CLIENT_SECRET : The OIDC client secret.
WEB_SSO_ADDITIONAL_SCOPES : Optional additional scopes to send to the OIDC IdP
for console (federated) or gcloud CLI browser-based sign-in.
ATTRIBUTE_MAPPING : An attribute mapping .
The following is an example of an attribute mapping:
google.subject=assertion.oid
google.groups=assertion.groups,
attribute.costcenter=assertion.costcenter
This example maps the IdP attributes assertion.oid , assertion.groups , and
assertion.costcenter in the OIDC assertion to the Google Cloud attributes
google.subject , google.groups , and attribute.costcenter ,
respectively.
ATTRIBUTE_CONDITION : An attribute condition ;
for example, assertion.role == 'gcp-users' . This example condition ensures that only users with the role gcp-users can sign in using this provider.
Warning: If your multi-tenant IdP has a single issuer URI, you must use
attribute conditions
to ensure that access is restricted to the correct tenant. For more information, see Use attribute conditions when federating with GitHub or other multi-tenant identity providers .
JWK_JSON_PATH : An optional path to a locally uploaded OIDC JWKs .
If this parameter isn't supplied, Google Cloud instead uses your IdP's /.well-known/openid-configuration path to
source the JWKs containing the public keys. For more information about locally uploaded OIDC JWKs, see manage OIDC JWKs .
Note: Local OIDC JWKs can be uploaded through
implicit flow or code flow ,
but can only be used in programmatic flow ,
in which you directly call the STS /token endpoint with a credential from the third-party IdP to exchange for a Google Cloud access token for your workforce pool.
You can't use local OIDC JWKs when signing in to the console (federated).
Workforce Identity Federation detailed audit logging logs information received from your IdP to Logging. Detailed audit logging can help you troubleshoot your workforce identity pool provider configuration. To learn how to troubleshoot attribute mapping errors with detailed audit logging, see General attribute mapping errors . To learn about Logging pricing, see
Google Cloud Observability pricing .
To disable detailed audit logging for a workforce identity pool provider, omit the --detailed-audit-logging flag when you run gcloud iam workforce-pools providers create . To disable detailed audit logging, you can also update the provider .
In the command response, POOL_RESOURCE_NAME is the name of the pool;
for example, locations/global/workforcePools/enterprise-example-organization-employees .
To create an OIDC provider that uses the implicit flow
for web sign-in, run the following command:
gcloud iam workforce-pools providers create-oidc WORKFORCE_PROVIDER_ID \
--workforce-pool= WORKFORCE_POOL_ID \
--display-name=" DISPLAY_NAME " \
--description=" DESCRIPTION " \
--issuer-uri=" ISSUER_URI " \
--client-id=" OIDC_CLIENT_ID " \
--web-sso-response-type="id-token" \
--web-sso-assertion-claims-behavior="only-id-token-claims" \
--web-sso-additional-scopes=" WEB_SSO_ADDITIONAL_SCOPES " \
--attribute-mapping=" ATTRIBUTE_MAPPING " \
--attribute-condition=" ATTRIBUTE_CONDITION " \
--jwk-json-path=" JWK_JSON_PATH " \
--detailed-audit-logging \
--location=global
Replace the following:
WORKFORCE_PROVIDER_ID : A unique workforce
identity pool provider ID. The prefix gcp- is reserved and can't be used in a workforce identity pool or workforce identity pool provider ID.
WORKFORCE_POOL_ID : The workforce identity pool ID
to connect your IdP to.
DISPLAY_NAME : An optional user-friendly display
name for the provider; for example, idp-eu-employees .
DESCRIPTION : An optional workforce provider
description; for example, IdP for Partner Example Organization employees .
ISSUER_URI : The OIDC issuer URI, in a
valid URI format, that starts with https ; for example,
https://example.com/oidc . Note: For security reasons, ISSUER_URI must use the HTTPS scheme.
OIDC_CLIENT_ID : The OIDC client ID that is
registered with your OIDC IdP; the ID must match the aud claim
of the JWT that is issued by your IdP.
WEB_SSO_ADDITIONAL_SCOPES : Optional additional scopes to send to the OIDC IdP
for console (federated) or gcloud CLI browser-based sign-in.
ATTRIBUTE_MAPPING : An attribute mapping .
The following is an example of an attribute mapping:
google.subject=assertion.oid
google.groups=assertion.groups,
attribute.costcenter=assertion.costcenter
This example maps the IdP attributes assertion.oid , assertion.groups , and
assertion.costcenter in the OIDC assertion to the Google Cloud attributes
google.subject , google.groups , and attribute.costcenter ,
respectively.
ATTRIBUTE_CONDITION : An attribute condition ;
for example, assertion.role == 'gcp-users' . This example condition ensures that only users with the role gcp-users can sign in using this provider.
Warning: If your multi-tenant IdP has a single issuer URI, you must use
attribute conditions
to ensure that access is restricted to the correct tenant. For more information, see Use attribute conditions when federating with GitHub or other multi-tenant identity providers .
JWK_JSON_PATH : An optional path to a locally uploaded OIDC JWKs .
If this parameter isn't supplied, Google Cloud instead uses your IdP's /.well-known/openid-configuration path to
source the JWKs containing the public keys. For more information about locally uploaded OIDC JWKs, see manage OIDC JWKs .
Note: Local OIDC JWKs can be uploaded through
implicit flow or code flow ,
but can only be used in programmatic flow ,
in which you directly call the STS /token endpoint with a credential from the third-party IdP to exchange for a Google Cloud access token for your workforce pool.
You can't use local OIDC JWKs when signing in to the console (federated).
Workforce Identity Federation detailed audit logging logs information received from your IdP to Logging. Detailed audit logging can help you troubleshoot your workforce identity pool provider configuration. To learn how to troubleshoot attribute mapping errors with detailed audit logging, see General attribute mapping errors . To learn about Logging pricing, see
Google Cloud Observability pricing .
To disable detailed audit logging for a workforce identity pool provider, omit the --detailed-audit-logging flag when you run gcloud iam workforce-pools providers create . To disable detailed audit logging, you can also update the provider .
In the command response, POOL_RESOURCE_NAME is the name of the pool;
for example, locations/global/workforcePools/enterprise-example-organization-employees .
The prefix gcp- is reserved and can't be used in a workforce identity pool or workforce identity pool provider ID.
For OIDC federation, you can use assertion. NAME : a string equal
to the value of the like-named claim in the ID token payload.
Code flow Implicit flow
More
In the Google Cloud console, to create an OIDC provider that
uses authorization code flow ,
do the following:
In the Google Cloud console, go to the Workforce Identity Pools page:
Go to Workforce Identity Pools
In the Workforce Identity Pools table, select the pool for which
you want to create the provider.
In the Providers section,
click add Add Provider .
In the Select a Provider vendor list, select your IdP.
If your IdP isn't listed, then select Generic Identity Provider .
In Select an authentication protocol , select OpenID Connect (OIDC) .
In the Create a provider section, do the following:
In Name , enter the name for the provider.
In Description , enter the description for the provider.
In Issuer (URL) , enter the issuer URI. The OIDC issuer URI must be in a valid URI format and start with https ; for example,
https://example.com/oidc .
In Client ID , enter the OIDC client ID that is registered
with your OIDC IdP; the ID must match the aud claim of the JWT that is
issued by your IdP.
To create a provider that is enabled, make sure Enable provider is
on.
Click Continue .
In the Share your provider information with IdP section, copy the URL.
In your IdP, configure this URL as the redirect URI, which informs your IdP
where to send the assertion token after logging in.
Click Continue .
In the Configure OIDC Web Sign-in section, do the following:
In the Flow type list, select Code .
In the Assertion claims behavior list, select either of the following:
User info and ID token
Only ID token
In the Client secret field, enter the client secret from your IdP.
Optional: If you selected Okta as your IdP, add any extra OIDC scopes in the
Additional scopes beyond openid, profile, and email field.
Click Continue .
In Configure provider , you can configure an attribute mapping
and an attribute condition. To create an attribute mapping ,
do the following. You can provide either the IdP field name or a
CEL-formatted
expression that returns a string.
Required: In OIDC 1 , enter the subject from the IdP— for example,
assertion.sub .
Optional: To add additional attribute mappings, do the following:
Click Add mapping .
In Google n , where n is a number, enter one of
the Google Cloud-supported keys .
In the corresponding OIDC n field, enter the name of the
IdP-specific field to map, in CEL format.
If you selected Microsoft Entra ID as your IdP, you can increase the number of groups.
Select Use Extra Attributes .
In the Extra Attributes Issuer URI field, enter the issuer URL.
In the Extra Attributes Client ID field, enter the client ID.
In the Extra Attributes Client Secret field, enter the client secret.
In the Extra Attributes Type list, select an attribute type for extra attributes.
In the Extra Attributes Filter field, enter a filter expression that is used when querying the Microsoft Graph API for groups.
To create an attribute condition, do the following:
Warning: If your multi-tenant IdP has a single issuer URI, you must use
attribute conditions
to ensure that access is restricted to the correct tenant. For more information, see Use attribute conditions when federating with GitHub or other multi-tenant identity providers .
Click Add condition .
In the Attribute Conditions field, enter a condition in CEL format ;
for example, assertion.role == 'gcp-users' . This example condition ensures that only users with the role gcp-users can sign in using this provider.
To turn on detailed audit logging, in Detailed logging , click the
Enable attribute value audit logging toggle.
Workforce Identity Federation detailed audit logging logs information received from your IdP to Logging. Detailed audit logging can help you troubleshoot your workforce identity pool provider configuration. To learn how to troubleshoot attribute mapping errors with detailed audit logging, see General attribute mapping errors . To learn about Logging pricing, see
Google Cloud Observability pricing .
To disable detailed audit logging for a workforce identity pool provider, omit the --detailed-audit-logging flag when you run gcloud iam workforce-pools providers create . To disable detailed audit logging, you can also update the provider .
To create the provider, click Submit .
In the Google Cloud console, to create an OIDC provider that
uses implicit flow ,
do the following:
In the Google Cloud console, go to the Workforce Identity Pools page:
Go to Workforce Identity Pools
In the Workforce Identity Pools table, select the pool for which
you want to create the provider.
In the Providers section,
click add Add Provider .
In the Select a Provider vendor list, select your IdP.
If your IdP isn't listed, then select Generic Identity Provider .
In Select an authentication protocol , select OpenID Connect (OIDC) .
In the Create a provider section, do the following:
In Name , enter the name for the provider.
In Description , enter the description for the provider.
In Issuer (URL) , enter the issuer URI. The OIDC issuer URI must be in a valid URI format and start with https ; for example,
https://example.com/oidc .
In Client ID , enter the OIDC client ID that is registered
with your OIDC IdP; the ID must match the aud claim of the JWT that is
issued by your IdP.
To create a provider that is enabled, make sure Enable provider is on.
Click Continue .
In the Share your provider information with IdP section, copy the URL.
In your IdP, configure this url as the redirect URI, which informs your IdP
where to send the assertion token after logging in.
Click Continue .
In the Configure OIDC Web Sign-in section, do the following:
In the Flow type list, select ID Token .
In the Assertion claims behavior list, ID token is selected.
Optional: If you selected Okta as your IdP, add any extra OIDC scopes in the
Additional scopes beyond openid, profile, and email field.
Click Continue .
In Configure provider , you can configure an attribute mapping
and an attribute condition. To create an attribute mapping ,
do the following. You can provide either the IdP field name or a
CEL-formatted
expression that returns a string.
Required: In OIDC 1 , enter the subject from the IdP; for example,
assertion.sub .
Optional: To add additional attribute mappings, do the following:
Click Add mapping .
In Google n , where n is a number, enter one of
the Google Cloud-supported keys .
In the corresponding OIDC n field, enter the name of the
IdP-specific field to map, in CEL format.
If you selected Microsoft Entra ID as your IdP, you can increase the number of groups.
Select Use Extra Attributes .
In the Extra Attributes Issuer URI field, enter the issuer URL.
In the Extra Attributes Client ID field, enter the client ID.
In the Extra Attributes Client Secret field, enter the client secret.
In the Extra Attributes Type list, select an attribute type for extra attributes.
In the Extra Attributes Filter field, enter a filter expression that is used when querying the Microsoft Graph API for groups.
To create an attribute condition, do the following:
Warning: If your multi-tenant IdP has a single issuer URI, you must use
attribute conditions
to ensure that access is restricted to the correct tenant. For more information, see Use attribute conditions when federating with GitHub or other multi-tenant identity providers .
Click Add condition .
In the Attribute Conditions field, enter a condition in CEL format ;
for example, assertion.role == 'gcp-users' . This example condition ensures that only users with the role gcp-users can sign in using this provider.
To turn on detailed audit logging, in Detailed logging , click the
Enable attribute value audit logging toggle.
Workforce Identity Federation detailed audit logging logs information received from your IdP to Logging. Detailed audit logging can help you troubleshoot your workforce identity pool provider configuration. To learn how to troubleshoot attribute mapping errors with detailed audit logging, see General attribute mapping errors . To learn about Logging pricing, see
Google Cloud Observability pricing .
To disable detailed audit logging for a workforce identity pool provider, omit the --detailed-audit-logging flag when you run gcloud iam workforce-pools providers create . To disable detailed audit logging, you can also update the provider .
To create the provider, click Submit .
Create a SAML workforce pool provider
In your SAML IdP, register a new application for Google Cloud
Workforce Identity Federation.
Set the audience for SAML assertions.
It is usually the SP Entity ID field in your IdP configuration. You must
set it to the following URL:
https://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID
Set the redirect URL, also known as the Assertion Consumer Service
(ACS) URL. To set the redirect URL, locate the redirect URL field in your
SAML IdP, and do one of the following:
To set up browser-based sign-in through the Google Cloud console or
another browser-based sign-in method, enter following URL:
https://auth.cloud.google/signin-callback/locations/global/workforcePools/ WORKFORCE_POOL_ID /providers/ WORKFORCE_PROVIDER_ID
Replace the following:
WORKFORCE_POOL_ID : the workforce identity pool ID
WORKFORCE_PROVIDER_ID : the ID of the workforce
identity pool provider that you create later in this document.
To set up programmatic sign-in through your IdP, enter the following URL:
localhost
See Set up user access to the console
for more details on configuring console sign-in.
In Google Cloud, create a SAML workforce identity pool provider
using your IdP's SAML metadata document. You can download the SAML metadata
XML document from your IdP. The document must include at least the
following:
A SAML entity ID for your IdP.
The single-sign-on URL for your IdP.
At least one signing public key. See Key requirements
later in this guide for details on signing keys.
gcloud Console
More
To configure the SAML provider using the gcloud CLI, do the
following:
gcloud iam workforce-pools providers create-saml WORKFORCE_PROVIDER_ID \
--workforce-pool = WORKFORCE_POOL_ID \
--display-name = " DISPLAY_NAME " \
--description = " DESCRIPTION " \
--idp-metadata-path = METADATA_FILE_PATH \
--attribute-mapping = " ATTRIBUTE_MAPPING " \
--attribute-condition = " ATTRIBUTE_CONDITION " \
--location = global
Replace the following:
WORKFORCE_PROVIDER_ID : The workforce identity
pool provider ID.
WORKFORCE_POOL_ID : The workforce identity pool
ID.
DISPLAY_NAME The display name for the provider;
for example, idp-eu-employees .
DESCRIPTION : The description for the workforce
identity pool provider; for example, IdP for Partner Example Organization EU employees .
METADATA_FILE_PATH : The path of the SAML
metadata file.
ATTRIBUTE_MAPPING : The attribute mapping ;
for example:
google.subject=assertion.oid
attribute.costcenter=assertion.attributes.costcenter[0]
This example maps the IdP attributes assertion.oid and
assertion.attributes.costcenter[0] to the Google Cloud attributes
google.subject and attribute.costcenter , respectively.
ATTRIBUTE_CONDITION : An attribute condition .
For example, to limit the ipaddr attribute to a certain IP range
you can set the condition assertion.attributes.ipaddr.startsWith('98.11.12.') . This example condition ensures that only users with an IP address that starts with 98.11.12. can sign in using this workforce provider.
It can take a few minutes for the provider to begin accepting requests.
For SAML federation, you can use the following keywords in attribute mappings
and conditions:
assertion.subject : a string equal to the NameID attribute
in the SAML assertion.
assertion.attributes. NAME : a string list equal to
the values of the like-named attributes in the SAML assertion.
Optional: Accept encrypted SAML assertions from your IdP
To enable your SAML 2.0 IdP to produce encrypted SAML
assertions that can be accepted by workforce identity federation, do the following:
In workforce identity federation, do the following:
Create an asymmetric key pair for your workforce identity pool provider.
Download a certificate file that contains the public key.
Configure your SAML IdP to use the public key to encrypt SAML assertions it issues.
In your IdP, do the following:
Enable assertion encryption, also known as token encryption.
Upload the public key that you created in workforce identity federation.
Confirm that your IdP produces encrypted SAML assertions.
Note that, even with SAML encryption provider keys configured, workforce identity federation can still process a plaintext assertion.
Create workforce identity federation SAML assertion encryption keys
This section guides you through creating an asymmetric key pair that enables
workforce identity federation to accept encrypted SAML assertions.
Google Cloud uses the private key to decrypt the SAML assertions that your
IdP issues. To create an asymmetric key pair for use with SAML encryption, run the following command. To learn more, see Supported SAML encryption algorithms .
gcloud iam workforce-pools providers keys create KEY_ID \
--workforce-pool WORKFORCE_POOL_ID \
--provider WORKFORCE_PROVIDER_ID \
--location global \
--use encryption \
--spec KEY_SPECIFICATION
Replace the following:
KEY_ID : a key name of your choice
WORKFORCE_POOL_ID : the pool ID
WORKFORCE_PROVIDER_ID : the workforce identity pool provider ID
KEY_SPECIFICATION : the key specification, which can be one of rsa-2048 , rsa-3072 , and rsa-4096 .
After the key pair is created, to download the public key into a certificate
file, execute the following command. Only workforce identity federation has
access to the private key.
gcloud iam workforce-pools providers keys describe KEY_ID \
--workforce-pool WORKFORCE_POOL_ID \
--provider WORKFORCE_PROVIDER_ID \
--location global \
--format "value(keyData.key)" \
> CERTIFICATE_PATH
Replace the following:
KEY_ID : the key name
WORKFORCE_POOL_ID : the pool ID
WORKFORCE_PROVIDER_ID : the workforce identity pool provider ID
CERTIFICATE_PATH : the path to write the certificate to—for example, saml-certificate.cer or saml-certificate.pem
Configure your SAML 2.0-compliant IdP to issue encrypted SAML assertions
Configure your SAML IdP to use the public certificate downloaded from the
last step to encrypt the SAML assertions that it issues. Consult your IdP
team for specific instructions.
After you configure your IdP to encrypt SAML assertions, we recommend that you check to make sure that the assertions it generates are actually encrypted. Even with SAML assertion encryption configured, workforce identity federation can still process plaintext assertions.
Delete workforce identity federation encryption keys
To delete SAML encryption keys run the following command:
gcloud iam workforce-pools providers keys delete KEY_ID \
--workforce-pool WORKFORCE_POOL_ID \
--provider WORKFORCE_PROVIDER_ID \
--location global
Replace the following:
KEY_ID : the key name
WORKFORCE_POOL_ID : the pool ID
WORKFORCE_PROVIDER_ID : the workforce identity pool provider ID
Supported SAML encryption algorithms
Workforce identity federation supports the following key transport algorithms:
http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p
http://www.w3.org/2009/xmlenc11#rsa-oaep"
http://www.w3.org/2001/04/xmlenc#rsa-1_5"
Workforce identity federation supports the following block encryption algorithms:
http://www.w3.org/2001/04/xmlenc#aes128-cbc
http://www.w3.org/2001/04/xmlenc#aes192-cbc
http://www.w3.org/2001/04/xmlenc#aes256-cbc
http://www.w3.org/2009/xmlenc11#aes128-gcm
http://www.w3.org/2009/xmlenc11#aes256-gcm
SAML X.509 signing key requirements
The following key specifications apply to SAML X.509 signing keys:
An RSA public key that is wrapped in an X.509 v3 certificate .
Certificate validity requirements:
notBefore : a timestamp that is no more than 7 days in the future
notAfter : a timestamp that is no more than 25 years in the future
Recommended algorithms:
RSAwithSHA256
(supported key sizes (bits): 2048, 3072, 4096)
ECDSAwithSHA256
A workforce identity pool provider can be configured with at most three
signing keys at a given time. When multiple keys exist, Google Cloud
iterates through them and attempts to use each non-expired key to fulfill a
token exchange request.
As a security best practice, we strongly recommend that you don't reuse the
same key pair with other services.
Key management
Important: To ensure that your workforce users' access isn't disrupted when
your keys expire, we recommend that you regularly update your keys. The public
signing keys used to validate SAML assertion signatures have an expiration
date. After the expiration date, the keys can't be used for token exchanges.
To update your IdP's signing keys, do the following:
Create a new asymmetric key pair and configure the SAML identity
provider with the key pair. You initially mark it as inactive before
activating it in a later step.
Download a SAML metadata XML document from your IdP.
Update the workforce identity pool provider resource using the SAML
metadata document. When multiple keys exist, Google Cloud iterates
through each non-expired key and attempts to use each one to fulfill a token
exchange request.
To update the workforce identity pool provider with the SAML metadata,
execute the following command.
gcloud iam workforce-pools providers update-saml WORKFORCE_PROVIDER_ID \
--workforce-pool = WORKFORCE_POOL_ID \
--idp-metadata-path = SAML_METADATA_FILE_PATH \
--location = global
Replace the following:
WORKFORCE_PROVIDER_ID : the workforce identity
pool provider ID
WORKFORCE_POOL_ID : the workforce identity pool
ID
SAML_METADATA_FILE_PATH : the path to the SAML
metadata file
Wait for the operation returned from the previous step to complete
(the operation is marked as done), and then in your SAML IdP,
activate the new signing key. The old signing key is marked as inactive.
Assertions issued by your IdP are signed using the new key.
The following steps are optional, but we recommend that you perform them as a best
practice:
Delete the old, now inactive, signing key from your IdP.
Download the SAML metadata XML document from your IdP.
Update the workforce identity pool provider resource using the SAML
metadata document. Google Cloud refuses assertions that are signed
with the expired signing key. To update the document, execute the
following command:
gcloud iam workforce-pools providers update-saml WORKFORCE_PROVIDER_ID \
--workforce-pool = WORKFORCE_POOL_ID \
--idp-metadata-path = SAML_METADATA_FILE_PATH \
--location = global
Replace the following:
WORKFORCE_PROVIDER_ID : the workforce identity
pool provider ID
WORKFORCE_POOL_ID : the workforce identity pool
ID
SAML_METADATA_FILE_PATH : the SAML metadata path
Key deletion constraint
Google Cloud refuses assertions signed with a deleted key.
Caution: Accidentally deleting a key that is still in use can lead to
outages. You can only update a workforce identity pool provider resource if
the SAML metadata contains at least one non-expired signing key. This
restriction is skipped if all existing signing keys are expired.
To configure the SAML provider using the Google Cloud console, do the
following:
In the Google Cloud console, go to the Workforce Identity Pools page:
Go to Workforce Identity Pools
In the Workforce Identity Pools table, select the pool for which you
want to create the provider.
In the Providers section, click add Add Provider .
In the Select a Provider vendor list, select your IdP.
If your IdP isn't listed, then select Generic Identity
Provider .
In Select an authentication protocol , select SAML .
In the Create a provider section, do the following:
In Name , enter a name for the provider.
Optional: In Description , enter a description for the provider.
In IDP metadata file (XML) , select the metadata
XML file that you generated earlier in this guide.
To create a provider that is enabled, make sure Enable provider is on.
Click Continue .
In the Share your provider information section, copy the URLs.
In your IdP, configure the first URL as the entity ID, which identifies your application to IdP.
Configure the other URL as the redirect URI, which informs your IdP where to send the
assertion token after logging in.
Click Continue .
In the Configure provider section, do the following:
In Attribute mapping , enter a CEL expression for
google.subject .
Optional: To enter other mappings, click Add mapping and
enter other mappings—for example:
google.subject=assertion.oid
attribute.costcenter=assertion.attributes.costcenter[0]
This example maps the IdP attributes assertion.oid and
assertion.attributes.costcenter[0] to the Google Cloud attributes
google.subject and attribute.costcenter , respectively.
If you selected Microsoft Entra ID as your IdP, you can increase the number of groups by doing the following:
Select Use Extra Attributes .
In the Extra Attributes Issuer URI field, enter the issuer URL.
In the Extra Attributes Client ID field, enter the client ID.
In the Extra Attributes Client Secret field, enter the client secret.
In the Extra Attributes Type list, select an attribute type for extra attributes.
In the Extra Attributes Filter field, enter a filter expression that is used when querying the Microsoft Graph API for groups.
Optional: To add an attribute condition, click Add condition
and enter a CEL expression representing an attribute condition.
For example, to limit the ipaddr attribute to a certain IP range
you can set the condition assertion.attributes.ipaddr.startsWith('98.11.12.') . This example condition ensures that only users with an IP address that starts with 98.11.12. can sign in using this workforce provider.
Warning: If your multi-tenant IdP has a single issuer URI, you must use
attribute conditions
to ensure that access is restricted to the correct tenant. For more information, see Use attribute conditions when federating with GitHub or other multi-tenant identity providers .
Click Continue .
To turn on detailed audit logging, in Detailed logging , click the
Enable attribute value audit logging toggle.
Workforce Identity Federation detailed audit logging logs information received from your IdP to Logging. Detailed audit logging can help you troubleshoot your workforce identity pool provider configuration. To learn how to troubleshoot attribute mapping errors with detailed audit logging, see General attribute mapping errors . To learn about Logging pricing, see
Google Cloud Observability pricing .
To disable detailed audit logging for a workforce identity pool provider, omit the --detailed-audit-logging flag when you run gcloud iam workforce-pools providers create . To disable detailed audit logging, you can also update the provider .
To create the provider, click Submit .
Verify your provider configuration
Before testing the end-user sign-in flow, you can verify that your provider configuration is correct and that Google Cloud can exchange tokens with your IdP.
The Validate your provider attributes page in the Google Cloud console includes an attributes viewer that lets you
interactively test your configuration and debug Common Expression
Language (CEL) expressions. You can use the attributes viewer to do
the following:
View the raw attributes sent in the IdP assertion.
Verify that your attribute mappings and conditions correctly transform
those attributes.
Debug complex CEL expressions in real time.
To verify your provider configuration, do the following:
To enable the browser-based sign-in flow for Workforce Identity Federation, add https://auth.cloud.google/signin-callback/locations/global/workforcePools/ POOL_ID /providers/ PROVIDER_ID to your IdP's list of allowed redirect URIs.
In the Google Cloud console, go to Workforce Identity Pools .
Go to Workforce Identity Pools
From the list of pools, click the name of the pool you want to verify.
In the Workforce pool details page, click the name of the IdP you want
to verify.
In the Provider Details page, click Debug IdP token .
In the Sign in dialog, sign in to your IdP as a test user.
The Validate your provider attributes page displays the mapped attributes
and the result of your attribute condition.
The Mapped attributes from your IdP token section displays how Google attributes, such as
google.subject , are populated from your IdP's token based on your
mapping configuration. An error icon appears if a mapping is incorrect.
The Attribute condition section shows the boolean result of your
condition. If the condition evaluates to false , the sign-in is
blocked.
To view the full assertion token, click View full token . This shows the raw JSON object from your IdP. Reference a
top-level property in your mappings using the format
assertion.PROPERTY_NAME .
Edit your provider configuration
To correct any errors, you can edit the configuration:
In the Validate your provider attributes page, click
edit
Edit .
Make the necessary changes.
To start a new test and see the updated results, click Save and refetch token .
Workforce principal identifiers for IAM policies
The following table shows the principal identifiers that you can use to grant roles
to individual users and groups of users.
Identities
Identifier format
Single identity in a workforce identity pool
principal://iam.googleapis.com/locations/global/workforcePools/ POOL_ID /subject/ SUBJECT_ATTRIBUTE_VALUE
All workforce identities in a group
principalSet://iam.googleapis.com/locations/global/workforcePools/ POOL_ID /group/ GROUP_ID
All workforce identities with a specific attribute value
principalSet://iam.googleapis.com/locations/global/workforcePools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
All identities in a workforce identity pool
principalSet://iam.googleapis.com/locations/global/workforcePools/ POOL_ID /*
For a complete list of principal identifiers, see
Principal identifiers .
Grant IAM roles to principals
You can grant roles to principals, such as single identities, groups of
identities, or an entire pool.
To grant a role on a project to a principal, execute the following command:
gcloud projects add-iam-policy-binding PROJECT_ID \
--role = " ROLE " \
--member = " PRINCIPAL "
Replace the following:
PROJECT_ID : the project ID
ROLE : the role to grant
PRINCIPAL : the principal; see Principal identifiers for Workforce Identity Federation.
In the example that follows, the command grants the Storage Admin role
( roles/storage.admin ) to all identities within the group
GROUP_ID :
gcloud projects add-iam-policy-binding my-project \
--role = "roles/storage.admin" \
--member = "principalSet://iam.googleapis.com/locations/global/workforcePools/ WORKFORCE_POOL_ID /group/ GROUP_ID "
For more information about the principal format, see Principal identifiers
for Workforce Identity Federation.
Delete users
Workforce Identity Federation creates user metadata and resources for
federated user identities. If you choose to delete users in your IdP you must
also explicitly delete these resources in Google Cloud.
To do so, see Delete Workforce Identity Federation users and their data .
You might see resources continue to be associated with a user that was deleted.
This is because deleting user metadata and resources requires a long-running
operation. After you initiate a deletion of a user's identity, processes that
the user initiated before the deletion can continue to run until the processes
complete or are canceled.
What's next
Configure SCIM in OIDC or SAML IdP
Obtain short-lived credentials for Workforce Identity Federation
Manage workforce identity pool providers
Delete Workforce Identity Federation users and their data
Learn which Google Cloud products support Workforce Identity Federation
Set up user access to console (federated)
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

---
title: "Troubleshoot Workload Identity Federation \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/troubleshooting-workload-identity-federation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/troubleshooting-workload-identity-federation
  title: "Troubleshoot Workload Identity Federation \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshoot Workload Identity Federation | Identity and Access Management (IAM) | Google Cloud Documentation
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
Google Cloud API does not accept the credential issued from SecurityTokenService
Allowlist an identity provider for use with Workload Identity Federation
Input JWK is not in a valid json format
Error connecting to the given credential's issuer
Mapped google.subject claim exceeds the 127 bytes limit
Error 429 Too Many Requests
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Troubleshoot Workload Identity Federation
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Google Cloud API does not accept the credential issued from SecurityTokenService
Allowlist an identity provider for use with Workload Identity Federation
Input JWK is not in a valid json format
Error connecting to the given credential's issuer
Mapped google.subject claim exceeds the 127 bytes limit
Error 429 Too Many Requests
This page describes resolutions for common Workload Identity Federation
errors.
Google Cloud API does not accept the credential issued from Security Token Service
Access tokens returned by the
SecurityTokenService API
are
federated access tokens .
Although most Google Cloud APIs support identity federation, certain API
methods might have limitations. For a list of limitations, see
Identity federation: products and limitations .
If you encounter the following error, you might be attempting to use a
federated access token with a service that doesn't support them.
See more code actions.
Light code theme
Dark code theme
{
"error" : {
"code" : 401 ,
"message" : "Request had invalid authentication credentials. Expected OAuth 2 access token, login cookie or other valid authentication credential. See https://developers.google.com/identity/sign-in/web/devconsole-project." ,
"status" : "UNAUTHENTICATED" ,
}
}
To resolve this error, exchange the federated access token for an unrestricted
access token by calling
GenerateAccessToken .
For more information, see Obtaining short-lived credentials with identity
federation .
Allowlist an identity provider for use with Workload Identity Federation
If you attempt to configure a disallowed identity provider as a workload
identity pool provider, you encounter the following error:
FAILED_PRECONDITION: Precondition check failed.
- '@type': type.googleapis.com/google.rpc.PreconditionFailure
violations:
- description: "Org Policy violated for value: '{PROVIDER}'."
subject: orgpolicy:projects/{PROJECT}/locations/global/workloadIdentityPools/{POOL}
type: constraints/iam.workloadIdentityPoolProviders
To resolve this issue, follow the directions on
Restrict identity provider configuration
to allowlist the identity provider for use with Workload Identity Federation.
Input JWK is not in a valid json format
If you are configuring an OIDC provider and you receive the error Input JWK is
not in a valid json format , it can be because endpoints that are secured with
self-signed certificates aren't supported by Google Cloud. Specifically,
the x5c and x5t fields aren't supported and must be removed from the OIDC
JWK.
To resolve issues with your JWK, do the following:
Edit your JWK and remove the x5c (X.509 Certificate Chain) and x5t
(X.509 Certificate SHA-1 Thumbprint) fields.
{
"kty" : "RSA" ,
"use" : "sig" ,
"kid" : "example-key-id" ,
"alg" : "RS256" ,
"n" : "base64url-modulus" ,
"e" : "AQAB"
}
Verify that the remaining JWK fields are properly formatted as described in
the OIDC specification .
Configure the OIDC provider with the updated JWK.
Error connecting to the given credential's issuer
If you receive the following error, it might be because Google Cloud is unable to
fetch your IdP's OIDC metadata document or JWKS:
{
"error" : "invalid_grant" ,
"error_description" : "Error connecting to the given credential's issuer."
}
This error usually occurs because the endpoints aren't configured to be
reachable from the public internet. To resolve this error, check that the OIDC
endpoint is publicly available and compliant with the OIDC specification. For
more information, see Preparing the external identity provider .
If you still receive the error, check that the token issuer, the iss claim in
the token correct.
Mapped google.subject claim exceeds the 127 bytes limit
If you receive the following error, it's because the incoming credentials received by the
SecurityTokenService API
generate a google.subject claim that exceeds the character limit:
{
"error" : "invalid_request" ,
"error_description" : "The size of mapped attribute google.subject exceeds the 127 bytes limit. Either modify your attribute mapping or the incoming assertion to produce a mapped attribute that is less than 127 bytes."
}
To resolve this issue, use the extract function
to remove unnecessary characters and extract a unique subject identifier from a
longer claim, for example:
google.subject=assertion.sub.extract('/users/{sub_claim}')
Error 429 Too Many Requests
If you receive the error 429 Too Many Requests , while requesting a token from the SecurityTokenService API, it
means that your Google Cloud project has exceeded its rate quota limit for the
API.
The error includes a message similar to the following:
{
"error" : "quota_exceeded" ,
"error_description" : "The request was throttled due to rate limit: sts.googleapis.com/requests. Please retry after a few seconds."
}
To resolve this issue, identify the sts.googleapis.com/requests metric name
provided in the error message, locate the corresponding metric name in the
IAM Quota page , confirm that the usage
percentage exceeds the quota, and then request a quota increase.
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

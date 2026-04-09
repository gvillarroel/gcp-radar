---
title: "Troubleshoot Workforce Identity Federation \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/troubleshooting-workforce-identity-federation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/troubleshooting-workforce-identity-federation
  title: "Troubleshoot Workforce Identity Federation \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshoot Workforce Identity Federation | Identity and Access Management (IAM) | Google Cloud Documentation
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
Inspect the IdP response
Review logs
Workforce pool and provider management errors General attribute mapping errors
Permission denied
INVALID_ARGUMENT: Missing OIDC web single sign-on config
Rate limit exceeded, please try again later
Sign-in errors Common sign-in errors
Extra attributes sign-in errors
OIDC sign-in errors
SAML sign-in errors
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Troubleshoot Workforce Identity Federation
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Inspect the IdP response
Review logs
Workforce pool and provider management errors General attribute mapping errors
Permission denied
INVALID_ARGUMENT: Missing OIDC web single sign-on config
Rate limit exceeded, please try again later
Sign-in errors Common sign-in errors
Extra attributes sign-in errors
OIDC sign-in errors
SAML sign-in errors
This page shows you how to resolve common issues with Workforce Identity Federation .
Inspect the Id P response
This section shows you how to inspect the response from your identity provider
(IdP) to troubleshoot issues listed in this document.
Browser-based sign-in gcloud CLI
More
To inspect the response returned by your IdP, generate a
HAR file
using a tool of your choice. For example, you can use
Google Admin Toolbox HAR Analyzer ,
which provides instructions for generating a HAR file and the tools to
upload and analyze it.
Important: If you are requesting the HAR file from your users, request that
they clean up any personally identifiable information (PII) and cookies from
the HAR file before sending it.
SAML OIDC
More
To inspect the SAML IdP response, perform the following steps:
Locate the value of SAMLResponse request parameter in the HAR file
that is logged against the URL with path /signin-callback .
Decode it using a tool of your choice—for example, you can use
Google Admin Toolbox Encode/Decode .
To inspect the OIDC IdP response, perform the following steps. This approach
doesn't work with code flow.
Look for the id_token request parameter in the HAR file that is
logged against a URL with path /signin-callback .
Decode it using a JWT debugging tool of your choice.
To inspect the response from your IdP when using the gcloud CLI,
copy the contents of the file that you passed in the
--credential-source-file flag when running the
gcloud iam workforce-pools create-cred-config command, then perform the
following steps:
SAML OIDC
More
Decode the SAML IdP response using a tool of your choice—for example, you
can use
Google Admin Toolbox Encode/Decode .
Decode the OIDC IdP response using a JWT debugging tool of your choice.
Review logs
To determine whether Google Cloud is communicating with your IdP and
review transaction information, you can inspect the Cloud Audit Logs logs.
To see log examples, see Example audit logs .
Workforce pool and provider management errors
This section provides suggestions to fix common errors that you might encounter
when managing pools and providers.
General attribute mapping errors
To troubleshoot workforce identity pool provider attribute mapping issues
by doing the following:
Inspect the attributes, otherwise known as claims, in your IdP configuration.
Verify how your attribute mappings convert IdP attributes into Google Cloud
attributes and how your conditions evaluate those attributes to allow or deny access
in the Google Cloud console.
Ensure that you have the IAM Workforce Pool Editor ( roles/iam.workforcePoolEditor ) role.
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
To correct any errors, you can edit the configuration:
In the Validate your provider attributes page, click
edit
Edit .
Make the necessary changes.
To start a new test and see the updated results, click Save and refetch token .
Inspect tokens that are generated from your IdP. To learn how to generate a
token from your IdP, consult your IdP's documentation.
Review Workforce Identity Federation detailed audit logging in
Cloud Audit Logs.
Detailed audit logging logs authentication and authorization errors alongside
claims that were received by Workforce Identity Federation.
You can enable detailed audit logging when you create your workforce identity pool
provider. To enable detailed audit logging, add the --detailed-audit-logging
flag when you create your workforce identity pool provider.
Permission denied
This error occurs when the user attempting to configure
Workforce Identity Federation doesn't have the role IAM Workforce Pool Admin ( roles/iam.workforcePoolAdmin ).
INVALID_ARGUMENT: Missing OIDC web single sign-on config
The following error occurs when the web-sso-response-type and web-sso-assertion-claims-behavior fields are not set when creating an OIDC
workforce identity pool provider:
ERROR: (gcloud.iam.workforce-pools.providers.create-oidc) INVALID_ARGUMENT: Missing OIDC web single sign-on config.
To resolve this error, follow the steps in the
Create a provider
section to set the fields appropriately when you create the OIDC workforce
identity pool provider.
Rate limit exceeded, please try again later
This error occurs when you have reached your quota limit for workforce pool
resources. Contact your Google Cloud account representative to request a
quota increase.
Sign-in errors
This section provides suggestions to fix common errors that a
Workforce Identity Federation user might encounter when they sign in.
Common sign-in errors
The given credential is rejected by the attribute condition
This error occurs when the
attribute condition
that is set on the workforce identity pool provider was not met.
For example, consider the following attribute condition:
SAML OIDC
More
'gcp-users' in assertion.attributes.groups
'gcp-users' in assertion.groups
In this case, you see the error if the list of groups sent in the groups
attribute by your IdP doesn't contain gcp-users .
To resolve this error, perform the following steps:
Describe the provider
that was used to sign in, and check that the attributeCondition is
correct. For information on operations that are supported in conditions, see
the
Language Definition .
Follow the steps in inspect the IdP response to see
the attributes that are returned by the IdP, and confirm if the attribute
condition is well-formed and accurate.
Sign in to your IdP's admin console, and check if the IdP attributes
referenced in the attribute condition are set up correctly. If necessary,
consult your IdP's documentation.
The mapped attribute must be of type STRING
This error occurs for a SAML workforce identity pool provider when the attribute
specified in the error message is expected to be a single-valued STRING, but it
is mapped to a list in the attribute mapping .
For example, consider a SAML workforce identity pool provider that has the
attribute mapping, attribute.role=assertion.attributes.userRole . In a SAML
assertion, an Attribute can have multiple AttributeValue tags as shown in
the example that follows. Thus, all SAML attributes are considered lists, so
assertion.attributes.userRole is a list.
< saml:Attribute Name="userRole" >
< saml:AttributeValue >
security-admin
< /saml:AttributeValue >
< saml:AttributeValue >
user
< /saml:AttributeValue >
< /saml:Attribute >
In this example, you might see the following error:
The mapped attribute 'attribute.role' must be of type STRING
To resolve this issue, perform the following steps:
Describe the provider
that was used to sign in, and identify the IdP attribute that is set in the
attributeMapping . Check the attribute against the attribute presented in
the error message. In the previous example, an IdP attribute called
userRole is mapped to the role attribute and the role attribute
appears in the error sample above.
Follow guidance below to update the attribute mapping:
Note: Only google.groups accepts a list.
If the attribute that causes the error is list valued, identify an
alternative, stable, string-valued attribute. Then, update the attribute
mapping to use it by referencing its first item. For the previous example,
if myRole was identified as the alternative single-valued IdP attribute,
then, the attribute mapping would be:
attribute.role=assertion.attributes.myRole[0]
Alternatively, if the attribute is known to be single-valued, update the
attribute mapping to use the first item from the list.
For the previous example, if userRole contains only one role, you can
use the following mapping:
attribute.role=assertion.attributes.userRole[0]
To derive a single-valued, stable identifier from the list, see
Language Definition
and update your attribute mapping accordingly.
See the inspect the IdP response section to see the
response that is returned by the IdP.
Could not obtain a value for google.subject from the given credential
This error occurs when the required claim google.subject couldn't be mapped
using the
attribute mapping
that you set in your workforce identity pool provider configuration.
To resolve this error, perform the following steps:
Describe the provider ,
and inspect the attributeMapping . Identify the mapping that is configured
for google.subject . If the mapping is not correct, update the workforce
identity pool provider.
See the inspect the IdP response section to see the
response returned by the IdP. Inspect the value of the attribute from IdP
response that is mapped to google.subject in your attribute mappings.
If the value is empty or incorrect, log in to your IdP's admin console, and
inspect the configured attributes. For the attributes, check if your
affected user has corresponding data in your IdP. Update your IdP
configuration to correct the attributes or user information accordingly.
Retry sign-in.
Size of mapped attributes exceeds the limit
The following error occurred when a federated user attempts to sign in:
The size of the entire mapped attributes exceeds the 16 KB limit.
To resolve this issue, ask your IdP administrator to reduce the number of
attributes that your IdP emits. Your IdP only needs to emit attributes
that are needed to federate users to Google Cloud. To learn more about
attribute mapping limits, see attribute mappings .
For example, if your IdP emits a large number of google.groups that are mapped
attributes in your workforce identity pool provider, a sign-in attempt can fail.
Ask your administrator to restrict the number of groups that your IdP emits.
Count of groups exceeds the limit
The following error occurred when a federated user attempts to sign in:
The current count of GROUPS_COUNT mapped attribute google.groups exceeds the GROUPS_COUNT_LIMIT count limit. Either modify your attribute mapping or the incoming assertion to produce a mapped attribute that has fewer than GROUPS_COUNT_LIMIT groups.
This error includes the following values:
GROUPS_COUNT : the count of groups that the IdP emits
GROUPS_COUNT_LIMIT : Google Cloud's count limit
for groups
This error occurred when the number of groups emitted by the IdP exceeds
Google Cloud's limit. Groups are mapped to Google Cloud using
the attribute google.groups .
To resolve this issue, ask your administrator to reduce the number of groups
that your IdP emits. Your IdP only needs to emit groups that are used to
federate users to Google Cloud. Learn more about groups-related limits
in attribute mappings .
SCIM tenant couldn't be found
This error occurs when a user tries to sign in using a workforce identity pool
provider that's configured to use SCIM, but no SCIM tenant is configured
for that provider.
When this occurs, users get the following error when they try to sign in:
There was an issue signing in with your identity provider.
To resolve this error, do the following:
Configure a SCIM tenant and token on Google Cloud .
Link the provider to a SCIM tenant .
400. That's an error
This error occurs when either the request wasn't received as expected or it was
malformed.
To resolve this error, perform the following steps:
Follow the steps in
Inform your users how to sign in
section to verify if you are following the correct steps to sign in.
Compare your workforce identity pool provider configuration with your IdP
configuration.
Extra attributes sign-in errors
This section provides suggestions to fix errors when using extra attributes .
Login fails when extra attributes are configured
If you have configured extra attributes, any configuration
issue—such as an incorrect client ID, client secret, or issuer URI—causes the
sign-in attempt to fail.
To resolve this error, perform the following steps:
Describe the provider
and verify that the client ID and issuer URI are correct.
Verify that the client secret is valid and hasn't expired.
In your IdP, verify that the application has the required permissions .
Groups from SAML or OIDC assertion are ignored
When extra attributes are configured, Workforce Identity Federation
ignores any group information provided directly in the SAML or OIDC claims. Instead,
it only uses the groups fetched using the backchannel (for example, using the Microsoft
Graph API).
If your users aren't seeing the expected groups, ensure that the groups are correctly
retrieved using the backchannel and that any attribute filters
are configured correctly.
OIDC sign-in errors
This section provides suggestions to fix OIDC specific errors that a
Workforce Identity Federation user might encounter when they sign in.
Error connecting to the given credential's issuer
This error occurs when an OIDC workforce identity pool provider is unable to
reach the OIDC discovery document or JWKS URI.
To resolve this error, perform the following steps:
Describe the provider ,
and inspect the configured issuerUri . Construct the discovery document
URL by appending /.well-known/openid-configuration to your issuer URI. For
example, if your issuerUri is https://example.com , the discovery
document URL would be
https://example.com/.well-known/openid-configuration .
Open the discovery document URL in an incognito browsing window.
If the URL doesn't open or the browser displays a 404 error, consult
your IdP's documentation to identify the correct issuer URI. If
necessary, update the issuerUri in your workforce identity pool
provider.
If your IdP is running on premises, consult your IdP's documentation to
provision it for access over the internet.
If the URL opens, check for the following conditions:
Check that the URL doesn't redirect too many times before serving the
discovery document. If it does, consult with your IdP's administrator
to remedy the issue.
Check the IdP response time. Consult with your IdP administrator to
reduce the response latency.
The opened discovery document should be in the
JSON
format.
Look for a jwks_uri field in the JSON.
Verify that the associated URL value also opens.
Verify that the URL satisfies the conditions as described earlier
in this guide.
Retry sign-in.
SAML sign-in errors
This section provides suggestions to fix SAML specific errors that a
Workforce Identity Federation user might encounter when they sign in.
Failed to verify the signature in SAMLResponse
This error occurs for a SAML workforce identity pool provider when the signature
on the IdP response cannot be verified using any of the X.509 certificates
provided in the IdP metadata XML that you configured in your workforce identity
pool provider. A common cause of this error is that the verification certificate
on your IdP was rotated, but you did not update the workforce identity pool
provider configuration with the latest IdP metadata XML file.
To resolve this error, perform the following steps:
Optional: follow the steps in inspect the IdP response
to see the response returned by the IdP and locate the X509Certificate
field in it.
Describe the provider
that you used to sign in, and inspect the X509Certificate field present in
the idpMetadataXml value that is set on workforce identity pool provider.
Compare the certificate with the one seen in the response returned
by your IdP. The certificates must match.
Log in to your IdP's admin console, and download the latest metadata XML.
Update the workforce identity pool provider with the downloaded IdP metadata
XML.
Retry sign-in.
Recipient in SAML assertion is not set to the correct ACS URL
This error occurs for a SAML workforce identity pool provider when the IdP
response contains an incorrect value for the Recipient field on the
SubjectConfirmationData tag.
To resolve this error, update the Recipient URL / Redirect URL or the
equivalent field in your IdP's configuration to use the redirect URL described
in the
Set up redirect URLs in your IdP ,
and retry sign-in.
Follow the steps in inspect the IdP response to see the
response returned by the IdP, and confirm that the Recipient field is
correct.
For example, for the workforce identity pool provider locations/global/workforcePools/example-pool/providers/example-provider ,
the Recipient containing the redirect URL appears in the IdP's SAML response
as follows:
<SubjectConfirmationData Recipient="https://auth.cloud.google/signin-callback/locations/global/workforcePools/example-pool/providers/example-provider"
SAMLResponse destination does not match RP callback URL
This error occurs for a SAML workforce identity pool provider when the IdP
response contains an incorrect value for the Destination field on the
Response tag.
To resolve this error, update the Destination URL / Redirect URL or the
equivalent field in your IdP's configuration to use the redirect URL described
in
Set up redirect URLs in your IdP .
Follow the steps in inspect the IdP response to see the
response returned by the IdP and confirm that the Destination field is
correct.
For example, for a workforce identity pool provider
locations/global/workforcePools/example-pool/providers/example-provider , the
Destination containing redirect URL would appear in the IdP's SAML response as
follows:
<Response Destination="https://auth.cloud.google/signin-callback/locations/global/workforcePools/example-pool/providers/example-provider"
Invalid assertion: missing or empty NameID
This error occurs when the SAML response received from your IdP doesn't contain
the NameId field or it has an empty value.
To resolve this error, consult your IdP documentation to configure it to send
the NameID which is the subject of a SAML assertion, typically the user who
is being authenticated.
Note: NameID is required even if you decide to map a different attribute to
google.subject in the attribute mapping.
Follow the steps in inspect the IdP response to see the
response returned by the IdP and the NameID that is set on it.
All <AudienceRestriction> s should contain the SAML RP entity ID
This error occurs when the AudienceRestriction tags in the SAML response from
your IdP doesn't set an Audience tag with value that represented the entity
ID of the workforce identity pool provider.
To resolve this error, perform the following steps:
Consult your IdP documentation on how to configure the audience in the
AudienceRestriction tags that it sends in the SAML response. Typically,
the audience is configured by setting up Entity ID or Audience field in
your IdP configuration. See
Create a workforce identity pool provider's
SAML section to see the value SP Entity ID that should be set.
After updating your IdP configuration, retry sign-in.
Follow the steps in inspect the IdP response to see the
response returned by the IdP and the AudienceRestriction s that are set on it.
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

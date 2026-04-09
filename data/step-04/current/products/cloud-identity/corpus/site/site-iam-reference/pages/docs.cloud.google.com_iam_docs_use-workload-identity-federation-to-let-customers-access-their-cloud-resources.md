---
title: "Let customers access their Google Cloud resources from your product or service\
  \ \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/use-workload-identity-federation-to-let-customers-access-their-cloud-resources
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/use-workload-identity-federation-to-let-customers-access-their-cloud-resources
  title: "Let customers access their Google Cloud resources from your product or service\
    \ \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Let customers access their Google Cloud resources from your product or service | Identity and Access Management (IAM) | Google Cloud Documentation
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
Architecture
Requirements
Best practices Distinguish between identity and access tokens
Expose ID tokens in a way that's compatible with client libraries
Use tenant-specific issuer URLs
Allow users to specify the ID token audience
Use immutable, non-reusable identifiers in ID token claims
Include context information in ID tokens
Limit ID token lifetime to 60 minutes
What's next
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Let customers access their Google Cloud resources from your product or service
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Architecture
Requirements
Best practices Distinguish between identity and access tokens
Expose ID tokens in a way that's compatible with client libraries
Use tenant-specific issuer URLs
Allow users to specify the ID token audience
Use immutable, non-reusable identifiers in ID token claims
Include context information in ID tokens
Limit ID token lifetime to 60 minutes
What's next
This document describes requirements and best practices that you can follow to
let customers use your product to access their resources in Google Cloud
without using service account keys .
If you offer a product or operate a service that lets customers analyze or manage
data or resources, then your customers might want to access data or other
resources in their Google Cloud environment. Examples
for such products and services include the following:
Data analytics products : Your customers might want to use such products
to analyze their data in BigQuery.
CI/CD products and services : Your customers might use such services to
deploy infrastructure and applications to their Google Cloud projects.
Robotic process automation (RPA) : Your customers might use RPA for
workflows such as creating projects, managing access, or automating
administrative tasks in Google Cloud.
To authenticate on-premises or software-as-a-service (SaaS) products to Google Cloud,
customers have conventionally relied on service account keys, but these keys can be
challenging to manage and store securely .
As a vendor of an on-premises or SaaS product, you can help your customers protect
their Google Cloud resources by letting them use Workload Identity Federation
to access their Google Cloud resources. Examples for services that already
let their customers use Workload Identity Federation include
Terraform Cloud, GitHub ,
and GitLab
This document describes how you can extend your product to support
Workload Identity Federation, and describes best practice that you can follow.
This document assumes that you're familiar with Workload Identity Federation
and OpenID Connect .
Architecture
The intent of Workload Identity Federation is to remove the need for service account
keys by letting your customers federate your product or service with their
Google Cloud environment. Your customers can then access their
Google Cloud resources using an identity asserted by your product or service.
To let your customers use Workload Identity Federation, your product or service
must implement a subset of OpenID Connect. In particular, you must allow
workloads to obtain an ID token that meets the following criteria:
The token identifies the workload within your product or platform
The token identifies the instance, tenant, or installation of your product or platform
The token contains a cryptographic signature that Workload Identity Federation can use
to verify the token's authenticity
Requirements
To support Workload Identity Federation, you must ensure that your product or
service meets the following requirements:
Workloads have access to a valid ID token.
At any time during their lifecycle, a workload must have access to
an ID token that asserts the identity of the workload and complies with the
requirements defined by OpenID Connect 1.0 .
Because ID tokens have a limited lifespan, you must ensure that an ID token
either outlives its workload, or that workloads can periodically obtain new ID tokens.
ID tokens uniquely identify the workload.
The ID token must contain at least one claim that uniquely identifies the
workload. The workload identifier must be immutable.
For products or services that support multi-tenancy, the token must also contain
at least one claim that uniquely identifies the tenant. The tenant identifier must also be immutable.
ID tokens are signed, but not encrypted.
OpenID provider metadata is publicly accessible and can be discovered from ID tokens.
You must provide an OpenID provider configuration document on a publicly
accessible endpoint that can be discovered using the OpenID issuer discovery protocol .
For example, if ID tokens contain an iss claim with the value
https://service.example.com/v1/ , then you must provide an OpenID provider
configuration document on https://service.example.com/v1/.well-known/openid-configuration ,
and the endpoint must be publicly accessible over the internet from any IP address.
Signing keys are publicly accessible and can be discovered from OpenID provider metadata.
You must provide a JSON Web Key Set (JWKS)
document on a publicly accessible endpoint that can be discovered from the
jwks_uri field in the OpenID provider metadata.
Best practices
When extending your product or service to support Workload Identity Federation,
consider the following best practices.
Best practices :
Distinguish between identity and access tokens .
Expose ID tokens in a way that's compatible with client libraries .
Use tenant-specific issuer URLs .
Allow users to specify the ID token audience .
Use immutable, non-reusable identifiers in ID token claims .
Include context information in ID tokens .
Limit ID token lifetime to 30-60 minutes .
Distinguish between identity and access tokens
Within the context of Workload Identity Federation, the purpose of an ID token is
to assert the identity of the workload: The token must contain sufficient
information for Workload Identity Federation to identify the workload, and to
distinguish it from other workloads.
In contrast to ID tokens, access tokens typically serve a different purpose:
They are used for making access decisions and might contain information about
what permissions a workload has, or which APIs it is allowed to access.
If your product or service uses access tokens for purposes such as
letting workloads call your product's API, then these access tokens might not
be well suited for Workload Identity Federation. Instead of repurposing access
tokens as ID tokens, consider introducing a second type of token that matches
the definition of an ID token, and let workloads use the ID token for
Workload Identity Federation.
Expose ID tokens in a way that's compatible with client libraries
The Google Cloud client libraries can automatically obtain ID tokens
from multiple sources, including the following:
An HTTP endpoint (URL-sourced credentials)
A local file (file-sourced credentials)
To obtain ID tokens from other sources, your customers might need to modify their
code, or deploy additional tools or libraries. By exposing ID tokens in a way
that's compatible with client libraries, you can avoid such extra complexity,
and make it easier for your customers to adopt Workload Identity Federation.
Use tenant-specific issuer URLs
The claims embedded in a workload's ID token might be unique within a specific
instance of your product or service, but they might not be unique across multiple
instances of your product or service. For example, two of your customers might
use your product or service to deploy a workload and inadvertently assign those
workloads the same name and ID.
Workload Identity Federation attempts to compensate for this possible lack of
uniqueness by verifying the issuer URL ( iss ) of ID tokens , and
by only allowing tokens from a single issuer per workload identity pool.
If your product or service supports multi-tenancy, then several of your customers
might share a single instance of your product or service, and their workloads' ID
tokens might use the same issuer URL. Using the same issuer URL across multiple
tenants can expose your customers to spoofing attacks: For example, a bad actor
might create a workload in their own tenant, assign it the same ID or name as a
workload in the victim's tenant, and use their workload's ID token to spoof the
identity of the victim's workload.
To help protect your customers from spoofing attacks, avoid using the same issuer
URLs across multiple tenants and embed a unique tenant ID in the issuer URL, for
example https://saas.example.com/tenant-123/ .
Allow users to specify the ID token audience
Some of your customer's workloads might need to access Google Cloud
as well as other third-party services. When customers
decide to federate your product or service with multiple relying parties, they
might find themselves in a situation where a workload's ID token is inadvertently
or maliciously used for the wrong relying party: For example, a bad actor might
trick a workload into revealing an ID token that was intended for a third-party
service, and then use that ID token for Workload Identity Federation.
To help prevent your customers from falling victim to such confused deputy attacks, avoid using a
static audience ( aud claim) in ID tokens. Instead,
let workloads specify an audience when they obtain an ID token
and, optionally, maintain an allow-list for audiences that workloads can request.
By default, Workload Identity Federation expects an ID token's audience to match
the URL https://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/providers/PROVIDER_ID .
Make sure that workloads can use a URL as the audience for ID tokens, and that
the length of the audience URL is less than 180 characters.
Use immutable, non-reusable identifiers in ID token claims
When customers want to grant one of their workloads access to Google Cloud
resources, they must create an IAM binding that references the workload's identity
by subject, group, or a custom attribute. The workload's identity's subject, group,
and custom attributes are derived from the claims in the workload's ID token.
If a customer creates an IAM binding that refers to a mutable claim, then their
workload might accidentally lose access when the claim's value changes. For
example, a customer might create an IAM binding that references the name of their
workload. If they subsequently rename the workload, the IAM binding might not
apply anymore.
Worse, bad actors might attempt to gain unauthorized access to other resources by
deliberately renaming workloads or modifying a workload's environment to spoof
another workload's identity.
To help customers prevent such spoofing issues ,
make sure that ID tokens contain identifiers that are immutable
and can't be reused .
Include context information in ID tokens
Instead of granting workloads unconditional access to Google Cloud resources,
customers might want to restrict access so that a workload can only obtain Google
credentials when certain additional criteria are met.
To let customers configure such restrictions, include additional claims in the
ID token that contain context information. Examples for context information include:
information about the user that owns or started the workload
the reason and way the workload was started
the request that is currently being handled by the workload
Customers can use these claims to configure attribute conditions
or in principal identifiers .
Limit ID token lifetime to 60 minutes
ID tokens have a limited lifetime determined by the exp claim. When a workload
uses an ID token to perform a token exchange, Workload Identity Federation
validates the ID token's exp claim and issues an STS token that is valid
for as long as the input token, but at most for 1 hour.
Using ID tokens that are valid for longer than one hour has no effect on
Workload Identity Federation, but might increase risks if an ID token is accidentally
leaked. Using a lifetime significantly below 1 hour can help reduce such risks,
but might lead to frequent token exchanges and reduced performance.
What's next
Read more about Workload Identity Federation .
Learn about best practices for using Workload Identity Federation .
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

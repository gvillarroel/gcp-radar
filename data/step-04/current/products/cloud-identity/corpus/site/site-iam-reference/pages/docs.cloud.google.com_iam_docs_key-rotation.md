---
title: "Service account key rotation \_|\_ Identity and Access Management (IAM) \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/key-rotation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/key-rotation
  title: "Service account key rotation \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Service account key rotation | Identity and Access Management (IAM) | Google Cloud Documentation
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
How often to rotate keys
Key rotation process Centralized secret management service
Custom notification system
Expiring service account keys
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Service account key rotation
Stay organized with collections
Save and categorize content based on your preferences.
On this page
How often to rotate keys
Key rotation process Centralized secret management service
Custom notification system
Expiring service account keys
What's next
Service account keys are private keys that let you
authenticate as a service account.
Key rotation is the process of replacing your existing keys with new keys and
then invalidating the replaced keys. We recommend that you routinely
rotate all keys that you manage, including your service account keys.
Rotating service account keys can help reduce the risk posed by leaked or stolen
keys. If a key is leaked, it might take bad actors days or weeks to discover the
key. If you regularly rotate your service account keys, there's a higher chance
that the leaked keys will be invalid by the time a bad actor gets them.
Having an established process for rotating service account keys also helps you
act quickly if you suspect that a service account key has been compromised.
Note:
Service account keys are a security risk if not managed correctly. You should
choose a more secure alternative to service account keys
whenever possible. If you must authenticate with a service account key, you are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
How often to rotate keys
We recommend rotating your keys at least every 90 days to reduce
the risk posed by leaked keys.
If you believe that a service account key has been compromised, we recommend
that you rotate it immediately.
Key rotation process
To rotate service account keys, do the following:
Identify the service account keys that need to be rotated.
Create new keys for the same service accounts.
Replace the existing keys with the new keys across all applications.
Disable the replaced keys and monitor the applications to confirm that they
work as expected.
Delete the service account keys that were replaced.
You can complete these steps by using a centralized secret management service,
or by using a custom notification system.
Centralized secret management service
Many centralized secret management services, like HashiCorp Vault , provide automatic secret rotation. You can use these services
to store and rotate your service account keys.
We don't recommend using Google Cloud's Secret Manager to store
and rotate service account keys. This is because, to access
Secret Manager secrets, your application needs an identity that
Google Cloud can recognize. If your application already has an identity
that Google Cloud can recognize, then your application can use that
identity to authenticate to Google Cloud instead of using a service
account key.
The same concept applies for other cloud-based secret management services, like
Azure KeyVault and AWS Secret Manager. If an application already has an identity
that these cloud providers can recognize, your application would be able to use
that identity to authenticate to Google Cloud instead of using a service
account key.
Custom notification system
Another approach to service account key rotation is to create a system that
sends notifications when keys need to be rotated. For example, you could create
a system that sends alerts when it detects keys that were created more than
90 days ago.
First, you need to identify the keys that need to be rotated. To identify these
keys, we recommend using Cloud Asset Inventory to search for all service account
keys that were created before a certain time.
For example, the following command lists all service account keys that were
created before 2023-03-10 00:00:00 UTC in the organization with the ID
123456789012 :
gcloud asset search-all-resources \
--scope="organizations/123456789012" \
--query="createTime < 2023-03-10" \
--asset-types="iam.googleapis.com/ServiceAccountKey" \
--order-by="createTime"
To learn more about searching resources in Cloud Asset Inventory, see Searching
resources .
After identifying the keys that need to be rotated, you can send out
notifications to the appropriate teams.
When someone is notified to rotate a key, they should do the following:
Create a new key for the same service account.
Replace the existing key with the new key across all applications.
Disable the key that they replaced and monitor the
applications to confirm that they work as expected.
After they confirm that the applications are working as expected, delete the
replaced key .
Expiring service account keys
We don't recommend using expiring service account keys for key rotation. This is
because expiring keys can cause outages if they aren't rotated properly. For
more information about the use cases for expiring service account keys, see
expiry times for user-managed keys .
What's next
Use Cloud Asset Inventory to search for resources ,
including service account keys, by creation time.
Create , disable , and delete service
account keys.
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

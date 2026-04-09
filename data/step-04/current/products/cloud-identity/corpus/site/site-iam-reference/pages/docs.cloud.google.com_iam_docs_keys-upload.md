---
title: "Upload service account keys \_|\_ Identity and Access Management (IAM) \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/keys-upload
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/keys-upload
  title: "Upload service account keys \_|\_ Identity and Access Management (IAM) \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Upload service account keys | Identity and Access Management (IAM) | Google Cloud Documentation
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
Before you begin Required roles
Allow service account key upload
Upload a public key for a service account
Disable public key uploads
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Upload service account keys
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Allow service account key upload
Upload a public key for a service account
Disable public key uploads
What's next
This page explains how to upload a public key for a service account. After you
upload the public key, you can use the private key from the key pair to
authenticate as the service account.
Note: If you need to access resources from a workload that runs outside
of Google Cloud, such as on Amazon Web Services (AWS) or Microsoft Azure,
consider using Workload Identity Federation instead of service account keys. Federation lets your
workloads access resources directly, using a short-lived access token, and
eliminates the maintenance and security burden associated with service account
keys.
Before you begin
Enable the IAM API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Understand service account credentials .
Required roles
To get the permissions that
you need to upload service account keys,
ask your administrator to grant you the
Service Account Key Admin ( roles/iam.serviceAccountKeyAdmin )
IAM role on the project, or the service account whose keys you want
to manage.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: IAM basic
roles might also contain permissions to upload service account keys. You shouldn't grant basic roles in a
production environment, but you can grant them in a development or test environment.
Depending on your organization policy configuration, you might also need to
allow service account keys to be uploaded in your project
before uploading a key.
To get the permissions that
you need to allow service account keys to be uploaded in a project,
ask your administrator to grant you the
following IAM roles on your organization:
Organization Policy Administrator ( roles/orgpolicy.policyAdmin )
Organization Viewer ( roles/resourcemanager.organizationViewer )
Tag Administrator ( roles/resourcemanager.tagAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to allow service account keys to be uploaded in a project. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to allow service account keys to be uploaded in a project:
orgpolicy.constraints.list
orgpolicy.customConstraints.create
orgpolicy.customConstraints.delete
orgpolicy.customConstraints.get
orgpolicy.customConstraints.list
orgpolicy.customConstraints.update
orgpolicy.policies.create
orgpolicy.policies.delete
orgpolicy.policies.list
orgpolicy.policies.update
orgpolicy.policy.get
orgpolicy.policy.set
resourcemanager.organizations.get
resourcemanager.projects.listTagBindings
resourcemanager.projects.listEffectiveTags
resourcemanager.tagKeys.get
resourcemanager.tagKeys.list
resourcemanager.tagValues.list
resourcemanager.tagValues.get
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Note: IAM basic
roles might also contain permissions to allow service account keys to be uploaded in a project. You shouldn't grant basic roles in a
production environment, but you can grant them in a development or test environment.
Allow service account key upload
Before you create a service account key, make sure that the
iam.disableServiceAccountKeyUpload organization policy constraint isn't
enforced for your project. If this constraint is enforced for your project,
you can't upload service account keys in that project.
Note : If your organization was created on or after May 3, 2024, this
constraint is enforced by default.
We recommend enforcing this constraint for most projects and only exempting
projects that truly require service account keys. For more information about
alternative authentication methods, see Choose the right authentication method
for your use case .
To exempt a project from the iam.disableServiceAccountKeyUpload organization
policy constraint, ask an organization policy administrator to do the following:
At the organization level, create a tag key and tag value that you will use to define whether
a resource should be exempt from the organization policy. We recommend creating a tag
with the key disableServiceAccountKeyUpload and the values enforced and
not_enforced .
To learn how to create tag keys and tag values, see Creating and defining a
new tag .
Attach the disableServiceAccountKeyUpload tag to the organization and set its value to
enforced . All resources in the organization inherit this tag value,
unless it's overwritten with a different tag value.
To learn how to attach tags to resources, see Attaching tags to
resources .
For each project or folder that you want to exempt from the organization policy, attach the
disableServiceAccountKeyUpload tag and set its value to not_enforced . Setting
a tag value for a project or folder in this way overrides the tag value inherited from the
organization.
Create or
update the organization policy that prevents uploading service account keys so that it doesn't
enforce the constraint for exempt resources.
This policy should have the following rules:
Configure the iam.disableServiceAccountKeyUpload constraint to not be
enforced on any resources with the disableServiceAccountKeyUpload:
not_enforced tag. The condition in this rule should look like the following:
"resource.matchTag(' ORGANIZATION_ID /disableServiceAccountKeyUpload', 'not_enforced')"
Configure the iam.disableServiceAccountKeyUpload constraint to be enforced on
all other resources.
Upload a public key for a service account
You can upload the public key portion of a
user-managed key pair to associate it with a service
account. After you upload the public key, you can use the private key from the
key pair as a service account key.
The key you upload must be an RSA public key that is wrapped in an
X.509 v3 certificate and encoded in base64. You can
use tools such as OpenSSL to generate a key and
certificate in this format.
Do not include any private information in the X.509 certificate.
Specifically, use a generic subject, and do not add any optional attributes.
Certificates are publicly visible; any private information in the certificate is
visible to anyone who retrieves the certificate. For more information,
see Avoid disclosing confidential information in uploaded X.509
certificates .
If the
iam.serviceAccountKeyExpiryHours
organization policy constraint is enforced for your project, then the key that
you upload needs to expire within the time period specified in the constraint.
To set the expiry time of the key, use the -days value in the command that you
use to generate the X.509 certificate. If the -days value is greater than the
time period specified in the constraint, then the command will fail.
For example, the following command generates a 2048-bit RSA key pair and wraps
the public key in a self-signed certificate that is valid for 365 days:
openssl req -x509 -nodes -newkey rsa:2048 -days 365 \
-keyout /path/to/private_key.pem \
-out /path/to/public_key.pem \
-subj "/CN=unused"
You can then upload the public_key.pem file as the public key for a service
account.
Console gcloud REST
More
In the Google Cloud console, go to the Service accounts page.
Go to Service accounts
The remaining steps appear in the Google Cloud console.
Select a project.
On the Service accounts page, click the email address of the service account that you want
to upload a key for.
Click the Keys tab.
Click the Add key drop-down menu, then select Upload existing key .
Click Browse , then find and select your public key file. Alternatively,
you can copy and paste the contents of your public key file into the
Paste existing key box.
Click Upload .
Execute the
gcloud iam service-accounts keys upload
command to upload a public key for signing service account keys.
Replace the following values:
KEY_FILE : The path to the file containing the key data
to upload—for example, ./public_key.pem .
SA_NAME : The name of the service account
to upload a key for.
PROJECT_ID : Your Google Cloud project ID.
gcloud iam service-accounts keys upload KEY_FILE \
--iam-account= SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
The output contains a unique identifier for the uploaded key:
Name: projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys/c7b74879da78e4cdcbe7e1bf5e129375c0bfa8d0
To determine whether the command was successful, execute the
gcloud iam service-accounts keys list
command:
gcloud iam service-accounts keys list \
--iam-account= SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
The output will contain the same unique identifier that was returned after the
key was created:
KEY_ID
CREATED_AT
EXPIRES_AT
DISABLED
c7b74879da78e4cdcbe7e1bf5e129375c0bfa8d0
2019-06-26T21:01:42Z
9999-12-31T23:59:59Z
The
projects.serviceAccounts.keys.upload
method uploads the public key from a user-managed key pair, and adds this key to
the service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SA_NAME : The name of the service account to associate the key with.
PUBLIC_KEY_DATA : The public key data for the key pair. Must be an RSA
public key that is wrapped in an X.509 v3 certificate. Encode the public key data in base64,
including the first line, -----BEGIN CERTIFICATE----- , and the last line,
-----END CERTIFICATE----- .
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys:upload
Request JSON body:
{
"publicKeyData": " PUBLIC_KEY_DATA "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys:upload"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys:upload" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"name": "projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com/keys/c7b74879da78e4cdcbe7e1bf5e129375c0bfa8d0",
"validAfterTime": "2020-05-17T19:31:19Z",
"validBeforeTime": "2021-05-17T19:31:19Z",
"keyAlgorithm": "KEY_ALG_RSA_2048",
"keyOrigin": "USER_PROVIDED",
"keyType": "USER_MANAGED"
}
Disable public key uploads
To disable the ability to upload keys for your project, see
Restricting service account key upload .
Note : If your organization was created on or after May 3, 2024, this
constraint is enforced by default.
What's next
Learn how to create and delete service account keys .
Learn how to list and get service account keys .
Learn about
alternatives to service account keys for authentication .
Learn how to use service account keys to authenticate as a service
account .
Understand the best practices for managing service account
keys .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how our
products perform in real-world scenarios. New customers also get $300 in
free credits to run, test, and deploy workloads.
Get started for free
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

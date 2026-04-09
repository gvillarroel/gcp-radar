---
title: "IAM principals \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/iam/docs/principals-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/principals-overview
  title: "IAM principals \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

IAM principals | Identity and Access Management (IAM) | Google Cloud Documentation
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
Use principals in your policies Support for principal types
Principal types Google Accounts
Service accounts
Google groups
Domains
allAuthenticatedUsers
allUsers
Federated identities in a workforce identity pool
Federated identities in a workload identity pool
GKE Pods
Agent identities
Resource Manager principal sets
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
IAM principals
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Use principals in your policies Support for principal types
Principal types Google Accounts
Service accounts
Google groups
Domains
allAuthenticatedUsers
allUsers
Federated identities in a workforce identity pool
Federated identities in a workload identity pool
GKE Pods
Agent identities
Resource Manager principal sets
What's next
In Identity and Access Management (IAM), you control access for principals . A principal
represents one or more identities that have authenticated to Google Cloud.
Use principals in your policies
To use principals in your policies, do the following:
Configure identities that Google Cloud can recognize. Configuring
identities is the process of creating identities that Google Cloud can
recognize. You can configure identities for users and for workloads.
To learn how to configure identities, see the following:
To learn how to configure identities for users, see Identities for
users .
To learn how to configure identities for workloads, see Identities for
workloads .
Determine the principal identifier that you will use. The principal
identifier is how you refer to a principal in your policies. This identifier
can refer to a single identity or to a group of identities.
The format that you use for the principal identifier depends on the following:
The type of principal
The type of the policy that you want to include the principal in
To see the principal identifier format for each type of principal in each
type of policy, see Principal identifiers .
After you know the format of the identifier, you can determine the
principal's unique identifier based on the attributes of the principal, such
as the principal's email address.
Include the principal's identifier in your policy. Add your principal to
your policy, following the format of the policy.
To learn about the different types of policies in IAM, see
Policy types .
Support for principal types
Each IAM policy type supports a subset of the principal types
that IAM supports. To see the principal types that are supported
for each policy type, see Principal identifiers .
Principal types
The following table briefly describes the different principal types supported by
IAM. For a detailed description and examples of how a principal
type might look when used in a policy, click the principal type name in the
table.
Google Accounts
Service accounts
Service agents
Google groups
Domains
allAuthenticatedUsers
allUsers
Workforce identity pool
Workload identity pool
Google Kubernetes Engine Pods
Resource Manager principal sets
Select one or more options Filter by principal type Google Accounts
Service accounts
Service agents
Google groups
Domains
allAuthenticatedUsers
allUsers
Workforce identity pool
Workload identity pool
Google Kubernetes Engine Pods
Resource Manager principal sets
Principal type
Description
Single principal or principal set
Google-managed or federated
Policy type support
Google Accounts
User accounts that represent a human who interacts with Google APIs and services.
Single principal
Google-managed
The following policy types support Google Accounts:
Allow
Deny
The following policy types don't support Google Accounts:
Principal access boundary
Service accounts
An account that is used by a machine workload rather than a person.
Single principal
Google-managed
The following policy types support service accounts:
Allow
Deny
The following policy types don't support service accounts:
Principal access boundary
A set of service accounts
All service accounts in a project, folder, or organization.
Principal set that contains service accounts.
Google-managed
The following policy types support a set of service accounts:
Allow
Deny
The following policy types don't support a set of service accounts:
Principal access boundary
A set of service agents
All Google-managed service accounts (service agents) associated with a project, folder, or organization.
Principal set that contains service agents.
Google-managed
The following policy types support a set of service agents:
Deny
The following policy types don't support a set of service agents:
Allow
Principal access boundary
Google groups
A named collection of human or machine users with Google Accounts.
Principal set that can contain the following:
Google Accounts
Service accounts
Google-managed
The following policy types support Google groups:
Allow
Deny
The following policy types don't support Google groups:
Principal access boundary
Domains
A Google Workspace account or Cloud Identity domain that represents a virtual group. The group can contain both human users and service accounts.
Principal set that can contain the following principal types:
Google Accounts
Service accounts
Google-managed
The following policy types support domains:
Allow
Deny
Principal access boundary
allAuthenticatedUsers
A special identifier that represents all service accounts and human users on the internet who have authenticated with a Google Account.
Principal set that can contain the following principal types:
Google Accounts
Service accounts
Workforce identities
Workload identities
Google-managed
The following policy types support allAuthenticatedUsers for some resources:
Allow
The following policy types don't support allAuthenticatedUsers :
Deny
Principal access boundary
allUsers
A special identifier that represents anyone who is on the internet—authenticated and unauthenticated.
Principal set that can contain the following principal types:
Google Accounts
Service accounts
Workforce identities
Workload identities
Both
The following policy types support allUsers :
Allow (for some resources)
Deny
The following policy types don't support allUsers :
Principal access boundary
A single identity in a workforce identity pool
A human user with an identity that is managed by an external IdP and federated by using Workforce Identity Federation.
Single principal
Federated
The following policy types support a single identity in a workforce identity pool:
Allow
Deny
Principal access boundary
A set of principals in a workforce identity pool
A set of human users with identities that are managed by an external IdP and federated by using Workforce Identity Federation.
Principal set that contains workforce identities.
Federated
The following policy types support a set of principals in a workforce identity pool:
Allow
Deny
Principal access boundary
A single principal in a workload identity pool
A workload (or machine user) with an identity that is managed by an external IdP and federated by using Workload Identity Federation.
Single principal
Federated
The following policy types support a single principal in a workload identity pool:
Allow
Deny
Principal access boundary
A set of principals in a workload identity pool
A set of workloads (or machine users) with identities that are managed by an external IdP and federated by using Workload Identity Federation.
Principal set that contains workload identities
Federated
The following policy types support a set of principals in a workload identity pool:
Allow
Deny
Principal access boundary
A set of Google Kubernetes Engine Pods
A workload (or machine user) running on and federated through GKE.
Principal set that can contain one or more federated workload identities
Federated
The following policy types support GKE pods:
Allow
The following policy types don't support GKE pods:
Deny
Principal access boundary
Agent identities
An identity for an agentic workload that is strongly attested is
tied to the lifecycle of the agent.
Single principal
Google-managed
The following policy types support agent identities:
Allow
Deny
A set of agent identities
All agent identities in an agent identity pool.
Principal set that contains agent identities.
Google-managed
The following policy types support a set of agent identities:
Allow
Deny
Resource Manager principal sets
A set of human or machine users associated with Google Cloud resources such as projects, folders, and organizations.
Principal set that can contain the following principal types:
Google Accounts
Service accounts
Workforce identities
Workload identities
Both
The following policy types support Resource Manager principal sets:
Principal access boundary
The following policy types don't support Resource Manager principal sets:
Allow
Deny
The following sections describe these principal types in more detail.
Google Accounts
A Google Account represents a developer, an administrator, or any other person
who interacts with Google Cloud by using an account they created with
Google. Any email address that's associated with a Google Account, also called a
managed user account , can be used as a principal. This includes gmail.com
email addresses and email addresses with other domains.
The following examples show how you can identify a Google Account in different
types of policies:
Allow policies : user:alex@example.com
Deny policies : principal://goog/subject/alex@example.com
To learn more about principal identifier formats, see Principal
identifiers .
In your allow and deny policies, email aliases associated with a Google Account
or a managed user account are automatically replaced with the primary email
address. This means that the policy displays the user's primary email address
when you grant access to an email alias.
For more information about setting up Google Accounts, see
Cloud Identity or Google Workspace accounts .
Service accounts
A service account is an account for an application or compute workload instead
of an individual end user. Service accounts can be divided into user-managed
service accounts and Google-managed service accounts, which are called service
agents :
When you run code that's hosted on Google Cloud, you specify a service
account to use as the identity for your application. You can create as many
user-managed service accounts as needed to represent the different logical
components of your application.
Some Google Cloud services need access to your resources so they can act
on your behalf. Google creates and manages service agents to meet this need.
You can reference service accounts and service agents in the following ways:
A single service account
All service accounts in a project
All service agents associated with a project
All service accounts in all projects in a folder
All service agents associated with a folder and its descendants
All service accounts in all projects in an organization
All service agents associated with an organization and its descendants
The following examples show how you can identify an individual service account
in different types of policies:
A service account in allow policies : serviceAccount:my-service-account@my-project.iam.gserviceaccount.com
A service account in deny policies : principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com
The following examples show how you can identify all service accounts for a
project, folder, or organization in different types of policies:
All service accounts for a project in allow policies : principalSet://cloudresourcemanager.googleapis.com/projects/123456789012/type/ServiceAccount
All service agents associated with a folder in deny policies : principalSet://cloudresourcemanager.googleapis.com/folders/123456789012/type/ServiceAgent
To learn more about principal identifier formats, see Principal
identifiers .
For more information about service accounts, see the following pages:
Service accounts overview
Types of service accounts
Note: If you use Google Kubernetes Engine (GKE), you can also grant roles to
Kubernetes service accounts , which differ from IAM
service accounts.
Google groups
A Google group is a named collection of Google Accounts. Every Google group has
a unique email address that's associated with the group. You can find the email
address that's associated with a Google group by clicking About on the
homepage of any Google group. For more information about
Google Groups, see the Google Groups
homepage.
Google groups are a convenient way to apply access controls to a collection of
principals. You can grant and change access controls for a whole group at once
instead of granting or changing access controls one at a time for individual
principals. You can also add principals to or remove principals from a Google
group instead of updating an allow policy to add or remove principals.
Google groups don't have login credentials, and you can't use Google
groups to establish identity to make a request to access a resource.
The following examples show how you can identify a Google group in different
types of policies:
Allow policies : group:my-group@example.com
Deny policies : principalSet://goog/group/my-group@example.com
To learn more about principal identifier formats, see Principal
identifiers .
To learn more about using groups for access control, see Best practices for
using Google groups .
Domains
Domains can exist as either Google Workspace accounts or
Cloud Identity domains. They are fundamentally the same because they
both represent a virtual group of all the Google Accounts that they contain. The
only difference is that Cloud Identity domain users don't have access to
Google Workspace applications and features.
Like Google groups, domains can't be used to establish identity, but they
enable convenient permission management.
When you create a Google Account for a new user, such as username@example.com ,
that Google Account is added to the virtual group for your
Google Workspace account or Cloud Identity domain. When you modify
access for the Google Workspace account or Cloud Identity domain,
you modify access for all Google Accounts in that virtual group.
The following examples show how you can identify a domain in different types
of policies:
Allow policies : domain:example.com
Deny policies : principalSet://goog/cloudIdentityCustomerId/C01Abc35
Principal access boundary policies : //iam.googleapis.com/locations/global/workspace/C01Abc35
To learn more about principal identifier formats, see Principal
identifiers .
For more information about Cloud Identity, see
About Cloud Identity .
Secondary domains
When you create a Google Workspace account or a Cloud Identity
domain, you're assigned a unique customer ID. Then, you provide a domain name
that becomes your primary domain name—for example, example.com .
After you create your primary domain, you can optionally add secondary
domains with their own domain names. However, these domains
are associated with the same customer ID as the primary domain.
IAM uses your customer ID to identify members in the domain, not
the domain name. As a result, you can't manage access for primary and secondary
domains separately. This is true even for allow policies, where you identify the
domain using the domain name. When evaluating allow policies, IAM
identifies the customer ID associated with that domain, then uses that customer
ID—not the domain name—to identify members of that domain.
Domain names in allow policies default to the primary domain name. If you grant
access to a domain using a secondary domain name, it will be automatically
replaced with the corresponding primary domain name.
allAuthenticatedUsers
The value allAuthenticatedUsers is a special identifier that represents all
service accounts and all users on the internet who have authenticated with a
Google Account. This identifier includes accounts that aren't connected to a
Google Workspace account or Cloud Identity domain, such as
personal Gmail accounts. Users who aren't authenticated, such as anonymous
visitors, aren't included.
Note: By default, organizations created on or after
May 3, 2024 don't
allow roles to be granted to
allAuthenticatedUsers . This is because of
the default configuration of the
iam.managed.allowedPolicyMembers constraint.
To learn how to change this setting, see
Restricting identities by
domain . Note: Consider using allUsers , as described on this page, rather
than allAuthenticatedUsers . In many cases, granting access to all users is no
more of a security risk than granting access only to authenticated users.
This principal type doesn't include federated identities, which are managed by
external identity providers (IdPs). If you use
Workforce Identity Federation or Workload Identity Federation ,
don't use allAuthenticatedUsers . Instead, use one of the following:
To include users from all IdPs, use allUsers .
To include users from specific external IdPs, use the identifier for
all identities in a workforce identity pool or
all identities in a workload identity pool .
Some resource types don't support this principal type.
allUsers
The value allUsers is a special identifier that represents anyone who is on
the internet, including authenticated and unauthenticated users.
Some resource types don't support this principal type.
Note: By default, organizations created on or after
May 3, 2024 don't
allow roles to be granted to
allUsers . This is because of
the default configuration of the
iam.managed.allowedPolicyMembers constraint.
To learn how to change this setting, see
Restricting identities by
domain . Note: Some Google Cloud services require authentication before a user can
access the service. For these services, allUsers includes only authenticated
users.
The following examples show how the allUsers identifier might look in
different types of policies:
Allow policies on supported resource types : allUsers
Deny policies : principalSet://goog/public:all
To learn more about principal identifier formats, see Principal
identifiers .
Federated identities in a workforce identity pool
A workforce identity pool is a set of user identities that is managed by an
external IdP and federated by using Workforce Identity Federation . You
can reference principals in these pools in the following ways:
A single identity in a workforce identity pool
All workforce identities in a specified group
All workforce identities with a specific attribute value
All identities in a workforce identity pool
The following examples show how you can identify federated workforce
identity pools in different types of policies:
A single identity in allow policies : principal://iam.googleapis.com/locations/global/workforcePools/altostrat-contractors/subject/raha@altostrat.com
A group of identities in deny policies : principalSet://iam.googleapis.com/locations/global/workforcePools/altostrat-contractors/group/administrators-group@altostrat.com
A workforce identity pool in Principal access boundary policies : //iam.googleapis.com/locations/global/workforcePools/example-workforce-pool
To learn more about principal identifier formats, see Principal
identifiers .
Federated identities in a workload identity pool
A workload identity pool is a set of workload identities that is managed by
an external IdP and federated by using Workload Identity Federation . You
can reference principals in these pools in the following ways:
A single identity in a workload identity pool
All workload identities in a specified group
All workload identities with a specific attribute value
All identities in a workload identity pool
The following examples show how you can identify federated workload
identity pools in different types of policies:
A single identity in allow policies : principal://iam.googleapis.com/projects/123456789012/locations/global/workloadIdentityPools/altostrat-contractors/subject/raha@altostrat.com
A group of identities in deny policies : principalSet://iam.googleapis.com/projects/123456789012/locations/global/workloadIdentityPools/altostrat-contractors/group/administrators-group@altostrat.com
A workload identity pool in Principal access boundary policies : //iam.googleapis.com/projects/123456789012/locations/global/workloadIdentityPools/example-workload-pool
To learn more about principal identifier formats, see Principal
identifiers .
GKE Pods
Workloads running on GKE use Workload Identity Federation for GKE to
access Google Cloud services. For more information about principal
identifiers for GKE Pods, see
Reference Kubernetes resources in IAM policies .
The following example shows how you can identify all GKE pods
in a specific cluster in an allow policy:
principalSet://iam.googleapis.com/projects/123456789012/locations/global/workloadIdentityPools/123456789012.svc.id.goog/kubernetes.cluster/https://container.googleapis.com/v1/projects/123456789012/locations/global/clusters/example-gke-cluster
To learn more about principal identifier formats, see Principal
identifiers .
Agent identities
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
An agent identity is a Google-managed identity for agentic workloads. An agent
identity is attested and tied to the lifecycle of the agent, which provides
a more secure way to manage agent access to Google Cloud resources than
using service accounts.
Each agent is automatically provisioned with an agent identity. You can grant
or deny access to Google Cloud resources using IAM policies.
The following example shows how you can identify an agent identity in an allow
policy or deny policy:
principal://agents.global.org-123456789012.system.id.goog/resources/aiplatform/projects/9876543210/locations/us-central1/reasoningEngines/my-test-agent
To learn more about principal identifier formats, see Principal
identifiers .
Resource Manager principal sets
Each Resource Manager resource—such as a project, folder, or
organization—is associated with a set of principals. When you're
creating principal access boundary policy bindings, you can use the principal set for a
Resource Manager resource to reference all principals associated with that
resource.
Principal sets for Resource Manager resources contain the following
principals:
Project principal set : All service accounts and workload identity pools in
the specified project.
Folder principal set : All service accounts and all workload identity pools
in any project in the specified folder.
Organization principal set : Contains the following identities:
All identities in all domains associated with your Google Workspace
customer ID
All workforce identity pools in your organization
All service accounts and workload identity pools in any project in the
organization
The following example shows how you can identify a project's principal set in
a principal access boundary policy:
//cloudresourcemanager.googleapis.com/projects/example-project
To learn more about principal identifier formats, see Principal
identifiers .
What's next
Learn about the policy types that IAM supports
Grant a principal a role on a Resource Manager project,
folder, or organization
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

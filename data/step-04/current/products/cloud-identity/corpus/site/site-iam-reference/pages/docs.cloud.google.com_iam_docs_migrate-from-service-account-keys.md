---
title: "Migrate from service account keys \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/migrate-from-service-account-keys
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/migrate-from-service-account-keys
  title: "Migrate from service account keys \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Migrate from service account keys | Identity and Access Management (IAM) | Google Cloud Documentation
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
Overview
Assess service account key use Gather data on key usage
Enrich key usage data with additional context
Create a plan for reducing service account key usage Decide the responsibility of current workload owners
Identify quick wins
Plan where to enforce organization policy changes
Design an exceptions process
Communicate upcoming changes to workload owners
Deploy controls and refactor workloads Enforce controls to stop the creation of new service account keys
Remediate existing workloads
Delete unnecessary keys
Use built-in controls to help respond to leaked keys
Ongoing improvements to service account management
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Migrate from service account keys
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Overview
Assess service account key use Gather data on key usage
Enrich key usage data with additional context
Create a plan for reducing service account key usage Decide the responsibility of current workload owners
Identify quick wins
Plan where to enforce organization policy changes
Design an exceptions process
Communicate upcoming changes to workload owners
Deploy controls and refactor workloads Enforce controls to stop the creation of new service account keys
Remediate existing workloads
Delete unnecessary keys
Use built-in controls to help respond to leaked keys
Ongoing improvements to service account management
What's next
Service account keys are commonly used to authenticate to
Google Cloud services. However, they can also become a security risk if they're
not managed properly, increasing your vulnerability to threats like credential
leakage, privilege escalation, information disclosure, and non-repudiation.
In many cases, you can authenticate with more secure
alternatives to service account keys. This guide helps you to
migrate from using service account keys as your primary authentication mechanism
to using more secure alternatives, with occasional exceptions where service
account keys are truly necessary.
This document is intended for security administrators who want to improve their
security posture by reducing the usage of service account keys in favor of more
secure authentication mechanisms. These security administrators might be
responsible for the security of existing production workloads, developer
workflows, and internal processes that use service account keys.
Overview
Removing service account keys from existing workloads requires careful planning
to prevent accidental disruption. The following migration plan is designed to
allow you to enforce centralized controls while minimizing disruption to
developers.
This migration plan includes three phases:
Assess: In this phase, you assess your existing environment to understand
where service account keys exist and whether the keys are in use.
Plan: In this phase, you decide which controls you will eventually deploy
and communicate the migration plan to stakeholders.
Deploy: In this phase, you begin refactoring workloads to authenticate
with more secure alternatives to service account keys. You also build
additional capabilities to continuously monitor your environment and mitigate
future risk.
Assess service account key use
In this phase, you assess your existing environment to understand where service
account keys exist and whether the keys are in use.
The following sections describe the data you can collect to better understand
how service account keys are used in your organization.
Gather data on key usage
First, identify where service account keys exist and how they're used.
Google Cloud provides tools to understand service account
usage . These tools help you determine which service accounts
and keys were recently used to authenticate, which service accounts haven't been
used in the past 90 days, and which service accounts have
overly privileged roles.
You can combine information from all of these tools to get a better picture of
how service accounts and keys are used across your organization.
For an example of how to combine information from these various sources across
your entire organization, see the deployable reference
architecture on GitHub. This reference architecture
aggregates data from various tools and regularly exports it to a
BigQuery table for analysis.
The reference architecture deploys a data pipeline that queries
Cloud Asset Inventory to identify service account keys in your organization. Then, the
data pipeline combines that data with data about key usage and permission usage
for the associated account. The resulting table, sa_key_usage , helps you
answer questions like the following:
How many persistent keys have been created? This number can be useful as a
high-level metric to track progress as you migrate away from keys.
Which projects and service accounts use keys? This information helps you
identify the owners of workloads that use service account keys.
Which keys are inactive? You can likely delete these keys without further
assessment from workload owners.
Which keys are associated with service accounts that have recommendations
about excess permissions? If a service account key is associated with an
overly privileged service account, especially one with an Owner, Editor, or
Viewer role, the key might be particularly high-risk. Looking for service
accounts that have role recommendations can help you
identify which service accounts are overly privileged. After you identify
these service accounts, you might decide to prioritize these workloads for
migration. You can also choose to apply the role recommendations to
proactively reduce excess permissions.
This data pipeline runs daily and writes to a date-partitioned
BigQuery table. You can use this table to investigate specific
service accounts or keys, or to track remediation progress using a dashboard
tool like Looker Studio .
Enrich key usage data with additional context
After you gather data about key usage, you can optionally enrich your data with
additional data sources. We recommend adding data sources that you already use
for tracking governance and provenance of resources. Depending on your existing
governance, you might add additional data such as the following:
Ownership information from a configuration management database (CMDB) or
similar system.
Governance information configured in project labels , like the team
or cost center responsible for a project.
Environment information about keys used for workloads in environments external
to Google Cloud.
Create a plan for reducing service account key usage
Before you can deploy any changes to reduce service account key usage, you need
to determine which workloads and environments will be affected and how you will
enforce those changes. You also need to communicate this plan across your
business and make sure that workload owners support the plan.
The following sections introduce key topics your plan should address. Your
specific plan will vary based on the size of your organization and the specific
requirements of your workloads.
Decide the responsibility of current workload owners
Although a central security team can assess which keys exist, a successful
migration requires effort from workload owners. For keys in scope for migration,
workload owners must determine which of the available authentication methods
will work for their use case, then execute that migration.
Consider how to balance improvements to your existing security posture against
the effort required from workload owners. The following sections describe two
sample approaches: one that heavily prioritizes improvements to your security
posture, and one that heavily prioritizes minimizing effort from workload
owners. Your actual approach might vary—for example, you might decide to
individually select which workloads are in scope.
Example: All current workloads are evaluated for migration
One possible approach is to enforce service account key controls for all
existing and future workloads. This involves steps like the following:
Collaborating with workload owners to evaluate their key usage for existing
workloads.
Requiring that workload owners migrate all existing workloads with key usage,
unless they have been granted an exception.
Preventing all future workloads from using service account keys, unless they
have been granted an exception.
This approach prioritizes improvements to your existing security posture but
requires more effort from developers and workload owners in the short term. To
successfully execute a plan like this, you must have commitment from workload
owners to participate in workload review and refactoring.
Example: No current workloads are evaluated for migration
Another approach is to allow existing workloads an automatic exception to
continue using service account keys and only apply new controls on future
workloads.
This approach improves the security posture of future workloads and minimizes
the responsibility of current workload owners. However, it doesn't improve
the security posture of existing workloads.
Identify quick wins
In your assessment, you might identify keys that can be safely deleted without
further remediation work from workload owners. For example, if a key has no
activity for 90 days, or is related to resources that are no longer active, you
might be able to remove it safely without needing to migrate to a different
authentication mechanism.
Make a list of keys that meet this criteria. You will use this list during the
deployment phase to delete unnecessary keys . Before you
add a key to the list, confirm whether there are use cases that require the
service account key infrequently, such as emergency production access relying on
service account keys.
Plan where to enforce organization policy changes
To successfully migrate away from using service account keys, you need to
prevent new keys from being created. During the deployment phase, you enforce
the iam.disableServiceAccountKeyCreation
organization policy constraint to prevent the creation of new service account
keys.
Note : If your organization was created on or after May 3, 2024, this
constraint is enforced by default.
Although this constraint doesn't prevent the usage of existing keys, it might
disrupt existing workloads that regularly rotate their keys. Before you start
the deployment phase, decide where you will enforce it in your resource
hierarchy to minimize disruption.
You might prefer to initially enforce the constraint at the project or folder
level instead of the organization level. For example, you might enforce the
constraint on the folder used for your development environment before deploying
it to production folders. Or, in a large organization with many teams, you might
enforce the constraint on a folder for a single team first, and then enforce the
constraint for additional folders as you migrate them.
You can use organization policies with tags to
conditionally enforce organization policies at the project or folder level.
Design an exceptions process
Although the goal of this migration is to reduce or eliminate service account
key usage, there are some legitimate use cases that require service account
keys. Even if no existing workloads require service account keys, it's possible
that future workloads will. Therefore, you must define an operational process to
evaluate and approve exceptions for use cases that require service account keys.
Define a process for workload owners to request an exception that allows their
workload to use service account keys. Ensure that the decision makers
responsible for granting an exception have the technical knowledge to validate
the use case, consult with the workload owners on which of the more secure
alternatives to service account keys might be more appropriate, and advise
workload owners about best practices for managing service account
keys .
Communicate upcoming changes to workload owners
After you've designed a plan, you need to clearly communicate that plan across
your organization and make sure that stakeholders, particularly senior leaders,
are willing to commit to the migration.
While the specific migration details will vary for your organization, consider
including the following topics in your communication plan:
The negative impact that insecure service account keys can have on the
organization, and the motivations that drive your migration away from service
account keys.
The new security controls to prevent service account key creation and how this
can impact existing processes.
Guidance for developers to identify more secure alternatives to service
account keys .
The process for teams to request an exception to allow service account keys,
including how frequently this exception is re-evaluated.
The timeline to enforce your proposed changes.
Work with workload owners to refine your plan and ensure that it works across
your organization.
Deploy controls and refactor workloads
After you create a plan and communicate it to workload owners, you can begin
migrating away from service account keys.
In this phase, you begin refactoring workloads to authenticate with more secure
alternatives to service account keys. You also build additional capabilities to
continuously monitor your environment and mitigate future risk.
The following sections describe the steps you can take to refactor workloads and
delete keys with minimal disruption. You can choose to do these steps in any
order, based on the priority and effort required for your organization.
Enforce controls to stop the creation of new service account keys
To stop the creation of new service account keys, you enforce the
iam.disableServiceAccountKeyCreation organization
policy constraint.
However, before enforcing this constraint, you need to add tags
to any projects or folders that will be exempt from the policy. You might allow
exceptions for existing workloads that are unable to migrate from service
account keys, or for new workloads that have a legitimate reason to authenticate
only with service account keys.
After you add tags to exempt projects and folders, you can set an organization
policy with tags to enforce the
iam.disableServiceAccountKeyCreation constraint for non-exempt projects and
folders.
To prevent the creation of service account keys in all non-exempt projects and
folders, do the following:
Ensure that you have the Tag Administrator role ( roles/resourcemanager.tagAdmin )
and the Organization Policy Administrator role ( roles/orgpolicy.policyAdmin ) at the
organization level. To learn how to grant roles at the organization level, see Manage access to projects, folders, and
organizations .
At the organization level, create a tag key and tag value that you will use to define whether
a resource should be exempt from the organization policy. We recommend creating a tag
with the key disableServiceAccountKeyCreation and the values enforced and
not_enforced .
To learn how to create tag keys and tag values, see Creating and defining a
new tag .
Attach the disableServiceAccountKeyCreation tag to the organization and set its value to
enforced . All resources in the organization inherit this tag value,
unless it's overwritten with a different tag value.
To learn how to attach tags to resources, see Attaching tags to
resources .
For each project or folder that you want to exempt from the organization policy, attach the
disableServiceAccountKeyCreation tag and set its value to not_enforced . Setting
a tag value for a project or folder in this way overrides the tag value inherited from the
organization.
Create an
organization policy that prevents the creation of service account keys for all resources except the
exempt resources.
This policy should have the following rules:
Configure the iam.disableServiceAccountKeyCreation constraint to not be
enforced on any resources with the disableServiceAccountKeyCreation:
not_enforced tag. The condition in this rule should look like the following:
"resource.matchTag(' ORGANIZATION_ID /disableServiceAccountKeyCreation', 'not_enforced')"
Configure the iam.disableServiceAccountKeyCreation constraint to be enforced on
all other resources.
Remediate existing workloads
For each workload that uses service account keys, collaborate with the workload
owners to choose and implement an alternative authentication method.
When you access Google Cloud services by using the Google Cloud CLI, Cloud Client Libraries,
tools that support
Application Default Credentials (ADC)
like Terraform, or REST requests, use the following diagram to help you choose an authentication
method:
This diagram guides you through the following questions:
Are you running code in a single-user development environment, such as your own workstation,
Cloud Shell, or a virtual desktop interface?
If yes, proceed to question 4.
If no, proceed to question 2.
Are you running code in Google Cloud?
If yes, proceed to question 3.
If no, proceed to question 5.
Are you running containers in Google Kubernetes Engine?
If yes, use
Workload Identity Federation for GKE
to attach service accounts to Kubernetes pods.
If no,
attach a service account
to the resource.
Does your use case require a service account?
For example, you want to configure authentication and authorization consistently for your
application across all environments.
If no,
authenticate with user credentials .
If yes,
impersonate a service account with user credentials .
Does your workload authenticate with an external identity provider that supports
workload identity federation ?
If yes,
configure Workload Identity Federation
to let applications running on-premises or on other cloud providers use a service account.
If no,
create a service account key .
In some cases, you might not be able to use any authentication method other than
service account keys. Examples of where a service account key might be your only
feasible option include the following:
You're using commercial off-the-shelf products (COTS) or
software-as-a-service (SaaS) applications that ask you to input a
Google Cloud service account key directly into its user interface.
Your workload is running outside of Google Cloud and isn't authenticated
with an identity provider that can support workload identity
federation .
In cases where you must keep using service account keys, ensure that you're
following the best practices for managing service account
keys .
You might also decide not to remediate certain workloads because you assess that
the risk of continuing to use service account keys doesn't justify the cost of
switching to a different authentication method.
Delete unnecessary keys
If you are certain that a service account key isn't needed, you should delete
the key. Unnecessary keys include the following:
Keys with no recent usage or keys that are related to unused resources, which
you identified in the Identify quick wins section of
this page.
Keys for workloads that have migrated to other authentication methods.
After you delete all of the service account keys in a project, ensure that
the iam.disableServiceAccountKeyCreation constraint is enforced for that
project. If the project was previously exempt from this constraint, remove
the tag that allowed for the exemption.
To delete keys safely, we recommend that you disable the key
before deleting it. Deleting is irreversible, but disabling it lets you quickly
re-enable the key if you identify unexpected issues. After you disable the key,
wait until you're sure that removing the key permanently won't cause issues,
then delete the key . If, after disabling the key, you identify
unexpected issues, re-enable the key, resolve the issues, and then repeat the
process until you can safely delete the key.
Use built-in controls to help respond to leaked keys
Google Cloud offers tools and services to help you detect and
respond to leaked service account keys. Consider using the following mechanisms
to help you respond to leaked service account keys:
The Service Account Key Exposure Response
constraint lets you automatically disable exposed
keys that Google Cloud detects.
To learn about other best practices for managing compromised credentials, see
Handling compromised Google Cloud
credentials .
Ongoing improvements to service account management
Wherever possible, implement best practices for managing service account
keys . Improving your key management processes can help
mitigate the risk of any remaining service account keys in your organization.
What's next
Best practices for using service accounts
Best practices for managing service account keys
Build a collaborative incident management process
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

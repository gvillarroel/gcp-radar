---
title: "Create custom organization policy constraints for Cloud KMS \_|\_ Cloud Key\
  \ Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/custom-org-policies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/custom-org-policies
  title: "Create custom organization policy constraints for Cloud KMS \_|\_ Cloud\
    \ Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create custom organization policy constraints for Cloud KMS | Cloud Key Management Service | Google Cloud Documentation
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
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud KMS
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
Protection levels
Overview
Cloud HSM overview
Single-tenant Cloud HSM overview
Cloud EKM overview
Reference architectures for Cloud EKM
CMEK overview
Cloud KMS with Autokey
Compatible services
Cloud HSM for Google Workspace
Locations
Get started
Cloud KMS resources
Key purposes and algorithms
Separation of duties
Create and use encryption keys
CMEK best practices
Create and manage Single-tenant Cloud HSM instances
Create keys
Automate key creation
Autokey overview
Enable Autokey
Create a resource with Autokey
Create a key ring
Create a key
Import keys
About key import
Key wrapping
Format a key for import
Manually wrap a key for import
Configure OpenSSL for manual key wrapping
Wrap a key using OpenSSL
Set up automatic key wrapping
Import a key version
Verify an imported key version
Create external keys
Set up Cloud EKM over the internet
Create an EKM connection
Create an external Key
Control access
Manage IAM roles
Use Organization Policy Contraints
Create custom organization policy constraints for Cloud KMS
CMEK organization policies
Control key destruction
Secure data using keys
Key APIs
Use gRPC
Access the API
Sort and filter API list results
Generate random bytes
Use Cloud KMS keys in Google Cloud
Encrypt and decrypt data
Envelope encryption
Additional authenticated data
Asymmetric encryption
Encrypt and decrypt data with a symmetric key
Encrypt and decrypt data with a raw symmetric key
Encrypt and decrypt data with an asymmetric key
Verify end-to-end data integrity
Encrypt application data
Set up client-side encryption with Tink
Onboard to Cloud HSM for Google Workspace
Sign and validate data
Digital signatures
Create and validate signatures
MAC signatures
Create and validate MAC signatures
Share secrets using key encapsulation mechanisms
Key encapsulation mechanisms
Encapsulate and decapsulate using KEMs
Manage keys
Resource consistency
Key version states
View keys and key details
View keys by project
View encryption metrics
View key usage
Get a Cloud KMS resource ID
Retrieve a public key
Attest a Cloud HSM key
Label a key
Create and manage tags
Enable and disable a key version
Destroy and restore a key version
Delete Cloud KMS resources
Rotate keys
About key rotation
Rotate a key
Re-encrypt data
Update external key reference
Monitor
Using Cloud Audit Logging
Cloud KMS Inventory Service audit logging
Monitor state changes
Monitor and adjust quotas
Use Cloud Monitoring
Monitor EKM usage
Troubleshoot
Troubleshoot failed imports
Troubleshoot EKM via VPC errors
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
About organization policies and constraints Policy inheritance
Before you begin Required roles
Set up a custom constraint
Enforce a custom organization policy
Example custom organization policies for common use cases
Cloud Key Management Service supported resources
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Create custom organization policy constraints for Cloud KMS
Stay organized with collections
Save and categorize content based on your preferences.
On this page
About organization policies and constraints Policy inheritance
Before you begin Required roles
Set up a custom constraint
Enforce a custom organization policy
Example custom organization policies for common use cases
Cloud Key Management Service supported resources
What's next
This page shows you how to use Organization Policy Service custom constraints to restrict
specific operations on the following Google Cloud resources:
cloudkms.googleapis.com/KeyHandle
cloudkms.googleapis.com/AutokeyConfig
cloudkms.googleapis.com/CryptoKey
cloudkms.googleapis.com/CryptoKeyVersion
cloudkms.googleapis.com/EkmConnection
cloudkms.googleapis.com/EkmConfig
cloudkms.googleapis.com/ImportJob
To learn more about Organization Policy, see
Custom organization policies .
About organization policies and constraints
The Google Cloud Organization Policy Service gives you centralized, programmatic
control over your organization's resources. As the
organization policy administrator , you can define an organization
policy, which is a set of restrictions called constraints that apply to
Google Cloud resources and descendants of those resources in the
Google Cloud resource hierarchy . You can enforce organization
policies at the organization, folder, or project level.
Organization Policy provides built-in managed constraints
for various Google Cloud services. However, if you want more granular,
customizable control over the specific fields that are restricted in your
organization policies, you can also create custom constraints and use those
custom constraints in an organization policy.
Policy inheritance
By default, organization policies are inherited by the descendants of the
resources on which you enforce the policy. For example, if you enforce a policy
on a folder, Google Cloud enforces the policy on all projects in the
folder. To learn more about this behavior and how to change it, refer to
Hierarchy evaluation rules .
Before you begin
Start by creating a Google Cloud account. With this account, you get $300 in free credits,
plus free usage of over 20 products, up to monthly limits.
Create an account
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Ensure that you know your
organization ID .
Required roles
To get the permissions that
you need to manage custom organization policies,
ask your administrator to grant you the
Organization Policy Administrator ( roles/orgpolicy.policyAdmin )
IAM role on the organization resource.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Set up a custom constraint
A custom constraint is defined in a YAML file by the resources, methods,
conditions, and actions that are supported by the service on which you are
enforcing the organization policy. Conditions for your custom constraints are
defined using
Common Expression Language (CEL) . For more information about how to build
conditions in custom constraints using CEL, see the CEL section of
Creating and managing custom constraints .
Console gcloud
More
To create a custom constraint, do the following:
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project that you want to set the organization
policy for.
Click add Custom constraint .
In the Display name box, enter a human-readable name for the constraint. This name is
used in error messages and can be used for identification and debugging. Don't use
personally identifiable information (PII) or sensitive data in display names because this
name could be exposed in error messages. This field can contain up to 200 characters.
In the Constraint ID box, enter the ID that you want for your new custom
constraint. A custom constraint can only contain letters (including upper and lowercase) or
numbers, for example custom.maxKeyRotationPeriod . This field can contain up to
70 characters, not counting the prefix ( custom. ), for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
In the Description box, enter a human-readable description of the constraint. This
description is used as an error message when the policy is violated. Include details about
why the policy violation occurred and how to resolve the policy violation. Don't include
PII or sensitive data in your description, because it could be exposed in error messages.
This field can contain up to 2000 characters.
In the Resource type box, select the name of the Google Cloud REST resource
containing the object and field that you want to restrict—for example,
container.googleapis.com/NodePool . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
Under Enforcement method , select whether to enforce the
constraint on a REST CREATE method or both CREATE and
UPDATE methods. If you enforce the constraint with the UPDATE
method on a resource that violates the constraint, changes to that resource are blocked by
the organization policy unless the change resolves the violation.
To see supported methods for each service, find the service in
Services that support custom constraints .
To define a condition, click edit Edit condition .
In the Add condition panel, create a CEL condition that refers to a supported
service resource, for example, resource.management.autoUpgrade == false . This
field can contain up to 1000 characters. For details about CEL usage, see
Common Expression Language .
For more information about the service resources you can use in your custom constraints,
see
Custom constraint supported services .
Click Save .
Under Action , select whether to allow or deny the evaluated method if the condition
is met.
The deny action means that the operation to create or update the resource is blocked if the
condition evaluates to true.
The allow action means that the operation to create or update the resource is permitted only
if the condition evaluates to true. Every other case except those explicitly listed in the
condition is blocked.
Click Create constraint .
When you have entered a value into each field, the equivalent YAML configuration for this
custom constraint appears on the right.
To create a custom constraint, create a YAML file using the following format:
name : organizations/ ORGANIZATION_ID /customConstraints/ CONSTRAINT_NAME
resourceTypes : RESOURCE_NAME
methodTypes :
- CREATE - UPDATE
condition : " CONDITION "
actionType : ACTION
displayName : DISPLAY_NAME
description : DESCRIPTION
Replace the following:
ORGANIZATION_ID : your organization ID, such as
123456789 .
CONSTRAINT_NAME : the name that you want for your new custom
constraint. A custom constraint can only contain letters (including upper and lowercase)
or numbers, for example, custom.maxKeyRotationPeriod . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
cloudkms.googleapis.com/CryptoKey . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
methodTypes : the REST methods that the constraint is enforced on.
Can be CREATE or both CREATE and
UPDATE . If you enforce the constraint with the UPDATE method on
a resource that violates the constraint, changes to that resource are blocked by the
organization policy unless the change resolves the violation.
To see the supported methods for each service, find the service in
Services that support custom constraints .
CONDITION : a
CEL condition that is written against a representation of a supported service
resource. This field can contain up to 1000 characters. For example,
"resource.rotationPeriod <= duration('7776000s')" .
For more information about the resources available to write conditions against, see
Supported resources .
ACTION : the action to take if the condition is met.
Possible values are ALLOW and
DENY .
The allow action means that if the condition evaluates to true, the operation to create or
update the resource is permitted. This also means that every other case except the one
explicitly listed in the condition is blocked.
The deny action means that if the condition evaluates to true, the operation to create or
update the resource is blocked.
DISPLAY_NAME : a human-readable name for the constraint. This name
is used in error messages and can be used for identification and debugging. Don't use PII
or sensitive data in display names because this name could be exposed in error messages.
This field can contain up to 200 characters.
DESCRIPTION : a human-friendly description of the constraint to
display as an error message when the policy is violated. This field can contain up to
2000 characters.
After you have created the YAML file for a new custom constraint, you must set it up to make
it available for organization policies in your organization. To set up a custom constraint,
use the
gcloud org-policies set-custom-constraint command:
gcloud org-policies set-custom-constraint CONSTRAINT_PATH
Replace CONSTRAINT_PATH with the full path to your custom constraint
file. For example, /home/user/customconstraint.yaml .
After this operation is complete, your custom constraints are available as organization
policies in your list of Google Cloud organization policies.
To verify that the custom constraint exists, use the
gcloud org-policies list-custom-constraints command:
gcloud org-policies list-custom-constraints --organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with the ID of your organization resource.
For more information, see
Viewing organization policies .
Enforce a custom organization policy
You can enforce a constraint by creating an organization policy that references it, and then
applying that organization policy to a Google Cloud resource.
Console gcloud
More
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project that you want to set the
organization policy for.
From the list on the Organization policies page, select your constraint to view
the Policy details page for that constraint.
To configure the organization policy for this resource, click Manage policy .
On the Edit policy page, select Override parent's policy .
Click Add a rule .
In the Enforcement section, select whether this organization policy is enforced or
not.
Optional: To make the organization policy conditional on a tag, click
Add condition . Note that if you add a conditional rule to an organization
policy, you must add at least one unconditional rule or the policy cannot be saved. For more
information, see
Scope organization policies with tags .
Click Test changes to simulate the effect of the organization policy. For more
information, see
Test organization policy changes with Policy Simulator .
To enforce the organization policy in dry-run mode, click Set dry run policy . For
more information, see
Test organization policies .
After you verify that the organization policy in dry-run mode works as intended, set the
live policy by clicking Set policy .
To create an organization policy with boolean rules, create a policy YAML file that
references the constraint:
name : projects/ PROJECT_ID /policies/ CONSTRAINT_NAME
spec :
rules :
- enforce : true
dryRunSpec :
rules :
- enforce : true
Replace the following:
PROJECT_ID : the project that you want to enforce your constraint
on.
CONSTRAINT_NAME : the name you defined for your custom constraint. For
example, custom.maxKeyRotationPeriod .
To enforce the organization policy in
dry-run mode , run
the following command with the dryRunSpec flag:
gcloud org-policies set-policy POLICY_PATH --update-mask = dryRunSpec
Replace POLICY_PATH with the full path to your organization policy
YAML file. The policy requires up to 15 minutes to take effect.
After you verify that the organization policy in dry-run mode works as intended, set the
live policy with the org-policies set-policy command and the spec
flag:
gcloud org-policies set-policy POLICY_PATH --update-mask = spec
Replace POLICY_PATH with the full path to your organization policy
YAML file. The policy requires up to 15 minutes to take effect.
Example custom organization policies for common use cases
This table provides syntax examples for some common custom constraints.
Description
Constraint syntax
Set a maximum rotation period of 90 days
name : organizations/ ORGANIZATION_ID /customConstraints/custom.maxRotationPeriod
resourceTypes :
- cloudkms.googleapis.com/CryptoKey
methodTypes :
- CREATE
- UPDATE
condition : "resource.rotationPeriod < = duration('7776000s')"
actionType : ALLOW
displayName : Enforce maximum rotation period for Cloud KMS keys
description : The maximum rotation period for Cloud KMS keys is 90 days.
Set a maximum scheduled for destruction duration of 180 days
name : organizations/ ORGANIZATION_ID /customConstraints/custom.maxScheduledDestruction
resourceTypes :
- cloudkms.googleapis.com/CryptoKey
methodTypes :
- CREATE
condition : "resource.destroyScheduledDuration < = duration('15552000s')"
actionType : ALLOW
displayName : Enforce maximum scheduled for destruction duration
description : The maximum length of the scheduled for destruction period is 180 days.
Require the HSM protection level for imported keys
name : organizations/ ORGANIZATION_ID /customConstraints/custom.importToHSM
resourceTypes :
- cloudkms.googleapis.com/ImportJob
methodTypes :
- CREATE
condition : "resource.protectionLevel == 'HSM'"
actionType : ALLOW
displayName : Import to HSM keys only
description : New ImportJob resources must use the HSM protection level.
Cloud Key Management Service supported resources
The following table lists the Cloud Key Management Service resources that you can reference
in custom constraints.
Resource
Field
cloudkms.googleapis.com/AutokeyConfig
resource.keyProject
resource.name
cloudkms.googleapis.com/CryptoKey
resource.cryptoKeyBackend
resource.destroyScheduledDuration
resource.importOnly
resource.keyAccessJustificationsPolicy.allowedAccessReasons
resource.nextRotationTime
resource.purpose
resource.rotationPeriod
resource.versionTemplate.algorithm
resource.versionTemplate.protectionLevel
cloudkms.googleapis.com/CryptoKeyVersion
resource.externalProtectionLevelOptions.ekmConnectionKeyPath
resource.externalProtectionLevelOptions.externalKeyUri
resource.state
cloudkms.googleapis.com/EkmConfig
resource.defaultEkmConnection
cloudkms.googleapis.com/EkmConnection
resource.cryptoSpacePath
resource.keyManagementMode
resource.serviceResolvers.endpointFilter
resource.serviceResolvers.hostname
resource.serviceResolvers.serverCertificates.rawDer
resource.serviceResolvers.serviceDirectoryService
cloudkms.googleapis.com/ImportJob
resource.importMethod
resource.protectionLevel
cloudkms.googleapis.com/KeyHandle
resource.name
resource.resourceTypeSelector
What's next
Learn more about
Organization Policy Service .
Learn more about how to
create and manage organization policies .
See the full list of managed
organization policy constraints .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
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

---
title: "Control key version destruction \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/control-key-destruction
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/control-key-destruction
  title: "Control key version destruction \_|\_ Cloud Key Management Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Control key version destruction | Cloud Key Management Service | Google Cloud Documentation
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
Before you begin Required resources
Required roles
Require a minimum scheduled for destruction duration
Require keys to be disabled before destruction
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Control key version destruction
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required resources
Required roles
Require a minimum scheduled for destruction duration
Require keys to be disabled before destruction
What's next
Google Cloud offers two organization policy constraints to set key version
destruction policy across an organization:
constraints/cloudkms.minimumDestroyScheduledDuration is used to set a
minimum length for the scheduled for destruction duration for new keys
within the organization.
constraints/cloudkms.disableBeforeDestroy is used to require that a key
version has been disabled before it can be scheduled for destruction.
Before you begin
The instructions on this page assume that you're familiar with using
constraints and
that you have the required resources and roles.
Required resources
Before you can complete the steps on this page, you must have the following
resources:
An organization.
Optional: A folder or project resource within your organization.
Required roles
To get the permissions that
you need to manage organization policies,
ask your administrator to grant you the
Organization policy administrator ( roles/orgpolicy.policyAdmin )
IAM role on the organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to manage organization policies. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage organization policies:
orgpolicy.constraints.list
orgpolicy.policies.create
orgpolicy.policies.delete
orgpolicy.policies.list
orgpolicy.policies.update
orgpolicy.policy.get
orgpolicy.policy.set
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Require a minimum scheduled for destruction duration
The Minimum destroy scheduled duration per key constraint
( constraints/cloudkms.minimumDestroyScheduledDuration ) is used to set a
minimum length for the scheduled for destruction duration for new keys. This
constraint overrides the minimum scheduled for destruction duration at the
project, folder, or organization level. This constraint reduces the chance of
accidentally destroying a key that is still needed. You can set this constraint
to a higher value to help make sure you have time to prevent key destruction
before it becomes irreversible.
Use higher values for this constraint when unwanted key destruction would be
more harmful, such as for production data that is subject to data retention
requirements. Use lower values for this constraint when unwanted key destruction
would be less harmful, such as for development or testing environments. You can
also use lower values to allow timely crypto-shredding . However, as a
minimum value, this constraint can't ensure that new keys are created with low
scheduled for destruction durations.
Caution: When different values are specified for this constraint at different
levels of the hierarchy, the lowest value is applied. To apply different
values for different folders or projects, set your highest constraint value at
the organization level. Override the constraint with a lower value only for
those folders or projects that are less sensitive to unwanted key destruction.
To require a minimum scheduled for destruction duration, follow these steps:
Get the current policy on the organization resource using the describe
command. This command returns the policy directly applied to this
resource:
gcloud org-policies describe \
constraints/cloudkms.minimumDestroyScheduledDuration \
--organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with the unique identifier for the
organization resource. Organization ID
is formatted as decimal numbers, and can't have leading zeros.
You can also view the organization policy for a folder or a project with
the --folder or the --project flags, and the folder ID or
project ID , respectively.
The response returns the current organization policy, if one exists.
The output is similar to the following:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.minimumDestroyScheduledDuration
spec :
etag : COTP+KYGELiCmsoB
inheritFromParent : true
rules :
- values :
allowedValues :
- in:7d
updateTime : '2023-08-17T14:00:04.424051Z'
If a policy isn't set, the describe command returns a NOT_FOUND
error:
ERROR: (gcloud.org-policies.describe) NOT_FOUND: Requested entity was not found.
Set the policy on the organization using the set-policy command. This
command overwrites any policy currently attached to the resource.
Create a temporary file /tmp/policy.yaml to store the policy:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.minimumDestroyScheduledDuration
spec :
rules :
- values :
allowedValues :
- in: MINIMUM_DURATION
Replace the following:
ORGANIZATION_ID : the numerical ID of your organization.
MINIMUM_DURATION : the minimum duration for the
scheduled for destruction state for keys in this organization,
in days. Must be one of the following values: 7d , 15d ,
30d , 60d , 90d , or 120d .
Run the set-policy command:
gcloud org-policies set-policy /tmp/policy.yaml
View the current effective policy using describe --effective . This
command returns the organization policy as it is evaluated at this point
in the resource hierarchy with inheritance included.
gcloud org-policies describe \
constraints/cloudkms.minimumDestroyScheduledDuration --effective \
--organization = ORGANIZATION_ID
The output is similar to the following:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.minimumDestroyScheduledDuration
spec :
rules :
- values :
allowedValues :
- 30d
- 15d
- 90d
- 60d
- 7d
- 120d
Because this organization policy was set at the organization level, it is
inherited by all child resources that allow
inheritance.
Require keys to be disabled before destruction
The Restrict key destruction to disabled keys constraint
( constraints/cloudkms.disableBeforeDestroy ) lets you require
that a key has been disabled before you can schedule the key for destruction.
Disabling a key prior to destroying it is a recommended best practice because it
helps you to validate that the key is not in use. You can combine this
constraint with careful Identity and Access Management policy to create a multi-step
destruction process that requires cooperation from multiple roles.
To use this constraint to create a multi-step destruction process, make sure
that no user has both the cloudkms.cryptoKeyVersions.update and the
cloudkms.cryptoKeyVersions.destroy permissions. This use case requires that
you use custom roles .
To require that a key is in the disabled state before you can schedule the key
for destruction, follow these steps:
gcloud
More
Get the current policy on the organization resource using the describe
command. This command returns the policy directly applied to this
resource:
gcloud org-policies describe \
constraints/cloudkms.disableBeforeDestroy \
--organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with the unique identifier for the
organization resource. Organization ID
is formatted as decimal numbers, and can't have leading zeros.
You can also view the organization policy for a folder or a project with
the --folder or the --project flags, and the folder ID
or project ID , respectively.
The response returns the current organization policy, if one exists. The
output is similar to the following:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.disableBeforeDestroy
spec :
etag : CPvY+KYGENDwgxA=
rules :
- enforce : true
updateTime : '2023-08-17T14:19:39.033618Z'
If a policy isn't set, the describe command returns a NOT_FOUND
error:
ERROR: (gcloud.org-policies.describe) NOT_FOUND: Requested entity was not found.
Set the policy on the organization using the set-policy command. This
command overwrites any policy that is already attached to the resource.
Create a temporary file /tmp/policy.yaml to store the policy:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.disableBeforeDestroy
spec :
rules :
- enforce : true
Replace ORGANIZATION_ID with the unique identifier for the
organization resource.
Run the set-policy command:
gcloud org-policies set-policy /tmp/policy.yaml
View the current effective policy using describe --effective . This
command returns the organization policy as it is evaluated at this point
in the resource hierarchy with inheritance included.
gcloud org-policies describe \
constraints/cloudkms.disableBeforeDestroy --effective \
--organization = ORGANIZATION_ID
The output is similar to the following:
name : organizations/ ORGANIZATION_ID /policies/cloudkms.minimumDestroyScheduledDuration
spec :
rules :
- enforce : true
Because this organization policy was set at the organization level, it
is inherited by all child resources that allow
inheritance.
What's next
Learn more about key version states .
Destroy and restore a key version .
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

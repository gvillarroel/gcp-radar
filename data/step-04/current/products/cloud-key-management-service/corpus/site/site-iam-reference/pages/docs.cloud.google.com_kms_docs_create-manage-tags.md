---
title: "Create and manage tags \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/create-manage-tags
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/create-manage-tags
  title: "Create and manage tags \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create and manage tags | Cloud Key Management Service | Google Cloud Documentation
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
About tags
Required permissions
Create tag keys and values
Add tags to existing resources
List tags attached to resources
Detach tags from resources
Delete tag keys and values
Identity and Access Management conditions and tags
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Create and manage tags
Stay organized with collections
Save and categorize content based on your preferences.
On this page
About tags
Required permissions
Create tag keys and values
Add tags to existing resources
List tags attached to resources
Detach tags from resources
Delete tag keys and values
Identity and Access Management conditions and tags
What's next
This guide describes how to create and manage tags on Cloud Key Management Service key
rings. You can use tags to group related Cloud KMS key rings and
store metadata about those resources based on their tags.
About tags
A tag is a key-value pair that can attach to a resource within
Google Cloud. You can use tags to conditionally allow or deny policies based on
whether a resource has a specific tag. For example, you can conditionally grant
Identity and Access Management (IAM) roles based on whether a resource has a specific tag.
For more information about tags, see Tags overview .
Tags are attached to resources by creating a tag binding resource that links the
value to the Google Cloud resource.
To group key rings within Cloud KMS for automation
and billing purposes, use labels
. Tags and labels work independently of each other, and you can apply both
to resources.
Required permissions
To get the permissions that
you need to manage tags,
ask your administrator to grant you the
following IAM roles:
Tag Viewer ( roles/resourcemanager.tagViewer )
on the resources the tags are attached to
View and manage tags at the organization level:
Organization Viewer ( roles/resourcemanager.organizationViewer )
on the organization
Create, update, and delete tag definitions:
Tag Administrator ( roles/resourcemanager.tagAdmin )
on the resource you're creating, updating, or deleting tags for
Attach and remove tags from resources:
Tag User ( roles/resourcemanager.tagUser )
on the tag value and the resources that you are attaching or removing the tag value to
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
To attach tags to Cloud KMS key rings, you need the
Cloud KMS Admin role ( roles/cloudkms.admin ).
Create tag keys and values
Before you can attach a tag, you need to create a tag and configure its value.
To create tag keys and tag values, see Creating a tag and
Adding a tag value .
Add tags to existing resources
To add a tag to existing key rings, follow these steps:
Console gcloud
More
Go to the Key management page in the
Google Cloud console.
Go to Key management
Select the key ring for which you would like to
attach a tag.
Click
label_important Tags .
If your organization doesn't appear in the Tags panel, click
Select scope . Select your organization and click
Open .
Click Add tag .
Select the key for the tag you want to attach from the list. You can
filter the list by typing keywords.
Select the value for the tag you want to attach from the list. You
can filter the list by typing keywords.
Click Save .
In the Confirm dialog, click Confirm to attach the
tag.
A notification confirms that your tags updated.
To attach a tag to a key ring, you must create a
tag binding resource by using the
gcloud resource-manager tags bindings create command:
gcloud resource-manager tags bindings create \
--tag-value= TAGVALUE_NAME \
--parent= RESOURCE_ID \
--location= LOCATION
Replace the following:
TAGVALUE_NAME : the permanent ID or
namespaced name of the tag value that is attached—for example,
tagValues/567890123456 .
RESOURCE_ID is the full ID of the resource, including
the API domain name to identify the type of resource
( //cloudkms.googleapis.com/ ). For example, to attach a tag to
projects/ PROJECT_ID /locations/ LOCATION_NAME /keyRings/ KEYRING_NAME ,
the full ID is:
//cloudkms.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION_NAME /keyRings/ KEYRING_NAME .
LOCATION : the
location of your resource. If you're attaching a tag to a global
resource, such as a folder or a project, omit this flag.
If you're attaching a tag to a regional or a zonal resource, you must
specify the location—for example,
us-central1 (region) or us-central1-a
(zone).
For help with locating a Cloud KMS resource ID, see
Retrieving a resource's ID .
List tags attached to resources
You can view a list of tag bindings directly attached to or inherited by the
key ring.
Console gcloud
More
Go to the Key management page in the
Google Cloud console.
Go to Key management
Tags are displayed in the Tags column of the key
ring.
To get a list of tag bindings attached to a resource, use the
gcloud resource-manager tags bindings list command:
gcloud resource-manager tags bindings list \
--parent= RESOURCE_ID \
--location= LOCATION
Replace the following:
RESOURCE_ID is the full ID of the resource, including
the API domain name to identify the type of resource
( //cloudkms.googleapis.com/ ). For example, to attach a tag to
projects/ PROJECT_ID /locations/ LOCATION_NAME /keyRings/ KEYRING_NAME ,
the full ID is:
//cloudkms.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION_NAME /keyRings/ KEYRING_NAME .
LOCATION : the
location of your resource. If you're viewing a tag attached to a
global resource, such as a folder or a project, omit this
flag. If you're viewing a tag attached to a regional or a zonal
resource, you must specify the location—for example,
us-central1 (region) or us-central1-a
(zone).
You should get a response similar to the following:
name: tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2F7890123456/tagValues/567890123456
tagValue: tagValues/567890123456
resource: //cloudkms.googleapis.com/projects/project-abc/locations/global/keyRings/keyring-xyz
Detach tags from resources
You can detach tags that have been directly attached to
a key ring. Inherited tags can be overridden by attaching
a tag with the same key and a different value, but they can't be detached.
Console gcloud
More
Go to the Key management page in the
Google Cloud console.
Go to Key management
Select the key ring from which you want to remove a
tag.
Click
label_important Tags .
In the Tags panel, next to the tag you want to detach, click
delete Delete item .
Click Save .
In the Confirm dialog, click Confirm to detach the
tag.
A notification confirms that your tags updated.
To delete a tag binding, use the
gcloud resource-manager tags bindings delete command:
gcloud resource-manager tags bindings delete \
--tag-value= TAGVALUE_NAME \
--parent= RESOURCE_ID \
--location= LOCATION
Replace the following:
TAGVALUE_NAME : the permanent ID or
namespaced name of the tag value that is attached—for example,
tagValues/567890123456 .
RESOURCE_ID is the full ID of the resource, including
the API domain name to identify the type of resource
( //cloudkms.googleapis.com/ ). For example, to attach a tag to
projects/ PROJECT_ID /locations/ LOCATION_NAME /keyRings/ KEYRING_NAME ,
the full ID is:
//cloudkms.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION_NAME /keyRings/ KEYRING_NAME .
LOCATION : the
location of your resource. If you're attaching a tag to a global
resource, such as a folder or a project, omit this flag.
If you're attaching a tag to a regional or a zonal resource, you must
specify the location—for example,
us-central1 (region) or us-central1-a
(zone).
Delete tag keys and values
When removing a tag key or value definition, ensure that the tag is detached from the
key ring. You must delete existing tag attachments, called tag
bindings, before deleting the tag definition itself. To delete tag keys and tag
values, see Deleting tags .
Identity and Access Management conditions and tags
You can use tags and IAM conditions to conditionally
grant role bindings to users in your hierarchy. Changing or deleting the tag
attached to a resource can remove user access to that resource if an
IAM policy with conditional role bindings has been applied. For
more information, see Identity and Access Management conditions and tags .
What's next
See the other services that support tags .
See Tags and access control to learn how to use tags with
IAM.
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

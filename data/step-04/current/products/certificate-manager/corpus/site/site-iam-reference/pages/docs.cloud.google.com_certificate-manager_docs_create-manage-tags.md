---
title: "Create and manage tags for Certificate Manager resources \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/create-manage-tags
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/certificates
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/create-manage-tags
  title: "Create and manage tags for Certificate Manager resources \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Manager
Guides
Send feedback
Create and manage tags for Certificate Manager resources
Stay organized with collections
Save and categorize content based on your preferences.
This guide describes how to create and manage tags on Certificate Manager resources. Certificate Manager uses the following resources that support
Resource Manager tags:
Certificates
Certificate maps
Trust configs
Issuance configurations
DNS authorizations
For the list of all services that support tags, see Services that
support tags .
About tags
A tag is a key-value pair that can attach to a resource within
Google Cloud. You can use tags to conditionally allow or deny policies based on
whether a resource has a specific tag. For example, you can conditionally grant
Identity and Access Management (IAM) roles based on whether a resource has a specific tag.
For more information about tags, see Tags overview .
Tags are attached to resources by creating a tag binding resource that links the
value to the Google Cloud resource.
To group Certificate Manager resources within Certificate Manager for automation
and billing purposes, use labels . Tags and
labels work independently of each other, and you can apply both to resources.
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
To attach tags to Certificate Manager
resources, you
need the Certificate Manager Editor role
( roles/certificatemanager.editor ).
Create tag keys and values
Before you can attach a tag, you need to create a tag and configure its value.
To create tag keys and tag values, see Creating a tag and
Adding a tag value .
Add tags to existing resources
To add a tag to existing Certificate Manager resources, follow these steps:
gcloud
To attach a tag to a Certificate Manager resource, you must create a
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
RESOURCE_ID is the full ID of the resource, including the API
domain name to identify the type of resource ( //certificatemanager.googleapis.com/ ).
For example, to attach a tag to
projects/ PROJECT_ID /locations/global/trustConfigs/ TRUST_CONFIG_ID ,
the full ID is
//certificatemanager.googleapis.com/projects/ PROJECT_ID /locations/global/trustConfigs/ TRUST_CONFIG_ID .
LOCATION : the
location of your resource. If you're attaching a tag to a global
resource, such as a folder or a project, omit this flag.
If you're attaching a tag to a regional or a zonal resource, you must
specify the location—for example,
us-central1 (region) or us-central1-a
(zone).
List tags attached to resources
You can view a list of tag bindings directly attached to or inherited by the
Certificate Manager resource.
gcloud
To get a list of tag bindings attached to a resource, use the
gcloud resource-manager tags bindings list command:
gcloud resource-manager tags bindings list \
--parent= RESOURCE_ID \
--location= LOCATION
Replace the following:
RESOURCE_ID is the full ID of the resource, including the API
domain name to identify the type of resource ( //certificatemanager.googleapis.com/ ).
For example, to attach a tag to
projects/ PROJECT_ID /locations/global/trustConfigs/ TRUST_CONFIG_ID ,
the full ID is
//certificatemanager.googleapis.com/projects/ PROJECT_ID /locations/global/trustConfigs/ TRUST_CONFIG_ID .
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
resource: //certificatemanager.googleapis.com/projects/123/trustConfigs?trust_config_id=demo-trust-config
Detach tags from resources
You can detach tags that have been directly attached to
a Certificate Manager resource. Inherited tags can be overridden by attaching
a tag with the same key and a different value, but they can't be detached.
gcloud
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
RESOURCE_ID is the full ID of the resource, including the API
domain name to identify the type of resource ( //certificatemanager.googleapis.com/ ).
For example, to attach a tag to
projects/ PROJECT_ID /locations/global/trustConfigs/ TRUST_CONFIG_ID ,
the full ID is
//certificatemanager.googleapis.com/projects/ PROJECT_ID /locations/global/trustConfigs/ TRUST_CONFIG_ID .
LOCATION : the
location of your resource. If you're attaching a tag to a global
resource, such as a folder or a project, omit this flag.
If you're attaching a tag to a regional or a zonal resource, you must
specify the location—for example,
us-central1 (region) or us-central1-a
(zone).
Delete tag keys and values
When removing a tag key or value definition, ensure that the tag is detached from the
Certificate Manager resource. You must delete existing tag attachments, called tag
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

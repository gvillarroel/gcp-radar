---
title: "Attach and manage tags \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/attach-manage-tags
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/attach-manage-tags
  title: "Attach and manage tags \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Attach and manage tags
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
This page describes how to attach and manage tags for API hub resources. API hub currently only supports tags using the gcloud CLI.
What are tags?
Tags are metadata key-value pairs that are attached to Google Cloud resources. Tags are used for several purposes:
To conditionally allow or deny policies based on whether a resource has a specific tag.
To group and organise your resources.
To filter your resources.
Tagging resources involves creating tags, managing access, and attaching key-value pairs. Each key can have only one value per resource. For example, a resource tagged with environment: development cannot also be tagged with environment: production or environment: test . The maximum number of tags allowed per resource is 50 .
Note: Tags are different from labels , which are another way to organize and filter your resources. Tags and labels work independently of each other, and you can use both on the same resource.
Supported resources
You can attach tags to the following API hub resources after resource creation:
APIs
API deployments
Note: By default, tags are inherited by child resources. For example, tags attached to an API are inherited by all API versions, operations, and specifications.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
To manage tags for API hub resources, user accounts and service accounts should be granted the Tag User ( roles/resourcemanager.tagUser ) role. For more information, see Tags roles and permissions .
Create and define tags. For more information, see Create and manage tags .
Attach tags to a resource
To attach tags to a resource, you must create a TagBinding resource that links the tag value to the Google Cloud resource. See Attaching tags to a resource for detailed instructions.
gcloud
The following example shows how to attach a tag to an API:
gcloud resource-manager tags bindings create \
--tag-value=tagValues/ TAG_VALUE \
--parent=//apihub.googleapis.com/projects/ HUB_PROJECT /locations/ HUB_LOCATION /apis/ API_ID \
--location= HUB_LOCATION
Replace the following:
TAG_VALUE : the numeric ID of the Tag value
HUB_PROJECT : the project ID of the API hub project.
HUB_LOCATION : the location of the API hub project.
API_ID : the ID of the API.
Example:
gcloud resource-manager tags bindings create \
--tag-value=tagValues/123456789012 \
--parent=//apihub.googleapis.com/projects/my-project/locations/us-central1/apis/my-api \
--location=us-central1
IAM conditions and tags
You can use tags and IAM conditions to conditionally grant role bindings to users. If an IAM policy with conditional role bindings is applied, changing or deleting the tag attached to a resource can remove user access to that resource.
For more information, see Tags and conditional access .
Detach tags from a resource
To detach tags from a resource, you must delete the tag binding resource that links the tag value to the Google Cloud resource. See Detaching tags from a resource for detailed instructions.
gcloud
The following example shows how to detach a tag from an API deployment:
gcloud resource-manager tags bindings delete \
--tag-value=tagValues/ TAG_VALUE \
--parent=//apihub.googleapis.com/projects/ HUB_PROJECT /locations/ HUB_LOCATION /deployments?deployment_id= DEPLOYMENT_ID \
--location= HUB_LOCATION
Replace the following:
TAG_VALUE : the numeric ID of the Tag value
HUB_PROJECT : the project ID of the API hub project.
HUB_LOCATION : the location of the API hub project.
DEPLOYMENT_ID : the ID of the deployment.
Example:
gcloud resource-manager tags bindings delete \
--tag-value=tagValues/123456789012 \
--parent=//apihub.googleapis.com/projects/my-project/locations/us-central1/deployments?deployment_id=my-deployment \
--location=us-central1
List tags for a resource
To get a list of tag bindings directly attached to a resource, use the gcloud resource-manager tags bindings list command. You can add the --effective flag, to additonally return a list of tags inherited by this resource. See Listing tags for detailed instructions.
gcloud
The following example shows how to list tags for an API:
gcloud resource-manager tags bindings list \
--parent=//apihub.googleapis.com/projects/ HUB_PROJECT /locations/ HUB_LOCATION /apis/ API_ID \
--location= HUB_LOCATION
Replace the following:
HUB_PROJECT : the project ID of the API hub project.
HUB_LOCATION : the location of the API hub project.
API_ID : the ID of the API.
Example:
gcloud resource-manager tags bindings list \
--parent=//apihub.googleapis.com/projects/my-project/locations/us-central1/apis/my-api \
--location=us-central1
What's next
Learn how to use tags with policies that support them to conditionally enforce those policies. See Policies and tags .
Learn how to add IAM conditions in API hub.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

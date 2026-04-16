---
title: "Create and manage Tags in GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-tags
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-tags
  title: "Create and manage Tags in GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Create and manage Tags in GKE on AWS
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page shows you how to create and manage Tags in your
GKE on AWS clusters.
Overview
A tag is a key-value pair that can attach to a resource within Google Cloud.
You can use Tags to conditionally allow or deny policies based on whether a
resource has a specific tag.
As a platform administrator, a use case for Tags might be to
conditionally grant Identity and Access Management (IAM) roles based on whether a cluster
has a specific tag. For example, you can configure GKE to
automatically grant Identity and Access Management roles to users who are contractors so that they
can access specific clusters that are normally available only to full-time
employees.
After creating a tag, you can attach the tag to a Google Cloud resource as a
key-value pair using a tag binding . For each key, you can attach one value to
a resource. For example, if you attached env:dev to a GKE on AWS
cluster, you can't also attach env:prod or env:test . You can attach up to 50
tags to each resource.
In GKE on AWS, there are several methods to annotate your resources, as
outlined in the following table:
Annotation type
Level
Description
Example
Tags
GKE cluster
Conditionally allow or deny policies based on the tag.
To learn more, see Tags overview in the Resource Manager documentation.
Automatically grant users who are contractors access to specific clusters that are normally available only to full-time employees.
GKE cluster labels
GKE cluster
Organize GKE resources to track usage and billing.
To learn more, see Cluster labels .
Differentiate between clusters owned by specific cost centers or teams
in your organization.
Kubernetes labels
GKE cluster
Associate cluster components and resources with one another and
manage resource lifecycles.
To learn more, see
Kubernetes labels and selectors .
Require that workloads are scheduled on nodes with specific labels.
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
Ensure that you have the following IAM roles to work with Tags:
roles/resourcemanager.tagAdmin
roles/resourcemanager.tagUser
For information on the permissions granted by these roles, see
Required permissions in the Resource Manager documentation.
Ensure that you have a GKE on AWS cluster
running.
Create tag keys and values
Before you can attach a tag to your GKE resources, you need to
create the tag and configure its values. To create tag keys and values, see
Creating a tag
and Adding tag values in the Resource Manager documentation.
Attach Tags to a cluster
You can attach Tags to an existing cluster if you have the correct
permissions by using the Google Cloud CLI, the Google Cloud console, or the
Tags API.
gcloud
To create a tag binding to attach a tag to a cluster, run the following
command:
gcloud resource-manager tags bindings create \
--tag-value = TAG_VALUE_ID \
--parent = RESOURCE_ID \
--location = CLUSTER_LOCATION
Replace the following:
TAG_VALUE_ID : The permanent ID or namespaced
name of the tag value to attach. For example, tagValues/4567890123 .
For details about tag identifiers, see
Tag definitions and identifiers .
RESOURCE_ID : The
full resource name of
your cluster, such as
//container.googleapis.com/projects/ PROJECT_ID /locations/ CLUSTER_LOCATION /awsClusters/ CLUSTER_NAME .
In the resource ID:
PROJECT_ID : Your Google Cloud project ID.
CLUSTER_NAME : The name of your cluster.
CLUSTER_LOCATION : the name of the Google Cloud
location from where your cluster is managed.
Console
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to Google Kubernetes Engine
In the cluster list, click the name of the cluster you want to modify.
In the Metadata section, next to Tags , click
edit Edit tags .
If your organization doesn't appear in the Tags panel, click
Select scope . Select your organization and click
Open .
In the Tags panel, select Add tag .
Select the key for the tag you want to attach from the list. You can
filter the list by typing keywords.
Select the value for the tag you want to attach from the list. You
can filter the list by typing keywords.
Click Save .
In the Confirm dialog, click Confirm to attach the
tag.
A notification confirms that your tags updated.
API
To attach a tag to a resource, you must first create a JSON representation
of a tag binding that includes the permanent IDs of the tag value and the
resource. For more information about the format of a tag binding, see the
TagBinding reference .
Use the tagBindings.create method with the endpoint where your cluster is
located.
POST https:// LOCATION -cloudresourcemanager.googleapis.com/v3/tagBindings
Replace LOCATION with the Google Cloud
location where your cluster is located, such as us-central1 .
JSON request body:
{
"parent" : " RESOURCE_ID " ,
"tagValue" : " TAG_VALUE_ID "
}
Replace the following:
RESOURCE_ID : The
full resource name of
your cluster, such as
//container.googleapis.com/projects/ PROJECT_ID /locations/ CLUSTER_LOCATION /awsClusters/ CLUSTER_NAME .
In the resource ID:
PROJECT_ID : Your Google Cloud project ID.
CLUSTER_NAME : The name of your cluster.
TAG_VALUE_ID : The permanent ID or namespaced
name of the tag value to attach. For example, tagValues/4567890123 .
For details about tag identifiers, see
Tag definitions and identifiers .
The output is similar to the following:
{
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.resourcemanager.v3.TagBinding",
"name": "tagBindings///container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /awsClusters/ CLUSTER_NAME /tagValues/ TAG_VALUE_ID ",
"parent": "//container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /awsClusters/ CLUSTER_NAME ",
"tagValue": " TAG_VALUE_ID "
}
}
List Tags attached to a cluster
You can list the Tags attached to a cluster by using the
gcloud CLI, the Google Cloud console, or the Tags API.
gcloud
To get a list of tag bindings attached to a cluster, run the following
command:
gcloud resource-manager tags bindings list \
--parent = RESOURCE_ID \
--location = CLUSTER_LOCATION
Replace the following:
RESOURCE_ID : The full resource name
of your cluster, such as
//container.googleapis.com/projects/ PROJECT_ID /locations/ CLUSTER_LOCATION /awsClusters/ CLUSTER_NAME .
In the resource ID:
PROJECT_ID : Your Google Cloud project ID.
CLUSTER_NAME : The name of your cluster.
CLUSTER_LOCATION : The Google Cloud
location where your cluster is located.
Console
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to
Google Kubernetes Engine
In the cluster list, click the name of the cluster you want to view.
In the Metadata section, next to Tags , look for the currently
attached tag values.
API
To get a list of tag bindings for a cluster, use the tagBindings.list
method with the endpoint where your cluster is located.
GET https:// LOCATION -cloudresourcemanager.googleapis.com/v3/tagBindings
JSON request body:
{
"parent" : RESOURCE_ID ,
}
Replace the following:
RESOURCE_ID : The full resource name
of your cluster, such as
//container.googleapis.com/projects/ PROJECT_ID /locations/ CLUSTER_LOCATION /awsClusters/ CLUSTER_NAME .
In the resource ID:
PROJECT_ID : Your Google Cloud project ID.
CLUSTER_NAME : The name of your cluster.
The output is similar to the following:
"tagBindings": [
{
"name": "tagBindings/%2F%2Fcontainer.googleapis.com%2Fprojects%2Ftags-bugbash-project%2Flocations%2Fus-central1%2Fclusters%2Ftestcluster/tagValues/758072120217",
"parent": "//container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /awsClusters/ CLUSTER_NAME ",
"tagValue": " TAG_VALUE_ID "
}
]
Detach Tags from a cluster
You can detach a tag from a cluster by deleting the tag binding resource
attached to the cluster by using the gcloud CLI, the
Google Cloud console, or the Tags API. If you need to delete a tag, you
must first detach from all attached resources.
gcloud
To detach a tag binding attached to a cluster, run the following
command:
gcloud resource-manager tags bindings delete \
--tag-value = TAG_VALUE_ID \
--parent = RESOURCE_ID \
--location = CLUSTER_LOCATION
Replace the following:
TAG_VALUE_ID : The permanent ID or namespaced
name of the tag value to detach. For example, tagValues/4567890123 .
For details about tag identifiers, see Tag definitions and
identifiers .
RESOURCE_ID : The full resource name
of your cluster, such as
//container.googleapis.com/projects/ PROJECT_ID /locations/ CLUSTER_LOCATION /awsClusters/ CLUSTER_NAME .
In the resource ID:
PROJECT_ID : Your Google Cloud project ID.
CLUSTER_NAME : The name of your cluster.
CLUSTER_LOCATION : The Google Cloud location
where your cluster is located.
Console
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to Google Kubernetes Engine
In the cluster list, click the name of the cluster you want to modify.
In the Metadata section, next to Tags , click
edit Edit tags .
In the Tags panel, next to the tag you want to detach, click
delete Delete item .
Click Save .
In the Confirm dialog, click Confirm to detach the
tag.
A notification confirms that your tags updated.
API
To delete tag bindings for a cluster, use the tagBindings.delete method
with the endpoint where your cluster is located.
DELETE https:// LOCATION -cloudresourcemanager.googleapis.com/v3/ TAG_BINDING_NAME
Replace TAG_BINDING_NAME with the full resource
name of the tagBinding
object you want to detach. For example,
tagBindings/container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /tagValues/ TAG_VALUE_ID .
Delete tag keys and tag values
Before you delete tag keys and values, ensure that the tags are detached from
all resources. Then, see
Deleting tags
to delete the keys and values.
Identity and Access Management conditions and tags
You can use tags and IAM conditions to conditionally grant role
bindings to users in your project hierarchy. When you change or delete the tag
attached to a cluster that has an IAM policy with conditional
role bindings, GKE re-evaluates access permissions based on the
updated conditions.
Authorization to list and create GKE clusters is checked at
the project level, not at the individual cluster level. If you use conditional
IAM role bindings with cluster-level tags to restrict access to
specific clusters, those users might experience errors when attempting to list
or create clusters in the project. To avoid these errors, attach a tag to the
parent project and use a conditional role binding to grant the list or create
access. For information about roles and permissions, see the
IAM roles reference .
For more information about conditional access grants in IAM, see
Identity and Access Management conditions and tags .
What's next
Learn how to set an organization policy with
Tags .
Learn more about how to manage tags and attach tags to
resources .
See the other services that support tags .
Learn how to use tags with IAM .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

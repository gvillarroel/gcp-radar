---
title: "Attach and manage tags on Cloud SQL instances \_|\_ Cloud SQL for MySQL \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/manage-tags
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/manage-tags
  title: "Attach and manage tags on Cloud SQL instances \_|\_ Cloud SQL for MySQL\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Guides
Send feedback
Attach and manage tags on Cloud SQL instances
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to attach, detach, and list tags on Cloud SQL
instances. For an overview of tags on Cloud SQL, see
Access control with Google Cloud tags .
Before you begin
Tags are managed through the Resource Manager. You need the following
Cloud SQL IAM permissions to view and set tags on
Cloud SQL instances:
cloudsql.instances.createTagBinding
cloudsql.instances.deleteTagBinding
cloudsql.instances.listTagBindings
resourcemanager.tagUser
The cloudsql permissions are inherited through the cloudsql.admin IAM
role. The resourcemanager.tagUser is required to tag and instance during instance creation
Create a Cloud SQL instance with a tag
To create an instance with a tag attached, use the --tags flag when creating the instance.
This combines the tags with organization policies, custom organization policies, and IAM conditions to
give more customization to instance creation policies.
For example, the following command creates an instance in the gcloud CLI with the 1234 tag with a value of 5678
[ gcloud sql instances create tags-instance --tags=tagKeys/1234=tagValues/5678 ]
Attach tags to Cloud SQL instances
Once you've created and defined
a tag using Resource Manager, you can attach the tag directly to your
Cloud SQL instance.
For example:
The tag value is 815471563813/environment/development .
815471563813 is the organization ID.
environment is the tag key.
development is the tag value.
Your project name is my-project .
Your instance name is my-instance .
Your instance is in us-central1 .
The gcloud resource-manager tags bindings create command attaches the tag to a resource, in this case, my-instance :
gcloud resource-manager tags bindings create \
--tag-value = 815471563813 /environment/development \
--parent = //sqladmin.googleapis.com/projects/my-project/instances/my-instance \
--location = us-central1
Detach tags from Cloud SQL instances
The gcloud resource-manager tags bindings delete command detaches the tag from my-instance :
gcloud resource-manager tags bindings delete \
--tag-value = 815471563813 /environment/development \
--parent = //sqladmin.googleapis.com/projects/my-project/instances/my-instance \
--location = us-central1
List tags on Cloud SQL instances
The gcloud resource-manager tags bindings list command lists all tags directly attached to my-instance ,
except tags that my-instance has inherited:
gcloud resource-manager tags bindings list \
--parent = //sqladmin.googleapis.com/projects/my-project/instances/my-instance \
--location = us-central1
What's next
For an overview of tags on Cloud SQL, see
Access control with Google Cloud tags
For more detailed instructions, see Attach tags to resources .
Learn about IAM conditionals .
Learn how to use IAM conditionals with Cloud SQL .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

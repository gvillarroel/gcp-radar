---
title: "Attach and manage tags on Dataproc Metastore resources \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags
  title: "Attach and manage tags on Dataproc Metastore resources \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
Attach and manage tags on Dataproc Metastore resources
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to attach, detach, and list tags on Dataproc Metastore
resources. For an overview of tags on Dataproc Metastore, see
Organize Dataproc Metastore resources using tags .
Before you begin
To get the permissions that
you need to view and set tags on Dataproc Metastore resources,
ask your administrator to grant you the
following IAM roles on your project:
Dataproc Metastore Editor ( roles/metastore.editor ):
assign to set and view tags
Dataproc Metastore Viewer ( roles/metastore.viewer ):
assign to view tags
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Work with tags
After you've created and
defined a tag
using Resource Manager, you can start using tags with
Dataproc Metastore service and federation resources. For more
information about the Google Cloud CLI commands to use tag bindings, see gcloud
resource-manager tags
bindings .
For all of the commands on this page, replace the following:
PARENT_PATH : The complete path to the service or federation resource—for example, //metastore.googleapis.com/projects/my-project/locations/us-central1/services/my-service .
TAG_VALUE : The tag value that you want to attach to your resource—for example, the tag value set as 815471563813/environment/development includes the following components:
815471563813 is the organization ID or your project ID.
environment is the tag key.
development is the tag value.
LOCATION : The region where your service or federation is located—for example, us-central1 .
Attach tags to Dataproc Metastore resources
gcloud resource-manager tags bindings create \
--parent= PARENT_PATH \
--tag-value= TAG_VALUE \
--location= LOCATION
Detach tags from Dataproc Metastore resources
gcloud resource-manager tags bindings delete \
--parent= PARENT_PATH \
--tag-value= TAG_VALUE \
--location= LOCATION
List tags on Dataproc Metastore resources
gcloud resource-manager tags bindings list \
--parent= PARENT_PATH \
--location= LOCATION
What's next
Learn more about attaching tags to resources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

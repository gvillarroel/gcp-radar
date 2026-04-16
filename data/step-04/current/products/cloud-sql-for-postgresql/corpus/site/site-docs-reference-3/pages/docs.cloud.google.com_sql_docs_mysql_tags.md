---
title: "Access control with Google Cloud tags \_|\_ Cloud SQL for MySQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/tags
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/tags
  title: "Access control with Google Cloud tags \_|\_ Cloud SQL for MySQL \_|\_ Google\
    \ Cloud Documentation"
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
Access control with Google Cloud tags
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes Google Cloud tags and how to use them with
Cloud SQL. To add tags to your Cloud SQL instances using
gcloud now, see Attach and manage tags on Cloud SQL instances . To add tags to your Cloud SQL
instances using the Google Cloud console now, see Create and manage tags on your instance .
Overview
Google Cloud tags are a way to organize your Cloud SQL resources.
Tags are applied at higher levels of the resource hierarchy
across Google Cloud. Cloud SQL and other instances inherit the tags.
They are managed using Resource Manager .
You can add a reference to tags in IAM policy bindings
to grant conditional access to resources.
Tags are different from labels ,
which are another way to organize and filter your instances. Tags and labels
work independently of each other, and you can use both on the same instance. For
more information about using labels in Cloud SQL, see
Label instances .
What are tags?
Tags are key-value pairs you can apply to your resources for fine-grained access
control.
A tag key could be a property, such as environment , and the tag value could be
an attribute, such as development or production . A tag can have only one
value for a given key on a particular resource.
Tags are created at the Organization level. Tags are attached to resources, such
as a project or a Cloud SQL instance, through the
Resource Manager , which is used
across Google Cloud.
Grant permissions based on conditional tag bindings
Once a tag is attached to or inherited by a Cloud SQL instance,
you can use the tag
with IAM Conditions to grant access to Cloud SQL
resources conditionally. IAM Conditions let you impose
fine-grain access control to Cloud SQL instances. To use
IAM Conditions, you reference the tags in IAM
policy bindings. For more information on how to use tags to grant conditional
access to Cloud SQL instances, see
Use IAM conditions .
If you add tag-based bindings to an instance, then you can grant access to Cloud SQL resources conditionally. Based on this conditional access, you
can see all backups of the active instance as well as the final backups of instances that are deleted
and have the same name. However, after you delete an instance with tag bindings,
you can't see any backups related to the instance name. This is because you
deleted the instance and the tags can no longer be determined.
Restrictions
Tags have the following restrictions:
Organization policies
can conditionally reference tags inherited from the Project level and above,
but don't support tags that are directly attached to Cloud SQL
instances.
Cloud Audit logs show the creation and deletion
of tags, but entries are not generated for attaching tags and viewing tag
bindings on Cloud SQL instances.
What's next
Learn how to create and manage tags on your instance
using Resource Manager.
See specific gcloud commands for Cloud SQL in
Manage tags on Cloud SQL .
Learn about IAM conditions .
Learn how to use IAM conditions with Cloud SQL .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

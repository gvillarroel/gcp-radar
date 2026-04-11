---
title: "Access control with tags \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/access-control-with-tags
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/configure-spanner
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/access-control-with-tags
  title: "Access control with tags \_|\_ Datastream \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
Access control with tags
Stay organized with collections
Save and categorize content based on your preferences.
This page describes tags and how to use them with
Datastream. To use gcloud to attach, detach, and list tags on your Datastream resources, see Manage tags .
Tags are a way to organize your Datastream resources. These resources include private connectivity configurations, connection profiles, and streams.
Tags are applied at higher levels of the resource hierarchy
across Google Cloud. Datastream and other resources inherit the tags.
They are managed using Resource Manager .
You can add a reference to tags in IAM policy bindings
to grant conditional access to resources.
Tags are different from labels ,
which are another way to organize and filter your resources in Datastream. Tags and labels
work independently of each other, and you can use both on the same resource. You can learn about using labels with Datastream resources, including connection profiles and streams .
What are tags?
Tags are key-value pairs you can apply to your Datastream resources for fine-grained access
control.
A tag key could be a property, such as environment , and the tag value could be
an attribute, such as development or production . A tag can have only one
value for a given key on a particular resource.
Tags are created at the Organization level. Tags are attached to resources, such
as a project or a Datastream private connectivity configuration, connection profile, or stream, through the
Resource Manager , which is used
across Google Cloud.
Grant permissions based on conditional tag bindings
After a tag is attached to or inherited by a Datastream resource,
you can use the tag
with IAM Conditions to grant access to Datastream
resources conditionally. IAM Conditions let you impose
fine-grain access control to Datastream resources. To use
IAM Conditions, you reference the tag in IAM
policy bindings.
Restrictions
Tags have the following restrictions:
Organization policies
can conditionally reference tags inherited from the project level and higher,
but don't support tags that are directly attached to Datastream resources.
Cloud Audit logs show the creation and deletion
of tags, but entries are not generated for attaching tags and viewing tag
bindings on Datastream resources.
What's next
Learn how to use Resource Manager to create and manage tags for your Datastream resources .
See specific gcloud commands to attach, detach, and list tags on your Datastream resources in
Manage tags .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

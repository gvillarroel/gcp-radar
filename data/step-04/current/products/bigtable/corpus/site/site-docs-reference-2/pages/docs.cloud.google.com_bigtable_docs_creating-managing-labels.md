---
title: "Create and manage instance labels \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/creating-managing-labels
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/creating-managing-labels
  title: "Create and manage instance labels \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create and manage instance labels
Bigtable provides the option to add labels to your instances. Labels are
key-value pairs that you can use to group related instances and store metadata
about an instance.
This page explains how you can use labels with your Bigtable
instances. It also describes how to add, update, and remove the labels for an
instance.
What are labels?
A label is a key-value pair that you can assign to Google Cloud instances.
They help you organize these resources and manage your costs at scale, with the
granularity you need. You can attach a label to each resource, then filter the
resources based on their labels. Information about labels is forwarded to the billing system that
lets you break down your billed charges by label. With built-in billing reports ,
you can filter and group costs by resource labels.
You can also use labels to
query billing data exports .
Requirements for labels
The labels applied to a resource must meet the following
requirements:
Each resource can have up to 64 labels.
Each label must be a key-value pair.
Keys have a minimum length of 1 character and a maximum length of 63
characters, and cannot be empty. Values can be empty, and have a maximum length
of 63 characters.
Keys and values can contain only lowercase letters, numeric characters,
underscores, and dashes. All characters must use UTF-8 encoding, and
international characters are allowed. Keys must start with a lowercase letter or
international character.
The key portion of a label must be unique within a single resource.
However, you can use the same key with multiple resources.
These limits apply to the key and value for each label, and to the
individual Google Cloud resources that have labels. There
is no limit on how many labels you can apply across all resources
within a project.
Common uses of labels
Here are some common use cases for labels:
Team or cost center labels : Add labels based on team or
cost center to distinguish instances owned by different
teams (for example, team:research and team:analytics ). You can use this
type of label for cost accounting or budgeting.
Component labels : For example, component:redis ,
component:frontend , component:ingest , and component:dashboard .
Environment or stage labels : For example,
environment:production and environment:test .
State labels : For example, state:active ,
state:readytodelete , and state:archive .
Ownership labels : Used to identify the teams that are
responsible for operations, for example: team:shopping-cart .
Note: Don't include sensitive information in labels, including
personally identifiable information, such as an individual's name or title.
Labels are not designed to handle sensitive information.
We don't recommend creating large numbers of unique labels, such as
for timestamps or individual values for every API call.
The problem with this approach is that when the values change frequently or with
keys that clutter the catalog, this makes it difficult to effectively filter and
report on resources.
Labels and tags
Labels can be used as queryable annotations for resources, but can't be used
to set conditions on policies. Tags provide a way to conditionally allow or
deny policies based on whether a resource has a specific tag, by providing fine-grained
control over policies. For more information, see the
Tags overview .
Add or updating an instance's labels
After you create a Bigtable instance , you can
use the Google Cloud console to add labels to the instance and update existing
labels. You can also use the RPC Admin API or the REST Admin
API to add or update labels.
To add or update labels for a Bigtable instance using the
Google Cloud console:
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Check the box next to each instance whose labels you want to modify.
If the Labels panel is not visible, click Show info panel in the
upper right corner to open it.
Add and update labels as needed.
To add a new label, click Add label , then type the key and value for the
label.
To modify an existing label, update its value. You cannot change the key for
an existing label.
Click Save to save your changes.
Remove a label from an instance
To remove a label from a Bigtable instance using the
Google Cloud console:
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Check the box next to each instance whose labels you want to remove.
If the Labels panel is not visible, click Show info panel in the
upper right corner to open it.
Click the X next to each label that you want to remove.
Click Save to save your changes.
What's next
Learn how to modify other properties of a Bigtable
instance .
View per-instance Bigtable usage in the Cloud Billing
detailed export to BigQuery .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

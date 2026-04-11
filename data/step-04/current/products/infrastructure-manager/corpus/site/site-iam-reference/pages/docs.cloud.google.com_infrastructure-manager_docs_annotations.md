---
title: "Annotations and labels \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/annotations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/annotations
  title: "Annotations and labels \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Infrastructure as code
Infrastructure Manager
Guides
Send feedback
Annotations and labels
Stay organized with collections
Save and categorize content based on your preferences.
You can use annotations and labels with Infrastructure Manager.
They're not required. This document lists the resources to which you can attach
labels and annotations, and describes how you can use them and where you can
view them. To use annotations or labels with Infra Manager, use the
--annotation and --label flags.
What are annotations and labels?
Annotations are key-value pairs of free-form text. You can use them to attach
arbitrary information associated with the resource.
You can use labels to organize resources. For example, you can apply logic
based on label selection.
Annotations are used for storing non-identifying information typically used by
client tools to store arbitrary data attached to a resource, while labels are
typically used to organize resources.
For more information about using annotations with Google Cloud, see
annotations AIP documentation. To learn more about using labels, see the
labels overview documentation.
Annotation and label constraints
As with annotations, labels are key-value pairs that must conform to the
following limitations:
Keys and values both must be 128 bytes or less.
Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes.
Keys must start with a lowercase letter or international character.
All characters must use UTF-8 encoding. International characters are allowed.
For example:
--annotation="appVersion=v.1.2.3,environment=production"
Use annotations and labels with Infra Manager
The use of annotations and labels can be applied in a variety of ways across
your Google Cloud infrastructure.
When you create or update deployments with Infra Manager, you can use
annotations and labels to monitor deployments or query sets of information.
For more information, see deploy infrastructure using Infra Manager ,
update a deployment , or preview a deployment .
What's next
Use Infra Manager to standardize, reuse, and scale your infrastructure
with Google Cloud:
Deploy a VPC using Terraform
Deploy infrastructure using Infra Manager
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

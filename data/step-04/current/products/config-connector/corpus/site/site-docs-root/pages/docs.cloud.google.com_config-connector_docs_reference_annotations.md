---
title: "Annotations \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/annotations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/annotations
  title: "Annotations \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Annotations
This page outlines the annotations supported by Config Connector resources.
Generic annotations
Generic annotations can be applied to all Config Connector resources. You can
find the list of generic annotations and their descriptions in the following
table.
Annotation
Description
cnrm.cloud.google.com/deletion-policy: POLICY
Can be "none" or "abandon". When deleting a Config Connector resource the
associated Google Cloud resource is deleted by default. To keep the
Google Cloud resource, specify "abandon". Default value is "none".
cnrm.cloud.google.com/management-conflict-prevention-policy: POLICY
Can be "none" or "resource". For more details
see Managing conflicts with multiple Config Connector resources .
Default value is "none".
cnrm.cloud.google.com/ignore-clusterless: "true"
Can be "true" or "false" . Indicates resources which should be skipped
when running outside a server environment. For example, these resources will
not be exported as Terraform .
Default value is "false" .
cnrm.cloud.google.com/reconcile-interval-in-seconds: NUMBER
Must be non-negative integers. For more details,
see Configuring the reconciliation interval .
Resource-specific annotations
Resource-specific annotations configure Config Connector to take additional
actions beyond creating or deleting resources.
For example, Cloud Storage doesn't let you delete a StorageBucket that
contains objects. Applying the force-destroy annotation to the bucket and then
deleting the bucket causes Config Connector to delete all of the objects within
the bucket first, then deletes the bucket.
For example, the force-destroy directive is declared in the following YAML
snippet.
metadata :
annotations :
cnrm.cloud.google.com/force-destroy : "true"
Check each Config Connector resource's reference page to learn
resource-specific annotations.
Annotations for internal usage
The following annotations are managed by Config Connector. You must never set or
edit any of them.
Annotation
Description
cnrm.cloud.google.com/mutable-but-unreadable-fields
This annotation is added and managed by Config Connector for resources
with mutable
but unreadable fields (for example, "password" field in some resource spec).
cnrm.cloud.google.com/observed-secret-versions
This annotation is added and managed by Config Connector for resources
with sensitive fields.
cnrm.cloud.google.com/supports-ssa
This annotation is added and managed by Config Connector for resources
with server-side apply enabled
.
cnrm.cloud.google.com/blueprint
This annotation is added for resources used in KRM blueprints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Roles and permissions \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/immersive-stream/xr/docs/iam
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/immersive-stream/xr/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/immersive-stream/xr/docs/iam
  title: "Roles and permissions \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Immersive Stream for XR
Guides
Send feedback
Roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the permissions required by the Immersive Stream for XR API and the
Identity and Access Management (IAM) roles that
encapsulate them.
Roles
The following table lists the Immersive Stream for XR API roles and the
permissions that they encapsulate.
Role
Resources
Description
Permissions
Stream Admin stream.admin
StreamContents, StreamInstances
Full access to all StreamContent resources and StreamInstance resources.
stream.streamContents.get
stream.streamContents.list
stream.streamContents.create
stream.streamContents.update
stream.streamContents.delete
stream.streamContents.build
stream.streamInstances.get
stream.streamInstances.list
stream.streamInstances.create
stream.streamInstances.update
stream.streamInstances.delete
Stream Viewer stream.viewer
StreamContents, StreamInstances
Read-only access to Stream all resources.
stream.streamContents.get
stream.streamContents.list
stream.streamInstances.get
stream.streamInstances.list
Stream Content Admin stream.contentAdmin
StreamContents
Full access to all StreamContent resources.
stream.streamContents.get
stream.streamContents.list
stream.streamContents.create
stream.streamContents.update
stream.streamContents.delete
stream.streamContents.build
Stream Content Builder stream.contentBuilder
StreamContents
Read and build access to StreamContent resources.
stream.streamContents.get
stream.streamContents.list
stream.streamContents.build
Stream Instance Admin stream.instanceAdmin
StreamContents, StreamInstances
Full access to all StreamContent resources and Read access to all StreamInstance resources.
stream.streamContents.get
stream.streamContents.list
stream.streamInstances.get
stream.streamInstances.list
stream.streamInstances.create
stream.streamInstances.update
stream.streamInstances.delete
Stream Service Agent stream.serviceAgent
Give Immersive Stream for XR access to the required resources.
resourcemanager.projects.get
resourcemanager.projects.list
storage.objects.get
storage.objects.list
storage.objects.create
storage.buckets.get
storage.buckets.create
Permissions
The following table lists the permissions required to perform specific
operations on StreamContent and StreamInstance
resources.
Operation and method
Resource
Permission
Create a Stream Content streamContents.create
StreamContents
stream.streamContents.create on the target Project.
Get information about a Stream Content streamContents.get
StreamContents
stream.streamContents.get on the target Project.
List Stream Contents in the Project streamContents.list
StreamContents
stream.streamContents.get on the target Project.
Update a Stream Content streamContents.update
StreamContents
stream.streamContents.update on the target Project.
Delete a Stream Content streamContents.delete
StreamContents
stream.streamContents.delete on the target Project.
Build a Stream Content streamContents.build
StreamContents
stream.streamContents.build on the target Project.
Create a Stream Instance streamInstances.create
StreamInstances
stream.streamInstances.create on the target Project.
Get information about a Stream Instance streamInstances.get
StreamInstances
stream.streamInstances.get on the target Project.
List Stream Instances in the Project streamInstances.list
StreamInstances
stream.streamInstances.get on the target Project.
Update a Stream Instance streamInstances.update
StreamInstances
stream.streamInstances.update on the target Project.
Delete a Stream Instance streamInstances.delete
StreamInstances
stream.streamInstances.delete on the target Project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

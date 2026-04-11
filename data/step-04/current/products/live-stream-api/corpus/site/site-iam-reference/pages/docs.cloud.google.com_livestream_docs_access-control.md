---
title: "Access control with IAM \_|\_ Live Stream API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/livestream/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/livestream/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/livestream/docs/access-control
  title: "Access control with IAM \_|\_ Live Stream API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Live Stream API
Guides
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
Overview
Live Stream API uses Identity and Access Management (IAM) for
access control.
You can configure access control for the Live Stream API at the project
level. For example, you can grant access for developers to list and get all
events within a project.
For a detailed description of IAM and its features, see the
IAM documentation . In particular, see the section
on
managing IAM policies .
Every Live Stream API method requires the caller to have the necessary
permissions. For more information, see Permissions and
Roles .
Permissions
This section summarizes the Live Stream API permissions that IAM supports.
Required permissions
The following tables list the IAM permissions that are associated with Live Stream API.
Note: Method names are shortened in the table; each method's full name begins
with projects.locations .
Assets method name
Required permissions
assets.create
livestream.assets.create on the parent location,
which is a specific Google Cloud project and data location
combination.
assets.delete
livestream.assets.delete on the asset resource.
assets.get
livestream.assets.get on the asset resource.
assets.list
livestream.assets.list on the parent location, which
is a specific Google Cloud project and data location
combination.
Channels method name
Required permissions
channels.create
livestream.channels.create on the parent location,
which is a specific Google Cloud project and data
location combination.
channels.delete
livestream.channels.delete on the channel resource.
channels.get
livestream.channels.get on the channel resource.
channels.list
livestream.channels.list on the parent location,
which is a specific Google Cloud project and data
location combination.
channels.patch
livestream.channels.update on the channel resource.
channels.start
livestream.channels.start on the channel resource.
channels.stop
livestream.channels.stop on the channel resource.
Clips method name
Required permissions
channels.clips.create
livestream.clips.create on the parent channel
for the resource.
channels.clips.delete
livestream.clips.delete on the clip resource.
channels.clips.get
livestream.clips.get on the clip resource.
channels.clips.list
livestream.clips.list on the parent channel for
the resource.
Events method name
Required permissions
channels.events.create
livestream.events.create on the parent channel
for the resource.
channels.events.delete
livestream.events.delete on the event resource.
channels.events.get
livestream.events.get on the event resource.
channels.events.list
livestream.events.list on the parent channel
for the resource.
Inputs method name
Required permissions
inputs.create
livestream.inputs.create on the parent location,
which is a specific Google Cloud project and data location
combination.
inputs.delete
livestream.inputs.delete on the input resource.
inputs.get
livestream.inputs.get on the input resource.
inputs.list
livestream.inputs.list on the parent location, which
is a specific Google Cloud project and data location
combination.
inputs.patch
livestream.inputs.update on the input resource.
Pools method name
Required permissions
pools.get
livestream.pools.get on the pool resource.
pools.patch
livestream.pools.patch on the pool resource.
Roles
The following table lists the Live Stream API IAM
roles, including the permissions associated with each role:
IAM role
Permissions
Live Stream Viewer
( roles/ livestream.viewer )
Read access to Live Stream resources.
livestream.assets.get
livestream.assets.list
livestream.channels.get
livestream.channels.list
livestream.clips.get
livestream.clips.list
livestream.dvrSessions.get
livestream.dvrSessions.list
livestream.events.get
livestream.events.list
livestream.inputs.get
livestream.inputs.list
livestream.locations.*
livestream.locations.get
livestream.locations.list
livestream.operations.get
livestream.operations.list
livestream.pools.get
resourcemanager.projects.get
resourcemanager.projects.list
Live Stream Editor
( roles/ livestream.editor )
Full access to Live Stream resources.
livestream.*
livestream.assets.create
livestream.assets.delete
livestream.assets.get
livestream.assets.list
livestream.channels.create
livestream.channels.delete
livestream.channels.get
livestream.channels.list
livestream.channels.start
livestream.channels.stop
livestream.channels.update
livestream.clips.create
livestream.clips.delete
livestream.clips.get
livestream.clips.list
livestream.dvrSessions.create
livestream.dvrSessions.delete
livestream.dvrSessions.get
livestream.dvrSessions.list
livestream.dvrSessions.update
livestream.events.create
livestream.events.delete
livestream.events.get
livestream.events.list
livestream.inputs.create
livestream.inputs.delete
livestream.inputs.get
livestream.inputs.list
livestream.inputs.update
livestream.locations.get
livestream.locations.list
livestream.operations.cancel
livestream.operations.delete
livestream.operations.get
livestream.operations.list
livestream.pools.get
livestream.pools.update
resourcemanager.projects.get
resourcemanager.projects.list
For more information about roles, see
Understanding roles .
Access to Cloud Storage
By default, the Live Stream API has access to all of your project's
Cloud Storage buckets. When you create your first live streaming event, the
Live Stream API creates a service account using the following naming
convention:
service- PROJECT_NUMBER @gcp-sa-livestream.iam.gserviceaccount.com
PROJECT_NUMBER is the number of your project with the Live Stream API enabled. This service account is granted the Live Stream
Service Agent role and has permissions to do the following:
Read files in your project's Cloud Storage buckets
Upload files to your project's Cloud Storage buckets
Delete files in your project's Cloud Storage buckets
List files and their metadata in your project's Cloud Storage buckets
Note: It can take up to 7 minutes for the service account permissions to fully
propagate across the system, see
Access change propagation .
Limiting access
To limit this access to your Cloud Storage buckets, remove the Live Stream
Service Agent role from the service account and replace it with more
fine-grained access. Follow these steps:
Go to the
IAM page
( Permissions tab) in the Google Cloud console.
Find the service account with the Live Stream Service Agent role and select
the edit button.
Delete the Live Stream Service Agent role from the service account.
Grant access to the service account for each individual Cloud Storage
bucket:
Go to the Cloud Storage Browser
page.
Click a bucket.
Select the Permissions tab.
Click Add .
In the New principals field, type the name of the service account.
Under Role , select Storage Object Admin .
Click Save . The Live Stream API now has access to the
bucket.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

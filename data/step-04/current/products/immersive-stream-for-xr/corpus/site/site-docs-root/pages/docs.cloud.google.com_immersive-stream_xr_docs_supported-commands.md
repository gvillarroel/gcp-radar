---
title: "Supported commands \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/immersive-stream/xr/docs
source_metadata:
  url: https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands
  title: "Supported commands \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Immersive Stream for XR
Reference
Send feedback
Supported commands
Stay organized with collections
Save and categorize content based on your preferences.
This page provides information about the Google Cloud CLI and PowerShell scripts
used with Immersive Stream for XR from Google Cloud.
gcloud CLI
To make sure that the gcloud CLI is up to date, use
the update command:
gcloud components update
For long running commands such as create , delete , and build , run these
asynchronously with the --async flag.
If you want to run them synchronously, omit the flag. In both cases,
the command prints out the operation ID that corresponds to the long-running
operation. In the synchronous case, the command automatically polls and waits
for the operation to complete.
If you cancel the command with Ctrl+C , it only cancels the wait for operation,
not the actual command. You can query the status of
the operation by using the operation's describe and wait commands listed in the
following table.
Description
Commands
Create a Content resource that points to the specified bucket.
gcloud immersive-stream xr contents create my-content --bucket= my-gcs-bucket --async
Describe a specific Content resource.
gcloud immersive-stream xr contents describe my-content
List all Contents resources created.
gcloud immersive-stream xr contents list
Build a versioned Content resource using the current source files in the bucket.
gcloud immersive-stream xr contents build my-content --version= my-version-tag --async
Deletes a Content resource.
This does not remove any source files in the bucket.
gcloud immersive-stream xr contents delete my-content --async
Update a Content resource to use a different Cloud Storage bucket.
gcloud immersive-stream xr contents update my-content --bucket= my-gcs-bucket --async
Create an Instance to serve a given Content in specific regions.
This enables streaming of the content with the specific Content version.
gcloud immersive-stream xr instances create my-instance --content= my-content --version= my-version-tag --add-region="region= region1 ,capacity= capacity1 " --add-region="region= region2 ,capacity= capacity2 "
--fallback-url=" https://www.example.com " --async
Describe a specific Instance.
gcloud immersive-stream xr instances describe my-instance
List all Instances created.
gcloud immersive-stream xr instances list
Update an Instance with a specific Content version. This updates the content
build deployed without needing to create a new Instance.
gcloud immersive-stream xr instances update my-instance --version= my-version-tag --async
Update an Instance with a new custom fallback URL.
gcloud immersive-stream xr instances update my-instance --fallback-url=" https://www.example.com " --async
Update an Instance in one region with a different capacity. Only one region
may be updated at a time. The new capacity may not be 0 and may not
exceed the capacity limit.
gcloud immersive-stream xr instances update my-instance --update-region="region= existing-region ,capacity= new-capacity " --async
Add a new region to an instance. Only one region may be added at a time.
gcloud immersive-stream xr instances update my-instance --add-region="region= new-region ,capacity= capacity " --async
Remove an existing region from an instance. Only one region may be removed at a time.
gcloud immersive-stream xr instances update my-instance --remove-region= existing-region --async
Deletes an Instance. This releases all compute resources reserved
for streaming.
gcloud immersive-stream xr instances delete my-instance --async
Synchronously wait for a long running operation to complete.
gcloud immersive-stream xr operations wait operation-id
Describe the status of a long running operation.
gcloud immersive-stream xr operations describe operation-id
List all operations created in the past seven days.
gcloud immersive-stream xr operations list
Note: The following commands are for features that are not yet publicly available. Contact the support team if you would like to use these features.
Description
Commands
Create an Instance that uses NVIDIA L4 GPUs and supports 3D-only mode. AR mode won't be supported by this instance.
gcloud immersive-stream xr instances create my-instance --content= my-content --version= my-version-tag --add-region="region= region1 ,capacity= capacity1 " --mode=3d --gpu-class=l4 --async
Create an Instance that has autoscaling enabled. The capacity of the region is considered as the maximum capacity for autoscaling. The autoscaling_min_capacity is the minimum value of capacity the autoscaler will maintain. The autoscaling_buffer is the value of available capacity (not occupied by an active streaming session) the autoscaler will scale to maintain. These three parameters must be configured such that the autoscaling_buffer is less than or equal to the autoscaling_min_capacity and both are less than the capacity (maximum), all three must be greater than zero.
gcloud immersive-stream xr instances create my-instance --content= my-content --version= my-version-tag --add-region="region= region1 ,capacity= capacity ,enable_autoscaling= true ,autoscaling_buffer= buffer ,autoscaling_min_capacity= min-capacity " --async
Update autoscaling config in a region. The values for capacity , autoscaling_buffer , and autoscaling_min_capacity can all be updated individually or multiple/all in one command.
gcloud immersive-stream xr instances update my-instance --update-region="region= existing-region ,capacity= new-capacity ,enable_autoscaling= true ,autoscaling_buffer= new-buffer ,autoscaling_min_capacity= new-min-capacity " --async
Disable autoscaling in a region.
gcloud immersive-stream xr instances update my-instance --update-region="region= existing-region ,capacity= capacity ,enable_autoscaling= false " --async
PowerShell scripts
The following table describes the PowerShell scripts in the template project
XR_Actions folder.
Description
Scripts
Uploads the contents of the Unreal® Engine project to the Cloud Storage bucket by copying the necessary files from the local files system to the Cloud Storage bucket. This doesn't create a new version or update the version served on the instance.
.\XR_Actions\SyncContent.ps1 -gcs_bucket my-gcs_bucket
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

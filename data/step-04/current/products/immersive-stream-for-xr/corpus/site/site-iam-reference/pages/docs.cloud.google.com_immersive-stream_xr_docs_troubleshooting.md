---
title: "Troubleshoot Immersive Stream for XR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/immersive-stream/xr/docs/troubleshooting
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/immersive-stream/xr/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/immersive-stream/xr/docs/troubleshooting
  title: "Troubleshoot Immersive Stream for XR \_|\_ Google Cloud Documentation"
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
Troubleshoot Immersive Stream for XR
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to resolve issues with Immersive Stream for XR from Google Cloud.
Client and streaming issues
If you run into problems trying to access or stream your AR or 3D experience,
this page lists error messages you might see and provides suggestions for how
to fix each error.
Connection failures
Google Kubernetes Engine regional outage
If your service instance's available capacity drops below its configured
capacity, your users might experience more frequent connection errors.
You can view ongoing outages and service information on the
Google Cloud Service Health page.
This issue occurs when there is a Google Kubernetes Engine (GKE) regional outage
within Google Cloud which can impact the service instance availability for
Immersive Stream for XR experiences.
To resolve this issue, consider temporarily redistributing the service instance capacity
to nearby unaffected regions until the service outage is resolved. This can add
additional latency to the service, but will allow your users to continue using the service.
Insufficient capacity
The following error might occur when you try to access your streaming experience
from a client:
This stream is temporarily unavailable due to high demand. You can try again or go to FALLBACK_URL to come back later.
This error occurs if all service instance capacity is already in use for
other user sessions. After a streaming session ends, it takes up
to a few minutes for the capacity to become available again.
To resolve this issue, you can increase the configured capacity for this
instance using the Google Cloud CLI or Google Cloud console. You will be charged for the
additional capacity according to the
pricing model .
Client progress bar stops progressing
When opening the streaming experience from a client, the progress bar might
appear stuck at a certain percentage.
To resolve this issue, update the Google Search app on the client.
API failures
Create content resource failed
To resolve this issue, ensure the Cloud Storage bucket is in
the same project and try to re-create the content resource.
This error can also occur if there is an existing content resource with the same
name as the one you are trying to create. In this case, you can resolve the
issue by creating the content resource using a different name.
Delete content resource failed
To resolve this issue, try the operation again.
If repeated retries fail, you can
open a support ticket to
get help cleaning up the content resource.
You aren't charged for content resources, so you can ignore this
content resource and create a new one using a different name.
Build content resource failed
Troubleshoot the root cause of the build failure by investigating the Unreal®
Engine build logs. In the Google Cloud console, go to
the Content resource detail page of the content resource, and then refer
to the Content versions table > Build logs column, which
links to a Cloud Storage bucket with the log files.
If logs exist
Investigate the logs to find the root cause of the build failure. The majority
of these issues are related to your AR/3D project and not to your
use of Immersive Stream for XR.
Version mismatch
You might see one of the following errors in your logs:
Minor builder and template versions don't match ( BUILDER_VERSION vs. PROJECT_VERSION ). Aborting build.
or
Major builder and template versions don't match ( BUILDER_VERSION vs. PROJECT_VERSION ). Aborting build.
To resolve this error, integrate your AR/3D project with the latest version of the
template project .
Failed build
If there is a Failed message at the end of the logs, read through the logs
to see why the failure occurred. For Immersive Stream for XR issues relating to
Unreal Engine, see the Unreal Engine Issues section.
If no logs exist
This happens when the build fails before logs are generated.
To resolve this issue, retry the build command. If it fails again and no logs
are generated,
open a support ticket to get
help with building your project.
Create service instance failed
If creating a service instance fails, try the operation again or use a different
service instance name. If repeated retries fail, you can create a new content
resource and try to create the service instance with the new content resource.
Delete service instance failed
If deleting a service instance fails, the instance will have lifecycle state of
ERROR . When this happens, you will no longer be charged for the service instance.
To resolve the issue, retry the deletion command. If repeated retries fail,
open a support ticket
to get help cleaning up the instance. You can't create a new service instance
using the same content resource until the current instance is fully deleted.
Update service instance capacity failed
If updating the capacity of a region for a service instance fails, the
instance will have lifecycle state of ERROR. When this happens, you will no
longer be charged. Streaming from the region with the failed update might be
impacted, but you will still be able to stream from other regions.
To resolve this issue, retry the update capacity command for the same region.
When the update succeeds, the lifecycle state will return to READY. The instance
will be fully functional again and charges will resume.
If repeated retries fail, try to remove this region and then add it
back again.
Update service instance content version failed
If updating the served content version of an instance fails, the instance will
have a lifecycle state of ERROR . When this happens, you will no longer be charged,
but users might still be able to stream content.
To resolve the issue, retry the update command. When the update succeeds, the
lifecycle state will return to READY. The instance will be fully functional
again and charges will resume.
If repeated retries fail, delete the instance and recreate it again.
Add service instance region failed
If adding a new region to an instance fails, the instance will have a lifecycle
state of ERROR . When this happens, you will no longer be charged, but
users might still be able to stream content.
To resolve the issue, retry the add region command. If repeated retries fail,
you can try adding a nearby region in order to achieve similar
coverage. You can
open a support ticket to get
help adding the desired region to your instance.
Remove service instance region failed
If removing a region from an instance fails, the instance will have a lifecycle
state of ERROR . When this happens, you will no longer be charged, but
streaming from the other regions might still be functional.
To resolve the issue, retry the remove region command. If repeated retries
fail, open a support ticket
to get help removing the undesired region from your instance.
Unreal Engine issues
Note: Some issues with Unreal Engine are not related to the use of
Immersive Stream for XR and you might need to contact Unreal support.
Only known Immersive Stream for XR issues related to Unreal Engine are documented
in this troubleshooting guide.
Cook stage fails
The following error occurs in the logs of the build content stage.
ERROR: Cook failed. (see /home/unreal/Library/Logs/Unreal Engine/LocalBuildLogs/Log.txt for full exception trace)
In most cases, this is due to an asset or file missing in your project.
To resolve this issue, check the logs for any errors or
warnings and resolve them. If you have resolved all errors and the cook
stage continues to fail, or in the case that there were no errors,
open a support ticket to get
help resolving this issue.
Long build eventually fails
When a build takes a long time (for example, 8 hours or more) and it fails at the end but no
log is provided, this is due to a large Unreal project taking too long to
build and timing out.
To resolve this issue, try to simplify the project and make it smaller
(less than 10GB) so that it builds faster.
If the project is small (~1GB) but this issue still happens,
open a support ticket to
get help resolving the issue.
Google Cloud console issues
When using Google Cloud console to manage Immersive Stream for XR resources,
you might encounter the following errors.
Content delete failed due to existing instance
You will find the following error in the notification icon in Google Cloud console.
Invalid resource state for INSTANCE_NAME : there exists a serving instance INSTANCE_NAME for content CONTENT_NAME
A content resource that is being actively served by an instance cannot be deleted.
To resolve this issue, delete the instance
associated with the content first, then retry the content deletion.
If the instance appears to have been deleted but you still can't still delete
the content resource, open a support ticket
to get help deleting the content.
Unknown error
You can find this error in the notification icon in Google Cloud console.
Unknown error
This error can occur for any long running operation. See
Immersive Stream for XR API failures for troubleshooting steps based
on the exact type of operation that failed.
Operation timed out
You can find this error in the notification icon in Google Cloud console.
Operation timed out
To resolve this issue, retry the command. See
Immersive Stream for XR API failures for more troubleshooting steps
based on the exact type of operation that failed.
Quota exceeded
There are resource quota limits that control the capacity allowed for a
service instance region. You might see a quota exceeded error when creating
a new instance or updating the capacity of an instance.
You can check your project's quotas and request quota increases at
IAM & Admin - Quotas .
To resolve this issue, adjust the capacity to below the quota limit and retry
the create or update operation. If additional quota is required for your
project, request a quota increase .
to request a quota increase.
Server not able to fulfill request
The following error occurs on the page when using Google Cloud console.
Sorry, the server was not able to fulfill your request.
To resolve this issue, ensure you have the correct project selected, then
refresh the page. If the error persists,
open a support ticket to
get help resolving the issue.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

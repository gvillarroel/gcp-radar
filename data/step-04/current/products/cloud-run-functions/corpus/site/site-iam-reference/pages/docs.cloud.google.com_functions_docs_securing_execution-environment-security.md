---
title: "Execution environment security \_|\_ Cloud Run functions \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/functions/docs/securing/execution-environment-security
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/concepts/iam
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/securing/execution-environment-security
  title: "Execution environment security \_|\_ Cloud Run functions \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Execution environment security
This page provides supplemental information for security update policies on
functions created using
gcloud functions commands or the
Cloud Functions v2 API .
For a detailed description of how to set automatic updates for the base images,
including the language runtimes, OS package, and operating system, see the
Cloud Run document
Configure automatic base image updates .
Runtime images
Each runtime has an associated runtime image (also known as a run image) in a
public repository on Artifact Registry. For a list of runtime IDs and their runtime
images, see runtimes .
Identify your runtime image
You can identify the runtime image used to create your function by inspecting the
build logs for your
function.
Within the build logs, search for google.run-image . This gives you the log
entry from the build step that describes the version of the runtime image used to
build your function. For example, a log entry for a Nodejs function might look
as follows:
{
...
"textPayload" : "Step #2 - \"build\": Adding image label google.run-image:
us-central1-docker.pkg.dev/serverless-runtimes/google-22-full/runtimes/nodejs22:nodejs20_20230924_20_6_1_RC00" ,
...
}
Security update policy
You can choose one of the following security update policies:
Automatic updates (default): Updates and security patches to the runtime environment
are published in new versions of the runtime image. After a period of testing for
stability and reliability, the updated runtime is rolled out to all functions
resulting in a zero downtime update. Automatic security updates are
available with Cloud Run functions (1st gen) and Cloud Run functions. To take on language-level security fixes, you may need to rebuild functions that use compiled languages such as Go or Java.
On deployment updates : Updates and security patches are applied
to runtimes only when functions are deployed or redeployed, unless
otherwise noted. Updates on deployment are available on both
Cloud Run functions (1st gen) and Cloud Run functions.
The runtime update policy can be changed using the --runtime-update-policy
flag in your gcloud functions deploy command.
By default, automatic security updates are enabled for functions deployed using:
gcloud functions
Cloud Functions v2 API
gcloud run with the --functions flag and the
--base-image flag
Set your function's update policy
You can change your function's update policy by using the following command:
gcloud functions deploy FUNCTION_NAME \
--runtime-update-policy= POLICY ...
Replace:
FUNCTION_NAME with the name of your function
POLICY with automatic or on-deploy
Inspect your function's update policy
You can inspect your function's update policy with the following command:
gcloud functions describe FUNCTION_NAME \
Where FUNCTION_NAME is the name of your function
Functions with automatic security updates enabled will have the key automaticUpdatePolicy
Functions that update on deployment will have the key onDeployUpdatePolicy
Security scans on Cloud Run functions
Cloud Run functions that have automatic updates enabled are built on top
of a scratch image . As a result, the
container that represents your function in Artifact Registry won't have a base image
and will be considerably smaller than functions using on-deployment updates. The
base image is combined with the function image at run time to create a complete
function. For more information, see
Build on scratch .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

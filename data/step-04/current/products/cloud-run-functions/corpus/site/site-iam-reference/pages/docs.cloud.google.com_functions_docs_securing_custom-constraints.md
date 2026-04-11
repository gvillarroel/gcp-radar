---
title: "Manage function resources using custom constraints \_|\_ Cloud Run functions\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/securing/custom-constraints
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/concepts/iam
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/securing/custom-constraints
  title: "Manage function resources using custom constraints \_|\_ Cloud Run functions\
    \ \_|\_ Google Cloud Documentation"
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
Manage function resources using custom constraints
Note: If you've created or deployed functions using Cloud Run, see
Cloud Run's
Manage custom constraints for projects
guide for a detailed description of how to use custom constraints.
This page provides supplemental information for setting custom constraints on
functions created using the
Cloud Functions v2 API , such as
through the gcloud functions commands.
Limitations
The following limitations apply to using custom organization policies for
Cloud Functions v2 API functions:
Only available on
Cloud Functions v2 API .
They won't be applied to Cloud Run functions (1st gen).
Only protects functions when using the Cloud Functions v2 API.
Cloud Run functions can also be modified from the Cloud Run API as
well. For additional protection, you might need to also
apply custom constraints on Cloud Run
as well.
Common organization policy examples
The following table provides the syntax of some custom organization policies
that you might find useful:
Description
Constraint syntax
Prevent functions from being created with a specific language
name : organizations/ ORGANIZATION_ID /customConstraints/custom.cloudFunctionRuntimeBlock
resource_types : cloudfunctions.googleapis.com/Function
method_types :
- CREATE
- UPDATE
condition : resource.buildConfig.runtime == "python312"
action_type : DENY
display_name : Deny functions using Python 3.12
description : Functions cannot be created with Python 3.12 as the language runtime
Require functions to use a specific worker pool
name : organizations/ ORGANIZATION_ID /customConstraints/custom.cloudFunctionsWorkerPool
resource_types : cloudfunctions.googleapis.com/Function
method_types :
- CREATE
- UPDATE
condition : resource.buildConfig.workerPool == " WORKER_POOL "
action_type : DENY
display_name : Require worker pool
description : Functions must use a worker pool
Replace WORKER_POOL with the name of your Cloud Build worker pool.
Require that functions store all container images in a specific image repository
name : organizations/ ORGANIZATION_ID /customConstraints/custom.cloudFunctionsRepository
resource_types : cloudfunctions.googleapis.com/Function
method_types :
- CREATE
- UPDATE
condition : resource.buildConfig.dockerRepository.startsWith(" REPO_PATH ")
action_type : DENY
display_name : Image repository constraint
description : Functions must push images to a central image repository under REPO_PATH
Replace REPO_PATH with the URI of the image repository URL
that you want all functions to store their container images in.
What's next
See Introduction to the Organization Policy Service to learn more about
organization policies.
Learn more about how to create and manage organization policies .
See the full list of predefined organization policy constraints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

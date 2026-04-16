---
title: "Create a custom target \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/create-custom-target
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/promote-release
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/create-custom-target
  title: "Create a custom target \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Guides
Send feedback
Create a custom target
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to create a custom Cloud Deploy target type
and use that custom target type as a target
in a Cloud Deploy
delivery pipeline .
The following is the high-level process for creating a custom target type and
using it in your delivery pipeline:
Create a containerized application or
applications that include the functionality to deploy to your custom target,
and that fulfill the Cloud Deploy
requirements for
custom target types.
Create a CustomTargetType definition with
tasks that reference the container and specify the
command or commands to run on it.
Define a new target with a customTarget property that
identifies your new custom target type.
Reference that target from your delivery pipeline
progression .
Create a release .
Each of these steps is described in detail in the rest of this document.
Create your containerized applications
The functionality to deploy to your custom target is defined in containerized
applications, which you provide to Cloud Deploy in your
CustomTargetType definition. When your delivery pipeline includes a target
that uses a custom target type, Cloud Deploy calls the containers
defined for that custom target type to execute the custom render and deploy
you've defined.
The behavior of your applications is up to you. However, it must consume the
input environment variables provided by Cloud Deploy, and it must
return the required outputs .
In most cases, you will create one container for your custom render and one for
your custom deploy, for each custom target type you create. The custom render is
optional, but you must create one unless your custom target will work correctly
if rendered with the built-in renderers.
Cloud Deploy uses skaffold render
by default to render your manifests.
Define your custom target type
You define a custom target by first creating a custom target type , using the
CustomTargetType configuration .
You can create the CustomTargetType in the same file as your delivery pipeline
definition, or with target definitions, or in a separate file.
The CustomTargetType definition is as follows:
apiVersion : deploy.cloud.google.com/v1
kind : CustomTargetType
metadata :
name : [ CUSTOM_TARGET_TYPE_NAME ]
annotations :
labels :
description :
tasks :
render : [ RENDER_TASK ]
deploy : [ DEPLOY_TASK ]
Where
CUSTOM_TARGET_TYPE_NAME
Is an arbitrary name you give to this custom target type definition. This name
is referenced in the
target definition for any
target that uses the custom target type you're defining.
RENDER_TASK
Is the
task that defines your custom render .
If not provided, Cloud Deploy uses the built-in renderer specified
in your
Skaffold configuration .
DEPLOY_TASK
Is the task that defines your custom deploy .
Register your custom target type
After you've configured the CustomTargetType , run the
gcloud deploy apply command to register
the CustomTargetType resource in a Google Cloud project:
gcloud deploy apply --file =[ FILE ] --project =[ PROJECT ] --region =[ REGION ]
Where:
FILE is the name of the file in which you've defined this custom target type.
PROJECT is the Google Cloud project in which to create this resource.
The CustomTargetType must be in the same project as the Target resource
that references it. You don't need to specify the project if you have set it as
your default project for the Google Cloud CLI.
REGION is the region (for example, us-central1 ) in which to create this
resource. The CustomTargetType must be in the same region as the Target
resource that references it. You don't need to specify the region if you have
set it as your default region for the gcloud CLI.
With the CustomTargetType now created as a Cloud Deploy resource,
you can now use it in a Target definition to create your custom target.
For more information on the CustomTargetType definition, see the
Cloud Deploy configuration schema reference .
Define your target
The only difference between a target definition for a supported target type and
a custom target definition is that the custom target definition includes a
customTarget stanza. The syntax for a customTarget is as follows:
customTarget :
customTargetType : [ CUSTOM_TARGET_TYPE_NAME ]
Where CUSTOM_TARGET_TYPE_NAME is the value from the name property defined in
your custom target type configuration .
Note: You can use multi-targets where the child targets are
custom targets. In this case, all child targets must be of the same
CustomTargetType .
Add your target to the delivery pipeline
You can use a custom target in a delivery pipeline exactly as you would use a
supported target type. That is, there is no difference in the delivery pipeline
progression between targets of a supported target type and custom targets.
All targets in a delivery pipeline must use the same target type. For example,
you can't have a delivery pipeline with some targets deploying to
Google Kubernetes Engine and some custom targets.
As with supported target types, you can include
deploy parameters in the pipeline stage.
Create a release
With your custom target type fully defined, and a target created to use that
type, you can now create a release, in the normal way:
gcloud deploy releases create [ RELEASE_NAME ] \
--project =[ PROJECT_NAME ] \
--region =[ REGION ] \
--delivery-pipeline =[ PIPELINE_NAME ]
Upon release creation your custom render is executed for each target in your
delivery pipeline, including processing deploy parameters
configured on the release, targets, or the delivery pipeline.
Cloud Deploy provides the deploy parameters as input
to the custom render container.
View the output of your custom targets
If your custom render task satisfies the
requirements for
custom targets, you can use Google Cloud console to view the rendered artifacts.
Follow these steps to view the output of your custom render task.
In the Google Cloud console, navigate to the Cloud Deploy
Delivery pipelines page to view your delivery pipeline.
Open the Delivery pipelines page
Click the name of your delivery pipeline.
The pipeline visualization shows the app's deployment status, and your
release is listed on the Releases tab under Delivery pipeline
details .
Click the release name.
The Release details page is shown.
Click the Artifacts tab.
Under Target artifacts , click the arrow next to View artifacts .
The rendered artifacts are listed, including the rendered
Skaffold configuration file
and rendered manifest file generated by the custom
renderer. And you can click the Storage location link next to each one to
go to the Cloud Storage bucket to view those files.
You can also click the View artifacts link to view those files by
release, by target, or by phase, using the
release inspector .
What's next
Try the quickstart: Define and use a custom target type
See the available sample custom target types .
Learn more about Tasks
Create a delivery pipeline and targets .
Learn more about configuring Cloud Deploy targets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

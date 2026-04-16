---
title: "Create your delivery pipeline and targets \_|\_ Cloud Deploy \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/create-pipeline-targets
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/create-pipeline-targets
  title: "Create your delivery pipeline and targets \_|\_ Cloud Deploy \_|\_ Google\
    \ Cloud Documentation"
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
Create your delivery pipeline and targets
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create the delivery pipeline and targets that
describe where and how Cloud Deploy will deploy your application. See
Configuration file schema for a description of the
YAML file structure for delivery pipelines and targets.
About the delivery pipeline and targets
Your delivery pipeline describes a progression
of deployment targets . You can define those
targets in the same file as the delivery pipeline or in one or more separate
files.
After you create the delivery pipeline and target definition file or files, you
run gcloud deploy apply against each of those files to register them as
Cloud Deploy resources.
Define the delivery pipeline and targets
The structure of the delivery pipeline and target configuration files is
described here .
You can call this file anything you want. By convention, a delivery pipeline
config that includes target definitions is
called clouddeploy.yaml , and one that instead references targets defined in
one or more separate files is named delivery-pipeline.yaml .
The target can point to
GKE ,
GKE attached clusters ,
Cloud Run , or
custom targets . Within a delivery
pipeline, all targets must reference the same runtime type (all
GKE, or all Cloud Run, for example).
Create a delivery pipeline and targets using the Google Cloud console
You can use the Google Cloud console to create a new delivery pipeline and
target or targets. This is useful for trying out Cloud Deploy, but
is not suitable for production workloads. (You can also use the
Google Cloud console to
create a release .)
To create the delivery pipeline:
From the Delivery pipelines page, click Create .
Provide a name (or keep the default) and, optionally, a description.
Select your region.
Choose your runtime environment.
For GKE, choose Google Kubernetes Engine , or select
Cloud Run if that's the runtime you're deploying to.
Under New target , provide a name (or keep the default).
If you want to require
approval
on this target, select the Require approval for rollouts checkbox.
If you're going to use a
canary deployment strategy on this
target, select the Enable canary checkbox.
Note: You can enable canary here for Cloud Run only. For
GKE, you need to configure it as described
in Canary deployments .
Click Done .
Click Add target and follow these steps for each additional target you
want to create.
When you have all your targets, click Create to create the delivery
pipeline and target resources.
Register the delivery pipeline and targets
If you created your pipeline and targets using the Google Cloud console,
you don't need to do this.
To register your delivery pipeline with Cloud Deploy, you run
gcloud deploy apply once for each separate definition file. That is, if
you define three targets in three files, you would run the command four
times—once for the delivery pipeline, and once for each target.
The following command registers a delivery pipeline with its targets defined in
the same file.
gcloud deploy apply -- file = PIPELINE_CONFIG \
-- region = LOCATION \
-- project = PROJECT
You now have a delivery pipeline that can manage deployment of your releases,
and target resources that can be used by any delivery pipeline in the same
project and region.
A single-file example
The command in this example registers a delivery pipeline and targets that are
all defined in the same file:
gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1
An example using separate files
For this example, there are three targets defined in three separate files, so
you run four commands:
gcloud deploy apply -- file = delivery - pipeline . yaml -- region = us - central1 && \
gcloud deploy apply -- file = target_dev . yaml -- region = us - central1 && \
gcloud deploy apply -- file = target_staging . yaml -- region = us - central1 && \
gcloud deploy apply -- file = target_prod . yaml -- region = us - central1
The --region flag is required unless you've set a default (using gcloud
config set deploy/region [REGION] ). The region must be the same for the delivery
pipeline and all targets that pipeline references.
Create the delivery pipeline and targets using Terraform
You can also use the
Google Cloud Terraform provider
to create delivery pipeline
and target
resources.
The Google Cloud beta Terraform provider
may include support for Cloud Deploy features in
Preview .
Edit existing pipelines and targets
You can later edit any delivery pipeline or target config and run gcloud
deploy apply to update the pipeline or target resource. But those changes
do not affect any existing releases, as they are managed by the original
delivery pipeline .
Require manual approval for a deployment
To require manual approval for a given target, include the following property on
the target definition :
requireApproval: true
The default is false . If you omit this property from the delivery-pipeline
config, or provide no value for it, deploying to this target doesn't require
approval. (But the caller trying to promote to the target still needs the
clouddeploy.rollouts.create IAM permission.)
You can even require manual approval on the first target. When a release is
created, using the CLI, for the first target, the rollout is created
automatically. If approval is required, Cloud Deploy creates the
rollout , but in a pending-release state until approval is given.
What's next
Create your Skaffold configuration .
See Deploying your application
to find out how to invoke your delivery pipeline and create a release.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

---
title: "Cloud Deploy service architecture \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/architecture
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/architecture
  title: "Cloud Deploy service architecture \_|\_ Google Cloud Documentation"
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
Cloud Deploy service architecture
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the relationships between Cloud Deploy and the
external systems it works with in order to deploy your applications. These
systems are other Google Cloud services and third-party tools.
The high-level view
The following diagram shows the relationships between Cloud Deploy
and the separate systems it relies on.
As shown in this diagram, Cloud Deploy interacts with the following
systems:
Your CI system
Cloud Deploy supports most CI tools, as long as one output from
your CI process can be a call to the Cloud Deploy
API or CLI
to create a release .
Cloud Build
Cloud Deploy calls Cloud Build to render your
manifests and to deploy to the target runtime.
Skaffold
Cloud Deploy uses Skaffold through Cloud Build to render
and deploy your manifests, thus deploying your application.
Cloud Storage
Cloud Deploy stores rendering source and rendered manifests in a
Cloud Storage bucket.
Google Cloud Observability and Cloud Audit Logs .
Google Cloud Observability collects and makes available logging data for
Cloud Deploy.
See also Audit logging .
Pub/Sub
Cloud Deploy publishes messages to several Pub/Sub
topics. You can use this service to integrate with external workflow, testing,
and other related systems.
See Subscribing to Cloud Deploy notifications
for more information.
Target runtime
Cloud Deploy uses skaffold apply ,
through Cloud Build, to deploy your applications to your target runtime
(GKE, Cloud Run, or a
custom target ).
Cloud Deploy resources
The following diagram shows the resources that Cloud Deploy uses to
deliver your applications, and the relationships among those resources:
As shown in this diagram, the relationships among the resources are as follows:
The delivery pipeline can yield zero
or more releases and can reference one or more targets ,
including multi-targets and their
associated child-targets .
The delivery pipeline can also reference one or more
automations , which automate actions on
Cloud Deploy resources.
Each release includes the
pipeline instance —a
"snapshot" of the delivery pipeline and targets as they were configured when the
release was created.
Each release can yield zero or more rollouts ,
and can reference zero or more artifacts.
Each rollout includes at least one phase, representing a collection of
operations (jobs) in a rollout that are logically grouped together, for
example, a deploy or a deploy and verify.
Each phase includes one or more jobs, representing what is to be done on the
rollout—either deploy or verify. Each job can include one or more job
runs, which are instances of jobs, for example, an attempt to deploy. A job
run is a child resource of the rollout.
Multi-targets , used for
parallel deployment , create
controller rollouts , which
create child rollouts, which correspond to child targets.
Each rollout is associated with one target.
For parallel deployment , each
child target is associated with one
child rollout .
Each target is associated with one GKE cluster or other runtime
destination for the application.
A target can be associated with one or more delivery pipelines.
An artifact is any output from your CI process (for example, a
container image )
that is deployed to a target runtime as part of a rollout.
Further, a rollout has one or more phases, and phases have one or more jobs and
one or more job runs.
As shown in this diagram, a rollout includes the following:
Phases
A phase contains one or more jobs (for example deploy, or deploy and verify).
Each rollout has one or more phases. A phase is a sub-message in a rollout.
Jobs
The specific operation to be performed on a rollout, for example deploy or
verify. A job is a sub-message in a rollout.
JobRuns
An instance of a job, for example an attempt to verify. Each job may have zero
or more JobRuns. The JobRun is a child resource of a rollout.
Automations contain automation rules, which may be referenced by zero or more
AutomationRun resources. AutomationRuns are instances of executed automation
rules, for example an automated promotion from one target to another. Automation
and AutomationRun resources are peer-child resources beneath a delivery
pipeline.
How they fit together to deliver your release
This section describes how Cloud Deploy interacts with the
components listed in this document to automate the delivery of your application
as a release .
Your CI system invokes a Cloud Deploy delivery pipeline.
Your CI process calls Cloud Deploy using the CLI
or API
to create a new release, passing the build artifacts or references to images.
For more information about integrating your CI system, see
Integrating Cloud Deploy with other systems .
When a new release is created, Cloud Deploy does the following:
Stores an instance of the delivery pipeline as part of the release.
This pipeline instance remains unchanged for this release, even if the
delivery pipeline configuration is changed. See Pipeline instances per
release for more information.
Also, the tool versions are
stored as a part of the release. In most cases, this will be the default
tool versions, but because you can specify other versions ,
that information is stored.
Calls Cloud Build, which gets the Skaffold rendering source from
Cloud Storage.
Cloud Deploy stores the rendering source in the default or
alternate Cloud Storage bucket.
Calls skaffold diagnose
(using the Skaffold version stored upon release creation) to generate a
single effective manifest.
Calls the render operation.
If you're using built-in targets, Cloud Deploy calls
skaffold render to render the manifest using the
provided images or build artifacts. Cloud Deploy substitutes
image names in spec.templates.spec.containers.image with the full image
paths (including digests or tags) provided on the gcloud deploy releases
create command or in a build artifacts file
referenced by that command .
If you're using a custom target ,
Cloud Deploy calls the render operation defined for its custom target type.
Cloud Deploy stores the rendered manifest in the default or
alternate Cloud Storage bucket.
Cloud Deploy performs these actions using the default or an
alternate execution environment .
When a rollout is created (automatically after release creation or on demand
later), Cloud Deploy does the following:
Calls pre-deploy hooks, if any are specified.
If you're using a canary
deployment strategy, pre-deploy hooks are called at the start of the first
phase.
Calls the deploy operation.
If you're using built-in targets, Cloud Deploy automatically
creates and deploys a rollout to the first target, by calling
skaffold apply . If you're using a built-in
target, the first rollout is created automatically upon release creation.
Note: skaffold apply includes the Skaffold
health check ,
which waits for deployments to stabilize.
If you're using a custom target ,
Cloud Deploy automatically creates a rollout to the first
target, calling the
deploy operation
defined for its custom target type.
For built-in targets and custom targets, the rollout to the first target,
is automatic only when the release is created using the command line.
The process of deploying to the first target is the same as for promotions,
as described in the next step.
Calls skaffold verify ,
if verify is true for the target in the delivery pipeline
config and if verification is
specified in the Skaffold configuration .
Calls post-deploy hooks, if any are specified, after verify , if
a verify is specified. Otherwise, post-deploy hooks are called after
deploy .
If you're using a canary deployment strategy, post-deploy hooks are
performed as the last job in the final rollout phase.
When it's time to promote the release to the next target, Cloud Build
retrieves the target-specific manifest from Cloud Storage. Then Cloud Build
invokes skaffold apply
to apply the rendered manifest to the specified target runtime.
If the target requires approval , you can approve or reject
through the CLI or using the Console.
Also, Cloud Deploy generates a Pub/Sub message, which
you can subscribe to in order to automatically initiate an approval
workflow .
Cloud Deploy uses the Skaffold version and the pipeline instance
that are associated with this release, and performs this step in the default
or custom execution environment.
This process is true not only for promotions, but also for rollbacks and for
redeployments.
Throughout Cloud Deploy operations, the service publishes
notifications to several Pub/Sub topics
(for example, when a rollout requires approval ).
This and other integrations are described further in Integrating Cloud Deploy
with external systems .
You can specify an automation to automatically
perform various operations within the delivery
pipeline. These can be executed at their designated time. An
automationRun
represents an automation rule execution.
Throughout Cloud Deploy operation, the service writes platform
logs and audit logs to Google Cloud Observability and Cloud Audit Logs.
Through all of these steps, flow control and access to resources are restricted
using Identity and Access Management .
What's next
Learn more about how to integrate Cloud Deploy with other systems
See important information about the Tool version lifecycle .
Learn about Cloud Deploy execution environments .
Try the Cloud Deploy Skaffold profiles walkthrough
Learn how to combine Google Cloud CI/CD tools to develop and deliver
software effectively to GKE .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

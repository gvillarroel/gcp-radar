---
title: "Define analysis jobs that use Google Cloud Observability \_|\_ Cloud Deploy\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis
  title: "Define analysis jobs that use Google Cloud Observability \_|\_ Cloud Deploy\
    \ \_|\_ Google Cloud Documentation"
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
Define analysis jobs that use Google Cloud Observability
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to configure analysis on your delivery pipeline if
you use Google Cloud Observability as your monitoring system.
If you use a different monitoring provider, you need to
define a custom analysis , which
includes creating a container to ingest and evaluate metrics and other
data from your provider.
Before you begin
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Verify that
you have the permissions required to complete this guide .
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, Cloud Deploy APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable clouddeploy.googleapis.com compute.googleapis.com
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Verify that
you have the permissions required to complete this guide .
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, Cloud Deploy APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable clouddeploy.googleapis.com compute.googleapis.com
Required roles
To get the permissions that
you need to create and use analysis jobs,
ask your administrator to grant you the
following IAM roles on the account for your project:
Cloud Deploy Runner ( roles/clouddeploy.jobRunner )
Monitoring Alert Viewer ( roles/monitoring.alertPolicyViewer )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
To ensure that the Cloud Deploy service account has the necessary
permissions to create and use automations,
ask your administrator to grant the
following IAM roles to the Cloud Deploy service account on your project:
Important: You must grant these roles
to the Cloud Deploy service account, not to your user account. Failure to grant the roles to the correct principal might result in permission errors.
IAM Service Account User ( roles/iam.serviceAccountUser )
Cloud Deploy Releaser ( roles/clouddeploy.releaser )
Cloud Deploy Operator ( roles/clouddeploy.operator )
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give the Cloud Deploy service account
the required permissions through custom
roles or other predefined
roles .
Set up analysis in Cloud Deploy
Configuring deploy analysis consists of the following steps:
Define one or more alerting policies .
Configure an analysis job in your delivery
pipeline.
Run your pipeline to run your analysis.
Define alerting policies
You define alerting policies to receive metrics from
Google Cloud Observability. A Google Cloud Observability alerting policy describes when and how
you want to be notified when monitoring data meets specified criteria.
Cloud Deploy analysis uses these alerts to take action based on the
circumstances that the alerts indicate.
For example, you can set up an alerting policy on your application in production
to send an alert if HTTP response latency is too high, and based on that alert
your analysis job can trigger a
repairRolloutRule automation
to roll back the release.
As another example, you can create a similar alerting policy on your application
deployed to your staging environment, and if no alert fires during the duration
of the analysis job, that job can trigger a
promoteReleaseRule automation
to promote the release to production.
Create the analysis
To create an analysis job for your application's delivery pipeline, configure
that analysis inside the config for the pipeline, then apply that configuration
file.
Configure an analysis job
This section describes how to configure a Cloud Deploy analysis job
for use with Google Cloud Observability.
Your analysis job is configured as part of the delivery pipeline definition,
inside a strategy stanza. This can be inside of any strategy, canary or
standard . If you want to configure analysis per phase, you use a custom
canary ( strategy.canary.customCanaryDepolyment.phaseConfigs.phaseId.analysis ).
Note: The analysis job runs after the
verify job , if there is one, and before any
post deploy job .
An analysis job consists of the following elements:
A duration
This duration specifies for how long the analysis job runs. If the duration
expires and it detects no alerts from Google Cloud Observability, the analysis is
considered a success and the rollout continues.
One or more checks, corresponding to alerting policies in your monitoring
system
Each check includes the following:
An ID
One or more alerting policies
That is, references to one or more Google Cloud Observability alerting policies.
One or more labels, used to identify a specific alerting policy.
Because an Google Cloud Observability alerting policy can monitor many applications,
these labels allow us to constrain the check to one or more specific
applications.
Note that you can use system parameters
as keys for labels here.
The following is the syntax for configuring an analysis job when using a
standard deployment strategy:
strategy :
standard :
analysis :
duration : DURATION
googleCloud :
alertPolicyChecks :
- id : CHECK_ID
alertPolicies :
- [ ALERT_POLICY_ID ]
labels :
[ KEY : VALUE ]
Where:
DURATION
Is how long, in seconds, to run the analysis job. After the duration expires,
the job is finished. If the analysis fails (the container returns a non-zero
exit code), the job finishes ( FAILED ) before the duration expires.
CHECK_ID
Is the ID for an individual check in your analysis. Each ID must be unique
within this analysis job. You can have one or more checks in an analysis job.
ALERT_POLICY_ID
Is the policy ID for the Google Cloud Observability alert policy you're using for the
check. You can find the alert policy ID by running gcloud monitoring policies
list . You need the fully qualified ID, which looks like this:
projects/project-redacted/alertPolicies/01234567890123456789
It's possible that the identifier returned includes
/conditions/13842666848149128276 after the policy ID. Don't include this as
part of the policy ID.
KEY and VALUE
Are a key-value pair for a label, to be used to consider only specific alerts.
For example, you could use a label so that a check only considers alerts on a
specific workload.
You can use system parameters for values
here.
Here's an example that uses a system parameter:
labels :
service_name : '${{render.metadata.cloud_run.service.name}}'
This configuration creates an analysis job. Although there are multiple checks,
this configuration creates only one job .
If none of the alert policies configured send any alerts, then this job succeeds
and the rollout continues. If any policy fires an alert, then the job halts
with a state of FAILED , and the rollout fails (with a FAILED state, unless
you choose to
ignore the job failure ).
Apply your delivery pipeline configuration file
To create a delivery pipeline with your analysis job, apply the configuration
file using the following command:
gcloud deploy apply FILE \
--region = REGION \
--project = PROJECT_ID
Replace the following:
FILE
With the name of your
delivery pipeline configuration file ,
clouddeploy.yaml or whatever name you gave it.
REGION
With the region in which you're creating your delivery pipeline.
PROJECT_ID
With the ID of the project in which you're creating this delivery pipeline.
You now have a delivery pipeline in your project, and an analysis job, which
will be part of the pipeline when you create a release.
What's next
Try the quickstart: Analyze your application using metrics .
See the config schema for analysis in the
Cloud Deploy configuration reference .
Learn more about Google Cloud Observability alerting policies .
Learn more about deploy automation .
Learn more about deployment strategies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Automate your deployment \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/automation
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/deployment-strategies/manage-rollout
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/automation
  title: "Automate your deployment \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
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
Automate your deployment
Stay organized with collections
Save and categorize content based on your preferences.
This document is an overview of deploy automation.
You can configure Cloud Deploy to automatically perform release-related
and rollout-related tasks for a given delivery pipeline. These tasks include
release promotion
and phase advancement .
Learn more about the resources used for
release automation in Cloud Deploy.
Learn more about how to set up the rules that
define how these automations work.
Actions you can automate
In Cloud Deploy, you can automate the following release and
rollout activities:
Promote a release automatically
You can configure Cloud Deploy to promote your release
automatically, upon a successful rollout to a target. For example, if you
have three targets, dev , staging , and prod , you can configure an
automation such that the release is promoted to prod , without further human
interaction, upon a successful deployment into staging . You can also specify
a delay time.
Promote a release on a schedule
You can configure Cloud Deploy to promote your release according
to a cron schedule.
Advance a rollout
You can configure Cloud Deploy to advance a rollout from one
phase to the next,
after a successful rollout to the previous target. Phase advancement is
available only in targets that use a
canary deployment strategy .
Repair a rollout
You can configure Cloud Deploy to automatically retry a failed
rollout. This includes retrying the rollout a specified number of times, and
automatically rolling back if that number of retries fail.
See Automation rules for more information on
these actions, and how to configure them.
How does automation work?
Each automation is tied to the delivery pipeline for which it's used. You can't
share an automation across multiple delivery pipelines.
The following is the general process for configuration and execution of an
automation:
You
configure an Automation
This automation is associated with one delivery pipeline.
You register that automation using gcloud deploy apply .
This creates the
Automation resource .
You invoke the delivery pipeline associated with this automation by
creating a release .
The rollout succeeds for at least one target, or fails.
If the rollout succeeds, and the automation is promoteReleaseRule :
Execution waits for the rollout to succeed into the source target.
The source target is the selector.targets configured for the automation,
not in the AutomationRule .
If there is a wait time configured, execution waits for that time also.
The release is automatically promoted to the next target in the pipeline
progression, or to a specific target,
if indicated .
If the rollout succeeds, and the automation is advanceRolloutRule and the
target uses a canary deployment strategy:
Execution waits for the identified
source phase ,
if there is one.
The sourcePhase property is optional, and if no source phases are
specified, each phase in the rollout is advanced automatically. The
automatic phase advancement happens when the source phase is
IN_PROGRESS , subject to wait time.
If there is a wait time configured, execution waits for that time also.
When you're automating a canary deployment, you use this wait time to
specify the duration of each canary phase.
The rollout is automatically advanced from that source phase to the next
phase in the rollout.
If there's an additional source phase, it's treated the same, including the
same wait time, if applicable.
If the rollout fails, and there's an automation with a repairRollout rule:
The rollout is retried, after the configured
wait time , if any.
If specific phases or jobs are configured in this repairRollout rule,
only those phases or jobs are retried. The default, if no jobs or no
phases are specified, is to retry all phases and jobs in the rollout.
Because retries are optional, if your automation isn't configured to
retry, then this step doesn't happen.
If the first retry fails, execution waits for the configured wait time,
then tries again.
Retries are repeated until Cloud Deploy has exhausted the
retry attempts .
If each attempt fails, and the attempts are exhausted, the rollout
fails.
During retries, the rollout
state
is IN_PROGRESS until either the rollout succeeds or fails following the
final retry attempt. The phase
state is IN_PROGRESS during retries, but FAILED after each rollout
failure.
If all retries fail (or none are configured), a new rollout is created to
rollback to the most recent successful release on the target.
Note: You can have a maximum of 250 automation rules per delivery pipeline.
Automation resources
There are two Cloud Deploy resources that are specifically for
automation:
Automation
An Automation is a child resource of a delivery pipeline, and it includes
the following information:
A pointer to the target or targets for which the automation is used
The rule or rules that govern what the automation does and how it does it
Configuration for the Automation resource is described in the document
About the automation resource .
When you run gcloud deploy apply against a file that includes an automation
configuration ( kind: Automation ), Cloud Deploy creates an
automation resource ,
which associates a delivery pipeline and a target or targets with one or more
automation rules .
Automation run
The AutomationRun is an instance of an automation. It's a pointer to its
corresponding Automation resource, plus information about the rollout that
spawned it, and other metadata.
The automation run is created when an automation is triggered.
Learn more about automation resources .
Automation rules
An automation rule defines an action that can be taken on your delivery pipeline
automatically, as well as details about how the automation is to be performed.
Learn more about automation rules .
Identity and Access Management roles and permissions required
In addition to the permissions you need to run any Cloud Deploy
delivery pipeline, and to perform the tasks to be automated (like advancing
a rollout), there are several permissions that are needed in order to perform
certain operations on the Automation and AutomationRun resources:
clouddeploy.automations.create
clouddeploy.automations.delete
clouddeploy.automations.get
clouddeploy.automations.list
clouddeploy.automations.update
clouddeploy.automationRuns.cancel
clouddeploy.automationRuns.get
clouddeploy.automationRuns.list
In addition to these permissions, each automation rule might require further
permissions to perform the automated operation. See
Configure automation rules
for the specific permissions needed per automation rule.
See
IAM roles and permissions
For more information, including which Cloud Deploy
roles include these permissions .
Create an automation
You can create an automation, including using any of the
available automation rules ,
by configuring an automation, then creating the automation resource using
gcloud deploy apply
See the following section (Configuring automation), and
Configuring automation rules .
Configuring automation
See the
Configuration file schema
for details on how to configure the
Automation resource .
Automation rule configuration
In addition to this automation configuration, you specify
automation rules . Configuration is different
for each of the available rules.
See
Using automation rules for descriptions of each
of the available rules.
Suspend an automation
You can suspend an existing resource without deleting it. This can be useful
for testing an automation without affecting the delivery pipeline. When you
suspend an automation, the automation isn't run, but
platform logs are still generated.
In the
Automation configuration ,
Update the suspended property to true .
Run gcloud deploy apply against that configuration file.
Platform logs are still generated when the
automation is instantiated, even if it's suspended. You can use this to test and
debug the automation without affecting the delivery pipeline.
What's next
Try the quickstart: Automate release creation and rollout advancement .
Learn more about Cloud Deploy
automation rules.
Learn more about Cloud Deploy
automation resources.
See the
configuration file schema documentation
for details on the automation configuration files.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

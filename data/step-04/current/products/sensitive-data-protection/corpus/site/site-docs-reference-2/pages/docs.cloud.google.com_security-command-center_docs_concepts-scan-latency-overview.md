---
title: "When to expect findings in Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview
  title: "When to expect findings in Security Command Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
When to expect findings in Security Command Center
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
This page provides an overview of the activation process that
takes place when you enable Security Command Center. It aims to answer common
questions:
What happens when Security Command Center is enabled?
Why is there a delay before the first scans start?
What is the expected runtime for the first scans and ongoing scans?
How will changing resources and settings impact performance?
Overview
When you first enable Security Command Center, an activation process must complete
before Security Command Center can start scanning your resources. Then the scans
must complete before you see a complete set of findings for your
Google Cloud environment.
How long the activation process and scans take to complete depends on a
number of factors, including the number of assets and resources in your
environment and whether Security Command Center is activated at the
organization level
or the
project level .
With organization-level activations, Security Command Center must repeat
certain steps of the activation process for each project in the
organization. Depending on the number of projects in an organization,
the time required for the activation process can range from minutes to
hours. For organizations with more than 100,000 projects,
a lot of resources in each project, and other complicating factors,
enablement and initial scans can take up to 24 hours or more to complete.
With project-level activations of Security Command Center, the activation
process is much faster, because the process is limited to the single project in
which Security Command Center is activated.
The factors that can introduce latency in starting scans, processing
changes to settings, and the runtime of scans are discussed in the following
sections.
Latency in onboarding
Before scans start, Security Command Center discovers and indexes your resources.
Indexed services include App Engine, BigQuery, Cloud SQL,
Cloud Storage, Compute Engine, Identity and Access Management, and Google Kubernetes Engine.
For project-level activations of Security Command Center, the discovery and
indexing is limited to the single project in which Security Command Center
is activated.
For organization-level activations, Security Command Center discovers and
indexes resources across your organization.
During this onboarding
process, two critical steps take place.
Asset scan
Security Command Center conducts an initial asset scan to identify the total number,
location, and state of projects, folders, files, clusters, identities, access
policies, enrolled users, and other resources. This process is usually completed
within minutes.
API activation
As resources are discovered, Security Command Center enables parts of
Google Cloud that are needed for Security Health Analytics, Event Threat Detection, Container Threat Detection,
and Web Security Scanner to operate. Some detection services require specific APIs
to be enabled on protected projects to function.
When you activate Security Command Center at the project level, API activation
usually takes less than a minute.
With organization-level activations, Security Command Center iterates through
all of the projects that you select for scanning to enable the necessary APIs.
The number of projects in an organization largely determines the length of the
onboarding and enablement processes. Because APIs must be activated for projects
one by one, API activation is usually the most time-consuming task, particularly
for organizations with more than 100,000 projects.
The time needed to enable services across projects scales linearly. That
means, generally, it takes twice as long to enable services and security
settings in an organization with 30,000 projects than one with 15,000 projects.
For an organization with 100,000 projects, onboarding and enablement of the
Premium and Enterprise service tiers should
be completed in under five hours. Your time can
vary depending on many factors, including the number of projects or containers
that you are using and the number of Security Command Center services that you
choose to enable.
Scan latency
When you set up Security Command Center, you decide which built-in and integrated
services to enable, and select the Google Cloud resources that you want to
have analyzed, or scanned, for threats and vulnerabilities. As APIs are
activated for projects, selected services begin their scans. The duration of
these scans also depends on the number of projects in an organization.
Findings from built-in services are available as initial scans are completed.
Services experience latency as described in the following sections.
Agent Engine Threat Detection ( Preview ) has the following latencies:
Activation latency of up to 3.5 hours for newly onboarded projects or
organizations.
Detection latency of minutes.
Cloud Run Threat Detection has the following latencies:
Activation latency of up to 3.5 hours for newly onboarded projects or
organizations.
Detection latency of minutes.
Compliance Manager data might appear up to 48 hours after
the service is enabled on the Premium and Enterprise tiers. On the
Standard tier, data might take up to 96 hours to appear.
Container Threat Detection has the following latencies:
Activation latency of up to 3.5 hours for newly onboarded projects or
organizations.
Activation latency of minutes for newly created clusters.
Detection latency of minutes for threats in clusters that have
been activated.
Event Threat Detection activation occurs within seconds for built-in
detectors. For new or updated custom detectors, it can take up to 15 minutes
for your changes to take effect. In practice, it typically takes less than 5
minutes.
For built-in and custom detectors, detection
latencies are generally less than 15 minutes, from the time a log is written
to when a finding is available in Security Command Center.
Issues data for the Security Command Center Premium and
Enterprise tiers can take approximately 6 hours to appear.
Security graph data for the Security Command Center Premium and Enterprise tiers
can take approximately 2 hours to appear.
Security Health Analytics
Security Health Analytics scans start approximately one hour after the service is enabled. The first
Security Health Analytics scans can take up to 12 hours to complete for Security Command Center Premium and Enterprise and 48 hours to complete for Security Command Center Standard. Afterward, most detections run in
real time against asset configuration changes (exceptions are detailed in Security Health Analytics Detections
Latency ).
VM Threat Detection has an activation latency of up to 48 hours for newly
onboarded organizations. For projects, the activation latency is up to
15 minutes.
Vulnerability Assessment for Google Cloud : See
Findings generated by Vulnerability Assessment for Google Cloud
for information about the frequency of scans after it is enabled.
Vulnerability Assessment for Amazon Web Services (AWS) begins scanning the resources
in an AWS account approximately 15 minutes after the required
CloudFormation template is first
deployed in the account. When a software vulnerability is detected
in the AWS account, the corresponding finding becomes available in
Security Command Center approximately 10 minutes later.
How long it takes to complete a scan depends on the number of EC2
instances. Typically, a scan of a single EC2 instance takes less than
5 minutes.
Web Security Scanner scans can take up to 24 hours to start after
the service is enabled and run weekly after the first scan.
Data Security Posture Management (DSPM) scans can
take up to 24 hours to start after the service is enabled.
Security Command Center runs error detectors, which detect configuration
errors related to Security Command Center and its services. These error detectors
are activated by default and can't be deactivated. Detection latencies vary
depending on the error detector. For more information, see
Security Command Center errors .
The IAM roles for Security Command Center can be granted at the organization,
folder, or project level. Your ability to view, edit, create, or update findings, assets,
and security sources depends on the level for which you are granted access. To learn more about
Security Command Center roles, see Access control .
Preliminary findings
You might see some findings in the Google Cloud console while initial
scans are taking place but before the onboarding process is complete.
Preliminary findings are accurate and actionable, but they are not
comprehensive. Using these findings for a compliance assessment within the first
24 hours is not recommended.
Subsequent scans
Changes made within your organization or project, such as moving resources
or, for organization-level activations, adding new folders and projects,
usually won't significantly impact resource discovery time
or the runtime of scans. However, some scans proceed on set schedules, which
determine how quickly Security Command Center detects changes.
Agent Engine Threat Detection ( Preview ) uses a watcher process to
collect event information while the agentic workload is running. The
watcher process can take up to one minute to start and collect
information.
Cloud Run Threat Detection uses a watcher process to collect container and event
information for the complete duration of a Cloud Run workload.
The watcher process can take up to one minute to start and collect
information.
Event Threat Detection and Container Threat Detection : these services
run in real time when they are turned on and immediately detect new or
changed resources, such as clusters, buckets, or logs, in enabled
projects.
Security Health Analytics : Security Health Analytics runs in real time when turned
on and
detects new or changed resources in minutes, excluding the detections
that are listed later.
VM Threat Detection : For memory scanning, VM Threat Detection scans each VM instance
immediately after the
instance is created. In addition, VM Threat Detection scans each VM instance every 30 minutes.
For cryptocurrency mining detection, VM Threat Detection generates one finding per process, per
VM, per day. Each finding includes only the threats associated with the process that is
identified by the finding. If VM Threat Detection finds threats but can't associate them with
any process, then, for each VM, VM Threat Detection groups all of the unassociated threats into
a single finding that it generates once per each 24-hour period. For any threats that persist
longer than 24 hours, VM Threat Detection generates new findings once every 24 hours.
For kernel-mode rootkit detection, VM Threat Detection generates one
finding per category, per VM, every three days.
For persistent disk scanning, which detects the presence of known malware, VM Threat Detection
scans each VM instance at least daily.
Vulnerability Assessment for AWS runs scans three times a day.
How long it takes to complete a scan depends on the number of EC2
instances. Typically, a scan of a single EC2 instance takes less than
5 minutes.
When a software vulnerability is detected
in an AWS account, the corresponding finding becomes available in
Security Command Center approximately 10 minutes later.
Web Security Scanner : Web Security Scanner runs weekly, on the
same day as the initial
scan. Because it runs weekly, Web Security Scanner won't detect
changes in real time. If you move a resource or alter an application, the
change might not be detected for up to a week. You can run
on-demand scans
to check new or changed resources between scheduled scans.
DSPM : Findings that are generated by DSPM
show up in near real time on the DSPM dashboard.
Security Command Center error detectors run periodically in batch mode. Batch
scanning frequencies vary depending on the error detector. For more information,
see Security Command Center errors .
Security Health Analytics Detection Latency
Security Health Analytics detections run periodically in batch mode after the service is enabled, as well as when the configuration of a related asset changes. Once
Security Health Analytics is enabled, any relevant resource configuration changes
result in updated misconfiguration findings. In some cases, updates might take several minutes, depending on the asset type and change.
Some Security Health Analytics detectors do not support immediate scanning mode if, for
example, a detection runs against information outside of a resource's
configuration. These detections, listed in the following table, run periodically and
identify misconfigurations within 12 hours. Read Vulnerabilities and
findings for more details on
Security Health Analytics detectors.
Security Health Analytics detections that do not support real-time
scanning mode
COMPUTE_PROJECT_WIDE_SSH_KEYS_ALLOWED
MFA_NOT_ENFORCED (previously named 2SV_NOT_ENFORCED)
OS_LOGIN_DISABLED
SQL_NO_ROOT_PASSWORD
SQL_WEAK_ROOT_PASSWORD
Attack path simulations
Attack path simulations run every six hours, approximately. As your
Google Cloud organization grows in size or complexity, the time
between intervals can increase.
When you first activate Security Command Center, the attack path simulations use a
default high-value resource set, which focuses on a subset of the supported
resource types found in your organization. For more information, refer to the
list of supported resource
types.
When you start defining your own high-value resource set by creating a
resource value configuration, you might see the time between simulation
intervals drop if the number of resource instances in your high-value
resource set is significantly lower than the default set.
What's next
Learn about
using Security Command Center in the Google Cloud console .
Learn about detection services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

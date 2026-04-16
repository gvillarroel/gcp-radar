---
title: "Feature availability with project-level activations \_|\_ Security Command\
  \ Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/activate-scc-project-level-limitations
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/activate-scc-project-level-limitations
  title: "Feature availability with project-level activations \_|\_ Security Command\
    \ Center \_|\_ Google Cloud Documentation"
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
Feature availability with project-level activations
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy and Premium service tiers
Some Security Command Center features, like detection services and finding categories,
aren't available with project-level activations because they require access to
logs, data, resources, or other services outside the scope of a single project.
Some features can be enabled by activating the Security Command Center
Standard-legacy tier in the parent organization. However, a few of the
listed features are not available with project-level activations.
Activating Security Command Center Standard, which is
free of charge ,
enables the Standard-tier features for your entire organization, including all
projects.
The following sections list the Security Command Center services and
finding categories that require organization-level activations by
service tier.
Features you can enable by activating the Standard-legacy tier in the parent organization
This section lists the features that you can enable for a project-level
activation of Security Command Center by activating Security Command Center
Standard-legacy tier in the parent organization.
Security Health Analytics findings
To enable the following Standard-legacy tier finding categories for a
project-level activation of Security Command Center Premium, activate
Security Command Center Standard-legacy in the parent organization, which enables
the finding for all projects in the organization:
MFA not enforced
Public log bucket
You can enable the following Premium tier finding categories in
project-level activations of Security Command Center Premium by activating
Security Command Center Standard-legacy in the parent organization:
Audit config not monitored
Bucket IAM not monitored
Cluster private Google access disabled
CUSTOM_ORG_POLICY_VIOLATION
Custom role not monitored
Default network
DNS logging disabled
Egress deny rule not set
Firewall not monitored
HTTP load balancer
KMS project has owner
Legacy network
Locked retention policy not set
Log not exported
Network not monitored
Object versioning disabled
Org policy Confidential VM policy
Org policy location restriction
OS login disabled
Owner not monitored
Pod security policy disabled
Route not monitored
SQL instance not monitored
Too many KMS users
Weak SSL policy
For the complete list of Security Health Analytics findings, see
Vulnerabilities findings .
Event Threat Detection findings
You can enable the following Premium tier finding categories in project-level
activations of Security Command Center Premium by activating Security Command Center
Standard-legacy in the parent organization:
Exfiltration: BigQuery data extraction
Exfiltration: CloudSQL data exfiltration
For a complete list of Event Threat Detection finding categories, see
Event Threat Detection rules .
Integrated Google Cloud services
To enable the publication of findings from the following integrated
Google Cloud services in a
project-level activation of Security Command Center Premium, activate
Security Command Center Standard-legacy in the parent organization, which enables
the services for all projects in the organization:
Sensitive Data Protection
Google Cloud Armor
Anomaly Detection
Google Security Operations
You can enable the publication of findings from the following integrated
Premium-tier Google Cloud service in project-level Premium-tier
activations by activating Security Command Center Standard-legacy in the parent
organization:
VM Manager
Integrations with third party services
You can enable the publication of findings from
third-party services
in project-level activations by activating Security Command Center Standard
in the parent organization.
Features unavailable with project-level Premium-tier activations
Features listed in this section are Premium-tier features that require an
organization-level activation of Security Command Center Premium. These features
are not available with project-level Premium-tier activations.
Security Health Analytics finding categories unavailable with project-level activations
The following Security Health Analytics findings require organization-level
activations of Security Command Center Premium:
Audit logging disabled
KMS role separation
Redis role used on org
Service account role separation
For the complete list of Security Health Analytics findings, see
Vulnerabilities findings .
Event Threat Detection finding categories unavailable with project-level activations
The following Event Threat Detection findings require organization-level
activations of Security Command Center Premium:
Defense evasion: modify VPC service control
Initial access: account disabled hijacked
Initial access: disabled password leak
Initial access: government based attack
Initial access: suspicious login blocked
Persistence: new geography
Persistence: new user agent
Persistence: SSO enablement toggle
Persistence: SSO settings changed
Persistence: strong authentication disabled
Persistence: two step verification disabled
Privilege escalation: external member added to privileged group
Privilege escalation: privileged group opened to public
Privilege escalation: sensitive role granted to hybrid group
Privilege escalation: suspicious cross-project permission use
Privilege escalation: suspicious token generation
For a complete list of Event Threat Detection finding categories, see
Event Threat Detection rules .
Sensitive Actions Service finding categories unavailable with project-level activations
The following Sensitive Actions Service findings require organization-level
activations of Security Command Center Premium:
Defense Evasion: Organization Policy Changed
Defense Evasion: Remove Billing Admin
Persistence: Add Sensitive Role
For a complete list of Sensitive Actions Service finding categories, see
Sensitive Actions Service findings .
Attack path simulations
Attack path simulations, a Premium-tier feature, are not available with
project-level activations of Security Command Center. Attack path simulations
generate
attack exposure scores
and attack paths
for vulnerability and misconfiguration findings.
Security posture
Security posture management, a Premium-tier feature, isn't available with
project-level activations of Security Command Center. The
security posture service
lets you define, assess, and monitor the overall status of your security in
Google Cloud.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

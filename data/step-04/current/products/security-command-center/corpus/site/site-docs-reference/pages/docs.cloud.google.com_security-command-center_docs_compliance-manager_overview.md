---
title: "Compliance Manager overview \_|\_ Security Command Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/compliance-manager/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/compliance-manager/overview
  title: "Compliance Manager overview \_|\_ Security Command Center \_|\_ Google Cloud\
    \ Documentation"
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
Compliance Manager overview
Stay organized with collections
Save and categorize content based on your preferences.
Standard, Premium, and Enterprise service tiers (requires organization-level activation )
You can use Compliance Manager in Google Cloud to help ensure that your
Google Cloud infrastructure, workloads, and data meet the security and
regulatory requirements of your organization. Compliance Manager
lets you do the following:
Define and deploy a compliant and secure configuration for your
Google Cloud environment.
View dashboards that show your environment's alignment with your compliance
and security requirements. assessment reports.
(Premium and Enterprise tiers only) Audit
your cloud environments, including collecting evidence and generating
reports.
Compliance Manager uses software-defined controls that let you assess
support for multiple compliance programs and security requirements within a
Google Cloud organization.
Compliance Manager components
The following table describes the components of Compliance Manager.
Rule
A technical item within a cloud
control that lets you meet a compliance, security, or privacy requirement.
Rules can be organization policies, IAM policies,
cloud settings, and detection logic based on
Common
Expression Language (CEL) .
Cloud control
A set of rules and
associated metadata that you can use
to define your organization's security or compliance intent.
Compliance Manager includes a library of built-in cloud controls and lets
you create your own.
The metadata in a cloud control includes remediation instructions and
finding severity.
Cloud controls have the following modes:
Detective: Compliance Manager applies
the cloud control to the defined resources for monitoring purposes. Any
violations are detected and alerts are generated. No preventive actions
are taken automatically.
(Premium and Enterprise tiers only) Preventive:
Compliance Manager applies the cloud control to the
defined resources and actively enforces the rules. Any resource
activity that violates the cloud control is blocked and alerts are
generated for blocked actions.
Some cloud controls require that you provide additional information so
that they can work. For example, if you want to use a cloud control that
checks whether your workloads and resources are running in particular
regions, you must specify the permitted regions when you create the cloud
control.
(Premium and Enterprise tiers only) Audit:
Compliance Manager uses this cloud control to audit your
environment for alignment with your compliance obligations.
Compliance Manager uses this control to gather evidence for
compliance audits and identify any gaps.
Regulatory control
An industry-defined security or regulatory
compliance requirement. The relationship mapping between cloud controls and
regulatory controls defines how one or more cloud controls satisfy a regulatory control
requirement. Consider the following:
A single cloud control can map to multiple regulatory controls.
A single regulatory control can map to multiple cloud controls.
Framework A collection of cloud controls and regulatory
controls that represent security best practices or industry-defined standards
such as FedRAMP or NIST. A framework can include a mapping between cloud
controls and the regulatory controls.
Compliance Manager includes a library of built-in frameworks. You
can customize these frameworks or create your own.
Note: The Standard tier supports only the Security Essentials framework. Other built-in frameworks require Premium or Enterprise tiers. For more information, see Frameworks for Google Cloud .
Framework deployment The binding between a
particular framework and an organization, folder, or project when you
deploy the framework.
The following diagram shows the components of Compliance Manager.
Built-in frameworks
Compliance Manager supports built-in frameworks for
Google Cloud. You can deploy these
frameworks as-is, or you can customize them to meet your particular needs.
Frameworks for Google Cloud
The following frameworks are available:
Framework
Service tier
Standard
Premium
Enterprise
Security Essentials
AI Protection
Center for Information Security (CIS) Controls 8.0
CIS Google Cloud Computing Platform 3.0
CIS Kubernetes Benchmark v1.1.7
Cloud Controls Matrix (CCM) 4
Data Security and Privacy Essentials
International Organization for Standardization (ISO) 27001, 2022
National Institute of Standards and Technology (NIST) 800-53 R5
NIST Cybersecurity Framework (CSF) 1.1
Using Compliance Manager with Security Command Center services and features
Premium and Enterprise service tiers
You can enable other Security Command Center services and features and use them in
the same organization where you enable Compliance Manager.
Consider the following:
Most Security Health Analytics detectors are also available as cloud controls in
Compliance Manager. For more information, see Mapping of
Security Health Analytics detectors to cloud
controls .
Most Security Health Analytics detectors are turned on by default. When you enable
Compliance Manager ,
certain built-in frameworks are automatically applied to your
Google Cloud organization. You can deploy additional frameworks with
more cloud controls as required.
You can disable Security Health Analytics
detectors .
To disable a cloud control, you must remove the cloud control from the custom
frameworks
that include it or unassign the deployed built-in
framework .
Both Security Health Analytics and Compliance Manager generate
findings. However, Security Health Analytics uses the
securitycenter.googleapis.com API to
generate findings, and Compliance Manager uses the
cloudsecuritycompliance.googleapis.com
API . If you enable
Security Health Analytics and Compliance Manager on the same resource,
you might generate duplicate findings. Duplicate findings occur
when both a Security Health Analytics detector and a
Compliance Manager cloud control check for the same
configuration (for example, both check whether CMEK is enabled for a
particular service.) In the findings dashboard, the duplicate findings display
with different provider IDs. To avoid duplicate findings, complete one of the
following:
If the frameworks that you've deployed include cloud controls that map to
all the Security Health Analytics detectors that apply to your environment,
disable
Security Health Analytics
for the project or folder.
If the frameworks don't include the required Security Health Analytics detectors,
mute the duplicate Security Health Analytics detector
findings .
If you deployed a security posture using the security posture
service, you might receive duplicate findings when you enable
Compliance Manager. Consider deploying a framework that matches
your security posture and delete the posture
deployment .
Compliance Manager uses the global endpoint, not the endpoint
that you might specify when you enable data
residency for
Security Command Center. However, you can specify the location that you
want to audit your environment in. For more information, see Audit your
environment with Compliance Manager .
What's next
Enable
Compliance Manager .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

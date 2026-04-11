---
title: "Security Command Center service tiers \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/service-tiers
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/service-tiers
  title: "Security Command Center service tiers \_|\_ Google Cloud Documentation"
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
Security Command Center service tiers
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
Security Command Center is offered in three service tiers: Standard, Premium, and
Enterprise. Each tier determines the features and services that are available to
you in Security Command Center. A short description of each service tier follows:
Standard-legacy . Supports basic security and compliance posture
management for Google Cloud only. The Standard-legacy tier might
be migrated to the Standard tier
in some organizations.
Standard . Supports basic security and compliance posture management for
Google Cloud only. The Standard tier can be activated at the organization
level. Best for Google Cloud environments with minimal security requirements.
Premium . Everything in Standard, plus advanced security and compliance
posture management, attack paths, threat detection, and compliance monitoring
for Google Cloud only. The Premium tier can be activated at the project or
organization level. Premium is offered in two billing modalities:
Pay-as-you-go for customers who want flexibility.
Subscription for customers with more predictable needs.
Enterprise . Complete multi-cloud CNAPP security that
helps you to triage and remediate your most critical issues. Includes most of
the services that are in Premium. The Enterprise tier can only be activated at
the organization level. Best for helping to protect Google Cloud, AWS, and
Azure.
The Standard tier is offered at no additional charge, while the Premium and
Enterprise tiers have different pricing structures. For more information, see
Security Command Center pricing .
For the Google SecOps features supported with the
Security Command Center Enterprise tier, see
Google SecOps features in Security Command Center Enterprise .
Service
Service tier
Standard-legacy
Standard
Premium
Enterprise
Vulnerability detection
Vulnerability scanning
Anomaly Detection . 1
Identifies security anomalies for your projects and virtual machine (VM) instances, like
potential leaked credentials and cryptocurrency mining.
2 2 2
Artifact Registry vulnerability assessment .
Automatically write findings to Security Command Center from Artifact Registry scans that detect
vulnerable container images deployed to specific assets.
Sensitive Data Protection discovery . 1
Discovers, classifies, and helps protect sensitive data.
3 3
Vulnerability Assessment for Google Cloud
( Preview ).
Helps you discover critical and high severity software vulnerabilities in your
Compute Engine VM instances without installing agents. A limited set of capabilities
are available on the Standard tier.
Notebook Security Scanner
( Preview ).
Detect and resolve vulnerabilities in Python packages that are used in
Colab Enterprise notebooks.
VM Manager vulnerability reports
( Preview ). 1
If you enable VM Manager , it
automatically writes findings from its vulnerability reports to Security Command Center.
2
Vulnerability Assessment for AWS .
Detects vulnerabilities in AWS resources, including software installed on Amazon EC2 instances
and in Elastic Container Registry (ECR) images.
Security Health Analytics
Managed vulnerability assessment scanning for Google Cloud that can automatically detect
the highest severity vulnerabilities and misconfigurations for your Google Cloud assets.
Not supported with new Standard tier activations.
A subset of capabilities are available
in the Standard tier for organizations that were migrated from the Standard-legacy tier.
Compliance monitoring .
Security Health Analytics detectors map to the controls of common security benchmarks like NIST, HIPAA,
PCI-DSS, and CIS.
Custom module support .
Create your own custom Security Health Analytics detectors.
Web Security Scanner
Custom scans .
Schedule and run custom scans on deployed Compute Engine, Google Kubernetes Engine, or
App Engine web applications that have public URLs and IP addresses and aren't behind
firewalls.
Additional OWASP Top Ten detectors
Managed scans .
Scan public web endpoints for vulnerabilities weekly, with scans configured and managed by
Security Command Center.
Virtual red teaming
Attack Path Simulations .
Helps you to identify and prioritize vulnerability and misconfiguration findings by identifying the paths
that a potential attacker could take to reach your high-value resources.
2
Chokepoints .
Identifies resources or resource groups where multiple attack paths converge.
Issues .
Identifies the most important security risks that Security Command Center has found in your cloud
environments. Issues are discovered using virtual red teaming, along with rule-based
detections that rely on the Security Command Center security graph.
2
Risk reports
( Preview ).
Risk reports help you understand the results of the attack path
simulations that Security Command Center runs. A risk report contains a high-level
overview, sample toxic combinations, and associated attack paths.
2
Toxic combinations .
Detects groups of risks that, when they occur together in a particular pattern, create a path
to one or more of your high-value resources that a determined attacker could potentially use
to reach and compromise those resources.
Other vulnerability services
GKE security posture dashboard findings
( Preview ).
View findings about Kubernetes workload security misconfigurations, actionable security
bulletins, and vulnerabilities in the container operating system or in language packages.
Model Armor .
Screen LLM prompts and responses for security and safety risks.
Model Armor provides a number of tokens per month at no
charge to all Google Cloud customers. For more information, see
Pricing .
Model Armor findings are published to Security Command Center on the Premium and Enterprise tiers.
Mandiant CVE assessments
( Preview ).
Findings are enriched with CVE
assessments from Mandiant threat intelligence analysts, including the CVE exploitability
and potential impact. You can query findings by CVE ID. A limited set of
capabilities are available in the Standard tier.
Mandiant Attack Surface Management .
Discovers and analyzes your internet assets across environments, while continually monitoring
the external ecosystem for exploitable exposures.
4
Postures and policies
Binary Authorization . 1
Implement software supply-chain security measures when you develop and deploy container-based
applications. Monitor and limit the deployment of container images.
2 2 2
Cyber Insurance Hub . 1
Profile and generate reports for your organization's technical risk posture.
2 2 2
Infrastructure as code (IaC) validation .
Validate against organization policies and Security Health Analytics detectors.
2 2
Policy Controller . 1
Enables the application and enforcement of programmable policies for your Kubernetes clusters.
2 2 2
Policy Intelligence .
Provides tools that help you understand and manage your access policies to proactively
improve your security configuration.
Policy Intelligence provides some features to Google Cloud customers at no
charge, such as recommendations for basic roles and a limited number of queries per month.
Advanced features are available for Security Command Center Premium and Enterprise
users. For details, see
Pricing .
Compliance Manager .
Define, deploy, monitor, and audit controls and frameworks that are designed to help you meet the security
and compliance obligations for your Google Cloud environment. A limited set of capabilities
are available on the Standard tier.
2 2 , 5 , 6 6
Data security posture management (DSPM) .
Evaluate, deploy, and audit data security frameworks and cloud controls to govern access and
use of sensitive data. A limited set of capabilities are available in the Standard tier.
2 2
AI Protection .
AI Protection helps you manage the security posture of your AI workloads by detecting threats
and helping you to mitigate risks to your AI asset inventory. A limited set of capabilities
are available on the Standard tier.
2
Security posture .
Define and deploy a security posture to monitor the security status of your Google Cloud
resources. Address posture drift and unauthorized changes to the posture. On the Enterprise
tier, you can also
monitor your AWS
environment .
2
Cloud Infrastructure Entitlement Management (CIEM) .
Identify principal accounts (identities) that are misconfigured or that are granted excessive
or sensitive IAM permissions to your cloud resources.
7
Threat detection and response
Google Cloud Armor . 1
Protects Google Cloud deployments against threats such as distributed denial-of-service
(DDoS) attacks, cross-site scripting (XSS), and SQL injection (SQLi).
2 2 2
Sensitive Actions Service .
Detects when actions are taken in your Google Cloud organization, folders, and projects
that could be damaging to your business if they are taken by a malicious actor.
Agent Engine Threat Detection
( Preview ).
Detects runtime attacks on agents that are deployed and managed through Vertex AI Agent Engine.
Cloud Run Threat Detection .
Detects runtime attacks in Cloud Run containers.
Container Threat Detection .
Detects runtime attacks in
Container-Optimized OS node
images .
Correlated Threats
( Preview ).
Helps you make more informed decisions about security incidents. This feature combines related
threat findings together by using the security graph, helping you to prioritize and respond to
active threats.
Event Threat Detection .
Monitors Cloud Logging and Google Workspace, using threat intelligence, machine learning,
and other advanced methods to detect threats such as malware, cryptocurrency mining, and data
exfiltration.
Virtual Machine Threat Detection .
Detects potentially malicious applications running in VM instances.
Google SecOps .
Integrates with Security Command Center to help you detect, investigate, and respond to threats.
Google SecOps includes the following:
Google SecOps
security information and event management (SIEM) . Scan logs and other data for threats
across multiple cloud environments, define threat detection rules, and search the
accumulated data.
Google SecOps
security orchestration, automation, and response (SOAR) . Manage cases, define response
workflows, and search the response data.
Mandiant Threat Defense .
Rely on Mandiant experts to provide continual threat hunting to expose attacker activity
and reduce impact to your business.
Mandiant Threat Defense is not activated by default. For more information and pricing
details, contact your sales representative or Google Cloud partner.
Data management
Data residency and encryption
Customer-managed encryption keys (CMEK) .
Use Cloud Key Management Service keys that you create to encrypt selected Security Command Center data. By default,
Security Command Center data is encrypted at rest with Google-owned and Google-managed encryption keys.
2 2 2
Data residency .
Controls that restrict the storage and processing of Security Command Center findings, mute rules,
continuous exports, and BigQuery exports to one of the data residency multi-regions
that Security Command Center supports.
2 2 2
Findings export
BigQuery exports.
Export findings from Security Command Center to BigQuery, either as a
one-time bulk export or by enabling
continuous exports .
Pub/Sub continuous exports
Cloud Logging continuous exports 2
Other features
App Hub integration .
Security Command Center integrates with App Hub to let you filter data related to resources
registered to a specific application when investigating findings and issues.
Graph Search
( Preview ).
Query the security graph to identify potential security vulnerabilities that you want to
monitor in your environment.
2
Privileged Access Manager .
Privileged Access Manager helps you control just-in-time, temporary privilege elevation for specific
principals and provides audit logs to track who had access to which resources, and when.
The following features are available with Security Command Center:
Multi-level and multi-party approvals ( Preview ).
Administrators can mandate more than one approval level per entitlement, allowing up to
two levels of sequential approvals for each entitlement.
Scope customization ( Preview ). Requesters can
customize the scope of their grant requests to include only the specific roles and
resources that they need within the scope of their entitlement.
2
Query assets with SQL in Cloud Asset Inventory
Request more Cloud Asset Inventory quota
Assured Open Source Software .
Take advantage of the security and experience that Google applies to open source software by
incorporating the same packages that Google secures and uses into your own developer
workflows.
Audit Manager .
A compliance audit solution that evaluates your resources against select controls from
multiple compliance frameworks. Security Command Center Enterprise users get access to the
Premium tier of Audit Manager at no extra cost.
Multicloud support.
Connect Security Command Center to other cloud providers to detect threats, vulnerabilities, and
misconfigurations. Assess attack exposure scores and attack paths on external cloud high-value
resources. Supported cloud providers: AWS, Azure.
This is a Google Cloud service that integrates with organization-level activations of
Security Command Center to provide findings. One or more features of this service might be priced
separately from Security Command Center.
Requires an organization-level activation.
Not activated by default. For more information and pricing details, contact your sales
representative or Google Cloud partner.
If data residency controls are enabled,
then this feature is not supported.
This feature doesn't support customer-managed encryption keys (CMEK).
Doesn't support data residency .
If data residency controls are enabled,
then this feature is supported only for Google Cloud.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

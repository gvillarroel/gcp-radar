---
title: "AI Protection overview \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview
  title: "AI Protection overview \_|\_ Security Command Center \_|\_ Google Cloud\
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
AI Protection overview
Stay organized with collections
Save and categorize content based on your preferences.
Premium and Enterprise service tiers (requires organization-level activation )
AI Protection helps you manage the security posture of your AI
workloads by detecting threats and helping you to mitigate risks to your AI
asset inventory. This document provides a general overview of
AI Protection, including its benefits and several key concepts.
AI Protection is available with organization-level activations of
Security Command Center.
For the Premium and Enterprise service tiers, when Security Command Center is
activated at the organization level,
AI Protection helps provide a comprehensive view of AI security across
your entire Google Cloud environment. The AI Protection dashboard
within the Google Cloud console displays a consistent set of widgets and features,
with data aggregated from all projects and resources within the organization.
Capabilities of AI Protection
AI Protection helps you manage threats and risks to your AI systems in
the following ways:
Organization-wide AI asset inventory : Helps you discover, assess, and
manage your AI systems and assets across all projects, including models,
datasets, endpoints, Vertex AI, Cloud Storage, and
BigQuery.
Integrated risk and vulnerability management : Helps you identify,
analyze, and manage AI-specific vulnerabilities, misconfigurations, threats,
and risks to your AI assets with full organizational context.
Compliance support : Helps you verify adherence to relevant security
standards using the detective controls in the AI Protection
framework .
Data security visibility : Integrates with services like Data Security Posture Management to
provide insights into data sensitivity, lineage, and risks associated with
your AI workloads.
Unified AI security management : Assists in monitoring and applying AI
security policies and best practices consistently across your organization
from a single, centralized dashboard. AI Protection also helps you
detect and respond to potential threats, vulnerabilities, and
misconfigurations.
Risk awareness support : Contributes to minimizing the financial,
reputational, and legal risks associated with security breaches and
regulatory noncompliance in your AI deployments.
Use cases for AI Protection
AI Protection helps organizations enhance their security by identifying
and mitigating threats and risks related to AI systems and sensitive data. The
following use cases are examples of how AI Protection can be used in
different organizations:
Financial services institution: customer financial data
A large financial services institution uses AI models that process sensitive
financial data.
Challenge: Processing highly sensitive financial data with AI models
entails several risks, including the risk of data breaches, data
exfiltration during training or inference, and vulnerabilities in the
underlying AI infrastructure.
Use case: AI Protection continuously monitors AI workflows
for suspicious activity, works to detect unauthorized data access and
anomalous model behavior, performs sensitive data classification, and
aids in improving your compliance with regulations such as PCI DSS and
GDPR.
Healthcare provider: patient privacy and compliance
A major healthcare provider manages electronic health records and uses AI
for diagnostics and treatment planning, dealing with Protected Health
Information (PHI).
Challenge: PHI analyzed by AI models is subject to strict
regulations like HIPAA. Risks include accidental PHI exposure through
misconfigurations or malicious attacks that target AI systems for
patient data.
Use case: AI Protection identifies and alerts on potential
HIPAA violations, detects unauthorized PHI access by models or users, flags
vulnerable and potentially misconfigured AI services, and monitors for data
leakage.
Manufacturing and robotics company: proprietary intellectual property
A manufacturing company specializing in advanced robotics and automation
relies heavily on AI for optimizing production lines and robotic control,
with vital intellectual property (IP) embedded within its AI algorithms and
manufacturing data.
Challenge: Proprietary AI algorithms and sensitive operational data
are vulnerable to theft from insider threats or external adversaries,
potentially leading to competitive disadvantage or operational disruption.
Use case: AI Protection monitors for unauthorized access to
AI models and code repositories, detects attempts to exfiltrate trained
models and unusual data access patterns, and flags vulnerabilities in AI
development environments to prevent IP theft.
Event Threat Detection rules for Vertex AI assets
The following Event Threat Detection rules run detections on Vertex AI assets:
Persistence : New AI API Method
Persistence : New Geography for AI Service
Privilege Escalation : Anomalous Impersonation of Service Account for AI
Admin Activity
Privilege Escalation : Anomalous Service Account Impersonator for AI Data
Access
Privilege Escalation : Anomalous Multistep Service Account Delegation for
AI Admin Activity
Privilege Escalation : Anomalous Multistep Service Account Delegation for
AI Data Access
Privilege Escalation : Anomalous Service Account Impersonator for AI
Admin Activity
Initial Access : Dormant Service Account Activity in AI Service
For more information about Event Threat Detection, see Event Threat Detection
overview .
AI Protection framework
AI Protection uses a framework that includes specific cloud
controls that are deployed automatically in detective mode . Detective mode
means that the cloud control is applied to the defined resources for monitoring
purposes. Any violations are detected and alerts are generated. You use
frameworks and cloud controls
to define your AI Protection requirements and apply those requirements
to your Google Cloud environment. AI Protection includes the Default
framework , which defines recommended baseline controls for
AI Protection. When you enable AI Protection, the default
framework is automatically applied to the Google Cloud organization in detective
mode.
If required, you can make copies of the framework to create custom
AI Protection frameworks. You can add the cloud controls to your custom
frameworks and apply the custom frameworks to the organization, folders, or
projects. For example, you can create custom frameworks that apply specific
jurisdictional controls to specific folders to ensure that data within those
folders stays within a particular geographical region.
Note: You can't assign AI Protection frameworks to applications.
Cloud controls in the default AI Protection framework
For more information about the cloud controls that AI Protection
framework uses, see Google Recommended AI Essentials - Vertex
AI .
Supported functional areas for AI Protection
This section defines functional areas that AI Protection can help
secure.
AI workloads : AI application workloads range from internal tools aimed
at improving employee productivity to consumer-facing solutions designed to
enhance the user experience and drive business. Examples include AI agents,
virtual assistants, conversational AI chatbots, and personalized
recommendations.
AI agents : AI agents are AI systems that can perceive their environment,
make decisions, and take actions to achieve specific goals.
AI models : AI models are classified into foundation AI models,
fine-tuned AI models, standard first-party AI models, and custom AI models.
Examples include Gemini ,
Llama , translation
models , and custom
models for specific tasks.
AI assets : AI assets contribute to machine learning operation pipelines
and are used by AI workloads. Types of AI assets include the following:
Declarative AI assets : AI lifecycle management tools, such as
Vertex AI, track these assets.
Inferred AI assets : General-purpose assets, such as compute and
storage assets, used to process AI data or workloads.
Model-as-a-Service (API only) : Assets that have programmatic calls
into first-party or third-party AI models.
Use the AI Security dashboard
The AI Security dashboard lets you visualize your organization's AI asset
inventory and review proposed mitigations for risks and threats.
Access the AI Security dashboard
To access the AI security dashboard, in the Google Cloud console, go to the Risk
overview > AI security page:
Go to AI security
Note: For the dashboard to populate with data, you need one of the
IAM roles in the Required
roles section.
For more information, see AI Security
dashboard .
Understand risk management for AI systems
This section provides information about potential risks that are associated with
AI systems. You can view the top risks in your AI inventory.
You can click any issue to open a details pane that provides a visualization of
the issue.
View AI threats
This section provides insights into threats associated with AI systems. You can
view the top 5 recent threats associated with your AI resources.
On this page, you can do the following:
Click View all to see threats that are associated with your AI
resources.
Click any threat to see further details about the threat.
Visualize your AI inventory
You can view a visualization of your AI inventory on the dashboard that provides
a summary of the projects that involve generative AI, the first-party and
third-party models in active use, and the datasets that are used in training the
third-party models.
On this page, you can do the following:
To view the inventory details page, click any of the nodes in the
visualization.
To view a detailed listing of individual assets (such as foundational models
and custom-built models), click the tooltip.
To open a detailed view of the model, click the model. This view displays
details such as the endpoints where the model is hosted and the dataset used to
train the model. If Sensitive Data Protection is enabled, the
datasets view also displays whether the dataset contains any sensitive data.
Review AI framework findings summary
This section helps you assess and manage findings from the AI framework and data
security policies, and includes the following:
Findings : This section displays a summary of findings generated by AI
security policies and data security policies. Click View all findings or
click the count against each finding category to view details about the
finding. Click a finding to display additional information about that
finding.
Sensitive data in Vertex AI datasets : This section displays a summary of
the findings based on sensitive data in datasets as reported by
Sensitive Data Protection. For more information,
see Introduction to Vertex
AI .
Examine Model Armor findings
A graph shows the total number of prompts or responses scanned by
Model Armor and the number of issues that
Model Armor detected. In addition, it displays summary statistics
for various types of issues detected, such as prompt injection, jailbreak
detection, and sensitive data detection.
This information is populated based on the metrics that
Model Armor publishes to Cloud Monitoring. For more information,
see Model Armor overview .
What's next
Learn how to configure AI
Protection .
To assess risk, access dashboard data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

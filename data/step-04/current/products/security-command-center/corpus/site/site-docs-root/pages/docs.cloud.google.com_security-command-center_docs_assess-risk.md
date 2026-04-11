---
title: "Assess risk at a glance \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/assess-risk
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/assess-risk
  title: "Assess risk at a glance \_|\_ Security Command Center \_|\_ Google Cloud\
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
Assess risk at a glance
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
The Risk section in the Google Cloud console helps you to manage the highest
profile risks in your cloud environment.
The Overview page serves as your first contact security dashboard,
highlighting the highest priority risks in your cloud environments. You can view
multiple domains in Overview by selecting one of the following views:
All risk
Vulnerabilities
Identity
Data
AI security
Threats
If Security Command Center was recently activated, it might take time
for data to appear. For information about the scan frequency of Security Command Center services, see
When to expect findings in Security Command Center .
All risk dashboard
The All risk dashboard surfaces the following high-priority security risks
across your cloud environments:
Standard-legacy
Misconfigurations by date : shows the number of misconfiguration findings
over time.
Top misconfigurations : summarizes the misconfiguration findings by resource
type, category, and project (when viewing data for an organization).
Critical CVEs : summarizes the CVEs in vulnerability findings identified
as having critical impact.
Standard
Misconfigurations by date : shows the number of misconfiguration findings
over time.
Top misconfigurations : summarizes the misconfiguration findings by resource
type, category, and project (when viewing data for an organization).
Critical CVEs : summarizes the CVEs in vulnerability findings identified
as having critical impact.
Compliance : summarizes the passing cloud controls in applied Compliance Manager
frameworks and the number of active findings.
The Misconfigurations by date and Top misconfigurations panels include data about
Security Health Analytics findings that don't have the launch_state="LAUNCH_STATE_DEPRECATED"
field-value identifier.
Premium and Enterprise
Riskiest issues shows at-a-glance information for your top
issues , including simplified
attack paths, evidence diagrams, or threat finds that are combined together as
Correlated Threats
( Preview ). This panel isn't available with
project-level activations.
Recent Google Cloud threats that are active in your cloud environments.
High-impact, exploitable vulnerabilities , prioritized by the resources
impacted by them.
Compliance summarizes the passing compliance frameworks and the number
of active findings. The data source for this panel is either Security Health Analytics
or Compliance Manager.
If your organization was
activated or migrated to the Standard tier ,
and then you upgraded to the Premium tier or Enterprise tier, the
Compliance panel shows industry benchmarks that Security Command Center supports
using Compliance Manager frameworks.
Otherwise, the Compliance panel shows industry benchmarks that
Security Command Center supports using Security Health Analytics. You can view both
Compliance Manager frameworks and Security Health Analytics frameworks on the
Compliance page.
In most cases, you can interact with individual high-priority risks for a brief
summary, continue on to a more detailed view of each risk, or view all risks of
a specific type.
View application-related information on the All risk dashboard
Standard-legacy, Standard, Premium, and Enterprise service tiers
When viewing the All risk dashboard for an organization, you can also see
information about the application if the primary resource in the issue is
part of an application in App Hub or Application Design Center.
The Select app menu lets you display only issues where the primary resource
is configured in the application that you selected. The default None value
displays issues found in resources that are not related to an application.
In the Riskiest issues panel, an issue displays the application name if
the primary resource in the issue is defined in an application.
Vulnerabilities dashboard
The Vulnerabilities dashboard gives insights into virtual machines and
containers with exploitable vulnerabilities across your cloud environments. The
dashboard displays the following information:
Top common vulnerabilities and exploits . Displays a clickable quadrant
heatmap to help you filter vulnerabilities by
exploitability
and impact (risk
rating) .
The number of unique resources that are affected and the findings related to those
resources are shown in a table after the heatmap. Each unique resource might
have more than one finding. You can click a heatmap cell again to reset the
heatmap.
Most common critical exploitable vulnerabilities . A list of highly
exploitable vulnerabilities found in your cloud environments, prioritized by
the total number of unique resources impacted by them.
Vulnerability findings are grouped in an interactive chart by the exploitability
and impact of the corresponding CVE, as assessed by Mandiant.
Click a block in the chart to see a list of vulnerabilities by CVE ID that
have been detected in your environment.
Expand a CVE section to view its descriptions, which are findings
related to the CVE and the resources they affect. Because different findings
can affect the same resource, the sum of all resource counts in the expanded
description might be greater than the unique resource count in the heading
row.
Containers with exploitable vulnerabilities . A list of containers with
exploitable vulnerabilities, where the vulnerability exploitation
activity
rating is available , confirmed , or wide and the risk rating
is critical , based on the assessment of Google Threat Intelligence. The
list is ordered by attack exposure
score , then by largest number of
impacted resources.
Latest compute vulnerabilities with known exploits . A list of
Compute Engine virtual machine instances that have exploitable
vulnerabilities with findings that belong to the OS_VULNERABILITY or
SOFTWARE_VULNERABILITY category.
From here, you can check the following:
The attack exposure score of the exploit. Click the score to view the
attack paths to your exposed high-value
resources .
How many configured high-value resources
have been exposed due to the vulnerability that have a priority
of HIGH , MEDIUM , or LOW .
The Exploit release date , which is when the vulnerability was
announced.
The First available date , which is when an exploit was first
observed.
The level of exploitability
of the vulnerability.
Data dashboard
Standard, Premium, and Enterprise service tiers (requires organization-level activation )
The Data dashboard in the Google Cloud console lets you see how your
organization's data aligns with your data security and compliance requirements.
For more information, see Data Security Posture Management overview .
The dashboard displays the following information:
Standard
Data security compliance summarizes the failing data cloud controls,
the number of data security findings, and the top data security findings.
Learn about data security provides a video and links to more information
about how to protect your digital information from unauthorized access, use,
disclosure, alteration, or destruction.
Data Map Explorer shows the geographic locations where your data is
stored and lets you filter information about your data by geographic location,
how sensitive the data is, the associated project, and which Google Cloud
services store the data. The circles on the data map represent the relative
count of data resources and data resources with alerts in the region.
Resources table summarizes findings by resource and includes the
display name, resource type, location, number of findings, and project ID
that the resource belongs to.
Premium and Enterprise
Top data security findings lists the number of findings by finding
category and severity.
Top data frameworks with open findings lists frameworks with the most
findings.
Data Map Explorer shows the geographic locations where your data is
stored and lets you filter information about your data by geographic
location.
Resources table summarizes findings by resource and includes the
display name, resource type, location, number of findings, and project ID
that the resource belongs to.
Quick Filters panel lets you filter data in the Resources table.
AI Security dashboard
Premium and Enterprise service tiers (requires organization-level activation )
The AI Security dashboard provides a
high-level view of your AI security posture.
The dashboard displays the following sections:
AI Inventory : Access an overview of the following:
The count of discovered AI agents that are deployed to
Vertex AI Agent Engine
Runtime . Each listed agent has a
detailed view page that shows you any findings, change history,
Identity and Access Management (IAM) policies, and metadata for that agent.
The AI models that are used (including foundational
models and custom-built models).
The datasets that are used in training or
fine-tuning the AI models. If
Sensitive Data Protection is enabled, the dashboard shows whether datasets
contain sensitive data.
The endpoints where your AI models are hosted.
Riskiest AI Issues : View top risks in your AI inventory, prioritized by
the highest attack exposure scores .
Click any issue to see details.
Recent AI Threats : Get a summary of recent threat findings.
Findings : Assess and manage findings generated by AI security and data
security policies. This widget breaks up findings into two categories:
AI Vulnerabilities & misconfigurations : See any vulnerabilities and
misconfigurations in findings across your AI workloads.
AI Framework: Google Recommended AI Essentials - Vertex AI : View the
percentage of adherence to Google recommended AI security best
practices, including controls that help improve the AI workloads
security posture. For feature availability and data residency
implications, see Supported features and launch
stages .
Sensitive data in Vertex AI datasets : Assess and manage findings for
sensitive data in Vertex AI datasets.
Gemini models secured with Model Armor : View Gemini models that
are protected and unprotected by Model Armor floor settings.
Violations : See detections by Model Armor across any model that is
protected by Model Armor templates and floor settings.
An interaction is a single request that is analyzed by Model Armor and
one interaction can have multiple violations.
Note: If Model Armor is not configured for any of the projects in
the organization or a template isn't created, the Model Armor
widgets in the AI Security dashboard won't show any data. For
configuration steps, see Configure
Model Armor .
Identity dashboard
Standard-legacy, Standard, Premium, and Enterprise service tiers
The Identity dashboard shows misconfiguration findings related to principal
accounts ( identities ) that are misconfigured or are granted excessive or
sensitive permissions.
Threats dashboard
Premium and Enterprise service tiers
The Threats dashboard helps you review potentially harmful events in
your Google Cloud resources in the past seven days. You can view
findings in the following panels:
New threats over time shows potentially harmful events in your
resources over a time period that you specify. The default time period is
seven days. Specify the time period to display threats for by using
the Time range field.
Top Threats panel shows the following:
Threats by severity shows the number of threats in each severity
level.
Threats by category shows the number of findings in each category
across all projects.
Threats by project panel shows the number of findings for each project in
your organization.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

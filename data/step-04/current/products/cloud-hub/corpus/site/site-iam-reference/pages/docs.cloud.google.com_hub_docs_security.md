---
title: "Assess security and compliance status \_|\_ Cloud Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/hub/docs/security
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/hub/docs/maintenance
source_metadata:
  url: https://docs.cloud.google.com/hub/docs/security
  title: "Assess security and compliance status \_|\_ Cloud Hub \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Hub
Guides
Send feedback
Assess security and compliance status
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The Security & compliance page in Cloud Hub provides a centralized
view of your project's security and compliance posture. This page aggregates key
insights from Security Command Center, which helps you quickly identify critical risks.
Additionally, you can navigate directly to Security Command Center to address
security issues.
For more information about the concepts on this page, see the Security Command Center overview .
Before you begin
To view data for Security Command Center in Cloud Hub, ensure that the
following steps are complete:
Confirm that you have a project
and verify your Security Command Center service tier for that project.
Obtain specific Identity and Access Management (IAM) roles and permissions.
Security Command Center service tiers
There are multiple Security Command Center service tiers :
Standard-legacy, Standard, Premium, or Enterprise.
Security Command Center Standard is activated by default, but your activation type
might have been upgraded. To confirm your activation type, see
View your current activation type .
To change tiers, see Modify your Security Command Center tier configuration .
Upgrading to Security Command Center Premium or Enterprise lets you see additional
security and compliance insights.
Required roles
To get the permissions that
you need to view security and compliance data from Security Command Center in Cloud Hub,
ask your administrator to grant you the
Cloud Hub Operator ( roles/cloudhub.operator )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to view security and compliance data from Security Command Center in Cloud Hub. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to view security and compliance data from Security Command Center in Cloud Hub:
securitycenter.findingsViewer
securitycenter.assetsViewer
securitycenter.attackPathsViewer
cloudsecuritycompliance.viewer
You might also be able to get
these permissions
with custom roles or
other predefined roles .
About Security Command Center findings in Cloud Hub
A finding is a record of a potential security issue that a Security Command Center
service detects. The Security & compliance page in Cloud Hub
surfaces the most critical findings relevant to your project, which lets you
focus on the highest-priority risks. For detailed investigation and remediation
workflows, you can navigate from a finding in Cloud Hub to the
Security Command Center interface.
Use the Security & compliance page
To assess your security status, use the cards on the Security & compliance page
to review risks, monitor compliance, and prioritize remediation efforts.
View findings by severity
The Findings by severity card helps you focus on the newest and most serious
security risks. The card lists findings, giving higher priority to those
detected most recently and those with Critical or High severity ratings .
In the Google Cloud console, go to the Security & compliance page.
Review the list of findings on the Findings by severity card. Each entry
includes the finding's severity, category, class, creation time, affected
resource, and resource type.
To focus your investigation on a specific area, select a domain filter:
CVE Vulnerabilities , Data , AI Security , or Identity .
Your Security Command Center service tier determines what domain data is available to
you. See the following table for details:
Security Command Center
Domains
Standard-Legacy
All Risks, CVE Vulnerabilities, and Identity
Standard
All Risks, CVE Vulnerabilities, Identity, Data, and AI Security
Premium
All Risks, CVE Vulnerabilities, Identity, Data, and AI Security
Enterprise
All Risks, CVE Vulnerabilities, Identity, Data, and AI Security
You can click any Finding category to view comprehensive details and
remediation steps in Security Command Center. For information about working with
findings, see Review and manage findings .
Monitor compliance frameworks
The Frameworks card helps you monitor your compliance against industry
standards and benchmarks. This helps you to identify compliance frameworks that
might require attention.
In the Google Cloud console, go to the Security & compliance page.
On the Frameworks card, review the compliance score and trend of last 30
days for each listed framework. This information helps you track your
compliance posture over time.
To investigate a specific framework, click its name to navigate to the
Compliance page in Security Command Center.
Prioritize top failing cloud controls
The Top failing cloud controls card helps you prioritize which security
controls to address first.
In the Google Cloud console, go to the Security & compliance page.
The Top failing cloud controls card shows you controls with the most
open findings.
Use this list to determine which failing controls to address to improve your
compliance score. Click View cloud controls in Security Command Center to
explore your controls in depth in Security Command Center.
What's next
Learn more about Security Command Center .
Learn about the detection services
that Security Command Center uses to detect security issues.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

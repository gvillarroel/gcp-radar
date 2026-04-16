---
title: "Assess compliance without Compliance Manager \_|\_ Security Command Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/compliance-management
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/compliance-management
  title: "Assess compliance without Compliance Manager \_|\_ Security Command Center\
    \ \_|\_ Google Cloud Documentation"
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
Assess compliance without Compliance Manager
Stay organized with collections
Save and categorize content based on your preferences.
Premium and Enterprise service tiers
You can use Security Command Center to evaluate your Google Cloud environment against
various regulatory frameworks.
Note: This document applies to compliance management if you haven't enable
Compliance Manager. For information about compliance
with Compliance Manager, see Compliance Manager
overview .
Security Command Center monitors
your compliance with detectors that are mapped to the controls of a wide variety of security
standards.
For each supported security standard,
Security Command Center checks a
subset of the controls. For the controls checked, Security Command Center shows you how many are
passing. For the controls that are not passing, Security Command Center shows you a list of findings
that describe the control failures.
CIS reviews and certifies the mappings of
Security Command Center
detectors to each supported version of the CIS Google Cloud Foundations Benchmark.
Additional compliance mappings are included for reference purposes only.
Security Command Center
adds support for new benchmark versions and standards periodically. Older versions remain
supported, but are eventually deprecated. We recommend that you use the latest supported benchmark
or standard available.
With the
security posture service ,
you can map organization policies and Security Health Analytics detectors to the standards and controls
that apply to your business. After you create a security posture, you can monitor for any changes
to the environment that could affect your business's compliance.
With Compliance Manager , you can deploy frameworks that map regulatory controls to cloud
controls. After you create a framework, you can monitor for any changes to the environment that
might affect your business's compliance and audit your environment.
Supported security standards
Note: These standards are supported if you have't enabled Compliance Manager. For information about the frameworks that you can use with Compliance Manager, see the Compliance Manager overview .
Google Cloud
Security Command Center
maps detectors for Google Cloud to one or more of the following compliance
standards:
Center for Information Security (CIS) Controls 8.0
CIS Google Cloud Computing Foundations Benchmark
v2.0.0, v1.3.0, v1.2.0, v1.1.0, and v1.0.0
CIS Kubernetes Benchmark v1.5.1
Cloud Controls Matrix (CCM) 4
Health Insurance Portability and Accountability Act (HIPAA)
International Organization for Standardization (ISO) 27001, 2022 and 2013
National Institute of Standards and Technology (NIST) 800-53 R5 and R4
National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 1.0
Open Web Application Security Project (OWASP) Top Ten, 2021 and 2017
Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1
System and Organization Controls (SOC) 2
2017 Trust Services Criteria (TSC)
AWS
In the Enterprise service tier,
Security Command Center
maps detectors for Amazon Web Services (AWS) to one or more of the following compliance
standards:
CIS Amazon Web Services Foundations 2.0.0
CIS Critical Security Controls Version 8.0
Cloud Controls Matrix (CCM) 4
Health Insurance Portability and Accountability Act (HIPAA)
International Organization for Standardization (ISO) 27001, 2022
National
Institute of Standards and Technology (NIST) 800-53 R5
National Institute of Standards and Technology (NIST)
Cybersecurity Framework (CSF) 1.0
Payment Card Industry Data Security Standard (PCI DSS) 4.0 and 3.2.1
System and Organization Controls (SOC) 2
2017 Trusted Services Criteria (TSC)
Detectors and findings as compliance controls
Security Command Center detection services, like Security Health Analytics and
Web Security Scanner, use detection modules (detectors) to check for
vulnerabilities and misconfigurations in your cloud environment.
When a vulnerability is found, the detector generates a finding . A finding is
a record of a vulnerability or other security issue that includes information
such as the following:
A description of the vulnerability
A recommendation to address the vulnerability that would bring the control
into compliance
The numerical ID of the control that corresponds to the finding
Recommended steps for remediating the vulnerability
Not all controls in a standard can be mapped to Security Command Center findings,
usually because certain controls can't be automated, but possibly for other
reasons. Consequently, the total number of controls that Security Command Center
checks for is usually less than the total number of controls that a standard
defines.
Security Command Center uses active and muted findings to calculate the percentages
for compliance controls on the Compliance page and in compliance reports.
To learn more about Security Health Analytics and Web Security Scanner findings and
the mapping between supported detectors and compliance standards, see
vulnerabilities findings .
Evaluate compliance across your cloud environment
You can see at a glance how compliant your cloud environment is with a given
security standard in the following places:
The Compliance
page in the Google Cloud console.
The Risk Overview page in the Security Operations console. This
page shows an at-a-glance view of the top risks found in your cloud
environments, including compliance.
Each security standard shows a percentage of how many of their
controls receive a passing grade at the selected scope, whether that is at the
organization, folder, or project level.
Where Security Command Center has been activated affects what is shown:
At the project level : You can only view the activated project's compliance
statistics. If you switch to a folder or organization that the project belongs
to in the Google Cloud console, the Compliance page does not display.
At the organization level : If you switch to the activated organization in
the Google Cloud console, the Compliance page shows compliance
statistics for the entire organization, including its folders and projects.
To view compliance statistics for individual folders and projects within that
organization, switch to that resource level in the Google Cloud console.
Compliance reports are generated daily. Reports can be 24 hours stale, and might
be missing if they've failed to generate.
Note: Security Command Center vulnerability detection services, such as
Security Health Analytics and Web Security Scanner, monitor controls based on a best
effort mapping between the detectors of the services and the controls of a
standard.
Assess compliance in Google Cloud console
Go to the Compliance page in the Google Cloud console.
Go to Compliance
Select the project, folder, or organization you want to view compliance for.
Click View details in one of the standards cards to open its
Compliance detail page.
From this page, you can do the following things:
View compliance against the selected standard on a particular date.
Switch the compliance standard that you're viewing the details for.
Export a report of the compliance details to a CSV file.
Track compliance progress over time with a trend chart.
Expand security standard controls to view their constituent rules and
rule severity.
Click rules to view findings for non-compliant resources and remediate issues
where appropriate. For information on remediating findings, see
Remediating Security Health Analytics findings
and
Remediating Web Security Scanner findings .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

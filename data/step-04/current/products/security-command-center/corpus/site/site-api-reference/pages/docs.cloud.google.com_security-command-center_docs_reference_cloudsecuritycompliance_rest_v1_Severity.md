---
title: "Severity \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/Severity
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/Severity
  title: "Severity \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Reference
Send feedback
Severity
Stay organized with collections
Save and categorize content based on your preferences.
The severity of the finding.
Enums
SEVERITY_UNSPECIFIED
Default value. This value is unused.
CRITICAL
A critical vulnerability is easily discoverable by an external actor, exploitable, and results in the direct ability to execute arbitrary code, exfiltrate data, and otherwise gain additional access and privileges to cloud resources and workloads. Examples include publicly accessible unprotected user data and public SSH access with weak or no passwords.
A critical threat is a threat that can access, modify, or delete data or execute unauthorized code within existing resources.
HIGH
A high-risk vulnerability can be easily discovered and exploited in combination with other vulnerabilities to gain direct access and the ability to execute arbitrary code, exfiltrate data, and otherwise gain additional access and privileges to cloud resources and workloads. An example is a database with weak or no passwords that is only accessible internally. This database could easily be compromised by an actor that had access to the internal network.
A high-risk threat is a threat that can create new computational resources in an environment but can't access data or execute code in existing resources.
MEDIUM
A medium-risk vulnerability can be used by an actor to gain access to resources or privileges that enable them to eventually (through multiple steps or a complex exploit) gain access and the ability to execute arbitrary code or exfiltrate data. An example is a service account with access to more projects than it should have. If an actor gains access to the service account, they could potentially use that access to manipulate a project the service account was not intended to.
A medium-risk threat can cause operational impact but might not access data or execute unauthorized code.
LOW
A low-risk vulnerability hampers a security organization's ability to detect vulnerabilities or active threats in their deployment, or prevents the root cause investigation of security issues. An example is monitoring and logs being disabled for resource configurations and access.
A low-risk threat is a threat that has obtained minimal access to an environment but can't access data, execute code, or create resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-07 UTC."],[],[]]

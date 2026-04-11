---
title: "Agent Engine Threat Detection overview \_|\_ Security Command Center \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview
  title: "Agent Engine Threat Detection overview \_|\_ Security Command Center \_\
    |\_ Google Cloud Documentation"
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
Agent Engine Threat Detection overview
Stay organized with collections
Save and categorize content based on your preferences.
Premium and Enterprise service tiers
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document provides an overview of Agent Engine Threat Detection and its detectors.
Agent Engine Threat Detection is a built-in service of Security Command Center that helps you detect and
investigate potential attacks on AI agents that are deployed to
Vertex AI Agent Engine Runtime.
If the Agent Engine Threat Detection service detects a potential attack, it generates a finding
in Security Command Center in near-real time.
Agent Engine Threat Detection monitors the supported AI
agents and
detects the most common runtime threats. Runtime threats include the execution
of malicious binaries or scripts, container escapes, reverse shells, and the use
of attack tools within the agent's environment.
In addition, control-plane detectors from
Event Threat Detection
analyze various audit logs (including Identity and Access Management, BigQuery, and
Cloud SQL logs) and Vertex AI Agent Engine logs ( stdout and
stderr ) to detect suspicious activity. Control-plane threats include data
exfiltration attempts, excessive permission denials, and suspicious token
generation.
Benefits
Agent Engine Threat Detection offers the following benefits:
Proactively reduce risk for AI workloads. Agent Engine Threat Detection helps you
detect and respond to threats early by monitoring the behavior and environment
of your AI agents
Manage AI security in a unified location. Agent Engine Threat Detection findings
appear directly in Security Command Center. You have a central interface to view
and manage threat findings alongside other cloud security risks.
How it works
Agent Engine Threat Detection collects telemetry from the hosted AI
agents to analyze processes, scripts, and libraries that might indicate a
runtime attack. When Agent Engine Threat Detection detects a potential threat, it does the
following:
Agent Engine Threat Detection uses a watcher process to collect event information
while the agentic workload is running. The watcher process can take
up to one minute to start and collect information.
Agent Engine Threat Detection analyzes the collected event information to determine
whether an event indicates an incident. Agent Engine Threat Detection uses natural
language processing (NLP) to analyze Bash and Python scripts for malicious
code.
If Agent Engine Threat Detection identifies an incident, it reports the incident as
a finding in Security Command Center.
If Agent Engine Threat Detection doesn't identify an incident, it doesn't store any
information.
All data collected is processed in memory and doesn't persist after
analysis unless identified as an incident and reported as a finding.
For information about how to review Agent Engine Threat Detection findings in the
Google Cloud console, see Review
findings .
Detectors
This section lists the runtime and control-plane detectors that monitor AI
agents that are deployed to Vertex AI Agent Engine Runtime.
Runtime detectors
Agent Engine Threat Detection includes the following runtime detectors:
Display name
Module name
Description
Execution: Added Malicious Binary Executed ( Preview )
AGENT_ENGINE_ADDED_MALICIOUS_BINARY_EXECUTED
A process executed a binary that threat intelligence identifies as
malicious. This binary was not part of the original agentic
workload.
This event strongly suggests that an attacker has control of
the workload and is running malicious software.
Execution: Added Malicious Library Loaded ( Preview )
AGENT_ENGINE_ADDED_MALICIOUS_LIBRARY_LOADED
A process loaded a library that threat intelligence identifies as
malicious. This library was not part of the original agentic
workload.
This event suggests that an attacker likely has
control of the workload and is running malicious software.
Execution: Built in Malicious Binary Executed ( Preview )
AGENT_ENGINE_BUILT_IN_MALICIOUS_BINARY_EXECUTED
A process executed a binary that threat intelligence identifies as
malicious. This binary was part of the original agentic workload.
This event might suggest that an attacker is
deploying a malicious workload. For example, the actor might have
gained control of a legitimate build pipeline and injected the
malicious binary into the agentic workload.
Execution: Container Escape ( Preview )
AGENT_ENGINE_CONTAINER_ESCAPE
A process running inside the container attempted to bypass container
isolation by using known exploit techniques or binaries, which threat
intelligence identifies as potential threats. A successful escape can
allow an attacker to access the host system and potentially compromise
the entire environment.
This action suggests that an attacker is exploiting vulnerabilities to
gain unauthorized access to the host system or broader infrastructure.
Execution: Kubernetes Attack Tool Execution ( Preview )
AGENT_ENGINE_KUBERNETES_ATTACK_TOOL_EXECUTION
A process executed a Kubernetes-specific attack tool, which threat
intelligence identifies as a potential threat.
This action suggests that an attacker has gained
access to the cluster and is using the tool to exploit
Kubernetes-specific vulnerabilities or configurations.
Execution: Local Reconnaissance Tool Execution ( Preview )
AGENT_ENGINE_LOCAL_RECONNAISSANCE_TOOL_EXECUTION
A process executed a local reconnaissance tool that is not typically
part of the agentic workload. Threat intelligence identifies these
tools as potential threats.
This event suggests that an attacker is trying to gather
internal system information, such as mapping the infrastructure,
identifying vulnerabilities, or collecting data on system
configurations.
Execution: Malicious Python Executed ( Preview )
AGENT_ENGINE_MALICIOUS_PYTHON_EXECUTED
A machine learning model identified executed Python code as
malicious. An attacker can use Python to download
tools or files into a compromised environment and execute commands
without using binaries.
The detector uses natural language processing (NLP) to analyze the
Python code's content. Because this approach isn't based on
signatures, detectors can identify known and novel malicious Python
code.
Execution: Modified Malicious Binary Executed ( Preview )
AGENT_ENGINE_MODIFIED_MALICIOUS_BINARY_EXECUTED
A process executed a binary that threat intelligence identifies as
malicious. This binary was part of the original agentic workload but
was modified at runtime.
This event suggests that an attacker might have control of the
workload and is running malicious software.
Execution: Modified Malicious Library Loaded ( Preview )
AGENT_ENGINE_MODIFIED_MALICIOUS_LIBRARY_LOADED
A process loaded a library that threat intelligence identifies as
malicious. This library was part of the original agentic workload but
was modified at runtime.
This event suggests that an attacker has control of the
workload and is running malicious software.
Malicious Script Executed ( Preview )
AGENT_ENGINE_MALICIOUS_SCRIPT_EXECUTED
A machine learning model identified executed Bash code as malicious.
An attacker can use Bash to download tools or files
into a compromised environment and execute commands without using
binaries.
The detector uses NLP to analyze the Bash code's content. Because
this approach is not based on signatures, detectors
can identify known and novel malicious Bash code.
Malicious URL Observed ( Preview )
AGENT_ENGINE_MALICIOUS_URL_OBSERVED
Agent Engine Threat Detection observed a malicious URL in the argument list of
a running process.
The detector compares these URLs against the unsafe web resources
lists maintained by the Google
Safe Browsing
service. If you believe that Google incorrectly classified a URL as a
phishing site or malware, report the issue at
Reporting Incorrect Data .
Reverse Shell ( Preview )
AGENT_ENGINE_REVERSE_SHELL
A process started with stream redirection to a remote connected
socket. The detector looks for stdin bound to a remote
socket.
A reverse shell allows an attacker to communicate from a compromised
workload to an attacker-controlled machine. The attacker can then
command and control the workload—for example, as part of a
botnet.
Unexpected Child Shell ( Preview )
AGENT_ENGINE_UNEXPECTED_CHILD_SHELL
A process that does not normally invoke shells unexpectedly spawned a
shell process.
The detector monitors process executions and generates a finding when
a known parent process spawns a shell unexpectedly.
Control-plane detectors
This section describes the control-plane detectors from Event Threat Detection that
are specifically designed for AI agents deployed to
Vertex AI Agent Engine Runtime. Event Threat Detection also has
detectors for general AI-related threats .
These control-plane detectors are enabled by default.
You manage these detectors the same way you do other
Event Threat Detection detectors. For more information, see Use
Event Threat Detection .
Display name
API name
Log source types
Description
Discovery: Evidence of Port Scanning from AI Agent ( Preview )
AGENT_ENGINE_PORT_SCANNING_EVIDENCE
Agent Engine Logs :
Agent Engine Logs
An AI agent exhibited horizontal or vertical port scanning behavior. Findings are classified as Low severity by default.
Discovery: AI Agent Unauthorized Service Account API Call ( Preview )
AGENT_ENGINE_UNAUTHORIZED_SERVICE_ACCOUNT_API_CALL
Cloud Audit Logs :
Admin Activity audit logs
A service account made an unauthorized API call to an outside project through an AI
agent. This behavior can indicate that an unauthorized user is attempting to gain
details about resources, enable or disable services, or perform other unauthorized
actions through an AI agent. Findings are classified as Low severity by
default.
Discovery: AI Agent Service Account Self-Investigation ( Preview )
AGENT_ENGINE_IAM_ANOMALOUS_BEHAVIOR_SERVICE_ACCOUNT_GETS_OWN_IAM_POLICY
Cloud Audit Logs :
IAM Data Access audit logs
Permissions :
DATA_READ
An identity associated with an AI agent was used to investigate the roles and
permissions associated with that same service account. Findings are classified as
Low severity if the request was authorized, or High
severity if the request was not authorized.
Credential Access: AI Agent Anomalous Access to Metadata Service ( Preview )
AGENT_ENGINE_ANOMALOUS_ACCESS_TO_METADATA_SERVICE
Agent Engine Logs :
Agent Engine Logs
An AI agent fetched a service account token from a metadata server. Findings are
classified as Low severity by default.
Exfiltration: AI Agent Initiated BigQuery VPC Perimeter Violation ( Preview )
AGENT_ENGINE_BIG_QUERY_EXFIL_VPC_PERIMETER_VIOLATION
Cloud Audit Logs :
BigQueryAuditMetadata data access logs
Permissions :
DATA_READ
Detects an attempt by an AI agent to access BigQuery resources that
are protected by VPC Service Controls. Findings are classified as Low
severity by default.
Exfiltration: AI Agent Initiated BigQuery Data Exfiltration to External Table ( Preview )
AGENT_ENGINE_BIG_QUERY_EXFIL_TO_EXTERNAL_TABLE
Cloud Audit Logs :
BigQueryAuditMetadata data access logs
Permissions :
DATA_READ
Detects when resources owned by the protected organization were saved outside of the
organization by an AI agent, including copy or transfer operations. Findings are
classified as High severity by default.
Exfiltration: AI Agent Initiated CloudSQL Exfiltration to Public Bucket ( Preview )
AGENT_ENGINE_CLOUDSQL_EXFIL_EXPORT_TO_PUBLIC_GCS
Cloud Audit Logs :
MySQL data access logs
PostgreSQL data access logs
SQL Server data access logs
Detects when live instance data was exported by an AI agent to a Cloud Storage
bucket that is owned by the organization and is publicly accessible.
For project-level activations of the Security Command Center Premium tier,
this finding is available only if the Standard-legacy tier is enabled in the
parent organization.. Findings are classified as High severity by default.
Exfiltration: AI Agent Initiated CloudSQL Exfiltration to External Bucket ( Preview )
AGENT_ENGINE_CLOUDSQL_EXFIL_EXPORT_TO_EXTERNAL_GCS
Cloud Audit Logs :
MySQL data access logs
PostgreSQL data access logs
SQL Server data access logs
Detects when live instance data was exported by an AI agent to a Cloud Storage
bucket outside of the organization.
For project-level activations of the Security Command Center Premium tier,
this finding is available only if the Standard-legacy tier is enabled in the
parent organization.. Findings are classified as High severity by default.
Exfiltration: AI Agent Initiated BigQuery Data Extraction ( Preview )
AGENT_ENGINE_BIG_QUERY_EXFIL_TO_CLOUD_STORAGE
Cloud Audit Logs :
BigQueryAuditMetadata data access logs
Permissions :
DATA_READ
Detects the following scenarios of a BigQuery data extraction
initiated by an AI agent:
A BigQuery resource owned by the protected organization was saved,
through extraction operations, to a Cloud Storage bucket outside the
organization.
A BigQuery resource owned by the protected organization was saved,
through extraction operations, to a publicly accessible Cloud Storage bucket
owned by that organization.
For project-level activations of the Security Command Center Premium tier,
this finding is available only if the Standard-legacy tier is enabled in the
parent organization.. Findings are classified as Low severity by default.
Initial Access: AI Agent Identity Excessive Permission Denied Actions ( Preview )
AGENT_ENGINE_EXCESSIVE_FAILED_ATTEMPT
Cloud Audit Logs :
Admin Activity logs
An identity associated with an AI agent repeatedly triggered permission denied
errors by attempting changes across multiple methods and services. Findings are
classified as Medium severity by default.
Privilege Escalation: AI Agent Suspicious Token Generation Using signJwt ( Preview )
AGENT_ENGINE_SUSPICIOUS_TOKEN_GENERATION_SIGN_JWT
Cloud Audit Logs :
IAM Data Access audit logs
A service account associated with an AI agent used the
serviceAccounts.signJwt method to generate an access token for
another service account.
Findings are classified as Low severity by default.
Privilege Escalation: AI Agent Suspicious Token Generation Using Implicit Delegation ( Preview )
AGENT_ENGINE_SUSPICIOUS_TOKEN_GENERATION_IMPLICIT_DELEGATION
Cloud Audit Logs :
IAM Data Access audit logs
The iam.serviceAccounts.implicitDelegation permission was misused to
generate access tokens from a more privileged service account through an AI agent.
Findings are classified as Low severity by default.
Privilege Escalation: AI Agent Suspicious Cross-Project OpenID Token Generation ( Preview )
AGENT_ENGINE_SUSPICIOUS_TOKEN_GENERATION_CROSS_PROJECT_OPENID
Cloud Audit Logs :
IAM Data Access audit logs
The iam.serviceAccounts.getOpenIdToken IAM permission was
used across projects through an AI agent.
This finding isn't available for project-level activations. Findings are classified
as Low severity by default.
Privilege Escalation: AI Agent Suspicious Cross-Project Access Token Generation ( Preview )
AGENT_ENGINE_SUSPICIOUS_TOKEN_GENERATION_CROSS_PROJECT_ACCESS_TOKEN
Cloud Audit Logs :
IAM Data Access audit logs
The iam.serviceAccounts.getAccessToken IAM permission was
used across projects through an AI agent.
This finding isn't available for project-level activations. Findings are classified as Low severity by default.
For deprecated and shut down rules, see Deprecations .
What's next
Learn how to
use Agent Engine Threat Detection .
Learn how to test
Agent Engine Threat Detection .
Learn how to use
Event Threat Detection .
Learn how to respond to AI threat
findings .
Refer to the Threat findings index .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

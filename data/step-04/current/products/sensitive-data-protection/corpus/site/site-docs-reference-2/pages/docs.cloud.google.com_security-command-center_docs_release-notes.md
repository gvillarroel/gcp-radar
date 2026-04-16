---
title: "Security Command Center release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/release-notes
  title: "Security Command Center release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Resources
Send feedback
Security Command Center release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page contains release notes for features and updates to Security Command Center. You
can periodically check this page for announcements about new or updated
features, bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 02, 2026
Feature
Security Command Center Risk Engine
supports Managed Service for Apache Spark resources in attack paths and Managed Service for Apache Spark
clusters and jobs in high-value resource sets.
March 31, 2026
Feature
Risk Engine now supports aiplatform.googleapis.com/ReasoningEngine in both attack paths and high value resource sets .
March 27, 2026
Announcement
Risk Engine has launched enhanced heuristics to help identify default
high-value resources.
If you are using the default high-value resource set, you might observe changes in the
exposure scores of their findings, resources, and issues. For information about
these changes, see Default high-value resource set .
March 16, 2026
Change
The names of Event Threat Detection
rules pertaining to AI control
plane
have changed.
The Cloud Run Threat Detection rule
Privilege Escalation: Fileless Execution in /dev/shm has been shut
down .
March 09, 2026
Announcement
In March 2026, Risk Engine will launch enhanced heuristics to more accurately
identify default high-value resources .
No action is required. As a result of this enhancement, customers using the
default high-value resource set may observe changes in the exposure scores of
their findings, resources, and issues. Customers using custom resource value
configurations are not affected.
March 05, 2026
Feature
AI Protection is generally
available ( GA ) in the
Security Command Center Premium tier at the organization level.
For regional availability, see Locations for
AI Protection .
February 26, 2026
Feature
Security Command Center lets you filter findings, issues, and compliance information to
view only the resources that are
registered to an App Hub application .
For information, see
Integration with App Hub .
February 11, 2026
Feature
The Security Command Center Standard tier ,
available at no charge, has a new set of capabilities and is activated
automatically for some organizations. For information about these changes, see
Standard tier enhanced and automatically activated for some customers .
January 30, 2026
Change
The prompt injection and jailbreak detection
filter for the Mumbai ( asia-south1 ) and Singapore ( asia-southeast1 ) regions
is upgraded to improve detection accuracy and reduce the rate of false positives.
December 16, 2025
Feature
The following
Container Threat Detection
detectors have been released to
General Availability :
Command and Control: Piped Encoded Code Execution Detected
Command and Control: Piped Encoded Download
December 15, 2025
Feature
You can configure Model Armor floor
settings for Google-managed Model
Context Protocol (MCP) servers to define baseline safety and security filters.
This feature is in
Preview .
You can also configure Cloud Logging for sanitization
operations .
The
Model Armor floor settings perform these operations on traffic to and from
Google-managed MCP servers and Vertex AI models.
December 12, 2025
Change
Multiple pages in Security Command Center Standard have been improved:
The Risk overview page is enhanced to
provide separate views for misconfiguration, vulnerabilities and identity-related
findings.
The
Findings page
includes predefined filter views for vulnerabilities and identity findings.
The left navigation
has been updated.
Feature
AI Protection is generally
available ( GA ) in the
Security Command Center Enterprise tier and is available as a
Preview in the
Security Command Center Premium tier.
December 11, 2025
Feature
Security Command Center Risk Engine supports
Cloud Build Attack Paths with Cloud Build Resources supported in
the high-value resource set.
December 10, 2025
Feature
You can configure Model Armor to enhance the security of your agentic
AI applications that interact with Google Cloud Model Context Protocol (MCP)
servers. This feature is in
Preview . For
configuration details, see Model Armor integration with Google Cloud
MCP servers .
December 05, 2025
Change
Security Command Center Risk Engine
uses the storage.restrictAuthTypes
organization policy constraint to determine whether Cloud Storage buckets are
reachable using signed URLs .
December 04, 2025
Feature
The monitoring dashboard
is available in General Availability .
December 03, 2025
Feature
Model Armor integration with Vertex AI
is available in General Availability .
November 20, 2025
Change
The following updates simplify Security Command Center Standard and Premium tier activation
for organizations:
You need fewer Identity and Access Management (IAM) roles
to activate Security Command Center.
A variety of services
are automatically enabled during activation. Service-specific service agents
are automatically enabled with the IAM roles and permissions that are
required for these services to function.
See the following for detailed information about activating a specific tier:
Activate Security Command Center Standard tier for an organization
Activate Security Command Center Premium tier for an organization
November 17, 2025
Feature
Agent Engine Threat
Detection , a built-in
service of Security Command Center, is available in
Preview to the Security
Command Center Enterprise and Premium tiers. This service helps you detect and
investigate potential attacks on AI agents that are deployed to
Vertex AI Agent Engine Runtime.
Feature
The following
AI Protection features are
available:
AI Security dashboard : The
dashboard has an updated AI Inventory section, which includes an overview of
AI agents.
Assets page : You can
filter for AI resources, including AI agents that are deployed to
Vertex AI Agent Engine.
AI Protection is available in
Preview to the
Security Command Center Enterprise tier.
November 14, 2025
Feature
Data Security Posture Management (DSPM) supports the
Security Command Center Premium tier at the organization level.
November 11, 2025
Change
Several features and updates have been made available to Security Command Center in a federated identity environment:
Exporting findings to a CSV file.
Exporting findings to Cloud Storage.
The following features aren't supported by identity federation but are being moved to other sections in the documentation:
Sending feedback in Security Command Center
Managing Google SecOps settings.
November 10, 2025
Feature
Model Armor is available in the following regions:
europe-west1 (Belgium)
europe-west2 (London)
europe-west3 (Frankfurt)
asia-south1 (Mumbai)
For more information, see Locations for the Model Armor API .
Feature
Data Security Posture Management (DSPM) has been released
to General Availability
for the Security Command Center Enterprise tier.
November 07, 2025
Feature
You can use customer-managed encryption keys (CMEK) organization policies with
Security Command Center. For more information, see Use CMEK organization policies with Security Command Center .
Feature
The monitoring and auditing capabilities for
Compliance Manager
have been released to General
Availability .
November 06, 2025
Feature
Security Command Center Risk Engine
supports Cloud Run attack paths for the following high-value
resources:
run.googleapis.com/Job
run.googleapis.com/Service
November 03, 2025
Feature
Compliance Manager
supports the Security Command Center Premium tier at the organization level.
October 30, 2025
Feature
In addition to the Enterprise service tier, Issues
are available on the Security Command Center Premium service tier at the organization level.
This update includes capabilities such as Toxic Combinations, Chokepoints ,
and Graph Search
( Preview ). The
console navigation has been updated to reflect an Issues page for Premium
tier users.
October 21, 2025
Change
The release note for Security Command Center and attack path simulations ,
published on October 16, 2025, was updated to clarify that
attack path simulations
use Compute Engine and Google Kubernetes Engine OS and software
vulnerability findings to detect toxic combinations and
chokepoints.
October 20, 2025
Feature
Container image vulnerability findings
has been released to General
Availability .
October 17, 2025
Feature
Customers with an organization-level activation of Security Command Center
Premium have an organization-level discovery subscription
at no charge from Sensitive Data Protection. For more information, see
Sensitive data discovery in Security Command Center
Premium .
October 16, 2025
Change
Security Command Center and attack path simulations
use Compute Engine and Google Kubernetes Engine operating system and software
vulnerabilities to detect toxic combinations and chokepoints.
UPDATE : Attack path simulations
analyze OS and software vulnerability findings for Compute Engine and
Google Kubernetes Engine resources to detect toxic combinations and chokepoints.
October 15, 2025
Change
The following features in Compliance Manager are available in General
Availability :
Applying and updating built-in frameworks and cloud
controls
Creating, applying, and editing custom frameworks and cloud controls
Support for VPC Service Control
perimeters
Audit logging
Client
libraries
REST APIs
October 10, 2025
Feature
Correlated Threats is available
in Preview . This
feature combines related threat findings together by using the security graph,
helping you to prioritize and respond to active threats.
October 09, 2025
Feature
Data Security Posture Management (available in Preview )
lets you deploy frameworks with advanced data security cloud controls to
app-enabled folders. For more information, see Deploy advanced data security cloud controls .
October 07, 2025
Change
Google Cloud console pages for all Security Command Center tiers have been enhanced.
The following changes were made to all service tiers—Standard, Premium,
and Enterprise:
You can refresh findings in the Finding query results panel.
The JSON tab on the detail pane of the Findings page displays the raw
findings JSON object, making it compatible with APIs.
Autocompletion of a query in the Findings page query editor is improved.
The Findings > Quick filters panel shows default
values if there is an error fetching results.
The Findings > Quick filters panel shows separate
State and Mute filter sections.
The following changes were made to the Enterprise service tier:
Added support for the Vulnerabilities page.
Added support for security marks.
Added support for the Threats dashboard on the Risk overview page.
The finding detail panel on the Issues page is updated. Open the panel
using the View details button when viewing a toxic combination issue type.
Additional query operators and query functions are available.
The opt-out banner is no longer available.
September 27, 2025
Feature
Model Armor limits the maximum input size for files and text to 4 MB,
automatically skipping any content that exceeds this threshold.
September 23, 2025
Change
The upgraded model for the prompt injection and jailbreak detection filter is
available in EU multi-region. This model has improved detection rates across several
attack vectors, including the following:
Do Anything Now prompts
System instruction manipulation
Unauthorized action execution
Sensitive information retrieval
Feature
Bulk export findings to BigQuery
is available in General Availability .
Bulk exports are supported for organizations, projects, and folders.
September 22, 2025
Feature
Graph search lets you explore the security graph
using custom queries. This product is available in Preview
in the Security Command Center Enterprise tier.
September 16, 2025
Feature
Model Armor is integrated with Google Agentspace to provide greater
insights and enhanced security of your agent interactions by default. For more
information, see
Integration with Google Agentspace .
September 15, 2025
Change
The Findings page in Security Command Center has been improved.
With Security Command Center Premium and Enterprise, the page includes the following
predefined filter views that return a specific category of findings.
Premium service tier: All Findings , Vulnerabilities , Identity ,
and Threats .
Enterprise service tier: All Findings , Vulnerabilities ,
Identity , Data , and Code .
With Security Command Center Enterprise, the page includes a selector to filter by cloud
provider: Google Cloud, Amazon Web Service (AWS), and Microsoft Azure.
For more information, see
Review and manage findings .
Feature
Model Armor integration with Google Kubernetes Engine
is available in
General Availability .
September 12, 2025
Change
Security Command Center has improved the automatic selection of resources when running
attack path simulations using the default high-value resource set.
Risk Engine uses
heuristics to identify resources used for non-production purposes. To help
ensure that you have information about the most important assets, Risk Engine
calculates the attack exposure score for all other resources in the default
high-value resource set before calculating the attack exposure score for these
non-production resources.
To customize the high-value resource set, see
Define and manage your high-value resource set .
For information about Risk Engine, see
Attack exposure scores and attack paths .
Change
Security Command Center changed how Google Cloud subnets are handled when running
attack path simulations . The result
is that attack paths are more accurate in relation to networking. Certain
customers with specific Google Cloud subnet configurations, for example, when a
VPC connector accesses a subnetwork, may see significant changes to toxic
combinations, chokepoints, and attack exposure scores.
September 11, 2025
Feature
Assured Open Source Software (Assured OSS) now supports Go packages. For more information,
see
Download Go packages using direct repository access .
September 10, 2025
Feature
Cloud Run Threat Detection
is available in
General Availability .
September 08, 2025
Feature
The Model Armor monitoring dashboard provides a centralized view to
track interactions and violations within your projects. This feature is
available in Preview .
For more information, see
View the monitoring dashboard .
Change
Multiple pages in Security Command Center Premium have been improved:
The Risk overview page is enhanced to
provide a view of threats, vulnerabilities, and misconfigurations.
The
Findings page
includes predefined filter views for vulnerabilities and identity findings.
Information previously on the Threats page is available in the
Threats dashboard on the Risk
overview page.
Information previously on the Vulnerabilities page is now available on the
Vulnerabilities dashboard on
the Risk overview page.
September 02, 2025
Feature
Vulnerability assessment for Google Cloud supports scanning disks configured
with customer-managed encryption keys (CMEK) for projects that are outside of
VPC Service Controls perimeters. For more information about how to scan disks
configured with CMEK, see
Run Vulnerability Scans for CMEK disks .
August 27, 2025
Change
Compliance Manager (available in
Preview ) now lets you
remove resources from deployed frameworks .
August 20, 2025
Change
Issues, chokepoints (for Google Cloud), and predefined security graph rules
have been released to
General Availability .
August 15, 2025
Feature
AI Protection helps you manage the
security posture of your AI workloads by detecting threats and helping you to
mitigate risks to your AI asset inventory. This product is available in
Preview to the
Security Command Center Enterprise tier.
August 14, 2025
Feature
You can use customer-managed encryption keys (CMEKs) to protect data at rest in
Security Command Center. This feature is available in General Availability. For more
information, see Enable CMEK for Security Command Center .
August 12, 2025
Feature
Data Security Posture Management (DSPM) lets you define,
deploy, monitor, and audit data security postures for your Google Cloud
environment. This product is available in
Preview to the
Security Command Center Enterprise tier.
August 07, 2025
Feature
The following
Container Threat Detection
detectors have been released to
General Availability :
Execution: Possible Arbitrary Command Execution through CUPS
(CVE-2024-47177)
Execution: Socat Reverse Shell Detected
Privilege Escalation: Abuse of Sudo For Privilege Escalation
(CVE-2019-14287)
Privilege Escalation: Polkit Local Privilege Escalation Vulnerability
(CVE-2021-4034)
Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156)
Feature
Risk reports generated and downloaded from Security Command Center include a system attack
exposure page that shows the organization's exposure risk over time and lists
the projects and resources that have the highest risk.
August 04, 2025
Change
Model Armor supports the asia-southeast1 location. For information
about supported locations, see
Locations for the Model Armor API .
August 01, 2025
Feature
Compliance Manager helps ensure
that your Google Cloud infrastructure, workloads, and data meet the security and
regulatory requirements of your organization. This product is available in
Preview to the
Security Command Center Enterprise tier.
July 29, 2025
Feature
You can send a bulk export of Security Command Center findings to a BigQuery
dataset. This feature is available in
Preview . For more
information, see
Bulk export findings to BigQuery .
Feature
You can use Terraform to manage Model Armor floor settings and
templates. This helps reduce manual overhead with Model Armor
deployments. For more information, see
Terraform resources for Security Command Center .
Feature
Model Armor and Vertex AI integration
Model Armor integrates with Vertex AI, providing a default
security configuration for all new prediction endpoints. This feature is in
Preview . For more
information, see
Integration with Vertex AI .
July 28, 2025
Change
Model Armor filter updates
The prompt injection and jailbreak detection filter now supports 10,000
tokens.
For the Sensitive Data Protection filter, SKIP_DETECTION is
returned if the prompt or response exceeds the token limit.
For all other filters, if the prompt or response exceeds the token limit,
MATCH_FOUND is returned if malicious content is found, and
SKIP_DETECTION is returned if no malicious content is found.
July 25, 2025
Change
Cloud Infrastructure Entitlement Management (CIEM)
has launched support for log ingestion from Microsoft Azure management groups.
This capability lets users set up log ingestion and then consume findings at an
Azure management group level, rather than at the subscription level. For more
information, see
Configure Microsoft Azure log ingestion for management groups .
This capability is available in
Preview .
Change
A new risk scoring algorithm is launched. As a result, you might see slight
changes in
attack exposure scores for resources and findings .
The new algorithm better reflects attacker behavior and gives a fairer
representation of the relative risk level of your organization. We will monitor
the results of this change and might perform further adjustments, if necessary.
July 24, 2025
Feature
For the Enterprise service tier, Security Command Center offers
data residency support
in the European Union, Saudi Arabia, and United States. This feature is in
General Availability .
July 22, 2025
Change
The
Setup guide
in Security Command Center Enterprise, used to monitor the activation progress and
configure services, is now in
General Availability .
Change
The Impair Defenses: Two Step Verification Disabled finding type of
Event Threat Detection was renamed to Persistence: Two Step Verification Disabled . For a
complete list of Event Threat Detection finding types, see
Event Threat Detection overview .
July 21, 2025
Change
The Aggregations panel on the Findings page in Security Command Center Enterprise
has been enhanced and is now called Quick Filters . For information about
filtering results on the Findings page, see
Review and manage findings .
July 17, 2025
Feature
The following
Container Threat Detection
detectors for file monitoring are in
Preview :
Collection: Pam.d Modification
Credential Access: Access Sensitive Files on Nodes
Defense Evasion: Disable or modify Linux audit system
Defense Evasion: Root Certificate Installed
Execution: Suspicious Cron Modification
Persistence: Modify ld.so.preload
Change
The following Security Command Center Enterprise pages in the Google Cloud console now
fully replace equivalent pages that you accessed previously in the
Google Security Operations console.
Risk Overview
Issues
Assets (previously called Resources)
Findings
Left navigation links in the Google SecOps console open the
related Google Cloud console page. See the earlier
release announcement about these
pages.
July 14, 2025
Change
In the
Google Kubernetes Engine (GKE) security posture dashboard , the software vulnerabilities pane is available in
Preview , not General
Availability.
July 11, 2025
Feature
Notebook Security Scanner
is a built-in package vulnerability detection service of Security Command Center. This
feature is available in
Preview to the
Security Command Center Premium or Enterprise tier.
You can enable and use Notebook Security Scanner to detect vulnerabilities in
Python packages that are used in Colab Enterprise notebooks (files with
the ipynb filename extension) and resolve those package vulnerability
findings.
July 10, 2025
Change
In the Google Cloud console, the
Google Kubernetes Engine (GKE) security posture dashboard
shows the top software vulnerabilities that affect your GKE
workloads. This feature is in
General Availability .
July 01, 2025
Change
Security Command Center now supports the
detection of Chokepoints for
the following cloud service provider platforms:
Amazon Web Services (AWS)
Microsoft Azure
Support for Chokepoints with Microsoft Azure and AWS is in
Preview .
June 30, 2025
Feature
You can download risk reports as PDFs. Risk reports help you understand the results of the attack path simulations (virtual red teaming) that Security Command Center runs. This feature is in Preview and is available for customers on the Enterprise or Premium service tiers. For more information, see Risk reports overview .
Feature
The following Virtual Machine Threat Detection detectors are in General Availability .
Defense Evasion: Unexpected ftrace handler
Defense Evasion: Unexpected interrupt handler
Defense Evasion: Unexpected kernel modules
Defense Evasion: Unexpected kernel read-only data modification
Defense Evasion: Unexpected kprobe handler
Defense Evasion: Unexpected processes in runqueue
Defense Evasion: Unexpected system call handler
Deprecated
The Defense Evasion: Unexpected kernel code modification detector of Virtual Machine Threat Detection is shut down. For more information, see Detector shutdowns .
June 27, 2025
Change
The following Event Threat Detection detectors have been released to GA .
Exfiltration: Cloud SQL Data Exfiltration
Credential Access: CloudDB Failed login from Anonymizing Proxy IP
Initial Access: CloudDB Successful login from Anonymizing Proxy IP
June 20, 2025
Change
The display name for the following Event Threat Detection rules have changed. Please update any artifacts that use these values, such as finding filters, finding queries, or mute rules.
Previous display name
New display name
Defensive Evasion: Static Pod Created
Defense Evasion: Static Pod Created
Data Destruction: Deleted Google Cloud Backup and DR Backup
Impact: Deleted Google Cloud Backup and DR Backup
Inhibit System Recovery: Deleted Google Cloud Backup and DR host
Impact: Deleted Google Cloud Backup and DR host
Inhibit System Recovery: Deleted Google Cloud Backup and DR plan association
Impact: Deleted Google Cloud Backup and DR plan association
Inhibit System Recovery: Deleted Google Cloud Backup and DR Vault
Impact: Deleted Google Cloud Backup and DR Vault
Inhibit System Recovery: Google Cloud Backup and DR delete policy
Impact: Google Cloud Backup and DR delete policy
Inhibit System Recovery: Google Cloud Backup and DR delete profile
Impact: Google Cloud Backup and DR delete profile
Inhibit System Recovery: Google Cloud Backup and DR delete storage pool
Impact: Google Cloud Backup and DR delete storage pool
Inhibit System Recovery: Google Cloud Backup and DR delete template
Impact: Google Cloud Backup and DR delete template
Data Destruction: Google Cloud Backup and DR expire image
Impact: Google Cloud Backup and DR expire image
Data Destruction: Google Cloud Backup and DR remove appliance
Impact: Google Cloud Backup and DR remove appliance
Inhibit System Recovery: Google Cloud Backup and DR remove plan
Impact: Google Cloud Backup and DR remove plan
Impair Defenses: Strong Authentication Disabled
Persistence: Strong Authentication Disabled
Credential Access: External Member Added To Privileged Group
Privilege Escalation: External Member Added To Privileged Group
Persistence: Impersonation Role Granted For Dormant Service Account
Privilege Escalation: Impersonation Role Granted For Dormant Service Account
Credential Access: Privileged Group Opened To Public
Privilege Escalation: Privileged Group Opened To Public
Credential Access: Sensitive Role Granted To Hybrid Group
Privilege Escalation: Sensitive Role Granted To Hybrid Group
Change
Risk Engine includes the aiplatform.googleapis.com/Model resource type in the default high-value resource set. For more information, see the list of default resource types .
June 19, 2025
Change
CVEs with no known exploitation activity are not considered in attack path simulations
Vulnerability findings in Security Command Center are enriched by Mandiant Threat Intelligence. A CVE with wide exploitation activity is more likely to be used in an attack path compared to a CVE with only anticipated exploitation activity. Vulnerabilities with no known exploitation activity are not considered in attack path simulations. For more information, see Incorporation of CVE data .
Change
The prompt injection and jailbreak detection filter in Model Armor flags more threats across various attack vectors, and offers an improved detection rate for high-confidence malicious prompts. This filter is available in us-east1.
June 18, 2025
Announcement
The Set security marks option in the new Security Command Center Enterprise Findings and Assets pages is temporarily unavailable. You can opt-out of the new Security Command Center Enterprise experience to manage security marks using the Cloud console. Or, you can manage security marks using the Security Command Center API .
June 13, 2025
Feature
The following Event Threat Detection detectors for Vertex AI have been released to Preview :
Persistence: New Geography for AI Service
Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity
Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Data Access
Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity
Privilege Escalation: Anomalous Service Account Impersonator for AI Data Access
Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity
Persistence: New AI API Method
Initial Access: Dormant Service Account Activity in AI Service
June 08, 2025
Feature
Multi-language support for Model Armor filters
The Responsible AI and prompt injection and jailbreak detection filters are tested in English, Spanish, French, Italian, Portuguese, German, Chinese (Mandarin), Japanese, and Korean. These filters can work in other languages, but the quality of results might vary.
For more information, see Languages supported .
Feature
Model Armor supports screening text in the following document types for malicious content.
DOCX, DOCM, DOTX, DOTM documents
PPTX, PPTM, POTX, POT presentations
XLSX, XLSM, XLTX, XLTM spreadsheets
June 06, 2025
Change
The Security Risk Overview dashboard for Compute Engine is in General Availability . In addition, it provides a Top CVE findings table that lists the most severe CVEs that affect your Compute Engine instances.
June 05, 2025
Change
Muted findings are no longer considered in the Security Command Center Risk Engine. As a result, they no longer get attack exposure scores .
Feature
Vulnerability Assessment for Google Cloud supports scanning on Google Kubernetes Engine (GKE) nodes and containers. This feature has been released to Preview .
June 04, 2025
Feature
Security Command Center Premium customers can now access toxic combinations, which are in General Availability , and chokepoints, which are in Preview . These are available at the organization level. For more information, see Toxic combinations and chokepoints overview .
June 03, 2025
Feature
The following Container Threat Detection detectors for Google Kubernetes Engine have been released to General Availability :
Credential Access: Find Google Cloud Credentials
Credential Access: GPG Key Reconnaissance
Defense Evasion: Base64 ELF File Command Line
Defense Evasion: Base64 Encoded Python Script Executed
Defense Evasion: Base64 Encoded Shell Script Executed
Execution: Fileless Execution in /memfd:
Execution: Suspicious OpenSSL Shared Object Loaded
Privilege Escalation: Fileless Execution in /dev/shm
May 29, 2025
Change
Domain tagging for toxic combinations and chokepoints has been improved to be more precise. The following filters are available for issues :
CVE Vulnerabilities
Identity
Data
AI Security
May 28, 2025
Change
Model Armor enhancements
Model Armor supports multi-regional endpoints. For more information, see Locations for the Model Armor API .
All Model Armor filters support up to 2,000 tokens.
May 27, 2025
Change
Enhanced data residency support in the European Union and United States is in General Availability .
May 23, 2025
Change
Starting May 26, 2025, the findings retention period for new activations of Security Command Center will change from 13 months to 90 days.
The retention period for findings for existing customers prior to May 26, 2025, remains unchanged.
For more information on retention periods, see Data retention .
May 22, 2025
Change
The Google Kubernetes Engine (GKE) security posture dashboard shows the top threats, but not the top software vulnerabilities, detected by Security Command Center.
Feature
In the Google Cloud console, the Google Kubernetes Engine (GKE) security posture dashboard shows the top threats and software vulnerabilities that affect your GKE workloads. This feature is in General Availability .
May 15, 2025
Change
The GA release of enhanced data residency support in the European Union and United States is temporarily delayed.
Feature
When you enable Security Command Center for the first time in an organization, and you enable data residency in the European Union or United States, data residency controls are enforced at rest, in use, and in transit. This feature is in General Availability .
For details, see Planning for data residency and Security Command Center regional endpoints .
Feature
Risk Engine supports the Artifact Registry service. This support lets Risk Engine consider images that are hosted in Artifact Registry when calculating attack paths. For more information, see Resources that receive attack exposure scores .
To support this change, Risk Engine includes the artifactregistry.googleapis.com/Repository resource type in the default high-value resource set. For more information, see the list of default resource types .
May 09, 2025
Feature
A Security Risk Overview dashboard for Compute Engine is available in the Google Cloud console. The dashboard, available in Preview , shows the top Security Command Center findings that affect your Compute Engine resources.
May 08, 2025
Feature
Security Command Center Enterprise uses predefined security graph
rules to identify issues . This feature is in Preview .
For more information, see Predefined security graph rules .
Change
The following Security Command Center Enterprise pages that you previously accessed through the Google Security Operations console are now under Security Command Center in the Google Cloud console:
Risk Overview
Issues
Assets (previously called resources )
Findings
The Security Command Center Enterprise left navigation also includes links to pages in the Google Security Operations console. For information about this navigation and accessing Google Security Operations pages, see Security Command Center Enterprise
console .
May 05, 2025
Feature
Web Security Scanner, a built-in service of Security Command Center, released new detectors. The following detectors, which are available with the Enterprise and Premium tiers of Security Command Center, detect misconfigurations in web applications:
HSTS_MISCONFIGURATION
CSP_MISSING
CSP_MISCONFIGURATION
COOP_MISSING
CLICKJACKING_PROTECTION_MISSING
For more information, see Web Security Scanner misconfiguration findings .
April 29, 2025
Feature
Vulnerability Assessment for Google Cloud has been released to Preview . This feature helps to discover critical and high severity software vulnerabilities in your Compute Engine VM instances without installing agents.
Vulnerability Assessment for Google Cloud is on by default. Customers might see an increase in findings due to vulnerabilities in existing virtual machines that weren't previously detected.
April 28, 2025
Feature
Security Command Center provides increased support for Microsoft Azure data.
Security Command Center can collect Microsoft Azure resource and configuration data .
Risk Engine can discover toxic combinations , attack paths , and issues in your Microsoft Azure environment.
The Sensitive Data Protection discovery service can profile your Azure Blob Storage data and identify vulnerabilities and misconfigurations that can expose sensitive data.
Cloud Infrastructure Entitlement Management (CIEM) can analyze and generate misconfiguration findings for Azure role-assignments that grant principals excessive privileges beyond what they use. This capability is available in Preview .
Announcement
Toxic Combinations for Amazon Web Services (AWS) has been released to General Availability .
April 21, 2025
Feature
The Execution: Ingress Nightmare Vulnerability Execution detector of Container Threat Detection is in Preview .
April 18, 2025
Feature
The ability of Event Threat Detection to analyze foundational log sources is generally available ( GA ).
April 17, 2025
Change
The discovery findings that Sensitive Data Protection generates in Security Command Center include recommended next steps. This improvement applies to the finding categories listed in Publish data profiles to Security Command Center .
April 09, 2025
Change
IAM recommender findings are now available with project-level activations of Security Command Center.
Feature
Model Armor and GKE integration
Model Armor now enforces security policies uniformly on generative AI inference traffic using a traffic extension. This applies to all application load balancers, including Google Kubernetes Engine Inference Gateway. This feature is in Preview . For more information, see Integration with Google Kubernetes Engine .
April 07, 2025
Feature
Cloud Run Threat Detection is available in Preview .
April 02, 2025
Change
When activating Security Command Center Enterprise, you can monitor the provisioning status and progress of initial scans . This capability is in Preview .
March 21, 2025
Change
Model Armor filter update
The prompt injection and jailbreak detection filter in Model Armor is upgraded with increased efficacy and higher model quality scores.
March 20, 2025
Feature
The Risk section of the SecOps console has been updated for Security Command Center Enterprise, introducing the following features in Preview :
Issues are the most important security risks Security Command Center Enterprise has found in your cloud environments. Sourced from Security Command Center's virtual red teaming and security graph, issues give you all the details you need to understand, triage, and remediate a risk. Explore attack path diagrams, attack exposure scores, exposed resources, related findings, and whether multiple issues exist on a primary resource, all from the one place.
Security graph is a graph database that has cloud resources like assets, identities, apps, and data assigned to its nodes, while the edges of the graph determine the risk relationship between those resources following detection rules. When a relationship risk is discovered, the security graph generates an issue.
Chokepoints are critical severity issues that focus on common resources or resource groups where multiple attack paths converge. Because of this focus on a common point, resolving a chokepoint can resolve other issues too, like toxic combinations.
The Risk Overview dashboard has also been updated, and a new Issues page added to the Risk section. You can navigate through different security domains in the Risk section using the tabs near the top of the page, such as All risk , Vulnerabilities , and Code .
March 18, 2025
Feature
Cloud Infrastructure Entitlement Management (CIEM) has launched support for the following:
Log ingestion from Amazon SQS queues.
An alternate CIEM only feed to reduce costs.
For more information, see Configure AWS log ingestion for CIEM .
This feature is available in General Availability to the Security Command Center Enterprise tier.
March 14, 2025
Change
The Execution: Malicious Python Executed detector in Container Threat Detection released to General Availability .
Feature
The following Event Threat Detection rules for Google Kubernetes Engine have been released to General Availability :
GKE_NODEPORT_SERVICE_CREATED
GKE_SENSITIVE_NAMESPACE_WORKLOAD_TRIGGERED
GKE_STATIC_POD_CREATED
GKE_TOR_PROXY_IP_REQUEST
GKE_WEBHOOK_CONFIG_CREATED
YL2_GKE_ANONYMOUS_USERS_GRANTED_ACCESS
YL2_GKE_APPROVE_CSR_FORBIDDEN
YL2_GKE_CRB_CLUSTERROLE_AGGREGATION_CONTROLLER
YL2_GKE_MANUALLY_DELETED_CSR
YL2_GKE_POD_MASQUERADING
YL2_GKE_REVERSE_SHELL_POD
YL2_GKE_SERVICE_ACCOUNT_CREATION_SENSITIVE_NAMESPACE
YL2_GKE_SUSPICIOUS_CRYPTOMINING_POD
March 13, 2025
Feature
Security Command Center has released the Artifact Registry vulnerability assessment detection service, which includes the CONTAINER_IMAGE_VULNERABILITY detector. This detector generates vulnerability findings for container images that are stored and scanned in Artifact Registry. The detector generates findings for vulnerable container images deployed to the following assets:
Google Kubernetes Engine cluster
Cloud Run revision
Cloud Run job
App Engine
This feature is available in Preview to all Security Command Center tiers.
March 10, 2025
Feature
The following detectors have been added to Container Threat Detection.
Execution: Program Run with Disallowed HTTP Proxy Env
Exfiltration: Launch Remote File Copy Tools in Container
For more information, see Container Threat Detection detectors .
March 06, 2025
Change
The AWS connector has changed to enable additional use cases and requires the collection of AWS organization and organizational unit (OU) data. This change may require you to take additional action. For details about the change, see the AWS connector changelog .
March 03, 2025
Feature
You can use Virtual Machine Threat Detection to scan your Amazon Elastic Compute Cloud (EC2) VM disks for malware. To enable this feature, see Enable VM Threat Detection for AWS . This feature is in Preview .
February 28, 2025
Feature
Event Threat Detection , a built-in service of Security Command Center, has released new detectors. The following detectors, which are available in Preview with the Enterprise and Premium tiers of Security Command Center, allow users to manage threats to their Google Cloud Backup and Disaster Recovery assets in Security Command Center:
BACKUP_DELETE_VAULT
BACKUP_DELETE_VAULT_BACKUP
BACKUP_DELETE_BACKUP_PLAN_ASSOCIATION
In addition, we updated the existing BACKUP_REMOVE_PLAN detector to support findings on Google Cloud Backup and Disaster Recovery assets that are managed in the Google Cloud console. This detector will dynamically generate finding descriptions based on the finding source.
February 25, 2025
Feature
You can now use Organization Policy Service custom constraints to provide more granular control over specific fields for some Security Command Center resources. For more information, see Configure custom organization policies . This feature is in General Availability .
February 17, 2025
Change
Findings from Sensitive Data Protection include the INFO_TYPES and RELATED_RESOURCES fields when available. These fields appear in the sourceProperties field of the finding in Security Command Center. The affected finding categories are DATA_RISK , DATA_SENSITIVITY , PUBLIC_SENSITIVE_DATA , SECRETS_IN_STORAGE , and SENSITIVE_DATA_CMEK_DISABLED .
February 14, 2025
Feature
The attack path simulations feature can now automatically set the resource value of a Vertex AI dataset based on the sensitivity of the data that the dataset contains.
For information about how to enable the automatic assignment of resource values based on data sensitivity, see Create a resource value configuration .
February 13, 2025
Feature
Security Command Center now supports integration with Snyk . This feature is in Preview .
February 12, 2025
Feature
Cloud Infrastructure Entitlement Management (CIEM) has launched support for the following:
AWS Managed Microsoft AD and on-premises Active Directory identities. This feature alerts you to potential misconfigurations in your on-premises Active Directory or AWS-managed Active Directory identities.
Account-level findings in AWS. This lets you set up AWS audit logs for individual AWS accounts—instead of mandating logs across the entire AWS organization—and helps reduce your total cost of operations for CIEM in Security Command Center Enterprise.
February 03, 2025
Feature
Protect your AI applications using Model Armor
Model Armor is a Google Cloud service that enables you to apply content safety and content security controls to LLM prompts and responses to mitigate risks such as sensitive data leakage, prompt injection, and offensive content. For more information, see Model Armor overview .
January 24, 2025
Feature
Risk Engine, which generates attack exposure scores and attack paths for your high-value resources, now supports the spanner.googleapis.com/Instance resource type.
For more information, see Resource types supported in high-value resource sets .
January 17, 2025
Feature
Security Command Center now displays the number of resources scanned for a specific security compliance standard. This information appears as a column in the table on the Compliance detail page of the Google Cloud console for a given compliance standard.
To view the number of resources scanned against a security compliance standard, see Assess compliance against a specific standard .
January 16, 2025
Feature
A new Risk Overview page is the default view for Security Command Center Enterprise customers. It serves as your first contact security dashboard for the highest priority risks in your cloud environments. From here you can quickly assess toxic combinations, threats, compliance issues, and high impact vulnerabilities.
Change
The Postures section in the SecOps console has been renamed to Risk , and moved to the top of the navigation for Security Command Center Enterprise customers. You can find the Vulnerabilities and Data Security dashboards here, along with the Findings and Resources pages.
January 13, 2025
Announcement
A new error code, AWS_ACTIVE_COLLECTOR_ACCOUNTS_NOT_FOUND , is available in the AWS connector in Security Command Center . Additional guidance is available to help troubleshoot the 'AWS_FAILED_TO_ASSUME_DELEGATED_ROLE' error.
December 18, 2024
Change
Install new version of the Security Command Center Enterprise use case
The installation and configuration of a new version of the SCC Enterprise - Cloud Orchestration & Remediation use case in the Security Operations console is required for the toxic combination functionality of Security Command Center Enterprise. The new use case, identified by date December 18, 2024, introduces updates to security posture findings playbooks and other enhancements to support the management of toxic combination findings and cases in the Security Operations console.
For installation instructions, see Update Enterprise use case, December 2024 .
Feature
Security Health Analytics now supports new resource types for creating custom modules. For a full list of supported resource types, see Supported resource types .
Feature
Vulnerability Assessment for AWS now supports scanning container images in Elastic Container Registry (ECR). It can detect operating system misconfigurations and issues with installed packages.
December 17, 2024
Announcement
For Security Command Center Enterprise customers, the Sensitive Data Protection discovery service is now automatically enabled during the Enterprise activation process. For more information, see Enable sensitive data discovery in the Enterprise tier .
December 16, 2024
Feature
Security Command Center can now produce Cloud Infrastructure Entitlement Management (CIEM) misconfiguration findings for federated identities that are connected to your AWS environment through the AWS IAM Identity Center.
Feature
Detector for Container Threat Detection released to General Availability
Container Threat Detection , a built-in service available in Security Command Center Premium and Enterprise, has launched three new detectors to General Availability :
Execution: Container Escape : Detects when a process inside a container tries to break out of its isolation and interact with the host system or other containers.
Execution: Kubernetes Attack Tool Execution : Detects when a Kubernetes attack tool is run inside a container, indicating a potential attempt to exploit vulnerabilities in the Kubernetes environment.
Execution: Local Reconnaissance Tool Execution : Detects when a local reconnaissance tool is executed within a container, suggesting that
an attacker is gathering information about the container environment, such as network configurations, active processes, or mounted file systems.
For more information, see Container Threat Detection detectors .
December 10, 2024
Deprecated
AI summaries of attack paths are disabled in Security Command Center
Effective December 13, 2024, the preview of Gemini AI-generated summaries of
Security Command Center attack paths is discontinued. The summaries are no
longer available in the Google Cloud console.
For more information, see Gemini features in Security Command
Center .
December 09, 2024
Change
When activating the Security Command Center Enterprise tier, you now have the option to connect Security Command Center to an existing Google Security Operations instance or provision a new instance. For more information, see Activate the Security Command Center Enterprise tier .
November 21, 2024
Feature
As of November 13, 2024, Security Command Center can produce Cloud Entitlement Infrastructure Management (CIEM) findings for the following identity and access issues in AWS environments:
Users, groups, or assumed IAM roles that are inactive and have one or more permissions.
Overly permissive trust policies that are enforced on an AWS IAM role.
Identities that can move laterally through impersonation.
Announcement
The Sensitive Data Protection discovery service is now included in Security Command Center Enterprise. To enable discovery, see Enable sensitive data discovery in the Enterprise tier .
The Sensitive Data Protection discovery service remains available to Security Command Center Premium and Standard customers as a separately priced feature .
November 15, 2024
Feature
Manage security postures using the Google Cloud console is generally available.
You can now create, deploy, update, and delete security postures using the Google Cloud console. For more information, see Manage a security posture .
November 14, 2024
Change
The application steps to activate the Security Command Center Enterprise tier have been streamlined. For information, see Activate the Security Command Center Enterprise tier .
Feature
The Defense Evasion: Rootkit detector of Virtual Machine Threat Detection is in General Availability . For more information, see Virtual Machine Threat Detection overview .
Feature
You can now view the configurations that determine the resource values of your high-value resource set . For more information, see View the configurations that match a high-value resource .
November 11, 2024
Breaking
As of December 9, 2024, if you activate Security Command Center within an organization for the first time, then you must use only version 2 of the Security Command Center API in that organization. Earlier versions are not supported.
If you activated Security Command Center at the project level prior to December 9, 2024, then any projects you activate in the same organization will support all available versions of the Security Command Center API.
To migrate to the v2 API from an earlier version, see Migrate to v2 of the Security Command Center API .
Change
The Vulnerability management dashboard was enhanced to include information about containers with exploitable vulnerabilities. This feature is in Preview.
Announcement
Starting October 24, 2024, the IAM Recommender service is enabled by default when activating Security Command Center. You manage the IAM Recommender service under the Security Command Center Settings page > Integrated services tab. For more information, see Add integrated Google Cloud services to Security Command Center .
November 08, 2024
Feature
To help you detect potentially malicious anomalies in your network, Event Threat Detection now supports the ability to analyze foundational log sources , which produce Bad IP findings without enabling VPC Flow Logs. This feature is in Preview.
If you activated Security Command Center Premium or Enterprise in a project or organization before October 18, 2024 , then you have access to this feature in that project or organization.
If you activated Security Command Center Premium or Enterprise at the project level before October 18, 2024 , and you activate additional projects in the same organization, then the additional projects will have access to this feature.
If you activated Security Command Center Premium or Enterprise in a project or organization on or after October 18, 2024 , and you want to enable this feature, then contact Google Cloud Customer Care .
November 07, 2024
Announcement
The v2 Security Command Center API is generally available ( GA ).
To migrate from an earlier version, see Migrate to v2 of the Security Command Center API .
October 25, 2024
Deprecated
Event Threat Detection's Outgoing DoS finding has been shut down and is no longer available.
October 18, 2024
Deprecated
The VMTD disabled finding category from Virtual Machine Threat Detection is no longer available. For more information about the finding categories that this built-in service provides, see Virtual Machine Threat Detection overview .
October 16, 2024
Feature
Toxic combination findings are generally available. This includes the following updates:
Support for toxic combination findings on AWS resources. This feature is available in Preview.
Addition of a new Toxic Combination Cases TTR and Trend widget on the Posture overview page of the Google Security Operations console. The widget details the trends for open and closed toxic combination cases for a specific time range.
October 11, 2024
Feature
Working with findings and resources in the Security Operations console
The ability to work with findings and resources using the Security Operations console is now in General Availability . This feature is available only to Security Command Center Enterprise customers.
The following capabilities were added since the Preview release of this feature:
You can export findings to a CSV file .
Additional query operators in the Add filters menu in the Query editor on the Findings page are now available.
The autocomplete menu suggests possible values when your write queries in the Query editor . During Preview, the autocomplete menu suggested only filter names and functions.
You can hide or display panels on the Findings page .
Your sort and column settings are retained within the current session.
October 09, 2024
Change
Install new version of the Security Command Center Enterprise use case
The installation and configuration of a new version of the SCC Enterprise - Cloud Orchestration & Remediation use case in the Security Operations console is required for the toxic combination functionality of Security Command Center Enterprise. The new use case, identified by date October 9, 2024, introduces a new widget, an updated ingestion logic, and other enhancements to support the management of toxic combination findings and cases in the Security Operations console.
For installation instructions, see Update Enterprise use case, October 2024 .
October 08, 2024
Feature
Vulnerability management dashboard released to Preview
The new Vulnerability management
dashboard
lets you investigate CVE vulnerabilities identified in your Google Cloud and AWS
environments.
This feature is available in
Preview .
October 04, 2024
Feature
Manage security postures using the Google Cloud console
You can now create, deploy, update, and delete security postures using the Google Cloud console. This feature is available in Preview .
For more information, see Manage a security posture .
October 03, 2024
Feature
GKE Security Posture vulnerability findings now support attack exposure scores
GKE runtime OS vulnerability findings detected by GKE Security Posture in Google Cloud are now scored by attack path simulations. Use these attack exposure scores on vulnerabilities to help secure the resources that are the most valuable to your business and to address the most significant vulnerabilities in your GKE clusters. For more information, see Attack exposure scores .
October 01, 2024
Feature
Data residency for Security Command Center is now available in the Kingdom of Saudi Arabia.
September 25, 2024
Breaking
YARA rule names that appear in Virtual Machine Threat Detection findings will be renamed
On or after October 28, 2024, YARA rule names that appear in Malware: Malicious file on disk (YARA) findings from Virtual Machine Threat Detection will be renamed. This update will resolve naming inconsistencies in the YARA rules. The new naming convention will contain the prefix, designation, type, name, and iteration of the YARA rule. The following are examples of the new names:
Ext_FE_Hunting_Linux_CYCLOPSBLINK_FEBeta
M_APT_Controller_REDFLARE_1
M_Backdoor_REDSONJA_4
M_Cryptomine_XMRIG_1
September 18, 2024
Feature
Assign high-value resources based on Sensitive Data Protection insights for Amazon S3 buckets
The attack path simulations feature can now automatically set the resource value of an Amazon S3 bucket based on the sensitivity of the data that the bucket contains.
For information about how to enable the automatic assignment of resource values based on data sensitivity, see Create a resource value configuration .
For information about how to configure Sensitive Data Protection to send data sensitivity classifications to Security Command Center, see Publish data profiles to Security Command Center .
September 11, 2024
Change
Validate updates to integrations in the Security Command Center Enterprise use case
Updates to the threat response playbook blocks and use case flows are available in the SCC Enterprise - Cloud Orchestration & Remediation use case for Security Command Center Enterprise. To get these changes, upgrade the integrations to the latest versions.
For more information, see Validate integration versions in the use case .
September 09, 2024
Change
New configuration options for Vulnerability Assessment for AWS
When configuring Vulnerability Assessment for AWS, you can customize the scan settings by defining the scan interval, specific regions, specific tags, and specific instance IDs. You can also include SC1 or ST1 instances in the scan. For more information, see Enable and use Vulnerability Assessment for AWS .
September 04, 2024
Change
Install new version of the Security Command Center Enterprise use case
The installation and configuration of a new version of the SCC Enterprise - Cloud Orchestration & Remediation use case in the Security Operations console is required for the toxic combination functionality of Security Command Center Enterprise. The new use case, identified by date, September 4, 2024, introduces updated widgets, new playbooks, optimized data synchronization jobs, updated ingestion logic, and other enhancements to support the management of toxic combination findings and cases in the Security Operations console.
For installation instructions, see Update Enterprise use case, September 2024 .
August 29, 2024
Feature
Dynamic mute rules are generally available
Security Command Center now supports dynamic mute rules, which allow you to mute future and existing findings temporarily until a specified date or indefinitely until a finding no longer matches the configuration. We are adding these rules as an alternative to the original static mute rules that only mute future findings indefinitely.
We recommend using dynamic mute rules exclusively in your mute rule configurations. For instructions on how to migrate your existing mute rules to dynamic mute rules, see Migrate from static to dynamic mute rules .
For a comparison of static and dynamic mute rules, see Types of mute rules .
August 27, 2024
Change
Documentation is available for the Security Posture REST API .
August 15, 2024
Change
Install new version of the Security Command Center Enterprise use case
The installation and configuration of a new version of the SCC Enterprise - Cloud Orchestration & Remediation use case in the Security Operations console is required for the toxic combination functionality of Security Command Center Enterprise. The new use case, identified by the date August 15, 2024, provides updates to the security operations features of the Enterprise tier of Security Command Center.
For installation instructions, see Update Enterprise use case, August 2024 .
August 12, 2024
Feature
EC2 Vulnerability Assessment findings now support attack exposure scores
Software vulnerability findings detected by EC2 Vulnerability Assessment for Amazon Web Services are now scored with attack path simulations. Use these attack exposure scores on vulnerabilities to proactively secure the resources that are the most valuable to your business. For more information, see Attack exposure scores .
Feature
Cloud Infrastructure Entitlement Management (CIEM) is generally available
CIEM helps you adhere to the principle of least privilege by providing a comprehensive look at the security of your identity and access configuration. It provides insight into details such as what permissions are associated with a given identity, what roles are not optimal (highly permissive), and what steps you can take to remediate potential misconfigurations.
For more information about CIEM, see Overview of Cloud Infrastructure Entitlement Management .
July 29, 2024
Change
Preview of curated detections for Microsoft Azure data
New curated detections in the Cloud Threats category that identify suspicious patterns in Microsoft Azure data are currently available in Preview.
For more information, see curated detections for Microsoft Azure data in the Security Command Center documentation.
Feature
Assign high-value resources based on Sensitive Data Protection insights for Cloud Storage
The attack path simulations feature can now automatically set the resource value of a Cloud Storage resource based on the sensitivity of the data that the bucket contains.
For information about how to enable the automatic assignment of resource values based on data sensitivity, see Create a resource value configuration .
For information about how to configure Sensitive Data Protection to send data sensitivity classifications to Security Command Center, see Publish data profiles to Security Command Center .
Change
Detector for Container Threat Detection released to General Availability
Container Threat Detection , a built-in service available in Security Command Center Premium and Enterprise, has launched a new detector, Unexpected Child Shell , in General Availability .
The detector monitors all process executions and generates a finding if a process that does not normally invoke shells spawns a shell process.
For more information, see Container Threat Detection detectors .
July 01, 2024
Feature
Working with findings and resources in the Security Operations console
Security Command Center Enterprise customers can now work with findings and affected resources using the Security Operations console.
For example, you can do the following in the Security Operations console:
Filter for findings and resources based on different attributes.
Fine-tune your queries.
View the details of specific findings and resources.
View high-value resources and their attack exposure scores.
View the changes to a resource.
This feature is available in Preview .
For more information, see the following:
Work with findings in the console
Inspect resources related to findings
June 25, 2024
Announcement
Introducing the Security Command Center Risk Engine
Security Command Center introduces Risk Engine as the name of the functionality that provides attack path simulations, attack exposure scores, attack path visualizations, and toxic combination findings.
For more information, see Assess risk with Risk Engine .
Feature
Toxic combination findings release to Preview
In the Enterprise tier of Security Command Center, the Risk Engine generates a finding when it detects a toxic combination during attack path simulations. A toxic combination is a group of security issues that, when they occur together in a particular pattern, create a path to one or more of your high-value resources.
The toxic combinations features introduces a new finding class, Toxic combination , and adds new fields in the Finding object to hold information about toxic combinations.
For more information, see Overview of toxic combinations .
UPDATE : The Preview release of the toxic combination feature is being rolled out to customers in stages. You might not receive toxic combination findings or see the new features in the Security Operations console for up to two weeks.
Change
The release note for the toxic combination feature published on June 25, 2024 was updated to explain the staged release of the feature.
Change
Install new version of the Security Command Center Enterprise use case
The installation and configuration of a new version of the SCC Enterprise - Cloud Orchestration & Remediation use case in the Security Operations console is required for the toxic combination functionality of Security Command Center Enterprise. The new use case, identified by date, June 25, 2024, introduces new widgets, new playbooks, and other enhancements to support the management of toxic combination findings and cases in the Security Operations console.
For installation instructions, see Update Enterprise use case, June 2024 .
June 17, 2024
Breaking
The Security Command Center Assets page will require new permissions
On or after July 11, 2024, a new Identity and Access Management (IAM) permission will be required to view the Assets page in Google Cloud console. If you use custom roles to control access to Google Cloud resources, you will need to add this new permission to your custom roles before that date to continue using the Assets page.
For more information, see Assets page .
June 13, 2024
Feature
Preview of Cloud Infrastructure Entitlement Management capabilities
Cloud Infrastructure Entitlement Management (CIEM) for Amazon Web Services (AWS) and other identity providers on Google Cloud, such as Entra ID (Azure AD) and Okta, is now in preview.
CIEM helps you adhere to the principle of least privilege by providing a comprehensive look at the security of your identity and access configuration. CIEM provides insight into details such as what permissions are associated with a given identity, what roles are not optimal (highly permissive), and what steps you can take to remediate potential misconfigurations.
For more information, see Overview of Cloud Infrastructure Entitlement Management .
June 03, 2024
Feature
Vulnerability Assessment for AWS service released to General Availability
The Vulnerability Assessment for AWS service, a built-in service of the Enterprise tier of Security Command Center, is released to General Availability .
The Vulnerability Assessment for AWS service creates a disk snapshot to assess Amazon Web Service EC2 machines for software vulnerabilities.
For more information, see Overview of Vulnerability Assessment for AWS .
May 31, 2024
Feature
VM Threat Detection's malware detector released to General Availability
Virtual Machine Threat Detection , a built-in service of Security Command Center, launched the Malware: Malicious file on disk (YARA) detector to GA . This detector generates a finding if an executable file in a virtual machine matches known malware signatures.
May 30, 2024
Feature
Mute state of findings display in alerts, cases, and tickets
The mute state of a finding is now reflected in its corresponding alert, case, and tickets in the Security Operations console of Security Command Center Enterprise. Previously, muted findings displayed only their Active status. For more
information, see Finding status in Cases overview .
Feature
Finding severities update in cases automatically
In the Security Operations console of Security Command Center Enterprise, the severity of each finding is displayed in its corresponding case in the Finding summary widget. If the severity of a finding changes, the case is updated automatically. For more information, see Finding severity versus
case priority .
May 22, 2024
Feature
New curated detections for existing AWS rule sets
Enhanced the existing curated detections for AWS rule sets in the Cloud Threats category to add 40 new detections. These new rules, added to existing rule sets, expand the coverage and are designed to identify tactics and techniques commonly employed by malicious actors that use popular open source offensive security tools against AWS resources.
For more information, see curated detections for AWS rule sets in the Google Security Operations documentation.
May 14, 2024
Deprecated
Rapid Vulnerability Detection preview shuts down on July 14, 2024
The Preview release of the Rapid Vulnerability Detection service is discontinued and the service will be shut down on July 14, 2024.
No action is required.
On July 14, 2024, the status of any findings produced by the Rapid Vulnerability Detection service will be automatically set to Inactive and will be retained for a period defined by the Security Command Center data retention policy .
May 06, 2024
Feature
Assign high-value resources based on Sensitive Data Protection insights for Cloud SQL
The attack path simulations feature can now automatically set the resource value of a Cloud SQL resource based on the sensitivity of the data that the instance contains.
For information about how to enable the automatic assignment of resource values based on data sensitivity, see Create a resource value configuration .
For information about how to configure Sensitive Data Protection to send data sensitivity classifications to Security Command Center, see Publish data profiles to Security Command Center .
May 01, 2024
Deprecated
AI summaries of finding are disabled in Security Command Center
Effective May 1, 2024, the preview of Gemini AI-generated summaries of Security Command Center findings is discontinued. The summaries are no longer available in the Google Cloud console.
For more information, see Gemini features in Security Command Center .
April 15, 2024
Deprecated
Security Health Analytics use of security marks for asset allowlists deprecated
Starting April 15, 2025, Security Health Analytics will no longer use security marks to allowlist assets for Security Health Analytics detectors.
After that date, you can still apply security marks to assets, but they will no longer affect the way that Security Health Analytics processes assets.
For more information about security marks for assets, see Add assets to allowlists .
Deprecated
Historical snapshots to be disabled in Security Command Center API
Starting July 15, 2024, Security Command Center will discontinue historical snapshot capabilities in the Security Command Center API, which were used to query for findings at a particular point in time. Specifically, readTime and compareDuration will be removed from list and group API calls for findings. Also, start_time will be removed from SetFindingState , SetFindingWorkflowState and UpdateSecurityMarks .
For more information about the Security Command Center API, see Overview .
Change
Data retention period to be reduced for Standard tier findings
For existing Standard tier users, on July 14, 2024, the data retention period for findings will be reduced from 13 months to 35 days. For new users activating the Standard tier after April 15, 2024, the data retention period for findings is 35 days.
The retention period for findings in the Premium tier and Enterprise tier remains 13 months.
For more information, see Data retention .
April 02, 2024
Feature
Enterprise tier released to General Availability
The Enterprise tier, which transforms Security Command Center into a cloud-native application protection platform (CNAPP) that combines cloud security and enterprise security operations with multicloud support, is released to General Availability .
The following features and capabilities of the Enterprise tier are new to Security Command Center:
Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities:
Detect threats and vulnerabilities
Assess the risk exposure of your high-value AWS resources
Assess compliance with security standards
A new Security Operations console for global security operations tasks
SIEM and SOAR capabilities for security operations
Security investigation and event management (SIEM) capabilities:
Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources
Detect the most important cloud threats with curated threat detection
Search across consolidated SIEM data
Security operations and response (SOAR) capabilities:
Manage detections, investigations, and responses with cases
Automate response workflows with playbooks
Focus on posture and threat findings with dedicated views in the Security Operations console
Integrate with IT service management products, such as Jira and ServiceNow, for posture management
Search across consolidated SOAR data
The following attack exposure scoring features are in General Availability:
Attack exposure scores now calculated for high-value resources
Severities of vulnerability findings can vary to align with attack exposure scores
Optional automated assignment of resource values with Sensitive Data Protection
Vulnerability and misconfiguration detections
Security Health Analytics includes the following enhancements:
New misconfiguration detectors for AWS resources
Detectors are mapped to new security standards
You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
Threat detection and investigation
Detect threats in your AWS deployments
Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs
Manage the investigation of and response to threats by using cases
Define response workflows and automated actions in response to threats by using playbooks
Mandiant Attack Surface Management integration
Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings
Sensitive Data Protection integration
The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service
Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature
Gemini artificial intelligence features
Natural language search for threat findings
AI investigation widget for cases
Compliance, security standards
Support for AWS security standards
Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
The IaC validation feature lets you determine whether your new or modified resource definitions violate the existing policies that are applied to your Google Cloud resources.
Integration with Assured Open Source Software
The paid tier of Assured OSS is included with your Enterprise tier license, so that you can enhance your code security by using the open source software packages that Google uses for its own developer workflows.
Breaking
With the Enterprise tier, severity levels of certain findings are now variable
In the Enterprise tier of Security Command Center, the default severity level of an active vulnerability or misconfiguration finding can change if the finding's attack exposure score changes. If you are a user of the Premium tier and you upgrade to the Enterprise tier, check any automated or manual procedures that rely on the value of the severity property to ensure that they can support a variable severity value.
For more information, see Severities that vary based on attack exposure score .
April 01, 2024
Fixed
The following Security Health Analytics misconfiguration detectors have changed to check for overly restrictive flag values that might prevent error messages from being written to the logs:
SQL_LOG_ERROR_VERBOSITY
SQL_LOG_MIN_ERROR_STATEMENT_SEVERITY
For the flag values that the detectors check for, see:
SQL log error verbosity
SQL log min error statement severity
March 26, 2024
Feature
GKE security posture recommendations released to Preview
Recommendations from GKE security posture are now available as findings in all tiers of Security Command Center as a Preview release.
GKE security posture publishes workload configuration auditing results as Misconfiguration class findings and vulnerability assessment results as Vulnerability class findings in Security Command Center.
For more information, see GKE security posture dashboard .
March 21, 2024
Feature
Security Command Center detectors are now mapped to the following additional compliance frameworks:
CIS Critical Security Controls v8
Cloud Controls Matrix v 4
HIPAA
ISO 27001 (2022)
NIST 800-53 (rev 5)
NIST Cybersecurity Framework (v 1.0)
PCI-DSS 4.0
SOC 2 (2017)
March 20, 2024
Feature
New misconfiguration detectors for AlloyDB for PostgreSQL clusters released to General Availability.
Security Health Analytics, a built-in service of Security Command Center, released new detectors to General Availability . The following detectors, which are available only with the Premium tier of Security Command Center, detect misconfigurations in AlloyDB for PostgreSQL clusters and instances:
ALLOYDB_AUTO_BACKUP_DISABLED: Automated backups are not enabled in AlloyDB for PostgreSQL cluster.
ALLOYDB_LOG_ERROR_VERBOSITY: Instance database flag log_error_verbosity for AlloyDB for PostgreSQL instance is not set to default or another less restrictive value.
ALLOYDB_LOG_MIN_ERROR_STATEMENT_SEVERITY: Instance database flag log_min_error_statement for AlloyDB for PostgreSQL instance is not set to ERROR or lower.
ALLOYDB_LOG_MIN_MESSAGES: Instance database flag log_min_messages for AlloyDB for PostgreSQL instance is not set to at minimum warning .
For more information, see SQL vulnerability findings .
February 29, 2024
Feature
Security Command Center API v2 released to Preview
The Security Command Center API v2, which enables data residency control and includes the /locations/ LOCATION field in resource names, is released to Preview .
For more information, see the REST reference Security Command Center API Overview .
Feature
Data residency for Security Command Center release to Preview
Security Command Center data residency control is released to Preview . Security Command Center supports the following data locations:
European Union ( eu )
United States ( us )
Global ( global )
For more information, see Data residency .
February 28, 2024
Feature
Virtual Machine Threat Detection , a built-in service of Security Command Center Premium, has launched a new detector, Defense Evasion: Rootkit , in Preview .
The detector monitors virtual machines and generates a finding if a combination of signals matching a known kernel-mode rootkit is present.
For more information, see Virtual Machine Threat Detection overview .
February 20, 2024
Deprecated
Manual control of finding state deprecated for vulnerabilities and misconfigurations
Starting October 21, 2024, you will no longer be able to manually update the state of vulnerability or misconfiguration findings that are issued by Security Health Analytics or VM Manager. Security Command Center will return an error message on manual attempts to change the values of the state. Security Command Center will also begin preventing the manual creation of findings under the exact same name as a source that is automatically managed by Security Command Center in order to prevent the creation of findings that can never be resolved.
For more information, see Finding states .
Feature
Pane on Overview page that supports postures for Vertex AI released to Preview
A pane on the Overview page lets you monitor for vulnerabilities that were found by the Security Health Analytics custom modules that apply to Vertex AI, and lets you view any drift from the Vertex AI organization policies that are defined in a posture.
For more information, see Monitor posture drift .
February 14, 2024
Feature
Support for VPC Service Controls released to General Availability
You can now protect Security Command Center using VPC Service Controls perimeters. For more information, see VPC Service Controls supported products .
February 11, 2024
Breaking
Exports of compliance reports will require new permissions
On or after March 15, 2024, a new Identity and Access Management (IAM) permission will be required to export a compliance report from the Google Cloud console. If you use custom roles to control access to Google Cloud resources, you will need to add this new permission to your custom roles before that date to continue exporting compliance reports.
For more information, see Export a compliance report .
February 06, 2024
Feature
High-value resources now include attack exposure scores
The calculation of attack exposure scores for high-value resources by the Security Command Center Attack Path Simulations feature is released to Preview . Use attack exposure scores on resources to proactively secure the resources that are the most valuable to your business. For more information, see Attack exposure scores .
Feature
Mandiant analyst CVE ratings added to vulnerability findings
The addition of CVE information, including ratings of the vulnerability by Mandiant Threat Intelligence analysts, to the details of Security Command Center vulnerability findings is released to Preview . You can now prioritize vulnerabilities based on the exploitability and impact ratings from Mandiant. For more information, see Prioritize vulnerability findings to reduce risk .
Feature
New security posture service released to General Availability
The new security posture service is released to General Availability . This service lets you create and deploy postures so that you can define the policies for your Google Cloud organization and monitor for drift.
For more information, see Security posture overview .
Feature
Attack exposure scores informed by Mandiant Threat Intelligence
The inclusion of CVE exploitability ratings in the calculation of attack exposure scores for vulnerability findings is released to Preview . The ratings, which are provided by Mandiant Threat Intelligence analysts, enables Security Command Center attack path simulations to provide more accurate scores for prioritizing vulnerability findings. For more information, see Incorporation of CVE data .
Feature
Prioritize high-value resources automatically by data sensitivity
The optional integration of the Sensitive Data Protection discovery feature with the Security Command Center attack path simulation feature is released to Preview . If you use Sensitive Data Protection discovery, you can choose to have the priority value of supported high-value resources set automatically based on whether they contain medium-sensitivity or high-sensitivity data. For more information, see Set resource priority values automatically by data sensitivity .
Feature
Improvements to compliance standards support now available
Improvements to the Security Command Center Compliance page in the Google Cloud console are released to General Availability . Your state of compliance with all supported standards is now presented more clearly and a new Compliance details page makes it easier to see failing controls. For more information, see Assess and report compliance .
January 31, 2024
Feature
Virtual Machine Threat Detection , a built-in service of Security Command Center, launched the Malware: Malicious file on disk (YARA) detector to Preview . This detector generates a finding if an executable file in a virtual machine matches known malware signatures.
January 26, 2024
Feature
Security Command Center Management API released to General Availability
The Security Command Center Management API, which provides API support for managing settings and custom modules, is released to General Availability .
For more information, see Security Center Management API .
January 24, 2024
Issue
New Container Threat Detection service account deferred
The new service account for Container Threat Detection that was included with new activations of Security Command Center after December 7, 2023 was temporarily removed from new activations on Dec 19, 2023 due to issues with older GKE clusters.
If you activated Security Command Center during this time period, all issues have been resolved and there is no impact to your experience.
New activations of Security Command Center will use the service account that was used prior to December 7, 2023 with the Container Threat Detection service until further notice.
For more information about the new service account, see Required IAM permissions .
January 10, 2024
Fixed
Issue that caused finding severities to change unexpectedly is resolved
Between December 11, 2023 and January 10, 2024, an issue might have changed the severities of some findings unexpectedly. As of today, the issue has been fixed for all customers. Any finding severities that were changed have been returned to their original state.
December 15, 2023
Feature
The custom modules feature for Event Threat Detection is now in General Availability . This feature lets you create custom Event Threat Detection detectors that meet the unique needs of your organization.
In addition, the Unexpected Cloud API Call module type is now available. This module type lets you create a custom module that detects when a specified principal calls a specified method against a specified resource.
For more information, see Overview of custom modules for Event Threat Detection .
December 13, 2023
Breaking
Custom roles will require new permissions for custom modules
On or after January 22, 2024, new Identity and Access Management (IAM) permissions will be required to work with custom modules for both Event Threat Detection and Security Health Analytics. If you use custom roles to control access to Google Cloud resources, you will need to add these new permissions to your custom roles before that date to continue working with custom modules.
For more information, see the following:
IAM roles for Event Threat Detection custom modules
IAM roles for Security Health Analytics custom modules
December 11, 2023
Change
New Container Threat Detection service account with new activations
For activations of Security Command Center after December 7, 2023, Container Threat Detection uses a new service account for Identity and Access Management (IAM) permissions.
During the activation process, new users grant permissions to two service accounts: one for Security Command Center and one for Container Threat Detection. The new service account speeds the first-time enablement of Container Threat Detection.
If you activated Security Command Center prior to December 7, 2023, Container Threat Detection remains unchanged and continues to use its original service account.
For more information, see Service agent roles .
December 07, 2023
Feature
New goal-based query presets for identity and access misconfigurations
New goal-based query presets on the Security Command Center Vulnerabilities page are released to Preview .
The query presets support cloud infrastructure entitlement management (CIEM) by filtering vulnerability finding categories to those that are related to principal accounts that are misconfigured or that have excessive permissions to Google Cloud resources.
For more information, see Goal-based query presets .
December 04, 2023
Feature
Policy Controller integration released to General Availability
The integration of Policy Controller for Kubernetes clusters with Security Command Center is released to General Availability . Violation alerts from Policy Controller appear in Security Command Center as misconfiguration findings.
For more information, see Policy Controller .
November 10, 2023
Feature
Policy Controller integration now in Preview
The integration of Policy Controller for Kubernetes clusters with Security Command Center is released to Preview . Violation alerts from Policy Controller now appear in Security Command Center as misconfiguration findings.
For more information, see Policy Controller .
November 08, 2023
Feature
Support for VPC Service Controls released to Preview
You can now protect Security Command Center using VPC Service Controls perimeters. For more information, see VPC Service Controls supported products .
October 19, 2023
Feature
Backup and DR Service threat detectors available in Security Command Center Premium
Event Threat Detection, a built-in service of Security Command Center, released new rules for the Google Cloud Backup and DR service to Preview . Security Command Center can now detect the following:
Backup and DR actions that inhibit system recovery
Backup and DR actions that result in data destruction
For more information, see:
Backup and DR in Event Threat Detection rules
What is Backup and DR Service?
October 18, 2023
Feature
Container Threat Detection , a built-in service of Security Command Center Premium, has launched a new detector, Unexpected Child Shell , in Preview .
The detector monitors all process executions and generates a finding if a process that does not normally invoke shells spawns a shell process.
For more information, see Container Threat Detection detectors .
October 09, 2023
Feature
Cloud IDS threat detections available in Security Command Center
Threats that are detected by Cloud IDS, a Google Cloud intrusion detection service, are now included in the findings that are issued by the Event Threat Detection service of Security Command Center. This feature is available in Preview .
For more information, see:
Cloud IDS in Event Threat Detection rules
Cloud IDS overview
September 29, 2023
Feature
containsOnly() function released to General Availability .
You can now use the containsOnly() function to query findings with an array-type attribute or subfield that only contains values that match the specified filter, and no other values.
For more information, see The containsOnly function .
September 20, 2023
Feature
Attack path simulations support additional resources
The attack path simulation feature that generates attack exposure scores and attack paths for your high-value resources now supports the following additional Google Cloud resources:
aiplatform.googleapis.com/Dataset
aiplatform.googleapis.com/Featurestore
aiplatform.googleapis.com/MetadataStore
aiplatform.googleapis.com/Model
aiplatform.googleapis.com/TrainingPipeline
container.googleapis.com/Cluster
For more information, see Resource types supported in high-value resource sets .
September 19, 2023
Change
Vulnerabilities per resource type graphic released to General Availability
The Security Command Center Overview page in the Cloud console now shows a Vulnerabilities per resource type graphic, which replaces the Active vulnerabilities over time by severity graphic. The Vulnerabilities per resource type graphic shows the resources in your organization (for example, Cloud Storage buckets, Compute Engine instances, and firewalls), how many active vulnerabilities exist for each resource, and the severity of those vulnerabilities.
September 15, 2023
Feature
Event Threat Detection , a built-in service of Security Command Center, released a new rule, Initial Access: Leaked Service Account Key Used , to General Availability .
For more information, see Event Threat Detection rules .
September 11, 2023
Feature
Security Command Center now supports CIS Google Cloud Computing Foundations Benchmark v2.0.0.
The support for v2.0.0 includes the following new vulnerability detector:
Load balancer logging disabled
For more information, see the following:
Detectors and compliance
CIS Google Cloud Foundation 2.0.0
August 21, 2023
Feature
inIpRange() function released to General Availability
You can now specify a range of IP addresses by using the inIpRange() function in query statements to filter findings that contain IPv4 or IPv6 addresses within the specified range.
For more information, see The inIpRange function .
August 16, 2023
Change
New assets experience released to General Availability
The Security Command Center Assets page in the Cloud console is now powered by Cloud Asset Inventory . The new Assets page provides expanded asset visibility and includes a new asset query feature.
This release is part of the planned deprecation of the Security Command Center Assets API scheduled for on or after June 20, 2024.
For more information, see Assets page .
August 03, 2023
Feature
AI-generated summaries of the simulated attack paths for Security Command Center findings are released to Preview . When you view the attack path for a finding, you can now read explanations that are generated dynamically by artificial intelligence (AI).
For more information, see AI-generated summaries .
Feature
Attack exposure scores and attack paths released to General Availability
The attack path simulation feature that generates attack exposure scores and attack paths for findings that expose your high-value resources is now released to General Availability .
For information about the feature, see Attack exposure scores and attack paths .
July 31, 2023
Feature
The Security Health Analytics detector NETWORK_POLICY_DISABLED now recognizes network policies that are implemented by using GKE Dataplane V2.
For more information, see the following:
GKE Dataplane V2
Container vulnerability findings
July 26, 2023
Feature
The custom modules feature for Event Threat Detection is now in Preview . Custom modules allow you to define custom detectors for Event Threat Detection.
For more information, see Overview of custom modules for Event Threat Detection .
July 14, 2023
Feature
AI-generated summaries of Security Command Center findings are released to Preview . When you view finding details, you can now read explanations that are generated dynamically by artificial intelligence (AI).
For more information, see AI-generated summaries .
July 13, 2023
Feature
Recommendations from the IAM recommender are now available as findings in Security Command Center in a Preview release.
The following IAM recommender recommendations are now published as Vulnerability class findings in Security Command Center:
IAM role has excessive permissions
Service agent role replaced with basic role
Service agent granted basic role
Unused IAM role
For more information, see Security sources > IAM recommender .
June 28, 2023
Deprecated
As of June 20, 2023, Security Command Center Asset API endpoints and dependent functionality are deprecated and will be removed from the product for all users on or after June 20, 2024. Use Cloud Asset Inventory and its API instead.
After June 20, 2023, the asset functionality is not included with new activations of Security Command Center.
If you activated Security Command Center before June 20, 2023, but have not used the asset functionality in the 90 days prior to June 20, 2023, the asset functionality is removed.
If you activated Security Command Center before June 20, 2023, and have used the asset functionality in the 90 days prior to June 20, 2023, the asset functionality remains available for you until June 20, 2024 or later.
The deprecation applies to the following Security Command Center interfaces:
Security Command Center Asset API endpoints
Except for gcloud scc assets update-marks , which is not deprecated, the assets subgroup of the gcloud scc CLI command
The Assets page and related functionality in the Google Cloud Console
June 22, 2023
Change
Only the Security Center Service Agent ( roles/securitycenter.serviceAgent ) role is required by the Security Command Center service account. Previously, the service account also required the roles/serviceusage.serviceUsageAdmin and roles/cloudfunctions.serviceAgent roles to work properly.
June 21, 2023
Feature
Event Threat Detection, a built-in service of Security Command Center, released the following new rules to General Availability .
Initial Access: Dormant Service Account Action
Privilege Escalation: Dormant Service Account Granted Sensitive Role
Persistence: Impersonation Role Granted For Dormant Service Account
Initial Access: Dormant Service Account Key Created
For more information, see Event Threat Detection rules .
June 12, 2023
Feature
New Finding attribute: userAgent
The userAgent attribute is added to the Access object, which is included in the Finding object of the Security Command Center API.
The userAgent attribute identifies the user agent of the caller that is associated with a Security Command Center finding.
For more information, see the Security Command Center API documentation for the Finding object.
June 08, 2023
Feature
Usage-based pricing for organization-level activations of Security Command Center
You can now use usage-based pricing instead of a fixed-price subscription to activate Security Command Center Premium tier at the organization level. The feature lets you activate Security Command Center at the organization level yourself in the Cloud console. Billing for organization-level activations of Security Command Center is based on the resource consumption in your organization and uses a usage-based pricing model .
For more information, see Overview of organization-level activation .
Announcement
Security Command Center Cryptomining Protection Program
The Security Command Center Cryptomining Protection Program is launched to General Availability. The program offers financial protection up to $1 million USD to cover unauthorized Google Cloud compute expenses that are associated with undetected cryptocurrency mining attacks for Security Command Center Premium customers.
For more information, see Security Command Center Cryptomining Protection Program .
June 02, 2023
Change
The Google Cloud console has been updated to change how you open Security Command Center pages. Previously, you selected pages using tabs on the main page. Now you select pages from the slide-out menu on the left side of the console. To show the menu, hold your pointer over the icons on the left side of the console.
For an overview of the pages, see Using Security Command Center in the Google Cloud console .
May 17, 2023
Change
With project-level activations of the Security Command Center Premium tier, you can now enable certain Premium-tier threat and vulnerability findings that require organization-level access by activating the Standard tier at the organization level in addition to your project-level activation. These finding categories were previously unsupported with project-level activations.
For more information, see Premium tier feature support with project-level activations .
May 15, 2023
Announcement
The pricing for project-level activations of Security Command Center has been reduced by lowering the Security Command Center rate for the usage of the following Google Cloud services:
Compute Engine
GKE-Autopilot
App Engine
Cloud SQL
For more information, see Pricing for project-level activations .
May 04, 2023
Fixed
An issue that affected the display of the counts of controls for certain CIS Google Cloud Platform Benchmark (CIS Benchmark) reports in the Google Cloud console has been fixed.
On March 31, 2023, an update to Security Health Analytics affected the behavior of certain detectors for versions 1.0, 1.1, and 1.2 of the CIS Benchmark reports. The count of controls for CIS Benchmark version 1.3, as well any as CSV exports, were unaffected.
Between March 31, 2023 and May 4, 2023, the following detectors might have been counted and grouped under the incorrect CIS level on the Compliance tab of Security Command Center:
API_KEY_EXISTS
API_KEY_APIS_UNRESTRICTED
API_KEY_NOT_ROTATED
FIREWALL_NOT_MONITORED
ROUTE_NOT_MONITORED
NETWORK_NOT_MONITORED
BUCKET_IAM_NOT_MONITORED
SQL_INSTANCE_NOT_MONITORED
VPC_FLOW_LOGS_SETTINGS_NOT_RECOMMENDED
SQL_LOG_STATEMENT
ACCESS_TRANSPARENCY_DISABLED
April 26, 2023
Feature
Event Threat Detection, a built-in service of Security Command Center, launched the following new rules to Preview .
Persistence: Impersonation Role Granted For Dormant Service Account
Privilege Escalation: Dormant Service Account Granted Sensitive Role
The Persistence: Impersonation Role Granted For Dormant Service Account rule detects events where a principal is granted permissions to impersonate a dormant user-managed service account.
The Privilege Escalation: Dormant Service Account Granted Sensitive Role rule detects events where a dormant user-managed service account was granted one or more sensitive IAM roles.
For more information, see Event Threat Detection rules .
April 13, 2023
Feature
Event Threat Detection, a built-in service of Security Command Center, launched the following new rules to Preview .
Defense Evasion: Breakglass Workload Deployment Created
Defense Evasion: Breakglass Workload Deployment Updated
These rules detect when the break-glass flag is used to override Binary Authorization controls when deploying or updating workloads. For more information, see Event Threat Detection rules .
April 12, 2023
Feature
The custom modules feature for Security Health Analytics is now generally available (GA). Custom modules allow you to define custom detectors for Security Health Analytics.
For more information, see Overview of custom modules for Security Health Analytics .
April 11, 2023
Feature
Event Threat Detection, a built-in service of Security Command Center, launched the following new rules to General Availability .
Privilege Escalation: Anomalous Impersonation of Service Account for Admin Activity
Privilege Escalation: Anomalous Multistep Service Account Delegation for Admin Activity
Privilege Escalation: Anomalous Multistep Service Account Delegation for Data Access
Privilege Escalation: Anomalous Service Account Impersonator for Admin Activity
Privilege Escalation: Anomalous Service Account Impersonator for Data Access
These rules detect anomalous activities that are taken by someone who is using an impersonated service account to access Google Cloud. For more information, see Event Threat Detection rules .
April 06, 2023
Deprecated
The legacy version of the Findings tab is removed from Security Command Center in the Google Cloud console. You can work with findings in the Google Cloud console only by using the new version of the Findings tab.
For more information, see Work with findings in the Google Cloud console .
April 03, 2023
Feature
The moduleName attribute is added to the Finding object of the Security Command Center API.
The moduleName attribute, when included in a finding, identifies the full resource name of the specific detection module of the Security Command Center service that generated the finding.
For more information, see the Security Command Center API documentation for the Finding object.
March 31, 2023
Feature
Security Command Center supports CIS Google Cloud Computing Foundations Benchmark v1.3.0.
The following detectors are new for v1.3.0:
Access transparency disabled
Cloud Asset API disabled
Dataproc CMEK disabled
Essential contacts not configured
Flow logs settings not recommended
The following detectors have been updated:
Audit logging disabled
For more information about Security Command Center support for standards and compliance, see the following:
Detectors and compliance
CIS Google Cloud Computing Platform Benchmarks
March 23, 2023
Feature
The version 3.0 release of the Google SCC App for QRadar , which lets you send Security Command Center data to QRadar v7.4.1FP2+, is generally available.
This version includes support for multiple Google Cloud organizations, bug fixes, and supportability improvements.
For information about downloading and installing the new application, see Upgrade the Google SCC app .
Feature
The March 20, 2023 release of the Google Cloud SCC content pack for sending Security Command Center data to Cortex XSOAR is generally available.
This version includes support for multiple Google Cloud organizations, bug fixes, and supportability improvements.
For information about downloading and installing the new content pack, see Upgrade the Google Cloud SCC content pack .
Feature
The version 2.0 release of the Google SCC Add-on For Splunk and the Google SCC App For Splunk , which let you send Security Command Center data to Splunk, is generally available.
This version includes support for multiple Google Cloud organizations, bug fixes, and supportability improvements.
For information about downloading and installing the new applications, see Upgrade Google SCC App for Splunk and Google SCC Add-on for Splunk .
Feature
The version 3.0 release of the Google SCC App for ELK , which lets you send Security Command Center data to Elastic Stack, is generally available.
This version includes support for multiple Google Cloud organizations, bug fixes, and supportability improvements.
For information about downloading and installing the new application, see Upgrade the Docker container .
March 17, 2023
Feature
The following attributes were added to the Finding object of the Security Command Center API.
cloudDlpInspection
cloudDlpDataProfile
The cloudDlpInspection attribute provides details about the results of a Cloud Data Loss Prevention (Cloud DLP) inspection job . The cloudDlpDataProfile attribute provides the name of a Cloud DLP data profile that is associated with a finding.
For more information, see the Security Command Center API documentation for the Finding object.
Feature
Event Threat Detection, a built-in service of Security Command Center Premium, has launched the Initial Access: Excessive Permission Denied Actions rule to General Availability . This rule detects events where a principal repeatedly triggers permission denied errors across multiple methods and services.
For more information about Event Threat Detection findings, see Event Threat Detection rules .
Feature
Virtual Machine Threat Detection , a built-in service of Security Command Center, launched the following detectors to Preview .
Defense Evasion: Unexpected kernel code modification
Defense Evasion: Unexpected kernel read-only data modification
Defense Evasion: Unexpected ftrace handler
Defense Evasion: Unexpected interrupt handler
Defense Evasion: Unexpected kernel modules
Defense Evasion: Unexpected kprobe handler
Defense Evasion: Unexpected processes in runqueue
Defense Evasion: Unexpected system call handler
These modules analyze runtime Linux kernel integrity to detect common evasion techniques used by malware.
March 01, 2023
Deprecated
The legacy version of the Findings tab in the Security Command Center dashboard in the Cloud console is now deprecated. Similar functionality is currently available in the new version of the Findings tab.
After March 31, 2023, the option to use the legacy Findings tab will be removed from the dashboard. After that date, you will be able to work with findings in the console only by using the newer, default version of the Findings tab.
For more information about working with Security Command Center findings by using the default Findings tab, see Work with findings in the Security Command Center .
February 07, 2023
Change
Event Threat Detection , a built-in service of Security Command Center, launched the Persistence: New API Method rule to General Availability . This rule detects anomalous usage of Google Cloud services by IAM service accounts. For more information, see Event Threat Detection rules .
February 06, 2023
Feature
The version 1.0 release of the Google SCC ITSM app and the Google SCC SIR app, which let you send data, such as findings, sources, assets, and audit logs, from Security Command Center to ServiceNow, is generally available. For information about downloading and installing the new applications, see Sending Security Command Center data to ServiceNow .
January 30, 2023
Feature
Project-level activation of Security Command Center
The Security Command Center project-level activation feature is generally available. The feature lets you enable Security Command Center for individual Google Cloud projects yourself in the Cloud console. Billing for project-level activations of Security Command Center is based on resource consumption in the project and uses a pay-as-you-go billing model .
For more information, see Overview of project-level activation .
January 27, 2023
Feature
The new and improved Findings page in the Cloud Console is now generally available and the default view for working with Security Command Center findings. With the redesigned Findings page, you can query, filter, and investigate Security Command Center findings faster and more efficiently. For more information, see Work with findings in the Security Command Center dashboard .
December 22, 2022
Feature
The userName attribute was added to the Finding object of the Security Command Center API.
The value of the userName attribute depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it be an application login username.
For more information, see the Security Command Center API documentation for the Finding object.
December 16, 2022
Feature
Event Threat Detection , a built-in service of Security Command Center, launched the Initial Access: Dormant Service Account Action rule to Preview . This rule detects events where a dormant user-managed service account triggered an action. For more information, see Event Threat Detection rules .
December 15, 2022
Feature
Event Threat Detection , a built-in service of Security Command Center, launched the following rules to Preview .
Privilege Escalation: Anomalous Impersonation of Service Account for Admin Activity
Privilege Escalation: Anomalous Multistep Service Account Delegation for Admin Activity
Privilege Escalation: Anomalous Multistep Service Account Delegation for Data Access
Privilege Escalation: Anomalous Service Account Impersonator for Admin Activity
Privilege Escalation: Anomalous Service Account Impersonator for Data Access
These rules detect the unusual impersonation or delegation of a service account, as recorded in either the Admin Activity or Data Access audit logs. For more information, see Event Threat Detection rules .
December 08, 2022
Feature
Sensitive Actions Service, a built-in service of Security Command Center Premium, is now generally available .
Sensitive Actions Service detects when actions are taken in your Google Cloud organization, folders, and projects that could be damaging to your business if they were to be taken by a malicious actor.
For more information, see Sensitive Actions Service overview .
Feature
The Malicious URL Observed detector of Container Threat Detection, a built-in service of Security Command Center Premium, is now generally available .
The detector checks URLs observed in arguments passed by executables against known phishing and malware URLs to determine if they are malicious.
You can see the full details of the detector's findings only if you upgrade to the refreshed findings display in the Security Command Center dashboard.
For more information, see the following pages:
Container Threat Detection overview
Findings Workflow Improvements
December 05, 2022
Feature
The kernelRootkit attribute was added to the Finding object of the Security Command Center API.
The kernelRootkit attribute contains information about a kernel rootkit that triggered a finding, including the following:
Name of the rootkit, if available.
Whether unexpected modifications were made to the kernel's code, read-only data memory, or certain important kernel data structures.
For more information, see the Security Command Center API documentation for the Finding object.
December 02, 2022
Feature
Event Threat Detection , a built-in service of Security Command Center, launched the Initial Access: Database Superuser Writes to User Tables rule to General Availability . This rule detects events where a Cloud SQL superuser ( postgres for PostgreSQL servers or root for MySQL users) writes to non-system tables. For more information, see Event Threat Detection rules .
November 16, 2022
Feature
Event Threat Detection, a built-in service of Security Command Center Premium, has launched the Initial Access: Excessive Permission Denied Actions rule to Preview . This rule detects events where a principal repeatedly triggers permission denied errors across multiple methods and services.
For more information about Event Threat Detection findings, see Event Threat Detection rules .
November 14, 2022
Feature
The files attribute was added to the Finding object of the Security Command Center API.
The files attribute contains information about each file that triggered a finding, including the name of the file, the full path to the file, and the size of the file.
For more information, see the Security Command Center API documentation for the Finding object.
November 10, 2022
Feature
Security Command Center added the ability to export findings to a CSV file from the Google Cloud console. For more information, see Export findings to a CSV file .
November 07, 2022
Feature
Security Command Center released two new error detectors:
KTD blocked by admission controller
KTD image pull failure
These detectors report configuration errors that prevent the Container Threat Detection service from functioning properly.
Remediation guidance is provided for each finding type. For more information, see Security Command Center errors .
October 21, 2022
Feature
Event Threat Detection, a built-in service of Security Command Center, launched the following rules to general availability (GA).
Discovery: Can get sensitive Kubernetes object check
Privilege Escalation: Changes to sensitive Kubernetes RBAC objects
Privilege Escalation: Create Kubernetes CSR for master cert
Privilege Escalation: Creation of sensitive Kubernetes bindings
Privilege Escalation: Get Kubernetes CSR with compromised bootstrap credentials
Privilege Escalation: Launch of privileged Kubernetes container
These rules detect scenarios where a potentially malicious actor attempted to query or escalate privileges in Google Kubernetes Engine. For more information, see Event Threat Detection rules .
October 19, 2022
Feature
Rapid Vulnerability Detection, a built-in service of Security Command Center Premium, is now available in Preview .
Rapid Vulnerability Detection is a zero-configuration network and web application scanner that detects weak credentials, incomplete software installations, and other critical vulnerabilities that have a high likelihood of being exploited.
For more information, see Rapid Vulnerability Detection conceptual overview .
October 03, 2022
Feature
Error notifications in Security Command Center console
When Security Command Center detects configuration errors that prevent services from detecting threats or vulnerabilities, a pop-up notification appears in the Security Command Center console. The notification includes the number of configuration errors currently detected.
After you fix an error, the error notification is cleared after the next scan for that error type. For information about the scan interval for each error type, see Error detectors .
September 30, 2022
Feature
Sensitive Actions Service, a built-in service of Security Command Center Premium, is now available in Preview .
Sensitive Actions Service detects when actions are taken in your Google Cloud organization, folders, and projects that could be damaging to your business if they were to be taken by a malicious actor.
For more information, see Sensitive Actions Service overview .
Feature
Container Threat Detection, a built-in service of Security Command Center Premium, has launched a new detector, Malicious URL Observed , in Preview .
The detector checks URLs observed in arguments passed by executables against known phishing and malware URLs to determine if they are malicious.
Full details for this findings are available in the Security Command Center dashboard only if you upgrade to the refreshed findings display.
For more information, see:
Container Threat Detection overview
Findings Workflow Improvements
September 28, 2022
Feature
The parentDisplayName attribute was added to the Finding object of the Security Command Center API.
The parentDisplayName attribute provides the display name of the Security Command Center service or source that produced a finding.
For more information, see the Security Command Center API documentation for the Finding object.
September 02, 2022
Feature
Event Threat Detection , a built-in service of Security Command Center, launched the Exfiltration: Cloud SQL Over-Privileged Grant rule to General Availability . This rule detects events where a Cloud SQL for PostgreSQL user or role was granted all privileges to a database, or to all tables, procedures, or functions in a schema. For more information, see Event Threat Detection rules .
August 22, 2022
Feature
The following attributes were added to the Finding object of the Security Command Center API:
Database provides information about access to a database that is related to a finding.
serviceAccountKeyName , serviceAccountDelegationInfo , and principalSubject attributes were added to the existing access attribute. These new attributes provide additional context about the principals that are associated with a finding.
uris , a new attribute within the indicator attribute, lists any malicious URIs that are associated with a finding.
For more information, see the Security Command Center API documentation for the Finding object.
August 08, 2022
Feature
Event Threat Detection, a built-in service of Security Command Center, launched the following rules to Preview .
Discovery: Can get sensitive Kubernetes object check
Privilege Escalation: Changes to sensitive Kubernetes RBAC objects
Privilege Escalation: Create Kubernetes CSR for master cert
Privilege Escalation: Creation of sensitive Kubernetes bindings
Privilege Escalation: Get Kubernetes CSR with compromised bootstrap credentials
Privilege Escalation: Launch of privileged Kubernetes container
These rules detect scenarios where a malicious actor attempted to query for or escalate privileges in Google Kubernetes Engine. For more information, see Event Threat Detection rules .
July 21, 2022
Feature
The container and kubernetes attributes were added to the Finding object.
The container attribute provides information about both Kubernetes and non-Kubernetes containers that are associated with a given finding. The kubernetes attribute provides information about Kubernetes resources that are associated with a given finding.
For more information, see the Security Command Center API documentation for the Finding object.
July 18, 2022
Feature
Virtual Machine Threat Detection , a built-in service of Security Command Center Premium, is generally available ( GA ). VM Threat Detection detects cryptocurrency mining software, which is among the most common types of software installed in compromised cloud environments.
June 30, 2022
Feature
The contacts and indicator.signatures attributes were added to the Finding object.
The contacts attribute is a map containing the contacts for the given finding. The key represents the type of contact, and the value contains a list of all contacts of that type.
The indicator.signatures[] attribute lists matched signatures that indicate that a given process is present in the environment.
For more information, see the API documentation for the Finding object.
May 27, 2022
Feature
The compliances , exfiltration , and processes attributes were added to the Finding object.
The compliances attribute provides details about security standards that are unmet.
The exfiltration attribute provides details about the sources and targets of an exfiltration attempt.
The processes attribute provides details about operating system processes relevant to a finding.
For more information, see the API documentation for the Finding object.
May 16, 2022
Feature
Updates were made to the applications that let you send Security Command Center data to to the following SIEM and SOAR platforms:
Cortex XSOAR —see Sending Security Command Center data to Cortex XSOAR .
Elastic Stack —see Sending Security Command Center data to Elastic Stack and Sending Security Command Center data to Elastic Stack using Docker .
IBM QRadar —see Sending Security Command Center data to IBM QRadar .
In addition, Security Command Center can automatically send findings, assets, audit logs, and security sources to Splunk . For more information, see Sending Security Command Center data to Splunk .
April 28, 2022
Feature
Security Command Center error detectors are generally available ( GA ). Error detectors report configuration errors that prevent Security Command Center and its services from functioning properly. Remediation guidance is provided for each finding type. For more information, see Security Command Center errors .
Feature
The connections[] and description attributes were added to the Finding object.
The connections[] attribute contains information about the IP connection associated with the finding. It includes the destination IP address, the destination port, the source IP address, the source port, and the protocol.
The description attribute provides an explanation of the finding.
For more information, see the API documentation for the Finding object.
April 07, 2022
Feature
The iamBindings[] and nextSteps attributes were added to the Finding object.
The iamBindings[] attribute provides a list of IAM bindings associated with the finding.
The nextSteps attribute provides recommended actions you can take to address the finding.
For more information, see the API documentation for the Finding object.
March 29, 2022
Feature
A revamp of the Findings workflow is in Preview . This Preview includes improvements in the filtering and querying experience. For a complete summary of improvements, see Summary: Findings Workflow Improvements . To opt in to this Preview, see Upgrade to the Findings Workflow Improvements .
March 07, 2022
Feature
To support a rich query experience on complex array elements, the contains() filter function was introduced. You can use this function in your finding queries to do the following:
Exact element matching: Match array elements that contain the exact string, "example" .
Specific number operations: Match array elements that are greater than or equal to 100 .
Complex filtering against array structures: Match array elements that contain property x with a corresponding value y .
For more information, see Filtering on array-type fields .
March 02, 2022
Feature
You can now configure automatic exports of Security Command Center findings to a BigQuery dataset. For more information, see Export findings to BigQuery for analysis .
Feature
The vulnerability.cve.upstreamFixAvailable attribute was added to the Finding object. This is a boolean field that specifies whether a Common Vulnerabilities and Exposures (CVE) fix is available. For more information, see the API documentation for the Finding object.
February 24, 2022
Feature
Security Command Center can automatically send findings, assets, and security sources to the following SIEM and SOAR platforms:
Cortex XSOAR —see Sending Security Command Center data to Cortex XSOAR .
Elastic Stack —see Sending assets and findings to Elastic Stack and Exporting assets and findings with Docker and Elastic Stack .
IBM QRadar —see Sending Security Command Center data to IBM QRadar .
February 22, 2022
Feature
MITRE ATT&CK framework details related to findings are now available as finding attributes for all Security Command Center services. The framework explains tactics and techniques for attacks against cloud resources, and provides remediation guidance. Although these attributes are available across all built-in and integrated services, only Container Threat Detection and Event Threat Detection are populating them at this time. For more information, see the API documentation for the Findings object.
February 10, 2022
Feature
Access-related details are now available as finding attributes for all Security Command Center services. These attributes relate to an access event associated with a finding. They contain details such as the caller's IP address, which service and method was called, and what region the access event occurred in. Although access-related attributes are available across all built-in and integrated services, they're only populated by Event Threat Detection at this time. For more information, see the API documentation for the Findings object.
February 07, 2022
Feature
Security Health Analytics, a built-in service of Security Command Center, released the OPEN_GROUP_IAM_MEMBER detector to General Availability .
Fixed
Previously, the following Event Threat Detection rules were made temporarily unavailable because they were generating extraneous findings:
Persistence: New API Method
Persistence: New Geography
The underlying issue has been resolved. These rules are now operational. For more information, see Event Threat Detection rules .
February 02, 2022
Feature
Event Threat Detection, a built-in service of Security Command Center, launched the Exfiltration: BigQuery Data to Google Drive rule to Preview . This rule detects events where the protected organization's BigQuery data is saved, through extraction operations, to a Google Drive folder. For more information, see Event Threat Detection rules .
January 31, 2022
Feature
Web Security Scanner, a built-in service of Security Command Center, released the CACHEABLE_PASSWORD_INPUT and SESSION_ID_LEAK finding types.
For more information, see Web Security Scanner findings .
Feature
Virtual Machine Threat Detection, a built-in service of Security Command Center Premium, is in Preview . During the Preview,
VM Threat Detection detects cryptocurrency mining software, which is among the
most common types of software installed in compromised cloud environments.
For more information, see Virtual Machine Threat Detection conceptual overview .
Feature
Web Security Scanner, a built-in service of Security Command Center, provides detectors for the OWASP Top 10 2017 and OWASP Top 10 2021 . For more information, see Detectors and Compliance .
January 26, 2022
Feature
Security Command Center supports CIS Google Cloud Computing Foundations Benchmark v1.2.0 (CIS Google Cloud Foundation 1.2.0).
The following detectors have been added:
BIGQUERY_TABLE_CMEK_DISABLED
CONFIDENTIAL_COMPUTING_DISABLED
DNS_LOGGING_DISABLED
SQL_EXTERNAL_SCRIPTS_ENABLED
SQL_LOG_DURATION_DISABLED
SQL_LOG_ERROR_VERBOSITY
SQL_LOG_EXECUTOR_STATS_ENABLED
SQL_LOG_HOSTNAME_ENABLED
SQL_LOG_MIN_ERROR_STATEMENT_SEVERITY
SQL_LOG_MIN_MESSAGES
SQL_LOG_PARSER_STATS_ENABLED
SQL_LOG_PLANNER_STATS_ENABLED
SQL_LOG_STATEMENT
SQL_LOG_STATEMENT_STATS_ENABLED
SQL_REMOTE_ACCESS_ENABLED
SQL_SKIP_SHOW_DATABASE_DISABLED
SQL_TRACE_FLAG_3625
SQL_USER_CONNECTIONS_CONFIGURED
SQL_USER_OPTIONS_CONFIGURED
For more information, see Detectors and compliance .
January 24, 2022
Feature
Web Security Scanner, a built-in service of Security Command Center, released the SQL_INJECTION and STRUTS_INSECURE_DESERIALIZATION finding types.
For more information, see Web Security Scanner findings .
January 10, 2022
Feature
Web Security Scanner, a built-in service of Security Command Center, released the INSECURE_ALLOW_ORIGIN_ENDS_WITH_VALIDATION , INSECURE_ALLOW_ORIGIN_STARTS_WITH_VALIDATION , and XXE_REFLECTED_FILE_LEAKAGE finding types.
For more information, see Web Security Scanner findings .
December 30, 2021
Feature
Security Health Analytics, a built-in service of Security Command Center, launched the DATAPROC_IMAGE_OUTDATED detector to General Availability . This detector finds clusters created with Dataproc image versions that are affected by security vulnerabilities in the Apache Log4j 2 utility ( CVE-2021-44228 and CVE-2021-45046 ). For more information, see Dataproc vulnerability findings .
December 21, 2021
Feature
Event Threat Detection, a built-in service of Security Command Center, launched the Active Scan: Log4j Vulnerable to RCE rule to General Availability . This rule detects active Log4j vulnerabilities by identifying DNS queries for unobfuscated domains that were initiated by supported Log4j vulnerability scanners. For more information, see Event Threat Detection rules.
December 16, 2021
Feature
Event Threat Detection, a built-in service of Security Command Center, launched the Initial Access: Log4j Compromise Attempt rule to General Availability . This rule detects Java Naming and Directory Interface (JNDI) lookups within headers or URL parameters. These lookups may indicate attempts at Log4Shell exploitation. For more information, see Event Threat Detection rules.
December 13, 2021
Feature
Event Threat Detection, a built-in service of Security Command Center, launched the Persistence: New API Method rule to Preview . This rule detects anomalous API behavior by examining Cloud Audit Logs for requests to Google Cloud services that a principal has not seen before. For more information, see Event Threat Detection rules.
December 10, 2021
Feature
Event Threat Detection, a built-in service of Security Command Center, launched the Evasion: Access from Anonymizing Proxy rule to General Availability . This rule detects Google Cloud service modifications that originated from anonymous proxy IP addresses, like Tor IP addresses. For more information, see Event Threat Detection rules.
December 07, 2021
Feature
To facilitate the flow of information between Security Command Center and third-party systems, a resource called ExternalSystems was added under the Finding object. A finding can contain multiple ExternalSystems fields.
The ExternalSystems resource can contain any of the following:
Third-party SIEM/SOAR fields within Security Command Center
External system information
External system finding fields
A caller with the Security Center External Systems Editor
( roles/securitycenter.externalSystemsEditor ) IAM role can update an ExternalSystems object using the organizations.sources.findings.externalSystems.patch API.
Feature
Event Threat Detection, a built-in service of Security Command Center, released the Exfiltration: BigQuery Data Extraction rule. This rule is available in Preview . It detects events where an organization's BigQuery data is exported to an externally visible Cloud Storage bucket. For more information, see Event Threat Detection rules .
November 19, 2021
Feature
Security Command Center has launched Mute Findings in general availability.
Mute Findings is a powerful volume management feature that lets you create filters to automatically hide or suppress current and future findings based on criteria you specify. The feature can save you time from reviewing or responding to security findings for assets that are isolated, fall within acceptable business parameters, or aren't relevant to your organization based on your company's policies.
To learn more, see Mute findings in Security Command Center .
November 17, 2021
Feature
Web Security Scanner, a built-in service of Security Command Center, released the SERVER_SIDE_REQUEST_FORGERY finding type in general availability.
For more information, see Remediating Web Security Scanner findings .
October 26, 2021
Issue
An issue that resulted in Security Command Center incorrectly reporting findings for some monitoring vulnerability detectors has been fixed.
Due to changes made on September 20, 2020 in the logging source upon which FIREWALL_NOT_MONITORED , NETWORK_NOT_MONITORED , ROUTE_NOT_MONITORED , and SQL_INSTANCE_NOT_MONITORED findings in Security Health Analytics are predicated, the remediation instructions for those findings were inaccurate.
The issue is resolved. Findings are being generated accurately and you are being properly alerted of misconfigurations in your organization.
If you want to enable monitoring in order to remediate these findings, you will need to update the logs-based metrics for these findings. Updated filters are available in the findings themselves and product documentation:
Vulnerabilities findings
Remediating Security Health Analytics findings
If you have questions or need assistance, contact Google Cloud Support or Google Cloud Billing Support .
October 25, 2021
Feature
The following detectors for unsafe Google Groups changes are generally available ( GA ):
Credential Access: Privileged Group Opened To Public
Credential Access: Sensitive Role Granted To Hybrid Group
Credential Access: External Member Added To Privileged Group
For more information, see Unsafe Google Groups changes .
October 13, 2021
Feature
Event Threat Detection, a built-in service of Security Command Center Premium, launched an integration with Chronicle that lets you perform advanced analysis of threat findings.
The integration lets you seamlessly send findings to Chronicle, a Google Cloud service that you can use to investigate threats and pivot through related actions and events in a unified timeline. Chronicle enriches Event Threat Detection findings, helping you identify indicators of interest and simplify investigations.
To learn more about Chronicle, see Chronicle overview . For instructions on sending Event Threat Detection findings to Chronicle, see Investigate findings in Chronicle .
October 05, 2021
Feature
Security Health Analytics, a built-in service of Security Command Center, released new detectors in general availability .
The following detectors, available only in Security Command Center's Premium tier , detect vulnerabilities in your Google Kubernetes Engine clusters and expand the number of detectors that support the CIS Google Kubernetes Engine (GKE) Benchmark v1.0.0:
ALPHA_CLUSTER_ENABLED : Alpha cluster features are enabled for a GKE cluster.
BINARY_AUTHORIZATION_DISABLED : Binary Authorization is disabled on a GKE cluster.
CLUSTER_SECRETS_ENCRYPTION_DISABLED : Application-layer secrets encryption is disabled on a GKE cluster.
CLUSTER_SHIELDED_NODES_DISABLED : Shielded GKE nodes are not enabled for a cluster.
INTEGRITY_MONITORING_DISABLED : Integrity monitoring is disabled for a GKE cluster.
INTRANODE_VISIBILITY_DISABLED : Intranode visibility is disabled for a GKE cluster.
NODEPOOL_SECURE_BOOT_DISABLED : Secure Boot is disabled for a GKE cluster.
RELEASE_CHANNEL_DISABLED : A GKE cluster is not subscribed to a release channel.
For more information, see Container vulnerability findings . To learn how to remediate vulnerabilities, see Remediating Security Health Analytics findings
September 14, 2021
Feature
Event Threat Detection, a built-in service of Security Command Center Premium, has launched new detectors in public preview .
The following detectors monitor your Google Workspace and Cloud Audit logs and alert you when external members are added to privileged Google Groups—groups that are granted sensitive IAM roles and permissions:
Credential Access: Privileged Group Joinability Risk : Detects when Google Groups are changed to be accessible to the general public
Persistence: IAM Anomalous Group Grant : Detects when sensitive roles are granted to privileged Google Groups with external members
Credential Access: External Member In Privileged Group : Detects when an external member is added to a privileged Google Group
The following detectors monitor your Admin Activity logs and alert you to suspicious changes in Compute Engine instances:
Persistence: Compute Engine Admin Added SSH Key : Detects modification of the Compute Engine instance metadata ssh key value on established instances
Persistence: Compute Engine Admin Added Startup Script : Detects modification of the Compute Engine instance metadata startup script value on established instances
The Persistence: IAM Anomalous Grant detector is enhanced and detects when sensitive roles are granted to users and service accounts.
For more information on Event Threat Detection findings, see Rules . To learn how Event Threat Detection monitors changes in Google Groups and defines sensitive roles, see Unsafe Google Group changes .
September 07, 2021
Feature
VM Manager vulnerability reports , which are in preview, are now available in Security Command Center Premium. The reports identify vulnerabilities in
operating systems installed on Compute Engine virtual machines, including
Common Vulnerabilities and Exposures (CVEs) .
For more information on integrating VM Manager with Security Command Center, see VM Manager .
August 11, 2021
Feature
Event Threat Detection, a built-in service of Security Command Center Premium, has launched new detectors to protect your Google Workspace domains in general availability. The detectors identify suspicious activities in member accounts and your Admin Console, including leaked passwords, attempted account breaches, settings changes, and possible government-backed attacks. For more information, see Event Threat Detection overview .
Feature
Container Threat Detection, a built-in service of Security Command Center Premium, has launched a new detector, Malicious Script Executed , in general availability. The detector uses natural language processing to evaluate bash scripts and determine if they are malicious. For more information, see Container Threat Detection overview
Feature
Security Command Center findings now include two new attributes that provide additional information about the type of finding and the activity that triggered it. The attributes include the following:
Indicator : displayed as indicator . This is an indicator of compromise (IoC), or artifact, observed on a network or in an operating system that, with high confidence, indicates a computer intrusion.
Finding Class : displayed as findingClass . Indicates the type of finding. The following list includes finding classes and their descriptions:
Threat : unwanted or malicious activity
Vulnerability : a potential weakness in software that increases risk to the confidentiality, integrity, and availability of your resources
Misconfiguration : a potential weakness in a resource's configuration that increases risk
Observation : a security observation provided for informational purposes
To learn more about findings, see the Findings tab in Using the Security Command Center dashboard .
Announcement
Documentation
Security Command Center documentation now includes a page that maps resource type formats between Cloud Asset Inventory and Security Command Center. The services use different naming conventions for resource types. For more information, see Resource type formats in Security Command Center .
July 19, 2021
Feature
Security Health Analytics , a built-in service of Security Command Center, has launched a new detector, DATASET_CMEK_DISABLED , in general availability. The detector, available to Security Command Center Premium customers, detects BigQuery datasets that are not encrypted using customer-managed encryption keys (CMEK). For more information, see the DATASET_SCANNER table in Vulnerabilities findings .
Feature
Event Threat Detection, a built-in service of Security Command Center Premium, has launched a public preview of new detectors to protect your Google Workspace domains. The detectors identify suspicious activities in member accounts and your Admin Console, including leaked passwords, attempted account breaches, settings changes, and possible government-backed attacks. For more information, see Event Threat Detection overview .
June 07, 2021
Deprecated
Security Command Center Legacy, previously known as Cloud Security Command Center, and Event Threat Detection Legacy have been permanently disabled.
To continue benefiting from Security Command Center , you must migrate your organizations to Security Command Center's free Standard tier or Premium tier. Event Threat Detection , a built-in service of Security Command Center, is available only in the Premium tier.
For information on upgrading to Security Command Center Standard or Premium, see Migrate from legacy Security Command Center products .
May 24, 2021
Feature
Security Command Center Premium has launched project- and folder-level roles in general availability. The feature lets you grant users Identity and Access Management (IAM) roles for specific folders and projects. You have more granular control over who can access what resources throughout your organization. For more information, see Access control .
You must be a Security Command Center Premium customer to use this feature. Security Command Center Standard continues to support granting roles only at the organization level. To subscribe to Security Command Center Premium, contact your sales representative.
Change
Security Command Center now supports two versions of CIS Benchmarks for Google Cloud Platform Foundation :
CIS Google Cloud Computing Foundations Benchmark v1.1.0 (CIS Google Cloud Foundation 1.1)
CIS Google Cloud Computing Foundations Benchmark v1.0.0 (CIS Google Cloud Foundation 1.0)
For more information about supported compliance standards, see Detectors and compliance .
Change
Security Health Analytics, a built-in service of Security Command Center, has expanded the number of detectors in the Standard tier. The Standard tier, which is free of charge, now includes the following detectors:
LEGACY_AUTHORIZATION_ENABLED : Legacy Authorization is enabled on Google Kubernetes Engine (GKE) clusters.
OPEN_CISCOSECURE_WEBSM_PORT : A firewall is configured to have an open CISCOSECURE_WEBSM port that allows generic access.
OPEN_DIRECTORY_SERVICES_PORT : A firewall is configured to have an open DIRECTORY_SERVICES port that allows generic access.
OPEN_TELNET_PORT : A firewall is configured to have an open TELNET port that allows generic access.
PUBLIC_COMPUTE_IMAGE : A Compute Engine image is publicly accessible.
For a complete list of detectors in the Standard tier, see Pricing . For detailed information about all Security Health Analytics detectors, see Vulnerabilities findings .
May 05, 2021
Feature
Security Command Center Premium has launched Continuous Exports for Pub/Sub in general availability. The feature simplifies the process of creating a NotificationConfig and automates the export of new findings to Pub/Sub.
You must be a Security Command Center Premium customer to use the feature. Security Command Center Standard continues to support one-time exports . To subscribe to Security Command Center Premium, contact your sales representative.
Announcement
Security Health Analytics, a built-in service of Security Command Center, has launched a new detector, PUBSUB_CMEK_DISABLED , in general availability. The detector, available to Security Command Center Premium customers, identifies Pub/Sub topics that are not encrypted with customer-managed encryption keys (CMEK). For more information, see the PUBSUB_SCANNER table in Vulnerabilities findings .
Change
Event Threat Detection, a built-in service of Security Command Center, has launched a new detector in general availability. Discovery: Service Account Self-Investigation detects when a service account credential is used to investigate the roles associated with that same service account. For more information on detectors, see Event Threat Detection conceptual overview .
Announcement
Documentation
Event Threat Detection and Container Threat Detection documentation now includes examples of JSON output for findings. The examples show the data structure, objects, and properties present in findings. For more information, see the Example finding formats sections of Using Event Threat Detection and Using Container Threat Detection .
Security Command Center documentation now includes guidance on Optimizing Security Command Center and an overview of Data and infrastructure security .
Security Health Analytics documentation now includes instructions for enabling detectors that are not turned on by default. For more information, see Enabling Security Health Analytics detectors .
April 07, 2021
Breaking
Security Command Center Legacy, previously known as Cloud Security Command Center, and Event Threat Detection Legacy are being permanently disabled for all customers on
June 7, 2021.
If you onboarded to Security Command Center before May 2020, or Event Threat Detection before June 2020, and never upgraded to Security Command Center's Standard tier or Premium tier, you are using a legacy product.
To continue benefiting from Security Command Center and Event Threat Detection without an interruption in service, customers using legacy products must migrate their organizations to Security Command Center Standard or Premium. Event Threat Detection, a built-in service of Security Command Center, is available only in the Premium tier.
For details on upgrading legacy products, see Migrate from legacy Security Command Center products .
March 08, 2021
Change
Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability:
Detects resources that are not using customer-managed encryption keys (CMEK)
BUCKET_CMEK_DISABLED
DISK_CMEK_DISABLED
NODEPOOL_BOOK_CMEK_DISABLED
SQL_CMEK_DISABLED
Detects vulnerabilities in Compute Engine instances
DEFAULT_SERVICE_ACCOUNT_USED
SHIELDED_VM_DISABLED
Detects publicly accessible Cloud KMS keys
KMS_PUBLIC_KEY
Detects out-of-region Compute Engine resources
ORG_POLICY_LOCATION_RESTRICTION
Detects misconfiguration of SQL instances
SQL_CROSS_DB_OWNERSHIP_CHAINING
SQL_CONTAINED_DATABASE_AUTHENTICATION
SQL_CROSS_DB_OWNERSHIP_CHAINING
SQL_LOCAL_INFILE
SQL_LOG_CHECKPOINTS_DISABLED
SQL_LOG_CONNECTIONS_DISABLED
SQL_LOG_DISCONNECTIONS_DISABLED
SQL_LOG_LOCK_WAITS_DISABLED
SQL_LOG_MIN_DURATION_STATEMENT_ENABLED
SQL_LOG_MIN_ERROR_STATEMENT
SQL_LOG_TEMP_FILES
For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
Change
Event Threat Detection, a built in service of Security Command Center, launched a preview for a new detector.
Service account self-investigation detects when a service account is used to investigate roles associated with that same service account. For more information on Event Threat Detection detectors, see Event Threat Detection conceptual overview .
Announcement
Documentation
Security Health Analytics documentation now includes more detailed information about detectors, including supported assets and scan configurations. For more information, see Vulnerabilities findings .
The Security Health Analytics remediation page now includes suggested instructions to resolve all Security Health Analytics findings. For more information, see Remediating Security Health Analytics findings .
Event Threat Detection documentation now includes additional details on cloud logs used by the service. For more information, see Event Threat Detection conceptual overview .
February 05, 2021
Change
Security Command Center's v1 API now includes a Severity field for Findings.
The Severity field indicates the severity of a finding, as determined by the finding provider, and is included with all findings. The field is managed by finding providers and you are cautioned to not modify its values.
Uses for the field include listing findings of a certain severity level or grouping findings by severity level.
Read Using the Security Command Center dashboard to learn more about findings and finding severity.
Change
Event Threat Detection, a built-in service of Security Command Center Premium, has launched previews for two new detectors.
IAM: Anomalous IP geolocation and IAM: Anomalous user agent detect anomalous connections to Google Cloud resources based on location and user agent, respectively.
Read more about available detectors in Event Threat Detection conceptual overview .
Announcement
Documentation
New documentation includes guides on enabling real-time email and chat notifications and investigating and responding to threats .
December 01, 2020
Announcement
Container Threat Detection , a built-in service of Security Command Center Premium, is now in general availability. Read these notes to learn about updates, usability improvements, and new features. See our blog post, Monitor and secure your containers with new Container Threat Detection , to learn more.
Change
Container Threat Detection now supports Google Kubernetes Engine (GKE) versions on the Stable channel. There are currently no plans to add support for GKE version 1.14.
Change
Activation latency for newly created clusters has been improved.
Fixed
A bug that blocked some information from appearing in the the process section of Added Library Loaded findings is fixed.
Fixed
A bug that blocked the proper display of the resource name for regional clusters in Added Library Loaded findings is fixed.
Announcement
Container Threat Detection documentation includes updated information about compatibility with GKE and Virtual Private Cloud.
Read Using Container Threat Detection for more information.
October 08, 2020
Feature
Event Threat Detection, a built-in service of Security Command Center Premium, now includes two new detectors to monitor your organization's BigQuery resources. The detectors identify data exfiltration - resources saved outside of your organization or attempts to access protected data.
Read more about available detectors in Event Threat Detection conceptual overview .
Feature
The Security Command Center API now includes a severity field for Findings. This feature is available using Security Command Center's v1p1beta1 API .
September 08, 2020
Feature
Security Command Center Premium is now in general availability ( Container Threat Detection remains in beta). Read these notes to learn about updates, usability improvements, and new features.
Feature
Improved Summary Dashboard
A new set of interactive charts and tables provide a high-level overview of all threats and vulnerabilities.
An updated time selector lets you choose preset and customizable time ranges for reviewing findings and creating reports.
New page headers provide users with more page-specific context.
Learn more about Using the Security Command Center dashboard .
Feature
Onboarding and configuration upgrades
A streamlined interface lets you manage organization-wide service enablement settings.
A dedicated settings page for integrated services has been added to the configuration interface.
Learn more about Setting up Security Command Center .
Change
Security Health Analytics now supports real-time detections, with some exceptions . Read more about Security Health Analytics detectors and findings .
Feature
gcloud integration with new, simplified Beta APIs ( Alpha )
The gcloud command line interface can now access configuration functionality through new Beta APIs. The Beta APIs provide stable, programmatic interaction equivalent in functionality to the Security Command Center interface. Learn to use gcloud to manage Security Command Center settings .
Feature
Documentation
New documentation includes details on onboarding and enablement in the Security Command Center latency overview and updates on billing tiers. For more information, read our Pricing guide and visit product pages.
Feature
Managed Web Security Scans are now available to all Security Command Center Premium users. Learn more about managed scans in our Overview of Web Security Scanner .
August 24, 2020
Feature
Audit logs are now available in Security Command Center as part of Cloud Audit Logs. Learn more about Security Command Center audit logging .
July 27, 2020
Deprecated
Security Command Center v1beta1 API will be disabled on Jan. 31, 2021. All users will be required to migrate to Security Command Center v1 API, which is now in general availability.
Update to Google-provided v1 API client libraries .
Move your client libraries and HTTP/grpc calls to v1 by following instructions in the reference documentation for service
endpoints and SDK
configuration .
If you call this service using your own libraries, follow the guidance in our Security Command Center API
Overview when making API requests.
To use ListFindings calls in the v1 API, update your response handling to respond to an extra layer of object nesting, as shown below:
v1beta1: response.getFindings().forEach( x -> ....)
v1: response.getListFindingsResults().forEach(x -> { x.getFinding(); .... })
Additional changes to the v1 API are listed below. Learn more about Using the Security Command Center API .
Breaking
The finding category of 2SV_NOT_ENFORCED is being renamed MFA_NOT_ENFORCED .
Impact: Case-sensitive finding notification filters, post-processing, and alerting based on the previous finding category name may fail.
Recommendation: Update any post-processing to use the new category name.
Breaking
The nodePools finding source property will be removed from the OVER_PRIVILEGED_SCOPES findings and replaced with a source property named VulnerableNodePools .
Impact: Finding notification filters, post-processing and alerting based on this finding source property may fail.
Recommendation: Modify workflows as necessary to utilize the new VulnerableNodePools source property.
Breaking
The ProjectId source property from all Security Health Analytics findings will be removed.
Impact: Finding notification filters, post-processing, and alerting based on the finding source property may fail.
Recommendation: Update workflows to utilize the project id in the resource.project_display_name field of a ListFindingsResult .
Breaking
The SourceRanges finding source property from findings in OPEN_FIREWALL findings will be replaced with a new ExternalSourceRanges , which will contain a subset of the values from the SourceRanges property.
Impact: Finding notification filters, post-processing and alerting based on the finding source property will fail.
Recommendation: Modify your workflows as necessary to utilize the new ExternalSourceRanges source property.
Breaking
As of Sept. 1, 2020, the ListFindings API will no longer support searching on finding properties that are longer than 7,000 characters.
Impact: Searches on strings that are longer than 7,000 characters will not return expected results. For example, if a partial string match filter has a match at the 7,005th character on a property in a finding, that finding will not be returned because that match is past the 7,000-character threshold. An exception will not be returned.
Recommendation: Customers can remove filter restrictions (e.g. x : "some-value") that are supposed to match very long properties. The results can then be filtered locally to remove findings whose strings do not match designated criteria. Learn more about filtering findings .
Breaking
The ExceptionInstructions source property will be removed from all Security Health Analytics findings.
Impact: Finding notification filters, post-processing, and alerting based on the finding source property may fail.
In progress: A new property that will indicate the current state of findings is being developed.
Breaking
The Allowed finding source property from OPEN_FIREWALL findings will be replaced with changed a new field named ExternallyAccessibleProtocolsAndPorts , which will contain a subset of the values from the Allowed property.
Impact: Finding notification filters, post-processing, and alerting based on the finding source property will fail.
Recommendation: Modify your workflows as necessary to utilize the new ExternallyAccessibleProtocolsAndPorts source property.
Breaking
The SeverityLevel finding source property for all Security Health Analytics findings will be removed and replaced with a field named Severity , which retains the same values.
Impact: Finding notification filters, post-processing, and alerting based on the SeverityLevel finding source property will no longer be possible.
Recommendation: Replace the SeverityLevel finding source property with the Severity finding attribute property to retain existing functionality.
Breaking
As of Jan. 31, 2021, the UpdateFinding API will no longer support storing string properties that are longer than 7,000 characters.
Impact: Calls to UpdateFinding that seek to store string properties longer than 7,000 characters will be rejected with an invalid argument error.
Recommendation: Consider storing string properties longer than 7,000 characters as JSON structs or JSON lists. Learn more about writing findings .
Breaking
The AssetSettings finding source property from PUBLIC_SQL_INSTANCE , SQL_PUBLIC_IP , SSL_NOT_ENFORCED , AUTO_BACKUP_DISABLED , SQL_NO_ROOT_PASSWORD , SQL_WEAK_ROOT_PASSWORD finding types will be removed, as it contains data duplicated from the asset entity.
Impact: Finding notification filters, post-processing, and alerting based on the finding source property will fail.
Recommendation: Replacing the AssetSettings finding source property with the Settings resource property from the asset underlying the finding will retain existing functionality.
Change
The CompatibleFeatures source property in WEAK_SSL_POLICY findings will use a list instead of a character-separated string value.
Impact: Finding notification filters, post-processing, and alerting based on the finding source property will need to be updated to take advantage of the new data type for findings.
Recommendation: Update workflows to utilize the new data type.
Change
The OffendingIamRoles source property in extensions of IAM Scanner Configurations will use structured data instead of a JSON-formatted string.
Impact: Finding notification filters, post-processing, and alerting based on the finding source property will need to be updated to take advantage of the new data type on findings of the following categories: ADMIN_SERVICE_ACCOUNT , NON_ORG_IAM_MEMBER , PRIMITIVE_ROLES_USED , OVER_PRIVILEGED_SERVICE_ACCOUNT_USER , REDIS_ROLE_USED_ON_ORG , SERVICE_ACCOUNT_ROLE_SEPARATION , KMS_ROLE_SEPARATION .
Recommendation: Update workflows to utilize the new data type.
Change
The AlertPolicyFailureReasons source property in specific Monitoring findings from Security Health Analytics will use a list instead of a character-separated string value.
Impact: Finding notification filters, post-processing and alerting based on the finding source property will need to be updated to take advantage of the new data type for findings of the following categories: AUDIT_CONFIG_NOT_MONITORED , BUCKET_IAM_NOT_MONITORED , CUSTOM_ROLE_NOT_MONITORED , FIREWALL_NOT_MONITORED , NETWORK_NOT_MONITORED , OWNER_NOT_MONITORED , ROUTE_NOT_MONITORED , SQL_INSTANCE_NOT_MONITORED .
Recommendation: Update workflows to utilize the new data type.
Change
The QualifiedLogMetricNames source property in specific Monitoring findings from Security Health Analytics will use a list instead of a character-separated string value.
Impact: Finding notification filters, post-processing and alerting based on the finding source property will need to be updated to take advantage of the new data type for findings of the following categories: AUDIT_CONFIG_NOT_MONITORED , BUCKET_IAM_NOT_MONITORED , CUSTOM_ROLE_NOT_MONITORED , FIREWALL_NOT_MONITORED , NETWORK_NOT_MONITORED , OWNER_NOT_MONITORED , ROUTE_NOT_MONITORED , SQL_INSTANCE_NOT_MONITORED .
Recommendation: Update workflows to utilize the new data type.
May 12, 2020
Feature
The Security Command Center Premium tier includes:
Security Health Analytics
Web Security Scanner managed scans
Event Threat Detection
Container Threat Detection
Learn more about the Security Command Center Premium tier .
Feature
Security Command Center Premium and Standard tiers are now available.
Deprecated
The Event Threat Detection API will be deprecated in the coming months. Similar functionality is available in the Security Command Center API settings feature.
Feature
Container Threat Detection currently supports the following Kubernetes Engine
versions on the Regular and Rapid channels :
>= 1.15.9-gke.12
>= 1.16.5-gke.2
>= 1.17
In a future update, Container Threat Detection will support version 1.14 and the Stable
channel.
April 10, 2020
Feature
Security Health Analytics is now in general availability.
Learn about the vulnerability findings provided by Security Health Analytics.
Get started with Security Health Analytics .
March 23, 2020
Feature
The Notifications API is now in general availability. Get started with the notifications API .
Change
The eventType field was removed from organizations.notificationConfigs.create in the v1 API. Learn more about creating a NotificationConfig .
February 14, 2020
Change
Security Command Center roles inherit Web Security Scanner roles as follows:
The securitycenter.adminViewer role inherits the permissions of the cloudsecurityscanner.viewer role.
The securitycenter.adminEditor role inherits the permissions of the cloudsecurityscanner.editor role.
For information about how to view all of the permissions that are associated with a role, see the IAM documentation about Getting the role metadata .
February 13, 2020
Feature
The notifications API is now in beta:
Send new findings and updated findings notifications to a Pub/Sub topic.
Filter notifications by provider source, finding type, category or any other finding fields, properties or security marks.
Get started with the notifications API .
Change
Security Command Center tools will become obsolete in future Security Command Center releases, when their functionalities are added as built-in features. Support is offered on best-effort basis only for all Security Command Center tools.
November 11, 2019
Change
Cloud SCC now supports full JSON with arrays and JSON objects as potential property types. This includes support for sorting on JSON object sub-fields, and filtering on:
Array elements
Full JSON objects with partial string match
JSON object sub-fields
Learn more about Filtering and sorting findings .
October 14, 2019
Feature
Security Health Analytics is now in beta and can now be enabled in the Sources Management page of Cloud SCC.
Feature
A new Vulnerabilities tab in Cloud SCC displays a dashboard that summarizes Security Health Analytics findings. This dashboard includes information about CIS benchmarks and recommended remediations.
Change
Security Health Analytics no longer requires separate service account setup or permissions. Instead, it uses the Cloud SCC service account that's created for you during signup.
August 20, 2019
Change
The following Security Health Analytics finding type names have changed:
Old Name
New Name
LOGGING_DISABLED
CLUSTER_LOGGING_DISABLED
MONITORING_DISABLED
CLUSTER_MONITORING_DISABLED
NO_ROOT_PASSWORD
SQL_NO_ROOT_PASSWORD
WEAK_ROOT_PASSWORD
SQL_WEAK_ROOT_PASSWORD
August 05, 2019
Change
findingType string XSS_CALLBACK changed to XSS.
Feature
API updated to v1.
May 10, 2019
Issue
Using VPC Service Controls currently blocks Cloud SCC asset discovery inside VPC Service perimeters for the following asset types:
Compute Engine
Addresses
Routes
VPN Tunnels
Cloud Storage Buckets
GKE Clusters
This is expected to be fixed in a future release.
For information about troubleshooting access issues, see VPC Service Controls Troubleshooting . To work around the access to these assets, see Granting access from the internet with access levels .
April 10, 2019
Feature
Cloud SCC is now in general availability (GA). These release notes include updated items from beta and new items for GA.
Fixed
gcloud command-line tool support for Cloud SCC is now available.
Fixed
There are now client libraries available for C#, Go, Java, Node.JS, PHP, Python, and Ruby.
Change
GroupFindingsResponse now includes totalSize .
Change
ListAssetResult has changed.
Beta
v1
Fixed
Previously only active state findings were shown in the UI. You can now also choose to show inactive state findings.
Feature
Assets now include IAM information for organizations, projects, Compute Engine, Cloud Storage, and others where applicable. IAM Policy information can be searched, filtered, and joined with all other Asset information and Security Marks.
Feature
Additional security partner integrations through [Marketplace](https://console.cloud.google.com/marketplace/details/google-cloud-platform/cloud-security-command-center.
Feature
The Cloud SCC dashboard now enables you to select whether just active state findings are displayed or both active and inactive.
Feature
Native integration with Event Threat Detection for log-based threat detection.
Feature
Native integration with Security Health Analytics for native managed vulnerability scanning.
Feature
The Cloud SCC dashboard now enables you to set active or inactive state for each finding.
Feature
Native integrations with Phishing Protection .
Feature
ListFindings and GroupFindings now supports comparison between two points in time. For more information, see the compareDuration parameter .
Feature
You can now export Cloud SCC data as filtered Asset or Findings data to the Cloud Storage bucket and project you select.
Feature
Hello World example app is expanded to include Cloud Functions functions for: removing bucket ACLs, deleting firewall rules, and creating a VM snapshot.
Feature
The Cloud SCC dashboard now enables you to perform a time-diff query for a fixed set of time periods.
Feature
New example apps are available for:
Integrations with Access Transparency Logs, Audit Logging, and Binary Authorization.
Connecting to Splunk.
For more information, see Installing Cloud SCC tools .
Issue
After you've made an IAM policy change on an asset, the updated policy won't appear in Cloud SCC until it's re-scanned. To see current IAM policy before the daily re-scan, trigger an on-demand re-scan and then wait at least 10 minutes to see the updated IAM policies in Cloud SCC.
Issue
Sorting isn't supported for source properties and security marks on the findings changed page.
Issue
Sorting on Asset ID column on the asset page doesn't work as expected.
Issue
After you've created a new asset, the new asset won't appear in Cloud SCC until it's re-scanned. To see current asset state before the daily re-scan, trigger an on-demand re-scan and then wait at least 5 minutes to see the new asset appear in Cloud SCC.
Issue
Code examples are still in progress for C#, Node.js, PHP, and Ruby.
Issue
Sorting on the following findings page columns doesn't work as expected:
eventTime
source property
security mark
id
externalUri
March 26, 2019
Issue
Web Security Scanner does not yet support applications protected by Cloud Identity-Aware Proxy (Cloud IAP).
Feature
API updated to v1beta.
Change
findingType field changed to string value
The findingType field has changed from an enum to a string in the Beta release of the Web Security Scanner API.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

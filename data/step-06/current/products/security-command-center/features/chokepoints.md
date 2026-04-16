---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.687Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Chokepoints"
feature_slug: "chokepoints"
latest_feature_date: "2025-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/activate-scc-project-level-limitations"
keywords:
  - "chokepoints"
  - "surfaces"
  - "security"
  - "command"
  - "center"
  - "premium"
  - "organization"
  - "level"
---

# Chokepoints

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Surfaces chokepoints in Security Command Center Premium at the organization level; Chokepoints are critical severity issues that concentrate multiple attack paths on common resources or resource groups.

## Extended Definition

Surfaces chokepoints in Security Command Center Premium at the organization level; Chokepoints are critical severity issues that concentrate multiple attack paths on common resources or resource groups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/activate-scc-project-level-limitations](https://docs.cloud.google.com/security-command-center/docs/activate-scc-project-level-limitations)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- May 17, 2023 Change With project-level activations of the Security Command Center Premium tier, you can now enable certain Premium-tier threat and vulnerability findings that require organization-level access by activating the Standard tier at the organization level in addition to your project-level activation.
- November 06, 2025 Feature Security Command Center Risk Engine supports Cloud Run attack paths for the following high-value resources: run.googleapis.com/Job run.googleapis.com/Service November 03, 2025 Feature Compliance Manager supports the Security Command Center Premium tier at the organization level.
- June 08, 2023 Feature Usage-based pricing for organization-level activations of Security Command Center You can now use usage-based pricing instead of a fixed-price subscription to activate Security Command Center Premium tier at the organization level.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following: Security Health Analytics overview How to use Security Health Analytics Remediating Security Health Analytics findings Reference of Security Health Analytics findings Security posture service Premium and Enterprise service tiers (requires organization-level activation ) The security posture service is a built-in service for the Security Command Center Premium tier that lets you define, assess, and monitor the overall status of your security in Google Cloud.
- To use VM Manager with project-level activations of Security Command Center Premium, activate the Security Command Center Standard-legacy tier in the parent organization.
- When integrated with the Security Command Center Premium tier, the feature enables organization-level visibility and patch management across all your projects.
- JSON: leaked account credentials finding { "findings" : { "access" : {}, "assetDisplayName" : " PROJECT NAME " , "assetId" : "organizations/ ORGANIZATION ID /assets/ ASSET ID " , "canonicalName" : "projects/ PROJECT ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "category" : "account has leaked credentials" , "contacts" : { "security" : { "contacts" : [ { "email" : " EMAIL ADDRESS " } ] } }, "createTime" : "2022-08-05T20:59:41.022Z" , "database" : {}, "eventTime" : "2022-08-05T20:59:40Z" , "exfiltration" : {}, "findingClass" : "THREAT" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/cat" , "indicator" : {}, "kubernetes" : {}, "mitreAttack" : {}, "mute" : "UNDEFINED" , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID " , "parentDisplayName" : "Cloud Anomaly Detection" , "resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "severity" : "CRITICAL" , "sourceDisplayName" : "Cloud Anomaly Detection" , "state" : "ACTIVE" , "vulnerability" : {}, "workflowState" : "NEW" }, "resource" : { "name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "display name" : " PROJECT NAME " , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "project display name" : " PROJECT NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID " , "parent display name" : " ORGANIZATION NAME " , "type" : "google.cloud.resourcemanager.Project" , "folders" : [] }, "sourceProperties" : { "project identifier" : " PROJECT ID " , "compromised account" : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" , "finding type" : "Potential compromise of a resource in your organization." , "summary message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." , "action taken" : "Notification sent" , "private key identifier" : " SERVICE ACCOUNT KEY ID " , "url" : "https://github.com/ KEY FILE PATH / KEY FILE NAME .json" } } Container Threat Detection Premium and Enterprise service tiers Container Threat Detection can detect the most common container runtime attacks and alert you in Security Command Center and optionally in Cloud Logging.

### "Feature availability with project-level activations \_|\_ Security Command\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-scc-project-level-limitations](https://docs.cloud.google.com/security-command-center/docs/activate-scc-project-level-limitations)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security Health Analytics findings To enable the following Standard-legacy tier finding categories for a project-level activation of Security Command Center Premium, activate Security Command Center Standard-legacy in the parent organization, which enables the finding for all projects in the organization: MFA not enforced Public log bucket You can enable the following Premium tier finding categories in project-level activations of Security Command Center Premium by activating Security Command Center Standard-legacy in the parent organization: Audit config not monitored Bucket IAM not monitored Cluster private Google access disabled CUSTOM ORG POLICY VIOLATION Custom role not monitored Default network DNS logging disabled Egress deny rule not set Firewall not monitored HTTP load balancer KMS project has owner Legacy network Locked retention policy not set Log not exported Network not monitored Object versioning disabled Org policy Confidential VM policy Org policy location restriction OS login disabled Owner not monitored Pod security policy disabled Route not monitored SQL instance not monitored Too many KMS users Weak SSL policy For the complete list of Security Health Analytics findings, see Vulnerabilities findings .
- Event Threat Detection finding categories unavailable with project-level activations The following Event Threat Detection findings require organization-level activations of Security Command Center Premium: Defense evasion: modify VPC service control Initial access: account disabled hijacked Initial access: disabled password leak Initial access: government based attack Initial access: suspicious login blocked Persistence: new geography Persistence: new user agent Persistence: SSO enablement toggle Persistence: SSO settings changed Persistence: strong authentication disabled Persistence: two step verification disabled Privilege escalation: external member added to privileged group Privilege escalation: privileged group opened to public Privilege escalation: sensitive role granted to hybrid group Privilege escalation: suspicious cross-project permission use Privilege escalation: suspicious token generation For a complete list of Event Threat Detection finding categories, see Event Threat Detection rules .
- Integrated Google Cloud services To enable the publication of findings from the following integrated Google Cloud services in a project-level activation of Security Command Center Premium, activate Security Command Center Standard-legacy in the parent organization, which enables the services for all projects in the organization: Sensitive Data Protection Google Cloud Armor Anomaly Detection Google Security Operations You can enable the publication of findings from the following integrated Premium-tier Google Cloud service in project-level Premium-tier activations by activating Security Command Center Standard-legacy in the parent organization: VM Manager Integrations with third party services You can enable the publication of findings from third-party services in project-level activations by activating Security Command Center Standard in the parent organization.
- Sensitive Actions Service finding categories unavailable with project-level activations The following Sensitive Actions Service findings require organization-level activations of Security Command Center Premium: Defense Evasion: Organization Policy Changed Defense Evasion: Remove Billing Admin Persistence: Add Sensitive Role For a complete list of Sensitive Actions Service finding categories, see Sensitive Actions Service findings .


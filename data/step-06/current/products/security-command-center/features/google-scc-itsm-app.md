---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.939Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Google SCC ITSM app"
feature_slug: "google-scc-itsm-app"
latest_feature_date: "2023-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/assign-itsm-tickets"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/bmc-remedy-itsm"
keywords:
  - "scc"
  - "itsm"
  - "app"
  - "sends"
  - "security"
  - "command"
  - "center"
  - "servicenow"
---

# Google SCC ITSM app

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

An app that sends Security Command Center data to ServiceNow IT service management.

## Extended Definition

An app that sends Security Command Center data to ServiceNow IT service management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/assign-itsm-tickets](https://docs.cloud.google.com/security-command-center/docs/assign-itsm-tickets)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/bmc-remedy-itsm](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/bmc-remedy-itsm)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- February 06, 2023 Feature The version 1.0 release of the Google SCC ITSM app and the Google SCC SIR app, which let you send data, such as findings, sources, assets, and audit logs, from Security Command Center to ServiceNow, is generally available.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- For information about downloading and installing the new applications, see Sending Security Command Center data to ServiceNow .
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.

### "Assign tickets based on posture cases \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/assign-itsm-tickets](https://docs.cloud.google.com/security-command-center/docs/assign-itsm-tickets)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Creating cases and grouping findings After the connector has ingested a finding, Security Command Center forwards the finding to a new case if the finding is first of a kind, or an existing case if the finding parameters comply with a grouping mechanism.
- Enterprise service tier This page documents the mechanism of an automatic ticket assignment in Security Command Center Enterprise and explains how to manually assign or reassign tickets using the Security Operations console.
- Home Documentation Security Security Command Center Guides Send feedback Assign tickets based on posture cases Stay organized with collections Save and categorize content based on your preferences.
- For more information about defining the resource owner in Security Command Center Enterprise, refer to Determine ownership for posture findings .

### BMC Remedy ITSM \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/bmc-remedy-itsm](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/bmc-remedy-itsm)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Use Cases Perform triaging action (Update/Create/Delete Records) Actions Ping Description Test connectivity to the BMC Remedy ITSM with parameters provided at the integration configuration page in the Google Security Operations Marketplace tab.
- Configure BMC Remedy ITSM integration in Google Security Operations For detailed instructions on how to configure an integration in Google SecOps, see Configure integrations .
- BMC Remedy ITSM This document describes how to integrate BMC Remedy ITSM with Google Security Operations.
- Action Results Script Result Script Result Name Value Options Example is success True/False is success:False JSON Result { "Work Log ID" : "X" , "Submitter" : "Admin" , "Submit Date" : "2022-01-06T10:42:43.000+0000" , "Assigned To" : null , "Last Modified By" : "Admin" , "Last Modified Date" : "2022-01-06T10:42:43.000+0000" , "Status" : "Enabled" , "Short Description" : "." , "Status History" : null , "Assignee Groups" : "" , "Worknotes" : [ { "Submitter" : "X" , "Detailed Description" : "asdasd" , "Work Log Type" : "X" , "Work Log Submit Date" : "2022-01-06T11:21:56.000+0000" }, { "Submitter" : "X" , "Detailed Description" : "Work Log Entry from Bob." , "Work Log Type" : "X" , "Work Log Submit Date" : "2008-11-07T00:30:41.000+0000" } ] } Case Wall Result type Value/Description Type (Entity \ General) Output message The action should not fail nor stop a playbook execution: If data is available for at least one ID (is success=true): "Successfully returned details regarding incidents in BMC Remedy ITSM for the following ids: {record ids}." If no data is available for at least one ID (is success=true): "Action wasn't able to find details regarding incidents in BMC Remedy ITSM for the following ids: {record ids}." If no data is available for all IDs (is success=false): " No incidents were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Incidents Details".


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.940Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Google SCC SIR app"
feature_slug: "google-scc-sir-app"
latest_feature_date: "2023-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules"
  - "https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini"
keywords:
  - "scc"
  - "sir"
  - "app"
  - "sends"
  - "security"
  - "command"
  - "center"
  - "servicenow"
---

# Google SCC SIR app

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

An app that sends Security Command Center data to ServiceNow Security Incident Response.

## Extended Definition

An app that sends Security Command Center data to ServiceNow Security Incident Response.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- [https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini](https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- February 06, 2023 Feature The version 1.0 release of the Google SCC ITSM app and the Google SCC SIR app, which let you send data, such as findings, sources, assets, and audit logs, from Security Command Center to ServiceNow, is generally available.
- For information about downloading and installing the new applications, see Sending Security Command Center data to ServiceNow .
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.

### "Modifying infoType detectors to refine scan results \_|\_ Sensitive Data\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- Source ID: `site-docs-reference-3`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example returns only 222-22-2222 , because 111-11-1111 is in the Fake Social Security Number column. { "item" : { "table" : { "headers" : [ { "name" : "Fake Social Security Number" }, { "name" : "Real Social Security Number" } ], "rows" : [ { "values" : [ { "stringValue" : "111-11-1111" }, { "stringValue" : "222-22-2222" } ] } ] } }, "inspectConfig" : { "infoTypes" : [ { "name" : "US SOCIAL SECURITY NUMBER" } ], "includeQuote" : true , "ruleSet" : [ { "infoTypes" : [ { "name" : "US SOCIAL SECURITY NUMBER" } ], "rules" : [ { "exclusionRule" : { "excludeByHotword" : { "hotwordRegex" : { "pattern" : "(Fake Social Security Number)" }, "proximity" : { "windowBefore" : 1 } }, "matchingType" : "MATCHING TYPE FULL MATCH" } } ] } ], "minLikelihood" : "POSSIBLE" } } Omit findings in images based on spatial relationships The following JSON snippets illustrate how to configure Sensitive Data Protection to exclude findings in images based on their spatial relationship with other detected objects.
- Because of the exclusion rule, this example doesn't classify 222-22-2222 as a possible US Social Security number. { "item" : { "value" : "The customer sent the product SKU 222-22-2222" }, "inspectConfig" : { "infoTypes" : [ { "name" : "US SOCIAL SECURITY NUMBER" } ], "ruleSet" : [ { "infoTypes" : [ { "name" : "US SOCIAL SECURITY NUMBER" } ], "rules" : [ { "exclusionRule" : { "excludeByHotword" : { "hotwordRegex" : { "pattern" : "(SKU)" }, "proximity" : { "windowBefore" : 10 , "windowAfter" : 10 } }, "matchingType" : "MATCHING TYPE FULL MATCH" } } ] } ], "includeQuote" : true } } Omit findings in an entire column of data The following example illustrates how to exclude findings in an entire column of tabular data if the name of that column matches a regular expression.
- Omit matches if they are located near a string The following example illustrates how to exclude matches on the US SOCIAL SECURITY NUMBER infoType detector if the word "SKU" is within 10 characters before or 10 characters after the finding.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Modifying infoType detectors to refine scan results Stay organized with collections Save and categorize content based on your preferences.

### "Analyze database fleet health using Gemini \_|\_ Database Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini](https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini)
- Source ID: `site-docs-reference-2`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Database Center to learn more about your database fleet health by prompting Gemini to answer questions about the following: Database fleet inventory information Database fleet health Database configuration best practices The following are example prompts to help you learn about your database fleet inventory data: "How many PostgreSQL instances do I have in Tokyo?" "How many of my database resources are not NIST 800-53 compliant?" "Why is it an issue that my database is exposed to ownership chaining?" "Why is it an issue that my database is not logging only DDL statements?" Note: Gemini provides query suggestions and health issues based on all instances and databases in your project.
- 14 (PG), 5.7 (MySQL) Location The region that the database is running in. us-east1 Label A key-value pair assigned to the database. sample:label Signals The set of issues that are applicable to a database resource including categories like availability, data protection, industry compliance, security, and logging.
- Home Documentation Databases Database Center Guides Send feedback Analyze database fleet health using Gemini Stay organized with collections Save and categorize content based on your preferences.
- To determine the number of database resources, for example, you can enter the following prompt: How many of my Postgres 13 databases are affected by security issues?


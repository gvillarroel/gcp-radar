---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.010Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Elastic Stack integration"
feature_slug: "elastic-stack-integration"
latest_feature_date: "2022-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf"
keywords:
  - "elastic"
  - "stack"
  - "integration"
  - "sends"
  - "security"
  - "command"
  - "center"
  - "can"
---

# Elastic Stack integration

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The integration sends Security Command Center data to Elastic Stack; Security Command Center can send findings and assets to Elastic Stack.

## Extended Definition

The integration sends Security Command Center data to Elastic Stack; Security Command Center can send findings and assets to Elastic Stack.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf)

## Supporting Pages

### "Integrate Amazon EC2 with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- Source ID: `site-docs-root-2`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reason: {0}''.format(error.Stacktrace) General Case Wall Table Table Name: Amazon EC2 Instances Table Columns: ID State Type Availability Zone Public IPv4 DNS Public IPv4 address Monitoring Security group name Key name Launch time List Security Groups Describes the specified security groups or all of your security groups.
- Reason: {0}''.format(error.Stacktrace) General Case Wall Table Table Name: Amazon EC2 Instances Table Columns: Security group ID Security group name VPC ID Description Owner ID Ping Test the connectivity to AWS EC2.
- Integrate Amazon EC2 with Google SecOps This document describes how to integrate AWS Elastic Compute Cloud (Amazon EC2) with Google Security Operations (Google SecOps).
- Error is {0}".format(exception.stacktrace) General Revoke Security Group Egress Removes the specified egress rules (outbound rules) from a security group for EC2-VPC.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Feature The version 3.0 release of the Google SCC App for ELK , which lets you send Security Command Center data to Elastic Stack, is generally available.
- Elastic Stack —see Sending Security Command Center data to Elastic Stack and Sending Security Command Center data to Elastic Stack using Docker .
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- September 11, 2024 Change Validate updates to integrations in the Security Command Center Enterprise use case Updates to the threat response playbook blocks and use case flows are available in the SCC Enterprise - Cloud Orchestration & Remediation use case for Security Command Center Enterprise.

### "Integrate AWS WAF with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reason: {0}''.format(error.Stacktrace) General Case Wall Table (if "Scope" == "Regional" or "Both") Table Name: Regional Rule Groups Table Columns: Name ID Description Lock Token ARN General Case Wall Table (if "Scope" == "CloudFront" or "Both") Table Name: CloudFront Rule Groups Table Columns: Name ID Description Lock Token ARN General Remove Entity From Regex Pattern Set Remove string patterns based on entities from the regular expression set in AWS WAF.
- Reason: {0}''.format(error.Stacktrace) General Case Wall Table (if "Scope" == "Regional" or "Both") Table Name: Regional Rule Groups Table Columns: Name ID Description Lock Token ARN General Case Wall Table (if "Scope" == "CloudFront" or "Both") Table Name: CloudFront Rule Groups Table Columns: Name ID Description Lock Token ARN General Remove Pattern From Regex Pattern Set Remove patterns from the regular expression set in AWS WAF.
- Reason: {0}''.format(error.Stacktrace) General Case Wall Table (if "Scope" == "Regional" or "Both") Table Name: Regional Rule ACLs Table Columns: Name ID Description Lock Token ARN General Case Wall Table (if "Scope" == "CloudFront" or "Both") Table Name: CloudFront Rule ACLs Table Columns: Name ID Description Lock Token ARN General Remove Rule From Rule Group Remove a rule from the rule group in AWS WAF.
- Reason: {0}''.format(error.Stacktrace) General Case Wall Table (if "Scope" == "Regional" or "Both") Table Name: Regional Rule Groups Table Columns: Name ID Description Lock Token ARN General Case Wall Table (if "Scope" == "CloudFront" or "Both") Table Name: CloudFront Rule Groups Table Columns: Name ID Description Lock Token ARN General List IP Sets List available IP Sets in AWS WAF.


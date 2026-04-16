---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.182Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center API"
feature_slug: "security-command-center-api"
latest_feature_date: "2019-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-api"
keywords:
  - "security"
  - "command"
  - "center"
  - "provides"
  - "programmatic"
  - "access"
  - "operations"
---

# Security Command Center API

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Security Command Center API provides programmatic access to Security Command Center data and operations.

## Extended Definition

The Security Command Center API provides programmatic access to Security Command Center data and operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-api](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-api)

## Supporting Pages

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root-2`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AWS Identity and Access Management (IAM) This document describes how to integrate AWS Identity and Access Management (IAM) with Google Security Operations.
- Create Users(Dev need to be able to create their data in the company bucket) Create Groups (Developers as a group) Create Policies (John need to assign permissions to the users/group) Attach Policies (John attaches a policy to the group that lets devs read,write,list objects in AWS S3) Add/remove users from group (One of the devs becomes a manager, access should be changed) Before you begin This integration provides native platform capabilities and doesn't require external third-party API keys or credentials for authentication.
- Home Documentation Security Google Security Operations Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Ping Description Test connectivity to AWS IAM with parameters provided at the integration configuration page in the Google Security Operations Marketplace tab.

### "Integrate Azure API with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-api](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-api)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Google Security Operations Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Integrate Azure API with Google SecOps This document explains how to integrate Azure API with Google Security Operations.
- The following example shows an image file converted to a base64-encoded string: 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 Security : For sensitive files (such as malware), select Password Protect Zip .
- This is the Body Payload input used for the following construction examples: { "Id" : "123123" , "sorting" : "asc" } application/x-www-form-urlencoded : The action generates the payload as Id=123123&sorting=asc . application/json : The action generates the following JSON payload: { "Id" : "123123" , "sorting" : "asc" } XML : If the third-party product requires XML, provide an XML-formatted input directly in Body Payload : <?xml version="1.0" encoding="utf-8"?> <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Body> <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/"> <ubiNum>500</ubiNum> </NumberToWords> </soap:Body> </soap:Envelope> File handling The action supports the following workflows for managing files: Downloading files : To return file data as part of the JSON result in base64 format, select Base64 Output .

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- July 17, 2025 Feature The following Container Threat Detection detectors for file monitoring are in Preview : Collection: Pam.d Modification Credential Access: Access Sensitive Files on Nodes Defense Evasion: Disable or modify Linux audit system Defense Evasion: Root Certificate Installed Execution: Suspicious Cron Modification Persistence: Modify ld.so.preload Change The following Security Command Center Enterprise pages in the Google Cloud console now fully replace equivalent pages that you accessed previously in the Google Security Operations console.
- Change The following Security Command Center Enterprise pages that you previously accessed through the Google Security Operations console are now under Security Command Center in the Google Cloud console: Risk Overview Issues Assets (previously called resources ) Findings The Security Command Center Enterprise left navigation also includes links to pages in the Google Security Operations console.
- August 22, 2022 Feature The following attributes were added to the Finding object of the Security Command Center API: Database provides information about access to a database that is related to a finding. serviceAccountKeyName , serviceAccountDelegationInfo , and principalSubject attributes were added to the existing access attribute.
- The new use case, identified by the date August 15, 2024, provides updates to the security operations features of the Enterprise tier of Security Command Center.


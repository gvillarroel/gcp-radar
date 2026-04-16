---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.540Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "VPC Service Controls integration with Service Account Credentials API"
feature_slug: "vpc-service-controls-integration-with-service-account-credentials-api"
latest_feature_date: "2022-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/overview"
keywords:
  - "vpc"
  - "controls"
  - "integration"
  - "with"
  - "account"
  - "credentials"
  - "api"
  - "this"
---

# VPC Service Controls integration with Service Account Credentials API

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

This integration lets VPC Service Controls protect use of the Service Account Credentials API.

## Extended Definition

This integration lets VPC Service Controls protect use of the Service Account Credentials API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter)
- [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging)
- [https://docs.cloud.google.com/vpc-service-controls/docs/overview](https://docs.cloud.google.com/vpc-service-controls/docs/overview)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 276
- Re-rank relevance: N/A

Evidence snippets:
- Limitations The Service Account Credentials integration with VPC Service Controls has no known limitations.
- Service name contactcenterinsights.googleapis.com Details To use CX Insights with VPC Service Controls you must have the following additional APIs inside your perimeter, depending on your integration.
- Service name iamcredentials.googleapis.com Details The API for Service Account Credentials can be protected by VPC Service Controls and the product can be used normally inside service perimeters.
- Limitations Blockchain Node Engine integrations with VPC Service Controls have the following limitations: VPC Service Controls only protects the Blockchain Node Engine API.

### "Troubleshoot common VPC Service Controls issues with Google Cloud services\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter)
- Source ID: `site-docs-root-2`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Container Registry API requests blocked by VPC Service Controls despite being allowed in an ingress or egress rule If you have allowed access to Container Registry using ingress rules with the identity type field set to ANY USER ACCOUNT or ANY SERVICE ACCOUNT , access is blocked by VPC Service Controls.
- You can resolve this issue by creating an egress rule that allows the service agent cloud-cicd-artifact-registry-copier@system.gserviceaccount.com access to the storage.googleapis.com service in the project mentioned in the VPC Service Controls error logs.
- To resolve this issue, add an ingress rule with the aforementioned service agents access to the cloudkms.googleapis.com service in the project mentioned in the VPC Service Controls error logs.
- Egress errors from a service agent while copying Artifact Registry-owned Docker image to a project in a perimeter When you try to copy an Artifact Registry-owned image to your project that is within a VPC Service Controls perimeter, you might encounter egress errors in the logs from the service agent cloud-cicd-artifact-registry-copier@system.gserviceaccount.com .

### VPC Service Controls audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To find audit logs for VPC Service Controls, use the following queries in the Logs Explorer: Query description Expression Violation details based on a denial ID log id ( "cloudaudit.googleapis.com/policy" ) severity = ERROR resource . type = "audited resource" protoPayload . metadata . "@type" = "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" protoPayload . metadata . vpcServiceControlsUniqueId = " UNIQUE ID " Replace UNIQUE ID with the unique ID of the denial.
- Audited operations The following table summarizes which API operations correspond to each audit log type in VPC Service Controls: Audit logs category VPC Service Controls methods Policy Denied audit logs The methods of the services that integrate with VPC Service Controls are supported.
- Violations for an IP address log id ( "cloudaudit.googleapis.com/policy" ) severity = ERROR resource . type = "audited resource" protoPayload . metadata . "@type" = "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" protoPayload . requestMetadata . callerIp = " IP ADDRESS " Replace IP ADDRESS with the IP address of the caller.
- Violations for a service log id ( "cloudaudit.googleapis.com/policy" ) severity = ERROR resource . type = "audited resource" protoPayload . metadata . "@type" = "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" protoPayload . serviceName = " SERVICE NAME " Replace SERVICE NAME with the name of the restricted service.

### Overview of VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/overview](https://docs.cloud.google.com/vpc-service-controls/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security benefits of VPC Service Controls VPC Service Controls helps mitigate the following security risks without sacrificing the performance advantages of direct private access to Google Cloud resources: Access from unauthorized networks using stolen credentials : By allowing private access only from authorized VPC networks, VPC Service Controls helps protect against the risk of data exfiltration presented by clients using stolen OAuth or service account credentials.
- You can configure a perimeter to control the following types of communications: From public internet to customer resources within managed services From virtual machines (VMs) to a Google Cloud service (API) Between Google Cloud services VPC Service Controls doesn't require you to have a Virtual Private Cloud (VPC) network.
- Glossary In this topic, you have learned about several new concepts introduced by VPC Service Controls: VPC Service Controls Technology that enables you to define a service perimeter around resources of Google-managed services to control communication to and between those services. service perimeter A service perimeter around Google-managed resources.
- For more information, see Overview of scoped policies . restricted VIP The restricted VIP provides a private network route for products and APIs supported by VPC Service Controls in order to make data and resources used by those products inaccessible from the internet. restricted.googleapis.com resolves to 199.36.153.4/30 .


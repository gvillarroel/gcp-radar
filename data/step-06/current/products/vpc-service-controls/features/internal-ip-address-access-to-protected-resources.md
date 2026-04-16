---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.526Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Internal IP address access to protected resources"
feature_slug: "internal-ip-address-access-to-protected-resources"
latest_feature_date: "2024-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer"
keywords:
  - "internal"
  - "ip"
  - "address"
  - "access"
  - "to"
  - "protected"
  - "resources"
  - "lets"
---

# Internal IP address access to protected resources

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

Lets access to VPC Service Controls protected resources be allowed based on an internal IP address.

## Extended Definition

Lets access to VPC Service Controls protected resources be allowed based on an internal IP address.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access)
- [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels)
- [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design)
- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)

## Supporting Pages

### "Allow access to protected resources from an internal IP address \_|\_ VPC\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access)
- Source ID: `site-docs-reference`
- Final score: 339
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Allow access to protected resources from an internal IP address Stay organized with collections Save and categorize content based on your preferences.
- This feature lets you do the following tasks: Support basic access level conditions to allow internal IP address ranges of VPC networks.
- Figure 1 shows an example setup that allows access to a specific protected service from an authorized internal IP address.
- When you delete a VPC network that is referenced by an access level or a service perimeter and then recreate another VPC network with the same name, VPC Service Controls doesn't automatically enable internal IP addresses on the recreated VPC network.

### "Allow access to protected resources from outside a perimeter \_|\_ VPC Service\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud NAT has an integration with Private Google Access that automatically enables Private Google Access on the resource's subnet, and keeps the traffic to Google APIs and services internal, as opposed to routing it to the internet using the Cloud NAT gateway external IP address.
- The following examples explain how to create an access level using different conditions: IP address User and service accounts (principals) Device policy Add access levels to service perimeters You can add access levels to a service perimeter when creating the perimeter, or to an existing perimeter: Read about adding access levels when you create a perimeter Read about adding access levels to an existing perimeter Manage access levels For information about listing, modifying, and deleting existing access levels, read Managing access levels .
- Home Documentation Networking VPC Service Controls Guides Send feedback Allow access to protected resources from outside a perimeter Stay organized with collections Save and categorize content based on your preferences.
- Instead of using the Cloud NAT gateway external IP address in the access level for IP-based allowlist , configure an ingress rule to allow access based on other attributes such as the project or service account.

### Design access levels \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then, run the following query: SELECT receiveTimestamp , # time of violation Resource . labels . service , # protected Google Cloud service being blocked protopayload auditlog . methodName , # method name being called resource . labels . project id as PROJECT , # protected project blocking the call protopayload auditlog . authenticationInfo . principalEmail , # caller identity protopayload auditlog . requestMetadata . callerIp , # caller IP JSON EXTRACT ( protopayload auditlog . metadataJson , '$.dryRun' ) as DRYRUN , # dry - run indicator JSON EXTRACT ( protopayload auditlog . metadataJson , '$.violationReason' ) as REASON , # reason for violation protopayload auditlog . metadataJson , # raw violation entry FROM BQ DATASOURCE NAME . cloudaudit googleapis com policy WHERE JSON EXTRACT ( protopayload auditlog . metadataJson , '$.dryRun' ) is null # exclude logs from a dry - run perimeter What's next Learn how to allow access to protected resources from outside the perimeter .
- Cloud NAT has an integration with Private Google Access that automatically enables Private Google Access on the resource's subnet, and keeps the traffic to Google APIs and services internal, instead of routing it to the internet using the Cloud NAT gateway external IP address.
- To allow perimeter access in this case, you need to configure an ingress rule to allow access based on other attributes such as the project or service account, instead of configuring an access level based on the external source IP address.
- To grant controlled access to protected Google Cloud resources, you can use VPC Service Controls access levels.

### "Diagnose an access denial in violation analyzer \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)
- Source ID: `site-docs-reference-2`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sensitive information redaction To protect sensitive data, the violation analyzer redacts the following information in the troubleshooting result: IP address: When an access request originates from a Google Cloud service inside an internal production network, the violation analyzer redacts the IP address of the access request as private .
- When you don't have sufficient permissions to view the restricted resources, the Protected resources accessed section doesn't list the perimeter name and the Resources accessed column displays the involved project with a warning icon.
- The Other resources accessed section lists all the other involved resources, grouped under one of the following states: State Description Unrestricted This state indicates that the resource is not protected by any service perimeter.
- The troubleshooting result of an access denial event can have the following sections: Violation details Violation evaluation Restricted resources Restricted services Ingress Egress VPC accessible services To view the assessment of a specific perimeter component, select the perimeter component from the list or click the arrow right expander arrow next to the perimeter component.


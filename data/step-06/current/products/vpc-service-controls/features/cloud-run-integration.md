---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.550Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Cloud Run integration"
feature_slug: "cloud-run-integration"
latest_feature_date: "2021-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design"
keywords:
  - "run"
  - "integration"
  - "vpc"
  - "controls"
  - "supports"
  - "resources"
  - "within"
  - "perimeter"
---

# Cloud Run integration

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports Cloud Run resources within service perimeter protections.

## Extended Definition

VPC Service Controls supports Cloud Run resources within service perimeter protections.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters)
- [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode)
- [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 263
- Re-rank relevance: N/A

Evidence snippets:
- Limitations VPC Service Controls only supports Cloud Tasks requests to the following targets: Cloud Run functions functions.net endpoints Cloud Run run.app endpoints For more information, see Set up a service perimeter using VPC Service Controls .
- Limitations Because VPC Service Controls enforces boundaries at the project level, Cloud Quotas requests that originate from clients within the perimeter can only access organization resources if the organization sets up an egress rule .
- When a project is added to a VPC Service Controls perimeter, all tag keys and corresponding tag values under the project are considered to be resources within the perimeter.
- Limitations All Apigee runtime projects associated with an API hub instance must reside within the same VPC Service Controls service perimeter as the API hub host project.

### "Create a service perimeter \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters)
- Source ID: `site-docs-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create . gcloud To create a new perimeter in enforced mode , use the gcloud access-context-manager perimeters create command. gcloud access-context-manager perimeters create NAME \ --title = TITLE \ --resources = RESOURCES \ --restricted-services = RESTRICTED-SERVICES \ --ingress-policies = INGRESS-FILENAME .yaml \ --egress-policies = EGRESS-FILENAME .yaml \ [ --access-levels = LEVELS ] \ [ --enable-vpc-accessible-services ] \ [ --vpc-allowed-services = ACCESSIBLE-SERVICES ] \ --policy = POLICY NAME To create a new perimeter in dry run mode , use the gcloud access-context-manager perimeters dry-run create command. gcloud access-context-manager perimeters dry-run create NAME \ --perimeter-title = TITLE \ --perimeter-type = TYPE \ --perimeter-resources = RESOURCES \ --perimeter-restricted-services = RESTRICTED-SERVICES \ --perimeter-ingress-policies = INGRESS-FILENAME .yaml \ --perimeter-egress-policies = EGRESS-FILENAME .yaml \ [ --perimeter-access-levels = LEVELS ] \ [ --perimeter-enable-vpc-accessible-services ] \ [ --perimeter-vpc-allowed-services = ACCESSIBLE-SERVICES ] \ --policy = POLICY NAME Replace the following: NAME is the name of the perimeter.
- For example, the following command creates a new dry run mode perimeter named ProdPerimeter that includes projects example-project and example-project2 , and restricts the Cloud Storage and BigQuery APIs. gcloud access-context-manager perimeters \ dry-run create ProdPerimeter --perimeter-title = "Production Perimeter" \ --perimeter-type = "regular" \ --perimeter-resources = projects/12345,projects/67890 \ --perimeter-restricted-services = storage.googleapis.com,bigquery.googleapis.com \ --perimeter-ingress-policies = ingress.yaml \ --perimeter-egress-policies = egress.yaml \ --policy = 330193482019 API To create a service perimeter, call accessPolicies.servicePerimeters.create .
- Home Documentation Networking VPC Service Controls Guides Send feedback Create a service perimeter Stay organized with collections Save and categorize content based on your preferences.
- To allow access that involves an API client or resources within the perimeter to resources outside a perimeter, do the following: In the Egress rules pane, click Add an egress rule .

### "Dry run mode for service perimeters \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Dry run mode for service perimeters Stay organized with collections Save and categorize content based on your preferences.
- With dry run mode, you can better understand the effect of enabling VPC Service Controls and changes to perimeters in existing environments.
- Because the private VIP allows services that aren't supported by VPC Service Controls, it is possible for compromised code, malware, or a malicious user within your network to exfiltrate data using those unsecured services.
- However, if you use the private VIP, entities within your network will have access to unsecured services (services that are not supported by VPC Service Controls), such as the consumer versions of Gmail and Drive.

### Design access levels \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design)
- Source ID: `site-docs-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- We recommend using Cloud Workstations to access resources within perimeters because VPC Service Controls doesn't support Cloud Shell .
- Then, run the following query: SELECT receiveTimestamp , # time of violation Resource . labels . service , # protected Google Cloud service being blocked protopayload auditlog . methodName , # method name being called resource . labels . project id as PROJECT , # protected project blocking the call protopayload auditlog . authenticationInfo . principalEmail , # caller identity protopayload auditlog . requestMetadata . callerIp , # caller IP JSON EXTRACT ( protopayload auditlog . metadataJson , '$.dryRun' ) as DRYRUN , # dry - run indicator JSON EXTRACT ( protopayload auditlog . metadataJson , '$.violationReason' ) as REASON , # reason for violation protopayload auditlog . metadataJson , # raw violation entry FROM BQ DATASOURCE NAME . cloudaudit googleapis com policy WHERE JSON EXTRACT ( protopayload auditlog . metadataJson , '$.dryRun' ) is null # exclude logs from a dry - run perimeter What's next Learn how to allow access to protected resources from outside the perimeter .
- Resources within the perimeter can be accessed through VMs within the perimeter, from trusted on-premises networks, or from trusted devices.
- To grant controlled access to protected Google Cloud resources, you can use VPC Service Controls access levels.


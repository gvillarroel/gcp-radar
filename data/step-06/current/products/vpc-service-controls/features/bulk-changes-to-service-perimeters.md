---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.561Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Bulk changes to service perimeters"
feature_slug: "bulk-changes-to-service-perimeters"
latest_feature_date: "2020-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/bulk-operations"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access"
keywords:
  - "bulk"
  - "changes"
  - "to"
  - "perimeters"
  - "let"
  - "you"
  - "replace"
  - "all"
---

# Bulk changes to service perimeters

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

Bulk changes to service perimeters let you replace all service perimeters in an organization in one operation using Access Context Manager's Bulk API.

## Extended Definition

Bulk changes to service perimeters let you replace all service perimeters in an organization in one operation using Access Context Manager's Bulk API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/bulk-operations](https://docs.cloud.google.com/vpc-service-controls/docs/bulk-operations)
- [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters)
- [https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints](https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints)
- [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access)

## Supporting Pages

### "Making bulk changes to service perimeters \_|\_ VPC Service Controls \_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/bulk-operations](https://docs.cloud.google.com/vpc-service-controls/docs/bulk-operations)
- Source ID: `site-docs-reference`
- Final score: 331
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If existing service perimeters aren't included in the operation, those service perimeters are deleted. gcloud To bulk replace all service perimeters, use the replace-all command. gcloud access-context-manager perimeters replace-all POLICY NAME \ --source-file = FILE \ --etag = ETAG \ Where: POLICY NAME is the name of your organization's access policy.
- Instead of manually removing each of the etag properties within the perimeters, you can fetch the perimeters without etag properties by specifying a --format with all fields except etag . gcloud access-context-manager perimeters list \ --policy = POLICY NAME \ --format = "json(name,title,description,perimeterType,status,spec,useExplicitDryRunSpec)" Bulk replace service perimeters The following section details how to bulk replace your service perimeters.
- Home Documentation Networking VPC Service Controls Guides Send feedback Making bulk changes to service perimeters Stay organized with collections Save and categorize content based on your preferences.
- Get a list of service perimeters Because bulk operations affect all service perimeters for your organization, you can obtain a complete list of your perimeters.

### "Manage service perimeters \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters)
- Source ID: `site-docs-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To update all of your organization's service perimeters in one operation, see Making bulk changes to service perimeters .
- For example, to ensure that the VPC networks in your perimeter have access only to the Logging and Cloud Storage services, use the following command: gcloud access-context-manager perimeters update example perimeter \ --enable-vpc-accessible-services \ --add-vpc-allowed-services = RESTRICTED-SERVICES,logging.googleapis.com,storage.googleapis.com \ --policy = 11271009391 Add a service to the VPC accessible services To add additional services to the VPC accessible services for your perimeter, use the update command : gcloud access-context-manager perimeters update PERIMETER ID \ --add-vpc-allowed-services = SERVICES Replace the following: PERIMETER ID is the ID of your service perimeter.
- For example, if you enable VPC accessible services and require that the VPC networks in your perimeter have access to the Pub/Sub service, use the following command: gcloud access-context-manager perimeters update example perimeter \ --add-vpc-allowed-services = RESTRICTED-SERVICES,pubsub.googleapis.com \ --policy = 11271009391 Remove a service from the VPC accessible services To remove services from the VPC accessible services for your service perimeter, use the update command : gcloud access-context-manager perimeters update PERIMETER ID \ --remove-vpc-allowed-services = SERVICES Replace the following: PERIMETER ID is the ID of your service perimeter.
- For example, if you enable VPC accessible services and you no longer want the VPC networks in your perimeter to have access to the Cloud Storage service, use the following command: gcloud access-context-manager perimeters update example perimeter \ --remove-vpc-allowed-services = storage.googleapis.com \ --policy = 11271009391 Disable VPC accessible services To disable VPC service restrictions for your service perimeter, use the update command : gcloud access-context-manager perimeters update PERIMETER ID \ --no-enable-vpc-accessible-services \ --clear-vpc-allowed-services Replace the following: PERIMETER ID is the ID of your service perimeter.

### Create custom constraints for VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints](https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.

### "Allow access to protected resources from an internal IP address \_|\_ VPC\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To update the ingress policy for a service perimeter, run the following gcloud CLI command: gcloud access-context-manager perimeters update PERIMETER --set-ingress-policies= FILE NAME Replace the following: PERIMETER : The name of your service perimeter that protects the Cloud Storage project.
- To update the egress policy for a service perimeter, run the following command: gcloud access-context-manager perimeters update PERIMETER --set-egress-policies= FILE NAME Replace the following: PERIMETER : The name of your service perimeter that protects the network host project.
- When you delete a VPC network that is referenced by an access level or a service perimeter and then recreate another VPC network with the same name, VPC Service Controls doesn't automatically enable internal IP addresses on the recreated VPC network.
- This feature lets you do the following tasks: Support basic access level conditions to allow internal IP address ranges of VPC networks.


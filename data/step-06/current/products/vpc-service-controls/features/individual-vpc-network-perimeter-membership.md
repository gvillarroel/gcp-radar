---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.537Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Individual VPC network perimeter membership"
feature_slug: "individual-vpc-network-perimeter-membership"
latest_feature_date: "2023-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters"
keywords:
  - "individual"
  - "vpc"
  - "network"
  - "perimeter"
  - "membership"
  - "controls"
  - "lets"
  - "you"
---

# Individual VPC network perimeter membership

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls lets you add individual VPC networks to a service perimeter and authorize them with ingress rules.

## Extended Definition

VPC Service Controls lets you add individual VPC networks to a service perimeter and authorize them with ingress rules.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access)
- [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management)
- [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters)
- [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters)

## Supporting Pages

### "Set up a VPC Service Controls perimeter for a Virtual Private Cloud network\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Set up a VPC Service Controls perimeter for a Virtual Private Cloud network Stay organized with collections Save and categorize content based on your preferences.
- In the following steps, you verify this concept by using Cloud Shell to attempt to create a VM inside your VPC network, which fails due to the configuration of the VPC Service Controls perimeter.
- Set up your VPC Service Controls perimeter To implement a VPC Service Controls perimeter for a VPC network, you must implement networking controls that deny traffic to external services.
- From the Cloud Shell tab, run the following command to remove the access level. gcloud access-context-manager perimeters update demo perimeter \ --policy = $POLICY ID \ --clear-access-levels From the Cloud Shell tab, create an ingress policy that allows your user identity to ingress to the Compute Engine service only, and apply the policy to your perimeter. cat <<EOF > ingress spec.yaml - ingressFrom: identities: - user: $USERNAME sources: - accessLevel: ' ' ingressTo: operations: - methodSelectors: - method: ' ' serviceName: compute.googleapis.com resources: - ' ' EOF gcloud access-context-manager perimeters update demo perimeter \ --set-ingress-policies = ingress spec.yaml \ --policy = $POLICY ID From the Cloud Shell tab, run the following command to create a Cloud Storage bucket inside the perimeter. gcloud storage buckets create gs:// PROJECT ID -01 The output is similar to the following: "ERROR: (gcloud.storage.buckets.create) HTTPError 403: Request is prohibited by organization's policy." Cloud Shell is a client outside the perimeter, so the VPC Service Controls perimeter blocks Cloud Shell from communicating with restricted services inside the perimeter.

### "VPC networks management in service perimeters \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management)
- Source ID: `site-docs-reference-2`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback VPC networks management in service perimeters Stay organized with collections Save and categorize content based on your preferences.
- Limitations The following are the limitations when you manage VPC networks in service perimeters: You can add VPC networks from another organization to your service perimeter or specify them as an ingress source only if you have the roles/compute.networkViewer role for those networks.
- Manage VPC networks in a service perimeter You can perform the following tasks to manage VPC networks in a perimeter: Add a single VPC network to a perimeter instead of adding an entire host project to the perimeter.
- For example, if your host project contains separate VPC networks for development, test, and production environments, you can create separate perimeters for the development, test, and production networks.

### "Manage service perimeters \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Manage service perimeters Stay organized with collections Save and categorize content based on your preferences.
- For example, to ensure that the VPC networks in your perimeter have access only to the Logging and Cloud Storage services, use the following command: gcloud access-context-manager perimeters update example perimeter \ --enable-vpc-accessible-services \ --add-vpc-allowed-services = RESTRICTED-SERVICES,logging.googleapis.com,storage.googleapis.com \ --policy = 11271009391 Add a service to the VPC accessible services To add additional services to the VPC accessible services for your perimeter, use the update command : gcloud access-context-manager perimeters update PERIMETER ID \ --add-vpc-allowed-services = SERVICES Replace the following: PERIMETER ID is the ID of your service perimeter.
- For example, if you enable VPC accessible services and require that the VPC networks in your perimeter have access to the Pub/Sub service, use the following command: gcloud access-context-manager perimeters update example perimeter \ --add-vpc-allowed-services = RESTRICTED-SERVICES,pubsub.googleapis.com \ --policy = 11271009391 Remove a service from the VPC accessible services To remove services from the VPC accessible services for your service perimeter, use the update command : gcloud access-context-manager perimeters update PERIMETER ID \ --remove-vpc-allowed-services = SERVICES Replace the following: PERIMETER ID is the ID of your service perimeter.
- For example, if you enable VPC accessible services and you no longer want the VPC networks in your perimeter to have access to the Cloud Storage service, use the following command: gcloud access-context-manager perimeters update example perimeter \ --remove-vpc-allowed-services = storage.googleapis.com \ --policy = 11271009391 Disable VPC accessible services To disable VPC service restrictions for your service perimeter, use the update command : gcloud access-context-manager perimeters update PERIMETER ID \ --no-enable-vpc-accessible-services \ --clear-vpc-allowed-services Replace the following: PERIMETER ID is the ID of your service perimeter.

### "Example migration of VPC networks into separate perimeters \_|\_ VPC Service\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Example migration of VPC networks into separate perimeters Stay organized with collections Save and categorize content based on your preferences.
- To enforce the dry-run configurations, run the following command: gcloud access-context-manager perimeters dry-run enforce-all --policy=<access policy number> After you enforce the dry-run configurations, run the following command to describe perimeter-1 : gcloud access-context-manager perimeters describe perimeter-1 --policy=<access policy number> This example produces the following output in which network-host-project and service-project-2 are removed, and VPC1 is added to perimeter-1 . name: accessPolicies/<access policy number>/servicePerimeters/perimeter-1 status: … resources: - projects/<service-project-1 number> - //compute.googleapis.com/projects/<network-host-project>/global/networks/VPC1 Run the following command to describe perimeter-2 : gcloud access-context-manager perimeters describe perimeter-2 --policy=<access policy number> This example produces the following output in which service-project-2 and VPC2 are added to perimeter-2 . name: accessPolicies/<access policy number>/servicePerimeters/perimeter-2 status: … resources: - projects/<service-project-2 number> - //compute.googleapis.com/projects/<network-host-project>/global/networks/VPC2 title: perimeter-2 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- However, the following dry-run error appears in the audit logs for network-host-project for accessing service-project-2 from VM1 : egressViolations: [ 0: { servicePerimeter: "accessPolicies/<access policy number>/servicePerimeters/perimeter-1" source: "//compute.googleapis.com/projects/network-host-project/global/networks/VPC1" sourceType: "Network" targetResource: "projects/<service-project-2 number>" } ] Similarly, Cloud Storage requests from VM2 to service-project-2 don't have dry-run errors, and requests from VM2 to service-project-1 have the following dry-run error in the audit logs for the network-host-project : egressViolations: [ 0: { servicePerimeter: "accessPolicies/<access policy number>/servicePerimeters/perimeter-2" source: "//compute.googleapis.com/projects/network-host-project/global/networks/VPC2" sourceType: "Network" targetResource: "projects/<service-project-1 number>" } ] Enforce the dry-run configuration You must enforce all dry-run configurations at once in one atomic transaction.
- The migration process consists of the following steps: Get the VPC networks and perimeter details Set up a dry-run perimeter configuration Verify the dry-run setup Enforce the dry-run configuration Get the VPC networks and perimeter details In this example, before you start the migration, you must get the list of VPC networks and perimeter details.


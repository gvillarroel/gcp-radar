---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.527Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Sovereign Controls by Partners integration"
feature_slug: "sovereign-controls-by-partners-integration"
latest_feature_date: "2024-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter"
keywords:
  - "sovereign"
  - "controls"
  - "by"
  - "partners"
  - "integration"
  - "vpc"
  - "supports"
  - "with"
---

# Sovereign Controls by Partners integration

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports integration with Sovereign Controls by Partners.

## Extended Definition

VPC Service Controls supports integration with Sovereign Controls by Partners.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- [https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange](https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 259
- Re-rank relevance: N/A

Evidence snippets:
- You get a response with a list of methods and permissions. availableOnRestrictedVip: RESTRICTED VIP STATUS knownLimitations: LIMITATIONS STATUS name: SERVICE ADDRESS serviceSupportStage: SERVICE STATUS supportedMethods: METHODS LIST . . . title: SERVICE NAME In this response, METHODS LIST lists all the methods and permissions supported by VPC Service Controls for the specified service.
- RESTRICTED VIP STATUS Specifies if the service integration with VPC Service Controls is supported by the restricted VIP.
- Limitations VPC Service Controls supports Cloud Scheduler jobs only with the following targets: Cloud Run run.app endpoints Cloud Run functions functions.net endpoints Google Cloud APIs that are VPC Service Controls-compliant (either in Preview or GA)—can be in a different Google Cloud project from your Cloud Scheduler job.
- List supported methods for a service To retrieve the list of methods and permissions supported by VPC Service Controls for a service, run the following command: gcloud access-context-manager supported-services describe SERVICE ADDRESS Replace SERVICE ADDRESS with the service name of the product or service.

### "Services supported by the restricted VIP \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Services supported by the restricted VIP Stay organized with collections Save and categorize content based on your preferences.
- The table includes the following stages of support: GA: This integration is fully supported by the restricted VIP and can be protected by VPC Service Controls perimeters.
- Alpha: This integration receives an alpha-stage level of support for the restricted VIP and can be protected by VPC Service Controls perimeters for testing purposes only.
- Beta: This integration receives a beta-stage level of support for the restricted VIP and can be protected by VPC Service Controls perimeters.

### "Secure data exchange with ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange](https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Access a Google Cloud resource outside the perimeter Share data by using Pub/Sub between two organizations that use VPC Service Controls Share anonymized PHI data with partner organization Grant access to a third-party Compute Engine disk image Read a BigQuery dataset by allowing private access from a VPC network outside the perimeter Load into a Cloud Storage bucket (write) by allowing private access from a VPC network outside the perimeter Share logs in a separate perimeter by allowing projects from multiple perimeters to share logs Access a Google Cloud resource outside the perimeter The following diagram shows a Compute Engine resource inside a service perimeter that requires access to a Cloud Storage resource, which is outside the perimeter: Assume that you have defined the following perimeter: name: accessPolicies/222/servicePerimeters/Example status: resources: - projects/111 restrictedServices: - bigquery.googleapis.com - containerregistry.googleapis.com - storage.googleapis.com title: Example You need to grant read access to a Cloud Storage bucket in project 999 , which is in a different organization.
- Share data by using Pub/Sub between two organizations that use VPC Service Controls The following diagram shows two organizations, Org1 and Org2 , which use VPC Service Controls and share data by using a Pub/Sub topic: Assume that you have defined the following perimeters: Org 1 Perimeter Definition name: accessPolicies/222/servicePerimeters/Example1 status: resources: - projects/111 restrictedServices: - pubsub.googleapis.com title: Example1 Org 2 Perimeter Definition name: accessPolicies/333/servicePerimeters/Example2 status: resources: - projects/222 restrictedServices: - pubsub.googleapis.com title: Example2 To enable data exchange, Org1 must define the following egress rule that allows the subscription and save the file as org1egress.yaml : Org1: Org1's perimeter must allow a Pub/Sub subscription to project 222. echo """ - egressTo: operations: - serviceName: pubsub.googleapis.com methodSelectors: - method: Subscriber.CreateSubscription resources: - projects/222 egressFrom: identityType: ANY IDENTITY """ > org1egress.yaml Org2 must define a corresponding ingress rule allowing the subscription and save the file as org2ingress.yaml .
- You then define the following egress rule in a file and save the file as compute.yaml : echo """ - egressTo: operations: - serviceName: compute.googleapis.com methodSelectors: - method: InstancesService.Insert resources: - projects/999 egressFrom: identityType: ANY IDENTITY """ > compute.yaml Apply the egress rule by running the following command: gcloud beta access-context-manager perimeters update Example --set-egress-policies=compute.yaml Read a BigQuery dataset by allowing private access from a VPC network outside the perimeter The following diagram shows multiple partner VPC networks outside the perimeter that need to read from a BigQuery resource inside a perimeter: You can assume that you use the same perimeter as example 1 : name: accessPolicies/222/servicePerimeters/Example status: resources: - projects/111 restrictedServices: - bigquery.googleapis.com - containerregistry.googleapis.com title: Example Your goal is to allow read access from a VPC network outside the perimeter of various partners.
- Home Documentation Networking VPC Service Controls Guides Send feedback Secure data exchange with ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.

### "Troubleshoot common VPC Service Controls issues with Google Cloud services\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Container Registry API requests blocked by VPC Service Controls despite being allowed in an ingress or egress rule If you have allowed access to Container Registry using ingress rules with the identity type field set to ANY USER ACCOUNT or ANY SERVICE ACCOUNT , access is blocked by VPC Service Controls.
- Accessing a publicly accessible Cloud Storage bucket from within a perimeter If you are trying to access a publicly accessible Cloud Storage bucket from within a service perimeter, VPC Service Controls might block your requests by throwing an egress violation.
- Therefore, for your builds to access resources within the perimeter, you must grant the Cloud Build service account access to the VPC Service Controls perimeter by either adding it to the access level or ingress rule .
- Egress errors from a service agent while copying Artifact Registry-owned Docker image to a project in a perimeter When you try to copy an Artifact Registry-owned image to your project that is within a VPC Service Controls perimeter, you might encounter egress errors in the logs from the service agent cloud-cicd-artifact-registry-copier@system.gserviceaccount.com .


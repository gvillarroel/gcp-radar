---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.542Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "VPC Service Controls integration with Migrate for Compute Engine"
feature_slug: "vpc-service-controls-integration-with-migrate-for-compute-engine"
latest_feature_date: "2022-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange"
keywords:
  - "vpc"
  - "controls"
  - "integration"
  - "with"
  - "migrate"
  - "for"
  - "compute"
  - "engine"
---

# VPC Service Controls integration with Migrate for Compute Engine

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

This integration lets VPC Service Controls protect Migrate for Compute Engine.

## Extended Definition

This integration lets VPC Service Controls protect Migrate for Compute Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter)
- [https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange](https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange)

## Supporting Pages

### "Protect Compute Engine using a VPC Service Controls perimeter \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)
- Source ID: `site-docs-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Protect Compute Engine using a VPC Service Controls perimeter Stay organized with collections Save and categorize content based on your preferences.
- Create a new perimeter with the following details: Title: MyFirstPerimeter Perimeter type: Regular Enforcement mode: Enforced Resources to protect: My-Project-2 project Restricted services: Compute Engine API Verify the perimeter In this section, you can make access requests to the resources in the projects to confirm whether the perimeter protects the intended resources.
- Create a service perimeter Create a service perimeter that protects the Compute Engine API in the My-Project-2 project: In the Google Cloud console, go to the VPC Service Controls page.
- You should see that VPC Service Controls denies your request to access Compute Engine because the MyFirstPerimeter perimeter protects My-Project-2 and the Compute Engine API.

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- Service name compute.googleapis.com Details VPC Service Controls support for Compute Engine offers the following security benefits: Restricts access to sensitive API operations Restricts persistent disk snapshots and custom images to a perimeter Restricts access to instance metadata VPC Service Controls support for Compute Engine also enables you to utilize Virtual Private Cloud networks and Google Kubernetes Engine private clusters inside service perimeters.
- Limitations The Earth Engine Code Editor , a web-based IDE for the Earth Engine JavaScript API, is not supported and VPC Service Controls doesn't allow using the Earth Engine Code Editor with resources and clients inside a service perimeter.
- Google Cloud metadata server For Compute Engine VM instances and GKE nodes, VPC Service Controls protection doesn't apply to the incoming traffic to or the outgoing traffic from Google Cloud metadata server .
- Limitations Blockchain Node Engine integrations with VPC Service Controls have the following limitations: VPC Service Controls only protects the Blockchain Node Engine API.

### "Troubleshoot common VPC Service Controls issues with Google Cloud services\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshoot-services-within-perimeter)
- Source ID: `site-docs-root-2`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Autoscaler not working in perimeters with accessible services and restricted services enabled The autoscaling.googleapis.com isn't integrated with VPC Service Controls, therefore it cannot be added to the restricted services neither to the accessible services.
- Therefore, for your builds to access resources within the perimeter, you must grant the Cloud Build service account access to the VPC Service Controls perimeter by either adding it to the access level or ingress rule .
- To resolve this issue, add an ingress rule with the aforementioned service agents access to the cloudkms.googleapis.com service in the project mentioned in the VPC Service Controls error logs.
- To troubleshoot errors related to the use of VPC Service Controls with Cloud Service Mesh, see Troubleshoot VPC Service Controls issues for managed Cloud Service Mesh .

### "Secure data exchange with ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange](https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access a Google Cloud resource outside the perimeter Share data by using Pub/Sub between two organizations that use VPC Service Controls Share anonymized PHI data with partner organization Grant access to a third-party Compute Engine disk image Read a BigQuery dataset by allowing private access from a VPC network outside the perimeter Load into a Cloud Storage bucket (write) by allowing private access from a VPC network outside the perimeter Share logs in a separate perimeter by allowing projects from multiple perimeters to share logs Access a Google Cloud resource outside the perimeter The following diagram shows a Compute Engine resource inside a service perimeter that requires access to a Cloud Storage resource, which is outside the perimeter: Assume that you have defined the following perimeter: name: accessPolicies/222/servicePerimeters/Example status: resources: - projects/111 restrictedServices: - bigquery.googleapis.com - containerregistry.googleapis.com - storage.googleapis.com title: Example You need to grant read access to a Cloud Storage bucket in project 999 , which is in a different organization.
- Home Documentation Networking VPC Service Controls Guides Send feedback Secure data exchange with ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- Assume that you have defined the following three perimeters: Sensitive 1 name: accessPolicies/222/servicePerimeters/Sensitive1 status: resources: - projects/111 restrictedServices: - bigquery.googleapis.com - containerregistry.googleapis.com - logging.googleapis.com vpcAccessibleServices: enableRestriction: true allowedServices: - RESTRICTED SERVICES title: Sensitive Data 1 Sensitive 2 name: accessPolicies/222/servicePerimeters/Sensitive2 status: resources: - projects/222 restrictedServices: - bigquery.googleapis.com - containerregistry.googleapis.com - logging.googleapis.com vpcAccessibleServices: enableRestriction: true allowedServices: - RESTRICTED SERVICES title: Sensitive Data 2 #Logs name: accessPolicies/222/servicePerimeters/Logs status: resources: - projects/777 restrictedServices: - logging.googleapis.com vpcAccessibleServices: enableRestriction: true allowedServices: - RESTRICTED SERVICES title: Logs Perimeter To allow Sensitive1 and Sensitive2 to write logs to Logs perimeter, define the following egress rule in a file and save the file as logsegress.yaml : echo """ - egressTo: operations: - serviceName: logging.googleapis.com methodSelectors: - method: LoggingServiceV2.WriteLogEntries - method: LoggingService.WriteLogEntries resources: - projects/777 egressFrom: identityType: ANY IDENTITY """ > logsegress.yaml Apply the egress rules by running the following commands: gcloud beta access-context-manager perimeters update Sensitive1 --set-egress-policies=logsegress.yaml gcloud beta access-context-manager perimeters update Sensitive2 --set-egress-policies=logsegress.yaml A similar configuration can be specified for any other sensitive data perimeter that needs to write to the logs perimeter.
- You can define the following ingress and egress rules: Anon Perimeter echo """ - ingressFrom: identityType: ANY IDENTITY sources: - resource: projects/111 ingressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: google.storage.Write - method: google.storage.objects.create resources: - \" \" """ > anoningress.yaml echo """ - egressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: google.storage.Write - method: google.storage.objects.create resources: - projects/999 egressFrom: identityType: ANY IDENTITY """ > anonegress.yaml PHI Perimeter echo """ - egressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: \" \" resources: - projects/222 egressFrom: identityType: ANY IDENTITY """ > phiegress.yaml Apply the ingress and egress rules by running the following commands: gcloud beta access-context-manager perimeters update AnonPerimeter --set-ingress-policies=anoningress.yaml --set-egress-policies=anonegress.yaml gcloud beta access-context-manager perimeters update PhiPerimeter --set-egress-policies=phiegress.yaml Grant access to a third-party Compute Engine disk image The following diagram shows a Compute Engine resource in a service perimeter that requires access to a Compute Engine disk image in a third-party image project that is outside the perimeter: Assume that you have defined the following perimeter: name: accessPolicies/222/servicePerimeters/Example status: resources: - projects/111 - projects/222 restrictedServices: - compute.googleapis.com - containerregistry.googleapis.com title: Example You now need to grant read access to disk images in project 999 , which is in a different organization.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.553Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Ingress and egress rules"
feature_slug: "ingress-and-egress-rules"
latest_feature_date: "2021-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities"
keywords:
  - "ingress"
  - "and"
  - "egress"
  - "rules"
  - "vpc"
  - "controls"
  - "provides"
  - "to"
---

# Ingress and egress rules

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls provides ingress and egress rules to control traffic across service perimeters.

## Extended Definition

VPC Service Controls provides ingress and egress rules to control traffic across service perimeters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)
- [https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange](https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities](https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities)

## Supporting Pages

### Ingress and egress rules \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- Source ID: `site-docs-reference`
- Final score: 400
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Service Controls uses ingress and egress rules to allow access to and from the resources and clients protected by service perimeters.
- When an accessLevel or a resource for a source is set to a specific value instead of " " , VPC Service Controls evaluates both sources and identityType attributes. identityType or identities attribute resources attribute serviceName attribute Once you have finished configuring your ingress policy file, see Updating ingress and egress policies for instructions on applying your ingress policy file to your service perimeter.
- Home Documentation Networking VPC Service Controls Guides Send feedback Ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- This page explains ingress and egress rules for VPC Service Controls.

### "Configure IAM roles in ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)
- Source ID: `site-docs-reference`
- Final score: 370
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you perform an insert object or write API request to projects protected by VPC Service Controls, you must configure ingress and egress rules allowing the storage.objects.delete and storage.objects.create permissions.
- Cloud Key Management Service cloudkms.googleapis.com When you use customer-managed encryption keys (CMEK) , VPC Service Controls doesn't support the use of Cloud KMS roles in the ingress and egress rules.
- Cloud Storage storage.googleapis.com VPC Service Controls supports custom roles for Cloud Storage in the ingress and egress rules, but not the predefined Cloud Storage roles .
- VPC Service Controls uses ingress and egress rules to allow access to and from the resources and clients protected by service perimeters.

### "Secure data exchange with ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange](https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange)
- Source ID: `site-docs-root`
- Final score: 370
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Share data by using Pub/Sub between two organizations that use VPC Service Controls The following diagram shows two organizations, Org1 and Org2 , which use VPC Service Controls and share data by using a Pub/Sub topic: Assume that you have defined the following perimeters: Org 1 Perimeter Definition name: accessPolicies/222/servicePerimeters/Example1 status: resources: - projects/111 restrictedServices: - pubsub.googleapis.com title: Example1 Org 2 Perimeter Definition name: accessPolicies/333/servicePerimeters/Example2 status: resources: - projects/222 restrictedServices: - pubsub.googleapis.com title: Example2 To enable data exchange, Org1 must define the following egress rule that allows the subscription and save the file as org1egress.yaml : Org1: Org1's perimeter must allow a Pub/Sub subscription to project 222. echo """ - egressTo: operations: - serviceName: pubsub.googleapis.com methodSelectors: - method: Subscriber.CreateSubscription resources: - projects/222 egressFrom: identityType: ANY IDENTITY """ > org1egress.yaml Org2 must define a corresponding ingress rule allowing the subscription and save the file as org2ingress.yaml .
- Home Documentation Networking VPC Service Controls Guides Send feedback Secure data exchange with ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- Assume that you have defined the following three perimeters: Sensitive 1 name: accessPolicies/222/servicePerimeters/Sensitive1 status: resources: - projects/111 restrictedServices: - bigquery.googleapis.com - containerregistry.googleapis.com - logging.googleapis.com vpcAccessibleServices: enableRestriction: true allowedServices: - RESTRICTED SERVICES title: Sensitive Data 1 Sensitive 2 name: accessPolicies/222/servicePerimeters/Sensitive2 status: resources: - projects/222 restrictedServices: - bigquery.googleapis.com - containerregistry.googleapis.com - logging.googleapis.com vpcAccessibleServices: enableRestriction: true allowedServices: - RESTRICTED SERVICES title: Sensitive Data 2 #Logs name: accessPolicies/222/servicePerimeters/Logs status: resources: - projects/777 restrictedServices: - logging.googleapis.com vpcAccessibleServices: enableRestriction: true allowedServices: - RESTRICTED SERVICES title: Logs Perimeter To allow Sensitive1 and Sensitive2 to write logs to Logs perimeter, define the following egress rule in a file and save the file as logsegress.yaml : echo """ - egressTo: operations: - serviceName: logging.googleapis.com methodSelectors: - method: LoggingServiceV2.WriteLogEntries - method: LoggingService.WriteLogEntries resources: - projects/777 egressFrom: identityType: ANY IDENTITY """ > logsegress.yaml Apply the egress rules by running the following commands: gcloud beta access-context-manager perimeters update Sensitive1 --set-egress-policies=logsegress.yaml gcloud beta access-context-manager perimeters update Sensitive2 --set-egress-policies=logsegress.yaml A similar configuration can be specified for any other sensitive data perimeter that needs to write to the logs perimeter.
- You can define the following ingress and egress rules: Anon Perimeter echo """ - ingressFrom: identityType: ANY IDENTITY sources: - resource: projects/111 ingressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: google.storage.Write - method: google.storage.objects.create resources: - \" \" """ > anoningress.yaml echo """ - egressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: google.storage.Write - method: google.storage.objects.create resources: - projects/999 egressFrom: identityType: ANY IDENTITY """ > anonegress.yaml PHI Perimeter echo """ - egressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: \" \" resources: - projects/222 egressFrom: identityType: ANY IDENTITY """ > phiegress.yaml Apply the ingress and egress rules by running the following commands: gcloud beta access-context-manager perimeters update AnonPerimeter --set-ingress-policies=anoningress.yaml --set-egress-policies=anonegress.yaml gcloud beta access-context-manager perimeters update PhiPerimeter --set-egress-policies=phiegress.yaml Grant access to a third-party Compute Engine disk image The following diagram shows a Compute Engine resource in a service perimeter that requires access to a Compute Engine disk image in a third-party image project that is outside the perimeter: Assume that you have defined the following perimeter: name: accessPolicies/222/servicePerimeters/Example status: resources: - projects/111 - projects/222 restrictedServices: - compute.googleapis.com - containerregistry.googleapis.com title: Example You now need to grant read access to disk images in project 999 , which is in a different organization.

### "Supported identities for ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities](https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities)
- Source ID: `site-docs-reference-2`
- Final score: 354
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Service Controls uses ingress and egress rules to control access to and from resources and clients within service perimeters.
- Home Documentation Networking VPC Service Controls Guides Send feedback Supported identities for ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- To refine access further, you can specify supported identities in ingress and egress rules.
- ORGANIZATION ID .workload.id.goog/ What's next Configure identity groups and third-party identities in ingress and egress rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .


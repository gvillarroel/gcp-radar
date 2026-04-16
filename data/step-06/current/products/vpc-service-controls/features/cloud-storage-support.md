---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.574Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Cloud Storage support"
feature_slug: "cloud-storage-support"
latest_feature_date: "2018-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles"
keywords:
  - "storage"
  - "vpc"
  - "controls"
  - "supports"
  - "protecting"
  - "resources"
---

# Cloud Storage support

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports protecting Cloud Storage resources.

## Extended Definition

VPC Service Controls supports protecting Cloud Storage resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services)
- [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Service name krmapihosting.googleapis.com Details To use Config Controller with VPC Service Controls, you must enable the following APIs inside your perimeter: Cloud Monitoring API ( monitoring.googleapis.com ) Container Registry API ( containerregistry.googleapis.com ) Google Cloud Observability API ( logging.googleapis.com ) Security Token Service API ( sts.googleapis.com ) Cloud Storage API ( storage.googleapis.com ) If you provision resources with Config Controller, you must enable the API for those resources in your service perimeter.
- Therefore, while you can enable Storage Intelligence at the folder, organization, or project level, VPC Service Controls only protects project-level resources.
- Limitations To fully protect your AI Platform Training training jobs, add all of the following APIs to the service perimeter: AI Platform Training and Prediction API ( ml.googleapis.com ) Pub/Sub API ( pubsub.googleapis.com ) Cloud Storage API ( storage.googleapis.com ) Google Kubernetes Engine API ( container.googleapis.com ) Container Registry API ( containerregistry.googleapis.com ) Cloud Logging API ( logging.googleapis.com ) Read more about setting up VPC Service Controls for AI Platform Training .
- Limitations To fully protect AI Platform Prediction, add all of the following APIs to the service perimeter: AI Platform Training and Prediction API ( ml.googleapis.com ) Pub/Sub API ( pubsub.googleapis.com ) Cloud Storage API ( storage.googleapis.com ) Google Kubernetes Engine API ( container.googleapis.com ) Container Registry API ( containerregistry.googleapis.com ) Cloud Logging API ( logging.googleapis.com ) Read more about setting up VPC Service Controls for AI Platform Prediction .

### VPC accessible services \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services)
- Source ID: `site-docs-reference-2`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The VPC network in my-authorized-compute-project is now limited to accessing only resources for the Cloud Storage service.
- However, you want your VPC network to only have access to Cloud Storage resources in my-authorized-gcs-project .
- To limit the VPC network's access to only the storage service, you enable VPC accessible services and set storage.googleapis.com as an allowed service: gcloud access-context-manager perimeters update my-authorized-perimeter \ --enable-vpc-accessible-services \ --add-vpc-allowed-services = storage.googleapis.com Success!
- Because the two projects share a perimeter, the VPC network in my-authorized-compute-project has access to the resources of services in my-authorized-gcs-project , regardless of whether the perimeter protects those services.

### Ingress and egress rules \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- When an accessLevel or a resource for a source is set to a specific value instead of " " , VPC Service Controls evaluates both sources and identityType attributes. identityType or identities attribute resources attribute serviceName attribute Once you have finished configuring your ingress policy file, see Updating ingress and egress policies for instructions on applying your ingress policy file to your service perimeter.
- VPC Service Controls evaluates accessLevel and resource attributes of the sources attribute as an OR condition. - resource: - (Use this attribute or the accessLevel attribute.) Specify one or more Google Cloud resources from the service perimeter that you want to allow to access data outside the perimeter.
- Note: To allow ingress to resources, VPC Service Controls evaluates sources and identityType attributes as an AND condition and evaluates accessLevel and resource attributes of the sources attribute as an OR condition.
- Note: VPC Service Controls allows access to a few Google-managed resources regardless of any restrictions enforced by ingress or egress policies.

### "Configure IAM roles in ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Storage storage.googleapis.com VPC Service Controls supports custom roles for Cloud Storage in the ingress and egress rules, but not the predefined Cloud Storage roles .
- When you perform an insert object or write API request to projects protected by VPC Service Controls, you must configure ingress and egress rules allowing the storage.objects.delete and storage.objects.create permissions.
- When you attempt to use a predefined Cloud Storage role in an ingress or egress rule, VPC Service Controls returns an INVALID ARGUMENT error.
- VPC Service Controls uses ingress and egress rules to allow access to and from the resources and clients protected by service perimeters.


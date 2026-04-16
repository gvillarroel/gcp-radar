---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.963Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Composite type deployment creation in gcloud"
feature_slug: "composite-type-deployment-creation-in-gcloud"
latest_feature_date: "2018-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types"
keywords:
  - "composite"
  - "type"
  - "deployment"
  - "creation"
  - "gcloud"
  - "tool"
  - "can"
  - "create"
---

# Composite type deployment creation in gcloud

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

The gcloud tool can create deployments directly from composite types.

## Extended Definition

The gcloud tool can create deployments directly from composite types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types)

## Supporting Pages

### "Adding a template as a composite type \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types)
- Source ID: `site-docs-root-2`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the local directory where you downloaded all the files, run the following command to create a new composite type called ha-service-example : gcloud beta deployment - manager types create ha - service - example -- template = ha - service . py Get a list of types to confirm that the type was successfully created: gcloud beta deployment - manager types list -- provider composite Describe your new type: gcloud beta deployment - manager types describe ha - service - example -- provider composite Create a new configuration that deploys your type.
- For example, the following command deploys a composite type called autoscaled-igm : gcloud deployment - manager deployments create my - igm \ -- composite - type example - project / composite : autoscaled - igm You can also set properties of your composite type using the --properties flag: gcloud deployment - manager deployments create my - igm \ -- composite - type example - project / composite : autoscaled - igm \ -- properties zone : us - central1 - a Keep in mind that: All values are parsed as YAML values.
- For example: gcloud deployment-manager deployments create my-igm \ --composite-type example-project/composite:autoscaled-igm \ --properties zone:us-central1-a,machineType:n1-standard-1,image:debian-8 After running this command, Deployment Manager creates a deployment using the composite type you provided.
- Deploy your new composite type: gcloud deployment-manager deployments create ha-service-deployment --config example-config.yaml The API returns with a list of resources created from the type: Waiting for create [operation-1488254932422-5498f5a950d71-2bd3b8c8-b13ddab5]...done.

### "Adding a template as a composite type \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types)
- Source ID: `site-docs-root-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the local directory where you downloaded all the files, run the following command to create a new composite type called ha-service-example : gcloud beta deployment - manager types create ha - service - example -- template = ha - service . py Get a list of types to confirm that the type was successfully created: gcloud beta deployment - manager types list -- provider composite Describe your new type: gcloud beta deployment - manager types describe ha - service - example -- provider composite Create a new configuration that deploys your type.
- For example, the following command deploys a composite type called autoscaled-igm : gcloud deployment - manager deployments create my - igm \ -- composite - type example - project / composite : autoscaled - igm You can also set properties of your composite type using the --properties flag: gcloud deployment - manager deployments create my - igm \ -- composite - type example - project / composite : autoscaled - igm \ -- properties zone : us - central1 - a Keep in mind that: All values are parsed as YAML values.
- For example: gcloud deployment-manager deployments create my-igm \ --composite-type example-project/composite:autoscaled-igm \ --properties zone:us-central1-a,machineType:n1-standard-1,image:debian-8 After running this command, Deployment Manager creates a deployment using the composite type you provided.
- Deploy your new composite type: gcloud deployment-manager deployments create ha-service-deployment --config example-config.yaml The API returns with a list of resources created from the type: Waiting for create [operation-1488254932422-5498f5a950d71-2bd3b8c8-b13ddab5]...done.

### "Describing, listing, and deleting types \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Describing a single composite type You can describe a single composite type to get information about the type. gcloud Run the types describe command to describe a type: gcloud beta deployment - manager types describe [ COMPOSITE TYPE NAME ] --provider composite API Make a GET request to the following URI: https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT ID ]/ global / compositeTypes /[ COMPOSITE TYPE NAME ] Listing composite types You can get a list of your composite types using the gcloud CLI, or the API. gcloud To list your composite types, make a types list request: gcloud beta deployment - manager types list -- provider composite API In the API, make a GET request to the global types list: GET https : // www . googleapis . com / deploymentmanager / v2 / projects /[ PROJECT ID ]/ global / types For more information, see the documentation for the list method.
- For example: gcloud beta deployment - manager types delete [ COMPOSITE TYPE ] API In the API, make a DELETE request to the type you want to delete: DELETE https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT ID ]/ global / compositeTypes /[ COMPOSITE TYPE ] For more information, see the documentation for the delete method.
- You can get a list of base types provided by a type provider. gcloud To get a list of base types provided by a type provider: gcloud beta deployment - manager types list --provider [TYPE PROVIDER] --project [PROJECT ID] For example, to get a list of base types in the Compute Engine type provider, run this command: gcloud beta deployment-manager types list --provider compute-v1 --project gcp-types API Make a GET request to the following URI: GET https : // www . googleapis . com / deploymentmanager / v2beta / projects / [ PROJECT ID ] / global / typeProviders / [ PROVIDER NAME ] / types For example, for a list of types in the Compute Engine type provider, use this URI: GET https://www.googleapis.com/deploymentmanager/v2beta/projects/gcp-types/global/typeProviders/compute-v1/types Listing type providers You can get a list of your type providers using the gcloud CLI, or the API. gcloud To list your type providers, make a type-providers list request: gcloud beta deployment - manager type - providers list API In the API, make a GET request to the global type providers list: GET https : // www . googleapis . com / deploymentmanager / v2 / projects /[ PROJECT ID ]/ global / typeProviders For more information, see the documentation for the list method.
- See the list of default Google Cloud type providers . gcloud Run the type-providers describe command to describe a type provider. gcloud beta deployment-manager type-providers describe PROVIDER NAME --project PROJECT ID For example, use this command to describe the Pub/Sub type provider: gcloud beta deployment - manager type - providers describe pubsub - v1 -- project gcp - types API Make a GET request to the following URI: https://www.googleapis.com/deploymentmanager/v2beta/projects/ [PROJECT ID] /global/typeProviders/ [PROVIDER NAME] For example, use this URI for the Pub/Sub type provider: https://www.googleapis.com/deploymentmanager/v2beta/projects/gcp-types/global/typeProviders/pubsub-v1 Getting a list of types provided by a type provider A type provider exposes all resources of the underlying API as base types.


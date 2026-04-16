---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.949Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Cloud Scheduler type provider support"
feature_slug: "cloud-scheduler-type-provider-support"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects"
keywords:
  - "scheduler"
  - "type"
  - "provider"
  - "deployment"
  - "manager"
  - "supports"
  - "managing"
  - "jobs"
---

# Cloud Scheduler type provider support

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports managing Cloud Scheduler jobs through the gcp-types/cloudscheduler-v1 type provider.

## Extended Definition

Deployment Manager supports managing Cloud Scheduler jobs through the gcp-types/cloudscheduler-v1 type provider.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects)

## Supporting Pages

### "Supported Google Cloud type providers \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a full list of resource types, including resources that are in alpha, run the following command: gcloud beta deployment - manager types list -- project gcp - types You can also create your own type providers, such as for third-party APIs.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Supported Google Cloud type providers Stay organized with collections Save and categorize content based on your preferences.
- For an overview of creating a type provider, see Integrating with Deployment Manager .
- Resource snippets Cloud Key Management Service gcp-types/cloudkms-v1 Resource snippets Resource Manager (v1) gcp-types/cloudresourcemanager-v1 Resource snippets Resource Manager (v2) gcp-types/cloudresourcemanager-v2 Resource snippets Compute Engine (Alpha) gcp-types/compute-alpha Resource snippets Compute Engine (Beta) gcp-types/compute-beta Resource snippets Compute Engine gcp-types/compute-v1 Resource snippets Google Kubernetes Engine gcp-types/container-v1 Note : If you want to create and manage private GKE clusters with Deployment Manager, see the best practices for setting up options for private clusters .

### "Describing, listing, and deleting types \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can get a list of base types provided by a type provider. gcloud To get a list of base types provided by a type provider: gcloud beta deployment - manager types list --provider [TYPE PROVIDER] --project [PROJECT ID] For example, to get a list of base types in the Compute Engine type provider, run this command: gcloud beta deployment-manager types list --provider compute-v1 --project gcp-types API Make a GET request to the following URI: GET https : // www . googleapis . com / deploymentmanager / v2beta / projects / [ PROJECT ID ] / global / typeProviders / [ PROVIDER NAME ] / types For example, for a list of types in the Compute Engine type provider, use this URI: GET https://www.googleapis.com/deploymentmanager/v2beta/projects/gcp-types/global/typeProviders/compute-v1/types Listing type providers You can get a list of your type providers using the gcloud CLI, or the API. gcloud To list your type providers, make a type-providers list request: gcloud beta deployment - manager type - providers list API In the API, make a GET request to the global type providers list: GET https : // www . googleapis . com / deploymentmanager / v2 / projects /[ PROJECT ID ]/ global / typeProviders For more information, see the documentation for the list method.
- Describing a single composite type You can describe a single composite type to get information about the type. gcloud Run the types describe command to describe a type: gcloud beta deployment - manager types describe [ COMPOSITE TYPE NAME ] --provider composite API Make a GET request to the following URI: https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT ID ]/ global / compositeTypes /[ COMPOSITE TYPE NAME ] Listing composite types You can get a list of your composite types using the gcloud CLI, or the API. gcloud To list your composite types, make a types list request: gcloud beta deployment - manager types list -- provider composite API In the API, make a GET request to the global types list: GET https : // www . googleapis . com / deploymentmanager / v2 / projects /[ PROJECT ID ]/ global / types For more information, see the documentation for the list method.
- See the list of default Google Cloud type providers . gcloud Run the type-providers describe command to describe a type provider. gcloud beta deployment-manager type-providers describe PROVIDER NAME --project PROJECT ID For example, use this command to describe the Pub/Sub type provider: gcloud beta deployment - manager type - providers describe pubsub - v1 -- project gcp - types API Make a GET request to the following URI: https://www.googleapis.com/deploymentmanager/v2beta/projects/ [PROJECT ID] /global/typeProviders/ [PROVIDER NAME] For example, use this URI for the Pub/Sub type provider: https://www.googleapis.com/deploymentmanager/v2beta/projects/gcp-types/global/typeProviders/pubsub-v1 Getting a list of types provided by a type provider A type provider exposes all resources of the underlying API as base types.
- For example: gcloud beta deployment - manager type - providers delete [ TYPE PROVIDER ] API In the API, make a DELETE request to the type provider you want to delete: DELETE https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT ID ]/ global / typeProviders /[ TYPE PROVIDER ] For more information, see the documentation for the delete method.

### "Sharing Types Across Projects \_|\_ Cloud Deployment Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Add to add the account. gcloud With the Google Cloud CLI, add a binding to the IAM policy for the project: gcloud projects add-iam-policy-binding [PROJECT ID] \ --member serviceAccount:[SERVICE ACCOUNT EMAIL] --role roles/deploymentmanager.typeViewer where: [PROJECT ID] is the ID of the project containing images you want to share. [SERVICE ACCOUNT EMAIL] is the email of the service account in the project you want to share types with.
- For example: { "policy" : { "version" : "0" , "bindings" : [ { "role" : "roles/owner" , "members" : [ "user:example@gmail.com" ] }, { "role" : "roles/deploymentmanager.typeViewer" , "members" : [ "serviceAccount:123456789012@cloudservices.gserviceaccount.com" ] } ] } } Using types from other projects in your configuration Once you have access to your types, you can specify the type in configurations using the syntax.
- Using the gcloud CLI, you can grant Jane the role like so: gcloud projects add - iam - policy - binding another - project \ -- member user : jane @ gmail . com -- role deploymentmanager . typeViewer For comprehensive instructions on adding and removing roles from users, read the documentation for granting, changing, and revoking access to project members .
- For example: gcloud projects add-iam-policy-binding database-images \ --member serviceAccount:123456789012@cloudservices.gserviceaccount.com \ --role roles/deploymentmanager.typeViewer API In the API, make a POST request to the following URL, where [PROJECT ID] is the ID of the project containing the types you want to share.


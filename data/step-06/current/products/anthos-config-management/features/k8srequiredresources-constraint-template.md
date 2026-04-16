---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.312Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "K8sRequiredResources constraint template"
feature_slug: "k8srequiredresources-constraint-template"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart"
keywords:
  - "k8srequiredresources"
  - "constraint"
  - "template"
  - "enforces"
  - "required"
  - "resource"
  - "requests"
  - "limits"
---

# K8sRequiredResources constraint template

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

This constraint template enforces required resource requests or limits on Kubernetes workloads.

## Extended Definition

This constraint template enforces required resource requests or limits on Kubernetes workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart)

## Supporting Pages

### "REST Resource: projects.locations.fleetPackages \_|\_ Config Sync \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { // Union field strategy can be only one of the following: "variantNameTemplate" : string // End of list of possible types for union field strategy . } Fields Union field strategy . strategy for selecting a variant. strategy can be only one of the following: variantNameTemplate string Required. variantNameTemplate is a template that can refer to variables containing cluster membership metadata such as location, name, and labels to generate the name of the variant for a target cluster.
- Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } . resourceBundleSelector object ( ResourceBundleSelector ) Required.
- Format is projects/{p}/locations/{l}/resourceBundles/{r}. tag string Required.
- JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "resourceBundleSelector" : { object ( ResourceBundleSelector ) } , "target" : { object ( Target ) } , "rolloutStrategy" : { object ( RolloutStrategy ) } , "variantSelector" : { object ( VariantSelector ) } , "info" : { object ( FleetPackageInfo ) } , "deletionPropagationPolicy" : enum ( DeletionPropagationPolicy ) , "state" : enum ( State ) } Fields name string Identifier.

### "Quickstart: Deploy Kubernetes resources across a fleet \_|\_ Config Sync\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In your Cloud Shell, create a file named fleet-package.yaml with the following content: resourceBundleSelector : cloudBuildRepository : name : projects/ PROJECT ID /locations/us-central1/connections/fleet-package-quickstart-connection/repositories/ REPOSITORY NAME tag : v1.0.0 serviceAccount : projects/ PROJECT ID /serviceAccounts/quickstart-service-account@ PROJECT ID . iam.gserviceaccount.com path : Match all files (including deployment.yaml) to generate variants variantsPattern : " .yaml" target : fleet : project : projects/ PROJECT ID rolloutStrategy : rolling : maxConcurrent : 1 variantSelector : Explicitly match the variant generated from "deployment.yaml" variantNameTemplate : "deployment" Replace REPOSITORY NAME with the repository name from Cloud Build.
- Set up a service account for Cloud Build To create the service account and grant the required permissions to Cloud Build, complete the following steps: Create the service account: gcloud iam service-accounts create "quickstart-service-account" Grant the service account permission to fetch resources from your Git repository by adding an IAM policy binding for the Resource Bundle Publisher role: gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:quickstart-service-account@ PROJECT ID .iam.gserviceaccount.com" \ --role = 'roles/configdelivery.resourceBundlePublisher' If prompted, select None as the condition for the policy.
- You might also notice availability errors while Autopilot adjusts your resource requests for the new deployment.
- Name your file deployment.yaml and paste the following contents into it: apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment spec : replicas : 3 selector : matchLabels : app : nginx template : metadata : labels : app : nginx spec : containers : - image : nginx:1.14.2 name : nginx ports : - containerPort : 80 Click Commit changes...

### Prepare your cluster for Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Due to the way Autopilot modifies resource requests, Config Sync makes the following adjustments: Adjusts user-specified resource override limits to match requests .
- Applies overrides only when there are one or more resource requests higher than the corresponding adjusted output declared in the annotation, or there are resource requests lower than the corresponding input declared in the annotation.
- In organizations that enforce the iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint , the default Compute Engine service account won't automatically get the required permissions for GKE.
- Resource requirements with Autopilot mode GKE Autopilot mode automatically modifies resource requests to maintain workload stability.


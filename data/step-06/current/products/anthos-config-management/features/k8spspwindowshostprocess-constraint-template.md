---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.284Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "K8sPSPWindowsHostProcess constraint template"
feature_slug: "k8spspwindowshostprocess-constraint-template"
latest_feature_date: "2023-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/fleet-packages"
keywords:
  - "k8spspwindowshostprocess"
  - "constraint"
  - "template"
  - "library"
  - "includes"
---

# K8sPSPWindowsHostProcess constraint template

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The constraint template library includes the K8sPSPWindowsHostProcess template.

## Extended Definition

The constraint template library includes the K8sPSPWindowsHostProcess template.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/fleet-packages)

## Supporting Pages

### "REST Resource: projects.locations.fleetPackages \_|\_ Config Sync \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { // Union field strategy can be only one of the following: "variantNameTemplate" : string // End of list of possible types for union field strategy . } Fields Union field strategy . strategy for selecting a variant. strategy can be only one of the following: variantNameTemplate string Required. variantNameTemplate is a template that can refer to variables containing cluster membership metadata such as location, name, and labels to generate the name of the variant for a target cluster.
- If you want to deploy a specific variant, say "default" to all the clusters, you can use "default" (string without any variables) as the variantNameTemplate.
- Labels must meet the following constraints: Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes.

### About fleet packages \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/fleet-packages)
- Source ID: `site-docs-root`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Deployment to all clusters in a fleet The following FleetPackage uses a rolling strategy to deploy Kubernetes resources to three clusters at a time and targets all clusters in a fleet: resourceBundleSelector: cloudBuildRepository: name: projects/my-project/locations/us-central1/connections/my-connection/repositories/my-repo tag: v1.0.0 variantsPattern: " .yaml" serviceAccount: projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com target: fleet: project: projects/my-project rolloutStrategy: rolling: maxConcurrent: 3 variantSelector: variantNameTemplate: deployment # matches a file named deployment.yaml Deployment to a subset of clusters The following FleetPackage uses a label selector to deploy Kubernetes resources only to clusters with the membership label country that matches "us" in the fleet: resourceBundleSelector: cloudBuildRepository: name: projects/my-project/locations/us-central1/connections/my-connection/repositories/my-repo tag: v1.0.0 variantsPattern: " .yaml" serviceAccount: projects/my-project/serviceAccounts/my-service-account@my-project.iam.gserviceaccount.com target: fleet: project: projects/my-project selector: matchLabels: country: "us" rolloutStrategy: rolling: maxConcurrent: 3 What's next Deploy fleet packages Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, consider the following scenarios that use labels to match variants: variantNameTemplate: "${membership.labels['env']}" : A cluster with the label env: prod syncs to a variant named prod . variantNameTemplate: "${membership.location}" : Clusters sync to variants matching their location (for example, us-central1-a ). variantNameTemplate: "default" : Clusters sync to a variant named default .
- You would then use the following fleet package specification: resourceBundleSelector : cloudBuildRepository : ... other fields path : "manifests" variantsPattern : " " # Matches dev, staging, prod directories variantSelector : variantNameTemplate : "${membership.labels['env']}" With this configuration, a cluster labeled env: staging receives the contents of the manifests/staging/ directory.
- The template can use variables to access the following fleet membership metadata: ${membership.name} : The cluster's fleet membership name. ${membership.location} : The fleet membership location. ${membership.project} : The fleet membership project. ${membership.labels['KEY']} : The value of the label KEY on the fleet membership.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- The output of this command includes events, which can be particularly helpful for debugging issues such as containers facing memory constraints (OOMKilled), scheduling failures, or image pull errors.
- To confirm log verbosity is configured, run the following command: kubectl get deployment.apps/root-reconciler -n config-management-system -o yaml The log verbosity can be found as one of the args within spec.template.spec.containers[] and looks like -v=0 , where 0 is the current log verbosity.


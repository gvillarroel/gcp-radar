---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.985Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Custom resource labels"
feature_slug: "custom-resource-labels"
latest_feature_date: "2023-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/workstations/docs/custom-constraints"
  - "https://docs.cloud.google.com/workstations/docs/tutorial-automate-container-image-rebuild"
  - "https://docs.cloud.google.com/workstations/docs/create-configuration"
keywords:
  - "custom"
  - "resource"
  - "labels"
  - "workstations"
  - "lets"
  - "you"
  - "apply"
  - "to"
---

# Custom resource labels

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations lets you apply custom labels to workstation clusters, workstation configurations, and workstations.

## Extended Definition

Cloud Workstations lets you apply custom labels to workstation clusters, workstation configurations, and workstations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/workstations/docs/custom-constraints](https://docs.cloud.google.com/workstations/docs/custom-constraints)
- [https://docs.cloud.google.com/workstations/docs/tutorial-automate-container-image-rebuild](https://docs.cloud.google.com/workstations/docs/tutorial-automate-container-image-rebuild)
- [https://docs.cloud.google.com/workstations/docs/create-configuration](https://docs.cloud.google.com/workstations/docs/create-configuration)

## Supporting Pages

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "reconciling" : boolean , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "deleteTime" : string , "etag" : string , "idleTimeout" : string , "runningTimeout" : string , "maxUsableWorkstations" : integer , "host" : { object ( Host ) } , "persistentDirectories" : [ { object ( PersistentDirectory ) } ] , "ephemeralDirectories" : [ { object ( EphemeralDirectory ) } ] , "container" : { object ( Container ) } , "encryptionKey" : { object ( CustomerEncryptionKey ) } , "readinessChecks" : [ { object ( ReadinessCheck ) } ] , "replicaZones" : [ string ] , "degraded" : boolean , "conditions" : [ { object ( Status ) } ] , "enableAuditAgent" : boolean , "disableTcpConnections" : boolean , "allowedPorts" : [ { object ( PortRange ) } ] , "grantWorkstationAdminRoleOnCreate" : boolean } Fields name string Identifier.
- REST Resource: projects.locations.workstationClusters.workstationConfigs Resource: WorkstationConfig JSON representation Host JSON representation GceInstance JSON representation GceShieldedInstanceConfig JSON representation GceConfidentialInstanceConfig JSON representation Accelerator JSON representation BoostConfig JSON representation PersistentDirectory JSON representation GceRegionalPersistentDisk JSON representation ReclaimPolicy GceHyperdiskBalancedHighAvailability JSON representation ReclaimPolicy EphemeralDirectory JSON representation GcePersistentDisk JSON representation Container JSON representation CustomerEncryptionKey JSON representation ReadinessCheck JSON representation PortRange JSON representation Methods Resource: WorkstationConfig A workstation configuration resource in the Cloud Workstations API.
- Home Documentation Application development Cloud Workstations Guides Send feedback Customize your development environment Stay organized with collections Save and categorize content based on your preferences.
- This page describes the workstation configuration parameters that allow you to customize the Cloud Workstations environment, including the VM type , home disk size, base container image, and more.

### Create custom constraints for Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/custom-constraints](https://docs.cloud.google.com/workstations/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Constraint syntax Require Workstation clusters to enable private gateway endpoint. name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationsPrivateGatewayClusters resourceTypes : - workstations.googleapis.com/WorkstationCluster methodTypes : - CREATE - UPDATE condition : "resource.privateClusterConfig.enablePrivateEndpoint == true" actionType : ALLOW displayName : Require workstation cluster to enable private gateway endpoint description : All workstation clusters must enable private gateway endpoint Require Workstation configs to disable TCP connections. name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationConfigDisableTcpConnections resourceTypes : - workstations.googleapis.com/WorkstationConfig methodTypes : - CREATE - UPDATE condition : "resource.disableTcpConnections == true" actionType : ALLOW displayName : Require workstation configs to disable TCP connections description : All workstation configs must disable TCP connections Require Workstation configs to disable SSH access to workstation VMs. name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationConfigDisableSsh resourceTypes : - workstations.googleapis.com/WorkstationConfig methodTypes : - CREATE - UPDATE condition : "resource.host.gceInstance.disableSsh == true" actionType : ALLOW displayName : Require workstation configs to disable SSH access to workstation VMs description : All workstation configs must disable SSH access to workstation VMs Cloud Workstations supported resources The following table lists the Cloud Workstations resources that you can reference in custom constraints.
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-ws-private-gateway.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationsPrivateGatewayClusters resourceTypes : - workstations.googleapis.com/WorkstationCluster methodTypes : - CREATE - UPDATE condition : resource.privateClusterConfig.enablePrivateEndpoint == true actionType : ALLOW displayName : Require workstation cluster to enable private gateway endpoint description : All workstation clusters must enable private gateway endpoint This defines a constraint where for every new workstation cluster, if the public gateway is enabled, the operation is denied.
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-ws-private-gateway.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.workstationsPrivateGatewayClusters DENY CREATE,UPDATE workstations.googleapis.com/WorkstationCluster Require workstation cluster to enable private gateway endpoint ...
- Apply the policy: gcloud org-policies set-policy /policy-ws-private-gateway.yaml Verify that the policy exists: gcloud org-policies list --project = PROJECT ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.workstationsPrivateGatewayClusters - SET COCsm5QGENiXi2E= After you apply the policy, wait for about two minutes for Google Cloud to start enforcing the policy.

### "Automate container image rebuilds to synchronize base image updates \_|\_\

- URL: [https://docs.cloud.google.com/workstations/docs/tutorial-automate-container-image-rebuild](https://docs.cloud.google.com/workstations/docs/tutorial-automate-container-image-rebuild)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Workstations lets you create and use custom images for your workstations.
- In this step you create a Cloud Build trigger that runs the instructions in the cloudbuild.yaml file that you can find in the labs/cloudbuild-scheduled-jobs/code-oss-java folder. gcloud builds triggers create manual \ --name = custom-image-trigger \ --repo = $GITHUB USER /software-delivery-workshop \ --repo-type = GITHUB \ --branch = main \ --build-config = labs/cloudbuild-scheduled-jobs/code-oss-java/cloudbuild.yaml \ --substitutions = REGION = $REGION , AR REPO NAME = custom-images , AR IMAGE NAME = code-oss-java , IMAGE DIR = labs/cloudbuild-scheduled-jobs/code-oss-java TRIGGER ID = $( gcloud builds triggers list \ --filter = name = "custom-image-trigger" --format = "value(id)" ) This example configures the following: The gcloud CLI command creates a manual trigger within Cloud Build named custom-image-trigger as indicated by the name flag on the second line.
- Create a repository with the following command: gcloud artifacts repositories create custom-images \ --repository-format = docker \ --location = $REGION \ --description = "Docker repository" Replace $REGION with the region name that you plan to use.
- Home Documentation Application development Cloud Workstations Guides Send feedback Automate container image rebuilds to synchronize base image updates Stay organized with collections Save and categorize content based on your preferences.

### "Create a workstation configuration \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/create-configuration](https://docs.cloud.google.com/workstations/docs/create-configuration)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This section explains the four steps of creating a workstation configuration: Configure basics Define machine settings Customize the environment Add users To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Before you begin using Cloud Workstations, be sure that you have the required permissions and that you complete these required setup steps.
- Customize the environment Customize the Cloud Workstations environment by configuring the workstation container image and persistent storage using these steps: Configure the container image by choosing whether to use one of the preconfigured base images or to provide a reference to a customized container image that you've created.
- Optional: Add Labels to apply key-value pair labels to the underlying Compute Engine resources.
- Clean up If you created a new workstation configuration to learn about Cloud Workstations and you no longer need the configuration, you can delete it from the Google Cloud console: In the Google Cloud console, go to Cloud Workstations > Workstation configurations .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.560Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Dry run mode for service perimeters"
feature_slug: "dry-run-mode-for-service-perimeters"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/manage-dry-run-configurations"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
keywords:
  - "dry"
  - "run"
  - "mode"
  - "for"
  - "perimeters"
  - "lets"
  - "you"
  - "test"
---

# Dry run mode for service perimeters

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

Dry run mode lets you test service perimeter configuration changes before enforcing them.

## Extended Definition

Dry run mode lets you test service perimeter configuration changes before enforcing them.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode)
- [https://docs.cloud.google.com/vpc-service-controls/docs/manage-dry-run-configurations](https://docs.cloud.google.com/vpc-service-controls/docs/manage-dry-run-configurations)
- [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)

## Supporting Pages

### "Dry run mode for service perimeters \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode)
- Source ID: `site-docs-reference`
- Final score: 364
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dry run actions and configuration statuses Using the dry run feature, you can: Create a perimeter with only a dry run configuration Update an existing perimeter's dry run configuration Move a new project into an existing perimeter Move a project from one perimeter to another Delete a perimeter's dry run configuration Based on the action taken in dry run mode, a perimeter can be in one of the following configuration statuses: Inherited from enforced: Default state for enforced perimeters.
- Home Documentation Networking VPC Service Controls Guides Send feedback Dry run mode for service perimeters Stay organized with collections Save and categorize content based on your preferences.
- You can also have service perimeters that use a hybrid of enforced and dry run modes.
- Create a perimeter in dry run mode Learn to manage your dry run configurations Review the gcloud command-line tool commands for dry run mode Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Manage dry run configurations \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/manage-dry-run-configurations](https://docs.cloud.google.com/vpc-service-controls/docs/manage-dry-run-configurations)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enforce all dry run configurations To enforce the dry run configuration for all of your perimeters, use the dry-run enforce-all command: gcloud access-context-manager perimeters dry-run enforce-all \ [ --etag = ETAG ] [ --policy = POLICY NAME ] Where: PERIMETER NAME is the name of the service perimeter that you want to obtain details about.
- Enforce one dry run configuration To enforce the dry run configuration for a single perimeter, use the dry-run enforce command: gcloud access-context-manager perimeters dry-run enforce PERIMETER NAME \ [ --policy = POLICY NAME ] Where: PERIMETER NAME is the name of the service perimeter that you want to obtain details about.
- Before you begin Read Overview of VPC Service Controls Read Dry run mode Set your default access policy for using the gcloud command-line tool. -or- Get the name of your policy.
- API To enforce the dry run configuration for all of your perimeters, call accessPolicies.servicePerimeters.commit .

### "Example migration of VPC networks into separate perimeters \_|\_ VPC Service\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enforce the dry-run configurations, run the following command: gcloud access-context-manager perimeters dry-run enforce-all --policy=<access policy number> After you enforce the dry-run configurations, run the following command to describe perimeter-1 : gcloud access-context-manager perimeters describe perimeter-1 --policy=<access policy number> This example produces the following output in which network-host-project and service-project-2 are removed, and VPC1 is added to perimeter-1 . name: accessPolicies/<access policy number>/servicePerimeters/perimeter-1 status: … resources: - projects/<service-project-1 number> - //compute.googleapis.com/projects/<network-host-project>/global/networks/VPC1 Run the following command to describe perimeter-2 : gcloud access-context-manager perimeters describe perimeter-2 --policy=<access policy number> This example produces the following output in which service-project-2 and VPC2 are added to perimeter-2 . name: accessPolicies/<access policy number>/servicePerimeters/perimeter-2 status: … resources: - projects/<service-project-2 number> - //compute.googleapis.com/projects/<network-host-project>/global/networks/VPC2 title: perimeter-2 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- However, the following dry-run error appears in the audit logs for network-host-project for accessing service-project-2 from VM1 : egressViolations: [ 0: { servicePerimeter: "accessPolicies/<access policy number>/servicePerimeters/perimeter-1" source: "//compute.googleapis.com/projects/network-host-project/global/networks/VPC1" sourceType: "Network" targetResource: "projects/<service-project-2 number>" } ] Similarly, Cloud Storage requests from VM2 to service-project-2 don't have dry-run errors, and requests from VM2 to service-project-1 have the following dry-run error in the audit logs for the network-host-project : egressViolations: [ 0: { servicePerimeter: "accessPolicies/<access policy number>/servicePerimeters/perimeter-2" source: "//compute.googleapis.com/projects/network-host-project/global/networks/VPC2" sourceType: "Network" targetResource: "projects/<service-project-1 number>" } ] Enforce the dry-run configuration You must enforce all dry-run configurations at once in one atomic transaction.
- Update the dry-run configuration The following command updates the perimeter perimeter-1 to remove network-host-project , service-project-2 , and adds VPC1 : gcloud access-context-manager perimeters dry-run update perimeter-1 --remove-resources="projects/<network-host-project number>,projects/<service-project-2 number>" --add-resources="//compute.googleapis.com/projects/network-host-project/global/networks/vpc1" --policy=<access policy number> Create a new perimeter in dry-run mode The following command creates the perimeter perimeter-2 and adds service-project-2 , and adds VPC2 : gcloud access-context-manager perimeters dry-run create perimeter-2 --title=perimeter-2 --type="regular" --resources="projects/<service-project-2 number>,//compute.googleapis.com/projects/network-host-project/global/networks/vpc2" --restricted-services="storage.googleapis.com" --policy=<access policy number> Verify the dry-run configuration In this example, run the following commands to ensure that there are no dry-run errors from VPC1 to service-project-1 , and from VPC2 to service-project-2 : To list the Cloud Storage buckets in service-project-1 , log in to VM1 , which is in VPC1 and run the following command: gcloud storage ls --project=service-project-1 To list the Cloud Storage buckets in service-project-2 , run the following command: gcloud storage ls --project=service-project-2 The commands run successfully because the dry-run configuration doesn't affect production traffic.
- List the VPC networks in the host project The following command lists the VPC networks in the network-host-project: gcloud compute networks list --project=network-host-project This example produces the following output: NAME SUBNET MODE BGP ROUTING MODE IPV4 RANGE GATEWAY IPV4 vpc1 AUTO REGIONAL vpc2 AUTO REGIONAL Get the perimeter details The following command gets the details of the perimeter: gcloud access-context-manager perimeters describe perimeter-1 This example produces the following output: name: accessPolicies/<access policy number>/servicePerimeters/perimeter-1 status: … resources: - projects/<network-host-project number> - projects/<service-project-1 number> - projects/<service-project-2 number> The <access policy number> is used in the example dry-run mode commands.

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the containers inside a perimeter that are available to Container Registry, the following read-only repositories are available to all projects regardless of any restrictions enforced by service perimeters: gcr.io/anthos-baremetal-release gcr.io/asci-toolchain gcr.io/cloud-airflow-releaser gcr.io/cloud-builders gcr.io/cloud-dataflow gcr.io/cloud-ingest gcr.io/cloud-marketplace gcr.io/cloud-ssa gcr.io/cloudsql-docker gcr.io/config-management-release gcr.io/deeplearning-platform-release gcr.io/foundry-dev gcr.io/fn-img gcr.io/gae-runtimes gcr.io/serverless-runtimes gcr.io/gke-node-images gcr.io/gke-release gcr.io/gkeconnect gcr.io/google-containers gcr.io/kubeflow gcr.io/kubeflow-images-public gcr.io/kubernetes-helm gcr.io/istio-release gcr.io/ml-pipeline gcr.io/projectcalico-org gcr.io/rbe-containers gcr.io/rbe-windows-test-images gcr.io/speckle-umbrella gcr.io/stackdriver-agents gcr.io/tensorflow gcr.io/vertex-ai gcr.io/vertex-ai-restricted gke.gcr.io k8s.gcr.io In all cases, the multi-regional versions of these repositories are also available.
- In addition to the artifacts inside a perimeter that are available to Artifact Registry, the following read-only repositories are available to all projects regardless of service perimeters: gcr.io/anthos-baremetal-release gcr.io/asci-toolchain gcr.io/cloud-airflow-releaser gcr.io/cloud-builders gcr.io/cloud-dataflow gcr.io/cloud-ingest gcr.io/cloud-marketplace gcr.io/cloud-ssa gcr.io/cloudsql-docker gcr.io/config-management-release gcr.io/deeplearning-platform-release gcr.io/foundry-dev gcr.io/fn-img gcr.io/gae-runtimes gcr.io/serverless-runtimes gcr.io/gke-node-images gcr.io/gke-release gcr.io/gkeconnect gcr.io/google-containers gcr.io/kubeflow gcr.io/kubeflow-images-public gcr.io/kubernetes-helm gcr.io/istio-release gcr.io/ml-pipeline gcr.io/projectcalico-org gcr.io/rbe-containers gcr.io/rbe-windows-test-images gcr.io/speckle-umbrella gcr.io/stackdriver-agents gcr.io/tensorflow gcr.io/vertex-ai gcr.io/vertex-ai-restricted gke.gcr.io k8s.gcr.io In all cases, the regional versions of these repositories are also available.
- Limitations The following read-only repositories are available to all projects regardless of any restrictions enforced by service perimeters: gcr.io/anthos-baremetal-release gcr.io/asci-toolchain gcr.io/cloud-airflow-releaser gcr.io/cloud-builders gcr.io/cloud-dataflow gcr.io/cloud-ingest gcr.io/cloud-marketplace gcr.io/cloud-ssa gcr.io/cloudsql-docker gcr.io/config-management-release gcr.io/deeplearning-platform-release gcr.io/foundry-dev gcr.io/fn-img gcr.io/gae-runtimes gcr.io/serverless-runtimes gcr.io/gke-node-images gcr.io/gke-release gcr.io/gkeconnect gcr.io/google-containers gcr.io/kubeflow gcr.io/kubeflow-images-public gcr.io/kubernetes-helm gcr.io/istio-release gcr.io/ml-pipeline gcr.io/projectcalico-org gcr.io/rbe-containers gcr.io/rbe-windows-test-images gcr.io/speckle-umbrella gcr.io/stackdriver-agents gcr.io/tensorflow gcr.io/vertex-ai gcr.io/vertex-ai-restricted gke.gcr.io k8s.gcr.io Fleets Status GA .
- Service name compute.googleapis.com Details VPC Service Controls support for Compute Engine offers the following security benefits: Restricts access to sensitive API operations Restricts persistent disk snapshots and custom images to a perimeter Restricts access to instance metadata VPC Service Controls support for Compute Engine also enables you to utilize Virtual Private Cloud networks and Google Kubernetes Engine private clusters inside service perimeters.


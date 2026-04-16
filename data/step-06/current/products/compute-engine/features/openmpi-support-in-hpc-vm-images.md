---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.185Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "OpenMPI support in HPC VM Images"
feature_slug: "openmpi-support-in-hpc-vm-images"
latest_feature_date: "2023-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/choose-compute-deployment-option"
  - "https://docs.cloud.google.com/compute/docs/choose-compute-deployment-option"
  - "https://docs.cloud.google.com/compute/docs/access/authenticate-workloads-over-mtls"
keywords:
  - "openmpi"
  - "hpc"
  - "vm"
  - "images"
  - "workload"
  - "deployments"
---

# OpenMPI support in HPC VM Images

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

HPC VM Images support OpenMPI for HPC workload deployments.

## Extended Definition

HPC VM Images support OpenMPI for HPC workload deployments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/choose-compute-deployment-option](https://developers.google.com/compute/docs/choose-compute-deployment-option)
- [https://docs.cloud.google.com/compute/docs/choose-compute-deployment-option](https://docs.cloud.google.com/compute/docs/choose-compute-deployment-option)
- [https://docs.cloud.google.com/compute/docs/access/authenticate-workloads-over-mtls](https://docs.cloud.google.com/compute/docs/access/authenticate-workloads-over-mtls)

## Supporting Pages

### "Choose a Compute Engine deployment strategy for your workload \_|\_ Google\

- URL: [https://docs.cloud.google.com/compute/docs/choose-compute-deployment-option](https://docs.cloud.google.com/compute/docs/choose-compute-deployment-option)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Capability Standalone VMs Unmanaged instance group Stateful MIG Stateless MIG Template-based provisioning of a group of VMs Mix of machine types and images Fixed internal or external IP addresses Automatic healing of failed VMs Control over VM start-stop and suspend-resume operations Setting a group of VMs as a load-balancer backend Disk and metadata preservation, for stateful workloads Controlled update of specific VMs Automatic rolling update of all the VMs Automatic (and predictive) horizontal scaling The following diagrams show sample deployments side-by-side to help you understand the key differences.
- Home Documentation Compute Compute Engine Guides Send feedback Choose a Compute Engine deployment strategy for your workload Stay organized with collections Save and categorize content based on your preferences.
- Select a deployment strategy The recommendations discussed here are based on a mapping of specific workload characteristics to the capabilities of each Compute Engine deployment option.
- Note: Compute Engine provides robust and flexible cloud infrastructure for hosting commercial off-the-shelf applications and for migrating workloads from your on-premises data centers.

### "Choose a Compute Engine deployment strategy for your workload \_|\_ Google\

- URL: [https://developers.google.com/compute/docs/choose-compute-deployment-option](https://developers.google.com/compute/docs/choose-compute-deployment-option)
- Source ID: `site-docs-root-3`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Capability Standalone VMs Unmanaged instance group Stateful MIG Stateless MIG Template-based provisioning of a group of VMs Mix of machine types and images Fixed internal or external IP addresses Automatic healing of failed VMs Control over VM start-stop and suspend-resume operations Setting a group of VMs as a load-balancer backend Disk and metadata preservation, for stateful workloads Controlled update of specific VMs Automatic rolling update of all the VMs Automatic (and predictive) horizontal scaling The following diagrams show sample deployments side-by-side to help you understand the key differences.
- Home Documentation Compute Compute Engine Guides Send feedback Choose a Compute Engine deployment strategy for your workload Stay organized with collections Save and categorize content based on your preferences.
- Select a deployment strategy The recommendations discussed here are based on a mapping of specific workload characteristics to the capabilities of each Compute Engine deployment option.
- Note: Compute Engine provides robust and flexible cloud infrastructure for hosting commercial off-the-shelf applications and for migrating workloads from your on-premises data centers.

### "Authenticate workloads to other workloads over mTLS \_|\_ Compute Engine\

- URL: [https://docs.cloud.google.com/compute/docs/access/authenticate-workloads-over-mtls](https://docs.cloud.google.com/compute/docs/access/authenticate-workloads-over-mtls)
- Source ID: `site-docs-reference-required-6`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update the configuration for an existing instance to enable managed workload identities. gcloud alpha compute instances update INSTANCE NAME \ --zone= ZONE \ --identity-certificate \ --identity=// TRUST DOMAIN /ns/ NAMESPACE /sa/ WORKLOAD IDENTIFIER Replace the following: INSTANCE NAME : the instance name ZONE : the zone where the instance is located TRUST DOMAIN : the ID for the trust domain, in the following format: none $ POOL ID .global.$ PROJECT NUMBER .workload.id.goog The trust domain value uses the following placeholders: POOL ID : the name of the workload identity pool PROJECT NUMBER : the project number for the project in which the workload identity pool was created + NAMESPACE : the name of the namespace that contains the workload attestation policy that authorizes the workload to assert a managed workload identity + WORKLOAD IDENTIFIER : the name of the managed workload identity that was created in the namespace of the workload identity pool Stop the VM. gcloud alpha compute instances stop INSTANCE NAME \ --zone= ZONE Replace the following: INSTANCE NAME : the instance name ZONE : the zone where the instance is located Start the VM. gcloud alpha compute instances start INSTANCE NAME \ --zone= ZONE Replace the following: INSTANCE NAME : the instance name ZONE : the zone where the instance is located Access workload credentials on a Linux VM After you create and start a compute instance that uses managed workload identities, the Google Cloud infrastructure (including the Guest Agent ) automatically provisions and manages the rotation of the credentials for the instance.
- TRUST DOMAIN : the ID for the trust domain, in the following format: $ POOL ID .global.$ PROJECT NUMBER .workload.id.goog The trust domain value uses the following placeholders: POOL ID : the name of the workload identity pool PROJECT NUMBER : the project number for the project in which the workload identity pool was created NAMESPACE : the name of the namespace that contains the workload attestation policy that authorizes the workload to assert a managed workload identity WORKLOAD IDENTIFIER : the name of the managed workload identity that was created in the namespace of the workload identity pool Enable managed workload identities on existing instances To enable managed workload identities for an existing compute instance, update the instance to configure the following: If the attestation of the instance for the workload identity is based on a service account and the instance doesn't already have an attached service account, then create and attach a service account to the instance.
- Learn how to grant roles . gcloud services enable compute.googleapis.com Required roles To get the permissions that you need to create VMs that use managed workload identity certificates for authentication to other workloads, ask your administrator to grant you the following IAM roles on the project: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Service Account User ( roles/iam.serviceAccountUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure Certificate Authority Service to issue certificates for managed workload identities: Configure the root CA pool Configure the subordinate CAs Authorize the managed workload identity pool to request certificates from the CA pool Enable managed workload identities for individual compute instances You can enable managed workload identities for a compute instance either when creating the instance or by updating the configuration for an existing instance.


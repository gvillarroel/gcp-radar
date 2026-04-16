---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:52:40.539Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "Compact placement policies for standalone Flex-start VMs"
feature_slug: "compact-placement-policies-for-standalone-flex-start-vms"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-instance"
keywords:
  - "standalone"
  - "compact"
  - "placement"
  - "policies"
  - "flex"
  - "supports"
  - "start"
---

# Compact placement policies for standalone Flex-start VMs

Product: AI Hypercomputer
Coverage: MEDIUM

## Step 02 Summary

Supports configuring compact placement policies for standalone Flex-start VMs to place them in adjacent or same blocks and reduce network latency.

## Extended Definition

Supports configuring compact placement policies for standalone Flex-start VMs to place them in adjacent or same blocks and reduce network latency.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-instance](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-instance)

## Supporting Pages

### "Create an AI-optimized instance with A4 or A3 Ultra \_|\_ AI Hypercomputer\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm)
- Source ID: `site-docs-reference-required-2`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Flex-start Before running the command, optionally add the flag for a compact placement policy . gcloud compute instances create INSTANCE NAME \ --machine-type= MACHINE TYPE \ --image-family= IMAGE FAMILY \ --image-project= IMAGE PROJECT \ --zone= ZONE \ --boot-disk-type=hyperdisk-balanced \ --boot-disk-size= DISK SIZE \ --scopes=cloud-platform \ --network-interface=nic-type=GVNIC,network= GVNIC NAME PREFIX -net-0,subnet= GVNIC NAME PREFIX -sub-0 \ --network-interface=nic-type=GVNIC,network= GVNIC NAME PREFIX -net-1,subnet= GVNIC NAME PREFIX -sub-1,no-address --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-0,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-1,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-2,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-3,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-4,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-5,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-6,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-7,no-address \ --reservation-affinity=none \ --provisioning-model=FLEX START \ --request-valid-for-duration= REQUEST VALID FOR DURATION \ --max-run-duration= MAX RUN DURATION \ --instance-termination-action= TERMINATION ACTION \ --maintenance-policy=TERMINATE Complete the following steps: Replace the following: INSTANCE NAME : the name of the VM.
- Flex-start Before submitting the request, optionally add the field for a compact placement policy to the request body.
- Reservation-bound Before running the command, optionally add the flag for a compact placement policy . gcloud compute instances create INSTANCE NAME \ --machine-type= MACHINE TYPE \ --image-family= IMAGE FAMILY \ --image-project= IMAGE PROJECT \ --zone= ZONE \ --boot-disk-type=hyperdisk-balanced \ --boot-disk-size= DISK SIZE \ --scopes=cloud-platform \ --network-interface=nic-type=GVNIC,network= GVNIC NAME PREFIX -net-0,subnet= GVNIC NAME PREFIX -sub-0 \ --network-interface=nic-type=GVNIC,network= GVNIC NAME PREFIX -net-1,subnet= GVNIC NAME PREFIX -sub-1,no-address --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-0,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-1,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-2,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-3,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-4,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-5,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-6,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-7,no-address \ --reservation-affinity=specific \ --reservation= RESERVATION \ --provisioning-model=RESERVATION BOUND \ --instance-termination-action= TERMINATION ACTION \ --maintenance-policy=TERMINATE \ --restart-on-failure Complete the following steps: Replace the following: INSTANCE NAME : the name of the VM.
- Spot Before running the command, optionally add the flag for a compact placement policy . gcloud compute instances create INSTANCE NAME \ --machine-type= MACHINE TYPE \ --image-family= IMAGE FAMILY \ --image-project= IMAGE PROJECT \ --zone= ZONE \ --boot-disk-type=hyperdisk-balanced \ --boot-disk-size= DISK SIZE \ --scopes=cloud-platform \ --network-interface=nic-type=GVNIC,network= GVNIC NAME PREFIX -net-0,subnet= GVNIC NAME PREFIX -sub-0 \ --network-interface=nic-type=GVNIC,network= GVNIC NAME PREFIX -net-1,subnet= GVNIC NAME PREFIX -sub-1,no-address --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-0,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-1,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-2,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-3,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-4,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-5,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-6,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-7,no-address \ --provisioning-model=SPOT \ --instance-termination-action= TERMINATION ACTION \ --maintenance-policy=TERMINATE \ --no-restart-on-failure Complete the following steps: Replace the following: INSTANCE NAME : the name of the VM.

### Choose a consumption option \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models)
- Source ID: `site-docs-root-required-2`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to create standalone Flex-start VMs, then you can create a compact placement policy to specify VM proximity.
- Resource allocation Dense Dense For MIG resize requests : Dense For standalone Flex-start VMs : Standard ( Compact policy optional) Standard ( Compact policy optional) Provisioning model Reservation-bound Reservation-bound Flex-start Spot Creation method To create VMs, you must do the following: Reserve capacity by contacting your account team .
- How to use Flex-start To use Flex-start to create VMs or clusters, you must complete the following steps: Optional: Create a compact placement policy .
- To minimize network latency by placing Flex-start VMs closer to each other, you can optionally apply a compact placement policy to the VMs .

### "Create an AI-optimized A4X Max instance \_|\_ AI Hypercomputer \_|\_ Google\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-instance](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-instance)
- Source ID: `site-docs-root-required-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a compact placement policy, select one of the following options: gcloud To create a compact placement policy, use the gcloud beta compute resource-policies create group-placement command : gcloud beta compute resource-policies create group-placement POLICY NAME \ --collocation=collocated \ --gpu-topology=1x72 \ --region= REGION Replace the following: POLICY NAME : the name of the compact placement policy.
- REST To create a compact placement policy, make a POST request to the beta resourcePolicies.insert method .
- Therefore, for a single A4X Max block, you can create 25 compact placement policies.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances { "machineType": "projects/ PROJECT ID /zones/ ZONE /machineTypes/a4x-maxgpu-4g-metal", "name": " INSTANCE NAME ", "disks":[ { "boot":true, "initializeParams":{ "diskSizeGb": " DISK SIZE ", "diskType": "hyperdisk-balanced", "sourceImage": "projects/ IMAGE PROJECT /global/images/family/ IMAGE FAMILY " }, "mode": "READ WRITE", "type": "PERSISTENT" } ], "serviceAccounts": [ { "email": "default", "scopes": [ "https://www.googleapis.com/auth/cloud-platform" ] } ], "networkInterfaces": [ { "accessConfigs": [ { "name": "external-nat", "type": "ONE TO ONE NAT" } ], "network": "projects/ NETWORK PROJECT ID /global/networks/ IDPF NETWORK PREFIX -net", "nicType": "IDPF", "stackType": "IPV6 ONLY", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ IDPF NETWORK PREFIX -sub-0" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ IDPF NETWORK PREFIX -net", "nicType": "IDPF", "stackType": "IPV6 ONLY", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ IDPF NETWORK PREFIX -sub-1" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" } ], "reservationAffinity":{ "consumeReservationType": "SPECIFIC RESERVATION", "key": "compute.googleapis.com/reservation-name", "values":[ " RESERVATION " ] }, "scheduling":{ "provisioningModel": "RESERVATION BOUND", "instanceTerminationAction": " TERMINATION ACTION ", "onHostMaintenance": "TERMINATE", "automaticRestart": true }, "resourcePolicies": [ "projects/ PROJECT ID /regions/ REGION /resourcePolicies/ POLICY NAME " ] } Replace the following: PROJECT ID : the project ID of the project where you want to create the A4X Max instance.


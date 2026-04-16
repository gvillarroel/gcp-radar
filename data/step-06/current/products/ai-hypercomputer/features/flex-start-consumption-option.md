---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:52:40.546Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "Flex-start consumption option"
feature_slug: "flex-start-consumption-option"
latest_feature_date: "2025-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models"
keywords:
  - "consumption"
  - "secured"
  - "option"
  - "obtain"
  - "users"
  - "lets"
  - "flex"
  - "start"
---

# Flex-start consumption option

Product: AI Hypercomputer
Coverage: MEDIUM

## Step 02 Summary

Flex-start lets users obtain secured-pool GPU capacity in advance for up to seven days, improving chances of acquiring high-demand resources.

## Extended Definition

Flex-start lets users obtain secured-pool GPU capacity in advance for up to seven days, improving chances of acquiring high-demand resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models)

## Supporting Pages

### Choose a consumption option \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models)
- Source ID: `site-docs-root-required-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Comparison of consumption options The following table summarizes the key differences between the consumption options: Consumption option Future reservations in AI Hypercomputer Future reservations for up to 90 days (in calendar mode) Flex-start Spot Supported machines A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High A4, A3 Ultra, A3 Mega, or A3 High with 8 GPUs Any GPU machine except A4X Max and A4X Any GPU machine except A4X Max and A4X Lifespan Unlimited Up to 90 days Up to 7 days Unlimited (but subject to preemption ) Preemptible Capacity assurance Very high .
- Resource allocation Dense Dense For MIG resize requests : Dense For standalone Flex-start VMs : Standard ( Compact policy optional) Standard ( Compact policy optional) Provisioning model Reservation-bound Reservation-bound Flex-start Spot Creation method To create VMs, you must do the following: Reserve capacity by contacting your account team .
- How to use Flex-start To use Flex-start to create VMs or clusters, you must complete the following steps: Optional: Create a compact placement policy .
- To minimize network latency by placing Flex-start VMs closer to each other, you can optionally apply a compact placement policy to the VMs .

### "Create an AI-optimized MIG with A3 High or A3 Mega machine type \_|\_ AI\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega)
- Source ID: `site-docs-root-required-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the following command to create four data networks, each with subnets and firewall rules. for N in $(seq 1 4); do gcloud compute networks create NETWORK NAME PREFIX -data-net-$N \ --project= PROJECT ID \ --subnet-mode=custom \ --mtu=8244 gcloud compute networks subnets create NETWORK NAME PREFIX -data-sub-$N \ --project= PROJECT ID \ --network= NETWORK NAME PREFIX -data-net-$N \ --region= REGION \ --range=192.168.$N.0/24 gcloud compute firewall-rules create NETWORK NAME PREFIX -data-internal-$N \ --project= PROJECT ID \ --network= NETWORK NAME PREFIX -data-net-$N \ --action=ALLOW \ --rules=tcp:0-65535,udp:0-65535,icmp \ --source-ranges=192.168.0.0/16 done Optional: Create a workload policy For the Flex-start consumption option , skip this section and proceed to create an instance template .
- To learn about the process to obtain capacity for your chosen consumption option, see Capacity overview .
- Obtain capacity : the process to obtain capacity differs for each consumption option.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /instanceTemplates { "name":" INSTANCE TEMPLATE NAME ", "properties":{ "machineType":" MACHINE TYPE ", "disks":[ { "boot":true, "initializeParams":{ "diskSizeGb":" DISK SIZE ", "diskType":"hyperdisk-balanced", "sourceImage":"projects/ IMAGE PROJECT /global/images/family/ IMAGE FAMILY " }, "mode":"READ WRITE", "type":"PERSISTENT" } ], "serviceAccounts": [ { "email": "default", "scopes": [ "https://www.googleapis.com/auth/cloud-platform" ] } ], "networkInterfaces": [ { "accessConfigs": [ { "name": "external-nat", "type": "ONE TO ONE NAT" } ], "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-0", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-0" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-1", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-1" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-2", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-2" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-3", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-3" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-4", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-4" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-5", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-5" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-6", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-6" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-7", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-7" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-8", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-8" } ], "reservationAffinity": { "consumeReservationType": "NO RESERVATION" }, "scheduling": { "instanceTerminationAction": "DELETE", "maxRunDuration": { "seconds": RUN DURATION }, "onHostMaintenance": "TERMINATE", "provisioningModel": "FLEX START" } } } Replace the following: INSTANCE TEMPLATE NAME : the name of the instance template.

### "Create an AI-optimized MIG with A4 or A3 Ultra machine type \_|\_ AI Hypercomputer\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4-or-a3ultra)
- Source ID: `site-docs-root-required-2`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optional: Create a workload policy For the Flex-start consumption option , skip this section and proceed to create an instance template .
- To learn about the process to obtain capacity for your chosen consumption option, see Capacity overview .
- Obtain capacity : the process to obtain capacity differs for each consumption option.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /instanceTemplates { "name":" INSTANCE TEMPLATE NAME ", "properties":{ "machineType":" MACHINE TYPE ", "disks":[ { "boot":true, "initializeParams":{ "diskSizeGb":" DISK SIZE ", "diskType":"hyperdisk-balanced", "sourceImage":"projects/ IMAGE PROJECT /global/images/family/ IMAGE FAMILY " }, "mode":"READ WRITE", "type":"PERSISTENT" } ], "serviceAccounts": [ { "email": "default", "scopes": [ "https://www.googleapis.com/auth/cloud-platform" ] } ], "networkInterfaces": [ { "accessConfigs": [ { "name": "external-nat", "type": "ONE TO ONE NAT" } ], "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-0", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-0" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-1", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-1" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-0" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-1" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-2" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-3" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-4" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-5" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-6" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-7" } ], "reservationAffinity": { "consumeReservationType": "NO RESERVATION" }, "scheduling": { "instanceTerminationAction": "DELETE", "maxRunDuration": { "seconds": RUN DURATION }, "onHostMaintenance": "TERMINATE", "provisioningModel": "FLEX START" } } } Replace the following: INSTANCE TEMPLATE NAME : the name of the instance template.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.199Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cloud TPU v3 machine types in GKE"
feature_slug: "cloud-tpu-v3-machine-types-in-gke"
latest_feature_date: "2024-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-ray"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/tpus"
keywords:
  - "hightpu"
  - "types"
  - "machine"
---

# Cloud TPU v3 machine types in GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Cloud TPU v3 ct3-hightpu-4t and ct3p-hightpu-4t machine types are generally available for supported GKE clusters in selected zones.

## Extended Definition

Cloud TPU v3 ct3-hightpu-4t and ct3p-hightpu-4t machine types are generally available for supported GKE clusters in selected zones.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-ray](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-ray)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/tpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/tpus)

## Supporting Pages

### "Serve an LLM using TPUs on GKE with KubeRay \_|\_ GKE AI/ML \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-ray](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-ray)
- Source ID: `site-docs-reference-required-4`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set up your environment: export ASSIST MODEL ID = meta-llama/Meta-Llama-3-8B-Instruct export SUMMARIZER MODEL ID = google/gemma-7b-it For Standard clusters, create an additional single-host TPU slice node pool: gcloud container node-pools create tpu-2 \ --location = ${ COMPUTE ZONE } \ --cluster = ${ CLUSTER NAME } \ --machine-type = MACHINE TYPE \ --num-nodes = 1 Replace the MACHINE TYPE with any of the following machine types: ct5lp-hightpu-8t to provision TPU v5e. ct6e-standard-8t to provision TPU v6e.
- Use Cloud Shell to create an Autopilot or Standard cluster: Autopilot Create a GKE Autopilot cluster with the Ray Operator add-on enabled: gcloud container clusters create-auto ${ CLUSTER NAME } \ --enable-ray-operator \ --release-channel = rapid \ --location = ${ COMPUTE REGION } Standard Create a Standard cluster with the Ray Operator add-on enabled: gcloud container clusters create ${ CLUSTER NAME } \ --release-channel = rapid \ --location = ${ COMPUTE ZONE } \ --workload-pool = ${ PROJECT ID } .svc.id.goog \ --machine-type = "n1-standard-4" \ --addons = RayOperator,GcsFuseCsiDriver Create a single-host TPU slice node pool: Llama-3-8B-Instruct gcloud container node-pools create tpu-1 \ --location = ${ COMPUTE ZONE } \ --cluster = ${ CLUSTER NAME } \ --machine-type = ct5lp-hightpu-8t \ --num-nodes = 1 GKE creates a TPU v5e node pool with a ct5lp-hightpu-8t machine type.
- Mistral-7B gcloud container node-pools create tpu-1 \ --location = ${ COMPUTE ZONE } \ --cluster = ${ CLUSTER NAME } \ --machine-type = ct5lp-hightpu-8t \ --num-nodes = 1 GKE creates a TPU v5e node pool with a ct5lp-hightpu-8t machine type.
- TypeScript: A superset of JavaScript that adds optional static typing and other features for large-scale, maintainable JavaScript applications.", "token ids": [781, 781, 29508, 29491, 27049, 29515, 1162, 1081, 1491, 2075, 1122, 5454, 4867, 29493, 7079, 1122, 4466, 29501, 2973, 7535, 1056, 1072, 4435, 11384, 5454, 3652, 3804, 29491, 781, 781, 29518, 29491, 22134, 29515, 1292, 4444, 1122, 1639, 26001, 1072, 1988, 3205, 29493, 1146, 29510, 29481, 13343, 2075, 1122, 5454, 4867, 29493, 6367, 5936, 29493, 1946, 6411, 29493, 1072, 11237, 22031, 29491, 781, 781, 29538, 29491, 12407, 29515, 1098, 3720, 29501, 15460, 4664, 17060, 4610, 2075, 1065, 1032, 6103, 3587, 1070, 9197, 29493, 3258, 13422, 1722, 4867, 29493, 5454, 4113, 29493, 1072, 19123, 29501, 5172, 9197, 29491, 781, 781, 29549, 29491, 1102, 29539, 29515, 9355, 1054, 1254, 8670, 29493, 1146, 29510, 29481, 3376, 2075, 1122, 9723, 25470, 14189, 29493, 2807, 4867, 1093, 2501, 1240, 1325, 1072, 5454, 4867, 1093, 2877, 29521, 29491, 12466, 1377, 781, 781, 29550, 29491, 6475, 7554, 29515, 1098, 26434, 1067, 1070, 27049, 1137, 14401, 12052, 1830, 25460, 1072, 1567, 4958, 1122, 3243, 29501, 6473, 29493, 9855, 1290, 27049, 9197, 29491, 2]} Llama 3.1 70B Set up port forwarding to the server: pkill -f "kubectl . port-forward .

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- When you create this example Deployment, GKE creates a node pool that contains a TPU v4 slice with a 2x2x2 topology and two ct4p-hightpu-4t machines. apiVersion: apps/v1 kind: Deployment metadata: name: tpu-workload labels: app: tpu-workload spec: replicas: 2 template: spec: nodeSelector: cloud.google.com/gke-tpu-accelerator: tpu-v4-podslice cloud.google.com/gke-tpu-topology: 2x2x2 containers: - name: tpu-job image: us-docker.pkg.dev/cloud-tpu-images/jax-ai-image/tpu:latest ports: - containerPort: 8431 # Port to export TPU runtime metrics, if supported. securityContext: privileged: true # Required for GKE versions earlier than 1.28 to access TPUs. command: - bash - -c - python -c 'import jax; print("Total TPU chips:", jax.device count())' resources: requests: google.com/tpu: 4 limits: google.com/tpu: 4 ports: - containerPort: 80 In this manifest, the following fields define TPU configuration: cloud.google.com/gke-tpu-accelerator : the TPU version and type .
- These priorities help to ensure that your clusters have efficient compute resource usage at scale, like in the following example scenarios: In clusters that have a small number of node pools and less resource usage, GKE creates new node pools more frequently and uses smaller machine types for those node pools.
- GKE creates new node pools less frequently and uses larger machine types for those node pools, so that Pod scheduling can continue while also slowing down progress towards cluster scalability and latency limits.
- For example, if you previously set the default machine series to N2, and you update the value to N4 in your configuration file, all new node pools use N4 machine types.

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/tpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/tpus)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Consider the following scenarios: The machine type ct5lp-hightpu-4t with a 2x4 topology contains two TPU slice nodes with four TPU chips each, for a total of eight TPU chips.
- For example, with a TPU node pool that has the ct5lp-hightpu-4t machine type and a topology of 16x16 , the node pool always has either 64 nodes or zero nodes.
- GKE Autopilot then provisions the underlying nodes with the appropriate machine types to satisfy the request.
- For the exact machine types available for each TPU version, refer to the tables in Plan TPUs in GKE .


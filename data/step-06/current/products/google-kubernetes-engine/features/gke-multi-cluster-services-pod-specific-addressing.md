---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.912Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Multi-cluster Services pod-specific addressing"
feature_slug: "gke-multi-cluster-services-pod-specific-addressing"
latest_feature_date: "2021-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-multihost-tpu-jetstream"
keywords:
  - "gke"
  - "multi"
  - "cluster"
  - "pod"
  - "specific"
  - "addressing"
  - "enables"
---

# GKE Multi-cluster Services pod-specific addressing

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Enables pod-specific addressing for GKE Multi-cluster Services.

## Extended Definition

Enables pod-specific addressing for GKE Multi-cluster Services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-multihost-tpu-jetstream](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-multihost-tpu-jetstream)

## Supporting Pages

### Harden your cluster's security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Default security configurations The following sections describe options that are configured by default in new clusters to mitigate specific security concerns, like vulnerabilities or risks.
- You can use the following methods for admission control in GKE clusters: Policy Controller : control workload admission at scale across multiple GKE clusters.
- PodSecurity admission controller : enforce the Kubernetes Pod Security Standards by applying predefined policies to entire clusters or to specific namespaces.
- You can grant IAM roles on various resources to principals in your cluster, such as specific Kubernetes ServiceAccounts or Pods.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- The following versions of GKE or later have been updated to address the providerID issue: 1.33.1-gke.1386000 1.32.4-gke.1533000 1.31.9-gke.1119000 1.30.12-gke.1208000 Optionally, if you cannot upgrade, implement the following validating admission policy on your cluster to mitigate the providerID issue: apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicy metadata : name : validate - node - providerid spec : failurePolicy : Fail matchConstraints : resourceRules : - apiGroups : [ "" ] apiVersions : [ "v1" ] operations : [ "CREATE", "UPDATE" ] resources : [ "nodes" ] matchConditions : - name : "has-providerid" expression : "has(object.spec.providerID)" validations : - expression : "object.spec.providerID == '' object.spec.providerID.endsWith('/' + object.metadata.name)" message : "node.spec.providerID must match the node name" --- apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicyBinding metadata : name : validate - node - providerid - binding spec : policyName : validate - node - providerid validationActions : [ Deny ] Use node restricted labels when isolating workloads to specific nodes as a security control If you are using labels for node isolation, as described in Kubernetes documentation , use node restricted labels (for example, labels of the form node-restriction.kubernetes.io/example-constraint ) in node affinity and node selector terms used for workload isolation.
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- Check if your GKE clusters are using ingress-nginx by using one of the following commands: Check an individual cluster: kubectl get pods --all-namespaces --selector app.kubernetes.io/name = ingress-nginx Check multiple clusters at once using a Cloud Asset Inventory resource search query : gcloud asset search-all-resources \ --scope = 'organizations/ ORGANIZATION ID ' \ --asset-types = 'k8s.io/Pod' \ --query = 'labels."app.kubernetes.io/name"="ingress-nginx"' Replace ORGANIZATION ID with your organization resource ID.
- This lets you secure your nodes until the new version becomes the default for your specific release channel If your cluster uses in-cluster Cloud Service Mesh, you must manually upgrade to one of the following versions ( release notes ): 1.17.8-asm.8 1.18.6-asm.2 1.19.5-asm.4 What vulnerabilities are being addressed by this patch?

### "Serve LLMs using multi-host TPUs on GKE with JetStream and Pathways \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-multihost-tpu-jetstream](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-multihost-tpu-jetstream)
- Source ID: `site-docs-reference-required-4`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create one TPU v6e node pool with a 4x4 topology and four nodes each: gcloud container node-pools create multihost-np \ --project = ${ PROJECT ID } \ --location = ${ CONTROL PLANE LOCATION } \ --node-locations = ${ NODE LOCATION } \ --cluster = ${ CLUSTER NAME } \ --machine-type = ${ MACHINE TYPE } \ --num-nodes = ${ WORKERS PER SLICE } \ --tpu-topology = ${ TOPOLOGY } \ --scopes cloud-platform \ --placement-type = COMPACT \ --workload-metadata = GCE METADATA Note: The --workload-metadata=GCE METADATA denotes that the node pool has Workload Identity Federation for GKE disabled.
- In this guide, you will walk through how to provision a GKE cluster with the multi-host TPU slices and use the Pathways on Cloud binaries, launch the JetStream Server with MaxText framework, and make multi-host inference requests.
- Deploy JetStream Pathways with disaggregated serving Save the following manifest as jetstream-pathways-disagg-llama-2-70b-2-2x4.yaml : apiVersion : leaderworkerset.x-k8s.io/v1 kind : LeaderWorkerSet metadata : name : jetstream-pathways annotations : leaderworkerset.sigs.k8s.io/subgroup-exclusive-topology : cloud.google.com/gke-nodepool spec : replicas : 1 leaderWorkerTemplate : subGroupPolicy : subGroupSize : 2 leaderTemplate : metadata : labels : app : jetstream-pathways spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v6e-slice cloud.google.com/gke-tpu-topology : 2x4 tolerations : - key : "google.com/tpu" operator : "Exists" effect : "NoSchedule" containers : - name : pathways-proxy image : us-docker.pkg.dev/cloud-tpu-v2-images/pathways/proxy server:jax-0.5.3 args : - --resource manager address=$(LWS LEADER ADDRESS):38677 - --server port=38681 - --gcs scratch location=gs://cloud-pathways-staging/tmp - --xla jf auto cross replica sharding=false - --xla tpu enable windowed einsum for reduce scatter=false - --xla tpu enable windowed einsum for all gather=false - --xla tpu prefer latch optimized rhs layouts=true - --xla tpu enable experimental fusion cost model=false - --xla tpu dot dot fusion duplicated=false - --xla tpu dot dot fusion=true - --xla jf conv input fusion=true - --xla jf conv output fusion=true - --xla tpu rwb fusion=false - --xla tpu copy fusion pad unpad ratio=0 - --xla tpu licm size inflation ratio=1 - --xla tpu copy elision analysis allowance=150000 - --xla tpu copy insertion use region analysis limit=10000 - --xla tpu order dot after layout=true - --xla jf rematerialization percent shared memory limit=100 - --xla tpu use repeated instance for preferred prefetch time=true - --xla tpu enforce prefetch fifo order=false - --xla tpu prefetch interval picker size override=6000000 - --xla tpu async copy bandwidth scaling factor=1 - --xla tpu nd short transfer max chunks=-1 - --xla tpu enable aggressive broadcast priority update=true - --xla tpu alternate memory benefit scaling factor for large buffers=SQRT - --xla tpu memory bound loop optimizer options=enabled:true - --xla tpu enable copy fusion=true - --xla tpu enable cross program prefetch freeing=false - --xla tpu enable dot strength reduction=true - --xla tpu layout use dot grouping=false - --xla tpu msa inefficient use to copy ratio=0.5 - --xla tpu reduce loop fusion dup with unfusable user=false - --xla tpu vector load fusion window=1024 - --xla tpu vector store fusion window=256 - --xla jf conv reshape fusion=false - --xla tpu input conv multi users=false - --xla tpu enable multi level input dot dot fusion=false - --xla tpu enable multi level output dot dot fusion=false - --xla tpu dot dot fusion separable convs only=false - --xla tpu enable multi level nested loop fusion=true - --xla tpu nested dot fusion=true - --xla tpu enable multi level nested dot fusion=false - --xla jf enable multi output fusion=true - --xla tpu use lp llo scheduler for dot dot fusions=false - --xla tpu enable flash attention=true imagePullPolicy : Always ports : - containerPort : 38681 - name : pathways-rm env : - name : HOST ADDRESS value : "$(LWS LEADER ADDRESS)" - name : TPU SKIP MDS QUERY value : "true" image : us-docker.pkg.dev/cloud-tpu-v2-images/pathways/server:jax-0.5.3 args : - --server port=38677 - --gcs scratch location=PATHWAYS BUCKET - --node type=resource manager - --instance count=2 - --instance type=tpuv6e:2x4 imagePullPolicy : Always ports : - containerPort : 38677 - name : jax-tpu image : us-docker.pkg.dev/cloud-tpu-images/inference/jetstream-pathways:v0.2.0 args : - MaxText/configs/base.yml - tokenizer path=assets/tokenizer.llama2 - load parameters path=CHECKPOINT PATH - max prefill predict length=1024 - max target length=2048 - model name=llama2-70b - ici fsdp parallelism=1 - ici autoregressive parallelism=1 - ici tensor parallelism=-1 - scan layers=false - weight dtype=bfloat16 - per device batch size=27 - checkpoint is quantized=true - quantization=int8 - quantize kvcache=true - compute axis order=0,2,1,3 - ar cache axis order=0,2,1,3 - stack prefill result cache=True - inference server=ExperimentalMaxtextDisaggregatedServer 8 - inference benchmark test=True - enable model warmup=True env : - name : LOG LEVEL value : "INFO" imagePullPolicy : Always securityContext : capabilities : add : [ "SYS PTRACE" , "NET ADMIN" , "SYS TIME" ] ports : - containerPort : 9000 startupProbe : httpGet : path : /healthcheck port : 8000 scheme : HTTP periodSeconds : 1 initialDelaySeconds : 240 failureThreshold : 10000 livenessProbe : httpGet : path : /healthcheck port : 8000 scheme : HTTP periodSeconds : 60 failureThreshold : 100 readinessProbe : httpGet : path : /healthcheck port : 8000 scheme : HTTP periodSeconds : 60 failureThreshold : 100 - name : jetstream-http image : us-docker.pkg.dev/cloud-tpu-images/inference/jetstream-http:v0.2.3 imagePullPolicy : Always ports : - containerPort : 8000 size : 5 workerTemplate : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v6e-slice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : worker args : - --server port=38679 - --resource manager address=$(LWS LEADER ADDRESS):38677 - --gcs scratch location=PATHWAYS BUCKET image : us-docker.pkg.dev/cloud-tpu-v2-images/pathways/server:jax-0.5.3 imagePullPolicy : Always ports : - containerPort : 38679 resources : limits : google.com/tpu : "4" --- apiVersion : v1 kind : Service metadata : name : jetstream-svc spec : selector : app : jetstream-pathways ports : - protocol : TCP name : jetstream-http port : 8000 targetPort : 8000 Set the value of the load parameters path field to your checkpoint path that was produced in the checkpoint conversion process.
- Set the default environment variables: export NODE POOL NAME = dis-v6e-8 export NODE POOL SIZE = 2 export MACHINE TYPE = ct6e-standard-4t export TOPOLOGY = 2x4 export WORKERS PER SLICE = 2 Create two node pools that use v6e-8 nodes: for i in $( seq 1 ${ NODE POOL SIZE } ) ; do gcloud container node-pools create ${ NODE POOL NAME } - ${ i } -np \ --project = ${ PROJECT ID } \ --cluster = ${ CLUSTER NAME } \ --location = ${ CONTROL PLANE LOCATION } \ --node-locations = ${ NODE LOCATION } \ --machine-type = ${ MACHINE TYPE } \ --num-nodes = ${ WORKERS PER SLICE } \ --tpu-topology = ${ TOPOLOGY } \ --scopes = cloud-platform \ --workload-metadata = GCE METADATA done Checkpoint conversion To convert a Meta Llama 2-70B checkpoint to a MaxText-compatible int8 inference checkpoint, complete the steps in Checkpoint conversion with Llama2-70B .


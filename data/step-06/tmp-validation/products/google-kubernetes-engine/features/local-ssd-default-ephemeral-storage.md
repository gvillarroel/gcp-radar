---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.242Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Local SSD default ephemeral storage"
feature_slug: "local-ssd-default-ephemeral-storage"
latest_feature_date: "2023-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "ephemeral"
  - "volumes"
  - "local"
  - "storage"
  - "uses"
  - "default"
---

# Local SSD default ephemeral storage

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE uses Local SSD volumes as ephemeral storage by default on third-generation machine series and makes the Local NVMe SSD block count optional.

## Extended Definition

GKE uses Local SSD volumes as ephemeral storage by default on third-generation machine series and makes the Local NVMe SSD block count optional.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "Manually optimize Cloud Storage FUSE CSI driver for performance \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf)
- Source ID: `site-docs-reference-2`
- Final score: 187
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Pod manifest with the following specification to consume the PersistentVolumeClaim, depending on whether you are using Local SSD-backed file caching or RAM disk-backed file caching: Local SSD apiVersion : v1 kind : Pod metadata : name : gcs-fuse-csi-example-pod namespace : NAMESPACE annotations : gke-gcsfuse/volumes : "true" gke-gcsfuse/cpu-limit : "0" gke-gcsfuse/memory-limit : "0" gke-gcsfuse/ephemeral-storage-limit : "0" spec : containers : Your workload container spec ... volumeMounts : - name : serving-bucket-vol mountPath : /serving-data readOnly : true serviceAccountName : KSA NAME volumes : - name : serving-bucket-vol persistentVolumeClaim : claimName : serving-bucket-pvc RAM disk apiVersion : v1 kind : Pod metadata : name : gcs-fuse-csi-example-pod namespace : NAMESPACE annotations : gke-gcsfuse/volumes : "true" gke-gcsfuse/cpu-limit : "0" gke-gcsfuse/memory-limit : "0" gke-gcsfuse/ephemeral-storage-limit : "0" spec : containers : Your workload container spec ... volumeMounts : - name : serving-bucket-vol mountPath : /serving-data readOnly : true serviceAccountName : KSA NAME volumes : - name : gke-gcsfuse-cache # gcsfuse file cache backed by RAM Disk emptyDir : medium : Memory - name : serving-bucket-vol persistentVolumeClaim : claimName : serving-bucket-pvc Apply the manifest to the cluster: kubectl apply -f POD FILE PATH Replace POD FILE PATH with the path to your YAML file.
- If your VM family supports Local SSD but doesn't have the ephemeral storage on Local SSD enabled by default, you can enable Local SSD in your node pool.
- GKE uses an emptyDir volume by default for Cloud Storage FUSE file caching backed by the ephemeral storage configured on the node.
- To check if your node has ephemeral storage on Local SSD enabled, run the following command: kubectl describe node <code><var>NODE NAME</var></code> grep "cloud.google.com/gke-ephemeral-storage-local-ssd" For TPU VM families, especially v6+, we recommend using RAM as a file cache for the best performance as these VM instances have larger RAM.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- This lets you secure your nodes until the new version becomes the default for your specific release channel If your cluster uses in-cluster Cloud Service Mesh, you must manually upgrade to one of the following versions ( release notes ): 1.17.8-asm.8 1.18.6-asm.2 1.19.5-asm.4 What vulnerabilities are being addressed by this patch?
- Google Distributed Cloud Virtual for Bare Metal uses Envoy by default for Ingress, so Ingress services may be vulnerable to denial of service.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.
- Unrelated fields omitted Or by using Policy Controller or Gatekeeper with this constraint template and applying it, for example: Dropping CAP NET RAW with Gatekeeper (requires the K8sPSPCapabilities template) apiversion: constraints.gatekeeper.sh/v1beta1 kind: K8sPSPCapabilities metadata: name: forbid-cap-net-raw spec: match: kinds: - apiGroups: [""] kinds: ["Pod"] namespaces: #List of namespaces to enforce this constraint on - default If running gatekeeper >= v3.1.0-beta.5, you can exclude namespaces rather than including them above. excludedNamespaces: - kube-system parameters: requiredDropCapabilities: - "NET RAW" Or by updating your Pod specs: Dropping CAP NET RAW from a Pod: apiVersion: v1 kind: Pod metadata: name: no-cap-net-raw spec: containers: -name: my-container ... securityContext: capabilities: drop: -NET RAW Note: GKE Sandbox pods already disable CAP NET RAW by default and do not require the changes above.

### "Optimize GKE resource utilization for mixed AI/ML training and inference\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads)
- Source ID: `site-docs-reference-required-4`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This manifest defines the fine-tuning Job. apiVersion : v1 kind : Service metadata : name : headless-svc-l4 spec : clusterIP : None # clusterIP must be None to create a headless service selector : job-name : finetune-gemma-l4 # must match Job name --- apiVersion : batch/v1 kind : Job metadata : name : finetune-gemma-l4 labels : kueue.x-k8s.io/queue-name : lq spec : backoffLimit : 4 completions : 2 parallelism : 2 completionMode : Indexed suspend : true # Set to true to allow Kueue to control the Job when it starts template : metadata : labels : app : finetune-job annotations : gke-gcsfuse/volumes : "true" gke-gcsfuse/memory-limit : "35Gi" spec : priorityClassName : low-priority-preempting containers : - name : gpu-job imagePullPolicy : Always image : us-docker.pkg.dev/google-samples/containers/gke/gemma-fine-tuning:v1.0.0 ports : - containerPort : 29500 resources : requests : nvidia.com/gpu : "2" limits : nvidia.com/gpu : "2" command : - bash - -c - accelerate launch \ --config file fsdp config.yaml \ --debug \ --main process ip finetune-gemma-l4-0.headless-svc-l4 \ --main process port 29500 \ --machine rank ${JOB COMPLETION INDEX} \ --num processes 4 \ --num machines 2 \ fine tune.py env : - name : "EXPERIMENT" value : "finetune-experiment" - name : MODEL NAME value : "google/gemma-2-2b" - name : NEW MODEL value : "gemma-ft" - name : MODEL PATH value : "/model-data/model-gemma2/experiment" - name : DATASET NAME value : "b-mc2/sql-create-context" - name : DATASET LIMIT value : "5000" - name : EPOCHS value : "1" - name : GRADIENT ACCUMULATION STEPS value : "2" - name : CHECKPOINT SAVE STEPS value : "10" - name : HF TOKEN valueFrom : secretKeyRef : name : hf-secret key : hf api token volumeMounts : - mountPath : /dev/shm name : dshm - name : gcs-fuse-csi-ephemeral mountPath : /model-data readOnly : false nodeSelector : cloud.google.com/gke-accelerator : nvidia-l4 restartPolicy : OnFailure serviceAccountName : default subdomain : headless-svc-l4 terminationGracePeriodSeconds : 60 volumes : - name : dshm emptyDir : medium : Memory - name : gcs-fuse-csi-ephemeral csi : driver : gcsfuse.csi.storage.gke.io volumeAttributes : bucketName : < MODEL BUCKET > mountOptions : "implicit-dirs" gcsfuseLoggingSeverity : warning Apply the manifest to create the fine-tuning Job: cd ${ EXAMPLE HOME } /workloads sed -e "s/<MODEL BUCKET>/ $MODEL BUCKET /g" \ -e "s/<PROJECT ID>/ $PROJECT ID /g" \ -e "s/<REGION>/ $REGION /g" \ fine-tune-l4.yaml kubectl apply --filename = - --namespace = llm Verify that your Deployments are running.
- It uses tensor parallelism , by setting the NUM SHARD environment variable, to fit the model into GPU memory. apiVersion : apps/v1 kind : Deployment metadata : name : tgi-gemma-deployment labels : app : gemma-server spec : replicas : 1 selector : matchLabels : app : gemma-server template : metadata : labels : app : gemma-server ai.gke.io/model : gemma-2-9b-it ai.gke.io/inference-server : text-generation-inference examples.ai.gke.io/source : user-guide kueue.x-k8s.io/queue-name : lq spec : priorityClassName : high-priority-preempting containers : - name : inference-server image : us-docker.pkg.dev/deeplearning-platform-release/gcr.io/huggingface-text-generation-inference-cu121.2-1.ubuntu2204.py310 resources : requests : cpu : "4" memory : "30Gi" ephemeral-storage : "30Gi" nvidia.com/gpu : "2" limits : cpu : "4" memory : "30Gi" ephemeral-storage : "30Gi" nvidia.com/gpu : "2" env : - name : AIP HTTP PORT value : '8000' - name : NUM SHARD value : '2' - name : MODEL ID value : google/gemma-2-9b-it - name : HUGGING FACE HUB TOKEN valueFrom : secretKeyRef : name : hf-secret key : hf api token volumeMounts : - mountPath : /dev/shm name : dshm volumes : - name : dshm emptyDir : medium : Memory nodeSelector : cloud.google.com/gke-accelerator : "nvidia-l4" --- apiVersion : v1 kind : Service metadata : name : llm-service spec : selector : app : gemma-server type : ClusterIP ports : - protocol : TCP port : 8000 targetPort : 8000 Apply the manifest by running the following command: kubectl apply --filename = tgi-gemma-2-9b-it-hp.yaml --namespace = llm The deployment operation will take a few minutes to complete.
- The preemption field in the ClusterQueue configuration references the PriorityClasses to determine which Pods can be preempted when resources are scarce. apiVersion : kueue.x-k8s.io/v1beta1 kind : ClusterQueue metadata : name : "cluster-queue" spec : namespaceSelector : {} # match all. preemption : reclaimWithinCohort : LowerPriority withinClusterQueue : LowerPriority resourceGroups : - coveredResources : [ "cpu" , "memory" , "nvidia.com/gpu" , "ephemeral-storage" ] flavors : - name : default-flavor resources : - name : "cpu" nominalQuota : 72 - name : "memory" nominalQuota : 288Gi - name : "nvidia.com/gpu" nominalQuota : 6 - name : "ephemeral-storage" nominalQuota : 200Gi LocalQueue This manifest creates a Kueue LocalQueue named lq in the llm namespace. apiVersion : kueue.x-k8s.io/v1beta1 kind : LocalQueue metadata : namespace : llm # LocalQueue under llm namespace name : lq spec : clusterQueue : cluster-queue # Point to the ClusterQueue View the default-priorityclass.yaml , low-priorityclass.yaml , and high-priorityclass.yaml files.
- This ConfigMap customizes Kueue to exclude management of Pods in the kube-system and kueue-system namespaces. apiVersion : v1 kind : ConfigMap metadata : name : kueue-manager-config data : controller manager config.yaml : apiVersion: config.kueue.x-k8s.io/v1beta1 kind: Configuration health: healthProbeBindAddress: :8081 metrics: bindAddress: :8080 enableClusterQueueResources: true webhook: port: 9443 leaderElection: leaderElect: true resourceName: c1f6bfd2.kueue.x-k8s.io controller: groupKindConcurrency: Job.batch: 5 Pod: 5 Workload.kueue.x-k8s.io: 5 LocalQueue.kueue.x-k8s.io: 1 ClusterQueue.kueue.x-k8s.io: 1 ResourceFlavor.kueue.x-k8s.io: 1 clientConnection: qps: 50 burst: 100 #pprofBindAddress: :8083 #waitForPodsReady: enable: false timeout: 5m blockAdmission: false requeuingStrategy: timestamp: Eviction backoffLimitCount: null # null indicates infinite requeuing backoffBaseSeconds: 60 backoffMaxSeconds: 3600 #manageJobsWithoutQueueName: true managedJobsNamespaceSelector: matchExpressions: - key: kubernetes.io/metadata.name operator: NotIn values: [ kube-system, kueue-system ] #internalCertManagement: enable: false webhookServiceName: "" webhookSecretName: "" integrations: frameworks: - "batch/job" - "kubeflow.org/mpijob" - "ray.io/rayjob" - "ray.io/raycluster" - "jobset.x-k8s.io/jobset" - "kubeflow.org/paddlejob" - "kubeflow.org/pytorchjob" - "kubeflow.org/tfjob" - "kubeflow.org/xgboostjob" - "kubeflow.org/jaxjob" - "workload.codeflare.dev/appwrapper" - "pod" - "deployment" # requires enabling pod integration - "statefulset" # requires enabling pod integration - "leaderworkerset.x-k8s.io/leaderworkerset" # requires enabling pod integration externalFrameworks: - "Foo.v1.example.com" #fairSharing: enable: true preemptionStrategies: [LessThanOrEqualToFinalShare, LessThanInitialShare] #admissionFairSharing: usageHalfLifeTime: "168h" # 7 days usageSamplingInterval: "5m" resourceWeights: # optional, defaults to 1 for all resources if not specified cpu: 0 # if you want to completely ignore cpu usage memory: 0 # ignore completely memory usage example.com/gpu: 100 # and you care only about GPUs usage #resources: excludeResourcePrefixes: [] transformations: - input: nvidia.com/mig-4g.5gb strategy: Replace Retain outputs: example.com/accelerator-memory: 5Gi example.com/accelerator-gpc: 4 #objectRetentionPolicies: workloads: afterFinished: null # null indicates infinite retention, 0s means no retention at all afterDeactivatedByKueue: null # null indicates infinite retention, 0s means no retention at all In Cloud Shell, run the following command to install Kueue: cd ${ EXAMPLE HOME } kubectl kustomize kueue kubectl apply --server-side --filename = - Wait until the Kueue Pods are ready: watch kubectl --namespace = kueue-system get pods The output should look similar to the following: NAME READY STATUS RESTARTS AGE kueue-controller-manager-bdc956fc4-vhcmx 1/1 Running 0 3m15s In the /workloads directory, view the flavors.yaml , cluster-queue.yaml , and local-queue.yaml files.


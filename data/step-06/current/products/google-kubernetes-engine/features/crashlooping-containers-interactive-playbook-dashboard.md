---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.791Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Crashlooping containers interactive playbook dashboard"
feature_slug: "crashlooping-containers-interactive-playbook-dashboard"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
keywords:
  - "crashlooping"
  - "containers"
  - "interactive"
  - "playbook"
  - "dashboard"
  - "monitoring"
  - "provides"
  - "troubleshooting"
---

# Crashlooping containers interactive playbook dashboard

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring provides an interactive playbook dashboard for troubleshooting crashlooping containers.

## Extended Definition

Cloud Monitoring provides an interactive playbook dashboard for troubleshooting crashlooping containers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)

## Supporting Pages

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To explore the interactive playbooks, do the following: In the Google Cloud console, go to the dashboard Dashboards page: Go to Dashboards If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Interactive playbooks Kube state metrics are also used in the GKE interactive playbooks for troubleshooting unschedulable or crashlooping Pods.
- Click the name of a "GKE Interactive Playbook" dashboard in the list.
- PromQL metric name Cloud Monitoring metric name Kind, Type, Unit Monitored resources Required GKE version Description Labels kube pod container status ready kube pod container status ready/gauge GAUGE , DOUBLE , 1 prometheus target 1.27.2-gke.1200 Describes whether the containers readiness check succeeded.

### "Orchestrate Multislice workloads using JobSet and Kueue \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- Source ID: `site-docs-reference-required-4`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- To view comprehensive information about the health and performance of JobSets, go to the JobSet monitoring dashboard in the Google Cloud console: Go to JobSet monitoring dashboard The JobSet monitoring dashboard includes three tabs: Overview : this tab shows the underlying JobSet infrastructure, such as JobSet status, replica readiness, and replica state.
- Dashboards To view the status of your TPU multi-host node pools on GKE, go to the GKE TPU Node Pool Status dashboard provided by Cloud Monitoring: Go to GKE TPU Node Pool Status For more information, see Monitor health metrics for TPU nodes and node pools .
- Install the JobSet API in your cluster: VERSION = v0.8.1 kubectl apply --server-side -f https://github.com/kubernetes-sigs/jobset/releases/download/ $VERSION /manifests.yaml Create the following jobsets-multislice.yaml manifest: Autopilot apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-1slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-2slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' sleep 60 resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-3slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 3 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 Standard apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-1slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-2slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' sleep 60 resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-3slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 3 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 Apply the jobsets-multislice.yaml manifest: kubectl apply -f jobsets-multislice.yaml GKE creates the Jobs with the following resource requests: The multislice-1slice JobSet creates one Job that requires one TPU slice in total.
- Update your ClusterQueue to have a preemption policy: apiVersion : kueue.x-k8s.io/v1beta1 kind : ResourceFlavor metadata : name : "vlp-24" spec : nodeLabels : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 --- apiVersion : kueue.x-k8s.io/v1beta1 kind : ClusterQueue metadata : name : "cluster-queue" spec : namespaceSelector : {} resourceGroups : - coveredResources : [ "google.com/tpu" ] flavors : - name : "vlp-24" resources : - name : "google.com/tpu" nominalQuota : 24 preemption : reclaimWithinCohort : Any withinClusterQueue : LowerPriority --- apiVersion : kueue.x-k8s.io/v1beta1 kind : LocalQueue metadata : namespace : default name : multislice-queue spec : clusterQueue : cluster-queue Create a PriorityClass for each distinct priority level you want to assign to workloads: apiVersion : scheduling.k8s.io/v1 kind : PriorityClass metadata : name : low-priority value : 100 globalDefault : false description : "This low priority class should be used for some Pods only." Assign the priorityClassName to your JobSet: Autopilot apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : low-priority labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 priorityClassName : low-priority containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 # Number of TPU chips per worker Standard apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : low-priority labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 priorityClassName : low-priority containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 # Number of TPU chips per worker GKE includes a preemption policy, which defines how Kueue assigns the available resources.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- For an interactive guide in the Google Cloud console for deploying and exposing an app in an Autopilot cluster, click Guide me : Guide me The following table shows some common requirements and provides recommendations for what you should do: Use case Resources Control individual node properties when scaling a cluster Create a custom ComputeClass and request it in your workload manifest.
- Use the GKE dashboard in Monitoring to visualize the status of your clusters.
- GKE also provides an Observability dashboard in the Google Cloud console.
- Autopilot clusters collect the following types of logs and metrics automatically, adhering to Google's best practices for telemetry collection: Logs for Cloud Logging System logs Workload logs Admin Activity audit logs Data Access audit logs Metrics for Cloud Monitoring System metrics Workload metrics (from Google Cloud Managed Service for Prometheus) No additional configuration is required to enable logging and monitoring.


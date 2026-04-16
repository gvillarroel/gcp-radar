---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.258Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Unschedulable pods interactive playbook dashboard"
feature_slug: "unschedulable-pods-interactive-playbook-dashboard"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue"
keywords:
  - "unschedulable"
  - "troubleshooting"
  - "interactive"
  - "playbook"
  - "dashboard"
  - "monitoring"
  - "provides"
  - "pods"
---

# Unschedulable pods interactive playbook dashboard

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring provides an interactive playbook dashboard for troubleshooting unschedulable pods.

## Extended Definition

Cloud Monitoring provides an interactive playbook dashboard for troubleshooting unschedulable pods.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)

## Supporting Pages

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Interactive playbooks Kube state metrics are also used in the GKE interactive playbooks for troubleshooting unschedulable or crashlooping Pods.
- To explore the interactive playbooks, do the following: In the Google Cloud console, go to the dashboard Dashboards page: Go to Dashboards If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- For more information about these failure modes, see the following troubleshooting documents: Crashlooping Pods Unschedulable Pods Without the kube state metrics package enabled, the primary way to detect pod-scheduling issues is to query "Failed Scheduling" log events.
- Click the name of a "GKE Interactive Playbook" dashboard in the list.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- For an interactive guide in the Google Cloud console for deploying and exposing an app in an Autopilot cluster, click Guide me : Guide me The following table shows some common requirements and provides recommendations for what you should do: Use case Resources Control individual node properties when scaling a cluster Create a custom ComputeClass and request it in your workload manifest.
- The container-optimized compute platform provides the following benefits: Compute capacity matches workloads : Autopilot dynamically adjusts the compute capacity for the container-optimized compute platform based on factors like the number of Pods and resource consumption.
- Best practice : To automatically scale the number of Pods in your cluster, use a mechanism such as Kubernetes horizontal Pod autoscaling , which can scale Pods based on the built-in CPU and memory metrics, or based on custom metrics from Cloud Monitoring.
- The whenUnsatisfiable: ScheduleAnyway setting also helps to prevent Pods from becoming unschedulable in case of temporary topology imbalances, for example, during a zone failure.

### "Orchestrate Multislice workloads using JobSet and Kueue \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- Source ID: `site-docs-reference-required-4`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- To view the node pools where each JobSet in a specific cluster has scheduled Pods, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster "}[ ${ interval} ] ) To identify the node pools where a specific Jobset has been scheduled, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster ", entity name = " multislice-. "}[ ${ interval} ] ) To identify the Jobsets that have been scheduled on a specific node pool, run the following PromQL query: avg over time ( kubernetes io : node pool assigned jobsets { monitored resource = " k8s node pool ", cluster name = " multislice-cluster ", node pool name = " multislice-np "}[ ${ interval} ] ) Monitor JobSet uptime, times to recover (TTR), and times between interruptions (TBI) The following metrics are useful for monitoring the availability of a JobSet: kubernetes.io/jobset/uptime : total time the JobSet has been available. kubernetes.io/jobset/times to recover : distribution of recovery period for a JobSet.
- To view comprehensive information about the health and performance of JobSets, go to the JobSet monitoring dashboard in the Google Cloud console: Go to JobSet monitoring dashboard The JobSet monitoring dashboard includes three tabs: Overview : this tab shows the underlying JobSet infrastructure, such as JobSet status, replica readiness, and replica state.
- Dashboards To view the status of your TPU multi-host node pools on GKE, go to the GKE TPU Node Pool Status dashboard provided by Cloud Monitoring: Go to GKE TPU Node Pool Status For more information, see Monitor health metrics for TPU nodes and node pools .
- Install the JobSet API in your cluster: VERSION = v0.8.1 kubectl apply --server-side -f https://github.com/kubernetes-sigs/jobset/releases/download/ $VERSION /manifests.yaml Create the following jobsets-multislice.yaml manifest: Autopilot apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-1slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-2slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' sleep 60 resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-3slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 3 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 Standard apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-1slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-2slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' sleep 60 resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-3slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 3 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 Apply the jobsets-multislice.yaml manifest: kubectl apply -f jobsets-multislice.yaml GKE creates the Jobs with the following resource requests: The multislice-1slice JobSet creates one Job that requires one TPU slice in total.


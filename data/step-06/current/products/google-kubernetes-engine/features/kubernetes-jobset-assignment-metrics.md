---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.663Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Kubernetes JobSet assignment metrics"
feature_slug: "kubernetes-jobset-assignment-metrics"
latest_feature_date: "2026-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue"
keywords:
  - "kubernetes"
  - "jobset"
  - "assignment"
  - "metrics"
  - "gke"
  - "provides"
  - "system"
  - "show"
---

# Kubernetes JobSet assignment metrics

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE provides system metrics that show which node pools and nodes are running Pods for a Kubernetes JobSet.

## Extended Definition

GKE provides system metrics that show which node pools and nodes are running Pods for a Kubernetes JobSet.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)

## Supporting Pages

### "Collect and view control plane metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/control-plane-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- For example, to measure the API server traffic per instance of the Kubernetes control plane, use the following PromQL query: sum by (instance) (increase(apiserver request total{cluster=" CLUSTER NAME "}[1m])) To query the unsuccessful requests, filter the code label for 4xx and 5xx values by using the following PromQL query: sum(rate(apiserver request total{code= "[45].."}[5m])) To query the successful requests, filter the code label for 2xx values by using the following PromQL query: sum(rate(apiserver request total{code= "2.."}[5m])) To query the rejected requests by the API server per instance of the Kubernetes control plane, filter the code label for the value 429 ( http.StatusTooManyRequests ) by using the following PromQL query: sum by (instance) (increase(apiserver request total{cluster=" CLUSTER NAME ", code="429"}[1m])) Saturation You can measure the saturation in your system by using the apiserver current inflight requests and apiserver storage objects metrics.
- Click Save Changes . gcloud Update your cluster to collect metrics emitted by the Kubernetes API server, Scheduler, and Controller Manager: gcloud container clusters update CLUSTER NAME \ --location = COMPUTE LOCATION \ --monitoring = SYSTEM,API SERVER,SCHEDULER,CONTROLLER MANAGER Replace the following: CLUSTER NAME : the name of the cluster.
- The following tables of Kubernetes control plane metrics show two versions of each metric name: PromQL metric name : When using PromQL in Cloud Monitoring pages of the Google Cloud console or in PromQL fields of the Cloud Monitoring API , use the PromQL metric name.
- Requirements Sending metrics emitted by Kubernetes control plane components to Cloud Monitoring has the following requirements: The cluster must have system metrics enabled.

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- For example, to compare the number of replicas in a READY state to the expected number of replicas in a single JobSet, plot both metrics on a single chart by using the following PromQL queries: kube jobset specified replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} and kube jobset ready replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} To alert on a failed or unavailable JobSet rollout, you can use the following PromQL expression: kube jobset specified replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} kube jobset ready replicas{cluster=" CLUSTER ", namespace=" NAMESPACE ", jobset name=" JOBSET NAME "} The condition label on the kube jobset status condition metric can also help you detect when JobSets run into various failure modes, for example: The Failed condition indicates that the JobSet failed its execution: kube jobset status condition{jobset name=" JOBSET NAME , condition="Failed"} == 1 The Suspended condition indicates that the JobSet is suspended: kube jobset status condition{jobset name=" JOBSET NAME , condition="Suspended"} == 1 Some of the query and alert expressions in this section were adapted from the kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
- JobSet metrics A Jobset is a workload API that lets you manage a group of Kubernetes Jobs as a unit.
- Sample queries for Pod metrics To determine if you have unschedulable Pods, use the following PromQL expression: sum(kube pod status unschedulable{cluster=" CLUSTER ", namespace=" NAMESPACE "}) To alert on a number of unschedulable pods in a namespace, you can use the following PromQL expression: sum(kube pod status unschedulable{cluster=" CLUSTER ", namespace=" NAMESPACE "}) > LIMIT You can use the kube pod container status waiting reason metric to create an alert for a container stuck in a specific waiting state by using a PromQL expression like the following: max over time(kube pod container status waiting reason{reason=" REASON ", cluster=" CLUSTER ", namespace=" NAMESPACE "}[5m]) >= 1 The value of REASON specifies the container's waiting state, for example: CrashLoopBackOff ImagePullBackOff ContainerCreating To create an alert for a container stuck in any of the waiting states, use the following PromQL expression: max over time(kube pod container status waiting reason{cluster=" CLUSTER ", namespace=" NAMESPACE "}[5m]) >= 1 To determine how many containers are failing readiness checks, use the following PromQL expression sum(kube pod container status ready) by (pod, container) == 0 Some of the query and alert expressions in this section were adapted from the kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.
- For example, to compare the number of available replicas to the expected number of replicas in a single DaemonSet, you can use the following PromQL queries to plot both metrics on a single chart: kube daemonset status updated number scheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonsetset= DAEMONSET "} and kube daemonset status desired number scheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonset= DAEMONSET "} To alert on a failed or stalled DaemonSet rollout, you can use the following PromQL expression: ( ( kube daemonset status number misscheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonset=" DAEMONSET "} != 0 ) or ( kube daemonset status updated number scheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonset=" DAEMONSET "} != kube daemonset status desired number scheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonset=" DAEMONSET "} ) ) and ( changes(kube daemonset status updated number scheduled{cluster=" CLUSTER ", namespace=" NAMESPACE ", daemonset=" DAEMONSET "}[5m]) == 0 ) Some of the query and alert expressions in this section were adapted from the kubernetes-apps.yaml file in the Prometheus community Kubernetes Helm Charts repository on GitHub.

### "Orchestrate Multislice workloads using JobSet and Kueue \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- Source ID: `site-docs-reference-required-4`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- To view the node pools where each JobSet in a specific cluster has scheduled Pods, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster "}[ ${ interval} ] ) To identify the node pools where a specific Jobset has been scheduled, run the following PromQL query: avg over time ( kubernetes io : jobset assigned node pools { monitored resource = " k8s entity ", cluster name = " multislice-cluster ", entity name = " multislice-. "}[ ${ interval} ] ) To identify the Jobsets that have been scheduled on a specific node pool, run the following PromQL query: avg over time ( kubernetes io : node pool assigned jobsets { monitored resource = " k8s node pool ", cluster name = " multislice-cluster ", node pool name = " multislice-np "}[ ${ interval} ] ) Monitor JobSet uptime, times to recover (TTR), and times between interruptions (TBI) The following metrics are useful for monitoring the availability of a JobSet: kubernetes.io/jobset/uptime : total time the JobSet has been available. kubernetes.io/jobset/times to recover : distribution of recovery period for a JobSet.
- For this tutorial, check the JobSet completion with this PromQL query: kube jobset succeeded replicas { cluster = " multislice-cluster ", jobset name = " mulitslice-. "} Monitor JobSet scheduling To monitor the scheduling of a JobSet, use the following metrics: kubernetes.io/jobset/assigned node pools : GKE node pools where a Kubernetes JobSet has scheduled Pods. kubernetes.io/node pool/assigned jobsets : Kubernetes JobSets that have scheduled Pods on a GKE node pool. kubernetes.io/jobset/assigned nodes : GKE nodes where a Kubernetes JobSet has scheduled Pods. kubernetes.io/node/assigned jobsets : Kubernetes JobSets that have scheduled Pods on a GKE node.
- The following metrics are useful for monitoring the performance of a JobSet: kubernetes.io/jobset/scheduling goodput : the fraction of time that all the resources required to run the training JobSet are available. kubernetes.io/jobset/proxy runtime goodput : the fraction of time that all required accelerators are productive.
- Install the JobSet API in your cluster: VERSION = v0.8.1 kubectl apply --server-side -f https://github.com/kubernetes-sigs/jobset/releases/download/ $VERSION /manifests.yaml Create the following jobsets-multislice.yaml manifest: Autopilot apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-1slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-2slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' sleep 60 resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-3slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 3 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 Standard apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-1slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-2slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' sleep 60 resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-3slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 3 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 Apply the jobsets-multislice.yaml manifest: kubectl apply -f jobsets-multislice.yaml GKE creates the Jobs with the following resource requests: The multislice-1slice JobSet creates one Job that requires one TPU slice in total.


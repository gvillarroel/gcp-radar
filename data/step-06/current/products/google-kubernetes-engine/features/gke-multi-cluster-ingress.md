---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.907Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Multi Cluster Ingress"
feature_slug: "gke-multi-cluster-ingress"
latest_feature_date: "2021-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/migrate-x86-to-multi-arch-arm"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue"
keywords:
  - "gke"
  - "multi"
  - "cluster"
  - "ingress"
  - "provides"
  - "clusters"
---

# GKE Multi Cluster Ingress

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Provides multi-cluster ingress for GKE clusters.

## Extended Definition

Provides multi-cluster ingress for GKE clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/migrate-x86-to-multi-arch-arm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/migrate-x86-to-multi-arch-arm)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)

## Supporting Pages

### Harden your cluster's security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following methods for admission control in GKE clusters: Policy Controller : control workload admission at scale across multiple GKE clusters.
- Best practices Restrict access to cluster API discovery Place teams and environments in separate namespaces or clusters Use the principle of least privilege in access policies Use Workload Identity Federation for GKE to access Google Cloud APIs Use groups to manage access Restrict anonymous access to cluster endpoints Restrict access to cluster API discovery Recommended : restrict access to your control plane and nodes from the internet to prevent unintended access to cluster API discovery endpoints.
- For cluster that were originally created on an earlier GKE version, enable the admission controller: gcloud container clusters update CLUSTER NAME \ --location = LOCATION \ --no-enable-service-externalips To enforce this recommendation in your organization, use the constraints/container.managed.denyServiceExternalIPs managed Organization Policy constraint .
- To implement and enforce the best practices in this document across your organization, consider the following services: Security Command Center : automatically check whether your clusters implement many of these best practices and check for other common misconfigurations.

### "Migrate x86 application on GKE to multi-arch with Arm \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/migrate-x86-to-multi-arch-arm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/migrate-x86-to-multi-arch-arm)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Push the image to Artifact Registry: docker push us-central1-docker.pkg.dev/ $PROJECT ID /docker-repo/x86-hello:v0.0.1 Deploy the x86 application Check that the cluster is ready by running the following script: echo echo -ne "Waiting for GKE cluster to finish provisioning" gke status = "" while [ -z $gke status ] ; do sleep 2 echo -ne '.' gke status = $( gcloud container clusters list --format = "value(STATUS)" --filter = "NAME= $CLUSTER NAME AND STATUS=RUNNING" ) done echo echo "GKE Cluster ' $CLUSTER NAME ' is $gke status " echo When the cluster is ready, the output should be similar to the following: GKE Cluster 'my-cluster' is RUNNING Retrieve the cluster credentials so that kubectl can connect to the Kubernetes API for the cluster: gcloud container clusters get-credentials $CLUSTER NAME --location $CONTROL PLANE LOCATION --project $PROJECT ID Update the image using kustomize and deploy the x86 application: $( cd k8s/overlays/x86 && kustomize edit set image hello = us-central1-docker.pkg.dev/ $PROJECT ID /docker-repo/x86-hello:v0.0.1 ) kubectl apply -k k8s/overlays/x86 Deploy a Service to expose the application to the Internet: kubectl apply -f k8s/hello-service.yaml Check that the external IP address for the Service, hello-service , is finished provisioning: echo echo -ne "Waiting for External IP to be provisioned" external ip = "" while [ -z $external ip ] ; do sleep 2 echo -ne '.' external ip = $( kubectl get svc hello-service --template = "{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}" ) done echo echo "External IP: $external ip " echo After the external IP address is provisioned, the output should be similar to the following: External IP: 203.0.113.0 Make an HTTP request to test that the deployment works as expected: curl -w '\n' http:// $external ip The output is similar to the following: Hello from NODE:gke-my-cluster-default-pool-32019863-b41t, POD:x86-hello-deployment-6b7b456dd5-mwfkd, CPU PLATFORM:linux/amd64 The output shows that this x86-compatible deployment is running on a node in the default node pool on the amd64 architecture.
- Delete your cluster by running gcloud container clusters delete : gcloud container clusters delete $CLUSTER NAME --location $CONTROL PLANE LOCATION Delete the repository: gcloud artifacts repositories delete docker-repo —location = us-central1 --async What's next Arm workloads on GKE Create clusters and node pools with Arm nodes Build multi-architecture images for Arm workloads Prepare an Arm workload for deployment Prepare Autopilot workloads on Arm architecture Best practices for running cost-optimized Kubernetes applications on GKE Explore reference architectures, diagrams, and best practices about Google Cloud.
- The gcloud CLI provides the primary command-line interface for Google Cloud, and kubectl provides the primary command-line interface for running commands against Kubernetes clusters.
- Deploy the multi-arch container image with 6 replicas: $( cd k8s/overlays/multiarch && kustomize edit set image hello = us-central1-docker.pkg.dev/ $PROJECT ID /docker-repo/multiarch-hello:v0.0.1 ) kubectl apply -k k8s/overlays/multiarch Wait 10 seconds, then confirm that all of the replicas of the application are running: kubectl get pods -l="app=hello" -o wide The output is similar to the following: NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES multiarch-hello-deployment-65bfd784d-5xrrr 1/1 Running 0 95s 10.100.1.5 gke-my-cluster-arm-pool-e172cff7-shwc <none> <none> multiarch-hello-deployment-65bfd784d-7h94b 1/1 Running 0 95s 10.100.1.4 gke-my-cluster-arm-pool-e172cff7-shwc <none> <none> multiarch-hello-deployment-65bfd784d-7qbkz 1/1 Running 0 95s 10.100.1.7 gke-my-cluster-arm-pool-e172cff7-shwc <none> <none> multiarch-hello-deployment-65bfd784d-7wqb6 1/1 Running 0 95s 10.100.1.6 gke-my-cluster-arm-pool-e172cff7-shwc <none> <none> multiarch-hello-deployment-65bfd784d-h2g2k 1/1 Running 0 95s 10.100.0.19 gke-my-cluster-default-pool-32019863-b41t <none> <none> multiarch-hello-deployment-65bfd784d-lc9dc 1/1 Running 0 95s 10.100.0.18 gke-my-cluster-default-pool-32019863-b41t <none> <none> This output includes a NODE column that indicates the Pods are running on both nodes in the Arm node pool and others in the default (x86) node pool.

### "Orchestrate Multislice workloads using JobSet and Kueue \_|\_ GKE AI/ML\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue)
- Source ID: `site-docs-reference-required-4`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Create a GKE cluster In Cloud Shell, create a GKE cluster: Autopilot gcloud container clusters create-auto multislice-cluster \ --location = CONTROL PLANE LOCATION \ --cluster-version 1 .29.2-gke.1521000 \ --release-channel rapid In this command: The --location flag specifies the Compute Engine region of the control plane of the cluster.
- Delete the individual resource Delete the Kueue resources: kubectl delete -f jobsets-multislice.yaml kubectl delete -f kueue.yaml Delete the cluster: gcloud container clusters delete multislice-cluster --location = CONTROL PLANE LOCATION What's next Learn more about Kueue .
- Standard gcloud container clusters create multislice-cluster \ --location = CONTROL PLANE LOCATION Replace CONTROL PLANE LOCATION with the location in which you want to create your cluster.
- Install the JobSet API in your cluster: VERSION = v0.8.1 kubectl apply --server-side -f https://github.com/kubernetes-sigs/jobset/releases/download/ $VERSION /manifests.yaml Create the following jobsets-multislice.yaml manifest: Autopilot apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-1slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-2slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' sleep 60 resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-3slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 3 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 Standard apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-1slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 1 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-2slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 2 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - pip install "jax[tpu]" -f https://storage.googleapis.com/jax-releases/libtpu releases.html python -c 'import jax; print("Global device count:", jax.device count())' sleep 60 resources : limits : google.com/tpu : 4 --- apiVersion : jobset.x-k8s.io/v1alpha2 kind : JobSet metadata : name : multislice-3slice labels : kueue.x-k8s.io/queue-name : multislice-queue annotations : alpha.jobset.sigs.k8s.io/exclusive-topology : cloud.google.com/gke-nodepool spec : failurePolicy : maxRestarts : 4 replicatedJobs : - name : slice replicas : 3 template : spec : parallelism : 2 completions : 2 backoffLimit : 0 template : spec : hostNetwork : true dnsPolicy : ClusterFirstWithHostNet nodeSelector : cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice cloud.google.com/gke-tpu-topology : 2x4 containers : - name : jax-tpu image : python:3.8 ports : - containerPort : 8471 - containerPort : 8080 securityContext : privileged : true command : - bash - -c - sleep 60 resources : limits : google.com/tpu : 4 Apply the jobsets-multislice.yaml manifest: kubectl apply -f jobsets-multislice.yaml GKE creates the Jobs with the following resource requests: The multislice-1slice JobSet creates one Job that requires one TPU slice in total.


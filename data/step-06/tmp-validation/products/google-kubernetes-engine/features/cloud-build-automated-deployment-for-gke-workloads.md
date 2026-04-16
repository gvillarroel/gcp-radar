---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.432Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cloud Build automated deployment for GKE workloads"
feature_slug: "cloud-build-automated-deployment-for-gke-workloads"
latest_feature_date: "2020-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build"
keywords:
  - "build"
  - "automated"
  - "deploy"
  - "deployment"
  - "automatically"
  - "workloads"
---

# Cloud Build automated deployment for GKE workloads

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can automatically deploy existing GKE workloads.

## Extended Definition

Cloud Build can automatically deploy existing GKE workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build)

## Supporting Pages

### "Modern CI/CD with GKE: A software delivery framework \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
- Source ID: `site-docs-reference-required-5`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples of the tasks that you can standardize across the organization include the following: Artifact building and storage Testing methodologies for various languages Deployment steps Policy checks Security scanning The second repository that operators maintain stores best practices for configuring an application.
- A case for modern CI/CD CI/CD is a software development approach that lets you automate the build, test, and deployment phases of software development by using a number of tools and repeatable processes.
- That doesn't mean that operations and security teams aren't involved but that their initial input from a deployment and security perspective is automatically handled through the provisioning process.
- Instead of building externally facing features, they're building internal tools and processes that help facilitate the development, deployment, and operation of external-facing applications.

### "Deploy a stateful MySQL cluster on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster.. apiVersion : apps/v1 kind : Deployment metadata : name : prepare-three-zone-ha labels : app : prepare-three-zone-ha spec : replicas : 3 selector : matchLabels : app : prepare-three-zone-ha template : metadata : labels : app : prepare-three-zone-ha spec : affinity : Tell Kubernetes to avoid scheduling a replica in a zone where there is already a replica with the label "app: prepare-three-zone-ha" podAntiAffinity : requiredDuringSchedulingIgnoredDuringExecution : - labelSelector : matchExpressions : - key : app operator : In values : - prepare-three-zone-ha topologyKey : "topology.kubernetes.io/zone" containers : - name : prepare-three-zone-ha image : busybox:latest command : - "/bin/sh" - "-c" - "while true; do sleep 3600; done" resources : limits : cpu : "500m" ephemeral-storage : "10Mi" memory : "0.5Gi" requests : cpu : "500m" ephemeral-storage : "10Mi" memory : "0.5Gi" kubectl apply -f prepare-for-ha.yaml By default, Autopilot provisions resources in two zones.
- To deploy a MySQL Router, follow these steps: In the Cloud Shell terminal, deploy the MySQL Router. kubectl apply -n mysql1 -f c1-router.yaml The output is similar to the following: configmap/mysql-router-config created service/mysql-router created deployment.apps/mysql-router created Check the readiness of the MySQL Router deployment. kubectl -n mysql1 get deployment mysql-router --watch When all three Pods are ready, the output is similar to the following: NAME READY UP-TO-DATE AVAILABLE AGE mysql-router 3/3 3 0 3m36s If you see a PodUnschedulable error in the console, wait a minute or two while GKE provisions more nodes.
- To deploy the MySQL StatefulSet, follow these steps: Create a namespace for the StatefulSet. kubectl create namespace mysql1 Create the MySQL secret. apiVersion : v1 kind : Secret metadata : name : mysql-secret type : Opaque data : password : UGFzc3dvcmQkMTIzNDU2 # Password$123456 admin-password : UGFzc3dvcmQkMTIzNDU2 # Password$123456 kubectl apply -n mysql1 -f secret.yaml The password is deployed with each Pod, and is used by management scripts and commands for MySQL InnoDB Cluster and ClusterSet deployment in this tutorial.
- To revert the deployment to the previous working version, use the rollout undo command: kubectl rollout undo statefulset/dbc1 -n mysql1 The output is similar to the following: statefulset.apps/dbc1 rolled back Scale your database cluster horizontally To scale your MySQL InnoDB Cluster horizontally, you add additional nodes to the GKE cluster node pool (only required if you are using Standard), deploy additional MySQL instances, then add each instance to the existing MySQL InnoDB Cluster.

### "GitOps-style continuous delivery with Cloud Build \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build)
- Source ID: `site-docs-reference-required-5`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- If successful, Cloud Build copies the manifest on the production branch. steps : This step deploys the new version of our container image in the hello-cloudbuild Kubernetes Engine cluster. - name : 'gcr.io/cloud-builders/kubectl' id : Deploy args : - 'apply' - '-f' - 'kubernetes.yaml' env : - 'CLOUDSDK COMPUTE REGION=us-central1' - 'CLOUDSDK CONTAINER CLUSTER=hello-cloudbuild' This step copies the applied manifest to the production branch The COMMIT SHA variable is automatically replaced by Cloud Build. - name : 'gcr.io/cloud-builders/git' id : Copy to production branch entrypoint : /bin/sh args : - '-c' - set -x && \ Configure Git to create commits with Cloud Build's service account git config user.email $(gcloud auth list --filter=status:ACTIVE --format='value(account)') && \ Switch to the production branch and copy the kubernetes.yaml file from the candidate branch git fetch origin production && git checkout production && \ git checkout $COMMIT SHA kubernetes.yaml && \ Commit the kubernetes.yaml file with a descriptive commit message git commit -m "Manifest from commit $COMMIT SHA $(git log --format=%B -n 1 $COMMIT SHA)" && \ Push the changes back to Cloud Source Repository git push origin production Create a candidate branch and push both branches for them to be available in Cloud Source Repositories. git checkout -b candidate git push origin production git push origin candidate Grant the Source Repository Writer IAM role to the Cloud Build service account for the hello-cloudbuild-env repository.
- In Cloud Shell, clone the hello-cloudbuild-env repository and create the production branch. cd gcloud source repos clone hello-cloudbuild-env cd /kubernetes-engine-samples/management/gitops-style-delivery/ git checkout -b production Copy the cloudbuild-delivery.yaml file available in the hello-cloudbuild-app repository and commit the change. cd /kubernetes-engine-samples/management/gitops-style-delivery/ cp /hello-cloudbuild-app/cloudbuild-delivery.yaml /kubernetes-engine-samples/management/gitops-style-delivery/cloudbuild.yaml git add . git commit -m "Create cloudbuild.yaml for deployment" The cloudbuild-delivery.yaml file describes the deployment process to be run in Cloud Build.
- When you finish this tutorial, you have a system where you can easily: Distinguish between failed and successful deployments by looking at the Cloud Build history, Access the manifest currently used by looking at the production branch of the env repository, Rollback to any previous version by re-executing the corresponding Cloud Build build.
- This tutorial uses two Git repositories: app repository : contains the source code of the application itself env repository : contains the manifests for the Kubernetes Deployment When you push a change to the app repository, the Cloud Build pipeline runs tests, builds a container image, and pushes it to Artifact Registry.


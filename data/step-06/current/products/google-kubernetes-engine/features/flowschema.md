---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:13:28.418Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "FlowSchema"
feature_slug: "flowschema"
latest_feature_date: "2022-09-14"
deprecation_date: "2022-09-14"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gke-bq-integration"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/guestbook"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview"
keywords:
  - "flowschema"
  - "kubernetes"
  - "used"
  - "flow"
  - "control"
  - "classify"
  - "requests"
  - "version"
---

# FlowSchema

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

FlowSchema is a Kubernetes API used by flow control to classify requests; FlowSchema version flowcontrol.apiserver.k8s.io/v1beta1 is deprecated and scheduled for removal in Kubernetes 1.26; deprecated on 2022-09-14.

## Extended Definition

FlowSchema is a Kubernetes API used by flow control to classify requests; FlowSchema version flowcontrol.apiserver.k8s.io/v1beta1 is deprecated and scheduled for removal in Kubernetes 1.26; deprecated on 2022-09-14.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gke-bq-integration](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gke-bq-integration)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/guestbook](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/guestbook)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview)

## Supporting Pages

### "Analyze data on GKE using BigQuery, Cloud Run, and Gemma \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gke-bq-integration](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/gke-bq-integration)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Copy the following code in the new code cell: Install the necessary packages on the notebook runtime % pip install -- upgrade bigframes -- quiet import bigframes.pandas as bpd import os import ast import requests Replace the following variables Use the format ip:port For example, "10.128.05:8000" lb url = " LOADBALANCER IP ADDRESS :8000" Set BigQuery DataFrames options bpd . options . bigquery . project = " PROJECT ID " bpd . options . bigquery . location = "US" Update the VPC connector name with the one you created vpc connector name = " VPC CONNECTOR NAME " Create a remote function using bigframes https://cloud.google.com/bigquery/docs/remote-functions#bigquery-dataframes @bpd . remote function ( dataset = "ga demo" , name = "ga explain example" , bigquery connection = "bigframes-rf-conn" , reuse = True , packages = [ "requests" ], cloud function vpc connector = VPC CONNECTOR NAME , cloud function service account = "default" , ) def process incoming ( data : str ) - > str : ga data = ast . literal eval ( data ) USER PROMPT = """ 'The following are the results from Google Analytics.
- You are given the following data. {} Can you summarize what was the most popular page people landed on and what page they came from? """ . format ( ga data ) url = 'http:// {} /generate' . format ( lb url ) myobj = { "inputs" : USER PROMPT , "temperature" : 0.90 , "top p" : 0.95 , "max tokens" : 2048 } x = requests . post ( url , json = myobj ) result = x . text return ( result ) function name = process incoming . bigframes remote function print ( f "The function name is: { function name } " ) Replace the following: LOADBALANCER IP ADDRESS : the IP address and port of the internal load balancer you created earlier --for example, 10.128.05:8000 .
- Create a load balancer Follow these instructions to create an internal load balancer in your GKE cluster: Create the following tgi-2b-lb-service.yaml manifest: apiVersion : v1 kind : Service metadata : name : llm-lb-service annotations : networking.gke.io/load-balancer-type : "Internal" spec : selector : app : gemma-server type : LoadBalancer ports : - protocol : TCP port : 8000 targetPort : 8000 Open a new Cloud Shell terminal and run the following command to apply the manifest: kubectl apply -f tgi-2b-lb-service.yaml Get the load balancer IP address.
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine instances used by GKE GPU resources used by GKE BigQuery Cloud Load Balancing Cloud Run functions To generate a cost estimate based on your projected usage, use the pricing calculator .

### "Create a multi-tier web application with Redis and PHP \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/guestbook](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/guestbook)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following manifest describes a Kubernetes Deployment that runs a single replica Redis leader Pod: apiVersion : apps/v1 kind : Deployment metadata : name : redis-leader labels : app : redis role : leader tier : backend spec : replicas : 1 selector : matchLabels : app : redis template : metadata : labels : app : redis role : leader tier : backend spec : containers : - name : leader image : "docker.io/redis:6.0.5" resources : requests : cpu : 100m memory : 100Mi ports : - containerPort : 6379 Apply the manifest to your cluster: kubectl apply -f redis-leader-deployment.yaml Verify that the Redis leader Pod is running: kubectl get pods The output is similar to the following: NAME READY STATUS RESTARTS AGE redis-leader-343230949-qfvrq 1/1 Running 0 43s It might take several minutes for STATUS to change from Pending to Running .
- The following manifest describes a Deployment for the Redis follower Pods: apiVersion : apps/v1 kind : Deployment metadata : name : redis-follower labels : app : redis role : follower tier : backend spec : replicas : 2 selector : matchLabels : app : redis template : metadata : labels : app : redis role : follower tier : backend spec : containers : - name : follower image : us-docker.pkg.dev/google-samples/containers/gke/gb-redis-follower:v2 resources : requests : cpu : 100m memory : 100Mi ports : - containerPort : 6379 Apply the manifest to your cluster: kubectl apply -f redis-follower-deployment.yaml Verify that the two Redis follower replicas are running: kubectl get pods The output is similar to the following: NAME READY STATUS RESTARTS AGE redis-follower-76588f55b7-bnsq6 1/1 Running 0 27s redis-follower-76588f55b7-qvtws 1/1 Running 0 27s redis-leader-dd446dc55-kl7nl 1/1 Running 0 119s It might take several minutes for STATUS to change from Pending to Running .
- The following manifest describes a Deployment for the web server: apiVersion : apps/v1 kind : Deployment metadata : name : frontend spec : replicas : 3 selector : matchLabels : app : guestbook tier : frontend template : metadata : labels : app : guestbook tier : frontend spec : containers : - name : php-redis image : us-docker.pkg.dev/google-samples/containers/gke/gb-frontend:v5 env : - name : GET HOSTS FROM value : "dns" resources : requests : cpu : 100m memory : 100Mi ports : - containerPort : 80 The manifest file specifies the environment variable GET HOSTS FROM=dns .
- The example describes the following Kubernetes concepts: Declarative configuration using YAML manifest files Deployments , which are Kubernetes resources that determine the configuration for a set of replicated Pods Services to create internal and external load balancers for a set of Pods Objectives To deploy and run the application on GKE: Set up the Redis leader Set up two Redis followers Set up the web frontend Visit the website Scale up the web frontend The following diagram shows you an overview of the cluster architecture you create by completing these objectives: Costs In this document, you use the following billable components of Google Cloud: GKE To generate a cost estimate based on your projected usage, use the pricing calculator .

### GKE overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Kubernetes versions and features GKE automatically upgrades your control plane to new Kubernetes versions that add new features and improvements in the open source project.
- You can also manually upgrade your control plane to a different Kubernetes version than the version GKE selects for an upgrade.
- Use cases for GKE GKE and Kubernetes are used in a variety of industries, including robotics, healthcare, retail, education, gaming, and financial services.
- The Kubernetes version selected for auto-upgrades depends on the stable version in the GKE release channel you select when you create the cluster.


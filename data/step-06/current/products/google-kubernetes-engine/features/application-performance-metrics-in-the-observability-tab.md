---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.770Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Application performance metrics in the Observability tab"
feature_slug: "application-performance-metrics-in-the-observability-tab"
latest_feature_date: "2023-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/observability-with-prometheus"
keywords:
  - "application"
  - "performance"
  - "metrics"
  - "observability"
  - "tab"
  - "gke"
  - "deployment"
  - "can"
---

# Application performance metrics in the Observability tab

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The GKE deployment Observability tab can display application performance metrics from supported sources.

## Extended Definition

The GKE deployment Observability tab can display application performance metrics from supported sources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/observability-with-prometheus](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/observability-with-prometheus)

## Supporting Pages

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of a command to enable observability features: gcloud container clusters update $CLUSTER NAME \ --project = $PROJECT ID \ --location = $LOCATION \ --enable-managed-prometheus \ --logging = SYSTEM,WORKLOAD \ --monitoring = SYSTEM,DEPLOYMENT,HPA,POD,DCGM \ --auto-monitoring-scope = ALL For more information, see Monitor your inference workloads . (HPA only) Deploy a metrics adapter : A metrics adapter, such as the Custom Metrics Stackdriver Adapter , is necessary if HPA resources were generated in the deployment manifests.
- For example: gcloud container ai profiles list \ --model = openai/gpt-oss-20b \ --pricing-model = on-demand \ --target-ttft-milliseconds = 300 The output shows supported profiles with performance metrics like throughput, latency, and cost per million tokens at the inflection point.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE AI/ML Guides Send feedback Analyze model serving performance and costs with GKE Inference Quickstart Stay organized with collections Save and categorize content based on your preferences.
- For example: gcloud container ai profiles benchmarks list \ --model = deepseek-ai/DeepSeek-R1-Distill-Qwen-7B \ --model-server = vllm The output contains a list of performance metrics from benchmarks run at different request rates.

### "Collect and view kube state metrics \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/kube-state-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- To enable kube state metrics from the Observability tab for a Deployment, do the following: In the Google Cloud console, go to the Workloads page: Go to Workloads If you use the search bar to find this page, then select the result whose subheading is Kubernetes Engine .
- Configure the collection of kube state metrics You can enable kube state metrics using the Google Cloud console, the gcloud CLI, or Terraform: Console You can enable kube state metrics from the Observability tab for either a cluster or a Deployment within a cluster.
- On the Observability tab for a cluster, you can filter the set of charts for kube state metrics by the following two items: Workloads State : includes the metrics for Pods, Deployments, StatefulSets, DaemonSets, and HorizontalPodAutoscaler resources.
- StatefulSet metrics A StatefulSet is a controller that manages the deployment and scaling of a set of Pods for stateful applications.

### "Application observability with Prometheus on GKE \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/observability-with-prometheus](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/observability-with-prometheus)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Application observability with Prometheus on GKE Stay organized with collections Save and categorize content based on your preferences.
- See the License for the specific language governing permissions and limitations under the License. --- apiVersion : monitoring.coreos.com/v1 kind : Probe metadata : name : frontend-probe spec : jobName : frontend prober : url : tutorial-kube-prometheus-blackbox-exporter:19115 path : /probe module : http 2xx interval : 60s scrapeTimeout : 30s targets : staticConfig : labels : app : bank-of-anthos static : - frontend:80 --- apiVersion : monitoring.coreos.com/v1 kind : Probe metadata : name : userservice-probe spec : jobName : userservice prober : url : tutorial-kube-prometheus-blackbox-exporter:19115 path : /probe module : http 2xx interval : 60s scrapeTimeout : 30s targets : staticConfig : labels : app : bank-of-anthos static : - userservice:8080/ready --- apiVersion : monitoring.coreos.com/v1 kind : Probe metadata : name : balancereader-probe spec : jobName : balancereader prober : url : tutorial-kube-prometheus-blackbox-exporter:19115 path : /probe module : http 2xx interval : 60s scrapeTimeout : 30s targets : staticConfig : labels : app : bank-of-anthos static : - balancereader:8080/ready --- apiVersion : monitoring.coreos.com/v1 kind : Probe metadata : name : contacts-probe spec : jobName : contacts prober : url : tutorial-kube-prometheus-blackbox-exporter:19115 path : /probe module : http 2xx interval : 60s scrapeTimeout : 30s targets : staticConfig : labels : app : bank-of-anthos static : - contacts:8080/ready --- apiVersion : monitoring.coreos.com/v1 kind : Probe metadata : name : ledgerwriter-probe spec : jobName : ledgerwriter prober : url : tutorial-kube-prometheus-blackbox-exporter:19115 path : /probe module : http 2xx interval : 60s scrapeTimeout : 30s targets : staticConfig : labels : app : bank-of-anthos static : - ledgerwriter:8080/ready --- apiVersion : monitoring.coreos.com/v1 kind : Probe metadata : name : transactionhistory-probe spec : jobName : transactionhistory prober : url : tutorial-kube-prometheus-blackbox-exporter:19115 path : /probe module : http 2xx interval : 60s scrapeTimeout : 30s targets : staticConfig : labels : app : bank-of-anthos static : - transactionhistory:8080/ready This manifest describes Prometheus liveness probes and includes the following fields: spec.jobName : the Job name assigned to scraped metrics. spec.prober.url : the Service URL of the blackbox exporter.
- Delete a Google Cloud project: gcloud projects delete PROJECT ID Delete individual resources Delete the Kubernetes resources: kubectl delete -f kubernetes-manifests Uninstall Prometheus: helm uninstall tutorial Delete the GKE cluster: gcloud container clusters delete CLUSTER NAME --quiet What's next Learn about Google Cloud Managed Service for Prometheus , a fully managed, global metrics solution, based on Prometheus, that is deployed by default in all Autopilot clusters.
- Deploy Bank of Anthos Deploy the Bank of Anthos sample application: kubectl apply -f extras/jwt/jwt-secret.yaml kubectl apply -f kubernetes-manifests Slack notifications To set up Slack notifications, you must create a Slack application, activate Incoming Webhooks for the application, and install the application to a Slack workspace.


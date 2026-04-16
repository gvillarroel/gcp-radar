---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.672Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE logging agent"
feature_slug: "gke-logging-agent"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm"
keywords:
  - "gke"
  - "logging"
  - "agent"
  - "34"
  - "2037001"
  - "later"
  - "processes"
  - "logs"
---

# GKE logging agent

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

In GKE 1.34.1-gke.2037001 and later, the logging agent processes logs faster per node and uses fewer node resources.

## Extended Definition

In GKE 1.34.1-gke.2037001 and later, the logging agent processes logs faster per node and uses fewer node resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- COS 1.8.8 or later 1.9.5 or later 1.10.2 or later 1.11.0 or later Ubuntu 1.9.6 or later 1.10.3 or later 1.11.0 or later The vulnerability is found in the Linux kernel's cgroup release agent write in the kernel/cgroup/cgroup-v1.c function and can be used as a container breakout.
- The following versions of GKE or later have been updated to address the providerID issue: 1.33.1-gke.1386000 1.32.4-gke.1533000 1.31.9-gke.1119000 1.30.12-gke.1208000 Optionally, if you cannot upgrade, implement the following validating admission policy on your cluster to mitigate the providerID issue: apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicy metadata : name : validate - node - providerid spec : failurePolicy : Fail matchConstraints : resourceRules : - apiGroups : [ "" ] apiVersions : [ "v1" ] operations : [ "CREATE", "UPDATE" ] resources : [ "nodes" ] matchConditions : - name : "has-providerid" expression : "has(object.spec.providerID)" validations : - expression : "object.spec.providerID == '' object.spec.providerID.endsWith('/' + object.metadata.name)" message : "node.spec.providerID must match the node name" --- apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicyBinding metadata : name : validate - node - providerid - binding spec : policyName : validate - node - providerid validationActions : [ Deny ] Use node restricted labels when isolating workloads to specific nodes as a security control If you are using labels for node isolation, as described in Kubernetes documentation , use node restricted labels (for example, labels of the form node-restriction.kubernetes.io/example-constraint ) in node affinity and node selector terms used for workload isolation.
- To list the MCG managed firewall rules in your current environment, run the following command: gcloud compute firewall-rules list --format = "json" --filter = "name:gkemcg1-l7- " jq -r '.[] "\(.name): \(.sourceRanges // "No source range")"' awk -F: '{if ($2 /No source range ^\s $/) print "Rule "$1" has an EMPTY or MISSING source range."; else print "Rule "$1" has source range(s): "$2;}' To search logs for updates to MCG managed firewall configurations, use the Logs Explorer with the below query: protoPayload.serviceName="compute.googleapis.com" resource.type="gce firewall rule" protoPayload.resourceName= "projects/[^/]+/global/firewalls/gkemcg1-" -operation.last="true" To list the MCG managed firewall rules across your organization, run the following command to query Cloud Asset Inventory: gcloud asset search-all-resources --scope = 'organizations/ ' --asset-types = 'compute.googleapis.com/Firewall' --query 'name: //compute.googleapis.com/projects/ / /firewalls/gkemcg ' The following additional controls provide defense in depth against untrusted networks and can be considered to strengthen security posture: Use private GKE nodes to ensure your nodes only get private IPs.

### "Deploy an agentic AI application on GKE with the Agent Development Kit (ADK)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vllm)
- Source ID: `site-docs-reference-required-4`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Wait for the Deployment to become available: kubectl wait --for = condition = available --timeout = 300s deployment/adk-agent View the logs from the running agent Pod: export AGENT POD = $( kubectl get pods -l app = adk-agent -o jsonpath = '{.items[0].metadata.name}' ) kubectl logs -f $AGENT POD The deployment is successful when you see log output similar to the following, indicating that the Uvicorn server is running and ready to accept requests: INFO: Uvicorn running on http://0.0.0.0:8001 (Press CTRL+C to quit) Test your deployed agent After successfully deploying both the vLLM server and the agent application, you can test the end-to-end functionality by interacting with the agent's web UI.
- LLM Pod logs : View the logs of the vllm-llama3-deployment Pod to see the incoming request from the agent. kubectl logs -f $LLM POD The logs shows the full prompt sent by the agent to the LLM, including the system message, your query, and the definition of the get weather tool.
- You should see a response similar to the following: The weather in Tokyo is 25°C and sunny. (Optional) Verify the tool call in the logs : You can observe the agent's interaction with the LLM and the tool execution by viewing the logs of the respective Pods.
- You see the tool call and its result. kubectl logs -f $AGENT POD The output shows the tool being called and the result being processed.

### "Deploy an agentic AI application on GKE with the Agent Development Kit (ADK)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/agentic-adk-vertex)
- Source ID: `site-docs-reference-required-4`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ROLES TO ASSIGN =( "roles/artifactregistry.writer" "roles/storage.objectViewer" "roles/logging.viewer" ) for ROLE in " ${ ROLES TO ASSIGN [@] } " ; do gcloud projects add-iam-policy-binding " ${ PROJECT ID } " \ --member = "serviceAccount: ${ PROJECT NUMBER } -compute@developer.gserviceaccount.com" \ --role = " ${ ROLE } " done Build and push the agent container image : Run this command to build your Docker image and push it to your Artifact Registry.
- What can you do for me?" }] } }' You should receive a JSON response from your agent, indicating that it successfully processes requests and interacts with the Gemini model through Vertex AI.
- Learn how to use Cloud Logging and Cloud Monitoring to gain insights into your agent's performance and health within your GKE cluster.
- Create the agent deployment manifest : In the tutorials-and-examples/adk/vertex directory, create the following manifest as a file named agent-deployment.yaml : apiVersion : apps/v1 kind : Deployment metadata : name : adk-agent-deployment labels : app : adk-agent spec : replicas : 1 selector : matchLabels : app : adk-agent template : metadata : labels : app : adk-agent spec : serviceAccountName : vertex-sa containers : - name : adk-agent image : IMAGE URL ports : - containerPort : 8000 env : - name : GOOGLE CLOUD PROJECT ID value : PROJECT ID - name : GOOGLE CLOUD LOCATION value : REGION - name : GOOGLE GENAI USE VERTEXAI value : "1" - name : PORT value : "8000" resources : requests : memory : "512Mi" cpu : "500m" limits : memory : "1Gi" cpu : "1" Replace the following values: IMAGE URL : the full URL of the Docker image you pushed to Artifact Registry (for example, us-central1-docker.pkg.dev/${PROJECT ID}/adk-repo/adk-agent:latest ).


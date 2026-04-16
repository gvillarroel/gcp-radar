---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.406Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "HTTP and gRPC readiness probes"
feature_slug: "http-and-grpc-readiness-probes"
latest_feature_date: "2025-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/reference/rest/v1/Container"
  - "https://docs.cloud.google.com/run/docs/tutorials/configure-service-health"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
keywords:
  - "configurable"
  - "readiness"
  - "probes"
  - "http"
  - "grpc"
---

# HTTP and gRPC readiness probes

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run services support configurable HTTP and gRPC readiness probes.

## Extended Definition

Cloud Run services support configurable HTTP and gRPC readiness probes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/reference/rest/v1/Container](https://docs.cloud.google.com/run/docs/reference/rest/v1/Container)
- [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)

## Supporting Pages

### Container \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/rest/v1/Container](https://docs.cloud.google.com/run/docs/reference/rest/v1/Container)
- Source ID: `site-api-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation EnvVar JSON representation EnvVarSource JSON representation ConfigMapKeySelector JSON representation SecretKeySelector JSON representation ResourceRequirements JSON representation ContainerPort JSON representation EnvFromSource JSON representation ConfigMapEnvSource JSON representation SecretEnvSource JSON representation VolumeMount JSON representation Probe JSON representation ExecAction JSON representation HTTPGetAction JSON representation HTTPHeader JSON representation TCPSocketAction JSON representation GRPCAction JSON representation SecurityContext JSON representation A single application container.
- JSON representation { "initialDelaySeconds" : integer , "timeoutSeconds" : integer , "periodSeconds" : integer , "successThreshold" : integer , "failureThreshold" : integer , "exec" : { object ( ExecAction ) } , "httpGet" : { object ( HTTPGetAction ) } , "tcpSocket" : { object ( TCPSocketAction ) } , "grpc" : { object ( GRPCAction ) } } Fields initialDelaySeconds integer Number of seconds after the container has started before the probe is initiated.
- Minimum value is 1. exec object ( ExecAction ) Not supported by Cloud Run. httpGet object ( HTTPGetAction ) HTTPGet specifies the http request to perform. tcpSocket object ( TCPSocketAction ) TCPSocket specifies an action involving a TCP port. grpc object ( GRPCAction ) GRPCAction specifies an action involving a GRPC port.
- HTTPHeader HTTPHeader describes a custom header to be used in HTTP probes JSON representation { "name" : string , "value" : string } Fields name string Required.

### "Automate cross-regional failover with service health \_|\_ Cloud Run \_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You need at least one minimum instance to configure service health with readiness probes: gcloud beta run deploy $SERVICE \ --source = . \ --regions = $REGION A , $REGION B \ --min = 10 \ --readiness-probe httpGet.path = "/are you ready" Respond to any prompts to install required APIs by responding y when prompted.
- Objectives In this tutorial, you will: Prepare the sample application Deploy Cloud Run services in two regions with readiness probes Set up a global external Application Load Balancer Add your services through the serverless NEG Test failover Before you begin Sign in to your Google Cloud account.
- To deploy your services from source in two different regions with readiness probes, run the following commands: Deploy your service health-example in us-west1 and europe-west1 from the source directory.
- Deploy the Cloud Run service in two regions with readiness probes Failovers require at least two services from different regions.

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Builder HTTPGetAction describes an action based on HTTP Get requests. com. google. cloud. run. v2.HTTP Header HTTPHeader describes a custom header to be used in HTTP probes com. google. cloud. run. v2.HTTP Header.
- Builder HTTPHeader describes a custom header to be used in HTTP probes com. google. cloud. run. v2.
- Builder Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE. com. google. cloud. run. v2.GRPC Action GRPCAction describes an action involving a GRPC port. com. google. cloud. run. v2.GRPC Action.
- Builder Request message for obtaining a WorkerPool by its full name. com. google. cloud. run. v2.HTTP Get Action HTTPGetAction describes an action based on HTTP Get requests. com. google. cloud. run. v2.HTTP Get Action.


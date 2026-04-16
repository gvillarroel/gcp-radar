---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.624Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "HIPAA compliance coverage"
feature_slug: "hipaa-compliance-coverage"
latest_feature_date: "2019-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting"
  - "https://docs.cloud.google.com/run/docs/reference/rest/v1/Container"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
keywords:
  - "compliance"
  - "coverage"
  - "hipaa"
  - "requirements"
  - "covered"
---

# HIPAA compliance coverage

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run is covered by HIPAA compliance requirements.

## Extended Definition

Cloud Run is covered by HIPAA compliance requirements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- [https://docs.cloud.google.com/run/docs/reference/rest/v1/Container](https://docs.cloud.google.com/run/docs/reference/rest/v1/Container)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)

## Supporting Pages

### "Tutorial: Local troubleshooting of a Cloud Run service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- System . err . println ( "Environment validation failed." ); String msg = "Missing required server parameter" ; logger . error ( msg , new Exception ( msg )); res . status ( 500 ); return "Internal Server Error" ; } Examining this code, the following actions are taken when the NAME environment variable is not set: An error is logged to Google Cloud Observability An HTTP error response is sent The problem is caused by a missing variable, but the root cause is more specific: the code change adding the hard dependency on an environment variable did not include related changes to deployment scripts and runtime requirements documentation.
- Python Create a new hello-service directory: mkdir hello-service cd hello-service Create a requirements.txt file and copy your dependencies into it: Flask == 3.0.3 pytest == 8.2.0 ; python version > "3.0" pin pytest to 4.6.11 for Python2. pytest == 4.6.11 ; python version < "3.0" gunicorn == 23.0.0 Werkzeug == 3.0.3 Go Create a new hello-service directory: mkdir hello-service cd hello-service Create a Go project by initializing a new go module : go mod init example . com / hello - service You can update the specific name as you wish: you should update the name if the code is published to a web-reachable code repository.
- To clear the environment variables set earlier: gcloud run services update hello-service --clear-env-vars Add the new functionality for the default value to automated test coverage for the service.
- Meeting your latency, availability, or durability requirements are primary factors for selecting the region where your Cloud Run services are run.

### Container \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/rest/v1/Container](https://docs.cloud.google.com/run/docs/reference/rest/v1/Container)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "image" : string , "command" : [ string ] , "args" : [ string ] , "env" : [ { object ( EnvVar ) } ] , "resources" : { object ( ResourceRequirements ) } , "workingDir" : string , "ports" : [ { object ( ContainerPort ) } ] , "envFrom" : [ { object ( EnvFromSource ) } ] , "volumeMounts" : [ { object ( VolumeMount ) } ] , "livenessProbe" : { object ( Probe ) } , "readinessProbe" : { object ( Probe ) } , "startupProbe" : { object ( Probe ) } , "terminationMessagePath" : string , "terminationMessagePolicy" : string , "imagePullPolicy" : string , "securityContext" : { object ( SecurityContext ) } } Fields name string Name of the container specified as a DNS LABEL (RFC 1123). image string Required.
- JSON representation EnvVar JSON representation EnvVarSource JSON representation ConfigMapKeySelector JSON representation SecretKeySelector JSON representation ResourceRequirements JSON representation ContainerPort JSON representation EnvFromSource JSON representation ConfigMapEnvSource JSON representation SecretEnvSource JSON representation VolumeMount JSON representation Probe JSON representation ExecAction JSON representation HTTPGetAction JSON representation HTTPHeader JSON representation TCPSocketAction JSON representation GRPCAction JSON representation SecurityContext JSON representation A single application container.
- For non-secret EnvVar names, the Container will only get the last-declared one. resources object ( ResourceRequirements ) Compute Resources required by this container. workingDir string Container's working directory.
- ResourceRequirements ResourceRequirements describes the compute resource requirements.

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Resource Requirements ResourceRequirements describes the compute resource requirements. com. google. cloud. run. v2.
- Builder ResourceRequirements describes the compute resource requirements. com. google. cloud. run. v2.
- Resource Requirements Or Builder com. google. cloud. run. v2.


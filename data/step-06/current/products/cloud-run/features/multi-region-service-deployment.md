---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.909Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Multi-region service deployment"
feature_slug: "multi-region-service-deployment"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service"
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service"
keywords:
  - "multi"
  - "region"
  - "deployment"
  - "lets"
  - "you"
  - "deploy"
  - "and"
  - "configure"
---

# Multi-region service deployment

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Multi-region service deployment lets you deploy and configure a Cloud Run multi-region service with a single gcloud command.

## Extended Definition

Multi-region service deployment lets you deploy and configure a Cloud Run multi-region service with a single gcloud command.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service)

## Supporting Pages

### "Quickstart: Build and deploy an AI agent to Cloud Run using the Agent Development\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Navigate to the parent folder directory parent folder , and create a requirements.txt file to add the google-adk dependency: google-adk Your source project includes the following structure: parent folder/ ├── requirements.txt └── multi tool agent/ ├── init .py ├── agent.py └── .env Your app is finished and ready to be deployed.
- Returns: dict: status and result or error msg. """ if city . lower () == "new york" : tz identifier = "America/New York" else : return { "status" : "error" , "error message" : ( f "Sorry, I don't have timezone information for { city } ." ), } tz = ZoneInfo ( tz identifier ) now = datetime . datetime . now ( tz ) report = ( f 'The current time in { city } is { now . strftime ( "%Y-%m- %d %H:%M:%S %Z%z" ) } ' ) return { "status" : "success" , "report" : report } root agent = Agent ( name = "weather time agent" , model = "gemini-2.0-flash" , description = ( "Agent to answer questions about the time and weather in a city." ), instruction = ( "You are a helpful agent who can answer user questions about the time and weather in a city." ), tools = [ get weather , get current time ], ) Create a .env file and add the following variables: GOOGLE GENAI USE VERTEXAI=TRUE GOOGLE CLOUD PROJECT= PROJECT ID GOOGLE CLOUD LOCATION= REGION Replace the following: PROJECT ID : the Google Cloud project ID.
- To start a session, run the following command: curl -X POST SERVICE URL /apps/multi tool agent/users/u 123/sessions/s 123 -H "Content-Type: application/json" -d '{"key1": "value1", "key2": 42}' To query the agent, run the following command: curl -X POST SERVICE URL /run \ -H "Content-Type: application/json" \ -d "{\"appName\": \"multi tool agent\",\"userId\": \"u 123\",\"sessionId\": \"s 123\",\"newMessage\": { \"role\": \"user\", \"parts\": [{ \"text\": \"What's the weather in New York today?\" }]}}" The agent returns the weather information in the results of your query.
- Run your agent To query the ADK agent, run the following curl commands: To get the list of apps, run the following command: curl -X GET SERVICE URL /list-apps Replace SERVICE URL with the URL of your deployed service.

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Deploying multiple containers to a service (sidecars) In a Cloud Run deployment with sidecars, there is one ingress container that handles all incoming HTTPS requests at the container PORT you specify, and there are one or more sidecar containers.
- SIDECAR IMAGE : a reference to the sidecar container image If you want to configure each container in the deploy command, supply each container's configuration after the container parameters, for example: gcloud run deploy SERVICE \ --container CONTAINER 1 NAME \ --image = ' INGRESS IMAGE ' \ --set-env-vars = KEY = VALUE \ --port = ' CONTAINER PORT ' \ --container SIDECAR CONTAINER NAME \ --image = ' SIDECAR IMAGE ' \ --set-env-vars = KEY N = VALUE N Important: When you use the --container flag, you must specify all non-container-level flags before the container-level flags, otherwise the deploy command fails with an error message to that effect.
- Use cases Use cases for sidecars in a Cloud Run service include: Application monitoring, logging and tracing Using Nginx , Envoy or Apache2 as a proxy in front of your application container Adding authentication and authorization filters (for example, Open Policy Agent) Running outbound connection proxies such as the Alloy DB Auth proxy Deploying a service with sidecar containers You can deploy multiple sidecars to a Cloud Run service using the Google Cloud console, the Google Cloud CLI, YAML, or Terraform.

### "Quickstart: Build and deploy a PHP web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Run is available in the following regions: Subject to Tier 1 pricing asia-east1 (Taiwan) asia-northeast1 (Tokyo) asia-northeast2 (Osaka) asia-south1 (Mumbai, India) asia-southeast3 (Bangkok) europe-north1 (Finland) Low CO 2 europe-north2 (Stockholm) Low CO 2 europe-southwest1 (Madrid) Low CO 2 europe-west1 (Belgium) Low CO 2 europe-west4 (Netherlands) Low CO 2 europe-west8 (Milan) europe-west9 (Paris) Low CO 2 me-west1 (Tel Aviv) northamerica-south1 (Mexico) us-central1 (Iowa) Low CO 2 us-east1 (South Carolina) us-east4 (Northern Virginia) us-east5 (Columbus) us-south1 (Dallas) Low CO 2 us-west1 (Oregon) Low CO 2 Subject to Tier 2 pricing africa-south1 (Johannesburg) asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast1 (Singapore) asia-southeast2 (Jakarta) asia-south2 (Delhi, India) australia-southeast1 (Sydney) australia-southeast2 (Melbourne) europe-central2 (Warsaw, Poland) europe-west10 (Berlin) europe-west12 (Turin) europe-west2 (London, UK) Low CO 2 europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) Low CO 2 me-central1 (Doha) me-central2 (Dammam) northamerica-northeast1 (Montreal) Low CO 2 northamerica-northeast2 (Toronto) Low CO 2 southamerica-east1 (Sao Paulo, Brazil) Low CO 2 southamerica-west1 (Santiago, Chile) Low CO 2 us-west2 (Los Angeles) us-west3 (Salt Lake City) us-west4 (Las Vegas) If you already created a Cloud Run service, you can view the region in the Cloud Run dashboard in the Google Cloud console .
- The .dockerignore file excludes files from the container build process. https://docs.docker.com/engine/reference/builder/#dockerignore-file Exclude locally vendored dependencies. vendor/ Exclude "build-time" ignore files. .dockerignore .gcloudignore Exclude git history and configuration. .gitignore Your app is finished and ready to be deployed.
- Cloud Run locations Cloud Run is regional, which means the infrastructure that runs your Cloud Run services is located in a specific region and is managed by Google to be redundantly available across all the zones within that region .
- This deletes all revisions of the service. gcloud To delete a service, run the following command: gcloud run services delete SERVICE --region REGION Replace the following: SERVICE : name of your service.


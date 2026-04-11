---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.927Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Revision build information"
feature_slug: "revision-build-information"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-service-other-languages"
keywords:
  - "revision"
  - "build"
  - "information"
  - "the"
  - "run"
  - "details"
  - "panel"
  - "can"
---

# Revision build information

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

The Cloud Run revision details panel can display build information for containers built with Cloud Build when Container Analysis API is enabled.

## Extended Definition

The Cloud Run revision details panel can display build information for containers built with Cloud Build when Container Analysis API is enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-service-other-languages](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-service-other-languages)

## Supporting Pages

### "Quickstart: Build and deploy an AI agent to Cloud Run using the Agent Development\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Delete a Google Cloud project: gcloud projects delete PROJECT ID What's next For more information on building a container from code source and pushing to a repository, see: Developing Cloud Run services Building Containers Test a Cloud Run service locally Deploying from source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information on how the Python buildpack determines the default entrypoint for Cloud Run source deployments, see Build a Python application .
- Returns: dict: status and result or error msg. """ if city . lower () == "new york" : tz identifier = "America/New York" else : return { "status" : "error" , "error message" : ( f "Sorry, I don't have timezone information for { city } ." ), } tz = ZoneInfo ( tz identifier ) now = datetime . datetime . now ( tz ) report = ( f 'The current time in { city } is { now . strftime ( "%Y-%m- %d %H:%M:%S %Z%z" ) } ' ) return { "status" : "success" , "report" : report } root agent = Agent ( name = "weather time agent" , model = "gemini-2.0-flash" , description = ( "Agent to answer questions about the time and weather in a city." ), instruction = ( "You are a helpful agent who can answer user questions about the time and weather in a city." ), tools = [ get weather , get current time ], ) Create a .env file and add the following variables: GOOGLE GENAI USE VERTEXAI=TRUE GOOGLE CLOUD PROJECT= PROJECT ID GOOGLE CLOUD LOCATION= REGION Replace the following: PROJECT ID : the Google Cloud project ID.
- To start a session, run the following command: curl -X POST SERVICE URL /apps/multi tool agent/users/u 123/sessions/s 123 -H "Content-Type: application/json" -d '{"key1": "value1", "key2": 42}' To query the agent, run the following command: curl -X POST SERVICE URL /run \ -H "Content-Type: application/json" \ -d "{\"appName\": \"multi tool agent\",\"userId\": \"u 123\",\"sessionId\": \"s 123\",\"newMessage\": { \"role\": \"user\", \"parts\": [{ \"text\": \"What's the weather in New York today?\" }]}}" The agent returns the weather information in the results of your query.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- See Cloud Code for VS Code and Cloud Code for IntelliJ March 30, 2020 Feature The Cloud Run revision details panel now surfaces build information if the Container Analysis API has been enabled and the container has been built with Cloud Build , as well as source repository information if the container has been built by a Cloud Build Trigger .
- January 24, 2025 Feature You can now use dual-stack subnets with internal IPv6 to let your Cloud Run services and jobs send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress. (Preview) January 22, 2025 Feature The Cloud Run Builder ( roles/run.builder ) IAM role is now available in preview.
- November 19, 2025 Feature You can deploy source artifacts directly to Cloud Run , bypassing the Cloud Build step. (Preview) November 17, 2025 Feature Cloud Run and Cloud Run functions source deployments support pyproject.toml file for managing dependencies.
- For details about how to configure the package.json file, including the option to set environment variables or prevent the default script from running, see the Node.js buildpack configuration in the Google Cloud's buildpacks documentation.

### "Quickstart: Build and deploy a web app using the language of your choice\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-service-other-languages](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-service-other-languages)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Delete a Google Cloud project: gcloud projects delete PROJECT ID What's next For more information on building a container from code source and pushing to a repository, see: Developing Cloud Run services Building Containers Test a Cloud Run service locally Deploying from source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud Run is available in the following regions: Subject to Tier 1 pricing asia-east1 (Taiwan) asia-northeast1 (Tokyo) asia-northeast2 (Osaka) asia-south1 (Mumbai, India) asia-southeast3 (Bangkok) europe-north1 (Finland) Low CO 2 europe-north2 (Stockholm) Low CO 2 europe-southwest1 (Madrid) Low CO 2 europe-west1 (Belgium) Low CO 2 europe-west4 (Netherlands) Low CO 2 europe-west8 (Milan) europe-west9 (Paris) Low CO 2 me-west1 (Tel Aviv) northamerica-south1 (Mexico) us-central1 (Iowa) Low CO 2 us-east1 (South Carolina) us-east4 (Northern Virginia) us-east5 (Columbus) us-south1 (Dallas) Low CO 2 us-west1 (Oregon) Low CO 2 Subject to Tier 2 pricing africa-south1 (Johannesburg) asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast1 (Singapore) asia-southeast2 (Jakarta) asia-south2 (Delhi, India) australia-southeast1 (Sydney) australia-southeast2 (Melbourne) europe-central2 (Warsaw, Poland) europe-west10 (Berlin) europe-west12 (Turin) europe-west2 (London, UK) Low CO 2 europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) Low CO 2 me-central1 (Doha) me-central2 (Dammam) northamerica-northeast1 (Montreal) Low CO 2 northamerica-northeast2 (Toronto) Low CO 2 southamerica-east1 (Sao Paulo, Brazil) Low CO 2 southamerica-west1 (Santiago, Chile) Low CO 2 us-west2 (Los Angeles) us-west3 (Salt Lake City) us-west4 (Las Vegas) If you already created a Cloud Run service, you can view the region in the Cloud Run dashboard in the Google Cloud console .
- Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Cloud Run Source Developer ( roles/run.sourceDeveloper ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service identity Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- For Cloud Build to build your sources, grant the Cloud Build service account the Cloud Run Builder ( roles/run.builder ) role on your project: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SERVICE ACCOUNT EMAIL ADDRESS \ --role = roles/run.builder Replace PROJECT ID with your Google Cloud project ID and SERVICE ACCOUNT EMAIL ADDRESS with the email address of the Cloud Build service account.


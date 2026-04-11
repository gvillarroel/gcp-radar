---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.930Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Service replacement from configuration file"
feature_slug: "service-replacement-from-configuration-file"
latest_feature_date: "2020-01-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient"
  - "https://docs.cloud.google.com/run/docs/tutorials/secure-services"
keywords:
  - "replacement"
  - "from"
  - "configuration"
  - "file"
  - "run"
  - "services"
  - "can"
  - "be"
---

# Service replacement from configuration file

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run services can be deployed from a local configuration file with the gcloud services replace command.

## Extended Definition

Cloud Run services can be deployed from a local configuration file with the gcloud services replace command.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient)
- [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)

## Supporting Pages

### "Class ServicesAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample list services(): Create a client client = run v2 .
- Returns Type Description ServicesAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

### "Class ServicesClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient)
- Source ID: `site-python-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 def sample list services(): Create a client client = run v2 .
- Returns Type Description ServicesClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.

### Secure Cloud Run services tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Command line gcloud run services add-iam-policy-binding renderer \ --member serviceAccount:editor-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/run.invoker Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands . resource "google cloud run service iam member" "editor invokes renderer" { location = google cloud run v2 service.renderer.location service = google cloud run v2 service.renderer.name role = "roles/run.invoker" member = "serviceAccount:${google service account.editor.email}" } Because this is given the invoker role in the context of the render service, the render service is the only private Cloud Run service the editor can invoke.
- Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands . resource "google cloud run v2 service" "renderer" { name = "renderer" location = "us-central1" deletion protection = false # set to "true" in production template { containers { Replace with the URL of your Secure Services > Renderer image. gcr.io/<PROJECT ID>/renderer image = "us-docker.pkg.dev/cloudrun/container/hello" } service account = google service account.renderer.email } } Try out the private Markdown rendering service Private services cannot be directly loaded by a web browser.
- Remove the gcloud default configurations you added during tutorial setup. gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the editor container image named REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /editor from Artifact Registry Delete the render container image named REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /renderer from Artifact Registry Delete the editor service account editor-identity@PROJECT ID.iam.gserviceaccount.com Delete the render service account renderer-identity@PROJECT ID.iam.gserviceaccount.com What's next Further secure your project by walking through the using IAM securely checklist Extend this sample application to track Markdown usage with Cloud Monitoring custom metrics Review the Pub/Sub tutorial for an approach to secure, asynchronous microservices Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Builder () . url ( url ) . addHeader ( "Authorization" , "Bearer " + token ) . post ( body ) . build (); Response response = ok . newCall ( request ). execute (); html = response . body (). string (); } catch ( IOException e ) { logger . error ( "Unable to get rendered data" , e ); } return html ; } Parse the markdown from JSON and send it to the Renderer service to be transformed into HTML. // '/render' expects a JSON body payload with a 'data' property holding plain text // for rendering. @PostMapping ( value = "/render" , consumes = "application/json" ) public String render ( @RequestBody Data data ) { String markdown = data . getData (); String url = System . getenv ( "EDITOR UPSTREAM RENDER URL" ); if ( url == null ) { String msg = "No configuration for upstream render service: " + "add EDITOR UPSTREAM RENDER URL environment variable" ; logger . error ( msg ); throw new IllegalStateException ( msg ); } String html = makeAuthenticatedRequest ( url , markdown ); return html ; } C# GetAuthenticatedPostResponse creates authenticated requests to private services.


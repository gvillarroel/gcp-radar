---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.452Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "GPU for Cloud Run services"
feature_slug: "gpu-for-cloud-run-services"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/configuring"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/tutorials/secure-services"
keywords:
  - "configuration"
  - "workloads"
---

# GPU for Cloud Run services

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run services support GPU configuration for service workloads.

## Extended Definition

Cloud Run services support GPU configuration for service workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)

## Supporting Pages

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-reference-2`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Some configurations settings require additional permissions or enabling APIs, and some additional settings will appear in the web interface if you select GitHub or Functions as your deployment option.
- After specifying the deployment option , service name, and region, you will see the following configuration settings described on this page.
- C GPU If you need to host AI workloads, such as inference models and model training, you can configure Cloud Run services with GPUs .
- These configurations are listed in the order that they appear in the Google Cloud console when you are deploying a new service.

### Secure Cloud Run services tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Remove the gcloud default configurations you added during tutorial setup. gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the editor container image named REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /editor from Artifact Registry Delete the render container image named REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /renderer from Artifact Registry Delete the editor service account editor-identity@PROJECT ID.iam.gserviceaccount.com Delete the render service account renderer-identity@PROJECT ID.iam.gserviceaccount.com What's next Further secure your project by walking through the using IAM securely checklist Extend this sample application to track Markdown usage with Cloud Monitoring custom metrics Review the Pub/Sub tutorial for an approach to secure, asynchronous microservices Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Builder () . url ( url ) . addHeader ( "Authorization" , "Bearer " + token ) . post ( body ) . build (); Response response = ok . newCall ( request ). execute (); html = response . body (). string (); } catch ( IOException e ) { logger . error ( "Unable to get rendered data" , e ); } return html ; } Parse the markdown from JSON and send it to the Renderer service to be transformed into HTML. // '/render' expects a JSON body payload with a 'data' property holding plain text // for rendering. @PostMapping ( value = "/render" , consumes = "application/json" ) public String render ( @RequestBody Data data ) { String markdown = data . getData (); String url = System . getenv ( "EDITOR UPSTREAM RENDER URL" ); if ( url == null ) { String msg = "No configuration for upstream render service: " + "add EDITOR UPSTREAM RENDER URL environment variable" ; logger . error ( msg ); throw new IllegalStateException ( msg ); } String html = makeAuthenticatedRequest ( url , markdown ); return html ; } C# GetAuthenticatedPostResponse creates authenticated requests to private services.
- Command line gcloud run services add-iam-policy-binding renderer \ --member serviceAccount:editor-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/run.invoker Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands . resource "google cloud run service iam member" "editor invokes renderer" { location = google cloud run v2 service.renderer.location service = google cloud run v2 service.renderer.name role = "roles/run.invoker" member = "serviceAccount:${google service account.editor.email}" } Because this is given the invoker role in the context of the render service, the render service is the only private Cloud Run service the editor can invoke.
- Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands . resource "google cloud run v2 service" "renderer" { name = "renderer" location = "us-central1" deletion protection = false # set to "true" in production template { containers { Replace with the URL of your Secure Services > Renderer image. gcr.io/<PROJECT ID>/renderer image = "us-docker.pkg.dev/cloudrun/container/hello" } service account = google service account.renderer.email } } Try out the private Markdown rendering service Private services cannot be directly loaded by a web browser.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- 8080 K SERVICE The name of the Cloud Run service being run. hello-world K REVISION The name of the Cloud Run revision being run. hello-world.1 K CONFIGURATION The name of the Cloud Run configuration that created the revision. hello-world Environment variables for jobs For Cloud Run jobs, the following environment variables are set: Name Description Example CLOUD RUN JOB The name of the Cloud Run job being run. hello-world CLOUD RUN EXECUTION The name of the Cloud Run execution being run. hello-world-abc CLOUD RUN TASK INDEX The index of this task.
- This restricts some network capabilities and prevents your root containers from running as "true root." Limited file system mounts from inside containers The supported path for mounting file systems in Cloud Run is through the fully managed volume mounts feature in your Cloud Run container configuration .
- If a workload-processing instance must be shut down, Cloud Run gives tasks in-process tasks time to complete and routes new workloads to other instances.
- Startup Cloud Run worker pools instances start the container with the entrypoint you specify in the container image or in the worker pool configuration.


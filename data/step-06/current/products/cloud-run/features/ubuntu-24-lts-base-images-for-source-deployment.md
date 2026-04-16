---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.392Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Ubuntu 24 LTS base images for source deployment"
feature_slug: "ubuntu-24-lts-base-images-for-source-deployment"
latest_feature_date: "2026-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/tutorials/image-processing"
  - "https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting"
keywords:
  - "ubuntu"
  - "images"
  - "base"
  - "deployment"
  - "source"
---

# Ubuntu 24 LTS base images for source deployment

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run source deployments support Ubuntu 24 LTS base images; Cloud Run source deployments support Ubuntu 24 LTS base images.

## Extended Definition

Cloud Run source deployments support Ubuntu 24 LTS base images; Cloud Run source deployments support Ubuntu 24 LTS base images.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/tutorials/image-processing](https://docs.cloud.google.com/run/docs/tutorials/image-processing)
- [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)

## Supporting Pages

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-reference-required-3`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting Cloud Run Guides Send feedback Deploying container images to Cloud Run Stay organized with collections Save and categorize content based on your preferences.
- If you want to automate for continuous deployment, select Continuously deploy new revisions from a source repository and follow the instructions for continuous deployments .
- Add the following to a google cloud run v2 service resource in your Terraform configuration: provider "google" { project = " PROJECT-ID " } resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " client = "terraform" template { containers { image = " IMAGE URL " } } } resource "google cloud run v2 service iam member" "noauth" { location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name role = "roles/run.invoker" member = "allUsers" } Replace the following: PROJECT-ID : the Google Cloud project ID REGION : the Google Cloud region SERVICE : the name of your Cloud Run service.

### "Process images from Cloud Storage tutorial \_|\_ Cloud Run \_|\_ Google\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/image-processing](https://docs.cloud.google.com/run/docs/tutorials/image-processing)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make the following changes: Add code to import the new image.js file Remove the existing "Hello World" code from the route Add code to further validate the Pub/Sub message Add code to call the new image processing function When you are finished, the code will look like this: const express = require ( 'express' ); const app = express (); // This middleware is available in Express v4.16.0 onwards app . use ( express . json ()); const image = require ( './image' ); app . post ( '/' , async ( req , res ) = > { if ( ! req . body ) { const msg = 'no Pub/Sub message received' ; console . error ( error: ${ msg } ); res . status ( 400 ). send ( Bad Request: ${ msg } ); return ; } if ( ! req . body . message ! req . body . message . data ) { const msg = 'invalid Pub/Sub message format' ; console . error ( error: ${ msg } ); res . status ( 400 ). send ( Bad Request: ${ msg } ); return ; } // Decode the Pub/Sub message. const pubSubMessage = req . body . message ; let data ; try { data = Buffer . from ( pubSubMessage . data , 'base64' ). toString (). trim (); data = JSON . parse ( data ); } catch ( err ) { const msg = 'Invalid Pub/Sub message: data property is not valid base64 encoded JSON' ; console . error ( error: ${ msg } : ${ err } ); res . status ( 400 ). send ( Bad Request: ${ msg } ); return ; } // Validate the message is a Cloud Storage event. if ( ! data . name ! data . bucket ) { const msg = 'invalid Cloud Storage notification: expected name and bucket properties' ; console . error ( error: ${ msg } ); res . status ( 400 ). send ( Bad Request: ${ msg } ); return ; } try { await image . blurOffensiveImages ( data ); res . status ( 204 ). send (); } catch ( err ) { console . error ( error: Blurring image: ${ err } ); res . status ( 500 ). send (); } }); Python The main.py file defines the Flask app and prepares received Pub/Sub messages for use.
- Make the following changes: Add code to import the new image.py file Remove the existing "Hello World" code from the route Add code to further validate the Pub/Sub message Add code to call the new image processing function When you are finished, the code will look like this: import base64 import json import os from flask import Flask , request import image app = Flask ( name ) @app . route ( "/" , methods = [ "POST" ]) def index (): """Receive and parse Pub/Sub messages containing Cloud Storage event data.""" envelope = request . get json () if not envelope : msg = "no Pub/Sub message received" print ( f "error: { msg } " ) return f "Bad Request: { msg } " , 400 if not isinstance ( envelope , dict ) or "message" not in envelope : msg = "invalid Pub/Sub message format" print ( f "error: { msg } " ) return f "Bad Request: { msg } " , 400 Decode the Pub/Sub message. pubsub message = envelope [ "message" ] if isinstance ( pubsub message , dict ) and "data" in pubsub message : try : data = json . loads ( base64 . b64decode ( pubsub message [ "data" ]) . decode ()) except Exception as e : msg = ( "Invalid Pub/Sub message: " "data property is not valid base64 encoded JSON" ) print ( f "error: { e } " ) return f "Bad Request: { msg } " , 400 Validate the message is a Cloud Storage event. if not data [ "name" ] or not data [ "bucket" ]: msg = ( "Invalid Cloud Storage notification: " "expected name and bucket properties" ) print ( f "error: { msg } " ) return f "Bad Request: { msg } " , 400 try : image . blur offensive images ( data ) return ( "" , 204 ) except Exception as e : print ( f "error: { e } " ) return ( "" , 500 ) return ( "" , 500 ) Go The main.go file defines the HTTP service and prepares received Pub/Sub messages for use.
- To grant this permission and create a Cloud Storage notification, add the following to your existing main.tf file: data "google storage project service account" "gcs account" {} resource "google pubsub topic iam binding" "binding" { topic = google pubsub topic.default.name role = "roles/pubsub.publisher" members = [ "serviceAccount:${data.google storage project service account.gcs account.email address}" ] } resource "google storage notification" "notification" { bucket = google storage bucket.imageproc input.name payload format = "JSON API V1" topic = google pubsub topic.default.id depends on = [ google pubsub topic iam binding.binding ] } Try it out Upload an offensive image, such as this image of a flesh-eating zombie : curl -o zombie.jpg https://cdn.pixabay.com/photo/2015/09/21/14/24/zombie-949916 960 720.jpg gcloud storage cp zombie.jpg gs:// INPUT BUCKET NAME where INPUT BUCKET NAME is the Cloud Storage bucket you created earlier for uploading images.
- ImageSource ( image uri = blob uri )) Ignore already-blurred files if file name . startswith ( "blurred-" ): print ( f "The image { file name } is already blurred." ) return print ( f "Analyzing { file name } ." ) result = vision client . safe search detection ( image = blob source ) detected = result . safe search annotation Process image if detected . adult == 5 or detected . violence == 5 : print ( f "The image { file name } was detected as inappropriate." ) return blur image ( blob ) else : print ( f "The image { file name } was detected as OK." ) Go // GCSEvent is the payload of a GCS event. type GCSEvent struct { Bucket string json:"bucket" Name string json:"name" } // BlurOffensiveImages blurs offensive images uploaded to GCS. func BlurOffensiveImages ( ctx context .

### "Tutorial: Local troubleshooting of a Cloud Run service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update components: gcloud components update Follow the instructions to install Docker locally Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Error Reporting Viewer ( roles/errorreporting.viewer ) Logs View Accessor ( roles/logging.viewAccessor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Check whether the service works locally with the NAME environment available in place: Run the container locally with the environment variable added: PORT = 8080 && docker run --rm -e PORT = $PORT -p 9000 : $PORT \ -e NAME = "Local World!" \ gcr.io/ PROJECT ID /hello-service Navigate your browser to http://localhost:9000 See "Hello Local World!" appear on the page Modify the running Cloud Run service environment to include this variable: Run the services update command to add an environment variable: gcloud run services update hello - service \ -- set - env - vars NAME = Override Wait a few seconds while Cloud Run creates a new revision based on the previous revision with the new environment variable added.
- NAME ) { // Plain error logs do not appear in Stackdriver Error Reporting. console . error ( 'Environment validation failed.' ); console . error ( new Error ( 'Missing required server parameter' )); return res . status ( 500 ). send ( 'Internal Server Error' ); } Python Find the source of the error message in the file main.py around the line number called out in the stack trace shown in the logs: NAME = os . getenv ( "NAME" ) if not NAME : print ( "Environment validation failed." ) raise Exception ( "Missing required service parameter." ) Go Find the source of the error message in the file main.go around the line number called out in the stack trace shown in the logs: name := os .
- System . err . println ( "Environment validation failed." ); String msg = "Missing required server parameter" ; logger . error ( msg , new Exception ( msg )); res . status ( 500 ); return "Internal Server Error" ; } Examining this code, the following actions are taken when the NAME environment variable is not set: An error is logged to Google Cloud Observability An HTTP error response is sent The problem is caused by a missing variable, but the root cause is more specific: the code change adding the hard dependency on an environment variable did not include related changes to deployment scripts and runtime requirements documentation.


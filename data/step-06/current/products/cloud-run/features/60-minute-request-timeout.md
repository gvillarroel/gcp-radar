---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.606Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "60-minute request timeout"
feature_slug: "60-minute-request-timeout"
latest_feature_date: "2020-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub"
  - "https://docs.cloud.google.com/run/docs/tutorials/pubsub"
keywords:
  - "minute"
  - "timeouts"
  - "timeout"
  - "request"
  - "supports"
---

# 60-minute request timeout

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports request timeouts of up to 60 minutes.

## Extended Definition

Cloud Run supports request timeouts of up to 60 minutes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub)

## Supporting Pages

### "Autoscale worker pools based on the Pub/Sub queue volume \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- Source ID: `site-docs-root-2`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command to create the CREMA service account: gcloud iam service-accounts create $CREMA SA NAME \ --display-name = "CREMA service account" Grant additional permissions to your custom service accounts To scale the worker pool, grant the following permissions on the custom service accounts: Grant your CREMA service account permission to read from the Parameter Manager: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/parametermanager.parameterViewer" Grant your CREMA service account the permission to scale the worker pool: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/run.developer" Grant your CREMA service account the service account user role: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Grant your CREMA service account permission to view metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.viewer" Grant your CREMA service account permission to write metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Grant your CREMA service account permission to view Pub/Sub messages: gcloud pubsub subscriptions add-iam-policy-binding $SUBSCRIPTION ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/pubsub.viewer" Grant your consumer service account permission to pull messages from the subscription: gcloud pubsub subscriptions add-iam-policy-binding $SUBSCRIPTION ID \ --member = "serviceAccount: $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/pubsub.subscriber" Deploy a Cloud Run worker pool To deploy a worker pool that consumes messages from Pub/Sub subscriptions, follow these steps: Create a folder named consumer and change the directory into it: mkdir consumer cd consumer Create a file named worker.py and add the following code: import os import time from google.cloud import pubsub v1 from concurrent.futures import TimeoutError Configuration PROJECT ID = os . environ . get ( 'PROJECT ID' ) SUBSCRIPTION ID = os . environ . get ( 'SUBSCRIPTION ID' ) subscription path = f "projects/ { PROJECT ID } /subscriptions/ { SUBSCRIPTION ID } " print ( f "Worker Pool instance starting.
- SubscriberClient () def callback ( message ): try : data = message . data . decode ( "utf-8" ) print ( f "Processing job: { data } " ) time . sleep ( 5 ) # Simulate work print ( f "Done { data } " ) message . ack () except Exception as e : print ( f "Error processing message: { e } " ) message . nack () streaming pull future = subscribe r . subscribe ( subscription path , callback = callback ) print ( f "Listening for messages on { subscription path } ..." ) Wrap subscriber in a 'with' block to automatically call close() when done. with subscriber : try : When timeout is not set, result() will block indefinitely, unless an exception is encountered first. streaming pull future . result () except TimeoutError : streaming pull future . cancel () # Trigger the shutdown. streaming pull future . result () # Block until the shutdown is complete. except Exception as e : print ( f "Streaming pull failed: { e } " ) Create a Dockerfile and add the following code: FROM python:3.12-slim RUN pip install google-cloud-pubsub COPY worker.py .
- You should see the following logs: Each log message is labeled with the component that emitted it. [INFO] [METRIC-PROVIDER] Starting metric collection cycle [INFO] [METRIC-PROVIDER] Successfully fetched scaled object metrics ... [INFO] [METRIC-PROVIDER] Sending scale request ... [INFO] [SCALER] Received ScaleRequest ... [INFO] [SCALER] Current instances ... [INFO] [SCALER] Recommended instances ...
- Monitor Scaling After the load-pubsub.sh script completes, wait three to four minutes before checking logs for the service, my-crema-service .

### "Quickstart: Build and deploy a PHP web app to Google Cloud with Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service)
- Source ID: `site-docs-reference-2`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RUN docker-php-ext-install -j "$(nproc)" opcache RUN set -ex; \ { \ echo "; Cloud Run enforces memory & timeouts"; \ echo "memory limit = -1"; \ echo "max execution time = 0"; \ echo "; File upload at Cloud Run network limit"; \ echo "upload max filesize = 32M"; \ echo "post max size = 32M"; \ echo "; Configure Opcache for Containers"; \ echo "opcache.enable = On"; \ echo "opcache.validate timestamps = Off"; \ echo "; Configure Opcache Memory (Application-specific)"; \ echo "opcache.memory consumption = 32"; \ } > "$PHP INI DIR/conf.d/cloud-run.ini" Copy in custom code from the host machine.
- Write the sample application To write an application in PHP: Create a new directory named helloworld-php and change directory into it: mkdir helloworld-php cd helloworld-php Create a file named index.php and paste the following code into it: < ?php $name = getenv('NAME', true) ?: 'World'; echo sprintf('Hello %s!', $name); This code responds to requests with our "Hello World" greeting.
- Delete your service Cloud Run services don't incur costs until they receive requests.
- Granting the Cloud Run builder role takes a couple of minutes to propagate .

### Use Pub/Sub with Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Timeout is set to 0 to disable the timeouts of the workers to allow Cloud Run to handle instance scaling.
- Buffer . from ( pubSubMessage . data , 'base64' ). toString (). trim () : 'World' ; console . log ( Hello ${ name } ! ); res . status ( 204 ). send (); }); Python @app . route ( "/" , methods = [ "POST" ]) def index (): """Receive and parse Pub/Sub messages.""" envelope = request . get json () if not envelope : msg = "no Pub/Sub message received" print ( f "error: { msg } " ) return f "Bad Request: { msg } " , 400 if not isinstance ( envelope , dict ) or "message" not in envelope : msg = "invalid Pub/Sub message format" print ( f "error: { msg } " ) return f "Bad Request: { msg } " , 400 pubsub message = envelope [ "message" ] name = "World" if isinstance ( pubsub message , dict ) and "data" in pubsub message : name = base64 . b64decode ( pubsub message [ "data" ]) . decode ( "utf-8" ) . strip () print ( f "Hello { name } !" ) return ( "" , 204 ) Go // WrappedMessage is the payload of a Pub/Sub event. // // For more information about receiving messages from a Pub/Sub event // see: https://cloud.google.com/pubsub/docs/push#receive push type WrappedMessage struct { Message struct { Data [] byte json:"data,omitempty" ID string json:"id" } json:"message" Subscription string json:"subscription" } // HelloPubSub receives and processes a Pub/Sub push message. func HelloPubSub ( w http .
- Printf ( "Hello %s!" , name ) } Java import com.example.cloudrun.Body ; import java.util.Base64 ; import org.apache.commons.lang3.StringUtils ; import org.springframework.http.HttpStatus ; import org.springframework.http.ResponseEntity ; import org.springframework.web.bind.annotation.RequestBody ; import org.springframework.web.bind.annotation.RequestMapping ; import org.springframework.web.bind.annotation.RequestMethod ; import org.springframework.web.bind.annotation.RestController ; // PubsubController consumes a Pub/Sub message. @RestController public class PubSubController { @RequestMapping ( value = "/" , method = RequestMethod .
- Node.js app . post ( '/' , ( req , res ) = > { if ( ! req . body ) { const msg = 'no Pub/Sub message received' ; console . error ( error: ${ msg } ); res . status ( 400 ). send ( Bad Request: ${ msg } ); return ; } if ( ! req . body . message ) { const msg = 'invalid Pub/Sub message format' ; console . error ( error: ${ msg } ); res . status ( 400 ). send ( Bad Request: ${ msg } ); return ; } const pubSubMessage = req . body . message ; const name = pubSubMessage . data ?


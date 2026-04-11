---
title: "Quickstart: Stream Pub/Sub Lite messages by using Dataflow \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/stream-messages-dataflow
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/stream-messages-dataflow
  title: "Quickstart: Stream Pub/Sub Lite messages by using Dataflow \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Pub/Sub Lite
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Stream Pub/Sub Lite messages by using Dataflow
Note: Pub/Sub Lite is deprecated. Effective June 30, 2026,
Pub/Sub Lite will be turned down.
Current customers: Pub/Sub Lite remains functional until June 30, 2026.
If you have not used Pub/Sub Lite within the 90-day period preceding July 15, 2025
(April 15, 2025 - July 15, 2025), you won't be able to access Pub/Sub Lite starting on
July 15, 2025.
New customers: Pub/Sub Lite is no longer available for new customers after September 24, 2024.
You can migrate your Pub/Sub Lite service to
Google Cloud Managed Service for Apache Kafka
or Pub/Sub .
As an alternative to writing and running your own data processing programs, you
can use Dataflow with the Pub/Sub Lite
I/O connector for Apache Beam .
Dataflow is a fully-managed service for transforming and
enriching data in streaming (real-time) and batch modes with equal reliability
and expressiveness. It reliably executes programs developed using the Apache Beam
SDK, which has an extensible set of powerful stateful processing abstractions,
and I/O connectors to other streaming and batch systems.
This quickstart shows you how to write an Apache Beam pipeline that will:
Read messages from Pub/Sub Lite
Window (or group) the messages by publish timestamp
Write the messages to Cloud Storage
It also shows you how to:
Submit your pipeline to run on Dataflow
Create a Dataflow Flex Template from your pipeline
This tutorial requires Maven, but it's also possible to convert the example
project from Maven to Gradle. To learn more, see Optional: Convert from Maven to Gradle .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Pub/Sub Lite, Dataflow, Google Cloud Storage JSON API, and Cloud Logging APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable pubsublite.googleapis.com dataflow.googleapis.com storage-api.googleapis.com logging.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant roles to the service account. Run the following command once for each of the
following IAM roles: roles/dataflow.worker, roles/storage.objectAdmin, roles/pubsublite.admin :
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = ROLE
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
ROLE : the role to grant
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Grant the required role to the principal that
will attach the service account to other resources.
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com --member = "user: USER_EMAIL " --role = roles/iam.serviceAccountUser
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
USER_EMAIL : the email address for a Google Account
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Pub/Sub Lite, Dataflow, Google Cloud Storage JSON API, and Cloud Logging APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable pubsublite.googleapis.com dataflow.googleapis.com storage-api.googleapis.com logging.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant roles to the service account. Run the following command once for each of the
following IAM roles: roles/dataflow.worker, roles/storage.objectAdmin, roles/pubsublite.admin :
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = ROLE
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
ROLE : the role to grant
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Grant the required role to the principal that
will attach the service account to other resources.
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com --member = "user: USER_EMAIL " --role = roles/iam.serviceAccountUser
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
USER_EMAIL : the email address for a Google Account
Create local authentication credentials for your user account:
gcloud auth application-default login
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Set up your Pub/Sub Lite project
Create variables for your Cloud Storage bucket, project, and
Dataflow region. Cloud Storage bucket names must be globally unique.
The Dataflow region must be a valid region where you can run your job.
For more information about regions and locations, see
Dataflow locations .
export PROJECT_ID = $( gcloud config get-value project )
export SERVICE_ACCOUNT = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
export BUCKET = BUCKET_NAME
export DATAFLOW_REGION = DATAFLOW_REGION
Create a Cloud Storage bucket owned by this project:
gcloud storage buckets create gs:// $BUCKET
Create a Pub/Sub Lite zonal Lite topic and subscription
Create a zonal Lite Pub/Sub Lite topic and Lite subscription.
For the Lite location, choose a
supported Pub/Sub Lite location . You must also
specify a zone for the region. For example, us-central1-a .
export TOPIC = LITE_TOPIC_ID
export SUBSCRIPTION = LITE_SUBSCRIPTION_ID
export LITE_LOCATION = LITE_LOCATION
gcloud pubsub lite-topics create $TOPIC \
--location = $LITE_LOCATION \
--partitions = 1 \
--per-partition-bytes = 30GiB
gcloud pubsub lite-subscriptions create $SUBSCRIPTION \
--location = $LITE_LOCATION \
--topic = $TOPIC \
--starting-offset = beginning
Stream messages to Dataflow
Download the quickstart sample code
Clone the quickstart repository and navigate to the sample code directory.
git clone https://github.com/GoogleCloudPlatform/java-docs-samples.git
cd java-docs-samples/pubsublite/streaming-analytics
Sample code
This sample code uses Dataflow to:
Read messages from a Pub/Sub Lite subscription as an
unbounded source.
Group messages based on their publish timestamps, using
fixed time windows
and the
default trigger .
Write the grouped messages to files on Cloud Storage.
Java
Before running this sample, follow the Java setup instructions in
Pub/Sub Lite Client Libraries .
import com.google.cloud.pubsublite. SubscriptionPath ;
import com.google.cloud.pubsublite.proto. SequencedMessage ;
import org.apache.beam.examples.common.WriteOneFilePerWindow ;
import org.apache.beam.sdk.Pipeline ;
import org.apache.beam.sdk.io.gcp.pubsublite.PubsubLiteIO ;
import org.apache.beam.sdk.io.gcp.pubsublite.SubscriberOptions ;
import org.apache.beam.sdk.options.Default ;
import org.apache.beam.sdk.options.Description ;
import org.apache.beam.sdk.options.PipelineOptionsFactory ;
import org.apache.beam.sdk.options.StreamingOptions ;
import org.apache.beam.sdk.options.Validation.Required ;
import org.apache.beam.sdk.transforms.MapElements ;
import org.apache.beam.sdk.transforms.windowing.FixedWindows ;
import org.apache.beam.sdk.transforms.windowing.Window ;
import org.apache.beam.sdk.values.TypeDescriptors ;
import org.joda.time.Duration ;
import org.slf4j.Logger ;
import org.slf4j.LoggerFactory ;
public class PubsubliteToGcs {
/*
* Define your own configuration options. Add your arguments to be processed
* by the command-line parser.
*/
public interface PubsubliteToGcsOptions extends StreamingOptions {
@Description ( "Your Pub/Sub Lite subscription." )
@Required
String getSubscription ();
void setSubscription ( String value );
@Description ( "Window size of output files in minutes." )
@Default.Integer ( 1 )
Integer getWindowSize ();
void setWindowSize ( Integer value );
@Description ( "Filename prefix of output files." )
@Required
String getOutput ();
void setOutput ( String value );
}
private static final Logger LOG = LoggerFactory . getLogger ( PubsubliteToGcs . class );
public static void main ( String [] args ) throws InterruptedException {
// The maximum number of shards when writing output files.
int numShards = 1 ;
PubsubliteToGcsOptions options =
PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( PubsubliteToGcsOptions . class );
options . setStreaming ( true );
SubscriberOptions subscriberOptions =
SubscriberOptions . newBuilder ()
. setSubscriptionPath ( SubscriptionPath . parse ( options . getSubscription ()))
. build ();
Pipeline pipeline = Pipeline . create ( options );
pipeline
. apply ( "Read From Pub/Sub Lite" , PubsubLiteIO . read ( subscriberOptions ))
. apply (
"Convert messages" ,
MapElements . into ( TypeDescriptors . strings ())
. via (
( SequencedMessage sequencedMessage ) - > {
String data = sequencedMessage . getMessage (). getData (). toStringUtf8 ();
LOG . info ( "Received: " + data );
long publishTime = sequencedMessage . getPublishTime (). getSeconds ();
return data + "\t" + publishTime ;
}))
. apply (
"Apply windowing function" ,
Window
// Group the elements using fixed-sized time intervals based on the element
// timestamp (using the default event time trigger). The element timestamp
// is the publish timestamp associated with a message.
//
// NOTE: If data is not being continuously ingested, such as with a batch or
// intermittent publisher, the final window will never close as the watermark
// will not advance. If this is a possibility with your pipeline, you should
// add an additional processing time trigger to force window closure after
// enough time has passed. See
// https://beam.apache.org/documentation/programming-guide/#triggers
// for more information.
. < String>into ( FixedWindows . of ( Duration . standardMinutes ( options . getWindowSize ()))))
. apply ( "Write elements to GCS" , new WriteOneFilePerWindow ( options . getOutput (), numShards ));
// Execute the pipeline. You may add `.waitUntilFinish()` to observe logs in your console, but
// `waitUntilFinish()` will not work in Dataflow Flex Templates.
pipeline . run ();
}
}
Start the Dataflow pipeline
To start the pipeline in Dataflow, run the following command:
mvn compile exec:java \
-Dexec.mainClass = examples.PubsubliteToGcs \
-Dexec.args = " \
--subscription=projects/ $PROJECT_ID /locations/ $LITE_LOCATION /subscriptions/ $SUBSCRIPTION \
--output=gs:// $BUCKET /samples/output \
--windowSize=1 \
--project= $PROJECT_ID \
--region= $DATAFLOW_REGION \
--tempLocation=gs:// $BUCKET /temp \
--runner=DataflowRunner \
--serviceAccount= $SERVICE_ACCOUNT "
The preceding command launches a Dataflow job. Follow the link
in the console output to access the job in the Dataflow
monitoring console.
Observe job progress
Observe the job's progress in the Dataflow console.
Go to the Dataflow console
Open the job details view to see:
Job graph
Execution details
Job metrics
Publish some messages to your Lite topic.
gcloud pubsub lite-topics publish $TOPIC \
--location = $LITE_LOCATION \
--message = "Hello World!"
You may have to wait a few minutes to see the messages in your Worker Logs.
Use the command below to check which files have been written out to
Cloud Storage.
gcloud storage ls "gs:// $BUCKET /samples/"
The output should look like the following:
gs://$BUCKET/samples/output-19:41-19:42-0-of-1
gs://$BUCKET/samples/output-19:47-19:48-0-of-1
gs://$BUCKET/samples/output-19:48-19:49-0-of-1
Use the command below to look at the content in a file:
gcloud storage cat "gs:// $BUCKET /samples/ your-filename "
Optional: Create a Dataflow template
You can optionally create a custom Dataflow Flex Template based on your
pipeline. Dataflow templates let you run jobs with different
input parameters from Google Cloud console or the command line without the
need to set up a full Java development environment.
Create a fat JAR that includes all the dependencies of your pipeline. You
should see target/pubsublite-streaming-bundled-1.0.jar after the command
has run.
mvn clean package -DskipTests = true
Provide names and locations for your template file and template container
image.
export TEMPLATE_PATH = "gs:// $BUCKET /samples/ your-template-file .json"
export TEMPLATE_IMAGE = "gcr.io/ $PROJECT_ID / your-template-image :latest"
Build a custom flex template. A required metadata.json file, which contains the necessary spec to
run the job, has been provided with the example.
gcloud dataflow flex-template build $TEMPLATE_PATH \
--image-gcr-path $TEMPLATE_IMAGE \
--sdk-language "JAVA" \
--flex-template-base-image "JAVA11" \
--metadata-file "metadata.json" \
--jar "target/pubsublite-streaming-bundled-1.0.jar" \
--env FLEX_TEMPLATE_JAVA_MAIN_CLASS = "examples.PubsubliteToGcs"
Run a job using the custom flex template.
Note: Pub/Sub Lite allows only one subscriber to pull
messages from one partition. If your topic is configured to have only one
partition and you use its subscription in more than one Dataflow jobs, only
one job will receive messages.
Console
Create job from template .
Enter a Job name .
Enter your Dataflow region .
Choose your Custom Template .
Enter your template path .
Enter the required parameters.
Click Run job .
gcloud
gcloud dataflow flex-template run "pubsublite-to-gcs-`date +%Y%m%d`" \
--template-file-gcs-location $TEMPLATE_PATH \
--parameters subscription = "projects/ $PROJECT_ID /locations/ $LITE_LOCATION /subscriptions/ $SUBSCRIPTION " \
--parameters output = "gs:// $BUCKET /samples/template-output" \
--parameters windowSize = 1 \
--region $DATAFLOW_REGION \
--serviceAccount = $SERVICE_ACCOUNT
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
In the Dataflow console, stop the job. Cancel the pipeline
instead of draining it.
Delete the topic and subscription.
gcloud pubsub lite-topics delete $TOPIC
gcloud pubsub lite-subscriptions delete $SUBSCRIPTION
Delete the files created by the pipeline.
gcloud storage rm "gs:// $BUCKET /samples/*" --recursive --continue-on-error
gcloud storage rm "gs:// $BUCKET /temp/*" --recursive --continue-on-error
Delete the template image and the template file if they exist.
gcloud container images delete $TEMPLATE_IMAGE
gcloud storage rm $TEMPLATE_PATH
Remove the Cloud Storage bucket.
gcloud storage rm gs:// $BUCKET --recursive
Delete the service account:
gcloud iam service-accounts delete SERVICE_ACCOUNT_EMAIL
Optional: Revoke the authentication credentials that you created, and delete the local
credential file.
gcloud auth application-default revoke
Optional: Revoke credentials from the gcloud CLI.
gcloud auth revoke
What's next
Read more about Configuring Dataflow Flex Templates .
Understand Dataflow streaming pipelines .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

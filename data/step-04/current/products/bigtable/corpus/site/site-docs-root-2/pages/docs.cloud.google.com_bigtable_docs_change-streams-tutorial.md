---
title: "Process a Bigtable change stream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/change-streams-tutorial
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/change-streams-tutorial
  title: "Process a Bigtable change stream \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Process a Bigtable change stream
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows how to deploy a data pipeline to Dataflow for a
real-time stream of database changes sourced from a Bigtable table's
change stream. The output of the pipeline is written to a series of files on
Cloud Storage.
An example dataset for a music listening application is provided. In this
tutorial, you track songs that are listened to and then rank the top five over a
period.
This tutorial is intended for technical users familiar with writing code and
deploying data pipelines to Google Cloud.
Objectives
This tutorial shows you how to do the following:
Create a Bigtable table with a change stream enabled.
Deploy a pipeline on Dataflow that transforms and outputs the
change stream.
View the results of your data pipeline.
Costs
In this document, you use the following billable components of Google Cloud:
Bigtable
Compute Engine
Dataflow
Cloud Storage
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
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
Enable the Dataflow, Cloud Bigtable API, Cloud Bigtable Admin API, and Cloud Storage APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dataflow.googleapis.com bigtable.googleapis.com bigtableadmin.googleapis.com storage.googleapis.com
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
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
Enable the Dataflow, Cloud Bigtable API, Cloud Bigtable Admin API, and Cloud Storage APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dataflow.googleapis.com bigtable.googleapis.com bigtableadmin.googleapis.com storage.googleapis.com
Update and install the
cbt CLI
.
gcloud components update
gcloud components install cbt
Prepare the environment
Get the code
Clone the repository that contains the sample code. If you already previously downloaded this
repository, pull to get the latest version.
git clone https://github.com/GoogleCloudPlatform/java-docs-samples.git
cd java-docs-samples/bigtable/beam/change-streams
Create a bucket
Create a Cloud Storage bucket:
gcloud storage buckets create gs:// BUCKET_NAME
Replace BUCKET_NAME with a bucket name
that meets the bucket naming requirements .
Create a Bigtable instance
You can use an existing instance for this tutorial or create an instance
with the default configurations in a region near you.
Create a table
The sample application tracks the songs that users listen to and stores the
listen events in Bigtable. Create a table with a change stream
enabled that has one column family (cf) and one column (song) and uses user IDs
for row keys.
Create the table.
gcloud bigtable instances tables create song-rank \
--column-families = cf --change-stream-retention-period = 7d \
--instance = BIGTABLE_INSTANCE_ID --project = PROJECT_ID
Replace the following:
PROJECT_ID : the ID of the project that you are using
BIGTABLE_INSTANCE_ID : the ID of the instance to contain the new table
Start the pipeline
This pipeline transforms the change stream by doing the following:
Reads the change stream
Gets the song name
Groups the song listen events into N-second windows
Counts the top five songs
Outputs the results
Run the pipeline.
mvn compile exec:java -Dexec.mainClass = SongRank \
"-Dexec.args=--project= PROJECT_ID --bigtableProjectId= PROJECT_ID \
--bigtableInstanceId= BIGTABLE_INSTANCE_ID --bigtableTableId=song-rank \
--outputLocation=gs:// BUCKET_NAME / \
--runner=dataflow --region= BIGTABLE_REGION --experiments=use_runner_v2"
Replace BIGTABLE_REGION with the ID of the region that your Bigtable instance is in, such as us-east5 .
Understand the pipeline
The following snippets of code from the pipeline can help you understand the
code you are running.
Reading the change stream
The code in this sample configures the source stream with the parameters for the
specific Bigtable instance and table.
p . apply (
"Stream from Bigtable" ,
BigtableIO . readChangeStream ()
. withProjectId ( options . getBigtableProjectId ())
. withInstanceId ( options . getBigtableInstanceId ())
. withTableId ( options . getBigtableTableId ())
. withAppProfileId ( options . getBigtableAppProfile ())
)
Getting the song name
When a song is listened to, the song name is written to the column family cf
and column qualifier song , so the code extracts the value from the change
stream mutation and outputs it to the next step of the pipeline.
private static class ExtractSongName extends DoFn<KV<ByteString , ChangeStreamMutation > , String > {
@DoFn.ProcessElement
public void processElement ( ProcessContext c ) {
for ( Entry e : Objects . requireNonNull ( Objects . requireNonNull ( c . element ()). getValue ())
. getEntries ()) {
if ( e instanceof SetCell ) {
SetCell setCell = ( SetCell ) e ;
if ( "cf" . equals ( setCell . getFamilyName ())
&& "song" . equals ( setCell . getQualifier (). toStringUtf8 ())) {
c . output ( setCell . getValue (). toStringUtf8 ());
}
}
}
}
}
Counting the top five songs
You can use the built-in Beam functions Count and Top.of to get the top five
songs in the current window.
. apply ( Count . perElement ())
. apply ( "Top songs" , Top . of ( 5 , new SongComparator ()). withoutDefaults ())
Outputting the results
This pipeline writes the results to standard out as well as files. For the
files, it windows the writes into groups of 10 elements or one-minute segments.
. apply ( "Print" , ParDo . of ( new PrintFn ()))
. apply (
"Collect at least 10 elements or 1 minute of elements" ,
Window . < String>into ( new GlobalWindows ())
. triggering (
Repeatedly . forever (
AfterFirst . of (
AfterPane . elementCountAtLeast ( 10 ),
AfterProcessingTime
. pastFirstElementInPane ()
. plusDelayOf ( Duration . standardMinutes ( 1 )
)
)
))
. discardingFiredPanes ())
. apply (
"Output top songs" ,
TextIO . write ()
. to ( options . getOutputLocation () + "song-charts/" )
. withSuffix ( ".txt" )
. withNumShards ( 1 )
. withWindowedWrites ()
);
View the pipeline
In the Google Cloud console, go to the Dataflow page.
Go to Dataflow
Click the job with a name that begins with song-rank .
At the bottom of the screen click Show to open the logs panel.
Click Worker logs to monitor the output logs of the change stream.
Note: The log might take a few minutes to appear while the job initializes.
Stream writes
Use the
cbt CLI
to write a number of song listens for various users to
the song-rank table. This is designed to write over a few minutes to simulate
song listens streaming in over time.
cbt -instance = BIGTABLE_INSTANCE_ID -project = PROJECT_ID import \
song-rank song-rank-data.csv column-family = cf batch-size = 1
View the output
Read the output on Cloud Storage to see the most popular songs.
gcloud storage cat gs:// BUCKET_NAME /song-charts/GlobalWindow-pane-0-00000-of-00001.txt
Note: The file might take a few minutes to appear while the pipeline processes
the data. View the Dataflow worker logs to monitor the status.
Example output:
2023-07-06T19:53:38.232Z [KV{The Wheels on the Bus, 199}, KV{Twinkle, Twinkle, Little Star, 199}, KV{Ode to Joy , 192}, KV{Row, Row, Row Your Boat, 186}, KV{Take Me Out to the Ball Game, 182}]
2023-07-06T19:53:49.536Z [KV{Old MacDonald Had a Farm, 20}, KV{Take Me Out to the Ball Game, 18}, KV{Für Elise, 17}, KV{Ode to Joy , 15}, KV{Mary Had a Little Lamb, 12}]
2023-07-06T19:53:50.425Z [KV{Twinkle, Twinkle, Little Star, 20}, KV{The Wheels on the Bus, 17}, KV{Row, Row, Row Your Boat, 13}, KV{Happy Birthday to You, 12}, KV{Over the Rainbow, 9}]
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete individual resources
Delete the bucket and files.
gcloud storage rm --recursive gs:// BUCKET_NAME /
Disable the change stream on the table.
gcloud bigtable instances tables update song-rank --instance = BIGTABLE_INSTANCE_ID \
--clear-change-stream-retention-period
Delete the table song-rank .
cbt -instance = BIGTABLE_INSTANCE_ID -project = PROJECT_ID deletetable song-rank
Stop the change stream pipeline.
List the jobs to get the job ID.
gcloud dataflow jobs list --region = BIGTABLE_REGION
Cancel the job.
gcloud dataflow jobs cancel JOB_ID --region = BIGTABLE_REGION
Replace JOB_ID with the job ID displayed after the prior command.
What's next
Read through the change streams documentation .
Download the sample code .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

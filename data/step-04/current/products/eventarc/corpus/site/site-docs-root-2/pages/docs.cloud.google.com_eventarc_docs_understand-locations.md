---
title: "Understand Eventarc locations \_|\_ Eventarc Standard \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/docs/understand-locations
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/eventarc/docs/understand-locations
  title: "Understand Eventarc locations \_|\_ Eventarc Standard \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Eventarc
Standard
Guides
Send feedback
Understand Eventarc locations
Stay organized with collections
Save and categorize content based on your preferences.
Standard
Each event source, event target, and Eventarc trigger has its own
location. Sometimes, these locations must match; at other times, they can be
different. For more information, see Eventarc locations .
Source location
The location of the event source often dictates the trigger location. In the
following example, since the Cloud Storage bucket is in the europe-west1
region, the trigger must also be located in europe-west1 .
gcloud eventarc triggers create trigger-storage \
--destination-run-service = hello \
--destination-run-region = us-central1 \
--location = europe-west1 \
--event-filters = "type=google.cloud.storage.object.v1.finalized" \
--event-filters = "bucket=my-bucket-in-europe-west1-region" \
--service-account = $PROJECT_NUMBER -compute@developer.gserviceaccount.com
Target location
When deploying your event target (for example, a Cloud Run service),
you choose a supported region as its location. Typically, for latency and data
locality reasons, you want this to be in the same region as your event source.
However, it is not a requirement and in the preceding example, the event source
is in europe-west1 while the --destination-run-region flag indicates that
the event target is in us-central1 .
Trigger location
Additionally, the type of Eventarc trigger you create impacts the
location of the trigger which is specified through the --location flag:
Cloud Audit Logs
Using Cloud Audit Logs triggers, you can connect any event source that
emits audit logs to an event target. Cloud Audit Logs triggers are
available in single-region locations and you can also create a global
Eventarc trigger; however, triggers are not supported in
dual-region and multi-region locations.
The location of the event source dictates the trigger location. Typically,
this is a single-region location. For example, to capture Cloud Storage
events from a bucket in the europe-west1 region with an audit logs trigger,
create a trigger in the same location:
gcloud eventarc triggers create trigger-auditlog \
--destination-run-service = hello \
--destination-run-region = us-central1 \
--location = europe-west1 \
--event-filters = "type=google.cloud.audit.log.v1.written" \
--event-filters = "serviceName=storage.googleapis.com" \
--event-filters = "methodName=storage.objects.create" \
--service-account = $PROJECT_NUMBER -compute@developer.gserviceaccount.com
As there's no filtering by bucket when you use a Cloud Audit Logs
trigger, this will match all buckets in the europe-west1 region. (To filter
by bucket, you can instead use a direct Cloud Storage trigger.)
Or, to match a dual-region or multi-region bucket such as eu , you can
create a trigger with a global location and this will match all buckets in
all regions for which the event filters match:
gcloud eventarc triggers create trigger-storage \
--destination-run-service = hello \
--destination-run-region = us-central1 \
--location = global \
--event-filters = "type=google.cloud.storage.object.v1.finalized" \
--event-filters = "bucket=my-bucket-in-europe-west1-region" \
--service-account = $PROJECT_NUMBER -compute@developer.gserviceaccount.com
Note: There is a known issue with Cloud Audit Logs triggers for
Compute Engine
that results in events originating from a single region: us-central1 . This
is regardless of where the virtual machine instance is actually located. When
creating your trigger for a specific provider and destination ,
set the trigger location to either us-central1 or global .
Cloud Storage
Important: Because Eventarc Standard uses Pub/Sub as its transport layer,
Cloud Storage triggers can fail if a Cloud Storage event originates from a region not
permitted by your Pub/Sub message storage policy, and if in-transit operations are
enforced ( "enforceInTransit": true ). When you create a Cloud Storage
trigger in a multi-region location, ensure
your message storage policy allows all source regions within that multi-region. For more
information, see
Configure message storage policies .
Cloud Storage triggers respond to events inside a Cloud Storage
bucket—object creation, deletion, archiving, and metadata updates.
Cloud Storage triggers are available in single-region, dual-region,
and multi-region locations; you cannot create a global Eventarc
trigger.
The location of the Cloud Storage bucket dictates the location of
the Eventarc trigger, and they must match. In the following
example, the trigger location matches that of the Cloud Storage
bucket (the eu multi-region location):
gcloud eventarc triggers create trigger-storage \
--destination-run-service = hello \
--destination-run-region = us-central1 \
--location = eu \
--event-filters = "type=google.cloud.storage.object.v1.finalized" \
--event-filters = "bucket=my-bucket-in-eu-multi-region" \
--service-account = $PROJECT_NUMBER -compute@developer.gserviceaccount.com
If the bucket and trigger regions don't match, you will see an error similar
to the following:
ERROR: ( gcloud.eventarc.triggers.create ) INVALID_ARGUMENT: The request was
invalid: Bucket "my-bucket-in-eu-multi-region" location "eu" does not match
trigger location "europe-west1" . Try again by creating the trigger in "eu" .
Pub/Sub
A Pub/Sub trigger connects a Pub/Sub topic to
an event target. Pub/Sub triggers are only available in
single-region locations and you cannot create a global Eventarc
trigger.
Although Pub/Sub topics are global and not tied to a
single region, when you create a Pub/Sub trigger, you
must specify a region for it using the --location flag:
gcloud eventarc triggers create trigger-pubsub \
--destination-run-service = hello \
--destination-run-region = us-central1 \
--location = us-central1 \
--event-filters = "type=google.cloud.pubsub.topic.v1.messagePublished" \
--transport-topic = projects/your-projectid/topics/your-topic
Eventarc configures geofencing so that Pub/Sub
events persist only in the specified location. You can also use regional
Pub/Sub service endpoints
to publish to the topic so that all of the data stays in a single region.
What's next
To learn how to route events across Google Cloud projects, see the tutorial .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

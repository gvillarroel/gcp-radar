---
title: "Transcribe long audio files into text \_|\_ Cloud Speech-to-Text \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/batch-recognize
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/batch-recognize
  title: "Transcribe long audio files into text \_|\_ Cloud Speech-to-Text \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Send feedback
Transcribe long audio files into text
Stay organized with collections
Save and categorize content based on your preferences.
This page demonstrates how to transcribe long audio files (longer than one
minute) to text using the Speech-to-Text API and asynchronous speech
recognition.
About asynchronous speech recognition
Batch speech recognition starts a long-running audio processing operation. Use
asynchronous speech recognition to transcribe audio that is longer than 60
seconds. For shorter audio, synchronous speech recognition is faster and simpler. The upper limit for asynchronous
speech recognition is 480 minutes (8 hours).
Batch speech recognition is only able to transcribe audio stored in
Cloud Storage. The transcription output can be either provided inline in the
response (for single-file batch recognition requests) or written to
Cloud Storage.
The batch recognition request returns an Operation
that contains information about the ongoing recognition processing of your
request. You can poll the operation to know when the
operation is complete and transcripts are available.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Speech-to-Text APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
Cloud Speech Administrator
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Speech-to-Text APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
Cloud Speech Administrator
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Client libraries can use
Application Default Credentials
to easily authenticate with Google APIs and send requests to those APIs. With
Application Default Credentials, you can test your application locally and
deploy it without changing the underlying code. For more information, see
Authenticate for using client libraries .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Also ensure you have installed the client library .
Enable access to Cloud Storage
Speech-to-Text uses a service account to access your files in Cloud Storage.
By default, the service account has access to Cloud Storage files in the same
project.
The service account email address is the following:
service- PROJECT_NUMBER @gcp-sa-speech.iam.gserviceaccount.com
In order to transcribe Cloud Storage files in another project, you can give
this service account the [Speech-to-Text Service Agent][speech-service-agent]
role in the other project:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-speech.iam.gserviceaccount.com \
--role = roles/speech.serviceAgent
More information about project IAM policy is available at
[Manage access to projects, folders, and organizations][manage-access].
You can also give the service account more granular access by giving it
permission to a specific Cloud Storage bucket:
gcloud storage buckets add-iam-policy-binding gs:// BUCKET_NAME \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-speech.iam.gserviceaccount.com \
--role = roles/storage.admin
More information about managing access to Cloud Storage is available at
[Create and Manage access control lists][buckets-manage-acl]
in the Cloud Storage documentation.
Perform batch recognition with inline results
Here is an example of performing batch speech recognition on an audio file in
Cloud Storage and reading the transcription results inline from the response:
Python
import os
from google.cloud.speech_v2 import SpeechClient
from google.cloud.speech_v2.types import cloud_speech
PROJECT_ID = os . getenv ( "GOOGLE_CLOUD_PROJECT" )
def transcribe_batch_gcs_input_inline_output_v2 (
audio_uri : str ,
) - > cloud_speech . BatchRecognizeResults :
"""Transcribes audio from a Google Cloud Storage URI using the Google Cloud Speech-to-Text API.
The transcription results are returned inline in the response.
Args:
audio_uri (str): The Google Cloud Storage URI of the input audio file.
Such as gs://[BUCKET]/[FILE]
Returns:
cloud_speech.BatchRecognizeResults: The response containing the transcription results.
"""
# Instantiates a client
client = SpeechClient ()
config = cloud_speech . RecognitionConfig (
auto_decoding_config = cloud_speech . AutoDetectDecodingConfig (),
language_codes = [ "en-US" ],
model = "chirp_3" ,
)
file_metadata = cloud_speech . BatchRecognizeFileMetadata ( uri = audio_uri )
request = cloud_speech . BatchRecognizeRequest (
recognizer = f "projects/ { PROJECT_ID } /locations/global/recognizers/_" ,
config = config ,
files = [ file_metadata ],
recognition_output_config = cloud_speech . RecognitionOutputConfig (
inline_response_config = cloud_speech . InlineOutputConfig (),
),
)
# Transcribes the audio into text
operation = client . batch_recognize ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ( timeout = 120 )
for result in response . results [ audio_uri ] . transcript . results :
print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " )
return response . results [ audio_uri ] . transcript
Perform batch recognition and write results to Cloud Storage
Here is an example of performing batch speech recognition on an audio file in
Cloud Storage and reading the transcription results from the output file in
Cloud Storage. Note that the file written to Cloud Storage is a
BatchRecognizeResults message in JSON
format:
Python
import os
import re
from google.cloud import storage
from google.cloud.speech_v2 import SpeechClient
from google.cloud.speech_v2.types import cloud_speech
PROJECT_ID = os . getenv ( "GOOGLE_CLOUD_PROJECT" )
def transcribe_batch_gcs_input_gcs_output_v2 (
audio_uri : str ,
gcs_output_path : str ,
) - > cloud_speech . BatchRecognizeResults :
"""Transcribes audio from a Google Cloud Storage URI using the Google Cloud Speech-to-Text API.
The transcription results are stored in another Google Cloud Storage bucket.
Args:
audio_uri (str): The Google Cloud Storage URI of the input audio file.
E.g., gs://[BUCKET]/[FILE]
gcs_output_path (str): The Google Cloud Storage bucket URI where the output transcript will be stored.
E.g., gs://[BUCKET]
Returns:
cloud_speech.BatchRecognizeResults: The response containing the URI of the transcription results.
"""
# Instantiates a client
client = SpeechClient ()
config = cloud_speech . RecognitionConfig (
auto_decoding_config = cloud_speech . AutoDetectDecodingConfig (),
language_codes = [ "en-US" ],
model = "chirp_3" ,
)
file_metadata = cloud_speech . BatchRecognizeFileMetadata ( uri = audio_uri )
request = cloud_speech . BatchRecognizeRequest (
recognizer = f "projects/ { PROJECT_ID } /locations/global/recognizers/_" ,
config = config ,
files = [ file_metadata ],
recognition_output_config = cloud_speech . RecognitionOutputConfig (
gcs_output_config = cloud_speech . GcsOutputConfig (
uri = gcs_output_path ,
),
),
)
# Transcribes the audio into text
operation = client . batch_recognize ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ( timeout = 120 )
file_results = response . results [ audio_uri ]
print ( f "Operation finished. Fetching results from { file_results . uri } ..." )
output_bucket , output_object = re . match (
r "gs://([^/]+)/(.*)" , file_results . uri
) . group ( 1 , 2 )
# Instantiates a Cloud Storage client
storage_client = storage . Client ()
# Fetch results from Cloud Storage
bucket = storage_client . bucket ( output_bucket )
blob = bucket . blob ( output_object )
results_bytes = blob . download_as_bytes ()
batch_recognize_results = cloud_speech . BatchRecognizeResults . from_json (
results_bytes , ignore_unknown_fields = True
)
for result in batch_recognize_results . results :
print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " )
return batch_recognize_results
Perform batch recognition on multiple files
Here is an example of performing batch speech recognition on multiple audio
files in Cloud Storage and reading the transcription results from the output
files in Cloud Storage:
Python
import os
import re
from typing import List
from google.cloud import storage
from google.cloud.speech_v2 import SpeechClient
from google.cloud.speech_v2.types import cloud_speech
PROJECT_ID = os . getenv ( "GOOGLE_CLOUD_PROJECT" )
def transcribe_batch_multiple_files_v2 (
audio_uris : List [ str ],
gcs_output_path : str ,
) - > cloud_speech . BatchRecognizeResponse :
"""Transcribes audio from multiple Google Cloud Storage URIs using the Google Cloud Speech-to-Text API.
The transcription results are stored in another Google Cloud Storage bucket.
Args:
audio_uris (List[str]): The list of Google Cloud Storage URIs of the input audio files.
Such as ["gs://[BUCKET]/[FILE]", "gs://[BUCKET]/[FILE]"]
gcs_output_path (str): The Google Cloud Storage bucket URI where the output transcript is stored.
Such as gs://[BUCKET]
Returns:
cloud_speech.BatchRecognizeResponse: The response containing the URIs of the transcription results.
"""
# Instantiates a client
client = SpeechClient ()
config = cloud_speech . RecognitionConfig (
auto_decoding_config = cloud_speech . AutoDetectDecodingConfig (),
language_codes = [ "en-US" ],
model = "chirp_3" ,
)
files = [ cloud_speech . BatchRecognizeFileMetadata ( uri = uri ) for uri in audio_uris ]
request = cloud_speech . BatchRecognizeRequest (
recognizer = f "projects/ { PROJECT_ID } /locations/global/recognizers/_" ,
config = config ,
files = files ,
recognition_output_config = cloud_speech . RecognitionOutputConfig (
gcs_output_config = cloud_speech . GcsOutputConfig (
uri = gcs_output_path ,
),
),
)
# Transcribes the audio into text
operation = client . batch_recognize ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ( timeout = 120 )
print ( "Operation finished. Fetching results from:" )
for uri in audio_uris :
file_results = response . results [ uri ]
print ( f " { file_results . uri } ..." )
output_bucket , output_object = re . match (
r "gs://([^/]+)/(.*)" , file_results . uri
) . group ( 1 , 2 )
# Instantiates a Cloud Storage client
storage_client = storage . Client ()
# Fetch results from Cloud Storage
bucket = storage_client . bucket ( output_bucket )
blob = bucket . blob ( output_object )
results_bytes = blob . download_as_bytes ()
batch_recognize_results = cloud_speech . BatchRecognizeResults . from_json (
results_bytes , ignore_unknown_fields = True
)
for result in batch_recognize_results . results :
print ( f " Transcript: { result . alternatives [ 0 ] . transcript } " )
return response
Enable dynamic batching on batch recognition
Dynamic batching enables lower cost transcription for higher latency. This
feature is only available for batch recognition.
Here is an example of performing batch recognition on an audio file in
Cloud Storage with dynamic batching enabled:
Python
import os
from google.cloud.speech_v2 import SpeechClient
from google.cloud.speech_v2.types import cloud_speech
PROJECT_ID = os . getenv ( "GOOGLE_CLOUD_PROJECT" )
def transcribe_batch_dynamic_batching_v2 (
audio_uri : str ,
) - > cloud_speech . BatchRecognizeResults :
"""Transcribes audio from a Google Cloud Storage URI using dynamic batching.
Args:
audio_uri (str): The Cloud Storage URI of the input audio.
E.g., gs://[BUCKET]/[FILE]
Returns:
cloud_speech.BatchRecognizeResults: The response containing the transcription results.
"""
# Instantiates a client
client = SpeechClient ()
config = cloud_speech . RecognitionConfig (
auto_decoding_config = cloud_speech . AutoDetectDecodingConfig (),
language_codes = [ "en-US" ],
model = "chirp_3" ,
)
file_metadata = cloud_speech . BatchRecognizeFileMetadata ( uri = audio_uri )
request = cloud_speech . BatchRecognizeRequest (
recognizer = f "projects/ { PROJECT_ID } /locations/global/recognizers/_" ,
config = config ,
files = [ file_metadata ],
recognition_output_config = cloud_speech . RecognitionOutputConfig (
inline_response_config = cloud_speech . InlineOutputConfig (),
),
processing_strategy = cloud_speech . BatchRecognizeRequest . ProcessingStrategy . DYNAMIC_BATCHING ,
)
# Transcribes the audio into text
operation = client . batch_recognize ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ( timeout = 120 )
for result in response . results [ audio_uri ] . transcript . results :
print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " )
return response . results [ audio_uri ] . transcript
Override recognition features per file
Batch recognition by default uses the same recognition configuration for each
file in the batch recognition request. If different files require different
configuration or features, configuration can be overridden per file using the
config field in the
BatchRecognizeFileMetadata message. See
the recognizers documentation for an example
overriding recognition features.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
Optional: Revoke the authentication credentials that you created, and delete the local
credential file.
gcloud auth application-default revoke
Optional: Revoke credentials from the gcloud CLI.
gcloud auth revoke
Console
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
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
gcloud
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
What's next
See the reference documentation for batch recognition.
Learn how to transcribe streaming audio .
Learn how to transcribe short audio files .
For best performance, accuracy, and other tips, see the best practices documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

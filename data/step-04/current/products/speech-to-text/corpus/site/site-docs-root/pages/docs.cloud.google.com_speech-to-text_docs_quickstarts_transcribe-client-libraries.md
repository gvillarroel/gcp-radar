---
title: "Transcribe speech to text by using client libraries \_|\_ Cloud Speech-to-Text\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/quickstarts/transcribe-client-libraries
  title: "Transcribe speech to text by using client libraries \_|\_ Cloud Speech-to-Text\
    \ \_|\_ Google Cloud Documentation"
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
Transcribe speech to text by using client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to send a speech recognition request to
Speech-to-Text in your favorite programming language using the
Google Cloud Client Libraries.
Speech-to-Text enables easy integration of Google speech
recognition technologies into developer applications. You can send
audio data to the Speech-to-Text API, which then returns a
text transcription of that audio file. For more information about
the service, see
Cloud STT basics .
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
Make an audio transcription request
Use the following code to send a Recognize request to
the Speech-to-Text API.
Java
// Imports the Google Cloud client library
import com.google.api.gax.longrunning. OperationFuture ;
import com.google.cloud.speech.v2. AutoDetectDecodingConfig ;
import com.google.cloud.speech.v2. CreateRecognizerRequest ;
import com.google.cloud.speech.v2. OperationMetadata ;
import com.google.cloud.speech.v2. RecognitionConfig ;
import com.google.cloud.speech.v2. RecognizeRequest ;
import com.google.cloud.speech.v2. RecognizeResponse ;
import com.google.cloud.speech.v2. Recognizer ;
import com.google.cloud.speech.v2. SpeechClient ;
import com.google.cloud.speech.v2. SpeechRecognitionAlternative ;
import com.google.cloud.speech.v2. SpeechRecognitionResult ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
import java.nio.file.Files ;
import java.nio.file.Path ;
import java.nio.file.Paths ;
import java.util.List ;
import java.util.concurrent.ExecutionException ;
public class QuickstartSampleV2 {
public static void main ( String [] args ) throws IOException , ExecutionException ,
InterruptedException {
String projectId = "my-project-id" ;
String filePath = "path/to/audioFile.raw" ;
String recognizerId = "my-recognizer-id" ;
quickstartSampleV2 ( projectId , filePath , recognizerId );
}
public static void quickstartSampleV2 ( String projectId , String filePath , String recognizerId )
throws IOException , ExecutionException , InterruptedException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( SpeechClient speechClient = SpeechClient . create ()) {
Path path = Paths . get ( filePath );
byte [] data = Files . readAllBytes ( path );
ByteString audioBytes = ByteString . copyFrom ( data );
String parent = String . format ( "projects/%s/locations/global" , projectId );
// First, create a recognizer
Recognizer recognizer = Recognizer . newBuilder ()
. setModel ( "latest_long" )
. addLanguageCodes ( "en-US" )
. build ();
CreateRecognizerRequest createRecognizerRequest = CreateRecognizerRequest . newBuilder ()
. setParent ( parent )
. setRecognizerId ( recognizerId )
. setRecognizer ( recognizer )
. build ();
OperationFuture<Recognizer , OperationMetadata > operationFuture =
speechClient . createRecognizerAsync ( createRecognizerRequest );
recognizer = operationFuture . get ();
// Next, create the transcription request
RecognitionConfig recognitionConfig = RecognitionConfig . newBuilder ()
. setAutoDecodingConfig ( AutoDetectDecodingConfig . newBuilder (). build ())
. build ();
RecognizeRequest request = RecognizeRequest . newBuilder ()
. setConfig ( recognitionConfig )
. setRecognizer ( recognizer . getName ())
. setContent ( audioBytes )
. build ();
RecognizeResponse response = speechClient . recognize ( request );
List<SpeechRecognitionResult> results = response . getResultsList ();
for ( SpeechRecognitionResult result : results ) {
// There can be several alternative transcripts for a given chunk of speech. Just use the
// first (most likely) one here.
if ( result . getAlternativesCount () > 0 ) {
SpeechRecognitionAlternative alternative = result . getAlternativesList (). get ( 0 );
System . out . printf ( "Transcription: %s%n" , alternative . getTranscript ());
}
}
}
}
}
Python
import os
from google.cloud.speech_v2 import SpeechClient
from google.cloud.speech_v2.types import cloud_speech
PROJECT_ID = os . getenv ( "GOOGLE_CLOUD_PROJECT" )
def quickstart_v2 ( audio_file : str ) - > cloud_speech . RecognizeResponse :
"""Transcribe an audio file.
Args:
audio_file (str): Path to the local audio file to be transcribed.
Returns:
cloud_speech.RecognizeResponse: The response from the recognize request, containing
the transcription results
"""
# Reads a file as bytes
with open ( audio_file , "rb" ) as f :
audio_content = f . read ()
# Instantiates a client
client = SpeechClient ()
config = cloud_speech . RecognitionConfig (
auto_decoding_config = cloud_speech . AutoDetectDecodingConfig (),
language_codes = [ "en-US" ],
model = "long" ,
)
request = cloud_speech . RecognizeRequest (
recognizer = f "projects/ { PROJECT_ID } /locations/global/recognizers/_" ,
config = config ,
content = audio_content ,
)
# Transcribes the audio into text
response = client . recognize ( request = request )
for result in response . results :
print ( f "Transcript: { result . alternatives [ 0 ] . transcript } " )
return response
You sent your first request to Speech-to-Text.
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
Learn how to transcribe short audio files .
Learn how to transcribe streaming audio .
Learn how to transcribe long audio files .
For best performance, accuracy, and other tips, see the best practices documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

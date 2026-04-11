---
title: "Create a face blur app with warehouse storage \_|\_ Vertex AI Vision \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial
  title: "Create a face blur app with warehouse storage \_|\_ Vertex AI Vision \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Vision
Guides
Send feedback
Create a face blur app with warehouse storage
Stay organized with collections
Save and categorize content based on your preferences.
Note: To complete this tutorial you need access to video data with human faces,
either Real Time Streaming Protocol ( RTSP ) video data
from a live Internet Protocol ( IP ) camera, or a local
video file.
Vertex AI Vision is an AI-powered platform you can use to ingest, analyze, and
store video data. Vertex AI Vision lets you build
and deploy AI applications. You can build end-to-end Vertex AI Vision solutions
by leveraging Vertex AI Vision's integration with other product components.
To start implementing solutions using the Vertex AI Vision platform,
review the following Vertex AI Vision concepts and components:
Streams : Represent a video streaming layer from your solution. The stream
source can be a live video (for example, an IP camera) or a video file
(for example, an MP4 file).
Applications : Enable the connection between a stream and an AI processor
to perform a machine learning operation on the video. For example, you can
connect a camera stream to an AI model that counts people passing in front of
it.
Media warehouses : Store the video ingested by streams out to
Google Cloud storage. Storing data out to this destination lets you
query analysis
output and metadata from the AI processors used on data from the ingested
streams.
Objectives
This tutorial shows you how to do the following:
Create a data input stream resource.
Begin streaming video data into this stream resource.
Create an empty application.
Add nodes to your application to stream data, modify data, and store data.
Deploy your app for you to use.
View processed data output in the Google Cloud console.
Before you begin this tutorial, you must have a streaming video resource
to send data to your Vertex AI Vision app. This resource can
be either a local video or an RTSP feed. This video data must
contain human faces that the sample app can then blur.
Costs
In this document, you use the following billable components of Google Cloud:
Vertex AI Vision (Streams -
Data ingested, Streams - Data consumed, Models - Person / face blur,
Warehouse - Video storage)
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Get the location of your streaming video source, either locally
(for example, ./sample_video.mp4 ) or IP address of the live
RTSP feed (for example, rtsp://192.168.1.180:540 ). You need
this information to begin ingesting data into a stream after you create the
stream resource.
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
Enable the Vision AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Vision AI > Vision AI Editor role to the service account.
To grant the role, find the Select a role list, then select
Vision AI > Vision AI Editor .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
Do not close your browser window. You will use it in the next step.
Create a service account key:
In the Google Cloud console, click the email address for the service account that you
created.
Click Keys .
Click Add key , and then click Create new key .
Click Create . A JSON key file is downloaded to your computer.
Click Close .
Set the environment variable GOOGLE_APPLICATION_CREDENTIALS
to the path of the JSON file that contains your credentials.
This variable applies only to your current shell session, so if you open
a new session, set the variable again.
Example: Linux or macOS
export GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
export GOOGLE_APPLICATION_CREDENTIALS = "/home/user/Downloads/service-account-file.json"
Example: Windows
For PowerShell:
$env :GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
$env :GOOGLE_APPLICATION_CREDENTIALS = "C:\Users\username\Downloads\service-account-file.json"
For command prompt:
set GOOGLE_APPLICATION_CREDENTIALS = KEY_PATH
Replace KEY_PATH with the path of the JSON file that contains your credentials.
Install the Google Cloud CLI.
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
Enable the Vision AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Vision AI > Vision AI Editor role to the service account.
To grant the role, find the Select a role list, then select
Vision AI > Vision AI Editor .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
Do not close your browser window. You will use it in the next step.
Create a service account key:
In the Google Cloud console, click the email address for the service account that you
created.
Click Keys .
Click Add key , and then click Create new key .
Click Create . A JSON key file is downloaded to your computer.
Click Close .
Set the environment variable GOOGLE_APPLICATION_CREDENTIALS
to the path of the JSON file that contains your credentials.
This variable applies only to your current shell session, so if you open
a new session, set the variable again.
Example: Linux or macOS
export GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
export GOOGLE_APPLICATION_CREDENTIALS = "/home/user/Downloads/service-account-file.json"
Example: Windows
For PowerShell:
$env :GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
$env :GOOGLE_APPLICATION_CREDENTIALS = "C:\Users\username\Downloads\service-account-file.json"
For command prompt:
set GOOGLE_APPLICATION_CREDENTIALS = KEY_PATH
Replace KEY_PATH with the path of the JSON file that contains your credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Installing the vaictl tool to ingest data into a stream
(OS: Debian GNU/Linux, CPU architecture: x86_64):
Note : You can also get a Docker image that has
the Vertex AI Vision SDK and all its dependencies already pre-installed.
For information about getting a Docker image with the
Vertex AI Vision SDK, Set up a
project and a development environment .
Download the required package:
wget https://github.com/google/visionai/releases/download/v0.0.5/visionai_0.0-5_amd64.deb
After downloading the package, run the following command in the directory
you downloaded the file:
sudo apt install ./visionai_0.0-5_amd64.deb
Verify installation:
vaictl --help
Create a stream
To create a streaming video analysis app, you must first create and register
a stream resource. As the resource that receives the video data from the users,
the stream is required on any scenario you build using Vertex AI Vision.
Console
To create a new stream in the Google Cloud console, use the following steps.
Open the Streams tab of the Vertex AI Vision dashboard.
Go to the Streams tab
Click add Register .
Enter input-stream as the stream name and select the region where you
want to create your stream.
Click Register to create one or more streams.
Ingest video into the stream
After you create a stream resource, you can use the vaictl command-line tool
to send video data to the stream.
Note: If you installed the vaictl tool using the Docker container option, you
must run your container and sign in before
proceeding with the next steps.
IP camera
If you're testing using a live IP camera, you need to get the IP address of
the camera. You must provide this information with the request, along with
other variable substitutions:
PROJECT_ID : Your Google Cloud project ID.
LOCATION_ID : Your location ID. For example,
us-central1 . For more information, see
Cloud locations .
RTSP_ADDRESS : The address of your Real Time Streaming
Protocol ( RTSP ) feed. For example,
rtsp://192.168.1.180:540 .
This command sends an RTSP feed into the stream. You must run this
command in the network that has direct access to the RTSP feed.
vaictl -p PROJECT_ID \
-l LOCATION_ID \
-c application-cluster-0 \
--service-endpoint visionai.googleapis.com \
send rtsp to streams input-stream --rtsp-uri RTSP_ADDRESS
If the command runs successfully, you get the following output:
[...]
Waiting for long running operation projects/your-project/locations/us-central1/operations/operation-1651364156981-5dde82db7e4a9-dfb17ca5-1051eb20 ⠙
I20220430 21:16:28.024988 211449 gstvaisink.cc:417] cluster-id=application-cluster-0
I20220430 21:16:28.025032 211449 gstvaisink.cc:418] cluster-endpoint=c8khq35ftg78mn61ef50.us-central1.visionai.goog
I20220430 21:16:28.025040 211449 gstvaisink.cc:419] event-id=ev-1651364114183255223
I20220430 21:16:28.025048 211449 gstvaisink.cc:420] stream-id=input-stream
I20220430 21:16:28.025053 211449 gstvaisink.cc:421] series-id=ev-1651364114183255223--input-stream
I20220430 21:16:28.025060 211449 gstvaisink.cc:422] Sending data
Local video file
You can also send video file data to a stream instead of a live video
feed. This option can be useful if you don't have access to an IP
camera.
The only difference in this option is the vaictl command
parameters. Instead of passing the IP camera information, pass
the path for the local video file. Make the following variable
substitutions:
PROJECT_ID : Your Google Cloud project ID.
LOCATION_ID : Your location ID. For example,
us-central1 . More
information .
LOCAL_FILE.EXT : The filename of a local video file.
For example, my-video.mp4 .
--loop flag: Optional. Loops file data to simulate
streaming.
This command streams a video file to a stream. If using the
--loop flag, the video is looped into the stream until you
stop the command:
vaictl -p PROJECT_ID \
-l LOCATION_ID \
-c application-cluster-0 \
--service-endpoint visionai.googleapis.com \
send video-file to streams ' input-stream ' --file-path LOCAL_FILE.EXT --loop
It might take ~100 seconds between starting the vaictl ingest operation and
the video appearing in the dashboard.
After the stream ingestion is available,
you can see the video feed in the Streams tab of the Vertex AI Vision
dashboard by selecting the input-stream stream.
Go to the Streams tab
Live view of video being ingested into the stream in the
Google Cloud console. Video credit:
Tima Miroshnichenko on
Pexels
( pixelation added ).
Create a face blur application
After you create a stream and ingest data into the stream, it's time to create
a Vertex AI Vision app to process the data.
An app can be thought of as an
automated pipeline that connects the following:
Data ingestion : A video feed is ingested into a stream.
Data analysis : An AI model can be added after the ingestion. Any computer
vision operation can be performed on the ingested video information.
Data storage : The two versions of the video feed (the original stream and
the stream processed by the AI model) can be stored in a media warehouse.
In the Google Cloud console an app is represented as a graph.
Additionally, in Vertex AI Vision an app graph must have at least two nodes: a
video source node (stream), and at least one more node (a processing model or
output destination).
Create an empty application
Before you can populate the app graph, you must first create an empty app.
Console
Create an app in the Google Cloud console.
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Click the add Create button.
Enter person-blur-app as the app name and choose your region.
Click Create .
Add app component nodes
After you have created the empty application, you can then add the three nodes
to the app graph:
Ingestion node : The stream resource that's already ingesting data.
Processing node : The person blur model that acts on ingested data.
Storage node : The media warehouse that stores processed videos, and also
serves as a metadata store. The warehouse allows analytics information to
be generated about ingested video data, as well as stores information
inferred about the data by the AI models.
Console
Add component nodes to your app in the console.
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
In the person-blur-app line, select
schema View graph . This takes you
to the graph visualization of the processing pipeline.
Add a data ingestion node
To add the input stream node, select the Streams option in the
Connectors section of the side menu.
In the Source section of the Stream menu that opens, select
add Add streams .
In the Add streams menu, choose
radio_button_checked Select from
existing streams and select person-blur-app from the list of stream
resources.
To add the stream to the app graph, click Add streams .
Add a data processing node
To add the person blur model node, select the Person blur option in the
General processors section of the side menu.
In the "Person blur" option menu that opens, leave
radio_button_checked Full occlusion
selected and enable the
check_box Blur faces only option.
Add a data storage node
To add the output destination (storage) node, select the
Vertex AI Vision's Media Warehouse option in the Connectors section of the side menu.
In the Vertex AI Vision's Media Warehouse menu, click Connect warehouse .
In the Connect warehouse menu, select
radio_button_checked Create new
warehouse . Name the warehouse person-blur-app , and leave
the TTL duration at 14 days.
To add the warehouse, click Create .
Deploy your application
After you have built your end-to-end app with all the necessary
components, the last step to using the app is to deploy it.
Console
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Select View graph next to the person-blur-app app in the list.
From the application graph builder page, click the
play_arrow Deploy button.
In the following confirmation dialog, select Deploy .
The deploy operation might take several minutes to complete. After
deployment finishes, green check marks appear next to the nodes.
View processed output data
Console
Open the Warehouses tab of the Vertex AI Vision dashboard.
Go to the Warehouses tab
Find the person-blur-output-storage warehouse in the list, and click
widgets View assets .
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
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete individual resources
Delete a warehouse
In the Google Cloud console, go to the
Warehouses page.
Go to the Warehouses tab
Locate
your person-blur-output-storage warehouse.
To delete the warehouse, click more_vert
Actions , click Delete warehouse , and then follow the instructions.
Delete a stream
In the Google Cloud console, go to the
Streams page.
Go to the Streams tab
Locate
your input-stream stream.
To delete the stream, click more_vert
Actions , click Delete stream , and then follow the instructions.
Delete an app
In the Google Cloud console, go to the
Applications page.
Go to the Applications tab
Note: You must first undeploy your app before you can delete it.
Locate
your person-blur-app app.
To delete the app, click more_vert
Actions , click Delete application , and then follow the instructions.
What's next
Read more about
Responsible AI practices .
Learn about other components you can add to an app in
Build an app .
Learn about other output storage and processing options in
Connect app output to a data destination .
Read about how to
Search Warehouse data in the console .
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

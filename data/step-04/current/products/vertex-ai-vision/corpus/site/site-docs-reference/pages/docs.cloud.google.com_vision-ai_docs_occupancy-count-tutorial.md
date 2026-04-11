---
title: "Create an occupancy count app with remote streaming input \_|\_ Vertex AI\
  \ Vision \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/occupancy-count-tutorial
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/occupancy-count-tutorial
  title: "Create an occupancy count app with remote streaming input \_|\_ Vertex AI\
    \ Vision \_|\_ Google Cloud Documentation"
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
Create an occupancy count app with remote streaming input
Stay organized with collections
Save and categorize content based on your preferences.
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
Create an occupancy count app.
Deploy your app for use.
Set up a remote machine to stream video.
Ingest the streaming video into a stream node in your app.
Search for videos in your storage Vertex AI Vision's Media Warehouse.
Costs
In this document, you use the following billable components of Google Cloud:
Vertex AI Vision (Streams -
Data ingested, Streams - Data consumed, Models - Occupancy
analytics suite, Warehouse - Video storage)
Compute Engine
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
Enable the Compute Engine and Vision AI APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Grant the following roles to the service account:
Vision AI > Vision AI Editor, Compute Engine > Compute Instance Admin (beta), Storage > Storage Object Viewer † .
To grant a role, find the Select a role list, then select the role.
To grant additional roles, click add Add another
role and add each additional role.
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
Enable the Compute Engine and Vision AI APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Grant the following roles to the service account:
Vision AI > Vision AI Editor, Compute Engine > Compute Instance Admin (beta), Storage > Storage Object Viewer † .
To grant a role, find the Select a role list, then select the role.
To grant additional roles, click add Add another
role and add each additional role.
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
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
† Role only needed if you copy a sample video file from a
Cloud Storage bucket.
Create an occupancy count application
After you have set up your environment, the first step is to create the app
that processes your data.
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
Create an empty app
Before you can populate the app graph, you must first create an empty app.
Console
Create an app in the Google Cloud console.
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Click the add Create button.
Enter occupancy-count-app as the app name and choose your region.
Click Create .
Add app component nodes
After you have created the empty application, you can then add the three nodes
to the app graph:
Ingestion node : The stream resource that ingests data sent from a
Compute Engine VM instance you create.
Processing node : The occupancy analytics model that acts on ingested data.
Storage node : The media warehouse that stores processed videos, and
also serves as a metadata store. The warehouse allows analytics
information to be generated about ingested video data, as well as stores
information that AI models infer about the data.
Console
Add component nodes to your app in the console.
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
In the occupancy-count-app line, select
schema View graph . This takes you
to the graph visualization of the processing pipeline.
Add a data ingestion node
To add an input stream node, select the Streams option in the
Connectors section of the side menu.
In the Source section of the Stream menu that opens, select
add Add streams .
In the Add streams menu, choose
radio_button_checked Register new
streams and add occupancy-count-stream as the stream name.
To add the stream to the app graph, click Add streams .
Add a data processing node
To add the occupancy count model node, select the occupancy analytics
option in the Specialized models section of the side menu.
Leave the default selections
check_box People and
check_box Vehicles .
Add a data storage node
To add the output destination (storage) node, select the
Vertex AI Vision's Media Warehouse option in the Connectors section of the side
menu.
In the Vertex AI Vision's Media Warehouse menu, click Connect warehouse .
In the Connect warehouse menu, select
radio_button_checked Create new
warehouse . Name the warehouse occupancy-count-warehouse , and leave
the TTL duration at 14 days.
Click the Create button to add the warehouse.
Deploy your app for use
After you have built your end-to-end app with all the necessary
components, the last step to using the app is to deploy it.
Console
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Select View graph next to the occupancy-count-app app in the list.
From the application graph builder page, click the
play_arrow Deploy button.
In the following confirmation dialog, select Deploy .
The deploy operation might take several minutes to complete. After
deployment finishes, green check marks appear next to the nodes.
Set up a remote machine to stream video
Now that you have a deployed occupancy count app ready to receive, process,
and store streaming data, you must actually stream video data into the app.
In this tutorial you create a Compute Engine VM instance that hosts a video,
and you send that streaming video data from the VM.
Create a Linux VM
The first step in sending video from a Compute Engine VM instance is creating
the VM instance.
Console
In the console, go to the VM instances page.
Go to VM instances
Select your project and click Continue .
Click Create instance .
Specify a Name for your VM. For more information, see
Resource naming convention .
Optional: Change the Zone for this VM. Compute Engine
randomizes the list of zones within each region to encourage use across
multiple zones.
Accept the remaining default options. For more information about these
options, see Create and start a VM .
To create and start the VM, click Create .
Set up the VM environment
After the VM has started, you can use the console to establish
an SSH
connection in your browser. After establishing this connection, you can download
the vaictl command-line tool to ingest video into your app.
Console
Establish an SSH connection to your VM
In the console, go to the VM instances page.
Go to VM instances
In the Connect section of the instance line you created, click
SSH . This opens an SSH connection in a new browser window.
Download the vaictl command-line tool
In the SSH-in-browser window, download the Vertex AI Vision
( vaictl ) command-line tool using the following command:
wget https://github.com/google/visionai/releases/download/v0.0.5/visionai_0.0-5_amd64.deb
Install the command-line tool by running the following command:
sudo apt install ./visionai_0.0-5_amd64.deb
You can test the installation by running the following command:
vaictl --help
Ingest a video file into your app
After you set up your VM environment, you can copy a sample video file and then
use vaictl to stream the video data to your occupancy count app.
SSH-in-browser
Copy a sample video to your VM
In the SSH-in-browser window for your VM, copy a sample
video with the following
gcloud storage cp
command. Replace the following variable:
SOURCE : The location of a video file to use. You
can use your own video file source (for example,
gs:// BUCKET_NAME / FILENAME .mp4 ),
or use one of the sample videos:
gs://cloud-samples-data/vertex-ai-vision/street_vehicles_people.mp4 (video with people and vehicles,
source )
gs://cloud-samples-data/vertex-ai-vision/highway_vehicles.mp4 (video with vehicles only,
source )
gcloud storage cp SOURCE .
Stream video from VM and ingest data into your app
To send this local video file to the app input stream, use the
following command. You must make the following variable substitutions:
PROJECT_ID : Your Google Cloud project ID.
LOCATION_ID : Your location ID. For example,
us-central1 . For more information, see
Cloud locations .
LOCAL_FILE.EXT : The filename of a local video file.
For example, my-video.mp4 .
--loop flag: Optional. Loops file data to simulate
streaming.
This command streams a video file to a stream. If you use the
--loop flag, the video is looped into the stream until you
stop the command:
vaictl -p PROJECT_ID \
-l LOCATION_ID \
-c application-cluster-0 \
--service-endpoint visionai.googleapis.com \
send video-file to streams ' occupancy-count-stream ' --file-path LOCAL_FILE.EXT --loop
It might take ~100 seconds between starting the vaictl ingest operation and
the video appearing in the dashboard.
After the stream ingestion is available,
you can see the video feed in the Streams tab of the Vertex AI Vision
dashboard by selecting the occupancy-count-stream stream.
Go to the Streams tab
Live view of video being ingested into the stream in the
Google Cloud console. Video credit:
Elizabeth Mavor on
Pixabay
( pixelation added ).
Search video content in the storage warehouse
After you ingest video data into your processing app, you can view analyzed
video data, and search the data based on occupancy analytics information.
Console
Open the Warehouses tab of the Vertex AI Vision dashboard.
Go to the Warehouses tab
Find the occupancy-count-warehouse warehouse in the list, and click
widgets View assets .
In the People count or Vehicle count section, set the Min
value to 1 , and the Max value to 5 .
To filter processed video data stored in Vertex AI Vision's Media Warehouse, click
Search .
A view of stored video data that matches search criteria
in the Google Cloud console. Video credit:
Elizabeth Mavor on
Pixabay
( search criteria applied ).
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
Delete Compute Engine VM instance
In the Google Cloud console, go to the
VM instances page.
Go to VM instances
Select the checkbox for
the instance that you want to delete.
To delete the instance, click more_vert More actions , click Delete ,
and then follow the instructions.
Delete a warehouse
In the Google Cloud console, go to the
Warehouses page.
Go to the Warehouses tab
Locate
your occupancy-count-warehouse warehouse.
To delete the warehouse, click more_vert
Actions , click Delete warehouse , and then follow the instructions.
Delete a stream
In the Google Cloud console, go to the
Streams page.
Go to the Streams tab
Locate
your occupancy-count-stream stream.
To delete the stream, click more_vert
Actions , click Delete stream , and then follow the instructions.
Delete an app
In the Google Cloud console, go to the
Applications page.
Go to the Applications tab
Note: You must first undeploy your app before you can delete it.
Locate
your occupancy-count-app app.
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

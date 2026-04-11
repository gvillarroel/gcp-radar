---
title: "Quickstart: Deploy Immersive Stream for XR experiences \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/immersive-stream/xr/docs
source_metadata:
  url: https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart
  title: "Quickstart: Deploy Immersive Stream for XR experiences \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Immersive Stream for XR
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Deploy Immersive Stream for XR experiences
This quickstart shows you how to get started with Immersive Stream for XR.
You will use Unreal® Engine
and the Immersive Stream for XR
template project to create experiences and then build and deploy them to the
service. Your users can access these experiences from the Google app for
Android
or iOS by visiting a universal URL.
Before you begin
Make sure you have access to the following requirements:
Workstation with these minimum specifications, which mirror the Unreal
Editor requirements:
Windows 10
Higher-end CPU (12 cores or more, such as an AMD Ryzen 9)
16 GB RAM or more
GTX 1070 GPU or better
Google Cloud account with the permissions to
create new projects.
Supported mobile device with up-to-date Google app
Android phone that supports ARCore
iOS phone that supports ARKit
Set up storage
This section is for the Google Cloud admin in your organization.
Set up a Google Cloud project
Estimated time: 30 minutes
Create a new Google Cloud project .
Create a Cloud Storage bucket in this project:
Go to Cloud Storage and click Create Bucket .
Choose a name for the bucket. The name must be globally
unique. (The system displays an error if the name is in use).
ISXR only supports Region as Location Type . Multiple-region or Dual-region buckets are not supported.
Leave the rest of the default settings unchanged.
Click Create .
After you create a content and service instance, you can generate a
URL to launch and test the experience in your browser.
Creator's flow
This section is intended for the team creating or developing the immersive
experience.
Install Unreal Engine
Estimated time: 30 minutes
On the download
page for Unreal Engine,
download and install Unreal Engine for Creators.
After the Epic Games launcher is installed, open the launcher
and download version 5.3.2 of the engine.
If you need help with the installation, Unreal Engine provides
a video tutorial .
Download the GitHub Repository
Estimated time: 20 minutes
Select one of the following workflows :
Add your assets to the Immersive Stream for XR Unreal Engine template project .
Add Immersive Stream for XR support to an existing Unreal Engine project .
Use Unreal Engine version 5.3 as the default engine version for the project.
Set up the Google Cloud SDK
Estimated time: 20 minutes
If you haven't already, create a Google Cloud user account with the email address
you plan to share with the owner of the bucket. Download the
Google Cloud SDK .
Install the SDK .
Initialize the Google Cloud SDK using the gcloud init command and follow the
prompts. For more information about this step, see the
initializing documentation.
Iterate on content
Estimated time: 120 minutes (depends on the changes that you make to the content)
Iterating on content using the template project:
After you open the template project you can view the content in the
ISXR_Main.umap that loads by default.
Learn more about the template project.
Modify something within that level and save.
Preview in engine by playing or simulating while
ISXR_Main.umap is loaded.
Iterating on content after adding Immersive Stream for XR files to your existing Unreal project:
After adding the required Immersive Stream for XR files to your project following
the instructions , you can preview in engine and test if it builds locally for Linux.
Important: To test if your project builds successfully within Immersive Stream for XR,
you can locally build your project in Unreal Engine for Linux ( File >
Package Project > Linux ). For more information, see
Cross-Compiling for Linux . Note: We use Linux and Vulkan to run the build. To display a more accurate
preview in engine when using Windows, change the default RHI to Vulkan in the
Project Settings or start the editor with UE4Editor.exe -vulkan . Using this
setting with an HDR monitor sometimes causes visual issues that you can fix by
changing the Frame Buffer Pixel Format in the Project Settings . If the
problem persists, make sure your graphics card drivers are up to date.
Build and deploy content
The Immersive Stream for XR interfaces are designed around two core aspects of
the service:
Content creation and management
Cloud streaming
As a result, the APIs model two resources:
Content Resource
Service Instance
You can have more than one of these resources. For example:
Each instance is deployed in Google Cloud regions .
Complete the following steps to enable an Immersive Stream for XR experience using the
interfaces. You can use the Cloud Shell in the Google Cloud console.
Prerequisites
Estimated time: 10 minutes
Verify that the account has the IAM permission
serviceusage.services.enable for the Google Cloud project that you want to use.
The account is granted this permission if it has the Service Usage
Admin, Editor, or Owner role in the project.
For more information, see Identity and Access Management (IAM) roles .
Make sure that billing is enabled for your project. For more
information, see Check if billing is enabled on a project .
Console
Enable the Immersive Stream for XR service in your project .
gcloud
Enable the Immersive Stream for XR service in your project by running
the following command. Replace MY_PROJECT with your project ID.
gcloud services enable stream.googleapis.com --project MY_PROJECT
Set the gcloud CLI context to use this project:
gcloud config set project MY_PROJECT
Ensure the gcloud CLI is up to date:
gcloud components update
Create content
Estimated time: four hours
Create a Cloud Storage bucket
in the same project where you enabled the Immersive Stream for XR API. For this example,
we assume that you have created a bucket named my-gcs-bucket in your
project, and it's accessible at gs://my-gcs-bucket .
After you have a bucket, create a content resource pointing to your bucket.
Console
In the Google Cloud console, go to the Create a content resource page.
Go to Create a content resource
Pick a name for your new content and enter it in the Content resource name section.
In the Bucket section, select your bucket my-gcs-bucket .
Click Create to create your new content resource.
This can take up to 30 minutes. You can monitor the progress
by using the notification bell in the top-right corner of the Google Cloud console.
gcloud
Replace MY_CONTENT with the name of your content and
MY_GCS_BUCKET with the name of your bucket:
gcloud immersive-stream xr contents create MY_CONTENT \
--bucket= MY_GCS_BUCKET \
--async
Note: This is an asynchronous operation that outputs an
OPERATION_ID . You can describe the operation to see its
status or wait on the operation synchronously.
gcloud immersive-stream xr operations describe OPERATION_ID
gcloud immersive-stream xr operations wait OPERATION_ID
To start developing your immersive experience, download and edit the
Immersive Stream for XR template project
on your Windows PC or add the
Immersive Stream for XR files
to your existing Unreal project.
Check if your content resource is ready for use.
Console
In the Google Cloud console, go to the Content resources list page.
Go to Content resources list
Verify that the content resource that you created has the status Ready .
gcloud
Describe the content and check if it's ready to use. Describing
it shows the CREATING lifecycle state before the creation completes, or
the READY lifecycle state when it's ready.
gcloud immersive-stream xr contents describe MY_CONTENT
Output:
createTime: '2021-12-07T18:40:08.#######'
lifecycleState:
description: 'Creation operation: projects/my-project-number/locations/global/operations/operation-####'
state: CREATING
name: projects/my-project-number/locations/global/streamContents/my-content
updateTime: '2021-12-07T18:41:33.#######'
(Recommended) Wait one hour for the content builder to prewarm
after the Content is ready.
On your Windows machine, in the XR_Actions folder in the root
directory of the project, run SyncContent.ps1 in PowerShell to upload
the Unreal Engine project to the Cloud Storage bucket associated with
your content.
PowerShell
.\XR_Actions\SyncContent.ps1 my-gcs-bucket
Build the Unreal Engine project that is uploaded to your Cloud Storage
bucket.
Console
In the Google Cloud console, go to the Content resources list page.
Go to Content resources list
Navigate to the Content resources detail page for your content by clicking on the name of your content in the Content resource column.
Click BUILD to open up a panel.
Select Build using a new content version option.
Enter a new content version .
Click START to begin a new content build. This can take up to
four hours for the initial build, but future builds will take less
time. You can monitor the progress through the notification bell
in the top right corner of the Google Cloud console.
Once the build is complete, the Content versions section of the
Content resources detail page will contain status information of
the build, as well as a link to the Unreal Engine build logs if they
are available. Use this to help debug any failed builds.
Iterate and build other versions as needed.
Note: You can build the content by using the same version until the
first successful build by selecting the
Build using an existing content version option in the build
panel. After that, you must pick a different version because the
build version is immutable. Each build is assigned a unique ID and
can be found by expanding the Version column in the
Content versions table.
gcloud
gcloud immersive-stream xr contents build MY_CONTENT \
--version= MY-VERSION \
--async
Describe the content periodically with the following to check the status
of the build:
gcloud immersive-stream xr contents describe MY_CONTENT
Describing it initially shows a Builder is building ... message in
the lifecycle state description. After the build completes
successfully, the description changes to Builder finished building ...
For the template project content, the first build process takes up
to four hours to complete, and the following builds take about 30
minutes to complete. Once you start iterating on the project, the
build time will vary depending on your project size, assets and settings.
(Optional) If the build failed in the previous step, you can find
the location of the Unreal Engine build log by running the contents describe command:
gcloud immersive-stream xr contents describe MY_CONTENT
The build log is a Cloud Storage object (for example, gs://{YOUR_CLOUD_PROJECT_ID}_immersive_stream_xr/.../build.log ).
You can view the log in the Cloud Storage console or use the
gcloud CLI to copy it locally.
Iterate and build other versions as needed.
gcloud immersive-stream xr contents build MY_CONTENT \
--version= MY-VERSION \
--async
Note: Building the content by using the same version is allowed
until the first successful build. After that, you must pick a
different version because the build version is immutable. Each
build is assigned a unique ID and can be found by describing the
content.
Turn up service
Estimated time: two hours
Determine the regions and the number of streaming servers that
should be launched per region, and then create an Immersive Stream for XR service
instance. This capacity represents the maximum number of
concurrent sessions that you can serve from each region. Adding more regions
results in a longer creation time.
The capacity of the service instance depends on the availability of
resources in the given region. When it's not possible to fulfill the
request for large capacity requests, partial fulfillment is done. Only the
successfully allocated capacity is billed. For more information about
viewing the live capacity of a service instance, see
Monitor service instances .
Note: There may be capacity restrictions for your project. For details
about your project's quotas, see
IAM & Admin - Quotas .
You can request a quota increase.
The content must be built before the instance is created. The newly created
instance is initialized with the specified content version.
Not all Google Cloud regions are supported. The list of supported
Google Cloud regions will expand and is subject to change in future
versions. Immersive Stream for XR manages the deployment and load
distribution within a region.
For the list of supported regions and their pricing, see
Locations and pricing .
Console
In the Google Cloud console, go to the Create a service instance page.
Go to Create a service instance
Name your service instance : Pick a name for your service
instance and enter it in the Service instance name section.
Click Next to advance to the next section.
Assign a content resource : Select a content resource from the
drop-down. Only content resources that have at least 1 successfully
built content version and are not already associated with another
service instance will show up in the drop down. Select a content
version. Click Next to advance to the next section.
Note: Once the service instance is created, you can't change the
associated content resource, but you can update the content
version.
Select a mode and GPU class : Select the experience mode
supported by the instance. 3D/AR mode supports experiences with both
3D and AR modes, while 3D-only mode supports experiences with 3D
mode only.
Select the GPU class that is used by the instance. NVIDIA T4
supports all experience modes, while NVIDIA L4 only supports 3D-only
mode. The selected GPU class determines the available
locations.
You can't change the mode and GPU class of an instance later.
For more details about pricing and location availability, see
Locations and pricing .
Click Next .
Enable service instance locations : Add at least one region for
your service instance. You can configure the regions with static or
autoscaled capacity. For more information on autoscaling, see
Service instance autoscaling .
You can add regions, remove regions, and change the
capacity for a specific region later. Click Next .
(Optional) Set a fallback URL : You can configure a custom
fallback URL to send users to when your service instance is stocked
out, there is a failed connection, or there are other issues that
prevent the experience from continuing. This can be updated at any
time. Click Next to advance to the next section.
Click CREATE to create your new service instance. This can take
two hours or more if your service instance has many different
regions. You can monitor the progress through the
notification bell in the top right corner of the Google Cloud console.
gcloud
Create your new instance. Replace MY_INSTANCE with your
instance name, MY_CONTENT with the name of the content,
and MY-VERSION with the successfully built content version.
Add at least one region with at least one capacity (see
Locations and pricing
for the list of currently supported regions).
Optionally, set the mode and GPU class that is used by the instance.
If not specified, the instance is created with 3D/AR mode and
NVIDIA T4 GPU class.
Specify the 3D-only mode with the value: --mode=3d .
Specify the NVIDIA L4 GPU with the value: --gpu-class=l4 . L4 GPU
only supports 3D-only mode, and does not support 3D/AR mode.
The mode and GPU class cannot be changed later.
Optionally, set a custom fallback URL to send users to when your
service instance is stocked out, there is a failed connection, or
there are other issues that prevent the experience from continuing.
gcloud immersive-stream xr instances create MY_INSTANCE \
--content= MY_CONTENT \
--version= MY-VERSION \
--add-region="region=us-central1,capacity=1" \
--add-region="region=us-west1,capacity=3 \
--mode="ar" \
--gpu-class="t4" \
--fallback-url="https://www.example.com" \
--async
This is an asynchronous operation.
Describe the Instance and check if the instance was created
with the content version. Describing it shows that the CREATING
lifecycle state before the creation completes. After your Instance
is successfully created, describing it shows the READY lifecycle
state along with other metadata about the instance including the
current content version.
gcloud immersive-stream xr instances describe MY_INSTANCE
Launch the experience
Estimated time: 20 minutes
Create URLs
You can create URLs to launch an Immersive Stream for XR experience by using
this web tool .
Enter the Endpoint URL , API Key , and Asset ID values,
and then click Generate to get the output URL.
Immersive Stream Link Generator
The tool generates a dynamic link that works for all platforms, including web.
Note: The web client only supports 3D mode in Chrome and Safari on any platform.
You can select the user flow for switching to AR mode from the web using the
Link Generator tool .
Customer or Google-hosted web pages
You can use the following options to drive the user to the correct experience for each platform:
Use the cross platform URL, which automatically triggers the correct
experience based on the user's platform. You can select the user flow for
Desktop using the
Link Generator tool .
Host an Entry page on your end that detects the user's platform and
redirects them to the experience on Android and iOS or shows a QR code
allowing them to easily access the same page from their Android or iOS device.
Here are examples of behavior of the Customer Hosted option:
iPhone or Android: Send the user to a cross-platform
redirect link.
Other devices: Show a QR code on a web page that
points to a cross-platform redirect link.
Other pages hosted by the customer:
Landing page: Your user can launch the experience from this page and
could for example get redirected here when clicking on a UI element of your
project that triggers the Redirect to URL server to client event.
Retry page: Your user gets redirected to this page when we could not
establish a connection (for example, when the user's internet connection
does not meet the requirements).
Important: Don't share the URLs during the development phase.
Anyone with the link can access the experience.
Update instance
As you iterate on your project, you may want to configure your instance to suit
your needs. Here are the supported update actions that you can perform on your instance.
Note: Most of the update commands are asynchronous and take at least a few
minutes to complete. While an instance is updating, additional update requests
are rejected, so wait until an update is complete before initiating another.
Update the content version served by the instance
Estimated time: 10 minutes
Update the content version served by the instance in all regions of the instance
deployment. The update may take up to 10 minutes to take effect.
Console
In the Google Cloud console, go to the Service instances list page.
Go to Service instances list
Navigate to the Service instance detail page by clicking on the
name of your instance in the Service instance column.
Click the pencil icon next to the Content version field.
This opens the Edit content version panel.
Select the content version from the drop-down. Only successfully
built content versions for the content resource associated with this
service instance appear in the drop down.
Click SAVE to initiate the update. This may take up to 10 minutes,
and you can monitor the progress through the notification bell in the
top right corner of the Google Cloud console.
gcloud
gcloud immersive-stream xr instances update MY_INSTANCE \
--version= MY-VERSION \
--async
Change the capacity of an existing region
Estimated time: 15 minutes
You can change the capacity of your instances one region at a time.
To update instances in multiple regions, you must change the capacity in each
region individually. Please wait until the update is complete before initiating
another update.
The new capacity must be greater than zero and cannot exceed the capacity limit.
Console
In the Google Cloud console, go to the Service instances list page.
Go to Service instances list
Navigate to the Service instance detail page by clicking on the name
of your instance in the Service instance column.
Find the row containing region that you want to update in the
Regions table, and click the overflow action button
(three vertical dots) on the right side of the row.
Click Edit . This opens the Edit capacity panel.
Enter the capacity for this region.
Click SAVE to initiate the update. This may take up to 15 minutes,
and you can monitor the progress through the notification bell in the
top right corner of the Google Cloud console.
gcloud
gcloud immersive-stream xr instances update MY_INSTANCE \
--update-region="region= REGION ,capacity= NEW_CAPACITY " \
--async
Add a new region
Estimated time: one hour
You can add new regions to your service instances. Wait until the update
is complete before initiating another update.
Console
In the Google Cloud console, go to the Service instances list page.
Go to Service instances list
Navigate to the Service instance detail page by clicking on the
name of your instance in the Service instance column.
Click the ADD button next to the title of the Regions table.
This opens the Add new region panel.
Select a new region from the drop-down list of supported regions.
Enter the capacity for this region.
Click ADD to initiate the update. This may take up to one hour,
and you can monitor the progress through the notification bell in the
top right corner of the Google Cloud console.
gcloud
gcloud immersive-stream xr instances update MY_INSTANCE \
--add-region="region= NEW_REGION ,capacity= CAPACITY " \
--async
Remove an existing region
Estimated time: one hour
You can remove regions from your service instances. Wait until the update
is complete before initiating another update.
Console
In the Google Cloud console, go to the Service instances list page.
Go to Service instances list
Navigate to the Service instance detail page by clicking on the
name of your instance in the Service instance column.
Find the row containing region that you want to remove in the
Regions table, and click the overflow action button
(three vertical dots) on the right side of the row.
Click Delete . This opens a confirmation dialogue.
Confirm by clicking DELETE . This may take up to one hour, and you can
can monitor the progress through the notification bell in the top right
corner of the Google Cloud console.
gcloud
gcloud immersive-stream xr instances update MY_INSTANCE \
--remove-region= REGION \
--async
Update fallback URL
Estimated time: 5 minutes
Update the custom fallback URL to send users to when your service instance is
stocked out, there is a failed connection, or there are other issues that
prevent the experience from continuing.
Console
In the Google Cloud console, go to the Service instances list page.
Go to Service instances list
Navigate to the Service instance detail page by clicking on the
name of your instance in the Service instance column.
Click the pencil icon next to the Fallback URL field.
This opens the Edit fallback URL panel.
Enter the fallback URL.
Click SAVE to initiate the update. This may take up to 5 minutes,
and you can monitor the progress through the notification bell in the
top right corner of the Google Cloud console.
gcloud
gcloud immersive-stream xr instances update MY_INSTANCE \
--fallback-url="https://www.example.com" \
--async
Default controls
3D mode
By default, our 3D mode cameras use the following controls. You can
customize the camera controls in this mode within the Unreal Engine project.
Swipe to rotate : Orbit around the object by swiping left, right, up, or down.
Pinch to zoom : Zoom out by pinching towards the center of the screen or
zoom in by pinching towards the borders of the screen.
AR mode
AR mode cameras are controlled by the client side and the functionality cannot
be modified. Creators can use the teleport function to move around and set the
starting position and angle in AR.
Placement : Point your phone down at an empty space and move it around
slowly to place the object in space.
Twist to rotate : Rotate the object by twisting your fingers on top of the
object.
Drag to move : Drag the object around to move it in space.
Pinch to resize : Reduce the scale of the object by pinching towards the
center of the screen or enlarge it by pinching outwards toward the borders of
the screen.
By default, both 3D and AR modes are supported in streaming if available. While
creating a new instance, you can select the 3D-only mode which is available at a
cost lower than the 3D/AR mode.
Monitor service instances
Immersive Stream for XR provides a number of metrics out of box that you can use to evaluate the current state of the service instances:
Metric
Description
stream.googleapis.com/stream_instance/capacity
A GAUGE metric representing the capacity per service instance
stream.googleapis.com/stream_instance/hits_count
A DELTA metric representing the number of hits observed by service instance
stream.googleapis.com/stream_instance/session_lengths
A DISTRIBUTION metric representing the various session lengths observed by the service instance
Additionally, Immersive Stream for XR generates a dashboard when you add a service instance to the project. Navigate to the Dashboards section in cloud monitoring and look for Immersive Stream XR - Service Instances under Dashboards .
Embed content in an existing web page
Immersive Stream for XR content can be embedded in your web page. To do this,
first use the instructions in the previous sections to create your content and
instance. Then
email the Immersive Stream for XR team
with the content name, instance name, and domain name for your website, and the
team will add you to the allowlist.
Turn down service
Estimated time: two hours
To turn down the service instance and release reserved compute resources:
Console
In the Google Cloud console, go to the Service instances list page.
Go to Service instances list
Go to the Service instance detail page by clicking the
name of your instance in the Service instance column.
Click the DELETE button at the top of the page. This
opens a confirmation dialog.
Confirm by clicking DELETE . You are redirected to the
Service instances list page, and the row for the instance
shows a status of Deleting . This might take one hour or
longer if the service instance has many regions.
You can monitor the progress by using the notification bell in
the top-right corner of the Google Cloud console.
gcloud
gcloud immersive-stream xr instances delete MY_INSTANCE --async
Describe the instance by using the gcloud immersive-stream xr instances
describe MY_INSTANCE command and check if the
deletion completes. Before the instance is deleted, describing it shows that
the DELETING lifecycle state, and after the deletion completes, returns a NOT_FOUND
error.
Once the service instance has been successfully deleted, you may also
delete the content resource.
Note: Removing the content resource does not affect any source files in the
Cloud Storage bucket, but the information and history about content build
versions will be lost. The build logs in the cloud storage bucket will not
be deleted.
Console
In the Google Cloud console, go to the Content resources list page.
Go to Content resources list
Navigate to the Content resource detail page by clicking on the
name of your content in the Content resource column.
Click the DELETE button at the top of the page. This will
open a confirmation dialog.
Confirm by clicking DELETE . You will be redirected to the
Content resources list page, and the row for the content will
now show a status of Deleting . This may take up to one hour,
and you can monitor the progress through the notification bell in
the top right corner of the Google Cloud console.
gcloud
gcloud immersive-stream xr contents delete MY_CONTENT --async
Similarly, describing the content shows the DELETING lifecycle state
before the above asynchronous operation completes and a NOT_FOUND error
is returned after the content is successfully deleted:
gcloud immersive-stream xr contents describe MY_CONTENT
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Make sure you complete the turn down service procedure
when you're finished with your evaluation.
What's next
Learn more about using the template project .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

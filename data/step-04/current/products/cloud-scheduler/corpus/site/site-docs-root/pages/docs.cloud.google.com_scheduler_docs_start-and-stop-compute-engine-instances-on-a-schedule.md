---
title: "Schedule a Compute Engine VM to start or stop \_|\_ Cloud Scheduler \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/scheduler/docs/start-and-stop-compute-engine-instances-on-a-schedule
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/start-and-stop-compute-engine-instances-on-a-schedule
  title: "Schedule a Compute Engine VM to start or stop \_|\_ Cloud Scheduler \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Scheduler
Guides
Send feedback
Schedule a Compute Engine VM to start or stop
Stay organized with collections
Save and categorize content based on your preferences.
Note:
Google Compute Engine now has an
Instance Schedules feature
that can be used to start and stop instances through the Google Cloud console,
Google Cloud CLI, or via the API. The approach provided in this tutorial of using
Cloud Scheduler is still functional and is necessary for scheduling the
starting and stopping of other resources that are not Compute Engine VM
instances, for example, Cloud SQL instances.
This tutorial shows how to use Cloud Scheduler and Cloud Run functions to
automatically start and stop Compute Engine instances on a regular schedule
using resource labels .
Objectives
Write and deploy a set of functions with Cloud Run functions that start and
stop Compute Engine instances.
Create a set of jobs with Cloud Scheduler that schedule instances
with a dev resource label to run 09:00-17:00, Monday-Friday to match
typical business hours.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Scheduler
Cloud Run functions
Pub/Sub
Compute Engine
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Set up your environment for Cloud Scheduler.
Setting Up Your Environment
Enable the Cloud Run functions, Pub/Sub, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Application architecture
This solution includes the following Google Cloud components:
Compute Engine instance
we want to run on a schedule.
Cloud Run functions
to start and stop the instance we want to schedule.
Pub/Sub messages
sent and received for each start and stop event.
Cloud Scheduler jobs
to make calls on a set schedule to start and stop the instance.
Location requirements
Some components are only supported in certain regions:
Compute Engine instance: supported in any region listed in
Regions and zones .
Cloud Run functions: supported in the regions listed in
Locations .
Pub/Sub messages: supported globally as Pub/Sub
is a global service.
Cloud Scheduler jobs with Pub/Sub targets:
supported in any Google Cloud location .
Note: Fortunately, for this application, no component needs to be run in the
same region as any other component. So even if you deploy your
Cloud Scheduler jobs to a certain region, you are free to locate your
Compute Engine instance anywhere else. With that said, it is also
true that locating your components in the same region will result in better
latency.
Why not HTTP instead of Pub/Sub?
You may want to simplify this architecture by using Cloud Run functions
HTTP Triggers
instead of
Pub/Sub Triggers .
This tutorial uses Pub/Sub as the Cloud Run functions
trigger because this method was formerly more secure than using HTTP. However,
HTTP is also a valid choice and can now be secured by requiring authentication.
To learn about securing Cloud Run functions, see the
Cloud Run functions security overview . For a
comparison between HTTP and Pub/Sub triggers, see the
Cloud Run functions triggers
documentation.
Set up the Compute Engine instance
Console
Go to the VM instances page in the Google Cloud console.
Go to the VM instances page .
Click Create instance .
Set the Name to dev-instance .
Under Labels , click Add labels .
Click Add label .
Enter env for Key and dev for Value .
For Region select us-west1 .
For Zone select us-west1-b .
Click Save .
Click Create at the bottom of the page.
gcloud
gcloud compute instances create dev-instance \
--network default \
--zone us-west1-b \
--labels=env=dev
Note: For simplicity, this tutorial creates only one instance. However, the
architecture here can be used to stop and start multiple instances where the
resource label env has the value dev .
Deploy functions triggered by Pub/Sub through Cloud Run functions
Create and deploy the functions
Console
Create the start function.
Go to the Cloud Run functions page in the Google Cloud console.
Go to the Cloud Run functions page .
Click Create Function .
For Environment , select 1st gen .
Set Function name to startInstancePubSub .
Leave Region at its default value.
For Trigger type , select Cloud Pub/Sub .
For Select a Cloud Pub/Sub topic , click Create a topic .
A Create topic dialog should appear.
Under Topic ID , enter start-instance-event .
Click Create to finish the dialog.
Click Save at the bottom of the Trigger box.
Click Next at the bottom of the page.
For Runtime , select Node.js 16 or later.
For Entry point , enter startInstancePubSub .
On the left side of the code editor, select index.js .
Replace the starter code with the following code:
const compute = require ( ' @google-cloud/compute ' );
const instancesClient = new compute . InstancesClient ();
const operationsClient = new compute . ZoneOperationsClient ();
async function waitForOperation ( projectId , operation ) {
while ( operation . status !== 'DONE' ) {
[ operation ] = await operationsClient . wait ({
operation : operation . name ,
project : projectId ,
zone : operation . zone . split ( '/' ). pop (),
});
}
}
/**
* Starts Compute Engine instances.
*
* Expects a PubSub message with JSON-formatted event data containing the
* following attributes:
* zone - the GCP zone the instances are located in.
* label - the label of instances to start.
*
* @param {!object} event Cloud Function PubSub message event.
* @param {!object} callback Cloud Function PubSub callback indicating
* completion.
*/
exports . startInstancePubSub = async ( event , context , callback ) = > {
try {
const project = await instancesClient . getProjectId ();
const payload = _validatePayload ( event );
const options = {
filter : `labels. ${ payload . label } ` ,
project ,
zone : payload . zone ,
};
const [ instances ] = await instancesClient . list ( options );
await Promise . all (
instances . map ( async instance = > {
const [ response ] = await instancesClient . start ({
project ,
zone : payload . zone ,
instance : instance . name ,
});
return waitForOperation ( project , response . latestResponse );
})
);
// Operation complete. Instance successfully started.
const message = 'Successfully started instance(s)' ;
console . log ( message );
callback ( null , message );
} catch ( err ) {
console . log ( err );
callback ( err );
}
};
/**
* Validates that a request payload contains the expected fields.
*
* @param {!object} payload the request payload to validate.
* @return {!object} the payload object.
*/
const _validatePayload = event = > {
let payload ;
try {
payload = JSON . parse ( Buffer . from ( event . data , 'base64' ). toString ());
} catch ( err ) {
throw new Error ( 'Invalid Pub/Sub message: ' + err );
}
if ( ! payload . zone ) {
throw new Error ( "Attribute 'zone' missing from payload" );
} else if ( ! payload . label ) {
throw new Error ( "Attribute 'label' missing from payload" );
}
return payload ;
};
On the left side of the code editor, select the package.json .
Replace the starter code with the following code:
{
"name" : "cloud-functions-schedule-instance" ,
"version" : "0.1.0" ,
"private" : true ,
"license" : "Apache-2.0" ,
"author" : "Google Inc." ,
"repository" : {
"type" : "git" ,
"url" : "https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git"
},
"engines" : {
"node" : ">=16.0.0"
},
"scripts" : {
"test" : "c8 mocha -p -j 2 test/*.test.js --timeout=20000"
},
"devDependencies" : {
"c8" : "^10.0.0" ,
"mocha" : "^10.0.0" ,
"proxyquire" : "^2.0.0" ,
"sinon" : "^18.0.0"
},
"dependencies" : {
"@google-cloud/compute" : "^4.0.0"
}
}
Click Deploy at the bottom of the page.
Create the stop function.
You should be on the Cloud Run functions page in the Google Cloud console.
Click Create Function .
For Environment , select 1st gen .
Set Function name to stopInstancePubSub .
Leave Region at its default value.
For Trigger type , select Cloud Pub/Sub .
For Select a Cloud Pub/Sub topic , click Create a topic .
A Create topic dialog should appear.
Under Topic ID , enter stop-instance-event .
Click Create to finish the dialog.
Click Save at the bottom of the Trigger box.
Click Next at the bottom of the page.
For Runtime , select Node.js 16 or later.
For Entry point , enter stopInstancePubSub .
On the left side of the code editor, select index.js .
Replace the starter code with the following code:
const compute = require ( ' @google-cloud/compute ' );
const instancesClient = new compute . InstancesClient ();
const operationsClient = new compute . ZoneOperationsClient ();
async function waitForOperation ( projectId , operation ) {
while ( operation . status !== 'DONE' ) {
[ operation ] = await operationsClient . wait ({
operation : operation . name ,
project : projectId ,
zone : operation . zone . split ( '/' ). pop (),
});
}
}
/**
* Stops Compute Engine instances.
*
* Expects a PubSub message with JSON-formatted event data containing the
* following attributes:
* zone - the GCP zone the instances are located in.
* label - the label of instances to stop.
*
* @param {!object} event Cloud Function PubSub message event.
* @param {!object} callback Cloud Function PubSub callback indicating completion.
*/
exports . stopInstancePubSub = async ( event , context , callback ) = > {
try {
const project = await instancesClient . getProjectId ();
const payload = _validatePayload ( event );
const options = {
filter : `labels. ${ payload . label } ` ,
project ,
zone : payload . zone ,
};
const [ instances ] = await instancesClient . list ( options );
await Promise . all (
instances . map ( async instance = > {
const [ response ] = await instancesClient . stop ({
project ,
zone : payload . zone ,
instance : instance . name ,
});
return waitForOperation ( project , response . latestResponse );
})
);
// Operation complete. Instance successfully stopped.
const message = 'Successfully stopped instance(s)' ;
console . log ( message );
callback ( null , message );
} catch ( err ) {
console . log ( err );
callback ( err );
}
};
/**
* Validates that a request payload contains the expected fields.
*
* @param {!object} payload the request payload to validate.
* @return {!object} the payload object.
*/
const _validatePayload = event = > {
let payload ;
try {
payload = JSON . parse ( Buffer . from ( event . data , 'base64' ). toString ());
} catch ( err ) {
throw new Error ( 'Invalid Pub/Sub message: ' + err );
}
if ( ! payload . zone ) {
throw new Error ( "Attribute 'zone' missing from payload" );
} else if ( ! payload . label ) {
throw new Error ( "Attribute 'label' missing from payload" );
}
return payload ;
};
On the left side of the code editor, select the package.json .
Replace the starter code with the following code:
{
"name" : "cloud-functions-schedule-instance" ,
"version" : "0.1.0" ,
"private" : true ,
"license" : "Apache-2.0" ,
"author" : "Google Inc." ,
"repository" : {
"type" : "git" ,
"url" : "https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git"
},
"engines" : {
"node" : ">=16.0.0"
},
"scripts" : {
"test" : "c8 mocha -p -j 2 test/*.test.js --timeout=20000"
},
"devDependencies" : {
"c8" : "^10.0.0" ,
"mocha" : "^10.0.0" ,
"proxyquire" : "^2.0.0" ,
"sinon" : "^18.0.0"
},
"dependencies" : {
"@google-cloud/compute" : "^4.0.0"
}
}
Click Deploy at the bottom of the page.
gcloud
Create the Pub/Sub topics.
gcloud pubsub topics create start-instance-event
gcloud pubsub topics create stop-instance-event
Get the code
Download the code.
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Go to the correct directory.
cd nodejs-docs-samples/functions/scheduleinstance/
Create the start and stop functions.
You should be in the nodejs-docs-samples/functions/scheduleinstance/
directory.
gcloud functions deploy startInstancePubSub \
--trigger-topic start-instance-event \
--runtime nodejs18 \
--allow-unauthenticated
gcloud functions deploy stopInstancePubSub \
--trigger-topic stop-instance-event \
--runtime nodejs18 \
--allow-unauthenticated
Note: If you have trouble deploying your functions, see the documentation
Deploying from Your Local Machine .
(Optional) Verify the functions work
Console
Stop the instance
Go to the Cloud Run functions page in the Google Cloud console.
Go to the Cloud Run functions page .
Click on the function named stopInstancePubSub .
You should see a number of tabs: General , Trigger , Source ,
Permissions , and Testing . Click on the Testing tab.
For Triggering event enter the following:
{"data":"eyJ6b25lIjoidXMtd2VzdDEtYiIsICJsYWJlbCI6ImVudj1kZXYifQo="}
This is simply the base64-encoded string for
{"zone":"us-west1-b", "label":"env=dev"}
If you want to encode your own string, feel free to use any online
base64 encoding tool .
Note: If you want to learn more about publishing data to
Pub/Sub, see the
Publisher Guide .
Click the Test the function button.
When it is done running, you should see
Successfully stopped instance dev-instance printed under
Output . It may take up to 60 seconds to finish running.
If instead you see error: 'Error: function failed to load.' , just
wait 10 seconds or so for the function to finish deploying and try
again.
If instead you see
error: 'Error: function execution attempt timed out.' , just move
on to the next step to see if the instance is just taking a long
time to shut down.
If instead it finishes running, but shows nothing, it probably also
just timed out. Just move on to the next step to see if the instance
is just taking a long time to shut down.
Go to the VM instances page in the Google Cloud console.
Go to the VM instances page .
Verify that the instance named dev-instance has a grey square
next to its name, indicating that it has stopped. It may take up to 30
seconds to finish shutting down.
If it doesn't seem to be finishing, try clicking Refresh at the
top of the page.
Start the instance
Go to the Cloud Run functions page in the Google Cloud console.
Go to the Cloud Run functions page .
Click on the function named startInstancePubSub .
You should see a number of tabs: General , Trigger , Source ,
Permissions , and Testing . Click on the Testing tab.
For Triggering event enter the following:
{"data":"eyJ6b25lIjoidXMtd2VzdDEtYiIsICJsYWJlbCI6ImVudj1kZXYifQo="}
Again, this is simply the base64-encoded string for
{"zone":"us-west1-b", "label":"env=dev"}
Click the Test the function button.
When it is done running, you should see
Successfully started instance dev-instance printed under
Output .
Go to the VM instances page in the Google Cloud console.
Go to the VM instances page .
Verify that the instance named dev-instance has a green checkmark
next to its name, indicating that it is running. It may take up to 30
seconds to finish starting up.
gcloud
Stop the instance
Call the function to stop the instance.
gcloud functions call stopInstancePubSub \
--data '{"data":"eyJ6b25lIjoidXMtd2VzdDEtYiIsICJsYWJlbCI6ImVudj1kZXYifQo="}'
This is simply the base64-encoded string for
{"zone":"us-west1-b", "label":"env=dev"}
If you want to encode your own string, feel free to use any tool.
Here's an example using the base64 command line tool:
echo '{"zone":"us-west1-b", "label":"env=dev"}' | base64
eyJ6b25lIjoidXMtd2VzdDEtYiIsICJsYWJlbCI6ImVudj1kZXYifQo=
Note: If you want to learn more about publishing data to
Pub/Sub, see the
Publisher Guide .
When the function has finished you should see the following:
result: Successfully stopped instance dev-instance
It may take up to 60 seconds to finish running.
If instead you get the error:
error: 'Error: function failed to load.`
Just wait 10 seconds or so for the function to finish deploying and
try again.
If instead you get the error:
error: `Error: function execution attempt timed out.`
Move on to the next step to see if the instance is just taking a
long time to shut down.
If instead you get no result, the function probably just timed out.
Move on to the next step to see if the instance is just taking a
long time to shut down.
Check that the instance has a status of TERMINATED . It may take up to
30 seconds to finish shutting down.
gcloud compute instances describe dev-instance \
--zone us-west1-b \
| grep status
status: TERMINATED
Start the instance
Call the function to start the instance.
gcloud functions call startInstancePubSub \
--data '{"data":"eyJ6b25lIjoidXMtd2VzdDEtYiIsICJsYWJlbCI6ImVudj1kZXYifQo="}'
Again, this is simply the base64-encoded string for
{"zone":"us-west1-b", "label":"env=dev"}
When the function has finished you should see the following:
result: Successfully started instance dev-instance
Check that the instance has a status of RUNNING . It may take up to 30
seconds to finish starting up.
gcloud compute instances describe dev-instance \
--zone us-west1-b \
| grep status
status: RUNNING
Set up the Cloud Scheduler jobs to call Pub/Sub
Create the jobs
Console
Create the start job.
Go to the Cloud Scheduler page in the Google Cloud console.
Go to the Cloud Scheduler page .
Click Create a job .
Leave the default region.
Set the Name to startup-dev-instances .
For Frequency , enter 0 9 * * 1-5 .
This will execute at 9:00 every day Mon-Fri.
For Timezone , select your desired country and timezone. This
example will use United States and Los Angeles .
Click Continue .
For Target type , select Pub/Sub .
Select start-instance-event from the topic dropdown.
For Message , enter the following:
{"zone":"us-west1-b","label":"env=dev"}
Click Create .
Create the stop job.
You should be on the Cloud Scheduler page in the Google Cloud console.
Click Create Job .
Leave the default region and click Next at the bottom of the page.
Set the Name to shutdown-dev-instances .
For Frequency , enter 0 17 * * 1-5 .
This will execute at 17:00 every day Mon-Fri.
For Timezone , select your desired country and timezone. This
example will use United States and Los Angeles .
Click Continue .
For Target type , select Pub/Sub .
Select stop-instance-event from the topic dropdown..
For Message , enter the following:
{"zone":"us-west1-b","label":"env=dev"}
Click Create .
gcloud
Create the start job.
gcloud scheduler jobs create pubsub startup-dev-instances \
--schedule '0 9 * * 1-5' \
--topic start-instance-event \
--message-body '{"zone":"us-west1-b", "label":"env=dev"}' \
--time-zone 'America/Los_Angeles' \
--location us-central1
Create the stop job.
gcloud scheduler jobs create pubsub shutdown-dev-instances \
--schedule '0 17 * * 1-5' \
--topic stop-instance-event \
--message-body '{"zone":"us-west1-b", "label":"env=dev"}' \
--time-zone 'America/Los_Angeles' \
--location us-central1
Note: Your Cloud Scheduler jobs are deployed to the region you selected
when you created them. The job's region cannot be changed.
(Optional) Verify the jobs work
Console
Stop the instance
Go to the Cloud Scheduler page in the Google Cloud console.
Go to the Cloud Scheduler page .
For the job named shutdown-dev-instances , click the Run now
button on the far right side of the page.
Go to the VM instances page in the Google Cloud console.
Go to the VM instances page .
Verify that the instance named dev-instance has a grey square
next to its name, indicating that it has stopped. It may take up to 30
seconds for it to finish shutting down.
Start the instance
Go to the Cloud Scheduler page in the Google Cloud console.
Go to the Cloud Scheduler page .
For the job named startup-dev-instances , click the Run now
button on the far right side of the page.
Go to the VM instances page in the Google Cloud console.
Go to the VM instances page .
Verify that the instance named dev-instance has a green checkmark
next to its name, indicating that it is running. It may take up to 30
seconds for it to finish starting up.
gcloud
Stop the instance
Run the scheduler job to stop the instance.
gcloud beta scheduler jobs run shutdown-dev-instances
Check that the instance has a status of TERMINATED . It may take up to
30 seconds for it to finish shutting down.
gcloud compute instances describe dev-instance \
--zone us-west1-b \
| grep status
status: TERMINATED
Start the instance
Run the scheduler job to start the instance.
gcloud beta scheduler jobs run startup-dev-instances
Check that the instance has a status of RUNNING . It may take up to 30
seconds to finish starting up.
gcloud compute instances describe dev-instance \
--zone us-west1-b \
| grep status
status: RUNNING
Clean up
After you finish the tutorial, you can clean up the resources that you created so that they
stop using quota and incurring charges. The following sections describe how to delete or turn off
these resources.
Delete the Cloud Scheduler jobs
Go to the Cloud Scheduler page in the Google Cloud console.
Go to the Cloud Scheduler page .
Click the checkboxes next to your jobs.
Click the Delete button at the top of the page and confirm your delete.
Delete the Pub/Sub topics
Go to the Pub/Sub page in the Google Cloud console.
Go to the Pub/Sub page
Click the checkboxes next to your topics.
Click Delete at the top of the page and confirm your delete.
Delete the functions deployed through Cloud Run functions
Go to the Cloud Run functions page in the Google Cloud console.
Go to the Cloud Run functions page .
Click the checkboxes next to your functions.
Click the Delete button at the top of the page and confirm your delete.
Delete the Compute Engine instance
To delete a Compute Engine instance:
In the Google Cloud console, go to the
VM instances page.
Go to VM instances
Select the checkbox for
the instance that you want to delete.
To delete the instance, click more_vert More actions , click Delete ,
and then follow the instructions.
Delete the project
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
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
What's next
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

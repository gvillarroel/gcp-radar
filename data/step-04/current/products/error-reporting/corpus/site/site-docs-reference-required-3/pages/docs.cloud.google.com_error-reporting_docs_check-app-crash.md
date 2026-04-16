---
title: "Quickstart: Check a crashed app for errors by using Error Reporting \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/check-app-crash
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs/setup/kubernetes-engine
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/check-app-crash
  title: "Quickstart: Check a crashed app for errors by using Error Reporting \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Error Reporting
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Check a crashed app for errors by using Error Reporting
Error Reporting provides a single place to monitor error conditions
from all apps and services in a Google Cloud project and from Amazon Elastic Compute
Cloud (EC2) applications.
In this guide, we learn how to do the following:
Simulate an error from a service in a Google Cloud project.
Use Error Reporting to view the error and change the error
status so other people on your team know that the issue is being addressed.
Set up notifications so you'll know when new types of errors occur.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
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
Open a Cloud Shell for your Google Cloud project. While it starts, the message
Connecting is displayed.
Open Cloud Shell .
Configure your email address as a supported notification channel .
Simulate an error
To generate 11 sample errors, run the following script in
Cloud Shell:
COUNTER = 0
while [ $COUNTER -lt 11 ] ; do
gcloud beta error-reporting events report --service tutorial --service-version v $(( COUNTER / 10 + 1 )) \
--message "java.lang.RuntimeException: Error rendering template $COUNTER
at com.example.TestClass.test(TestClass.java:51)
at com.example.AnotherClass(AnotherClass.java:25)
at javax.servlet.http.HttpServlet.service (HttpServlet.java:617)
at javax.servlet.http.HttpServlet.service (HttpServlet.java:717)"
if [ $COUNTER -eq 10 ] ; then
echo "All sample errors reported."
fi
let COUNTER = COUNTER+1
done
When the script finishes generating all of the errors, it prints the following
line:
All sample errors reported.
View the errors in Error Reporting
In the Google Cloud console, go to the Error Reporting page:
Go to Error Reporting
You can also find this page by using the search bar.
The Error Reporting dashboard displays a summary list of each
error found and the number of occurrences of each error.
When Auto reload is turned on, Error Reporting
automatically reloads the error list every 10 seconds.
The following screenshot shows a sample error
reporting page:
Click the error name to view the error details page, which contains all of
the available information about an error. If Gemini is
enabled in the project, then you can use Gemini to
get troubleshooting suggestions .
Configure notifications
You can configure Error Reporting to notify you when a new
type of error arrives. Notifications aren't sent when there are new
occurrences of existing errors:
In the Google Cloud console, go to the Error Reporting page:
Go to Error Reporting
You can also find this page by using the search bar.
To enable email notifications, click Configure notifications .
In the Notification channels menu, select your email address, and then
select Save .
To generate new types of errors,
click terminal Activate Cloud shell
and run the following script:
COUNTER = 0
while [ $COUNTER -lt 3 ] ; do
gcloud beta error-reporting events report --service tutorial --service-version v1 \
--message "java.lang.ArrayIndexOutOfBoundsException: $COUNTER
at com.example.AppController.createUser(AppController.java:42)
at com.example.User(User.java:31)
at javax.servlet.http.HttpServlet.service (HttpServlet.java:617)
at javax.servlet.http.HttpServlet.service (HttpServlet.java:717)"
if [ $COUNTER -eq 10 ] ; then
echo "All sample errors reported."
fi
let COUNTER = COUNTER+1
done
When the script finishes generating all of the errors, it prints the following
line:
All sample errors reported.
Check your email for a message from "Stackdriver Notifications".
Generate error messages from a App Engine app
While the sample messages you generated from the scripts fully simulate error
conditions in Error Reporting, if you want to generate errors from a
real service
running in your Google Cloud project, follow the steps in this section.
Deploy an app
To download and deploy an app to App Engine, do the following:
Download and configure the application from the GitHub project
python-docs-samples :
Clone the project to your Cloud Shell:
git clone https://github.com/GoogleCloudPlatform/python-docs-samples
Git returns a message similar to this:
git clone https://github.com/GoogleCloudPlatform/python-docs-samples
Cloning into 'python-docs-samples'...
Create an isolated Python environment and activate it:
cd python-docs-samples/appengine/standard_python3/hello_world
virtualenv env -p python3
source env/bin/activate
Install dependencies:
pip install -r requirements.txt
Verify that the application installation and configuration are successful:
Run the application:
python main.py
To view the application on a local web page, click the link displayed
in Cloud Shell. The web page displays Hello World! .
To stop your running application, in Cloud Shell enter Ctrl-C .
Upload your application to App Engine:
gcloud app deploy
If prompted for a deployment region, select one near you. Enter Y when
asked if you want to continue.
After a few moments, the upload is complete.
View your application in a browser by running the following command in
Cloud Shell:
gcloud app browse
If the Google Cloud CLI can't find your browser, the previous command displays an
error message and a link. Click the displayed link. The message
Hello, World! is displayed in the browser.
Generate an error
To create an error that Error Reporting catches and displays,
do the following:
Edit main.py and change
return 'Hello World!
to
return 'Hello World!' + 1000
When executed, this change causes a Python TypeError exception because it
is illegal to concatenate a string and an integer.
Upload the modified application to App Engine:
gcloud app deploy
Return to the browser tab containing the running application, and reload
the page. Because of your change, instead of the page displaying
Hello, World! , it displays an error message:
Internal Server Error
The server encountered an internal error and was unable to complete your
request. Either the server is overloaded or there is an error in the
application.
If you don't see this message, wait a minute and reload it again. It might
take a few moments before the new version is activated.
View the error in Error Reporting
To view the error, follow the instructions in the previous section View the errors in Error Reporting .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
Learn more about viewing errors
Learn more about managing errors
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

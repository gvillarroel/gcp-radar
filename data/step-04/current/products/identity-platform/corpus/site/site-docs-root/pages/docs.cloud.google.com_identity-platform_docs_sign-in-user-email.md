---
title: "Sign in a user with an email by using Identity Platform \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/sign-in-user-email
  title: "Sign in a user with an email by using Identity Platform \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Identity Platform
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Sign in a user with an email by using Identity Platform
Learn how to use Identity Platform to sign in a user with an
email and password.
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
Make sure that you have the following role or roles on the project:
Identity Platform Admin, Service Usage Admin
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
Make sure that you have the following role or roles on the project:
Identity Platform Admin, Service Usage Admin
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
Enable Identity Platform
In the Google Cloud console, go to the Identity Platform page in the
Cloud Marketplace.
Go to Identity Platform
Click Enable Identity Platform .
Configure an email sign-in
Go to the Identity Providers page.
Go to Identity Providers
On the Identity Providers page, click Add a provider .
In the Select a provider list, select
email Email/Password .
Click the Enabled toggle to on.
To save the provider settings, click Save .
Create a user
In the Google Cloud console, go to the Users page.
Go to Users
Click Add user .
In the Email field, enter an email and password. Note both of these
values because you need them in a later step.
To add the user, click Add . The new user is listed on the Users
page.
Sign in the user
The steps to sign in the user vary depending on which SDK version your app is using.
Ensure you are following the correct steps for your application.
Note: Using the v9 SDK is strongly recommended, especially for production apps.
If you need support for other SDK management options, like window.firebase , see
Upgrade from version 8 to the modular Web SDK
or Alternative ways to add Firebase .
SDK v9 (modular)
Install the SDK and initialize Firebase
Version 9 of the Firebase JS SDK uses a
JavaScript Module
format.
This workflow uses npm and requires module bundlers or JavaScript framework
tooling because the v9 SDK is optimized to work with
module bundlers to
eliminate unused code (tree-shaking) and decrease SDK size.
To use the v9 SDK, perform the following steps:
From the project directory, install Firebase using npm:
npm install firebase
Initialize Firebase in your app and create a Firebase App object:
import { initializeApp } from 'firebase/app' ;
const firebaseConfig = {
apiKey : " API_KEY " ,
authDomain : " AUTH_DOMAIN "
};
const app = initializeApp ( firebaseConfig );
Replace the following:
API_KEY : the apiKey of your Firebase project.
Important: Avoid using multiple API keys in your Firebase project
if its application restrictions are set to None or Websites . Using
multiple keys with these specific restrictions can lead to ambiguity
in how Firebase selects a key, potentially causing unexpected
behavior or disrupting your user-facing workflows.
AUTH_DOMAIN : the authDomain of your Firebase project.
You can find these values from your app's Firebase project configuration .
A Firebase App is a container-like object that stores common configuration
and shares authentication across Firebase services. After you initialize a
Firebase App object in your code, you can add and start using Firebase
services.
If you use ESM and want to use browser modules,
replace all your import lines with the following
pattern:
import { } from 'https://www.gstatic.com/firebasejs/12.12.0/firebase- SERVICE .js',
where SERVICE is an SDK name such as
firebase-firestore .
Using browser modules is a quick way to get started, but we recommend
using a module bundler for production.
Access Identity Platform in your JavaScript
Now that you have initialized the Firebase SDK, you can use it anywhere in your
app. For example, here is an app that attempts to sign in a hard-coded
user and display the result on a web page.
import { initializeApp } from 'firebase/app' ;
import {
onAuthStateChanged ,
signInWithEmailAndPassword ,
getAuth
} from 'firebase/auth' ;
const firebaseConfig = {
apiKey : " API_KEY " ,
authDomain : " AUTH_DOMAIN "
};
const app = initializeApp ( firebaseConfig );
const auth = getAuth ( app , { /* extra options */ });
document . addEventListener ( "DOMContentLoaded" , () = > {
onAuthStateChanged ( auth , ( user ) = > {
if ( user ) {
document . getElementById ( "message" ). innerHTML = "Welcome, " + user . email ;
}
else {
document . getElementById ( "message" ). innerHTML = "No user signed in." ;
}
});
signIn ();
});
function signIn () {
const email = " EMAIL_ID " ;
const password = " PASSWORD " ;
signInWithEmailAndPassword ( auth , email , password )
. catch (( error ) = > {
document . getElementById ( "message" ). innerHTML = error . message ;
});
}
Replace the following:
API_KEY : the apiKey of your Firebase project.
AUTH_DOMAIN : the authDomain of your Firebase project.
EMAIL_ID : the user email address you created earlier in this guide.
PASSWORD : the user password you created earlier in this guide.
Use a module bundler for size reduction
Note: You can skip this step if you are using a JavaScript framework CLI tool
like the Angular CLI ,
Next.js , Vue CLI ,
or
Create React App .
Check out our guide on module bundling for more
information.
The Firebase Web SDK is designed to work with module bundlers to remove any
unused code (tree-shaking). We strongly recommend using this approach for
production apps. Tools such as the Angular CLI ,
Next.js , Vue CLI ,
or
Create React App
automatically handle module bundling for libraries installed through npm and
imported into your codebase.
For example, you can use Webpack
to generate a dist folder containing your bundled application and dependency code. See Using module bundlers with Firebase
for more information.
Import your JavaScript into your page
Create a new file named index.html .
Add two basic HTML containers and import the bundled js .
<script defer src="js/bundled.js"></script>
<div>Identity Platform Quickstart</div>
<div id="message">Loading...</div>
Launch index.html in your web browser. A welcome message displaying your user's email appears.
SDK v8 (legacy)
Create a web page
On your local machine, create a new file named index.html .
In the HTML file, add two HTML containers:
<div>Identity Platform Quickstart</div>
<div id="message">Loading...</div>
Initialize the Identity Platform client SDK with your API key
In the Google Cloud console, go to the Identity Providers page.
Go to Identity Providers
Click
Application
setup details .
Copy the initialization code into index.html .
Sign in the user
To sign in the user, copy the following code into index.html :
< script >
var email = " EMAIL_ID " ;
var password = " PASSWORD " ;
firebase . auth (). onAuthStateChanged ( function ( user ) {
if ( user ) {
document . getElementById ( "message" ). innerHTML = "Welcome, " + user . email ;
} else {
document . getElementById ( "message" ). innerHTML = "No user signed in." ;
}
});
firebase . auth (). signInWithEmailAndPassword ( email , password ). catch ( function ( error ) {
document . getElementById ( "message" ). innerHTML = error . message ;
});
< /script >
This code calls signInWithEmailAndPassword() and then processes the result
with the onAuthStateChanged() callback.
Replace the following:
EMAIL_ID : the email for the user that you created earlier
PASSWORD : the password for the user that you created earlier
Open index.html in your web browser. A welcome message displaying your
user's email appears.
There is a limit on unsuccessful user sign-in attempts.
Several rapid, unsuccessful sign-in attempts temporarily locks the user out of their account.
For more information on other Identity Platform limits, see Quotas and limits .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the provider and user
If you used an existing Google Cloud project, delete the provider and user
that you created to avoid incurring charges to your account:
In the Google Cloud console, go to the Identity Providers page.
Go to Identity Providers
To delete the provider, click
delete Delete next to the name of the
provider. To confirm, click Delete .
In the Google Cloud console, go to the Users page.
Go to Users
To delete the user that you created, click
delete Delete next to the name of the
user. To confirm, click Delete .
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
In a real app, your users would sign up using a dedicated registration page, and
then sign in by entering their emails and passwords. Identity Platform
offers a
pre-built authentication UI that
you can use for these pages, or you can build your own. You might also want to
support additional sign-in methods, such as social providers (like Facebook or
Google), phone numbers, OIDC, or SAML.
Learn more about the following:
Sign in users with
JavaScript ,
Android ,
iOS ,
C++ , or
Unity .
Sign in users with OIDC or
SAML .
Migrate users from your existing app
to Identity Platform.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

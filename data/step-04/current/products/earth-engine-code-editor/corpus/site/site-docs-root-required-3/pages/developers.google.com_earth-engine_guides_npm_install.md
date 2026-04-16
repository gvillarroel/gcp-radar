---
title: "NPM Installation \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/npm_install
knowledge_key: corpus
source_id: site-docs-root-required-3
source_type: site
entrypoint: https://developers.google.com/earth-engine
source_metadata:
  url: https://developers.google.com/earth-engine/guides/npm_install
  title: "NPM Installation \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
NPM Installation
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Earth Engine JavaScript API is available as an npm package and requires installing the client library and setting up authentication credentials to use.
To install the client library, you need to have Node.js and npm set up and then run npm install --save @google/earthengine .
Authentication can be set up using either client-side OAuth for browser-based applications or server-side service accounts, which is recommended for Node.js.
Client-side authentication requires users to have their own authorized Google accounts, while server-side authentication uses a private key stored with the application.
You can test your installation and authentication setup by running a script that requires and initializes the Earth Engine API.
Keep your client library up to date by running: npm update @google/earthengine
The Earth Engine JavaScript API is distributed as an
npm package that is
hosted on GitHub . The following
instructions give an overview of installing the Google Earth Engine JavaScript API. To use
the Earth Engine JavaScript API you'll need to
install the client library and its dependencies
on your computer and then
set up authentication credentials .
The JavaScript client library does not include all
functionality of the Earth Engine Code Editor . Notably,
user interface features such as buttons, panels, and charts are excluded.
Installing the client library
1. Set up Node.js and npm
npm is a package manager for
JavaScript and Node.js. Verify that you have Node.js 6+ and npm 3+.
node --version
npm --version
If needed, install both using the
official installer for your platform .
2. Install the Earth Engine client library
The client library can be installed from npm with the following command:
npm install --save @google/earthengine
Once installed, the client library is placed within the current
project directory: node_modules/@google/earthengine/* . On future
projects, install the client in the same way.
3. Use the client library in an application
Within your application code, require the Earth Engine API:
var ee = require ( '@google/earthengine' );
Updating the client library
Use npm to update the client library to the latest version. From the current project directory:
npm update @google/earthengine
Learn more about
updating libraries with npm .
Uninstalling the client library
To uninstall using the npm package manager, run the following command:
npm uninstall --save @google/earthengine
This removes node_modules/@google/earthengine from the current project, but
does not affect any projects in other directories on the same machine.
Create a Cloud Project and activate the Earth Engine API
Follow these instructions to create a Cloud
project and enable the Earth Engine API.
Setting Up Authentication Credentials
Earth Engine APIs use the OAuth 2.0 protocol for
authenticating browser-based clients. For server-side authentication in Node.js, service
accounts are recommended. Web apps may use either approach, with pros and cons discussed
below.
Client-side authentication with OAuth
With client-side authentication in a web browser, users of your application log in with
their own Google accounts. These users must already be authorized to access Earth
Engine, and must have permission to read the assets used by your application.
After creating an OAuth
2.0 Client ID , authenticate as shown below:
// Load client library .
var ee = require ( '@google/earthengine' );
// Initialize client library and run analysis .
var initialize = function () {
ee . initialize ( null , null , function () {
// ... run analysis ...
}, function ( e ) {
console . error ( 'Initialization error: ' + e );
});
};
// Authenticate using an OAuth pop - up .
ee . data . authenticateViaOauth ( YOUR_CLIENT_ID , initialize , function ( e ) {
console . error ( 'Authentication error: ' + e );
}, null , function () {
ee . data . authenticateViaPopup ( initialize );
});
Notice: Client-side authentication only works in the browser.
In server or command-line code, service account authentication is required.
Server-side authentication with a service account
With server-side authentication, a private key is stored with your application, allowing
it to access the Earth Engine API through a service account. Users of your application
do not need their own access to Earth Engine, and are not required to log in.
In Node.js, only server-side authentication is provided by the client library.
After creating a new service
account , use your JSON private key to authenticate:
// Require client library and private key .
var ee = require ( '@google/earthengine' );
var privateKey = require ( './.private-key.json' );
// Initialize client library and run analysis .
var runAnalysis = function () {
ee . initialize ( null , null , function () {
// ... run analysis ...
}, function ( e ) {
console . error ( 'Initialization error: ' + e );
});
};
// Authenticate using a service account .
ee . data . authenticateViaPrivateKey ( privateKey , runAnalysis , function ( e ) {
console . error ( 'Authentication error: ' + e );
});
Caution: A private key gives an application permission to act
as your service account, and should be treated like a password. Never share a private
key or include it in version control. Instead, specify the private key using a config
file, or load it from an environment variable.
Testing the installation
To test that authentication has been set up correctly, run the following script:
var ee = require ( '@google/earthengine' );
// Authenticate using one ( but not both ) of the methods below .
ee . data . authenticateViaOauth ( YOUR_CLIENT_ID );
ee . data . authenticateViaPrivateKey ( YOUR_PRIVATE_KEY );
ee . initialize ();
// Run an Earth Engine script .
var image = new ee . Image ( 'srtm90_v4' );
image . getMap ({ min : 0 , max : 1000 }, function ( map ) {
console . log ( map );
});
If everything is installed correctly, the metadata for an image should be printed.
Notice: When using Earth Engine in a Node.js environment, some
best practices differ from typical scripts. Synchronous API calls should be avoided —
they prevent the app from handling other requests while waiting for a response from the
Earth Engine API. Instead, use asynchronous requests with callback functions. When using
the Earth Engine API in Google Cloud Functions, synchronous requests are not
supported.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-12-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-12-05 UTC."],[],[]]

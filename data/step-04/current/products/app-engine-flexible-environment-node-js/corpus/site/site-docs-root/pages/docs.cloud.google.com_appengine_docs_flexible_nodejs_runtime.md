---
title: "The Node.js runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/nodejs/runtime
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/nodejs/runtime
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/nodejs/runtime
  title: "The Node.js runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Guides
Send feedback
The Node.js runtime
Stay organized with collections
Save and categorize content based on your preferences.
Note: Some Node.js runtimes have reached end of support . You cannot re-deploy
versions that use runtimes after their end of support date. We recommend that
you upgrade your app
to use the latest version of Node.js.
The Node.js runtime is the software stack responsible for installing your
application code and dependencies, and then running that
application in the flexible environment.
Node.js versions
Node.js 24 uses
buildpacks . The default Node.js engine
uses the latest LTS release . For the full list of supported
Node.js versions, and their corresponding Ubuntu
version, see the
Runtime support schedule .
To use a supported
Node.js version, you must:
Install gcloud CLI version 420.0.0 or later . You can update
your CLI tooling by running the gcloud components update command. To view your installed version, run the gcloud version command.
Include the runtime_config and operating_system settings in your
app.yaml file
to specify an operating system.
Optionally, specify a version by:
Adding the runtime_version setting in your app.yaml file. By default, the
latest Node.js version is used if the runtime_version
setting isn't specified. For example:
To specify Node.js 24 on Ubuntu
24:
runtime : nodejs
env : flex
runtime_config :
operating_system : "ubuntu24"
runtime_version : "24"
To specify the latest supported Node.js version on
Ubuntu 24:
runtime : nodejs
env : flex
runtime_config :
operating_system : "ubuntu24"
The runtime_version setting supports semver.
Including the latest supported Node.js version in your
application's package.json
file using the engines field. When you use
the engines field to specify a version, the runtime_version setting
takes precedence. To prevent unexpected breakages, we recommend that
you specify a Node.js version in the
engines field, along with the runtime_version .
For example:
{
"engines": {
"node": "24.x"
}
}
The engines.node property can be a semver range .
If you specify this property, the runtime downloads and installs the latest
version of Node.js that matches the semver range. If no
match is found, the application fails to deploy and the runtime
returns an error.
Previous runtime versions
Warning: Node.js version 16 and earlier have reached
end of support. App Engine blocks you from deploying your applications using
runtimes that have reached end of support. We recommend that you migrate your app to use a
supported version
of Node.js or use a custom runtime .
For Node.js runtime version 16 and earlier , specify a version in your
application's package.json file using the engines field.
The following example configures the runtime to use the Node 9 release:
{
"engines" : {
"node" : "9.x"
}
}
The engines.node property can be a semver range .
If you specify this property, the runtime downloads and installs the latest version of
Node.js that matches the semver range. If no match is found,
the application fails to deploy and the runtime returns an error message.
Support for other Node.js runtimes
If you need to use a Node.js version that isn't supported , you can create a
custom runtime and select a
valid base image with the Node.js version you need.
For Google-supplied base images or
Docker Node.js base images ,
see Building custom runtimes .
Package manager
During deployment, the runtime uses either the npm , or yarn , or Pnpm
package manager to install dependencies and start the application. The package
manager is set with the following logic:
The default package manager is npm .
If a yarn.lock file is present in your application's
root directory, the runtime instead uses the yarn package manager.
For only Node.js version 18 and later, if a
pnpm-lock.yaml file is present in your application's
root directory, the runtime instead uses the Pnpm package manager.
If both a package-lock.json , and yarn.lock or pnpm-lock.yaml exist, your
deployment will fail with an error. If you need the package-lock.json file,
you must specify the other package manager files in the
skip_files section of your app.yaml file to resolve which
package manager to use.
Package manager version
The runtime image aims to use the latest yarn release and the release of
npm that is available in the latest Node.js LTS release .
You can specify a different package manager version to use in your application's
package.json file by using the
engines field. In this case, the runtime
ensures that the package manager used for the deployment
has a version that matches the specification listed in the
engines field.
If both a yarn and npm version specification is
given, only the package manager that is used for the deployment will be
updated if needed. This saves deployment time by not installing a custom
version of a package manager if it is not actually being used to deploy your
application.
The following example configures the runtime to use a custom version of npm :
{
"engines" : {
"npm" : "5.x"
}
}
The next example configures the runtime to use a custom version of yarn :
{
"engines" : {
"yarn" : ">=1.0.0 <2.0.0"
}
}
The engines.npm and engines.yarn properties can both be a
semver range .
Dependencies
During deployment, the runtime will use either the npm or yarn
package manager to install dependencies by running npm install or
yarn install . See the Package Manager section for more
information on how the runtime selects the package manager to use.
Also, for more information about managing Node.js packages on Google App Engine,
see Using Node.js Libraries .
To enable the use of Node.js packages that require native extensions, the
following Ubuntu packages are pre-installed in the Docker image .
build-essential
ca-certificates
curl
git
imagemagick
libkrb5-dev
netbase
python
If your application requires additional operating-system-level dependencies, you
will need to use a custom runtime based on this runtime to install
the appropriate packages.
NPM build script
For Node.js runtime version 18 and later , the runtime environment executes
npm run build if a build script
is detected in package.json by default. If you require additional control over your build
steps before starting your application, you can provide a custom build step
by adding a gcp-build script to your package.json file.
To prevent your build from running the npm run build script, you must either:
Add a gcp-build script with an empty value in your package.json file:
"gcp-build":"" .
Add the GOOGLE_NODE_RUN_SCRIPTS
build environment variable with an empty value in your app.yaml file.
build_env_variables :
GOOGLE_NODE_RUN_SCRIPTS : ''
For details about specifying build environment variables see
build_env_variables
section in the app.yaml file.
Application startup
The runtime starts your application by using npm start , which uses
the command specified in package.json . For example:
"scripts" : {
"start" : "node app.js"
}
Your start script should start a web server that responds to HTTP requests on
the port specified by the PORT environment variable, typically 8080.
Extending the runtime
You can use custom runtimes to add
additional functionality to a Node.js app running in the App Engine flexible environment. To configure
a custom runtime, replace the following line in your app.yaml file :
runtime : nodejs
with this line:
runtime : custom
You must also add Dockerfile and .dockerignore files in the same directory
that contains the app.yaml file.
Visit the Custom runtimes
documentation to learn how to define a Dockerfile in a custom runtime.
HTTPS and forwarding proxies
App Engine terminates the HTTPS connection at the load balancer and forwards the
request to your application. Some applications need to determine the original
request IP and protocol. The user's IP address is available in the standard
X-Forwarded-For header. Applications that require this information should
configure their web framework to trust the proxy.
With Express.js , use the trust proxy setting:
app . set ( 'trust proxy' , true );
For information on enforcing HTTPS connections, see
How Requests are Handled .
Environment variables
The following environment variables are set by the runtime environment:
Environment variable
Description
GAE_INSTANCE
The name of the current instance.
GAE_MEMORY_MB
The amount of memory available to the application process.
GAE_SERVICE
The service name specified in your application's app.yaml
file, or if no service name is specified, it is set to
default .
GAE_VERSION
The version label of the current application.
GOOGLE_CLOUD_PROJECT
The Project ID associated with your application, which is visible in
the Google Cloud console
NODE_ENV
When your app is deployed, the value is production .
PORT
The port that will receive HTTP requests. Set to 8080 .
You can set additional environment variables with
app.yaml .
Metadata server
Each instance of your application can use the
Compute Engine metadata server to query information
about the instance, including its hostname, external IP address, instance ID,
custom metadata, and service account information. App Engine does not allow you
to set custom metadata for each instance, but you can set
project-wide custom metadata
and read it from your App Engine and Compute Engine instances.
This example function uses the metadata server to get the external IP address
of the instance.
import express from 'express' ;
import fetch from 'node-fetch' ;
const app = express ();
app . enable ( 'trust proxy' );
const METADATA_NETWORK_INTERFACE_URL =
'http://metadata/computeMetadata/v1/' +
'/instance/network-interfaces/0/access-configs/0/external-ip' ;
const getExternalIp = async () = > {
const options = {
headers : {
'Metadata-Flavor' : 'Google' ,
},
json : true ,
};
try {
const response = await fetch ( METADATA_NETWORK_INTERFACE_URL , options );
const ip = await response . json ();
return ip ;
} catch ( err ) {
console . log ( 'Error while talking to metadata server, assuming localhost' );
return 'localhost' ;
}
};
app . get ( '/' , async ( req , res , next ) = > {
try {
const externalIp = await getExternalIp ();
res . status ( 200 ). send ( `External IP: ${ externalIp } ` ). end ();
} catch ( err ) {
next ( err );
}
});
const PORT = parseInt ( process . env . PORT ) || 8080 ;
app . listen ( PORT , () = > {
console . log ( `App listening on port ${ PORT } ` );
console . log ( 'Press Ctrl+C to quit.' );
});
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

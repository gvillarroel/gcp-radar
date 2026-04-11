---
title: "Access HTTP servers running on a workstation \_|\_ Cloud Workstations \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations
  title: "Access HTTP servers running on a workstation \_|\_ Cloud Workstations \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Access HTTP servers running on a workstation
Stay organized with collections
Save and categorize content based on your preferences.
By default you can access HTTP ports 80 and ports 1024 to 65535 on your
workstations from your browser. You can restrict the ports you can access on
your workstations by setting allowedPorts
in the workstation configuration.
Running workstations have a host property that you can use
to connect using HTTP from a remote browser. You can find the host property by
getting details for a running workstation through the API, Google Cloud CLI,
the Google Cloud console, or by printing the $WEB_HOST environment variable,
which is automatically set inside your workstation.
The URL connects on port 80 by default.
Default workstation URL format
The host property URL uses the following format by default:
https:// PORT - WORKSTATION_NAME . CLUSTER_ID .cloudworkstations.dev
The placeholders represent the following:
PORT : the port number, which is port 80 by default.
WORKSTATION_NAME : the workstation name.
CLUSTER_ID : the randomly generated cluster identifier
cloudworkstations.dev : the default domain name for a workstation.
URLs for custom domains use a different format. For more about setting up
custom domains in Cloud Workstations, see
Set up custom domains for Cloud Workstations .
Connect to a different port by changing the URL
In order to connect on a different port, specify a different port number as a
prefix. For example, the following URL connects to port 9900 :
https://9900-myworkstation.cluster-12345abcde.cloudworkstations.dev
In this example, note the following:
9900 : represents the port number.
myworkstation : represents the workstation ID.
cluster-12345abcde : represents the cluster identifier.
cloudworkstations.dev : represents the default domain name for a workstation.
These URLs require user authentication. To access these URLs,
you must be logged in and must have the Cloud Workstations User IAM
role, roles/workstations.user , or the workstations.workstations.use
permission.
Connecting to an HTTP app from Google Cloud console
You can connect to an HTTP app running on a workstation from the
Google Cloud console.
For any running workstation that you have permissions to use, you see a
Launch button. By default, this button connects on port 80 . You can
click the arrow_drop_down expander
arrow next to Launch to see alternative connecting options. The
Connect to web app on port option lets you specify a different port to
connect to.
Connecting to an HTTP app from the base editor
To connect to an app running on your workstation from the base editor, follow either of these instructions:
Click localhost links in the terminal. The base editor automatically
redirects localhost links to the right URLs.
To open a terminal window, click menu
Menu > Terminal > New Terminal .
Alternatively, press Control+Shift+` (or
Command+Shift+` on macOS).
At the command prompt, run the following command to display the
localhost link:
echo http://localhost: PORT
Replace PORT with a port number such as 80
or 8080 .
Hold Control (or Command on macOS) and then click
the localhost link. This opens
PORT - WORKSTATION-HOSTNAME
in your browser.
Use the browser window: navigate to
https:// PORT - WORKSTATION-HOSTNAME ,
where PORT is the port number and
WORKSTATION-HOSTNAME is your workstation
hostname.
Restricting port access for a workstation
To restrict the ports that can be accessed on a workstations, set the
allowedPorts in the workstation configurations.
To restrict a single port, set the PortRange
first and last fields to the same port number.
By default ports 22 , 80 and 1024 - 65535 are allowed.
To create a workstation configuration with restricted port access to 80 and
8080 to 8100 , run the following Google Cloud CLI command:
gcloud beta workstations configs create CONFIG \
--cluster= CLUSTER_ID \
--region= REGION \
--project= PROJECT \
--allowed-ports=first=80,last=80 \
--allowed-ports=first=8080,last=8100
CORS preflight requests
By default, the workstations service makes sure that all requests to the
workstation are authenticated with a
cookie or authentication header.
Cross-Origin Resource Sharing (CORS) preflight requests don't include cookies
or custom headers, and so are considered unauthenticated and blocked by the
workstations service. Administrators can
optionally allow unauthenticated CORS preflight requests through to
the workstation, where it becomes the responsibility of the destination
server in the workstation to validate the request.
To allow unauthenticated CORS preflight requests, run the following
Google Cloud CLI command:
gcloud beta workstations configs update CONFIG \
--cluster= CLUSTER_ID \
--region= REGION \
--project= PROJECT \
--allow-unauthenticated-cors-preflight-requests
Disable localhost replacement in HTTP responses
To allow applications under development to run properly on the
workstation, Cloud Workstations replaces references to localhost,
127.0.0.1, and to 0.0.0.0 with the workstation's hostname in HTTP
responses from the workstation.
This may intefere with some applications. To disable this behavior,
run the following Google Cloud CLI command:
gcloud beta workstations configs update CONFIG \
--cluster= CLUSTER_ID \
--region= REGION \
--project= PROJECT \
--disable-localhost-replacement
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

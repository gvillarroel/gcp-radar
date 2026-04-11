---
title: "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview
source_metadata:
  url: https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer
  title: "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Transfer Appliance
Guides
Send feedback
Enable or disable online transfer
Stay organized with collections
Save and categorize content based on your preferences.
The Transfer Appliance has two modes:
Offline transfer : Data is copied to the appliance until it is full. The
appliance is shipped back to Google and the copied data is moved to your
Cloud Storage bucket.
Online transfer : Data copied to the appliance is streamed to your
Cloud Storage bucket. After the data is uploaded to your Cloud Storage
bucket, it is removed from the appliance.
Online transfer compresses and encrypts the data in transit and accelerates
data transfer compared to the gcloud CLI and other command-line
tools.
You can toggle between offline and online mode.
Download Appliance Service Account Key
Once the project setup is completed, prepare a service account key:
Create a service account key
for the appliance service account. This is a one time download key.
Rename the key to key.json , and save it to a safe location.
Once you've received your appliance, upload key.json to the /tmp
directory on the appliance.
Set to online mode
Before enabling online transfer mode for the first time, follow the
instructions to complete project setup .
Outbound connectivity is required in order to enable and use online mode.
To enable online transfer mode, follow the instructions below:
Verify your outbound connectivity from the appliance to the HTTPS endpoints
listed below:
https://gcr.io
https://storage.googleapis.com
https://oauth2.googleapis.com
https://storagetransfer.googleapis.com
https://pubsub.googleapis.com
Run the following command using each of the HTTPS endpoints:
ping URL
If the command fails, it may indicate that DNS is misconfigured on the
appliance. If the appliance was configured to use a static IP address,
update it to use DHCP:
ta config --data_port= PORT --ip=dhcp
Replace PORT with the data port you are using on
the appliance, either RJ45 or QSFP .
Copy the service key downloaded in
Download Appliance Service Account Key
to the appliance's tmp folder, by doing the following:
Windows
Using the SCP tool, connect to the appliance using the following
settings:
File protocol : SFTP
Host name : The IP address for the appliance.
Port number : 22
Username : The appliance username provided by the
Transfer Appliance Team.
Password : The appliance password provided by the
Transfer Appliance Team.
Copy the file to the /tmp folder
Linux
Run the following command:
scp PATH_TO_KEY_FILE /key.json USERNAME @ IP_ADDRESS :/tmp
Replace the following:
PATH_TO_KEY_FILE : The path to the key file
that you are copying.
USERNAME : The appliance username provided by
the Transfer Appliance Team.
IP_ADDRESS : The IP address for the
appliance.
When prompted, enter the appliance password provided by
the Transfer Appliance Team.
Apple macOS
Run the following command:
scp PATH_TO_KEY_FILE /key.json USERNAME @ IP_ADDRESS :/tmp
Replace the following:
PATH_TO_KEY_FILE : The path to the key file
that you are copying.
USERNAME : The appliance username provided by
the Transfer Appliance Team.
IP_ADDRESS : The IP address for the
appliance.
When prompted, enter the appliance password provided by the
Transfer Appliance Team.
To set the appliance to online mode, run the following command:
ta online
The following sample response resembles the output that is returned:
Starting containers for online transfer...
Copied new credentials. ## Or, Using old credentials
Running binary to enable online transfer.
This may take several minutes to finish...
Containers have been successfully started. You can transfer data in
online mode.
Optional: change the transfer destination bucket and the job object prefix.
ta online --bucket= BUCKET --object_prefix= OBJECT_PREFIX
Replace BUCKET with the destination bucket and OBJECT_PREFIX
with the object prefix you are updating to.
If the command is successful, it returns output resembling the output from the step where you run the online transfer without these two arguments.
Note: You can update the destination bucket and the object prefix independently. If updating to a new destination bucket, ensure that the required service accounts are set up for the new bucket . Additionally, each invocation of this command with at least one of the the two flags triggers a new transfer operation, regardless of whether the appliance is offline or online.
To troubleshoot online mode, see Troubleshooting online
mode .
Set to offline mode
To specify offline mode, run the following command:
ta offline
The following sample response resembles the output that is returned:
Putting the appliance in offline mode...
Appliance is successfully put into the offline mode.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

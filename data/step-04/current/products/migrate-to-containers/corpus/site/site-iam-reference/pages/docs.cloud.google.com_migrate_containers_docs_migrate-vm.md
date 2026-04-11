---
title: "Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/containers/docs/migrate-vm
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial
source_metadata:
  url: https://docs.cloud.google.com/migrate/containers/docs/migrate-vm
  title: "Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Containers
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrate a Linux VM using Migrate to Containers CLI
In this quickstart, you create a Compute Engine virtual machine (VM) instance,
then use the Migrate to Containers CLI to migrate the VM to Google Kubernetes Engine (GKE).
Before you begin
In the Google Cloud console, on the project selector page, select or
create a Google Cloud project .
Note: If you don't plan to keep the resources that you create in this
procedure, create a project instead of selecting an existing project. After
you finish these steps, you can delete the project, removing all resources
associated with the project.
Go to project selector
Make sure that billing is enabled for your Google Cloud project. Learn
how to check if billing is enabled on a project .
Enable the Compute Engine API.
Enable Compute Engine API
Enable the GKE API.
Enable GKE API
Create a Compute Engine VM with a web server to use as source VM
This section describes how to create a Compute Engine VM that serves a
Hello World! web page that you can use for testing after migration is
complete.
In the Google Cloud console, click
Activate Cloud Shell .
Go to Google Cloud console
Create a VM:
gcloud compute instances create quickstart-source-vm \
--zone = us-central1-a --machine-type = e2-medium \
--subnet = default --scopes = "cloud-platform" \
--tags = http-server,https-server --image = ubuntu-2204-jammy-v20240208 \
--image-project = ubuntu-os-cloud --boot-disk-size = 10GB --boot-disk-type = pd-standard \
--boot-disk-device-name = quickstart-source-vm
Allow a few minutes for the VM creation to complete.
Create a firewall rule that allows requests to the instance over HTTP:
gcloud compute firewall-rules create default-allow-http \
--direction = INGRESS --priority = 1000 --network = default --action = ALLOW \
--rules = tcp:80 --source-ranges = 0 .0.0.0/0 --target-tags = http-server
Go to the VM instances page.
Go to VM instances
To connect to the VM quickstart-source-vm , locate the row for the VM, then
click SSH .
The connection is established in a new tab.
On the quickstart-source-vm command tab, install the apache2 package:
sudo apt-get update && sudo apt-get install apache2 -y
After installing Apache, the operating system automatically starts the
Apache server.
On the same tab, overwrite the Apache web server default web page with a
new page:
echo '<!doctype html><html><body><h1>Hello World!</h1></body></html>' | sudo tee /var/www/html/index.html
Go back to the VM instances page, and copy the External IP address
displayed for quickstart-source-vm .
Paste the IP address of the VM in your browser address bar. Prefix it with
http:// .
The Hello World! page appears.
Create a Compute Engine VM to use as a local machine
In this section, you create a Linux VM that you can use as your local machine
to perform the different Migrate to Containers operations for migrating the source
VM.
In the Google Cloud console, click
Activate Cloud Shell .
Go to Google Cloud console
Create a VM:
gcloud compute instances create quickstart-local-vm \
--zone = us-central1-a --machine-type = e2-medium \
--subnet = default --scopes = "cloud-platform" \
--tags = http-server,https-server --image = ubuntu-2204-jammy-v20240208 \
--image-project = ubuntu-os-cloud --boot-disk-size = 50GB --boot-disk-type = pd-standard \
--boot-disk-device-name = quickstart-local-vm
Allow a few minutes for the VM creation to complete.
Create a GKE cluster
In this section, you create a GKE cluster in Google Cloud,
where you deploy your containerized workload later in this quickstart.
In Cloud Shell, create a new Kubernetes cluster:
gcloud container clusters create quickstart-cluster \
--zone = us-central1-a --machine-type = e2-medium \
--image-type = ubuntu_containerd --num-nodes = 1 \
--logging = SYSTEM,WORKLOAD,API_SERVER,SCHEDULER,CONTROLLER_MANAGER
Allow a few minutes for the cluster creation to complete.
Prepare the local VM to perform the migration
Go to the VM instances page.
Go to VM instances
To connect to the VM quickstart-local-vm , locate the row for the VM, then
click SSH .
The connection is established in a new tab.
On the quickstart-local-vm command tab, install the Google Cloud CLI:
# Import the Google Cloud public key.
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg
# Add the gcloud CLI distribution URI as a package source
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
# Update and install gcloud
sudo apt-get update && sudo apt-get install google-cloud-cli
# Get started
gcloud init
To complete the gcloud CLI setup, follow the instructions
that appear on the quickstart-local-vm command tab:
To select the account to use to perform various operations, enter 1 .
To select the project where you created the VM, enter 1 .
To skip configuring a default region and zone, enter n .
Install Docker and allow the non-root user to run containers:
# Download the convenience script
curl -fsSL https://get.docker.com -o install-docker.sh
# Install Docker
sudo sh install-docker.sh
# Allow the non-root user to access Docker
sudo usermod -aG docker $USER
# Activate the group changes
newgrp docker
Install Skaffold:
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && \
sudo install skaffold /usr/local/bin/
Download the Migrate to Containers CLI:
curl -O "https://m2c-cli-release.storage.googleapis.com/ $( curl -s https://m2c-cli-release.storage.googleapis.com/latest ) /linux/amd64/m2c"
chmod +x ./m2c
Migrate the source VM
A migration typically involves three steps: copying the source VM file system,
analyzing the file system to create a migration plan, and generating the
migration artifacts.
The following sections describe how to use the Migrate to Containers CLI for migrating
the source VM using your local Linux VM.
Copy the source VM file system
When you copy a source VM file system, the Migrate to Containers CLI uses default
filters to reduce the size of the copied file system. However, to make the
Apache server available to start up, the server needs the /var/log directory,
which is removed by the default filters.
This section describes how to edit the default filters to ensure that
/var/log/* is copied with the source VM file system.
On the quickstart-local-vm command tab, get a list of the default
Migrate to Containers filters in a file called filters.txt :
./m2c copy default-filters > filters.txt
To edit the default filters, do the following:
Open the filters.txt file in a text editor:
vi filters.txt
To make changes in the file, press i .
Remove the following statement:
- /var/log/*
To save the file and exit the text editor, press Esc and then enter
:wq .
Copy the source machine's file system:
./m2c copy gcloud \
--project PROJECT_ID --zone us-central1-a \
--vm-name quickstart-source-vm --output quickstart-vm-filesystem \
--filters filters.txt
Replace PROJECT_ID with the ID of the project.
A copy of the source machine's file system is available in the
quickstart-vm-filesystem directory.
Create the migration plan
On the quickstart-local-vm command tab, create the migration plan:
./m2c analyze \
--source quickstart-vm-filesystem --plugin linux-vm-container \
--output analysis-output
After the analysis is complete, a new directory called analysis-output is
created which contains the migration plan, config.yaml .
Generate the migration artifacts
On the quickstart-local-vm command tab, generate the migration artifacts:
./m2c generate --input analysis-output --output migration-artifacts
The generated migration artifacts are added to the migration-artifacts
directory.
Deploy the migrated workload
In this section, you deploy the migrated workload from your local VM
quickstart-local-vm to the GKE cluster running on
Google Cloud.
On the quickstart-local-vm command tab, install the
gke-gcloud-auth-plugin plugin :
sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin
Install kubectl :
sudo apt-get install kubectl
Connect to the cluster quickstart-cluster :
gcloud container clusters get-credentials quickstart-cluster \
--zone us-central1-a --project PROJECT_ID
Open the migration-artifacts folder:
cd migration-artifacts
To expose the workload to the internet, add a new LoadBalancer service in
the deployment_spec.yaml file. To edit the deployment_spec.yaml file, do
the following:
Open the deployment_spec.yaml file in a text editor:
vi deployment_spec.yaml
To make changes in the file, press i .
Locate the Service object with the name linux-system . It appears
similar to the following:
apiVersion: v1
kind: Service
metadata:
labels:
anthos-migrate.cloud.google.com/type: linux-container
migrate-for-anthos-optimization: "true"
migrate-for-anthos-version: m2c-cli-1.2.2
name: linux-system
spec:
clusterIP: None
selector:
app: linux-system
type: ClusterIP
Add another Service object called hello-service right after
linux-system :
apiVersion: v1
kind: Service
metadata:
labels:
anthos-migrate.cloud.google.com/type: linux-container
migrate-for-anthos-optimization: "true"
migrate-for-anthos-version: m2c-cli-1.2.2
name: linux-system
spec:
clusterIP: None
selector:
app: linux-system
type: ClusterIP
---
# Add the hello-service object
apiVersion: v1
kind: Service
metadata:
name: hello-service
spec:
selector:
app: linux-system
ports:
- protocol: TCP
port: 80
targetPort: 80
type: LoadBalancer
To save the file and exit the text editor, press Esc and then enter
:wq .
Deploy the migrated VM:
skaffold run -d eu.gcr.io/ PROJECT_ID
Get the external IP address of the migrated VM:
kubectl get service hello-service
When the web server is ready, you see an external IP address for the
hello-service you added.
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
hello-service LoadBalancer 10.23.241.124 EXTERNAL_IP 80:32611/TCP 5m4s
To check if the migration was successful, open a new browser tab and visit
the web page at the external IP address.
http:// EXTERNAL_IP
Make sure to use HTTP and not HTTPS .
If you see the text Hello World! displayed on your screen, your VM
migration was successful.
If you're not able to access your migrated workload, see how to
troubleshoot known issues .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the GKE cluster
In the Google Cloud console, go to the GKE page.
Go to GKE
Select quickstart-cluster , and then click
delete Delete .
When prompted to confirm, click Delete again.
Delete the VMs
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Click the name quickstart-source-vm .
At the top of the instance's details page, click
delete Delete .
Click the name quickstart-local-vm .
At the top of the instance's details page, click
delete Delete .
What's next
Learn how to batch guest discovery and data collection .
To learn how to migrate a more complex application, see the
Migrating a Spring framework application tutorial available in the
Migrate to Containers GitHub repository.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

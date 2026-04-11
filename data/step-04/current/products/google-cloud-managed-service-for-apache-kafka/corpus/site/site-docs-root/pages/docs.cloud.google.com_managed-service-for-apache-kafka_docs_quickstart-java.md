---
title: "Quickstart: develop a Java producer \_|\_ Google Cloud Managed Service for\
  \ Apache Kafka \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-java
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-java
  title: "Quickstart: develop a Java producer \_|\_ Google Cloud Managed Service for\
    \ Apache Kafka \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Managed Service for Apache Kafka
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Develop a Java producer application
Learn how to develop a Java producer application that authenticates with a
Managed Service for Apache Kafka cluster by using
Application Default Credentials
(ADC). ADC lets applications running on Google Cloud automatically find and
use the right credentials for authenticating to Google Cloud services.
Before you begin
Before you start this tutorial, create a new
Managed Service for Apache Kafka cluster. If you already have a cluster, you
can skip this step.
How to create a cluster
Console
Go to the Managed Service for Apache Kafka > Clusters page.
Go to Clusters
Click add_box Create .
In the Cluster name box, enter a name for the cluster.
In the Region list, select a location for the cluster.
For Network configuration , configure the subnet where the cluster is accessible:
For Project , select your project.
For Network , select the VPC network.
For Subnet , select the subnet.
Click Done .
Click Create .
After you click Create , the cluster state is Creating . When the cluster
is ready, the state is Active .
gcloud
To create a Kafka cluster, run the
managed-kafka clusters
create command.
gcloud managed-kafka clusters create KAFKA_CLUSTER \
--location = REGION \
--cpu = 3 \
--memory = 3GiB \
--subnets = projects/ PROJECT_ID /regions/ REGION /subnetworks/ SUBNET_NAME \
--async
Replace the following:
KAFKA_CLUSTER : a name for the Kafka cluster
REGION : the location of the cluster
PROJECT_ID : your project ID
SUBNET_NAME : the subnet where you want to create the
cluster, for example default
For information about supported locations, see
Managed Service for Apache Kafka locations .
The command runs asynchronously and returns an operation ID:
Check operation [ projects/ PROJECT_ID /locations/ REGION /operations/ OPERATION_ID ] for status.
To track the progress of the create operation, use the
gcloud managed-kafka
operations describe command:
gcloud managed-kafka operations describe OPERATION_ID \
--location = REGION
When the cluster is ready, the output from this command includes the entry state:
ACTIVE . For more information, see
Monitor the
cluster creation operation .
Required roles
To get the permissions that
you need to create and configure a client VM,
ask your administrator to grant you the
following IAM roles on the project:
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Role Viewer ( roles/iam.roleViewer )
Service Account User ( roles/iam.serviceAccountUser )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a client VM
Create a Linux virtual machine (VM) instance in Compute Engine that can access
the Kafka cluster. When you configure the VM, set the following options:
Region . Create the VM in the same region as your Kafka cluster.
Subnet . Create the VM in the same VPC network as the subnet
that you used in your Kafka cluster configuration. For more information, see
View a cluster's subnets .
Access scopes . Assign the https://www.googleapis.com/auth/cloud-platform
access scope to the
VM. This scope authorizes the VM to send requests to the Managed Kafka API.
The following steps show how to set these options.
Console
In the Google Cloud console, go to the Create an instance page.
Create an instance
In the Machine configuration pane, do the following:
In the Name field, specify a name for your instance. For more
information, see
Resource naming convention .
In the Region list, select the same region as your Kafka cluster.
In the Zone list, select a zone.
In the navigation menu, click Networking . In the Networking pane
that appears, do the following:
Go to the Network interfaces section.
To expand the default network interface, click the
expand_more arrow.
In the Network field, choose the VPC network.
In the Subnetwork list, select the subnet.
Click Done .
In the navigation menu, click Security . In the Security pane
that appears, do the following:
For Access scopes , select Set access for each API .
In the list of access scopes, find the Cloud Platform drop-down list
and select Enabled.
Click Create to create the VM.
gcloud
To create the VM instance, use the
gcloud compute instances create
command.
gcloud compute instances create VM_NAME \
--scopes = https://www.googleapis.com/auth/cloud-platform \
--subnet = projects/ PROJECT_ID /regions/ REGION /subnetworks/ SUBNET \
--zone = ZONE
Replace the following:
VM_NAME : the name of the VM
PROJECT_ID : your project ID
REGION : the region where you created the Kafka
cluster, for example us-central1
SUBNET : a subnet in the same VPC
network as the subnet that you used in the cluster configuration
ZONE : a zone in the region where you created the
cluster, for example us-central1-c
For more information about creating a VM, see
Create a VM instance in a specific subnet .
Grant IAM roles
Grant the following Identity and Access Management (IAM) roles to the
Compute Engine default service account :
Managed Kafka Client ( roles/managedkafka.client )
Service Account Token Creator ( roles/iam.serviceAccountTokenCreator )
Service Account OpenID Token Creator
( roles/iam.serviceAccountOpenIdTokenCreator )
Console
In the Google Cloud console, go to the IAM page.
Go to IAM
Find the row for Compute Engine default service account and click
mode_edit Edit principal .
Click Add another role and select the role Managed Kafka Client .
Repeat this step for the Service Account Token Creator and
Service Account OpenID Token Creator roles.
Click Save .
gcloud
To grant IAM roles, use the
gcloud projects add-iam-policy-binding
command.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com" \
--role = roles/managedkafka.client
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com" \
--role = roles/iam.serviceAccountTokenCreator
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com" \
--role = roles/iam.serviceAccountOpenIdTokenCreator
Replace the following:
PROJECT_ID : your project ID
PROJECT_NUMBER : your project number
To get the project number, run the
gcloud projects describe command:
gcloud projects describe PROJECT_ID
For more information, see
Find the project name, number, and ID .
Connect to the VM
Use SSH to connect to the VM instance.
Console
Go to the VM instances page.
Go to VM instances
In the list of VM instances, find the VM name and click SSH .
gcloud
To connect to the VM, use the
gcloud compute ssh command.
gcloud compute ssh VM_NAME \
--project = PROJECT_ID \
--zone = ZONE
Replace the following:
VM_NAME : the name of the VM
PROJECT_ID : your project ID
ZONE : the zone where you created the VM
Additional configuration might be required for first time SSH usage. For more
information, see About SSH connections .
Set up an Apache Maven project
From your SSH session, run the following commands to set up a Maven project.
Install Java and Maven with the command:
sudo apt-get install maven openjdk-17-jdk .
Note: The installation of OpenJDK might take more than 5 minutes, and
might appear to get stuck. You can try interrupting the installation with
Ctrl + C . In most cases, the necessary packages
are installed even if the process is interrupted. To confirm the successful
installation, proceed to the next step.
Set up an Apache Maven project.
This command will create a package com.google.example in a directory
called demo .
mvn archetype:generate -DartifactId = demo -DgroupId = com.google.example \
-DarchetypeArtifactId = maven-archetype-quickstart \
-DarchetypeVersion = 1 .5 -DinteractiveMode = false
Change into the project directory with cd demo .
Create a Java producer application
This section guides you through creating a Java application that
produces messages to a Kafka topic. Write and compile Java code
using Maven, configure necessary parameters in a
kafka-client.properties file, and then run your
application to send messages.
Write the Producer code
Replace the code in src/main/java/com/google/example/App.java with
the following:
package com.google.example ;
import java.util.Properties ;
import org.apache.kafka.clients.producer.KafkaProducer ;
import org.apache.kafka.clients.producer.ProducerRecord ;
import org.apache.kafka.clients.producer.RecordMetadata ;
import org.apache.kafka.clients.producer.Callback ;
class SendCallback implements Callback {
public void onCompletion ( RecordMetadata m , Exception e ){
if ( e == null ){
System . out . println ( "Produced a message successfully." );
} else {
System . out . println ( e . getMessage ());
}
}
}
public class App {
public static void main ( String [] args ) throws Exception {
Properties p = new Properties ();
p . load ( new java . io . FileReader ( "kafka-client.properties" ));
KafkaProducer producer = new KafkaProducer ( p );
ProducerRecord message = new ProducerRecord ( "topicName" , "key" , "value" );
SendCallback callback = new SendCallback ();
producer . send ( message , callback );
producer . close ();
}
}
Compile the application
To compile this application, you need packages related to Kafka clients
generally and authentication logic specific to Google Cloud.
In the demo project directory, you find pom.xml with
Maven configurations for this project.
Add the following lines to the <dependencies>
section of pom.xml.
<dependency>
<groupId>org.apache.kafka</groupId>
<artifactId>kafka-clients</artifactId>
<version>3.7.2</version>
</dependency>
<dependency>
<groupId>com.google.cloud.hosted.kafka</groupId>
<artifactId>managed-kafka-auth-login-handler</artifactId>
<version>1.0.5</version>
</dependency>
Compile the application with mvn compile .
Configure and run the application
The producer expects client configuration parameters in a file called
kafka-client.properties . Create this file in the demo project directory
(the directory containing pom.xml ) with the following contents:
bootstrap.servers = bootstrap. CLUSTER_ID . REGION .managedkafka. PROJECT_ID .cloud.goog:9092
value.serializer = org.apache.kafka.common.serialization.StringSerializer
key.serializer = org.apache.kafka.common.serialization.StringSerializer
security.protocol = SASL_SSL
sasl.mechanism = OAUTHBEARER
sasl.login.callback.handler.class = com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler
sasl.jaas.config = org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required ;
You are now ready to run the application:
mvn exec:java -Dexec.mainClass = "com.google.example.App" --quiet
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Console
Delete the VM instance.
Go to the VM instances page.
Go to VM instances
Select the VM and click Delete .
Delete the Kafka cluster.
Go to the Managed Service for Apache Kafka >
Clusters page.
Go to Clusters
Select the Kafka cluster and click Delete .
gcloud
To delete the VM, use the
gcloud compute instances delete
command.
gcloud compute instances delete VM_NAME --zone = ZONE
To delete the Kafka cluster, use the
gcloud managed-kafka clusters delete
command.
gcloud managed-kafka clusters delete CLUSTER_ID \
--location = REGION --async
What's next
Use the schema registry to produce Avro messages .
Overview of Managed Service for Apache Kafka .
Authenticate to Managed Kafka API .
Apache Kafka® is a registered
trademark of The Apache Software Foundation or its affiliates in the United
States and/or other countries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

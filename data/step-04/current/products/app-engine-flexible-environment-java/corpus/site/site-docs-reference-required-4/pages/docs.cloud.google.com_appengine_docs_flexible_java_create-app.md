---
title: "Quickstart: Create a Java app in the App Engine flexible environment \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/java/create-app
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/java/create-app
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/java/create-app
  title: "Quickstart: Create a Java app in the App Engine flexible environment \_\
    |\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Create a Java app in the App Engine flexible environment
Region ID
The REGION_ID is an abbreviated code that Google assigns
based on the region you select when you create your app. The code does not
correspond to a country or province, even though some region IDs may appear
similar to commonly used country and province codes. For apps created after
February 2020, REGION_ID .r is included in
App Engine URLs. For existing apps created before this date, the
region ID is optional in the URL.
Learn more
about region IDs .
OK
Note: If you are deploying a new Java web service to Google Cloud,
we recommend getting started with
Cloud Run .
This quickstart demonstrates how to create and deploy an app that displays a
short message. The sample application uses Java version 17.
Before you begin
This quickstart assumes that you have installed the
Java SE 17 Development Kit (JDK) on your local machine .
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
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles:
App Engine Admin ( roles/appengine.appAdmin )
on the project
Cloud Build Editor ( roles/cloudbuild.builds.editor )
on the project
Storage Object Admin ( roles/storage.objectAdmin )
on the project
Logs Viewer ( roles/logging.viewer )
on the project
Service Account User ( roles/iam.serviceAccountUser )
on the service account
Ask your administrator to grant the following roles for the App Engine default service account:
Artifact Registry Reader ( roles/artifactregistry.reader )
on the project
Cloud Build Service Account ( roles/cloudbuild.builds.builder )
on the project
Storage Object Viewer ( roles/storage.objectViewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Additional prerequisites
Initialize your App Engine app with your project and choose its region:
gcloud app create -- project =[ YOUR_PROJECT_ID ]
When prompted, select the region
where you want to locate your App Engine application.
Caution : You cannot change an app's region
once it has been set.
Install the following on your local machine:
Download
and install Git .
Download and install Maven 3.5 or greater . This quickstart uses Apache Maven version 3.5 or greater
to build and run the sample app on your computer.
App Engine locations
App Engine is regional , which means the infrastructure that runs your apps is
located in a specific region, and Google manages it so that it is available
redundantly across
all of the zones within that region .
Meeting your latency, availability, or durability requirements are primary
factors for selecting the region where your apps are run. You can generally
select the region nearest to your app's users, but you should consider the
locations where App Engine is available
as well as the locations of the other
Google Cloud products and services that your app uses. Using services
across multiple locations can affect your app's latency as well as its
pricing .
You cannot change an app's region after you set it.
Note: Two locations, which are called europe-west and
us-central in App Engine commands and in the Google Cloud console,
are called europe-west1 and us-central1 , respectively,
elsewhere in Google documentation.
If you already created an App Engine application, you can view its
region by doing one of the following:
Run the gcloud app describe command.
Open the
App Engine Dashboard in the Google Cloud console .
The region appears near the top of the page.
OK
Download the Hello World app
We've created a Hello World app for App Engine so you can quickly
get a feel for deploying an app to the Google Cloud.
Clone the Hello World sample app repository to your local machine.
git clone https : //github.com/GoogleCloudPlatform/java-docs-samples
Alternatively, you can download the sample as a zip file and extract it.
Change to the directory that contains the sample code.
cd java - docs - samples / flexible / java - 17 / micronaut - helloworld
Run Hello World on your local machine
To run the Hello World app on your local computer:
Run the following command:
java -jar target/micronaut-helloworld-0.1.jar
In your web browser, enter the following address:
http://localhost:8080
If you are using Cloud Shell, in the toolbar, click
Web Preview
and select Preview on port 8080 instead.
The Hello World message from the sample app displays on the page. In your
terminal window, press Ctrl+C to exit the web server.
Deploy and run Hello World on App Engine
To deploy your app to the App Engine
flexible environment:
Deploy the Hello World app by running the following
command from the java-17/micronaut-helloworld directory:
mvn clean package appengine:deploy
Launch your browser to view the app at
https:// PROJECT_ID . REGION_ID .r.appspot.com
gcloud app browse where
PROJECT_ID represents your Google Cloud
project ID.
This time, the page that displays the Hello World message is delivered by a
web server running on an App Engine instance.
Congratulations! You've deployed your first App Engine app to the
App Engine flexible environment!
If you encountered any errors deploying your application, check the
troubleshooting tips .
See the following sections for information about cleaning up as well as links to
possible next steps that you can take.
Clean up
To avoid incurring charges, you can delete your Google Cloud project to stop
billing for all the resources used within that project.
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
Learn the whole platform
Now that you know what it's like to develop and deploy App Engine apps,
you can explore the rest of Google Cloud. You already have the
Google Cloud CLI installed which gives you the tools to interact with
products like Cloud SQL, Cloud Storage, Firestore,
and more.
Learn about the App Engine flexible environment
Here are some topics to help continue your learning about App Engine:
An overview of App Engine
Request routing
Request handling
Managing instances
Hello World code review
Hello World is the simplest possible App Engine app, as it contains only
one service, has only one version, and all of the code is located within the
app's root directory. This section describes each of the app files in detail.
HelloControllerTest.java
The HelloControllerTest.java file specifies a URL pattern that describes where the
app will listen for requests, and responds to any requests with the 'Hello
World' message.
/*
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
package com.example.appengine ;
import static org.junit.Assert.assertEquals ;
import io.micronaut.context.ApplicationContext ;
import io.micronaut.http.HttpRequest ;
import io.micronaut.http.client.HttpClient ;
import io.micronaut.runtime.server.EmbeddedServer ;
import org.junit.AfterClass ;
import org.junit.BeforeClass ;
import org.junit.Test ;
public class HelloControllerTest {
private static EmbeddedServer server ;
private static HttpClient client ;
@BeforeClass
public static void setupServer () {
server = ApplicationContext . run ( EmbeddedServer . class );
client = server . getApplicationContext (). createBean ( HttpClient . class , server . getURL ());
}
@AfterClass
public static void stopServer () {
if ( client != null ) {
client . stop ();
}
if ( server != null ) {
server . stop ();
}
}
@Test
public void testHelloWorldResponse () {
String response = client . toBlocking (). retrieve ( HttpRequest . GET ( "/" ));
assertEquals ( "Hello World!" , response );
}
}
app.yaml
The app.yaml
file describes the following configuration for your app:
Sets env: flex , indicating your app uses the
App Engine flexible environment .
Specifies the runtime used by the app.
runtime : java
env : flex
runtime_config :
operating_system : ubuntu22
runtime_version : 17
handlers :
- url : /.*
script : this field is required, but ignored
manual_scaling :
instances : 1
For more information on how the Java runtime works, see
The Java runtime .
pom.xml
Hello World also includes a pom.xml file, which contains information about
the project, such as its dependencies and the build target.
<?xml version="1.0" encoding="UTF-8"?>
<!--
Copyright 2023 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
<modelVersion>4.0.0</modelVersion>
<groupId>com.example.appengine.flexible</groupId>
<artifactId>micronaut-helloworld</artifactId>
<version>0.1</version>
<!--
The parent pom defines common style checks and testing strategies for our samples.
Removing or replacing it should not affect the execution of the samples in anyway.
-->
<parent>
<groupId>com.google.cloud.samples</groupId>
<artifactId>shared-configuration</artifactId>
<version>1.2.0</version>
</parent>
<properties>
<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
<exec.mainClass>com.example.appengine.Application</exec.mainClass>
<maven.compiler.target>11</maven.compiler.target>
<maven.compiler.source>11</maven.compiler.source>
<micronaut.version>3.10.3</micronaut.version>
</properties>
<dependencies>
<dependency>
<groupId>io.micronaut</groupId>
<artifactId>micronaut-inject</artifactId>
<version>${micronaut.version}</version>
<scope>compile</scope>
</dependency>
<dependency>
<groupId>io.micronaut</groupId>
<artifactId>micronaut-validation</artifactId>
<version>${micronaut.version}</version>
<scope>compile</scope>
</dependency>
<dependency>
<groupId>io.micronaut</groupId>
<artifactId>micronaut-runtime</artifactId>
<version>${micronaut.version}</version>
<scope>compile</scope>
</dependency>
<dependency>
<groupId>io.micronaut</groupId>
<artifactId>micronaut-http-client</artifactId>
<version>${micronaut.version}</version>
<scope>compile</scope>
</dependency>
<dependency>
<groupId>javax.annotation</groupId>
<artifactId>javax.annotation-api</artifactId>
<version>1.3.2</version>
<scope>compile</scope>
</dependency>
<dependency>
<groupId>io.micronaut</groupId>
<artifactId>micronaut-http-server-netty</artifactId>
<version>${micronaut.version}</version>
<scope>compile</scope>
</dependency>
<dependency>
<groupId>junit</groupId>
<artifactId>junit</artifactId>
<version>4.13.2</version>
<scope>test</scope>
</dependency>
</dependencies>
<build>
<plugins>
<plugin>
<groupId>com.google.cloud.tools</groupId>
<artifactId>appengine-maven-plugin</artifactId>
<version>2.8.0</version>
<configuration>
<projectId>GCLOUD_CONFIG</projectId>
<version>micronaut-helloworld</version>
</configuration>
</plugin>
<plugin>
<groupId>org.apache.maven.plugins</groupId>
<artifactId>maven-shade-plugin</artifactId>
<version>3.5.1</version>
<executions>
<execution>
<phase>package</phase>
<goals>
<goal>shade</goal>
</goals>
<configuration>
<transformers>
<transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
<mainClass>${exec.mainClass}</mainClass>
</transformer>
<transformer implementation="org.apache.maven.plugins.shade.resource.ServicesResourceTransformer"/>
</transformers>
</configuration>
</execution>
</executions>
</plugin>
<plugin>
<groupId>org.codehaus.mojo</groupId>
<artifactId>exec-maven-plugin</artifactId>
<version>3.1.1</version>
<configuration>
<executable>java</executable>
<arguments>
<argument>-noverify</argument>
<argument>-XX:TieredStopAtLevel=1</argument>
<argument>-Dcom.sun.management.jmxremote</argument>
<argument>-classpath</argument>
<classpath/>
<argument>${exec.mainClass}</argument>
</arguments>
</configuration>
</plugin>
<plugin>
<artifactId>maven-surefire-plugin</artifactId>
<version>3.2.5</version>
</plugin>
<plugin>
<groupId>org.apache.maven.plugins</groupId>
<artifactId>maven-compiler-plugin</artifactId>
<version>3.12.1</version>
<configuration>
<encoding>UTF-8</encoding>
<compilerArgs>
<arg>-parameters</arg>
</compilerArgs>
<annotationProcessorPaths>
<path>
<groupId>io.micronaut</groupId>
<artifactId>micronaut-inject-java</artifactId>
<version>${micronaut.version}</version>
</path>
<path>
<groupId>io.micronaut</groupId>
<artifactId>micronaut-validation</artifactId>
<version>${micronaut.version}</version>
</path>
</annotationProcessorPaths>
</configuration>
<executions>
<execution>
<id>test-compile</id>
<goals>
<goal>testCompile</goal>
</goals>
<configuration>
<compilerArgs>
<arg>-parameters</arg>
</compilerArgs>
<annotationProcessorPaths>
<path>
<groupId>io.micronaut</groupId>
<artifactId>micronaut-inject-java</artifactId>
<version>${micronaut.version}</version>
</path>
<path>
<groupId>io.micronaut</groupId>
<artifactId>micronaut-validation</artifactId>
<version>${micronaut.version}</version>
</path>
</annotationProcessorPaths>
</configuration>
</execution>
</executions>
</plugin>
</plugins>
</build>
</project>
For more information about pom.xml files, see the
Maven documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

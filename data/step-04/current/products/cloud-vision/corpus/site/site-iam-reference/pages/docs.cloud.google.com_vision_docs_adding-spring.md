---
title: "Using Vision with Spring framework \_|\_ Cloud Vision API \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vision/docs/adding-spring
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/docs/setup
source_metadata:
  url: https://docs.cloud.google.com/vision/docs/adding-spring
  title: "Using Vision with Spring framework \_|\_ Cloud Vision API \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Vision API
Guides
Send feedback
Using Vision with Spring framework
Stay organized with collections
Save and categorize content based on your preferences.
Spring Cloud Google Cloud offers convenient libraries
to interface with the Vision API from a Spring application. These libraries
include
Auto-Configuration and helper classes
and Spring Boot Template classes to allow developers to get started
with the Vision API quickly.
If you're already familiar with the
Spring Framework , then
Spring Cloud Vision can
make it easier to work with the Vision API in your application and
reduce the amount of code that you need to write.
This page explains how to add Spring Cloud Vision to a Java
application. For detailed information about the module, see the
Spring Cloud Vision reference .
Dependency setup
To begin using this library, add the spring-cloud-gcp-starter-vision artifact
to your project.
Maven coordinates, using Spring Cloud Google Cloud BOM:
<dependencyManagement>
<dependencies>
<dependency>
<groupId>org.springframework.cloud</groupId>
<artifactId>spring-cloud-gcp-dependencies</artifactId>
<version>1.2.8.RELEASE</version>
<type>pom</type>
<scope>import</scope>
</dependency>
<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-dependencies</artifactId>
<version>${spring.version}</version>
<type>pom</type>
<scope>import</scope>
</dependency>
</dependencies>
</dependencyManagement>
<dependency>
<groupId>org.springframework.cloud</groupId>
<artifactId>spring-cloud-gcp-starter-vision</artifactId>
</dependency>
For more information, see the instructions for setting up a Java development
environment . You do not need to install the Google Cloud Client
Library for Java; the Spring Boot starter installs the client library
automatically.
Image analysis
After configuring the Spring Cloud Google Cloud Vision dependencies on your
classpath, you can immediately begin processing your images by getting
an instance of CloudVisionTemplate using Spring dependency injection .
@Autowired private CloudVisionTemplate cloudVisionTemplate ;
The CloudVisionTemplate is a wrapper around the Vision API
Client Libraries and lets you process images easily through the
Vision API.
For more information about the CloudVisionTemplate features, see
the Cloud Vision template reference page .
The following sections contain code samples for common use cases of
the CloudVisionTemplate . All code snippets come from the Spring and
Cloud Vision sample application .
Getting the classification labels for an image
The code below extracts the classification labels for an image, providing you
with general descriptions of image content.
AnnotateImageResponse response =
this . cloudVisionTemplate . analyzeImage (
this . resourceLoader . getResource ( imageUrl ), Type . LABEL_DETECTION );
Map<String , Float > imageLabels =
response . getLabelAnnotationsList (). stream ()
. collect (
Collectors . toMap (
EntityAnnotation :: getDescription ,
EntityAnnotation :: getScore ,
( u , v ) - > {
throw new IllegalStateException ( String . format ( "Duplicate key %s" , u ));
},
LinkedHashMap :: new ));
Extracting the Text In an Image
The code sample below describes another common operation of extracting the text
from an image.
String textFromImage =
this . cloudVisionTemplate . extractTextFromImage ( this . resourceLoader . getResource ( imageUrl ));
return "Text from image: " + textFromImage ;
What's next
Get started with
Spring Cloud Google Cloud .
Learn more about using Spring Cloud Vision in your
applications .
File a GitHub issue to report a bug or ask a question
about the module.
Get more information about Spring Framework support on
Google Cloud .
Try a codelab to deploy and run an application that uses
Spring Cloud Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

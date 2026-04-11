---
title: "Class VertexAI (1.48.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.VertexAI
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.VertexAI
  title: "Class VertexAI (1.48.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Class VertexAI (1.48.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.48.0 (latest)
1.47.0
1.45.0
1.43.0
1.42.0
1.40.0
1.38.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.30.0
1.28.0
1.27.0
1.24.0
1.23.0
1.22.0
1.20.1
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.0
1.0.0
0.8.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
public class VertexAI implements AutoCloseable
This class holds default settings and credentials to make Vertex AI API calls.
Note: The VertexAI instance will start a service client when the first API call is
made. Please close the VertexAI instance after making any API calls so that clients get closed as
well.
try ( VertexAI vertexAi = new VertexAI ( "my-project" , "us-central1" ); ) {
GenerativeModel model = new GenerativeModel ( "gemini-pro" , vertexAi )
// Do something with the model.
}
Inheritance
java.lang.Object >
VertexAI
Implements
AutoCloseable
Inherited Members
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Constructors
VertexAI()
public VertexAI ()
Constructs a VertexAI instance.
Note: SDK infers location from runtime environment first. If there is no location
inferred from runtime environment, SDK will default location to us-central1 .
SDK will infer projectId from runtime environment and GoogleCredentials.
VertexAI(String projectId, String location)
public VertexAI ( String projectId , String location )
Constructs a VertexAI instance.
Parameters
Name
Description
projectId
String the default project to use when making API calls
location
String the default location to use when making API calls
Methods
close()
public void close ()
Closes the VertexAI instance together with all its instantiated clients.
getApiEndpoint()
public String getApiEndpoint ()
Returns the default endpoint to use when making API calls.
Returns
Type
Description
String
API endpoint in string format.
getCredentials()
public Credentials getCredentials ()
Returns the default credentials to use when making API calls.
Returns
Type
Description
com.google.auth.Credentials
Credentials to use when making API calls.
Exceptions
Type
Description
IOException
getHeaders()
public Map<String , String > getHeaders ()
Returns the headers to use when making API calls.
Returns
Type
Description
Map < String , String >
a map of headers to use when making API calls.
getLlmUtilityClient()
public LlmUtilityServiceClient getLlmUtilityClient ()
Internal Only : This feature is not stable for application use.
Returns the LlmUtilityServiceClient with GRPC or REST, based on the Transport type. The
client will be instantiated when the first API call is made.
Returns
Type
Description
LlmUtilityServiceClient
LlmUtilityServiceClient that makes calls to the backing service through method
calls that map to the API methods.
getLocation()
public String getLocation ()
Returns the default location to use when making API calls.
Returns
Type
Description
String
Location in string format.
getPredictionServiceClient()
public PredictionServiceClient getPredictionServiceClient ()
Internal Only : This feature is not stable for application use.
Returns the PredictionServiceClient with GRPC or REST, based on the Transport type. The
client will be instantiated when the first prediction API call is made.
Returns
Type
Description
PredictionServiceClient
PredictionServiceClient that send requests to the backing service through
method calls that map to the API methods.
getProjectId()
public String getProjectId ()
Returns the default project to use when making API calls.
Returns
Type
Description
String
Project ID in string format.
getTransport()
public Transport getTransport ()
Returns the default Transport layer to use to send API requests.
Returns
Type
Description
Transport
Transport layer used when sending API requests.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

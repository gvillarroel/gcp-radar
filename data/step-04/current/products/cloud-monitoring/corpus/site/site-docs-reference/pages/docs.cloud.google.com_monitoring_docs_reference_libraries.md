---
title: "Monitoring client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/monitoring/docs/reference/libraries
  title: "Monitoring client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Monitoring
Reference
Send feedback
Monitoring client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Monitoring API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
The samples on this page use custom, or user-defined, metrics to illustrate the use
of the client libraries. The system-defined metrics described in the Metrics
list are collected for you. You don't need to write any code
to collect them, although the agent metrics do require the installation of the
Cloud Monitoring agent. For more information on agent metrics, see the
Agent metrics list .
Install the client library
C++
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
C#
In Visual Studio 2013/2015, open the Package Manager Console and run this command:
Install-Package Google.Cloud.Monitoring.V3 -Pre
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/monitoring/apiv3
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven with
a BOM, add the following to your pom.xml file:
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>libraries-bom</artifactId>
<version>26.32.0</version>
<type>pom</type>
<scope>import</scope>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-monitoring</artifactId>
</dependency>
</dependencies>
If you are using Maven
without a BOM, add this to your dependencies:
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .79.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - monitoring < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - monitoring : 3.89.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-monitoring" % "3.89.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/monitoring
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-monitoring
Note: The Monitoring API Client Library requires you install and enable the
gRPC Extension for PHP.
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-monitoring
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-monitoring
For more information, see Setting Up a Ruby Development Environment .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Use the client library
The following example shows how to use the client library.
C++
#include "google/cloud/monitoring/v3/alert_policy_client.h"
#include "google/cloud/project.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 2 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-id \n " ;
return 1 ;
}
namespace monitoring = :: google :: cloud :: monitoring_v3 ;
auto client = monitoring :: AlertPolicyServiceClient (
monitoring :: MakeAlertPolicyServiceConnection ());
auto const project = google :: cloud :: Project ( argv [ 1 ]);
for ( auto a : client . ListAlertPolicies ( project . FullName ())) {
if ( ! a ) throw std :: move ( a ). status ();
std :: cout << a - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
C#
README.md
for instructions on using Visual Studio to build and run this sample C# code.
using System ;
using System.Collections.Generic ;
using Google.Cloud.Monitoring.V3 ;
using Google.Protobuf.WellKnownTypes ;
using Google.Api ;
using Google.Api.Gax.ResourceNames ;
namespace GoogleCloudSamples
{
public class QuickStart
{
public static void Main ( string [] args )
{
// Your Google Cloud Platform project ID.
string projectId = "YOUR-PROJECT-ID" ;
// Create client.
MetricServiceClient metricServiceClient = MetricServiceClient . Create ();
// Initialize request argument(s).
ProjectName name = new ProjectName ( projectId );
// Prepare a data point.
TypedValue salesTotal = new TypedValue
{
DoubleValue = 123.45
};
Point dataPoint = new Point
{
Value = salesTotal
};
// Sets data point's interval end time to current time.
DateTime UnixEpoch = new DateTime ( 1970 , 1 , 1 , 0 , 0 , 0 , DateTimeKind . Utc );
Timestamp timeStamp = new Timestamp
{
Seconds = ( long )( DateTime . UtcNow - UnixEpoch ). TotalSeconds
};
TimeInterval interval = new TimeInterval
{
EndTime = timeStamp
};
dataPoint . Interval = interval ;
// Prepare custom metric.
Metric metric = new Metric
{
Type = "custom.googleapis.com/my_metric"
};
metric . Labels . Add ( "store_id" , "Pittsburgh" );
// Prepare monitored resource.
MonitoredResource resource = new MonitoredResource
{
Type = "gce_instance"
};
resource . Labels . Add ( "project_id" , projectId );
resource . Labels . Add ( "instance_id" , "1234567890123456789" );
resource . Labels . Add ( "zone" , "us-central1-f" );
// Create a new time series using inputs.
TimeSeries timeSeriesData = new TimeSeries
{
Metric = metric ,
Resource = resource
};
timeSeriesData . Points . Add ( dataPoint );
// Add newly created time series to list of time series to be written.
IEnumerable<TimeSeries> timeSeries = new List<TimeSeries> { timeSeriesData };
// Write time series data.
metricServiceClient . CreateTimeSeries ( name , timeSeries );
Console . WriteLine ( "Done writing time series data." );
}
}
}
Go
// Sample monitoring-quickstart writes a data point to Stackdriver Monitoring.
package main
import (
"context"
"fmt"
"log"
"time"
monitoring "cloud.google.com/go/monitoring/apiv3/v2"
"cloud.google.com/go/monitoring/apiv3/v2/monitoringpb"
googlepb "github.com/golang/protobuf/ptypes/timestamp"
metricpb "google.golang.org/genproto/googleapis/api/metric"
monitoredrespb "google.golang.org/genproto/googleapis/api/monitoredres"
)
func main () {
ctx := context . Background ()
// Creates a client.
client , err := monitoring . NewMetricClient ( ctx )
if err != nil {
log . Fatalf ( "Failed to create client: %v" , err )
}
// Sets your Google Cloud Platform project ID.
projectID := "YOUR_PROJECT_ID"
// Prepares an individual data point
dataPoint := & monitoringpb . Point {
Interval : & monitoringpb . TimeInterval {
EndTime : & googlepb . Timestamp {
Seconds : time . Now (). Unix (),
},
},
Value : & monitoringpb . TypedValue {
Value : & monitoringpb . TypedValue_DoubleValue {
DoubleValue : 123.45 ,
},
},
}
// Writes time series data.
if err := client . CreateTimeSeries ( ctx , & monitoringpb . CreateTimeSeriesRequest {
Name : fmt . Sprintf ( "projects/%s" , projectID ),
TimeSeries : [] * monitoringpb . TimeSeries {
{
Metric : & metricpb . Metric {
Type : "custom.googleapis.com/stores/daily_sales" ,
Labels : map [ string ] string {
"store_id" : "Pittsburg" ,
},
},
Resource : & monitoredrespb . MonitoredResource {
Type : "global" ,
Labels : map [ string ] string {
"project_id" : projectID ,
},
},
Points : [] * monitoringpb . Point {
dataPoint ,
},
},
},
}); err != nil {
log . Fatalf ( "Failed to write time series data: %v" , err )
}
// Closes the client and flushes the data to Stackdriver.
if err := client . Close (); err != nil {
log . Fatalf ( "Failed to close client: %v" , err )
}
fmt . Printf ( "Done writing time series data.\n" )
}
Java
import com.google.api. Metric ;
import com.google.api. MonitoredResource ;
import com.google.cloud.monitoring.v3. MetricServiceClient ;
import com.google.monitoring.v3. CreateTimeSeriesRequest ;
import com.google.monitoring.v3. Point ;
import com.google.monitoring.v3. ProjectName ;
import com.google.monitoring.v3. TimeInterval ;
import com.google.monitoring.v3. TimeSeries ;
import com.google.monitoring.v3. TypedValue ;
import com.google.protobuf.util. Timestamps ;
import java.io.IOException ;
import java.util.ArrayList ;
import java.util.HashMap ;
import java.util.List ;
import java.util.Map ;
public class QuickstartSample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
quickstart ( projectId );
}
public static void quickstart ( String projectId ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( MetricServiceClient metricServiceClient = MetricServiceClient . create ()) {
// Prepares an individual data point
TimeInterval interval =
TimeInterval . newBuilder ()
. setEndTime ( Timestamps . fromMillis ( System . currentTimeMillis ()))
. build ();
TypedValue value = TypedValue . newBuilder (). setDoubleValue ( 123.45 ). build ();
Point point = Point . newBuilder (). setInterval ( interval ). setValue ( value ). build ();
List<Point> pointList = new ArrayList <> ();
pointList . add ( point );
ProjectName name = ProjectName . of ( projectId );
// Prepares the metric descriptor
Map<String , String > metricLabels = new HashMap <> ();
metricLabels . put ( "store_id" , "Pittsburg" );
Metric metric =
Metric . newBuilder ()
. setType ( "custom.googleapis.com/stores/daily_sales" )
. putAllLabels ( metricLabels )
. build ();
// Prepares the monitored resource descriptor
Map<String , String > resourceLabels = new HashMap <> ();
resourceLabels . put ( "project_id" , projectId );
MonitoredResource resource =
MonitoredResource . newBuilder (). setType ( "global" ). putAllLabels ( resourceLabels ). build ();
// Prepares the time series request
TimeSeries timeSeries =
TimeSeries . newBuilder ()
. setMetric ( metric )
. setResource ( resource )
. addAllPoints ( pointList )
. build ();
List<TimeSeries> timeSeriesList = new ArrayList <> ();
timeSeriesList . add ( timeSeries );
CreateTimeSeriesRequest request =
CreateTimeSeriesRequest . newBuilder ()
. setName ( name . toString ())
. addAllTimeSeries ( timeSeriesList )
. build ();
// Writes time series data
metricServiceClient . createTimeSeries ( request );
System . out . printf ( "Done writing time series data.%n" );
}
}
}
Node.js
// Imports the Google Cloud client library
const monitoring = require ( ' @google-cloud/monitoring ' );
async function quickstart () {
// Creates a client
const client = new monitoring . MetricServiceClient ();
// TODO(developer): Uncomment and set the following variables
// const projectId = "PROJECT_ID"
// Prepares an individual data point
const dataPoint = {
interval : {
endTime : {
seconds : Date . now () / 1000 ,
},
},
value : {
// The amount of sales
doubleValue : 123.45 ,
},
};
// Prepares the time series request
const request = {
name : client . projectPath ( projectId ),
timeSeries : [
{
// Ties the data point to a custom metric
metric : {
type : 'custom.googleapis.com/stores/daily_sales' ,
labels : {
store_id : 'Pittsburgh' ,
},
},
resource : {
type : 'global' ,
labels : {
project_id : projectId ,
},
},
points : [ dataPoint ],
},
],
};
// Writes time series data
const [ result ] = await client . createTimeSeries ( request );
console . log ( 'Done writing time series data.' , result );
}
quickstart ();
PHP
# Includes the autoloader for libraries installed with composer
require_once __DIR__ . '/vendor/autoload.php';
# Imports the Google Cloud client library
use Google\Api\Metric;
use Google\Api\MonitoredResource;
use Google\Cloud\Monitoring\V3\Client\MetricServiceClient;
use Google\Cloud\Monitoring\V3\CreateTimeSeriesRequest;
use Google\Cloud\Monitoring\V3\Point;
use Google\Cloud\Monitoring\V3\TimeInterval;
use Google\Cloud\Monitoring\V3\TimeSeries;
use Google\Cloud\Monitoring\V3\TypedValue;
use Google\Protobuf\Timestamp;
// These variables are set by the App Engine environment. To test locally,
// ensure these are set or manually change their values.
$projectId = getenv('GCLOUD_PROJECT') ?: 'YOUR_PROJECT_ID';
$instanceId = '1234567890123456789';
$zone = 'us-central1-f';
try {
$client = new MetricServiceClient();
$formattedProjectName = 'projects/' . $projectId;
$labels = [
'instance_id' => $instanceId,
'zone' => $zone,
];
$m = new Metric();
$m->setType('custom.googleapis.com/my_metric');
$r = new MonitoredResource();
$r->setType('gce_instance');
$r->setLabels($labels);
$value = new TypedValue();
$value->setDoubleValue(3.14);
$timestamp = new Timestamp();
$timestamp->setSeconds(time());
$interval = new TimeInterval();
$interval->setStartTime($timestamp);
$interval->setEndTime($timestamp);
$point = new Point();
$point->setValue($value);
$point->setInterval($interval);
$points = [$point];
$timeSeries = new TimeSeries();
$timeSeries->setMetric($m);
$timeSeries->setResource($r);
$timeSeries->setPoints($points);
$createTimeSeriesRequest = (new CreateTimeSeriesRequest())
->setName($formattedProjectName)
->setTimeSeries([$timeSeries]);
$client->createTimeSeries($createTimeSeriesRequest);
print('Successfully submitted a time series' . PHP_EOL);
} finally {
$client->close();
}
Python
from google.cloud import monitoring_v3
import time
client = monitoring_v3 . MetricServiceClient ()
# project_id = 'my-project' # TODO: Update to your project ID.
project_name = f "projects/ { project_id } "
series = monitoring_v3 . TimeSeries ()
series . metric . type = "custom.googleapis.com/my_metric"
series . metric . labels [ "store_id" ] = "Pittsburgh"
series . resource . type = "gce_instance"
series . resource . labels [ "instance_id" ] = "1234567890123456789"
series . resource . labels [ "zone" ] = "us-central1-f"
now = time . time ()
seconds = int ( now )
nanos = int (( now - seconds ) * 10 ** 9 )
interval = monitoring_v3 . TimeInterval (
{ "end_time" : { "seconds" : seconds , "nanos" : nanos }}
)
point = monitoring_v3 . Point ({ "interval" : interval , "value" : { "double_value" : 3.14 }})
series . points = [ point ]
client . create_time_series ( request = { "name" : project_name , "time_series" : [ series ]})
print ( "Successfully wrote time series." )
return True
Ruby
gem "google-cloud-monitoring"
require "google/cloud/monitoring"
# Your Google Cloud Platform project ID
# project_id = "YOUR_PROJECT_ID"
# Example metric label
# metric_label = "my-value"
# Instantiates a client
metric_service_client = Google :: Cloud :: Monitoring . metric_service
project_path = metric_service_client . project_path project : project_id
series = Google :: Cloud :: Monitoring :: V3 :: TimeSeries . new
series . metric = Google :: Api :: Metric . new type : "custom.googleapis.com/my_metric" ,
labels : { "my_key" = > metric_label }
resource = Google :: Api :: MonitoredResource . new type : "gce_instance"
resource . labels [ "project_id" ] = project_id
resource . labels [ "instance_id" ] = "1234567890123456789"
resource . labels [ "zone" ] = "us-central1-f"
series . resource = resource
point = Google :: Cloud :: Monitoring :: V3 :: Point . new
point . value = Google :: Cloud :: Monitoring :: V3 :: TypedValue . new double_value : 3 . 14
now = Time . now
end_time = Google :: Protobuf :: Timestamp . new seconds : now . to_i , nanos : now . nsec
point . interval = Google :: Cloud :: Monitoring :: V3 :: TimeInterval . new end_time : end_time
series . points << point
metric_service_client . create_time_series name : project_path , time_series : [ series ]
puts "Successfully wrote time series."
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-cloud-monitoring on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-monitoring on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-monitoring on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-monitoring on Stack Overflow
Source code
Node.js
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-monitoring on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-monitoring on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-monitoring on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

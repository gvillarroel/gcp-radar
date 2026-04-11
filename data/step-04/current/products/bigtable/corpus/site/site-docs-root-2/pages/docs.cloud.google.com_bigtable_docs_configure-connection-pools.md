---
title: "Configure connection pools \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/configure-connection-pools
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/configure-connection-pools
  title: "Configure connection pools \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Configure connection pools
Some Cloud Bigtable client libraries let you configure the number of gRPC
channels in a client's connection pool, also known as a channel pool. In most
cases, the default configuration is correct, and there is no need to change
it.
Connection pools are automatically resized as needed when you use the
Cloud Bigtable client library for Java version 2.23.0 or later, and when you
use the Cloud Bigtable HBase client for Java version 2.9.1 or later.
This page describes how to determine the optimal connection pool size for your
application, and it presents code snippets that show how to configure the
connection pools.
Before you read this page, read the overview of
Bigtable connection pools to learn how they
work and whether you should change yours.
The following client libraries offer connection pooling and let you configure
the number of pools:
Go client library for Cloud Bigtable
Cloud Bigtable HBase client for Java
Cloud Bigtable client library for Java
Cloud Bigtable C++ client library
Determine the best connection pool size
Ideally, to leave room for traffic fluctuations, a connection pool has about
twice the number of connections it takes for maximum saturation. Because a
connection can handle a maximum of 100 concurrent requests, between 10 and 50
outstanding requests per connection is optimal. This concept is described in
more detail in Connection pools .
Monitor your traffic after making changes and adjust the number of
connections in your pool if necessary.
The following steps help you calculate the optimal number of connections in
your channel pool using client-side metrics such as those available from
OpenCensus .
From your client-side metrics, gather the following information:
The maximum number of queries per second (QPS) per client when your
application is running a typical workload.
The average latency (the response time for a single request) in ms.
Determine the number of requests that you can send serially per second by
dividing 1,000 by the average latency value.
Divide the QPS in seconds by the number of serial requests per second.
Divide the result by 50 requests per channel to determine the minimum
optimal channel pool size. (If your calculation is less than 2, use at
least 2 channels anyway, to ensure redundancy.)
Divide the same result by 10 requests per channel to determine the maximum
optimal channel pool size.
These steps are expressed in the following equations:
(QPS sec ÷ (1,000 ÷ latency ms)) ÷ 50 streams = Minimum optimal
number of connections
(QPS sec ÷ (1,000 ÷ latency ms)) ÷ 10 streams = Maximum optimal
number of connections
Example
Your application typically sends 50,000 requests per second, and the
average latency is 10 ms. Divide 1,000 by 10 ms to determine that you can send
100 requests serially per second. Divide that number into 50,000 to get the
parallelism needed to send 50,000 QPS: 500. Each channel can have at most
100 requests out concurrently, and your target channel utilization is between
10 and 50 concurrent streams. Therefore, to calculate the minimum, divide 500
by 50 to get 10. To find the maximum, divide 500 by 10 to get 50. This means
that your channel pool size for this example should be between 10 and 50
connections.
Set the pool size
The following code samples demonstrate how to configure the number of pools
in the client libraries that let you set the pool size.
Go
import (
"context"
"fmt"
"io"
"cloud.google.com/go/bigtable"
"google.golang.org/api/option"
)
func configureConnectionPool ( w io . Writer , projectID , instanceID string ) error {
// projectID := "my-project-id"
// instanceID := "my-instance-id"
ctx := context . Background ()
// Set up Bigtable data operations client.
poolSize := 10
client , err := bigtable . NewClient ( ctx , projectID , instanceID , option . WithGRPCConnectionPool ( poolSize ))
defer client . Close ()
if err != nil {
return fmt . Errorf ( "bigtable.NewClient: %w" , err )
}
fmt . Fprintf ( w , "Connected with pool size of %d" , poolSize )
return nil
}
HBase
This sample is applicable only for client library versions earlier than
2.9.1, when automatic resizing was introduced.
import static com.google.cloud.bigtable.hbase.BigtableOptionsFactory.BIGTABLE_DATA_CHANNEL_COUNT_KEY ;
import com.google.cloud.bigtable.hbase.BigtableConfiguration ;
import org.apache.hadoop.conf.Configuration ;
import org.apache.hadoop.hbase.client.Connection ;
public class ConfigureConnectionPool {
public static void configureConnectionPool ( String projectId , String instanceId ) {
// String projectId = "my-project-id";
// String instanceId = "my-instance-id";
Configuration config = BigtableConfiguration . configure ( projectId , instanceId );
config . setInt ( BIGTABLE_DATA_CHANNEL_COUNT_KEY , 10 );
try ( Connection connection = BigtableConfiguration . connect ( config )) {
int poolSize = connection . getConfiguration (). getInt ( BIGTABLE_DATA_CHANNEL_COUNT_KEY , 0 );
System . out . println ( String . format ( "Connected with pool size of %d" , poolSize ));
} catch ( Exception e ) {
System . out . println ( "Error during ConfigureConnectionPool: \n" + e . toString ());
}
}
}
Java
This sample is applicable only for client library versions earlier than
2.23.0, when automatic resizing was introduced.
import com.google.api.gax.grpc. InstantiatingGrpcChannelProvider ;
import com.google.cloud.bigtable.data.v2. BigtableDataClient ;
import com.google.cloud.bigtable.data.v2. BigtableDataSettings ;
import com.google.cloud.bigtable.data.v2.stub.EnhancedBigtableStubSettings ;
import java.io.IOException ;
public class ConfigureConnectionPool {
public static void configureConnectionPool ( String projectId , String instanceId ) {
// String projectId = "my-project-id";
// String instanceId = "my-instance-id";
BigtableDataSettings . Builder settingsBuilder =
BigtableDataSettings . newBuilder (). setProjectId ( projectId ). setInstanceId ( instanceId );
settingsBuilder
. stubSettings ()
. setTransportChannelProvider (
EnhancedBigtableStubSettings . defaultGrpcTransportProviderBuilder ()
. setPoolSize ( 10 )
. build ());
BigtableDataSettings settings = settingsBuilder . build ();
try ( BigtableDataClient dataClient = BigtableDataClient . create ( settings )) {
InstantiatingGrpcChannelProvider provider =
( InstantiatingGrpcChannelProvider )
settings . getStubSettings (). getTransportChannelProvider ();
int poolSize = provider . toBuilder (). getPoolSize ();
System . out . println ( String . format ( "Connected with pool size of %d" , poolSize ));
} catch ( IOException e ) {
System . out . println ( "Error during ConfigureConnectionPool: \n" + e . toString ());
}
}
}
C++
namespace cbt = :: google :: cloud :: bigtable ;
namespace gc = :: google :: cloud ;
[]( std :: string const & project_id , std :: string const & instance_id ,
std :: string const & table_id ) {
auto constexpr kPoolSize = 10 ;
auto options = gc :: Options {}. set<gc :: GrpcNumChannelsOption > ( kPoolSize );
cbt :: Table table ( cbt :: MakeDataConnection ( options ),
cbt :: TableResource ( project_id , instance_id , table_id ));
std :: cout << "Connected with channel pool size of " << kPoolSize << " \n " ;
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

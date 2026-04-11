---
title: "Class Publisher.Builder (1.149.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder
  title: "Class Publisher.Builder (1.149.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class Publisher.Builder (1.149.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.149.0 (latest)
1.148.0
1.147.0
1.145.0
1.143.1
1.142.0
1.141.5
1.140.2
1.139.4
1.138.0
1.137.1
1.136.1
1.135.0
1.134.2
1.133.1
1.132.2
1.131.0
1.130.0
1.129.6
1.127.3
1.126.6
1.125.13
1.123.18
1.122.2
1.121.1
1.120.24
1.119.1
1.118.0
1.117.0
1.116.4
1.115.5
public static final class Publisher . Builder
A builder of Publisher s.
Inheritance
java.lang.Object >
Publisher.Builder
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
Static Methods
getDefaultBatchingSettings()
public static BatchingSettings getDefaultBatchingSettings ()
Returns the default BatchingSettings used by the client if settings are not provided.
Returns
Type
Description
BatchingSettings
Methods
build()
public Publisher build ()
Returns
Type
Description
Publisher
Exceptions
Type
Description
IOException
setBatchingSettings(BatchingSettings batchingSettings)
public Publisher . Builder setBatchingSettings ( BatchingSettings batchingSettings )
Parameter
Name
Description
batchingSettings
BatchingSettings
Returns
Type
Description
Publisher.Builder
setChannelProvider(TransportChannelProvider channelProvider)
public Publisher . Builder setChannelProvider ( TransportChannelProvider channelProvider )
ChannelProvider to use to create Channels, which must point at Cloud Pub/Sub
endpoint.
For performance, this client benefits from having multiple underlying connections. See
com.google.api.gax.grpc.InstantiatingGrpcChannelProvider.Builder#setPoolSize(int) .
Parameter
Name
Description
channelProvider
TransportChannelProvider
Returns
Type
Description
Publisher.Builder
setCompressionBytesThreshold(long compressionBytesThreshold)
public Publisher . Builder setCompressionBytesThreshold ( long compressionBytesThreshold )
Sets the threshold (in bytes) above which messages are compressed for transport. Only takes
effect if setEnableCompression(true) is also called."
Parameter
Name
Description
compressionBytesThreshold
long
Returns
Type
Description
Publisher.Builder
setCredentialsProvider(CredentialsProvider credentialsProvider)
public Publisher . Builder setCredentialsProvider ( CredentialsProvider credentialsProvider )
CredentialsProvider to use to create Credentials to authenticate calls.
Parameter
Name
Description
credentialsProvider
CredentialsProvider
Returns
Type
Description
Publisher.Builder
setEnableCompression(boolean enableCompression)
public Publisher . Builder setEnableCompression ( boolean enableCompression )
Gives the ability to enable transport compression.
Parameter
Name
Description
enableCompression
boolean
Returns
Type
Description
Publisher.Builder
setEnableMessageOrdering(boolean enableMessageOrdering)
public Publisher . Builder setEnableMessageOrdering ( boolean enableMessageOrdering )
Sets the message ordering option.
Parameter
Name
Description
enableMessageOrdering
boolean
Returns
Type
Description
Publisher.Builder
setEnableOpenTelemetryTracing(boolean enableOpenTelemetryTracing)
public Publisher . Builder setEnableOpenTelemetryTracing ( boolean enableOpenTelemetryTracing )
Gives the ability to enable Open Telemetry Tracing
Parameter
Name
Description
enableOpenTelemetryTracing
boolean
Returns
Type
Description
Publisher.Builder
setEndpoint(String endpoint)
public Publisher . Builder setEndpoint ( String endpoint )
Gives the ability to override the gRPC endpoint.
Parameter
Name
Description
endpoint
String
Returns
Type
Description
Publisher.Builder
setExecutorProvider(ExecutorProvider executorProvider)
public Publisher . Builder setExecutorProvider ( ExecutorProvider executorProvider )
Gives the ability to set a custom executor to be used by the library.
Parameter
Name
Description
executorProvider
ExecutorProvider
Returns
Type
Description
Publisher.Builder
setHeaderProvider(HeaderProvider headerProvider)
public Publisher . Builder setHeaderProvider ( HeaderProvider headerProvider )
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Sets the static header provider. The header provider will be called during client
construction only once. The headers returned by the provider will be cached and supplied as
is for each request issued by the constructed client. Some reserved headers can be overridden
(e.g. Content-Type) or merged with the default value (e.g. User-Agent) by the underlying
transport layer.
Parameter
Name
Description
headerProvider
HeaderProvider the header provider
Returns
Type
Description
Publisher.Builder
the builder
setOpenTelemetry(OpenTelemetry openTelemetry)
public Publisher . Builder setOpenTelemetry ( OpenTelemetry openTelemetry )
Sets the instance of OpenTelemetry for the Publisher class.
Parameter
Name
Description
openTelemetry
io.opentelemetry.api.OpenTelemetry
Returns
Type
Description
Publisher.Builder
setRetrySettings(RetrySettings retrySettings)
public Publisher . Builder setRetrySettings ( RetrySettings retrySettings )
Configures the Publisher's retry parameters.
Parameter
Name
Description
retrySettings
RetrySettings
Returns
Type
Description
Publisher.Builder
setTransform(ApiFunction<PubsubMessage,PubsubMessage> messageTransform)
public Publisher . Builder setTransform ( ApiFunction<PubsubMessage , PubsubMessage > messageTransform )
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Gives the ability to set an ApiFunction that will transform the PubsubMessage
before it is sent
Parameter
Name
Description
messageTransform
ApiFunction < PubsubMessage , PubsubMessage >
Returns
Type
Description
Publisher.Builder
setUniverseDomain(String universeDomain)
public Publisher . Builder setUniverseDomain ( String universeDomain )
Gives the ability to override the universe domain.
Parameter
Name
Description
universeDomain
String
Returns
Type
Description
Publisher.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]

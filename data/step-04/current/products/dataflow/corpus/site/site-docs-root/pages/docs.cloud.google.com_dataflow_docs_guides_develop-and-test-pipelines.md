---
title: "Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines
  title: "Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Develop and test Dataflow pipelines
Stay organized with collections
Save and categorize content based on your preferences.
This page provides best practices for developing
and testing your Dataflow pipeline.
Note: The Apache Beam examples in this page use Java.
Overview
The way that the code for your pipeline is implemented has a significant
influence on how well the pipeline performs in production. To help you create
pipeline code that works correctly and efficiently, this document explains the
following:
Pipeline runners to support code execution in the different stages
of development and deployment.
Deployment environments that let you run pipelines during development,
testing, preproduction, and production.
Open source pipeline code and templates that you can use as is, or as
the basis for new pipelines to accelerate code development.
A best-practices approach for testing pipeline code. First, this
document provides an overview that includes the scope and relationship of
different test types, such as unit tests, integration tests, and end-to-end
tests. Second, each type of test is explored in detail, including methods
to create and integrate with test data, and which pipeline runners to use
for each test.
Pipeline runners
During development and testing, you use different Apache Beam runners to run
pipeline code. The Apache Beam SDK provides a
Direct Runner
for local development and testing. Your release automation tooling can also use
the Direct Runner for unit tests and integration tests. For example, you can use
the Direct Runner within your
continuous integration (CI)
pipeline.
Pipelines that are deployed to Dataflow use the
Dataflow Runner ,
which runs your pipeline in production-like environments. Additionally, you can use the
Dataflow Runner for ad hoc development testing and
for end-to-end pipeline tests.
Although this page focuses on running pipelines built using the
Apache Beam Java SDK, Dataflow also supports Apache Beam pipelines that
were developed using Python and Go. The Apache Beam Java, Python, and Go SDKs are
generally available
for Dataflow.
SQL developers can also use
Apache Beam SQL
to create pipelines that use familiar SQL dialects.
Set up a deployment environment
To separate users, data, code, and other resources across different stages of
development, create deployment environments. When possible,
to provide isolated environments for the different stages of pipeline
development, use separate
Google Cloud projects .
The following sections describe a typical set of deployment environments.
Local environment
The local environment is a developer's workstation. For development and rapid
testing, use the Direct Runner to run pipeline code locally.
Pipelines that are run locally using the Direct Runner can interact with
remote Google Cloud resources, such as Pub/Sub topics or
BigQuery tables. Give individual developers separate
Google Cloud projects so that they have a sandbox for ad hoc testing with
Google Cloud services.
Some Google Cloud services, such as
Pub/Sub
and
Bigtable ,
provide emulators for local development. You can use these emulators with the
Direct Runner to enable end-to-end local development and testing.
Sandbox environment
The sandbox environment is a Google Cloud project that provides developers with
access to Google Cloud services during code development. Pipeline
developers can share a Google Cloud project with other developers, or use their own
individual projects. Using individual projects reduces planning complexity
relating to shared resource usage and quota management.
Developers use the sandbox environment to perform ad hoc pipeline execution
with the
Dataflow Runner .
The sandbox environment is useful for debugging and testing code against a
production runner during the code development phase. For
example, ad hoc pipeline execution lets developers do the following:
Observe the effect of code changes on scaling behavior.
Understand potential differences between the behavior of the Direct
Runner and the Dataflow Runner.
Understand how Dataflow applies
graph optimizations .
For ad hoc testing, developers can deploy code from their local environment in
order to run Dataflow within their sandbox environment.
Preproduction environment
The preproduction environment is for development phases that need to run in
production-like conditions, such as end-to-end testing. Use a separate project
for the preproduction environment and configure it to be as similar to production
as possible. Similarly, to allow end-to-end tests with production-like scale,
make Google Cloud project quotas for Dataflow and other
services as similar as possible to the production environment.
Depending on your requirements, you can further separate preproduction into
multiple environments. For example, a quality control environment can support
the work of quality analysts to test service level objectives (SLOs)
such as data correctness, freshness, and performance under different workload
conditions.
End-to-end tests
include integration with data sources and sinks within the scope of testing.
Consider how to make these available within the preproduction environment.
You can store test data in the preproduction environment itself. For example,
test data is stored in a Cloud Storage bucket with your input data. In other
cases, test data might originate from outside the preproduction environment,
such as a Pub/Sub topic through a separate subscription that's
in the production environment. For streaming pipelines, you can also run
end-to-end tests using generated data, for example, using the Dataflow
Streaming Data Generator
to emulate production-like data characteristics and volumes.
For streaming pipelines, use the preproduction environment to test
pipeline updates
before any changes are made to production. It's important to
test and verify update procedures for streaming pipelines, particularly if
you need to coordinate multiple steps, such as when
running parallel pipelines to avoid downtime.
Production environment
The production environment is a dedicated Google Cloud project.
Continuous delivery copies deployment artifacts to the production environment
when all end-to-end tests have passed.
Development best practices
See Dataflow pipeline best practices .
Test your pipeline
In software development, unit tests, integration tests, and end-to-end tests
are common types of software testing. These testing types are also applicable to
data pipelines.
The Apache Beam SDK provides functionality to enable these tests. Ideally,
each type of test targets a different deployment environment. The following
diagram illustrates how
unit tests, integration tests, and end-to-end tests apply to different parts
of your pipeline and data.
The diagram shows the scope of different tests and how they relate to
transforms ( DoFn and PTransform subclasses), pipelines, data sources, and
data sinks.
The following sections describe how various formal software tests apply to data
pipelines using Dataflow. As you read through this section, refer
back to the diagram to understand how the different types of tests are related.
Data sampling
To observe the data at each step of a Dataflow pipeline, enable
data sampling during testing. This
lets you view the outputs of transforms, to ensure the output is correct.
Unit tests
Unit tests assess the correct functioning of DoFn subclasses and
composite transforms
( PTransform subclasses) by comparing the output of those transforms with a
verified set of data inputs and outputs. Typically, developers can run these
tests in the local environment. The tests can also run automatically through
unit-test automation using continuous integration (CI) in the build
environment.
The Direct Runner runs unit tests using a smaller subset of reference
test data that focuses on testing the business logic of your transforms. The
test data must be small enough to fit into local memory on the machine that
runs the test.
The Apache Beam SDK provides a JUnit rule called
TestPipeline
for unit-testing individual transforms ( DoFn subclasses), composite transforms
( PTransform subclasses), and entire pipelines. You can use TestPipeline on a
Apache Beam pipeline runner such as the Direct Runner or the
Dataflow Runner to apply assertions on the contents of
PCollection objects using
PAssert ,
as shown in the following code snippet of a
JUnit test class :
@Rule
public final transient TestPipeline p = TestPipeline . create ();
@Test
@Category ( NeedsRunner . class )
public void myPipelineTest () throws Exception {
final PCollection<String> pcol = p . apply (...)
PAssert . that ( pcol ). containsInAnyOrder (...);
p . run ();
}
Unit tests for individual transforms
By factoring your code into reusable transforms, for example, as top-level
or static nested classes, you can create targeted tests for different parts of
your pipeline. Aside from the benefits of testing, reusable transforms enhance
code maintainability and reusability by naturally encapsulating the business
logic of your pipeline into component parts. In contrast, testing individual
parts of your pipeline might be difficult if the pipeline uses anonymous inner
classes to implement transforms.
The following Java snippet shows the implementation of transforms as anonymous
inner classes, which doesn't easily allow testing.
PipelineOptions options = PipelineOptionsFactory.create();
Pipeline p = Pipeline.create(options)
PCollection<Integer> output =
p.apply("Read from text", TextIO.Read.from(...))
.apply("Split words", ParDo.of(new DoFn() {
// Untestable anonymous transform 1
}))
.apply("Generate anagrams", ParDo.of(new DoFn() {
// Untestable anonymous transform 2
}))
.apply("Count words", Count.perElement());
Compare the previous example with the following one, where the anonymous inner
classes are refactored into named concrete DoFn subclasses. You can create
individual unit tests for each concrete DoFn subclass that makes up the
end-to-end pipeline.
PipelineOptions options = PipelineOptionsFactory.create();
Pipeline p = Pipeline.create(options)
PCollection<Integer> output =
p.apply("Read from text", TextIO.Read.from(...))
.apply("Split words", ParDo.of(new SplitIntoWordsFn()))
.apply("Generate anagrams", ParDo.of(new GenerateAnagramsFn()))
.apply("Count words", Count.perElement());
Testing each DoFn subclass is similar to unit testing a batch
pipeline that contains a single transform. Use the Create transform to
create a PCollection object of test data, and then pass it to the DoFn
object. Use PAssert to assert that the contents of the PCollection
object are correct. The following Java code example uses the PAssert class to
check for correct output form.
@Rule
public final transient TestPipeline p = TestPipeline . create ();
@Test
@Category ( NeedsRunner . class )
public void testGenerateAnagramsFn () {
// Create the test input
PCollection<String> words = p . apply ( Create . of ( "friend" ));
// Test a single DoFn using the test input
PCollection<String> anagrams =
words . apply ( "Generate anagrams" , ParDo . of ( new GenerateAnagramsFn ()));
// Assert correct output from
PAssert . that ( anagrams ). containsInAnyOrder (
"finder" , "friend" , "redfin" , "refind" );
p . run ();
}
Integration tests
Integration tests verify the correct functioning of your entire pipeline.
Consider the following types of integration tests:
A transform integration test that assesses the integrated functionality
of all the individual transforms that make up your data pipeline.
Think of transform integration tests as a unit test for your
entire pipeline, excluding integration with external data sources and sinks.
The Apache Beam SDK provides methods to supply test data to your data pipeline
and to verify the results of processing. The Direct Runner is used
to run transform integration tests.
A system integration test that assesses your data pipeline's integration
with live data sources and sinks. For your pipeline to communicate with
external systems, you need to configure your tests with appropriate
credentials to access external services. Streaming pipelines run
indefinitely, so you need to decide when and how to stop the running
pipeline. By using the Direct Runner to run system integration tests, you
quickly verify the integration between your pipeline and other systems
without needing to submit a Dataflow job and wait for it
to finish.
Note: A small
end-to-end test
is often run in place of a system integration test. The end-to-end test
uses the Dataflow Runner and a small test dataset to verify
that the complete pipeline functions correctly, including its integration
with data sources, data sinks, and other external systems.
Design transform and system integration tests to
provide rapid defect detection and feedback without slowing developer
productivity. For longer-running tests, such as those that run as
Dataflow jobs, you might want to use an end-to-end test that
runs less frequently.
Think of a data pipeline as one or more related transforms. You
can create an encapsulating composite transform for your pipeline and
use
TestPipeline
to perform an integration test of your entire pipeline. Depending on whether you
want to test the pipeline in batch or streaming mode, you supply test data using
either the
Create
or
TestStream transforms.
Use test data for integration tests
In your production environment, your pipeline likely integrates with different
data sources and sinks. However, for unit tests and transformation integration
tests, focus on verifying the business logic of your pipeline code
by providing test inputs and verifying the output directly. In addition to
simplifying your tests, this approach allows you to isolate pipeline-specific
issues from those that might be caused by data sources and sinks.
Test batch pipelines
For batch pipelines, use the Create transform to create a PCollection
object of your input test data out of a standard in-memory collection, such as a
Java List object. Using the Create transform is appropriate if your test
data is small enough to include in code. You can then use PAssert on the
output PCollection objects to determine the correctness of your pipeline code.
This approach is supported by the Direct Runner and by the
Dataflow Runner.
The following Java code snippet shows assertions against output PCollection
objects from a composite transform that includes some or all of the individual
transforms that constitute a pipeline ( WeatherStatsPipeline ). The approach is
similar to unit-testing individual transforms in a pipeline.
private class WeatherStatsPipeline extends
PTransform<PCollection<Integer> , PCollection<WeatherSummary> > {
@Override
public PCollection<WeatherSummary> expand ( PCollection<Integer> input ) {
// Pipeline transforms …
}
}
@Rule
public final transient TestPipeline p = TestPipeline . create ();
@Test
@Category ( NeedsRunner . class )
public void testWeatherPipeline () {
// Create test input consisting of temperature readings
PCollection<Integer> tempCelsius =
p . apply ( Create . of ( 24 , 22 , 20 , 22 , 21 , 21 , 20 ));
// CalculateWeatherStats calculates the min , max , and average temperature
PCollection<WeatherSummary> result =
tempCelsius . apply ( "Calculate weather statistics" , new WeatherStatsPipeline ());
// Assert correct output from CalculateWeatherStats
PAssert . thatSingleton ( result ). isEqualTo ( new WeatherSummary . Builder ()
. withAverageTemp ( 21 )
. withMaxTemp ( 24 )
. withMinTemp ( 20 )
. build ());
p . run ();
}
To test windowing behavior, you can also use the Create transform to create
elements with timestamps, as shown in the following code snippet:
private static final Duration WINDOW_DURATION = Duration . standardMinutes ( 3 );
@Rule
public final transient TestPipeline p = TestPipeline . create ();
@Test
@Category ( NeedsRunner . class )
public void testWindowedData () {
PCollection<String> input =
p . apply (
Create . timestamped (
TimestampedValue . of ( "a" , new Instant ( 0 L )),
TimestampedValue . of ( "a" , new Instant ( 0 L )),
TimestampedValue . of ( "b" , new Instant ( 0 L )),
TimestampedValue . of ( "c" , new Instant ( 0 L )),
TimestampedValue . of ( "c" , new Instant ( 0 L ). plus ( WINDOW_DURATION )))
. withCoder ( StringUtf8Coder . of ()));
PCollection<KV<String , Long >> windowedCount =
input
. apply ( Window . into ( FixedWindows . of ( WINDOW_DURATION )))
. apply ( Count . perElement ());
PAssert . that ( windowedCount )
. containsInAnyOrder (
// Output from first window
KV . of ( "a" , 2 L ),
KV . of ( "b" , 1 L ),
KV . of ( "c" , 1 L ),
// Output from second window
KV . of ( "c" , 1 L ));
p . run ();
}
Test streaming pipelines
Streaming pipelines contain assumptions that define how to handle unbounded
data. These assumptions are often about the timeliness of data in
real-world conditions, and therefore have an impact on correctness depending on
whether the assumptions prove to be true or false. Integration tests for
streaming pipelines ideally include tests that simulate the
non-deterministic nature of streaming data arrival.
To
enable such tests ,
the Apache Beam SDK provides the
TestStream
class to model the effects of element timings (early, on-time, or late data) on
the results of your data pipeline. Use these tests together with the
PAssert
class to verify against expected results.
TestStream is supported by the Direct Runner and the
Dataflow Runner. The following code sample creates a TestStream
transform:
final Duration WINDOW_DURATION = Duration . standardMinutes ( 3 );
@Rule
public final transient TestPipeline p = TestPipeline . create ();
@Test
@Category ( NeedsRunner . class )
public void testDroppedLateData () {
TestStream<String> input = TestStream . create ( StringUtf8Coder . of ())
// Add elements arriving before the watermark
. addElements (
TimestampedValue . of ( "a" , new Instant ( 0 L )),
TimestampedValue . of ( "a" , new Instant ( 0 L )),
TimestampedValue . of ( "b" , new Instant ( 0 L )),
TimestampedValue . of ( "c" , new Instant ( 0 L ). plus ( Duration . standardMinutes ( 3 ))))
// Advance the watermark past the end of the window
. advanceWatermarkTo ( new Instant ( 0 L ). plus ( WINDOW_DURATION ). plus ( Duration . standardMinutes ( 1 )))
// Add elements which will be dropped due to lateness
. addElements (
TimestampedValue . of ( "c" , new Instant ( 0 L )))
// Advance the watermark to infinity which will close all windows
. advanceWatermarkToInfinity ();
PCollection<KV<String , Long >> windowedCount =
p . apply ( input )
. apply ( Window . into ( FixedWindows . of ( WINDOW_DURATION )))
. apply ( Count . perElement ());
PAssert . that ( windowedCount )
. containsInAnyOrder (
// Output from first window
KV . of ( "a" , 2 L ),
KV . of ( "b" , 1 L ),
KV . of ( "c" , 1 L ));
p . run ();
}
For more information about TestStream , see
Testing Unbounded Pipelines in Apache Beam .
For more information about how to use the Apache Beam SDK for unit testing, see the
Apache Beam documentation .
Use Google Cloud services in integration tests
The
Direct Runner
can integrate with Google Cloud services, so ad hoc tests in the local environment and system integration tests
can use Pub/Sub, BigQuery, and other services as
needed. When you use the Direct Runner, your pipeline uses
Application Default Credentials (ADC))
to obtain credentials. How you set up ADC depends on where your pipeline is
running. For more information, see
Set up Application Default Credentials .
You must grant sufficient permissions to the account the pipeline is using for
any required resources before you run your pipeline. For more details, see
Dataflow security and permissions .
For entirely local integration tests, you can use local emulators for some
Google Cloud services. Local emulators are available for
Pub/Sub
and
Bigtable .
For system integration testing of streaming pipelines, you can use the
setBlockOnRun
method (defined in the DirectOptions interface) to have the Direct Runner run your pipeline asynchronously.
Otherwise, pipeline execution blocks the calling parent process (for
example, a script in your build pipeline) until the pipeline is manually
stopped. If you run the pipeline asynchronously, you can use the returned
PipelineResult
instance to cancel execution of the pipeline, as shown in the following code
example:
public interface StreamingIntegrationTestOptions extends
DirectOptions , StreamingOptions , MyOtherPipelineOptions {
...
}
@Rule
public final transient TestPipeline p = TestPipeline . create ();
@Test
@Category ( NeedsRunner . class )
public void testNonBlockingPipeline () {
StreamingIntegrationTestOptions options =
p . getOptions (). as ( StreamingIntegrationOptions . class );
options . setBlockOnRun ( false ); // Set non - blocking pipeline execution
options . setStreaming ( true ); // Set streaming mode
p . apply (...); // Apply pipeline transformations
PipelineResult result = p . run (); // Run the pipeline
// Generate input , verify output , etc
...
// Later on , cancel the pipeline using the previously returned
result . cancel ();
}
End-to-end tests
End-to-end tests verify the correct operation of your end-to-end pipeline by
running it on the Dataflow Runner under conditions that closely
resemble production. The tests verify that the business logic functions
correctly using the Dataflow Runner and test whether the
pipeline performs as expected under production-like loads. You typically run
end-to-end tests in a dedicated Google Cloud project that is designated as
the preproduction environment.
To test your pipeline at different scales, use different types of end-to-end
tests, for example:
Run small-scale end-to-end tests using a small proportion (such as one percent)
of your test dataset to quickly validate pipeline functionality in the
preproduction environment.
Run large-scale end-to-end tests using a full test dataset to validate
pipeline functionality under production-like data volumes and conditions.
For streaming pipelines, we recommend that you run test pipelines in parallel
with your production pipeline if they can use the same data. This process lets you
compare results and operational behavior, such as autoscaling and performance.
End-to-end tests help to predict how well your pipeline will meet your
production SLOs.
The preproduction environment tests your pipeline under
production-like conditions. Within end-to-end tests, pipelines run using the
Dataflow Runner to process complete reference datasets that match
or closely resemble datasets in production.
It might not be possible to generate synthetic data for testing that
accurately simulates real data. To address this problem, one approach is to use
cleansed extracts from production data sources to create reference datasets, in
which any sensitive data is de-identified through appropriate transformations.
We recommend using
Sensitive Data Protection
for this purpose. Sensitive Data Protection can detect sensitive data from a range of
content types and data sources and apply a range of de-identification techniques
including redaction, masking, format preserving encryption, and date-shifting.
Differences in end-to-end tests for batch and streaming pipelines
Before you run a full end-to-end test against a large test dataset, you
might want to run a test with a smaller percentage of the test data (such
as one percent) and verify expected behavior in a shorter amount of time. Like
with integration tests using the Direct Runner, you can use PAssert on
PCollection objects when you run pipelines using the
Dataflow Runner. For more information about PAssert , see the
Unit tests section on this page.
Depending on your use case, verifying very large output from end-to-end tests
might be impractical, costly, or otherwise challenging. In that case, you can
verify representative samples from the output result set instead. For example,
you can use BigQuery to sample and compare output rows with a
reference dataset of expected results.
For streaming pipelines, simulating realistic streaming conditions with
synthetic data might be challenging. A common way to provide
streaming data for end-to-end tests is to integrate testing with production data
sources. If you're using Pub/Sub as a data source, you can enable
a separate datastream for end-to-end tests through additional subscriptions to
existing topics. You can then compare the results of different pipelines that
consume the same data, which is useful for verifying candidate pipelines against
other preproduction and production pipelines.
The following diagram shows how this method allows a production pipeline and
test pipeline to run in parallel in different
deployment environments .
In the diagram, both pipelines read from the same Pub/Sub topic,
but they use separate subscriptions. This setup allows the two pipelines to process
the same data independently and allows you to compare the results. The test
pipeline uses a separate service account from the production project, and
therefore avoids using the Pub/Sub subscriber quota for the
production project.
Unlike batch pipelines, streaming pipelines continue to run until they are
explicitly cancelled. In end-to-end tests, you need to decide whether to leave
the pipeline running, perhaps until the next end-to-end test is run, or cancel
the pipeline at a point that represents test completion so that you can inspect
the results.
The type of test data you use influences this decision. For example, if you use
a bounded set of test data that is provided to the streaming pipeline, you might
cancel the pipeline when all
elements have completed processing. Alternatively, If you use a real data source,
such as an existing Pub/Sub topic that is used in production, or
if you otherwise generate test data continually, you might want to keep test
pipelines running over a longer period. The latter lets you compare the behavior
against the production environment, or even against other test pipelines.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

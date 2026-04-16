---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.851Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "VPC Service Controls integration"
feature_slug: "vpc-service-controls-integration"
latest_feature_date: "2019-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks"
  - "https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility"
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
keywords:
  - "vpc"
  - "controls"
  - "integration"
  - "dataflow"
  - "integrates"
  - "perimeter"
  - "protection"
---

# VPC Service Controls integration

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow integrates with VPC Service Controls for service perimeter protection; Dataflow integrates with VPC Service Controls for service perimeter protection.

## Extended Definition

Dataflow integrates with VPC Service Controls for service perimeter protection; Dataflow integrates with VPC Service Controls for service perimeter protection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks)
- [https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility](https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility)
- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)

## Supporting Pages

### "Specify a network and subnetwork \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks)
- Source ID: `site-docs-reference-2`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow VPC Service Controls help protect against accidental or targeted action by external entities or by insider entities, which helps to minimize unwarranted data exfiltration risks.
- You can use VPC Service Controls to create perimeters that protect the resources and data of services that you explicitly specify.
- To learn about the limitations when using Dataflow with VPC Service Controls, see Supported products and limitations .
- Java mvn compile exec:java \ -Dexec.mainClass = INPUT PATH \ -Dexec.args = "--project= HOST PROJECT ID \ --stagingLocation=gs:// STORAGE BUCKET /staging/ \ --output=gs:// STORAGE BUCKET /output \ --region= REGION \ --runner=DataflowRunner \ --subnetwork=https://www.googleapis.com/compute/v1/projects/ HOST PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK NAME " Python python -m INPUT PATH \ --project HOST PROJECT ID \ --region = REGION \ --runner DataflowRunner \ --staging location gs:// STORAGE BUCKET /staging \ --temp location gs:// STORAGE BUCKET /temp \ --output gs:// STORAGE BUCKET /output \ --subnetwork https://www.googleapis.com/compute/v1/projects/ HOST PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK NAME Go wordcount --project HOST PROJECT ID \ --region HOST GCP REGION \ --runner dataflow \ --staging location gs:// STORAGE BUCKET /staging \ --temp location gs:// STORAGE BUCKET /temp \ --input INPUT PATH \ --output gs:// STORAGE BUCKET /output \ --subnetwork https://www.googleapis.com/compute/v1/projects/ HOST PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK NAME API If you're running a Dataflow template using the REST API , add network or subnetwork , or both, to the environment object.

### Dataflow shared responsibility \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility](https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility)
- Source ID: `site-docs-reference-required-4`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow secures the scalable infrastructure that you use to run your Dataflow pipelines and provides you tools and security controls to protect your data, code, and models.
- Customer's responsibilities Use and update your environment to the latest versions of Dataflow containers and VM images : Dataflow provides prebuilt containers and VM images to simplify the use of its services.
- Home Documentation Data analytics Cloud Dataflow Resources Send feedback Dataflow shared responsibility Stay organized with collections Save and categorize content based on your preferences.
- Secure applications : You are responsible for securing your own applications running on Dataflow, including implementing secure coding practices and regularly testing for vulnerabilities.

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-reference-required-3`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- If you run the pipeline asynchronously, you can use the returned PipelineResult instance to cancel execution of the pipeline, as shown in the following code example: public interface StreamingIntegrationTestOptions extends DirectOptions , StreamingOptions , MyOtherPipelineOptions { ... } @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testNonBlockingPipeline () { StreamingIntegrationTestOptions options = p . getOptions (). as ( StreamingIntegrationOptions . class ); options . setBlockOnRun ( false ); // Set non - blocking pipeline execution options . setStreaming ( true ); // Set streaming mode p . apply (...); // Apply pipeline transformations PipelineResult result = p . run (); // Run the pipeline // Generate input , verify output , etc ... // Later on , cancel the pipeline using the previously returned result . cancel (); } End-to-end tests End-to-end tests verify the correct operation of your end-to-end pipeline by running it on the Dataflow Runner under conditions that closely resemble production.
- The end-to-end test uses the Dataflow Runner and a small test dataset to verify that the complete pipeline functions correctly, including its integration with data sources, data sinks, and other external systems.
- By using the Direct Runner to run system integration tests, you quickly verify the integration between your pipeline and other systems without needing to submit a Dataflow job and wait for it to finish.
- Like with integration tests using the Direct Runner, you can use PAssert on PCollection objects when you run pipelines using the Dataflow Runner.


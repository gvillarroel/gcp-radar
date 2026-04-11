---
title: "Vertex AI consumption options \_|\_ Generative AI on Vertex AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options
  title: "Vertex AI consumption options \_|\_ Generative AI on Vertex AI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
Guides
Send feedback
Vertex AI consumption options
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI offers multiple options for getting and using compute
resources when using generative models. These consumption options are designed
to meet the needs of any workload, from initial prototyping to production
deployments. Selecting the right option is critical for balancing performance,
reliability, and cost.
This guide details the available consumption options, helps you map them to your
specific workload requirements, and provides strategies for optimizing latency,
availability, and cost.
Consumption options
Vertex AI provides five consumption options tailored to different
traffic patterns and business needs:
Consumption option
Description
Ideal For
Pricing
Provisioned Throughput
Provides guaranteed throughput for a commitment period
Critical, steady-state, always-on workloads where SLA is needed
Commitment-based (available in 1 week, 1 month, 3 month, and 1 year plans)
PayGo
Standard
Flexible, pay-per-use option with no upfront commitment
Default option for everyday use cases with flexibility for variable traffic demand
Per-token (standard rate)
Priority
Delivers higher reliability through priority processing while maintaining PayGo flexibility
Important workloads that require higher reliability and limits than standard PayGo
Per-token (premium rate)
Flex
Cost-effective option for latency-tolerant workloads
Tasks that can tolerate slower response time and higher throttling, offering lower prices
Per-token (discounted rate)
Batch inference
Cost-optimized for high-volume, asynchronous processing
Large-scale jobs where results are needed within a longer timeframe
Per-token (discounted rate)
For information on pricing, see the pricing
page .
Choose the right option for your workload
Latency-sensitive workloads
Organizations often have to make tradeoffs between reliability and cost while
choosing the right consumption models. While Provisioned Throughput offers the highest reliability, it
can cause underutilization if your traffic has spikes. Similarly, PayGo might
offer the maximum flexibility but cannot guarantee a quality of service. The
following section describes how to best combine these mechanisms to achieve the
optimal outcome:
Cover baseline traffic with Provisioned Throughput. This improves
utilization of your reserved capacity, making it economical while providing
guaranteed reliability for the core of your traffic. To achieve this, do the
following:
Analyze your minute- or second-level traffic patterns.
Determine the amount of traffic to be covered by
Provisioned Throughput. It should cover your highest priority
traffic.
Manage spillover traffic with Standard or Priority PayGo : By default,
traffic that exceeds your Provisioned Throughput baseline (called
spillover traffic ) is handled by Standard
PayGo . If you observe higher variance in
performance for requests above the TPM limit, you can mitigate that through
optimization . Priority
PayGo gives you an option to achieve reliable
performance at a premium price, subject to the ramp limit.
Asynchronous, high-volume workloads
If you have a large backlog of requests (for example, if you have millions of
documents to summarize), and immediate latency is not a concern, you should
submit a batch job by
formulating requests into a JSON file or spreadsheet. This is useful for use
cases like image labeling, bulk document processing, or sentiment analysis on
historical data.
This option is the most cost-effective option for high-volume inference.
Latency-tolerant, cost-sensitive workloads
If you need to process requests (such as data annotation or catalog building),
where the application can wait for a response but cost reduction is a priority,
you should use Flex PayGo . Flex PayGo offers
reduced per-token pricing for requests that don't require immediate execution.
This option is useful for use cases such as offline analysis, data annotation,
product catalog building, or translation.
Optimization strategies
Once you have selected your consumption model, use the following strategies to
further optimize for latency, availability, and cost.
Latency
When you build interactive applications latency plays a crucial role in the user
experience. Latency refers to the time it takes for a model to process your
input prompt and generate a corresponding output response. When examining
latency with a model, consider the following:
Time to first token (TTFT) : The time that it takes for the model to
produce the first token of the response after receiving the prompt. TTFT is
particularly relevant for applications utilizing streaming, where providing
immediate feedback is crucial.
Time to last token (TTLT) : The overall time taken by the model to process
the prompt and generate the response.
To optimize for latency:
Select the right model for your use case : Vertex AI provides a
diverse range of models with varying capabilities and performance
characteristics. Carefully evaluate your requirements regarding speed and
output quality to choose the model that best aligns with your use case. For
a list of available models, see Model
Garden .
Reduce prompt size : Craft clear and concise prompts that effectively
convey your intent without unnecessary details or redundancy. Shorter
prompts reduce your time to first token.
Limit output tokens :
Use system instructions to control the length of the response. Instruct
the model to provide concise answers or limit the output to a specific
number of sentences or paragraphs. This strategy can reduce your time to
last token.
Restrict output by setting a limit. Use the max_output_tokens
parameter to set a maximum limit on the length of the generated response
length, preventing overly long output. Latency is directly proportional
to the number of tokens generated; generating fewer tokens results in
faster responses. However, be cautious as this might cut off responses
mid-sentence.
Use Provisioned Throughput : For the most consistent performance,
use Provisioned Throughput. This eliminates the variability caused by
"cold starts" or queuing that can occasionally occur in PayGo models during
high traffic.
Limit the thinking budget : If you are using a model that supports
Thinking , you can reduce the latency by reducing
the thinking budget . By limiting the
internal reasoning tokens the model generates before answering, you reduce
the overall processing time. However, you must ensure the budget remains
sufficient for the complexity of the task to avoid degrading answer quality.
Use streaming for your responses : Streaming
enhances perceived responsiveness and creates a more interactive user
experience. With streaming, the model starts sending its response before it
generates the complete output. This enables real-time processing of the
output, and you can immediately update your user interface and perform other
concurrent tasks.
Availability
To optimize for availability:
Implement retry logic : Implement exponential backoff for 429 errors,
particularly when using Standard PayGo.
Use a hybrid implementation : As detailed in previous
sections , don't rely solely on PayGo for critical
production apps. Combining Provisioned Throughput and PayGo provides
the highest assurance against resource exhaustion (429 errors).
Manage your Provisioned Throughput quota : Regularly monitor your
TPM consumption and increase PT GSUs before anticipated traffic events (such
as product launches). You can use an alert policy to
automate monitoring.
Use the global endpoint : Use global endpoint to utilize Google's global
capacity pool to minimize throttling due to regional capacity constraints.
Smoothen your traffic to reduce spikes whenever possible : Higher PayGo
traffic rate (TPM) tends to be associated with higher throttling rates.
Shift traffic to off-peak hours : Model usage in aggregate generally
follows diurnal pattern. Time shift your workload to off-peak hours or
weekends could significantly improve availability.
Cost
To optimize for cost:
Use right-sizing for Provisioned Throughput : You generally don't
need to provision PT at peak, which reduces overall PT utilization and
drives up total costs. Aim for a certain percentile of the traffic depending
on your risk tolerance, and let Standard PayGo and Priority PayGo handle the
rest.
Purchase longer term Provisioned Throughput : 1-year PT is priced
at 26% discount off 1-month PT, leading to significant cost savings. You can
always switch the purchased Provisioned Throughput GSUs across
different models to take advantage of our latest model capabilities.
Use Flex PayGo : Identify any part of your pipeline that is not latency
sensitive (e.g., background summarization, data extraction) and move it to
the Flex to cut costs by ~50%.
Use batch processing : For asynchronous jobs such as processing large
datasets, batch processing is significantly cheaper (50%) than processing
requests sequentially using Standard PayGo.
Use context caching : Context
caching helps reduce the
cost and latency of requests that contain repeated content. Increase cache
hit rate by placing large and common contents at the beginning of your
prompt, and sending requests with a similar prefix in a short amount of
time.
Select a lower priced model : If your use case can allow for it, use one
of our smaller models like Flash-Lite, which has a lower per token price
point than our heavy-duty, full-featured models.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

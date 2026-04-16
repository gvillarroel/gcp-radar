---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.607Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "ANY reservation awareness for Dataproc Auto Zone Placement"
feature_slug: "any-reservation-awareness-for-dataproc-auto-zone-placement"
latest_feature_date: "2022-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingV2Stub"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceFutureStub"
keywords:
  - "reservation"
  - "awareness"
  - "dataproc"
  - "auto"
  - "zone"
  - "placement"
  - "considers"
  - "reservations"
---

# ANY reservation awareness for Dataproc Auto Zone Placement

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Auto Zone Placement considers ANY reservations by default.

## Extended Definition

Dataproc Auto Zone Placement considers ANY reservations by default.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingV2Stub](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingV2Stub)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceFutureStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceFutureStub)

## Supporting Pages

### "Class AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub)
- Source ID: `site-java-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The API interface for managing autoscaling policies in the Dataproc API.
- Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected AutoscalingPolicyServiceGrpc .
- 4.85.0 (latest) 4.84.0 4.82.0 4.80.0 4.79.0 4.78.0 4.77.0 4.75.0 4.73.0 4.72.0 4.71.0 4.70.0 4.69.0 4.67.0 4.65.0 4.64.0 4.61.0 4.60.0 4.59.0 4.57.0 4.56.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.46.0 4.45.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.34.0 4.33.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.6.0 4.5.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.8 3.1.2 3.0.3 2.3.1 public static final class AutoscalingPolicyServiceGrpc .
- AutoscalingPolicyServiceBlockingStub build ( Channel channel , CallOptions callOptions ) Parameters Name Description channel io.grpc.Channel callOptions io.grpc.CallOptions Returns Type Description AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub Overrides io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) createAutoscalingPolicy(CreateAutoscalingPolicyRequest request) public AutoscalingPolicy createAutoscalingPolicy ( CreateAutoscalingPolicyRequest request ) Creates new autoscaling policy.

### "Class AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingV2Stub\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingV2Stub](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingV2Stub)
- Source ID: `site-java-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The API interface for managing autoscaling policies in the Dataproc API.
- Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingV2Stub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected AutoscalingPolicyServiceGrpc .
- 4.85.0 (latest) 4.84.0 4.82.0 4.80.0 4.79.0 4.78.0 4.77.0 4.75.0 4.73.0 4.72.0 4.71.0 4.70.0 4.69.0 4.67.0 4.65.0 4.64.0 4.61.0 4.60.0 4.59.0 4.57.0 4.56.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.46.0 4.45.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.34.0 4.33.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.6.0 4.5.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.8 3.1.2 3.0.3 2.3.1 public static final class AutoscalingPolicyServiceGrpc .
- AutoscalingPolicyServiceBlockingV2Stub build ( Channel channel , CallOptions callOptions ) Parameters Name Description channel io.grpc.Channel callOptions io.grpc.CallOptions Returns Type Description AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingV2Stub Overrides io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) createAutoscalingPolicy(CreateAutoscalingPolicyRequest request) public AutoscalingPolicy createAutoscalingPolicy ( CreateAutoscalingPolicyRequest request ) Creates new autoscaling policy.

### "Class AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceFutureStub (4.85.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceFutureStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceFutureStub)
- Source ID: `site-java-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The API interface for managing autoscaling policies in the Dataproc API.
- Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractFutureStub > AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceFutureStub Inherited Members io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected AutoscalingPolicyServiceGrpc .
- 4.85.0 (latest) 4.84.0 4.82.0 4.80.0 4.79.0 4.78.0 4.77.0 4.75.0 4.73.0 4.72.0 4.71.0 4.70.0 4.69.0 4.67.0 4.65.0 4.64.0 4.61.0 4.60.0 4.59.0 4.57.0 4.56.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.46.0 4.45.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.34.0 4.33.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.6.0 4.5.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.8 3.1.2 3.0.3 2.3.1 public static final class AutoscalingPolicyServiceGrpc .
- AutoscalingPolicyServiceFutureStub build ( Channel channel , CallOptions callOptions ) Parameters Name Description channel io.grpc.Channel callOptions io.grpc.CallOptions Returns Type Description AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceFutureStub Overrides io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) createAutoscalingPolicy(CreateAutoscalingPolicyRequest request) public ListenableFuture<AutoscalingPolicy> createAutoscalingPolicy ( CreateAutoscalingPolicyRequest request ) Creates new autoscaling policy.


---
title: "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage
  title: "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Package com.google.cloud.storage (2.64.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.64.0 (latest)
2.63.0
2.62.1
2.60.0
2.59.0
2.58.1
2.57.0
2.56.0
2.55.0
2.54.0
2.53.3
2.52.3
2.50.0
2.49.0
2.48.2
2.47.0
2.46.0
2.45.0
2.44.1
2.43.2
2.42.0
2.41.0
2.40.1
2.39.0
2.38.0
2.37.0
2.36.1
2.34.0
2.33.0
2.32.1
2.30.1
2.29.1
2.28.0
2.27.1
2.24.0
2.23.0
2.22.6
2.21.0
2.20.2
2.19.0
2.18.0
2.17.2
2.16.0
2.15.1
2.14.0
2.13.1
2.12.0
2.11.3
2.10.0
2.9.3
2.8.1
2.7.1
2.6.1
2.5.1
2.4.5
2.3.0
2.2.3
2.1.10
GitHub Repository
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. storage. Multipart Upload Client
A client for interacting with Google Cloud Storage's Multipart Upload API.
This class is for internal use only and is not intended for public consumption. It provides a
low-level interface for creating and managing multipart uploads.
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. cloud. storage. Multipart Upload Settings
Settings for configuring the MultipartUploadClient .
This class is for internal use only and is not intended for public consumption.
Classes
Class
Description
com. google. cloud. storage. Acl
Access Control List for buckets or blobs.
See Also: About Access Control Lists
com. google. cloud. storage. Acl. Builder
Builder for Acl objects.
com. google. cloud. storage. Acl. Domain
Class for ACL Domain entities.
com. google. cloud. storage. Acl. Entity
Base class for Access Control List entities.
com. google. cloud. storage. Acl. Group
Class for ACL Group entities.
com. google. cloud. storage. Acl. Project
Class for ACL Project entities.
com. google. cloud. storage. Acl. Project. Project Role
com. google. cloud. storage. Acl. Raw Entity
com. google. cloud. storage. Acl. Role
com. google. cloud. storage. Acl. User
Class for ACL User entities.
com. google. cloud. storage. Bidi Blob Write Session Config
Perform a resumable upload, uploading at most bufferSize bytes each flush.
Configuration of buffer size can be performed via BidiBlobWriteSessionConfig#withBufferSize(int) .
com. google. cloud. storage. Blob
An object in Google Cloud Storage. A Blob object includes the BlobId instance,
the set of properties inherited from the BlobInfo class and the Storage instance.
The class provides methods to perform operations on the object. Reading a property value does not
issue any RPC calls. The object content is not stored within the Blob instance.
com. google. cloud. storage. Blob. Blob Source Option
Class for specifying blob source options when Blob methods are used.
com. google. cloud. storage. Blob. Builder
Builder for Blob .
com. google. cloud. storage. Blob Appendable Upload Config
Configuration parameters for an appendable uploads channel.
Instances of this class are immutable and thread safe.
See Also: Storage#blobAppendableUpload(BlobInfo, BlobAppendableUploadConfig, BlobWriteOption...)
com. google. cloud. storage. Blob Id
Google Storage Object identifier. A BlobId object includes the name of the containing
bucket, the blob's name and possibly the blob's generation. If #getGeneration() is
null the identifier refers to the latest blob's generation.
com. google. cloud. storage. Blob Info
Information about an object in Google Cloud Storage. A BlobInfo object includes the
BlobId instance and the set of properties, such as the blob's access control
configuration, user provided metadata, the CRC32C checksum, etc. Instances of this class are used
to create a new object in Google Cloud Storage or update the properties of an existing object. To
com. google. cloud. storage. Blob Info. Builder
Builder for BlobInfo .
com. google. cloud. storage. Blob Info. Customer Encryption
Objects of this class hold information on the customer-supplied encryption key, if the blob is
encrypted using such a key.
com. google. cloud. storage. Blob Info. Immutable Empty Map
This class is meant for internal use only. Users are discouraged from using this class.
com. google. cloud. storage. Blob Info. Object Contexts
com. google. cloud. storage. Blob Info. Object Contexts. Builder
com. google. cloud. storage. Blob Info. Object Custom Context Payload
Represents the payload of a user-defined object context.
com. google. cloud. storage. Blob Info. Object Custom Context Payload. Builder
com. google. cloud. storage. Blob Info. Retention
Defines a blob's Retention policy. Can only be used on objects in a retention-enabled bucket.
com. google. cloud. storage. Blob Info. Retention. Builder
com. google. cloud. storage. Blob Info. Retention. Mode
com. google. cloud. storage. Blob Write Session Config
A sealed internal implementation only class which provides the means of configuring a BlobWriteSession .
A BlobWriteSessionConfig will be used to configure all BlobWriteSession s
produced by an instance of Storage .
com. google. cloud. storage. Blob Write Session Configs
Factory class to select and construct BlobWriteSessionConfig s.
There are several strategies which can be used to upload a Blob to Google Cloud
Storage. This class provides factories which allow you to select the appropriate strategy for
com. google. cloud. storage. Bucket
A Google cloud storage bucket.
Objects of this class are immutable. Operations that modify the bucket like #update
return a new object. To get a Bucket object with the most recent information use #reload . Bucket adds a layer of service-related functionality over BucketInfo .
com. google. cloud. storage. Bucket. Blob Target Option
Class for specifying blob target options when Bucket methods are used.
com. google. cloud. storage. Bucket. Blob Write Option
Class for specifying blob write options when Bucket methods are used.
com. google. cloud. storage. Bucket. Bucket Source Option
Class for specifying bucket source options when Bucket methods are used.
com. google. cloud. storage. Bucket. Builder
Builder for Bucket .
com. google. cloud. storage. Bucket Info
Google Storage bucket metadata;
See Also: Concepts and Terminology
com. google. cloud. storage. Bucket Info. Age Delete Rule
Deprecated. Use a LifecycleRule with a DeleteLifecycleAction and use
LifecycleCondition.Builder.setAge instead.
For example, new DeleteLifecycleAction(1) is equivalent to new
com. google. cloud. storage. Bucket Info. Autoclass
Configuration for the Autoclass settings of a bucket.
See Also: https://cloud.google.com/storage/docs/autoclass
com. google. cloud. storage. Bucket Info. Autoclass. Builder
com. google. cloud. storage. Bucket Info. Builder
Builder for BucketInfo .
com. google. cloud. storage. Bucket Info. Created Before Delete Rule
Deprecated. Use a LifecycleRule with an action DeleteLifecycleAction and a
condition LifecycleCondition.Builder.setCreatedBefore instead.
com. google. cloud. storage. Bucket Info. Custom Placement Config
The bucket's custom placement configuration for Custom Dual Regions. If using location is
also required.
com. google. cloud. storage. Bucket Info. Custom Placement Config. Builder
com. google. cloud. storage. Bucket Info. Customer Managed Encryption Enforcement Config
Customer Managed Encryption (CMEK) enforcement config of a bucket.
com. google. cloud. storage. Bucket Info. Customer Supplied Encryption Enforcement Config
Customer Supplied Encryption (CSEK) enforcement config of a bucket.
com. google. cloud. storage. Bucket Info. Delete Rule
Deprecated. Use a LifecycleRule with a DeleteLifecycleAction and a
LifecycleCondition which is equivalent to a subclass of DeleteRule instead.
com. google. cloud. storage. Bucket Info. Encryption Enforcement Restriction Mode
com. google. cloud. storage. Bucket Info. Google Managed Encryption Enforcement Config
Google Managed Encryption (GMEK) enforcement config of a bucket.
com. google. cloud. storage. Bucket Info. Hierarchical Namespace
The bucket's hierarchical namespace (Folders) configuration. Enable this to use HNS.
com. google. cloud. storage. Bucket Info. Hierarchical Namespace. Builder
com. google. cloud. storage. Bucket Info. Iam Configuration
The Bucket's IAM Configuration.
See Also: public-access-prevention , uniform bucket-level access
com. google. cloud. storage. Bucket Info. Iam Configuration. Builder
Builder for IamConfiguration
com. google. cloud. storage. Bucket Info. Ip Filter
A buckets IP
filtering configuration. Specifies the network sources that can access the bucket, as well
as its underlying objects.
com. google. cloud. storage. Bucket Info. Ip Filter. Builder
com. google. cloud. storage. Bucket Info. Ip Filter. Public Network Source
The public network IP address ranges that can access the bucket and its data.
com. google. cloud. storage. Bucket Info. Ip Filter. Vpc Network Source
The list of VPC networks that can access the bucket.
com. google. cloud. storage. Bucket Info. Ip Filter. Vpc Network Source. Builder
com. google. cloud. storage. Bucket Info. Is Live Delete Rule
Deprecated. Use a LifecycleRule with a DeleteLifecycleAction and a condition
LifecycleCondition.Builder.setIsLive instead.
com. google. cloud. storage. Bucket Info. Lifecycle Rule
Lifecycle rule for a bucket. Allows supported Actions, such as deleting and changing storage
class, to be executed when certain Conditions are met.
Versions 1.50.0-1.111.2 of this library don’t support the CustomTimeBefore,
com. google. cloud. storage. Bucket Info. Lifecycle Rule. Abort IncompleteMPU Action
com. google. cloud. storage. Bucket Info. Lifecycle Rule. Delete Lifecycle Action
com. google. cloud. storage. Bucket Info. Lifecycle Rule. Lifecycle Action
Base class for the Action to take when a Lifecycle Condition is met. Supported Actions are
expressed as subclasses of this class, accessed by static factory methods.
com. google. cloud. storage. Bucket Info. Lifecycle Rule. Lifecycle Condition
Condition for a Lifecycle rule, specifies under what criteria an Action should be executed.
See Also: Object Lifecycle Management
com. google. cloud. storage. Bucket Info. Lifecycle Rule. Lifecycle Condition. Builder
Builder for LifecycleCondition .
com. google. cloud. storage. Bucket Info. Lifecycle Rule. Set Storage Class Lifecycle Action
com. google. cloud. storage. Bucket Info. Logging
The bucket's logging configuration, which defines the destination bucket and optional name
prefix for the current bucket's logs.
com. google. cloud. storage. Bucket Info. Logging. Builder
com. google. cloud. storage. Bucket Info. Num Newer Versions Delete Rule
Deprecated. Use a LifecycleRule with a DeleteLifecycleAction and a condition
LifecycleCondition.Builder.setNumberOfNewerVersions instead.
com. google. cloud. storage. Bucket Info. Object Retention
com. google. cloud. storage. Bucket Info. Object Retention. Builder
com. google. cloud. storage. Bucket Info. Object Retention. Mode
com. google. cloud. storage. Bucket Info. Soft Delete Policy
The bucket's soft delete policy. If this policy is set, any deleted objects will be
soft-deleted according to the time specified in the policy
com. google. cloud. storage. Bucket Info. Soft Delete Policy. Builder
com. google. cloud. storage. Buffer To Disk Then Upload
There are scenarios in which disk space is more plentiful than memory space. This new BlobWriteSessionConfig allows augmenting an instance of storage to produce BlobWriteSession s which will buffer to disk rather than holding things in memory.
Once the file on disk is closed, the entire file will then be uploaded to GCS.
See Also: BlobWriteSessionConfigs#bufferToDiskThenUpload(Path) , Storage#blobWriteSession(BlobInfo, BlobWriteOption...) , BlobWriteSessionConfigs#bufferToDiskThenUpload(Collection) , GrpcStorageOptions.Builder#setBlobWriteSessionConfig(BlobWriteSessionConfig)
com. google. cloud. storage. Canonical Extension Headers Serializer
Canonical extension header serializer.
See Also: Canonical Extension Headers
com. google. cloud. storage. Copy Writer
Google Storage blob copy writer. A CopyWriter object allows to copy both blob's data and
information. To override source blob's information supply a BlobInfo to the
CopyRequest using either Storage.CopyRequest.Builder#setTarget(BlobInfo,
com. google. cloud. storage. Cors
Cross-Origin Resource Sharing (CORS) configuration for a bucket.
See Also: Cross-Origin Resource Sharing (CORS)
com. google. cloud. storage. Cors. Builder
CORS configuration builder.
com. google. cloud. storage. Cors. Origin
Class for a CORS origin.
com. google. cloud. storage. Default Blob Write Session Config
Default Configuration to represent uploading to Google Cloud Storage in a chunked manner.
Perform a resumable upload, uploading at most chunkSize bytes each PUT.
com. google. cloud. storage. Flush Policy
Base class used for flush policies which are responsible for configuring an upload channel's
behavior with regard to flushes.
Instances of this class and all its subclasses are immutable and thread safe.
com. google. cloud. storage. Flush Policy. Max Flush Size Flush Policy
Define a FlushPolicy where a max number of bytes will be flushed to GCS per flush.
If there are not enough bytes to trigger a flush, they will be held in memory until there
are enough bytes, or an explicit flush is performed by closing the channel. If more bytes are
com. google. cloud. storage. Flush Policy. Min Flush Size Flush Policy
Define a FlushPolicy where a min number of bytes will be required before a flush GCS
happens.
If there are not enough bytes to trigger a flush, they will be held in memory until there
com. google. cloud. storage. Grpc Storage Options
com. google. cloud. storage. Grpc Storage Options. Builder
com. google. cloud. storage. Grpc Storage Options. Grpc Storage Defaults
com. google. cloud. storage. Grpc Storage Options. Grpc Storage Factory
Internal implementation detail, only public to allow for java.io.Serializable
compatibility in com.google.cloud.ServiceOptions .
To access an instance of this class instead use GrpcStorageOptions.defaults().getDefaultServiceFactory() .
com. google. cloud. storage. Grpc Storage Options. Grpc Storage Rpc Factory
Internal implementation detail, only public to allow for java.io.Serializable
compatibility in com.google.cloud.ServiceOptions .
To access an instance of this class instead use GrpcStorageOptions.defaults().getDefaultRpcFactory() .
com. google. cloud. storage. Hmac Key
HMAC key for a service account.
com. google. cloud. storage. Hmac Key. Builder
Builder for HmacKey objects. *
com. google. cloud. storage. Hmac Key. Hmac Key Metadata
The metadata for a service account HMAC key. This class holds all data associated with an HMAC
key other than the secret key.
com. google. cloud. storage. Hmac Key. Hmac Key Metadata. Builder
Builder for HmacKeyMetadata objects. *
com. google. cloud. storage. Http Copy Writer
com. google. cloud. storage. Http Method
Http method supported by Storage service.
com. google. cloud. storage. Http Storage Options
com. google. cloud. storage. Http Storage Options. Builder
com. google. cloud. storage. Http Storage Options. Http Storage Defaults
com. google. cloud. storage. Http Storage Options. Http Storage Factory
Internal implementation detail, only public to allow for java.io.Serializable .
To access an instance of this class instead use HttpStorageOptions.defaults().getDefaultServiceFactory() .
See Also: HttpStorageOptions#defaults() , HttpStorageDefaults#getDefaultServiceFactory()
com. google. cloud. storage. Http Storage Options. Http Storage Rpc Factory
Internal implementation detail, only public to allow for java.io.Serializable .
To access an instance of this class instead use HttpStorageOptions.defaults().getDefaultRpcFactory() .
See Also: HttpStorageDefaults#getDefaultRpcFactory() , HttpStorageOptions#defaults()
com. google. cloud. storage. Journaling Blob Write Session Config
There are scenarios in which disk space is more plentiful than memory space. This new BlobWriteSessionConfig allows augmenting an instance of storage to produce BlobWriteSession s which will buffer to disk rather than holding things in memory.
If we have disk available we can checkpoint the contents of an object to disk before
transmitting to GCS. The checkpointed data on disk allows arbitrary rewind in the case of failure
com. google. cloud. storage. Linear Exponential Range Spec Function
Produce a new RangeSpec relative to the provided offset and prev . Scaling
up the maxLength if a sequential match.
Instances of this class are immutable and thread safe.
com. google. cloud. storage. Max Length Range Spec Function
Produce a new RangeSpec relative to the provided offset and prev , where
the RangeSpec will have a maxLength set to the lesser of prev.maxLength and
this.maxLength .
com. google. cloud. storage. Notification
The class representing Pub/Sub notifications for the Storage. See pubsub-notifications for
details.
com. google. cloud. storage. Notification. Builder
Builder for Notification .
com. google. cloud. storage. Notification Info
The class representing Pub/Sub Notification metadata for the Storage.
com. google. cloud. storage. Notification Info. Builder
Builder for NotificationInfo .
com. google. cloud. storage. Notification Info. Builder Impl
Builder for NotificationInfo .
com. google. cloud. storage. Option
Base class for Storage operation option.
com. google. cloud. storage. Parallel Composite Upload Blob Write Session Config
Immutable config builder to configure BlobWriteSession instances to perform Parallel Composite
Uploads.
Parallel Composite Uploads can yield higher throughput when uploading large objects. However,
com. google. cloud. storage. Parallel Composite Upload Blob Write Session Config. Buffer Allocation Strategy
A strategy which dictates how buffers are to be used for individual parts. The chosen strategy
will apply to all instances of BlobWriteSession created from a single instance of
Storage .
See Also: #withBufferAllocationStrategy(BufferAllocationStrategy)
com. google. cloud. storage. Parallel Composite Upload Blob Write Session Config. Executor Supplier
Class which will be used to supply an Executor where work will be submitted when performing a
parallel composite upload.
See Also: #withExecutorSupplier(ExecutorSupplier)
com. google. cloud. storage. Parallel Composite Upload Blob Write Session Config. Part Cleanup Strategy
A cleanup strategy which will dictate what cleanup operations are performed automatically when
performing a parallel composite upload.
See Also: #withPartCleanupStrategy(PartCleanupStrategy)
com. google. cloud. storage. Parallel Composite Upload Blob Write Session Config. Part Metadata Field Decorator
A Decorator which is used to manipulate metadata fields, specifically on the part objects
created in a Parallel Composite Upload
See Also: #withPartMetadataFieldDecorator(PartMetadataFieldDecorator)
com. google. cloud. storage. Parallel Composite Upload Blob Write Session Config. Part Naming Strategy
A naming strategy which will be used to generate a name for a part or intermediary compose
object.
See Also: #withPartNamingStrategy(PartNamingStrategy)
com. google. cloud. storage. Post Policy
Presigned V4 post policy. Instances of PostPolicyV4 include a URL and a map of fields
that can be specified in an HTML form to submit a POST request to upload an object.
See POST Object for
com. google. cloud. storage. Post Policy V4. Condition
Class for a specific POST policy document condition.
See Also: Policy document
com. google. cloud. storage. Post Policy V4. Post Conditions
A helper class for specifying conditions in a V4 POST Policy document. Used in: Storage#generateSignedPostPolicyV4(BlobInfo, long, TimeUnit, PostPolicyV4.PostFieldsV4,
PostPolicyV4.PostConditionsV4, Storage.PostPolicyV4Option...) .
See Also: Policy document
com. google. cloud. storage. Post Policy V4. Post Conditions V4. Builder
com. google. cloud. storage. Post Policy V4. Post Fields
A helper class to define fields to be specified in a V4 POST request. Instance of this class
helps to construct PostPolicyV4 objects. Used in: Storage#generateSignedPostPolicyV4(BlobInfo, long, TimeUnit, PostPolicyV4.PostFieldsV4,
PostPolicyV4.PostConditionsV4, Storage.PostPolicyV4Option...) .
com. google. cloud. storage. Post Policy V4. Post Fields V4. Builder
com. google. cloud. storage. Post Policy V4. Post PolicyV4 Document
Class for a V4 POST Policy document. Used by Storage to construct PostPolicyV4 objects.
See Also: Policy document
com. google. cloud. storage. Range Spec
Defines a range with a begin offset and optional maximum length.
com. google. cloud. storage. Range Spec Function
A specialized BiFunction to produce a RangeSpec given an offset and a possible previous
RangeSpec .
com. google. cloud. storage. Read As Channel
Read a range of byte s as a non-blocking ScatteringByteChannel
The returned channel will be non-blocking for all read calls. If bytes have not yet
asynchronously been delivered from Google Cloud Storage the method will return rather than
com. google. cloud. storage. Read As Future Byte String
Read a range of byte s as an ApiFuture < DisposableByteString
>
The resulting DisposableByteString MUST be close() ed to avoid leaking memory
com. google. cloud. storage. Read As Future Bytes
Read a range of byte s as an ApiFuture <byte[]>
Instances of this class are immutable and thread safe.
See Also: BlobReadSession#readAs(ReadProjectionConfig) , ReadProjectionConfigs#asFutureBytes()
com. google. cloud. storage. Read As Seekable Channel
Read from the object as a SeekableByteChannel
The returned channel will be non-blocking for all read calls. If bytes have not yet
asynchronously been delivered from Google Cloud Storage the method will return rather than
com. google. cloud. storage. Read Projection Config
Base class to represent a config for reading from a BlobReadSession .
See Also: Storage#blobReadSession(BlobId, BlobSourceOption...) , ReadProjectionConfigs , BlobReadSession
com. google. cloud. storage. Read Projection Configs
Factory class to select ReadProjectionConfig s.
There are multiple projections which can be used to access the content of a BlobInfo
in Google Cloud Storage.
com. google. cloud. storage. Request Body
The data of a single UploadPart in a GCS XML MPU.
Instances of this class are thread-safe and immutable.
See Also: https://cloud.google.com/storage/docs/multipart-uploads#upload_parts
com. google. cloud. storage. Rpo
Enums for the Recovery Point Objective (RPO) of dual-region buckets, which determines how fast
data is replicated between regions.
See Also: https://cloud.google.com/storage/docs/turbo-replication
com. google. cloud. storage. Service Account
A service account, with its specified scopes, authorized for this instance.
See Also: Authenticating from Google Cloud Storage
com. google. cloud. storage. Signature Info
Signature Info holds payload components of the string that requires signing.
See Also: Components
com. google. cloud. storage. Signature Info. Builder
com. google. cloud. storage. Storage. Blob Get Option
Class for specifying blob get options.
com. google. cloud. storage. Storage. Blob List Option
Class for specifying blob list options.
com. google. cloud. storage. Storage. Blob Restore Option
Class for specifying blob restore options *
com. google. cloud. storage. Storage. Blob Source Option
Class for specifying blob source options.
com. google. cloud. storage. Storage. Blob Target Option
Class for specifying blob target options.
com. google. cloud. storage. Storage. Blob Write Option
Class for specifying blob write options.
com. google. cloud. storage. Storage. Bucket Get Option
Class for specifying bucket get options.
com. google. cloud. storage. Storage. Bucket List Option
Class for specifying bucket list options.
com. google. cloud. storage. Storage. Bucket Source Option
Class for specifying bucket source options.
com. google. cloud. storage. Storage. Bucket Target Option
Class for specifying bucket target options.
com. google. cloud. storage. Storage. Compose Request
A class to contain all information needed for a Google Cloud Storage Compose operation.
See Also: Compose Operation
com. google. cloud. storage. Storage. Compose Request. Builder
com. google. cloud. storage. Storage. Compose Request. Source Blob
Class for Compose source blobs.
com. google. cloud. storage. Storage. Copy Request
A class to contain all information needed for a Google Cloud Storage Copy operation.
com. google. cloud. storage. Storage. Copy Request. Builder
com. google. cloud. storage. Storage. Create Hmac Key Option
Class for specifying createHmacKey options
com. google. cloud. storage. Storage. Delete Hmac Key Option
Class for specifying deleteHmacKey options
com. google. cloud. storage. Storage. Get Hmac Key Option
Class for specifying getHmacKey options
com. google. cloud. storage. Storage. List Hmac Keys Option
Class for specifying listHmacKeys options
com. google. cloud. storage. Storage. Move Blob Request
A class to contain all information needed for a Google Cloud Storage Object Move.
See Also: Storage#moveBlob(MoveBlobRequest)
com. google. cloud. storage. Storage. Move Blob Request. Builder
com. google. cloud. storage. Storage. Post PolicyV4 Option
Class for specifying Post Policy V4 options. *
com. google. cloud. storage. Storage. Sign Url Option
Class for specifying signed URL options.
com. google. cloud. storage. Storage. Update Hmac Key Option
Class for specifying updateHmacKey options
com. google. cloud. storage. Storage Batch
A batch of operations to be submitted to Google Cloud Storage using a single RPC request.
Example of using a batch request to delete, update and get a blob:
com. google. cloud. storage. Storage Batch Result
This class holds a single result of a batch call to Cloud Storage.
com. google. cloud. storage. Storage Channel Utils
Set of utility methods for working with non-blocking channels returned by this library.
com. google. cloud. storage. Storage Class
Enums for the storage classes. See https://cloud.google.com/storage/docs/storage-classes
for details.
com. google. cloud. storage. Storage Options
com. google. cloud. storage. Storage Options. Builder
com. google. cloud. storage. Storage Options. Default Storage Factory
Deprecated. Use HttpStorageFactory
com. google. cloud. storage. Storage Options. Default Storage Rpc Factory
Deprecated. Use HttpStorageRpcFactory
com. google. cloud. storage. Storage Roles
IAM roles specific to Storage. An overview of the permissions available to Storage and the
capabilities they grant can be found in the Google Cloud Storage IAM
documentation.
com. google. cloud. storage. Zero Copy Support
Public components which exist to support zero-copy data access
Interfaces
Interface
Description
com. google. cloud. storage. Blob Appendable Upload
Interface representing those methods which can be used to write to and interact with an
appendable upload.
See Also: Storage#blobAppendableUpload(BlobInfo, BlobAppendableUploadConfig, BlobWriteOption...)
com. google. cloud. storage. Blob Appendable Upload. Appendable Upload Writeable Byte Channel
The WritableByteChannel returned from BlobAppendableUpload#open() .
This interface allows writing bytes to an Appendable Upload, and provides methods to close
this channel -- optionally finalizing the upload.
com. google. cloud. storage. Blob Read Session
A session for reading bytes from a Blob
See Also: Storage#blobReadSession(BlobId, BlobSourceOption...) , ReadProjectionConfigs
com. google. cloud. storage. Blob Write Session
A session to write an object to Google Cloud Storage.
A session can only write a single version of an object. If writing multiple versions of an
object a new session must be created each time.
com. google. cloud. storage. Storage
An interface for Google Cloud Storage.
See Also: Google Cloud Storage
com. google. cloud. storage. Storage Factory
An interface for Storage factories.
com. google. cloud. storage. Storage Retry Strategy
A factory class which is used to provide access to ResultRetryAlgorithm for idempotent
and non-idempotent calls made via Storage . Before Storage performs an operation
it will determine if the operation is idempotent and select the appropriate ResultRetryAlgorithm to use for that invocation.
See Also: #getDefaultStorageRetryStrategy() , #getUniformStorageRetryStrategy()
com. google. cloud. storage. Transport Compatibility
Annotation which is used to convey which Cloud Storage API a class or method has compatibility
with.
Not all operations are compatible with all transports.
com. google. cloud. storage. Zero Copy Support. Disposable Byte String
Represents an object that can be accessed as a ByteString , but has a lifecycle that
requires being explicitly closed in order to free up resources.
Instances of this class should be used in a try-with-resources to ensure they are released.
Enums
Enum
Description
com. google. cloud. storage. Acl. Entity. Type
com. google. cloud. storage. Blob Appendable Upload Config. Close Action
Enum providing the possible actions which can be taken during the AppendableUploadWriteableByteChannel#close() call.
See Also: AppendableUploadWriteableByteChannel#close() , BlobAppendableUploadConfig#getCloseAction() , BlobAppendableUploadConfig#withCloseAction(CloseAction)
com. google. cloud. storage. Bucket Info. Delete Rule. Type
com. google. cloud. storage. Bucket Info. Public Access Prevention
Public Access Prevention enum with expected values.
See Also: public-access-prevention
com. google. cloud. storage. Hmac Key. Hmac Key State
com. google. cloud. storage. Notification Info. Event Type
com. google. cloud. storage. Notification Info. Payload Format
com. google. cloud. storage. Post Policy V4. ConditionV4 Type
com. google. cloud. storage. Storage. Blob Field
com. google. cloud. storage. Storage. Bucket Field
com. google. cloud. storage. Storage. Predefined Acl
com. google. cloud. storage. Storage. Uri Scheme
com. google. cloud. storage. Transport Compatibility. Transport
Enum representing the transports com.google.cloud.storage classes have implementations
for.
Exceptions
Exception
Description
com. google. cloud. storage. Async Session Closed Exception
Root exception for async tasks which fail due to a session being closed.
See Also: BlobReadSession
com. google. cloud. storage. Async Storage Task Exception
This exception is used to preserve the caller's stacktrace when invoking an async task in a sync
context. It will be added as a suppressed exception when propagating the async exception. This
allows callers to catch ApiException thrown in an async operation, while still maintaining the
call site.
com. google. cloud. storage. Parallel Composite Upload Exception
An exception which provides access to created objects during a Parallel Composite Upload that did
not finish successfully.
This exception can occur when calling any method on the java.nio.channels.WritableByteChannel returned from BlobWriteSession#open() , in which
com. google. cloud. storage. Storage Exception
Storage service exception.
See Also: Google Cloud Storage error codes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]

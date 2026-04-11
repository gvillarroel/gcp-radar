---
title: "Interface BlobAppendableUpload.AppendableUploadWriteableByteChannel (2.64.0)\
  \ \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobAppendableUpload.AppendableUploadWriteableByteChannel
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobAppendableUpload.AppendableUploadWriteableByteChannel
  title: "Interface BlobAppendableUpload.AppendableUploadWriteableByteChannel (2.64.0)\
    \ \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Interface BlobAppendableUpload.AppendableUploadWriteableByteChannel (2.64.0)
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
Beta
This library is covered by the Pre-GA Offerings Terms
of the Terms of Service. Pre-GA libraries might have limited support,
and changes to pre-GA libraries might not be compatible with other pre-GA versions.
For more information, see the
launch stage descriptions .
public static interface BlobAppendableUpload . AppendableUploadWriteableByteChannel extends WritableByteChannel
The WritableByteChannel returned from BlobAppendableUpload#open() .
This interface allows writing bytes to an Appendable Upload, and provides methods to close
this channel -- optionally finalizing the upload.
The #write(ByteBuffer) method of this channel is non-blocking.
Implements
WritableByteChannel
Methods
close()
public abstract void close ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
This method is blocking
Close this instance to further #write(ByteBuffer) ing.
Whether the upload is finalized during this depends on the BlobAppendableUploadConfig#getCloseAction() provided to create the BlobAppendableUpload . If BlobAppendableUploadConfig#getCloseAction() ==
CloseAction#FINALIZE_WHEN_CLOSING , #finalizeAndClose() will be called. If
BlobAppendableUploadConfig#getCloseAction() == CloseAction#CLOSE_WITHOUT_FINALIZING , #closeWithoutFinalizing() will be called.
See Also: Storage#blobAppendableUpload(BlobInfo, BlobAppendableUploadConfig, BlobWriteOption...) , BlobAppendableUploadConfig#getCloseAction() , BlobAppendableUploadConfig#withCloseAction(CloseAction)
Exceptions
Type
Description
IOException
closeWithoutFinalizing()
public abstract void closeWithoutFinalizing ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
This method is blocking
Close this instance to further #write(ByteBuffer) ing without finalizing the
upload. This will close any underlying stream and release any releasable resources once out
of scope.
This method, AppendableUploadWriteableByteChannel#finalizeAndClose() and AppendableUploadWriteableByteChannel#close() are mutually exclusive. If one of the other
methods are called before this method, this method will be a no-op.
See Also: BlobAppendableUploadConfig.CloseAction#CLOSE_WITHOUT_FINALIZING , Storage#blobAppendableUpload(BlobInfo, BlobAppendableUploadConfig, BlobWriteOption...) , BlobAppendableUploadConfig#getCloseAction() , BlobAppendableUploadConfig#withCloseAction(CloseAction)
Exceptions
Type
Description
IOException
finalizeAndClose()
public abstract void finalizeAndClose ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
This method is blocking
Finalize the upload and close this instance to further #write(ByteBuffer) ing. This
will close any underlying stream and release any releasable resources once out of scope.
Once this method is called, and returns no more writes to the object will be allowed by
GCS.
This method and #close() are mutually exclusive. If one of the other methods are
called before this method, this method will be a no-op.
See Also: BlobAppendableUploadConfig.CloseAction#FINALIZE_WHEN_CLOSING , Storage#blobAppendableUpload(BlobInfo, BlobAppendableUploadConfig, BlobWriteOption...) , BlobAppendableUploadConfig#getCloseAction() , BlobAppendableUploadConfig#withCloseAction(CloseAction)
Exceptions
Type
Description
IOException
flush()
public abstract void flush ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
This method is blocking
Block the invoking thread, waiting until the number of bytes written so far has been
acknowledged by Google Cloud Storage.
Exceptions
Type
Description
IOException
if an error happens while waiting for the flush to complete
write(ByteBuffer src)
public abstract int write ( ByteBuffer src )
This method is non-blocking
Consume as many bytes as can fit in the underlying outbound queue. The size of the
outbound queue is determined from BlobAppendableUploadConfig#getFlushPolicy()
. getMaxPendingBytes() . If the outbound queue is
full, and can not fit more bytes, this method will return 0.
If your application needs to empty its ByteBuffer before progressing, use our helper
method StorageChannelUtils#blockingEmptyTo(ByteBuffer, WritableByteChannel) like so:
try ( AppendableUploadWriteableByteChannel channel = session . open ()) {
int written = StorageChannelUtils . blockingEmptyTo ( byteBuffer , channel );
}
Parameter
Name
Description
src
ByteBuffer The buffer from which bytes are to be retrieved
Returns
Type
Description
int
The number of bytes written, possibly zero
Exceptions
Type
Description
IOException
If this channel is closed
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]

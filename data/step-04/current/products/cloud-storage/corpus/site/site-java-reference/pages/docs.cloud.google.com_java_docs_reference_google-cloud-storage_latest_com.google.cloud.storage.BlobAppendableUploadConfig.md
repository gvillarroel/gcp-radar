---
title: "Class BlobAppendableUploadConfig (2.64.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobAppendableUploadConfig
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobAppendableUploadConfig
  title: "Class BlobAppendableUploadConfig (2.64.0) \_|\_ Java client libraries \_\
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
Class BlobAppendableUploadConfig (2.64.0)
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
public final class BlobAppendableUploadConfig
Configuration parameters for an appendable uploads channel.
Instances of this class are immutable and thread safe.
See Also: Storage#blobAppendableUpload(BlobInfo, BlobAppendableUploadConfig, BlobWriteOption...)
Inheritance
Object >
BlobAppendableUploadConfig
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
of()
public static BlobAppendableUploadConfig of ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Default instance factory method.
The FlushPolicy of this instance is equivalent to the following:
BlobAppendableUploadConfig . of ()
. withFlushPolicy ( FlushPolicy . minFlushSize ( 256 * 1024 ))
. withCloseAction ( CloseAction . CLOSE_WITHOUT_FINALIZING )
See Also: FlushPolicy#minFlushSize(int)
Returns
Type
Description
BlobAppendableUploadConfig
Methods
equals(Object o)
public boolean equals ( Object o )
Parameter
Name
Description
o
Object
Returns
Type
Description
boolean
Overrides
Object.equals(Object)
getCloseAction()
public BlobAppendableUploadConfig . CloseAction getCloseAction ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
The CloseAction which will dictate the behavior of AppendableUploadWriteableByteChannel#close() .
Default: CloseAction#CLOSE_WITHOUT_FINALIZING
See Also: #withCloseAction(CloseAction)
Returns
Type
Description
BlobAppendableUploadConfig.CloseAction
getFlushPolicy()
public FlushPolicy getFlushPolicy ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
The FlushPolicy which will be used to determine when and how many bytes to flush to
GCS.
Default: FlushPolicy#minFlushSize()
See Also: #withFlushPolicy(FlushPolicy)
Returns
Type
Description
FlushPolicy
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
toString()
public String toString ()
Returns
Type
Description
String
Overrides
Object.toString()
withCloseAction(BlobAppendableUploadConfig.CloseAction closeAction)
public BlobAppendableUploadConfig withCloseAction ( BlobAppendableUploadConfig . CloseAction closeAction )
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Return an instance with the CloseAction set to be the specified value.
Default: CloseAction#CLOSE_WITHOUT_FINALIZING
See Also: #getCloseAction()
Parameter
Name
Description
closeAction
BlobAppendableUploadConfig.CloseAction
Returns
Type
Description
BlobAppendableUploadConfig
withFlushPolicy(FlushPolicy flushPolicy)
public BlobAppendableUploadConfig withFlushPolicy ( FlushPolicy flushPolicy )
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Return an instance with the FlushPolicy set to be the specified value.
Default: FlushPolicy#minFlushSize()
See Also: #getFlushPolicy()
Parameter
Name
Description
flushPolicy
FlushPolicy
Returns
Type
Description
BlobAppendableUploadConfig
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]

---
title: "Class AnnotateImageResponse (3.86.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateImageResponse
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateImageResponse
  title: "Class AnnotateImageResponse (3.86.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AnnotateImageResponse (3.86.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.86.0 (latest)
3.85.0
3.83.0
3.81.0
3.80.0
3.78.0
3.76.0
3.74.0
3.73.0
3.72.0
3.71.0
3.70.0
3.68.0
3.66.0
3.65.0
3.62.0
3.61.0
3.60.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.0
3.49.0
3.47.0
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.0
3.39.0
3.38.0
3.37.0
3.35.0
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.0
3.26.0
3.25.0
3.22.0
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.0
3.10.0
3.9.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.3
2.1.4
2.0.29
public final class AnnotateImageResponse extends GeneratedMessage implements AnnotateImageResponseOrBuilder
Response to an image annotation request.
Protobuf type google.cloud.vision.v1.AnnotateImageResponse
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AnnotateImageResponse
Implements
AnnotateImageResponseOrBuilder
Inherited Members
AbstractMessage.equals(Object)
AbstractMessage.findInitializationErrors()
AbstractMessage.getInitializationErrorString()
AbstractMessage.hashCode()
AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>)
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent)
AbstractMessage.toString()
AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>)
AbstractMessageLite.checkByteStringIsUtf8(ByteString)
AbstractMessageLite.toByteArray()
AbstractMessageLite.toByteString()
AbstractMessageLite.writeDelimitedTo(OutputStream)
AbstractMessageLite.writeTo(OutputStream)
com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message)
com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message)
com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT)
com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int)
GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream)
GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)
GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream)
GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite)
GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream)
GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)
com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>)
com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int)
com.google.protobuf.GeneratedMessage.canUseUnsafe()
GeneratedMessage.computeStringSize(int,Object)
GeneratedMessage.computeStringSizeNoTag(Object)
com.google.protobuf.GeneratedMessage.emptyBooleanList()
com.google.protobuf.GeneratedMessage.emptyDoubleList()
com.google.protobuf.GeneratedMessage.emptyFloatList()
com.google.protobuf.GeneratedMessage.emptyIntList()
com.google.protobuf.GeneratedMessage.emptyLongList()
GeneratedMessage.getAllFields()
GeneratedMessage.getDescriptorForType()
GeneratedMessage.getField(Descriptors.FieldDescriptor)
GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor)
GeneratedMessage.getParserForType()
GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int)
GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor)
GeneratedMessage.getSerializedSize()
GeneratedMessage.getUnknownFields()
GeneratedMessage.hasField(Descriptors.FieldDescriptor)
GeneratedMessage.hasOneof(Descriptors.OneofDescriptor)
GeneratedMessage.internalGetFieldAccessorTable()
GeneratedMessage.internalGetMapField(int)
com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int)
GeneratedMessage.isInitialized()
com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object)
GeneratedMessage.makeExtensionsImmutable()
com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite)
com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter)
GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int)
com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int)
GeneratedMessage.writeReplace()
GeneratedMessage.writeString(CodedOutputStream,int,Object)
GeneratedMessage.writeStringNoTag(CodedOutputStream,Object)
GeneratedMessage.writeTo(CodedOutputStream)
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
CONTEXT_FIELD_NUMBER
public static final int CONTEXT_FIELD_NUMBER
Field Value
Type
Description
int
CROP_HINTS_ANNOTATION_FIELD_NUMBER
public static final int CROP_HINTS_ANNOTATION_FIELD_NUMBER
Field Value
Type
Description
int
ERROR_FIELD_NUMBER
public static final int ERROR_FIELD_NUMBER
Field Value
Type
Description
int
FACE_ANNOTATIONS_FIELD_NUMBER
public static final int FACE_ANNOTATIONS_FIELD_NUMBER
Field Value
Type
Description
int
FULL_TEXT_ANNOTATION_FIELD_NUMBER
public static final int FULL_TEXT_ANNOTATION_FIELD_NUMBER
Field Value
Type
Description
int
IMAGE_PROPERTIES_ANNOTATION_FIELD_NUMBER
public static final int IMAGE_PROPERTIES_ANNOTATION_FIELD_NUMBER
Field Value
Type
Description
int
LABEL_ANNOTATIONS_FIELD_NUMBER
public static final int LABEL_ANNOTATIONS_FIELD_NUMBER
Field Value
Type
Description
int
LANDMARK_ANNOTATIONS_FIELD_NUMBER
public static final int LANDMARK_ANNOTATIONS_FIELD_NUMBER
Field Value
Type
Description
int
LOCALIZED_OBJECT_ANNOTATIONS_FIELD_NUMBER
public static final int LOCALIZED_OBJECT_ANNOTATIONS_FIELD_NUMBER
Field Value
Type
Description
int
LOGO_ANNOTATIONS_FIELD_NUMBER
public static final int LOGO_ANNOTATIONS_FIELD_NUMBER
Field Value
Type
Description
int
PRODUCT_SEARCH_RESULTS_FIELD_NUMBER
public static final int PRODUCT_SEARCH_RESULTS_FIELD_NUMBER
Field Value
Type
Description
int
SAFE_SEARCH_ANNOTATION_FIELD_NUMBER
public static final int SAFE_SEARCH_ANNOTATION_FIELD_NUMBER
Field Value
Type
Description
int
TEXT_ANNOTATIONS_FIELD_NUMBER
public static final int TEXT_ANNOTATIONS_FIELD_NUMBER
Field Value
Type
Description
int
WEB_DETECTION_FIELD_NUMBER
public static final int WEB_DETECTION_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AnnotateImageResponse getDefaultInstance ()
Returns
Type
Description
AnnotateImageResponse
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AnnotateImageResponse . Builder newBuilder ()
Returns
Type
Description
AnnotateImageResponse.Builder
newBuilder(AnnotateImageResponse prototype)
public static AnnotateImageResponse . Builder newBuilder ( AnnotateImageResponse prototype )
Parameter
Name
Description
prototype
AnnotateImageResponse
Returns
Type
Description
AnnotateImageResponse.Builder
parseDelimitedFrom(InputStream input)
public static AnnotateImageResponse parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AnnotateImageResponse parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
InputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AnnotateImageResponse parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AnnotateImageResponse parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
byte []
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AnnotateImageResponse parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AnnotateImageResponse parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
ByteString
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AnnotateImageResponse parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AnnotateImageResponse parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
CodedInputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AnnotateImageResponse parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AnnotateImageResponse parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
InputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AnnotateImageResponse parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AnnotateImageResponse parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
ByteBuffer
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AnnotateImageResponse
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AnnotateImageResponse> parser ()
Returns
Type
Description
Parser < AnnotateImageResponse >
Methods
equals(Object obj)
public boolean equals ( Object obj )
Parameter
Name
Description
obj
Object
Returns
Type
Description
boolean
Overrides
AbstractMessage.equals(Object other)
getContext()
public ImageAnnotationContext getContext ()
If present, contextual information is needed to understand where this image
comes from.
.google.cloud.vision.v1.ImageAnnotationContext context = 21;
Returns
Type
Description
ImageAnnotationContext
The context.
getContextOrBuilder()
public ImageAnnotationContextOrBuilder getContextOrBuilder ()
If present, contextual information is needed to understand where this image
comes from.
.google.cloud.vision.v1.ImageAnnotationContext context = 21;
Returns
Type
Description
ImageAnnotationContextOrBuilder
getCropHintsAnnotation()
public CropHintsAnnotation getCropHintsAnnotation ()
If present, crop hints have completed successfully.
.google.cloud.vision.v1.CropHintsAnnotation crop_hints_annotation = 11;
Returns
Type
Description
CropHintsAnnotation
The cropHintsAnnotation.
getCropHintsAnnotationOrBuilder()
public CropHintsAnnotationOrBuilder getCropHintsAnnotationOrBuilder ()
If present, crop hints have completed successfully.
.google.cloud.vision.v1.CropHintsAnnotation crop_hints_annotation = 11;
Returns
Type
Description
CropHintsAnnotationOrBuilder
getDefaultInstanceForType()
public AnnotateImageResponse getDefaultInstanceForType ()
Returns
Type
Description
AnnotateImageResponse
getError()
public Status getError ()
If set, represents the error message for the operation.
Note that filled-in image annotations are guaranteed to be
correct, even when error is set.
.google.rpc.Status error = 9;
Returns
Type
Description
com.google.rpc.Status
The error.
getErrorOrBuilder()
public StatusOrBuilder getErrorOrBuilder ()
If set, represents the error message for the operation.
Note that filled-in image annotations are guaranteed to be
correct, even when error is set.
.google.rpc.Status error = 9;
Returns
Type
Description
com.google.rpc.StatusOrBuilder
getFaceAnnotations(int index)
public FaceAnnotation getFaceAnnotations ( int index )
If present, face detection has completed successfully.
repeated .google.cloud.vision.v1.FaceAnnotation face_annotations = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
FaceAnnotation
getFaceAnnotationsCount()
public int getFaceAnnotationsCount ()
If present, face detection has completed successfully.
repeated .google.cloud.vision.v1.FaceAnnotation face_annotations = 1;
Returns
Type
Description
int
getFaceAnnotationsList()
public List<FaceAnnotation> getFaceAnnotationsList ()
If present, face detection has completed successfully.
repeated .google.cloud.vision.v1.FaceAnnotation face_annotations = 1;
Returns
Type
Description
List < FaceAnnotation >
getFaceAnnotationsOrBuilder(int index)
public FaceAnnotationOrBuilder getFaceAnnotationsOrBuilder ( int index )
If present, face detection has completed successfully.
repeated .google.cloud.vision.v1.FaceAnnotation face_annotations = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
FaceAnnotationOrBuilder
getFaceAnnotationsOrBuilderList()
public List < ? extends FaceAnnotationOrBuilder > getFaceAnnotationsOrBuilderList ()
If present, face detection has completed successfully.
repeated .google.cloud.vision.v1.FaceAnnotation face_annotations = 1;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.FaceAnnotationOrBuilder >
getFullTextAnnotation()
public TextAnnotation getFullTextAnnotation ()
If present, text (OCR) detection or document (OCR) text detection has
completed successfully.
This annotation provides the structural hierarchy for the OCR detected
text.
.google.cloud.vision.v1.TextAnnotation full_text_annotation = 12;
Returns
Type
Description
TextAnnotation
The fullTextAnnotation.
getFullTextAnnotationOrBuilder()
public TextAnnotationOrBuilder getFullTextAnnotationOrBuilder ()
If present, text (OCR) detection or document (OCR) text detection has
completed successfully.
This annotation provides the structural hierarchy for the OCR detected
text.
.google.cloud.vision.v1.TextAnnotation full_text_annotation = 12;
Returns
Type
Description
TextAnnotationOrBuilder
getImagePropertiesAnnotation()
public ImageProperties getImagePropertiesAnnotation ()
If present, image properties were extracted successfully.
.google.cloud.vision.v1.ImageProperties image_properties_annotation = 8;
Returns
Type
Description
ImageProperties
The imagePropertiesAnnotation.
getImagePropertiesAnnotationOrBuilder()
public ImagePropertiesOrBuilder getImagePropertiesAnnotationOrBuilder ()
If present, image properties were extracted successfully.
.google.cloud.vision.v1.ImageProperties image_properties_annotation = 8;
Returns
Type
Description
ImagePropertiesOrBuilder
getLabelAnnotations(int index)
public EntityAnnotation getLabelAnnotations ( int index )
If present, label detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation label_annotations = 4;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotation
getLabelAnnotationsCount()
public int getLabelAnnotationsCount ()
If present, label detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation label_annotations = 4;
Returns
Type
Description
int
getLabelAnnotationsList()
public List<EntityAnnotation> getLabelAnnotationsList ()
If present, label detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation label_annotations = 4;
Returns
Type
Description
List < EntityAnnotation >
getLabelAnnotationsOrBuilder(int index)
public EntityAnnotationOrBuilder getLabelAnnotationsOrBuilder ( int index )
If present, label detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation label_annotations = 4;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotationOrBuilder
getLabelAnnotationsOrBuilderList()
public List < ? extends EntityAnnotationOrBuilder > getLabelAnnotationsOrBuilderList ()
If present, label detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation label_annotations = 4;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.EntityAnnotationOrBuilder >
getLandmarkAnnotations(int index)
public EntityAnnotation getLandmarkAnnotations ( int index )
If present, landmark detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation landmark_annotations = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotation
getLandmarkAnnotationsCount()
public int getLandmarkAnnotationsCount ()
If present, landmark detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation landmark_annotations = 2;
Returns
Type
Description
int
getLandmarkAnnotationsList()
public List<EntityAnnotation> getLandmarkAnnotationsList ()
If present, landmark detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation landmark_annotations = 2;
Returns
Type
Description
List < EntityAnnotation >
getLandmarkAnnotationsOrBuilder(int index)
public EntityAnnotationOrBuilder getLandmarkAnnotationsOrBuilder ( int index )
If present, landmark detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation landmark_annotations = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotationOrBuilder
getLandmarkAnnotationsOrBuilderList()
public List < ? extends EntityAnnotationOrBuilder > getLandmarkAnnotationsOrBuilderList ()
If present, landmark detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation landmark_annotations = 2;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.EntityAnnotationOrBuilder >
getLocalizedObjectAnnotations(int index)
public LocalizedObjectAnnotation getLocalizedObjectAnnotations ( int index )
If present, localized object detection has completed successfully.
This will be sorted descending by confidence score.
repeated .google.cloud.vision.v1.LocalizedObjectAnnotation localized_object_annotations = 22;
Parameter
Name
Description
index
int
Returns
Type
Description
LocalizedObjectAnnotation
getLocalizedObjectAnnotationsCount()
public int getLocalizedObjectAnnotationsCount ()
If present, localized object detection has completed successfully.
This will be sorted descending by confidence score.
repeated .google.cloud.vision.v1.LocalizedObjectAnnotation localized_object_annotations = 22;
Returns
Type
Description
int
getLocalizedObjectAnnotationsList()
public List<LocalizedObjectAnnotation> getLocalizedObjectAnnotationsList ()
If present, localized object detection has completed successfully.
This will be sorted descending by confidence score.
repeated .google.cloud.vision.v1.LocalizedObjectAnnotation localized_object_annotations = 22;
Returns
Type
Description
List < LocalizedObjectAnnotation >
getLocalizedObjectAnnotationsOrBuilder(int index)
public LocalizedObjectAnnotationOrBuilder getLocalizedObjectAnnotationsOrBuilder ( int index )
If present, localized object detection has completed successfully.
This will be sorted descending by confidence score.
repeated .google.cloud.vision.v1.LocalizedObjectAnnotation localized_object_annotations = 22;
Parameter
Name
Description
index
int
Returns
Type
Description
LocalizedObjectAnnotationOrBuilder
getLocalizedObjectAnnotationsOrBuilderList()
public List < ? extends LocalizedObjectAnnotationOrBuilder > getLocalizedObjectAnnotationsOrBuilderList ()
If present, localized object detection has completed successfully.
This will be sorted descending by confidence score.
repeated .google.cloud.vision.v1.LocalizedObjectAnnotation localized_object_annotations = 22;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.LocalizedObjectAnnotationOrBuilder >
getLogoAnnotations(int index)
public EntityAnnotation getLogoAnnotations ( int index )
If present, logo detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation logo_annotations = 3;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotation
getLogoAnnotationsCount()
public int getLogoAnnotationsCount ()
If present, logo detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation logo_annotations = 3;
Returns
Type
Description
int
getLogoAnnotationsList()
public List<EntityAnnotation> getLogoAnnotationsList ()
If present, logo detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation logo_annotations = 3;
Returns
Type
Description
List < EntityAnnotation >
getLogoAnnotationsOrBuilder(int index)
public EntityAnnotationOrBuilder getLogoAnnotationsOrBuilder ( int index )
If present, logo detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation logo_annotations = 3;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotationOrBuilder
getLogoAnnotationsOrBuilderList()
public List < ? extends EntityAnnotationOrBuilder > getLogoAnnotationsOrBuilderList ()
If present, logo detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation logo_annotations = 3;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.EntityAnnotationOrBuilder >
getParserForType()
public Parser<AnnotateImageResponse> getParserForType ()
Returns
Type
Description
Parser < AnnotateImageResponse >
Overrides
GeneratedMessage.getParserForType()
getProductSearchResults()
public ProductSearchResults getProductSearchResults ()
If present, product search has completed successfully.
.google.cloud.vision.v1.ProductSearchResults product_search_results = 14;
Returns
Type
Description
ProductSearchResults
The productSearchResults.
getProductSearchResultsOrBuilder()
public ProductSearchResultsOrBuilder getProductSearchResultsOrBuilder ()
If present, product search has completed successfully.
.google.cloud.vision.v1.ProductSearchResults product_search_results = 14;
Returns
Type
Description
ProductSearchResultsOrBuilder
getSafeSearchAnnotation()
public SafeSearchAnnotation getSafeSearchAnnotation ()
If present, safe-search annotation has completed successfully.
.google.cloud.vision.v1.SafeSearchAnnotation safe_search_annotation = 6;
Returns
Type
Description
SafeSearchAnnotation
The safeSearchAnnotation.
getSafeSearchAnnotationOrBuilder()
public SafeSearchAnnotationOrBuilder getSafeSearchAnnotationOrBuilder ()
If present, safe-search annotation has completed successfully.
.google.cloud.vision.v1.SafeSearchAnnotation safe_search_annotation = 6;
Returns
Type
Description
SafeSearchAnnotationOrBuilder
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getTextAnnotations(int index)
public EntityAnnotation getTextAnnotations ( int index )
If present, text (OCR) detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation text_annotations = 5;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotation
getTextAnnotationsCount()
public int getTextAnnotationsCount ()
If present, text (OCR) detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation text_annotations = 5;
Returns
Type
Description
int
getTextAnnotationsList()
public List<EntityAnnotation> getTextAnnotationsList ()
If present, text (OCR) detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation text_annotations = 5;
Returns
Type
Description
List < EntityAnnotation >
getTextAnnotationsOrBuilder(int index)
public EntityAnnotationOrBuilder getTextAnnotationsOrBuilder ( int index )
If present, text (OCR) detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation text_annotations = 5;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotationOrBuilder
getTextAnnotationsOrBuilderList()
public List < ? extends EntityAnnotationOrBuilder > getTextAnnotationsOrBuilderList ()
If present, text (OCR) detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation text_annotations = 5;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.EntityAnnotationOrBuilder >
getWebDetection()
public WebDetection getWebDetection ()
If present, web detection has completed successfully.
.google.cloud.vision.v1.WebDetection web_detection = 13;
Returns
Type
Description
WebDetection
The webDetection.
getWebDetectionOrBuilder()
public WebDetectionOrBuilder getWebDetectionOrBuilder ()
If present, web detection has completed successfully.
.google.cloud.vision.v1.WebDetection web_detection = 13;
Returns
Type
Description
WebDetectionOrBuilder
hasContext()
public boolean hasContext ()
If present, contextual information is needed to understand where this image
comes from.
.google.cloud.vision.v1.ImageAnnotationContext context = 21;
Returns
Type
Description
boolean
Whether the context field is set.
hasCropHintsAnnotation()
public boolean hasCropHintsAnnotation ()
If present, crop hints have completed successfully.
.google.cloud.vision.v1.CropHintsAnnotation crop_hints_annotation = 11;
Returns
Type
Description
boolean
Whether the cropHintsAnnotation field is set.
hasError()
public boolean hasError ()
If set, represents the error message for the operation.
Note that filled-in image annotations are guaranteed to be
correct, even when error is set.
.google.rpc.Status error = 9;
Returns
Type
Description
boolean
Whether the error field is set.
hasFullTextAnnotation()
public boolean hasFullTextAnnotation ()
If present, text (OCR) detection or document (OCR) text detection has
completed successfully.
This annotation provides the structural hierarchy for the OCR detected
text.
.google.cloud.vision.v1.TextAnnotation full_text_annotation = 12;
Returns
Type
Description
boolean
Whether the fullTextAnnotation field is set.
hasImagePropertiesAnnotation()
public boolean hasImagePropertiesAnnotation ()
If present, image properties were extracted successfully.
.google.cloud.vision.v1.ImageProperties image_properties_annotation = 8;
Returns
Type
Description
boolean
Whether the imagePropertiesAnnotation field is set.
hasProductSearchResults()
public boolean hasProductSearchResults ()
If present, product search has completed successfully.
.google.cloud.vision.v1.ProductSearchResults product_search_results = 14;
Returns
Type
Description
boolean
Whether the productSearchResults field is set.
hasSafeSearchAnnotation()
public boolean hasSafeSearchAnnotation ()
If present, safe-search annotation has completed successfully.
.google.cloud.vision.v1.SafeSearchAnnotation safe_search_annotation = 6;
Returns
Type
Description
boolean
Whether the safeSearchAnnotation field is set.
hasWebDetection()
public boolean hasWebDetection ()
If present, web detection has completed successfully.
.google.cloud.vision.v1.WebDetection web_detection = 13;
Returns
Type
Description
boolean
Whether the webDetection field is set.
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
AbstractMessage.hashCode()
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.internalGetFieldAccessorTable()
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.isInitialized()
newBuilderForType()
public AnnotateImageResponse . Builder newBuilderForType ()
Returns
Type
Description
AnnotateImageResponse.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AnnotateImageResponse . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AnnotateImageResponse.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AnnotateImageResponse . Builder toBuilder ()
Returns
Type
Description
AnnotateImageResponse.Builder
writeTo(CodedOutputStream output)
public void writeTo ( CodedOutputStream output )
Parameter
Name
Description
output
CodedOutputStream
Overrides
GeneratedMessage.writeTo(CodedOutputStream output)
Exceptions
Type
Description
IOException
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

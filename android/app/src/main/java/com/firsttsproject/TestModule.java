package com.firsttsproject;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class TestModule extends ReactContextBaseJavaModule {
   TestModule(ReactApplicationContext context) {
       super(context);
   }

  @Override
  public String getName() {
    return "TestModule";
  }
  @ReactMethod(isBlockingSynchronousMethod = true)
  public String getTestMessage() {
    return "Message from the native Test Module";
  }
}
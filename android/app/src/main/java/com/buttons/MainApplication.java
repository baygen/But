package com.buttons;

import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.IntentFilter;
//import android.media.session.AudioManager;
//import android.content.;
import com.facebook.react.ReactApplication;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.zmxv.RNSound.RNSoundPackage;
import org.reactnative.camera.RNCameraPackage;
import com.github.kevinejohn.keyevent.KeyEventPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.buttons.services.call.CallReceiver;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new RNCameraPackage(),
            new MainReactPackage(),
            new RNDeviceInfo(),
            new RNSoundPackage(),
            new KeyEventPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
//    AudioManager am = (AudioManager)this.getSystemService(this.AUDIO_SERVICE);
//    BroadcastReceiver rec = new CallReceiver();
//    am.setM
//    am.registerMediaButtonEventReceiver(new CallReceiver());
//    this.registerReceiver(new CallReceiver(), IntentFilter.create("android.intent.action.SCREEN_ON",""));
  }
}

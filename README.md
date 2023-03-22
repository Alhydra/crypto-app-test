
# React Native Test

**Task Description**

You're tasked with designing a simple mobile app that allows users to input a twelve-
word recovery seed, derive and store their private key, and view their ETH balance and

address. The app should be designed using React Native and TypeScript, and it should
work on both iOS and Android devices.


**Final result**

![enter image description here](https://i.ibb.co/vjM5QWt/New-Project.png)

**How to secure API keys and Secrets?**
API keys and secrets must not be hardcoded or saved in the client side, in this case the mobile app, instead it should be secured via environment configuration variables. However, if some data is needed to be saved in a client side, in this case crypto wallet private key, we can it can be stored with encryption, hence in this example I used a [secure store library](https://docs.expo.dev/versions/latest/sdk/securestore/).

**Publishing the app to the Play Store and Apple App Store,**
Assuming the store listing information is ready, in order to publish an app into play store or app store.
We first prepare the release, either the apk or ipa, then submit it for review, then publish the app once approved.
For a large scale app, an automated process is needed to be more efficent, as an example we can use App Center Distribute, stream a CI/CD pipeline to handle MR's, run unit tests and build a release and the it will be automatically distributed to the app store or play store
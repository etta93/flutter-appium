# Framework that I used for android automation sript

1. Appium flutter driver with webdriverio in nodejs https://github.com/appium-userland/appium-flutter-driver
2. Need to generate apk that enable flutter drivver extension

# How to prepare APK debug with flutter driver extension

1. Clone https://github.com/flutter/gallery
2. Open project in vs code
3. go to file ./lib/main.dart https://github.com/flutter/gallery/blob/master/lib/main.dart
4. add import driver_extension
`import 'package:flutter/material.dart';
import 'package:flutter_driver/driver_extension.dart';`
5. add this line of code inside void main() function
`enableFlutterDriverExtension();`
6. Run `flutter build apk --debug`
7. Get the apk from ./build/app/outputs/flutter-apk 

# To run the automation locally

1. Make sure node and npm are installed locally
2. go to project directory
3. `npm install -g typescript` for typescript compile to work globally
4. `npm install` to install node modules 
5. run `npm link`
6. install Appium globally by running `npm i -g appium`
7. run appium server by running `appium` (in a seperate terminal)
8. either run `APPIUM_OS=android npm start` or `APPIUM_OS=ios npm start`
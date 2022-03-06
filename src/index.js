// import * as wdio from 'webdriverio';
// import * as assert from 'assert';
const wdio = require('webdriverio');
const assert = require('assert');
const find = require('appium-flutter-finder');

const osSpecificOps =
  process.env.APPIUM_OS === 'android'
    ? {
        platformName: 'Android',
        deviceName: 'Galaxy A50s'
      }
    : process.env.APPIUM_OS === 'ios'
    ? {
        platformName: 'iOS',
        platformVersion: '12.4',
        deviceName: 'iPhone X',
        noReset: true,
      }
    : {};

const opts = {
  port: 4723,
  path: '/wd/hub',
  capabilities: {
    ...osSpecificOps,
    automationName: 'Flutter',
    appPackage: "io.flutter.demo.gallery",
    appActivity: "io.flutter.demo.gallery.MainActivity"
  }
};

(async () => {

  const driver = await wdio.remote(opts);

  assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');
  await driver.execute('flutter:clearTimeline');
  await driver.execute('flutter:forceGC');

  await driver.execute('flutter:waitFor', find.byText('Gallery'));
  await driver.execute('flutter:waitFor',  find.byText('Reply'));
  await driver.execute('flutter:scrollIntoView', find.byText('Shrine'), {alignment: 0.1});
  await driver.elementClick(find.byText('Shrine'));


  await driver.elementClick(find.byType('_UsernameTextField'));
  await driver.elementSendKeys(find.byType('_UsernameTextField'), 'Margaretta');

  await driver.elementClick(find.byType('_PasswordTextField'));
  await driver.elementSendKeys(find.byType('_PasswordTextField'), 'Password');

  await driver.elementClick(find.byType('ElevatedButton'));


  await driver.execute('flutter:waitFor', find.byTooltip('Open menu'));
  await driver.elementClick(find.byTooltip('Open menu'));
  await driver.execute('flutter:waitFor', find.byText('MENU'));
  await driver.elementClick(find.byText('CLOTHING'));

  await driver.execute('flutter:waitFor', find.byText('Sea tunic'));

  await driver.execute('flutter:scrollIntoView', find.byText('Plaster tunic'), {alignment: 0.1});
  await driver.execute('flutter:scrollIntoView', find.byText('White pinstripe shirt'), {alignment: 0.1});
  await driver.execute('flutter:scrollIntoView', find.byText('Seabreeze sweater'), {alignment: 0.1});
  await driver.execute('flutter:scrollIntoView', find.byText('Gentry jacket'), {alignment: 0.1});
  await driver.execute('flutter:scrollIntoView', find.byText('Walter henley (white)'), {alignment: 0.1});
  await driver.elementClick(find.byText('Walter henley (white)'));


  await driver.execute('flutter:waitFor', find.byTooltip('Open menu'));
  await driver.elementClick(find.byTooltip('Open menu'));
  await driver.execute('flutter:waitFor', find.byText('MENU'));
  await driver.elementClick(find.byText('ACCESSORIES'));

  await driver.elementClick(find.byText('Shrug bag'));

  await driver.execute('flutter:waitFor', find.byType('AnimatedPadding'));
  await driver.elementClick(find.byType('AnimatedPadding'));

  await driver.execute('flutter:waitFor', find.byText('CLEAR CART'));

  assert.strictEqual(
    await driver.getElementText(find.byText('$264.16')),
    '$264.16'
  );

  await driver.elementClick(find.byType('ElevatedButton'));

  await driver.execute('flutter:waitFor', find.byType('AnimatedPadding'));
  await driver.elementClick(find.byType('AnimatedPadding'));
  
  assert.strictEqual(
    await driver.getElementText(find.byText('NO ITEMS')),
    'NO ITEMS'
  );

  driver.deleteSession();
})();
/// <reference path="../../typings/chrome/chrome.d.ts" />

chrome.runtime.onInstalled.addListener(() => {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon.svg',
    title: 'title',
    message: 'message',
  });
});

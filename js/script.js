// Created by: Clara
// Created on: May 2024
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-02-clara-tyman/sw.js", {
    scope: "/ICD2O-Unit-6-02-clara-tyman/",
  })
}

/**
 * This function updates the cookie count.
 */
function updateCookieCount() {

  // input and process
  if (localStorage.updateCookieCount) {
    localStorage.updateCookieCount = Number(localStorage.updateCookieCount) + 1
  } else {
    localStorage.updateCookieCount = 1
  }

  // output
  document.getElementById("answer").innerHTML = "The amount of times clicked: " + localStorage.updateCookieCount
}
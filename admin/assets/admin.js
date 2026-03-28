"use strict";

const TOKEN_KEY = "leah-fashion-admin-token";

const authPanel = document.getElementById("auth-panel");
const editorPanel = document.getElementById("editor-panel");
const loginForm = document.getElementById("login-form");
const authStatus = document.getElementById("auth-status");
const editorStatus = document.getElementById("editor-status");
const jsonField = document.getElementById("content-json");
const reloadButton = document.getElementById("reload-content");
const saveButton = document.getElementById("save-content");
const formatButton = document.getElementById("format-json");
const logoutButton = document.getElementById("logout");

initialize();

async function initialize() {
  const token = getToken();

  if (!token) {
    showAuth();
    attachEvents();
    return;
  }

  showEditor();
  attachEvents();
  await loadEditorContent();
}

function attachEvents() {
  loginForm.addEventListener("submit", onLogin);
  reloadButton.addEventListener("click", loadEditorContent);
  saveButton.addEventListener("click", saveEditorContent);
  formatButton.addEventListener("click", formatEditorJson);
  logoutButton.addEventListener("click", logout);
}

async function onLogin(event) {
  event.preventDefault();

  setStatus(authStatus, "Signing in...");

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.error || "Login failed.");
    }

    window.localStorage.setItem(TOKEN_KEY, payload.token);
    showEditor();
    setStatus(editorStatus, "Signed in. Loading content...");
    await loadEditorContent();
  } catch (error) {
    setStatus(authStatus, error.message, "error");
  }
}

async function loadEditorContent() {
  setStatus(editorStatus, "Loading site content...");

  try {
    const response = await fetch("/api/admin/content", {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.error || "Could not load content.");
    }

    jsonField.value = JSON.stringify(payload.content, null, 2);
    setStatus(editorStatus, "Content loaded.", "success");
  } catch (error) {
    setStatus(editorStatus, error.message, "error");
  }
}

async function saveEditorContent() {
  let parsed;

  try {
    parsed = JSON.parse(jsonField.value);
  } catch (error) {
    setStatus(editorStatus, "JSON is invalid. Fix the syntax before saving.", "error");
    return;
  }

  setStatus(editorStatus, "Saving to database...");

  try {
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`
      },
      body: JSON.stringify({ content: parsed })
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.error || "Save failed.");
    }

    jsonField.value = JSON.stringify(payload.content, null, 2);
    setStatus(editorStatus, payload.message || "Saved successfully.", "success");
  } catch (error) {
    setStatus(editorStatus, error.message, "error");
  }
}

function formatEditorJson() {
  try {
    const parsed = JSON.parse(jsonField.value);
    jsonField.value = JSON.stringify(parsed, null, 2);
    setStatus(editorStatus, "JSON formatted.", "success");
  } catch (error) {
    setStatus(editorStatus, "Cannot format invalid JSON.", "error");
  }
}

function logout() {
  window.localStorage.removeItem(TOKEN_KEY);
  jsonField.value = "";
  showAuth();
  setStatus(authStatus, "Signed out.", "success");
}

function showAuth() {
  authPanel.classList.remove("hidden");
  editorPanel.classList.add("hidden");
}

function showEditor() {
  authPanel.classList.add("hidden");
  editorPanel.classList.remove("hidden");
}

function getToken() {
  return window.localStorage.getItem(TOKEN_KEY);
}

function setStatus(node, message, tone = "") {
  node.textContent = message;
  node.classList.remove("is-error", "is-success");

  if (tone === "error") {
    node.classList.add("is-error");
  }

  if (tone === "success") {
    node.classList.add("is-success");
  }
}

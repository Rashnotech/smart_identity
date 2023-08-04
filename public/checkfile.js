!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["@canva/editing-extensions-api"] = t())
    : (e["@canva/editing-extensions-api"] = t());
})(self, function () {
  return (() => {
    "use strict";
    var e = {
        969: (e, t) => {
          function r(e) {
            const [t, r] = e.trim().split(".");
            return {
              majorLevel: Number.parseInt(t, 10),
              minorLevel: Number.parseInt(r, 10),
            };
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ApiLevel = void 0),
            (t.ApiLevel = class {
              constructor(e) {
                this.apiLevel = e;
                const { majorLevel: t, minorLevel: n } = r(e);
                (this.majorLevel = t), (this.minorLevel = n);
              }
              inRange(e, t) {
                return this.isAtLeast(e) && this.isBefore(t);
              }
              isAtLeast(e) {
                const { majorLevel: t, minorLevel: n } = r(e);
                return (
                  t < this.majorLevel ||
                  (t === this.majorLevel && n <= this.minorLevel)
                );
              }
              isBefore(e) {
                const { majorLevel: t, minorLevel: n } = r(e);
                return (
                  t > this.majorLevel ||
                  (t === this.majorLevel && n > this.minorLevel)
                );
              }
              toString() {
                return this.apiLevel;
              }
            });
        },
        942: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Message = void 0),
            (function (e) {
              let t, r;
              !(function (e) {
                (e.WAKE_UP = "wake_up"),
                  (e.INIT_REQUEST = "init_request"),
                  (e.INIT_RESPONSE = "init_response"),
                  (e.INTERACTION_RECORDING_REQUEST =
                    "interaction_recording_request"),
                  (e.PRESETS_REQUEST = "presets_request"),
                  (e.PRESETS_RESPONSE = "presets_response"),
                  (e.PRESET_SELECTED = "preset_selected"),
                  (e.CONTROLS_RENDER = "controls_render"),
                  (e.CONTROLS_EVENT = "controls_event"),
                  (e.UNDO_REDO_CONFIG_REQUEST = "undo_redo_config_request"),
                  (e.UNDO_REDO_REQUEST = "undo_redo_request"),
                  (e.IMAGE_UPDATE_REQUEST = "image_update_request"),
                  (e.IMAGE_UPDATE_RESPONSE = "image_update_response"),
                  (e.DATA_LOAD_REQUEST = "data_load_request"),
                  (e.DATA_LOAD_RESPONSE = "data_load_response"),
                  (e.DATA_SAVE_REQUEST = "data_save_request"),
                  (e.DATA_SAVE_RESPONSE = "data_save_response"),
                  (e.LAYOUT_CHANGE = "layout_change"),
                  (e.UPDATE_LAYOUT = "update_layout"),
                  (e.SAVE_REQUEST = "save_request"),
                  (e.SAVE_RESPONSE = "save_response"),
                  (e.SPINNER_TOGGLE = "spinner_toggle"),
                  (e.TOUCH_MODE = "touch_mode"),
                  (e.TOUCH_MODE_EXIT = "touch_mode_exit"),
                  (e.NOTIFICATION_SHOW = "notification_show"),
                  (e.START_REMOTE_PROCESS = "start_remote_process"),
                  (e.REMOTE_PROCESS_COMPLETE = "remote_process_complete"),
                  (e.PROXY_REQUEST = "proxy_request"),
                  (e.PROXY_RESPONSE = "proxy_response"),
                  (e.ERROR_REPORT = "error_report"),
                  (e.EXIT = "exit"),
                  (e.DISPOSE_REQUEST = "dispose_request"),
                  (e.DISPOSE_RESPONSE = "dispose_response");
              })((t = e.Topic || (e.Topic = {}))),
                (function (e) {
                  (e.UNDO = "UNDO"), (e.REDO = "REDO");
                })((r = e.UndoRedoEventType || (e.UndoRedoEventType = {})));
            })(t.Message || (t.Message = {}));
        },
        742: function (e, t, r) {
          var n =
              (this && this.__awaiter) ||
              function (e, t, r, n) {
                return new (r || (r = Promise))(function (o, a) {
                  function s(e) {
                    try {
                      l(n.next(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function i(e) {
                    try {
                      l(n.throw(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function l(e) {
                    var t;
                    e.done
                      ? o(e.value)
                      : ((t = e.value),
                        t instanceof r
                          ? t
                          : new r(function (e) {
                              e(t);
                            })).then(s, i);
                  }
                  l((n = n.apply(e, t || [])).next());
                });
              },
            o =
              (this && this.__rest) ||
              function (e, t) {
                var r = {};
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) &&
                    t.indexOf(n) < 0 &&
                    (r[n] = e[n]);
                if (
                  null != e &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var o = 0;
                  for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    t.indexOf(n[o]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                      (r[n[o]] = e[n[o]]);
                }
                return r;
              };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.CanvaApiClient = t.init = void 0);
          const a = r(969),
            s = r(942),
            i = r(890),
            l = r(998),
            c = r(997),
            d = r(825);
          t.init = function (e) {
            const t = new MessageChannel(),
              r = new d.IFrameClientBusComms(t.port1),
              n = m.__initialize(r, e);
            var o;
            return (
              (o = t.port2),
              window.parent.postMessage({ topic: "wake_up" }, "*", [o]),
              n
            );
          };
          const u = (e) =>
            e.filter(({ type: e }) => "vertical_scroller" === e).length;
          function p(e) {
            const t = Array.isArray(e) ? e : e.controls,
              r = u(t),
              n = h(t),
              o = u(n);
            if (r > 1 || o > 0)
              throw (
                (console.error(
                  "You may only use at most 1 vertical scroller control and it must be at the top level"
                ),
                new Error(
                  "You may only use at most 1 vertical scroller control and it must be at the top level"
                ))
              );
          }
          function h(e) {
            let t = [];
            const r = e.filter((e) => !!e.children);
            for (const e of r) {
              const r = e.children;
              (t = t.concat(r)), (t = t.concat(h(r)));
            }
            return t;
          }
          class m {
            constructor(e, t) {
              (this.comms = e),
                (this.PROXY_REQUEST_TIMEOUT = 25e3),
                (this.remoteProcessCounter = 0),
                (this.isImageUpdateCalled = !1),
                (this.isOnReadyCalled = !1),
                (this.onReceiveMessage = this.onReceiveMessage.bind(this)),
                this.comms.onMessage(this.onReceiveMessage),
                (this.readyHandler = new Promise(
                  (e) => (this.setReadyHandler = e)
                )),
                (this.apiLevel = new a.ApiLevel(t)),
                (this.controlEventHandlerMap = new f());
            }
            static __initialize(e, t) {
              return new m(e, t);
            }
            render() {}
            onReady(e) {
              this.setReadyHandler && this.setReadyHandler(e);
            }
            onControlsEvent(e) {
              this.controlsEventHandler = e;
            }
            create(e, t, ...r) {
              const n = l.getControlCreate(e);
              let o = Object.assign({}, t);
              return (
                r.length &&
                  (o = Object.assign(Object.assign({}, t), { children: r })),
                n(o)
              );
            }
            handleUndoEvent(e) {
              this.undoEventHandler &&
                this.undoEventHandler({ message: e.action });
            }
            onUndoRedoEvent(e) {
              const t = /Mac|iPod|iPhone|iPad/.test(navigator.platform),
                r = (e, t) =>
                  e.code
                    ? e.code === "Key" + t.toUpperCase()
                    : t.toUpperCase().charCodeAt(0) === e.keyCode ||
                      t.toLowerCase().charCodeAt(0) === e.keyCode;
              document.addEventListener(
                "keydown",
                (e) => {
                  let n = null;
                  if (
                    ((e) => (t ? e.metaKey : e.ctrlKey))(e) &&
                    !((e) => (e.altKey || t ? e.ctrlKey : e.metaKey))(e)
                  ) {
                    const t = r(e, "z"),
                      o = r(e, "y");
                    (t && e.shiftKey) || (o && !e.shiftKey)
                      ? (n = s.Message.UndoRedoEventType.REDO)
                      : t &&
                        !e.shiftKey &&
                        (n = s.Message.UndoRedoEventType.UNDO);
                  }
                  n &&
                    this.onReceiveMessage({
                      topic: "undo_redo_request",
                      action: n,
                    });
                },
                { capture: !0 }
              ),
                (this.undoEventHandler = e);
            }
            updateUndoRedoStatus(e) {
              this.comms.castMessage({
                topic: "undo_redo_config_request",
                config: e,
              });
            }
            onPresetsRequest(e) {
              this.presetsRequestHandler = e;
            }
            onPresetSelected(e) {
              this.presetSelectedHandler = e;
            }
            onSaveRequest(e) {
              this.saveRequestHandler = e;
            }
            onImageUpdate(e) {
              if (this.imageUpdateHandler)
                throw new Error(
                  "ImageUpdateHandler event handler has already been defined"
                );
              this.imageUpdateHandler = e;
            }
            __onDataLoadRequest(e) {
              if (this.dataLoadRequestHandler)
                throw new Error(
                  "dataLoadRequestHandler event handler has already been defined"
                );
              this.dataLoadRequestHandler = e;
            }
            __onDataSaveRequest(e) {
              if (this.dataSaveRequestHandler)
                throw new Error(
                  "dataSaveRequestHandler event handler has already been defined"
                );
              this.dataSaveRequestHandler = e;
            }
            onViewportResize(e) {
              if (this.viewportResizeHandler)
                throw new Error(
                  "ViewportResize event handler has already been defined"
                );
              this.viewportResizeHandler = e;
            }
            onLayoutChange(e) {
              if (this.layoutChangeHandler)
                throw new Error(
                  "LayoutChange event handler has already been defined"
                );
              this.layoutChangeHandler = e;
            }
            onReceiveMessage(e) {
              return n(this, void 0, void 0, function* () {
                if (this.exitingWithImage)
                  return "save_request" === e.topic
                    ? Promise.resolve({
                        topic: "save_response",
                        image: this.exitingWithImage,
                      })
                    : void 0;
                switch (e.topic) {
                  case "controls_event":
                    return this.handleControlsEvent(e);
                  case "image_update_request":
                    return this.handleImageUpdate(e);
                  case "data_load_request":
                    return this.handleDataLoad(e);
                  case "data_save_request":
                    return this.handleDataSave(e);
                  case "layout_change":
                    return this.handleLayoutChange(e);
                  case "touch_mode_exit":
                    return this.handleTouchModeExit(e);
                  case "save_request":
                    return this.handleSaveRequest(e);
                  case "interaction_recording_request":
                    return this.handleInteractionRecordingRequest(e);
                  case "init_request":
                    return this.handleInitRequest(e);
                  case "undo_redo_request":
                    return this.handleUndoEvent(e);
                  case "remote_process_complete":
                    if (
                      this.remoteProcessStateMachine &&
                      e.processId === this.remoteProcessCounter
                    )
                      return this.remoteProcessStateMachine.receive(e);
                    throw new Error(
                      `Unsolicited ${e.topic} message received processId: ${e.processId}`
                    );
                  case "presets_request":
                    return this.handlePresetsRequest(e);
                  case "preset_selected":
                    return this.handlePresetSelected(e);
                  case "dispose_request":
                    return this.handleDisposeRequest();
                  case "proxy_response":
                    throw new Error(`Unsolicited ${e.topic} response received`);
                  default:
                    c.checkNever(e), console.warn("Unknown message type", e);
                }
              });
            }
            handleInteractionRecordingRequest(e) {
              const { orgId: t } = e;
              (window._fs_run_in_iframe = !0),
                (window._fs_host = "fullstory.com"),
                (window._fs_script = "edge.fullstory.com/s/fs.js"),
                (window._fs_org = t),
                (window._fs_namespace = "FS"),
                (window._fs_debug = !1);
              const r = document.createElement("script");
              (r.src = `https://${window._fs_script}`),
                (r.async = !0),
                (r.crossOrigin = "anonymous"),
                document.head.appendChild(r);
            }
            handleInitRequest(e) {
              return n(this, void 0, void 0, function* () {
                this.isOnReadyCalled = !0;
                try {
                  const t = yield this.readyHandler,
                    { topic: r } = e,
                    n = o(e, ["topic"]);
                  if (this.apiLevel.inRange("1.0", "2.0")) {
                    let e;
                    null != n.element.data &&
                      (e = yield i.CanvaImageHelpers.fromUrl(
                        n.element.data.preview.url
                      )),
                      yield t(
                        Object.assign(Object.assign({}, n), { image: e })
                      );
                  } else {
                    if (!this.apiLevel.isAtLeast("2.0"))
                      throw new c.UnhandledApiLevelError(
                        this.apiLevel.toString(),
                        "handleInitRequest"
                      );
                    yield t(n);
                  }
                  return (
                    this.assertRequiredHandlersRegistered(),
                    { topic: "init_response" }
                  );
                } catch (e) {
                  return (
                    console.error(
                      "[Client] Cannot run the extension:",
                      e.message
                    ),
                    console.error(e),
                    {
                      topic: "init_response",
                      error: !0,
                      errorMessage: e.message,
                    }
                  );
                }
              });
            }
            assertRequiredHandlersRegistered() {
              const e = [
                ["onReady", this.readyHandler],
                ["onImageUpdate", this.imageUpdateHandler],
                ["onSaveRequest", this.saveRequestHandler],
                ["onControlsEvent", this.controlsEventHandler],
              ]
                .filter(([e, t]) => null == t)
                .map(([e]) => e);
              e.length > 0 &&
                console.warn(
                  `Your extension must register handlers for the following events: ${e.join(
                    ", "
                  )}`
                );
            }
            recursivelyAddEventHandlers(e) {
              e.forEach((e) => {
                this.controlEventHandlerMap.addEventHandlers(e),
                  "children" in e &&
                    this.recursivelyAddEventHandlers(e.children),
                  "filterControls" in e &&
                    Array.isArray(e.filterControls) &&
                    this.recursivelyAddEventHandlers(e.filterControls),
                  "columns" in e &&
                    Array.isArray(e.columns) &&
                    e.columns.forEach((e) => {
                      this.recursivelyAddEventHandlers(e.children);
                    });
              });
            }
            updateControlPanel(e) {
              p(e);
              const t = Array.isArray(e) ? e : e.controls;
              this.controlEventHandlerMap &&
                this.recursivelyAddEventHandlers(t),
                this.comms.castMessage({
                  topic: "controls_render",
                  controls: { controls: t },
                });
            }
            handleControlsEvent(e) {
              this.controlEventHandlerMap &&
                this.controlEventHandlerMap.canHandle(e) &&
                this.controlEventHandlerMap.handle({ message: e.message }),
                this.controlsEventHandler &&
                  this.controlsEventHandler({ message: e.message });
            }
            handleImageUpdate(e) {
              return n(this, void 0, void 0, function* () {
                this.isImageUpdateCalled = !0;
                const { image: t } = e;
                return (
                  this.imageUpdateHandler &&
                    (yield this.imageUpdateHandler({ image: t })),
                  { topic: "image_update_response" }
                );
              });
            }
            handleDataLoad(e) {
              return n(this, void 0, void 0, function* () {
                if (!this.dataLoadRequestHandler)
                  throw new Error("No dataLoadRequestHandler registered");
                return (
                  yield this.dataLoadRequestHandler({ data: e.data }),
                  { topic: "data_load_response" }
                );
              });
            }
            handleDataSave(e) {
              return n(this, void 0, void 0, function* () {
                if (!this.dataSaveRequestHandler)
                  throw new Error("No dataSaveRequestHandler registered");
                return {
                  topic: "data_save_response",
                  data: yield this.dataSaveRequestHandler(),
                };
              });
            }
            handleLayoutChange(e) {
              const { layout: t, commit: r, page: n } = e,
                { cropBox: o } = t;
              if (this.apiLevel.inRange("1.0", "2.0")) {
                if (null == o) return;
                const { height: t, width: r } = o;
                this.viewportResizeHandler &&
                  this.viewportResizeHandler({
                    size: { height: t, width: r },
                    commit: e.commit,
                  });
              }
              this.layoutChangeHandler &&
                this.layoutChangeHandler({ layout: t, commit: r, page: n });
            }
            handleTouchModeExit(e) {
              const { commit: t } = e;
              this.touchModeExitHandler &&
                this.touchModeExitHandler({ commit: t });
            }
            handleSaveRequest(e) {
              return n(this, void 0, void 0, function* () {
                if (!this.saveRequestHandler)
                  throw new Error(
                    "Received save request, but no handler configured."
                  );
                if (
                  !this.isImageUpdateCalled &&
                  this.imageUpdateHandler &&
                  null != e.fullImage
                ) {
                  const t = yield i.CanvaImageHelpers.fromUrl(e.fullImage.url);
                  yield this.imageUpdateHandler({ image: t });
                }
                return {
                  topic: "save_response",
                  image: yield this.saveRequestHandler(),
                };
              });
            }
            handlePresetsRequest(e) {
              return n(this, void 0, void 0, function* () {
                if (this.apiLevel.isBefore("2.0") && !this.isOnReadyCalled) {
                  const t = Object.assign(
                    { topic: "init_request" },
                    e.initRequestData
                  );
                  yield this.handleInitRequest(t);
                }
                if (!this.presetsRequestHandler)
                  throw new Error(
                    "Received presets request, but no handler configured."
                  );
                return {
                  topic: "presets_response",
                  presets: yield this.presetsRequestHandler({
                    minDimensions: e.minDimensions,
                    image: e.image,
                    limit: e.limit,
                  }),
                };
              });
            }
            handlePresetSelected(e) {
              return n(this, void 0, void 0, function* () {
                this.presetSelectedHandler &&
                  this.presetSelectedHandler({ presetId: e.presetId });
              });
            }
            handleDisposeRequest() {
              return n(this, void 0, void 0, function* () {
                return (
                  this.disposeRequestHandler &&
                    (yield this.disposeRequestHandler()),
                  { topic: "dispose_response" }
                );
              });
            }
            toggleSpinner(e, t) {
              this.comms.castMessage({
                topic: "spinner_toggle",
                area: e,
                visible: t,
              });
            }
            onTouchModeExit(e) {
              this.touchModeExitHandler = e;
            }
            toggleTouchMode(e) {
              this.comms.castMessage({ topic: "touch_mode", visible: e });
            }
            updateLayout({ layout: e }) {
              this.comms.castMessage({ topic: "update_layout", layout: e });
            }
            showNotification(e, t = "info") {
              this.comms.castMessage({
                topic: "notification_show",
                key: e,
                level: t,
              });
            }
            remoteProcess(e = {}) {
              return n(this, void 0, void 0, function* () {
                return new Promise((t, r) => {
                  (this.remoteProcessStateMachine = new v((e) =>
                    e.result ? t(e.result) : r(e.error)
                  )),
                    this.comms.castMessage({
                      topic: "start_remote_process",
                      processId: ++this.remoteProcessCounter,
                      input: e,
                    });
                });
              });
            }
            request(e, t) {
              return n(this, void 0, void 0, function* () {
                let r;
                if (g(e)) r = e;
                else {
                  if (!g(t)) throw TypeError("Invalid arguments");
                  r = Object.assign(Object.assign({}, t), { endpoint: e });
                }
                const n = yield this.comms.sendMessage(
                  { topic: "proxy_request", config: r },
                  this.PROXY_REQUEST_TIMEOUT
                );
                switch (n.type) {
                  case "SUCCESS":
                    return n.result;
                  case "ERROR":
                    throw c.requestError(n.error);
                  default:
                    throw new c.UnreachableError(
                      "Response type does not match existing ProxyResponse types",
                      n
                    );
                }
              });
            }
            reportError(e) {
              this.comms.castMessage({ topic: "error_report", errorType: e });
            }
            exit(e) {
              (this.exitingWithImage = e),
                this.comms.castMessage({ topic: "exit" });
            }
          }
          t.CanvaApiClient = m;
          class v {
            constructor(e) {
              (this.onComplete = e), (this.complete = !1);
            }
            receive(e) {
              switch (e.topic) {
                case "remote_process_complete":
                  this.complete || (this.onComplete(e), (this.complete = !0));
                  break;
                default:
                  c.checkNever(e.topic),
                    console.warn("Unknown message type", e);
              }
            }
          }
          function g(e) {
            return "object" == typeof e;
          }
          class f {
            constructor() {
              this.eventHandlersSmart = new Map();
            }
            handle({ message: e }) {
              var t;
              let { controlType: r } = e;
              const {
                controlId: n,
                message: { type: o },
              } = e;
              if (!l.ControlHasEventHandlers(r)) return;
              r = r;
              const a =
                  null === (t = this.eventHandlersSmart.get(r)) || void 0 === t
                    ? void 0
                    : t.get(n),
                s = a && a[o];
              if (!s)
                throw Error(
                  `No event handler found for control with type '${r}', id '${n}' and message type '${o}'.`
                );
              s(e.message);
            }
            canHandle({ message: e }) {
              var t;
              let { controlType: r } = e;
              const {
                controlId: n,
                message: { type: o },
              } = e;
              if (!l.ControlHasEventHandlers(r)) return !1;
              r = r;
              const a =
                null === (t = this.eventHandlersSmart.get(r)) || void 0 === t
                  ? void 0
                  : t.get(n);
              return a && a[o];
            }
            addEventHandlers(e) {
              const { type: t, id: r } = e;
              if (!l.ControlHasEventHandlers(e.type)) return;
              this.eventHandlersSmart.has(t) ||
                this.eventHandlersSmart.set(t, new Map());
              const n = this.eventHandlersSmart.get(t);
              switch (e.type) {
                case "app_header":
                  n.set(r, { backButtonClick: e.onBackButtonClick }),
                    delete e.onBackButtonClick;
                  break;
                case "breadcrumb":
                  const { items: o } = e,
                    a = new Map();
                  o.forEach((e) => {
                    if ("onClick" in e && null != e.onClick) {
                      if (!("id" in e))
                        throw (
                          (delete e.onClick,
                          Error(
                            `Breadcrumb item with label ${e.label} requires an id because it has onClick!`
                          ))
                        );
                      a.set(e.id, e.onClick), delete e.onClick;
                    }
                  });
                  const s = ({ itemId: e }) => {
                    const t = a.get(e);
                    void 0 !== t && t();
                  };
                  n.set(r, { click: s });
                  break;
                case "button":
                  n.set(r, { click: e.onClick }), delete e.onClick;
                  break;
                case "checkbox":
                  n.set(r, { change: e.onChange }), delete e.onChange;
                  break;
                case "color_picker":
                case "color_picker_carousel":
                  n.set(r, { setColor: e.onSetColor }), delete e.onSetColor;
                  break;
                case "folder_list":
                  n.set(r, { folderSelected: e.onFolderSelected }),
                    delete e.onFolderSelected;
                  break;
                case "image":
                  n.set(r, { imageSelected: e.onImageSelected }),
                    delete e.onImageSelected;
                  break;
                case "masonry":
                  n.set(r, { itemSelected: e.onItemSelected }),
                    delete e.onItemSelected;
                  break;
                case "radio_group":
                  n.set(r, { setValue: e.onSetValue }), delete e.onSetValue;
                  break;
                case "search_input":
                  n.set(r, { change: e.onChange }), delete e.onChange;
                  break;
                case "select":
                case "slider":
                  n.set(r, { setValue: e.onSetValue }), delete e.onSetValue;
                  break;
                case "text_input":
                  n.set(r, { change: e.onChange }), delete e.onChange;
                  break;
                case "thumbnail_carousel":
                  n.set(r, {
                    selected: e.onSelected,
                    customizeClick: e.onCustomizeClick,
                    seeAllClick: e.onSeeAllClickMessage,
                  }),
                    delete e.onSelected,
                    delete e.onCustomizeClick,
                    delete e.onSeeAllClickMessage;
                  break;
                case "thumbnail_list":
                  n.set(r, { selected: e.onSelected }), delete e.onSelected;
                  break;
                case "vertical_scroller":
                  n.set(r, { LOAD_MORE: e.onLoadMore }), delete e.onLoadMore;
                  break;
                default:
                  throw new c.UnreachableError(
                    `No event handling behaviour defined for control of type '${t}' with object: ${e}`,
                    e.type
                  );
              }
            }
          }
        },
        890: function (e, t, r) {
          var n =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r || (r = Promise))(function (o, a) {
                function s(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function i(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })).then(s, i);
                }
                l((n = n.apply(e, t || [])).next());
              });
            };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.CanvaImageHelpers = t.ImageQuality = t.CanvaDataType = void 0);
          const o = r(997),
            a = (e, t, r) =>
              n(void 0, void 0, void 0, function* () {
                if ("function" == typeof e.toBlob)
                  return yield new Promise((n, o) => {
                    try {
                      e.toBlob((e) => (e instanceof Blob ? n(e) : o(e)), t, r);
                    } catch (e) {
                      o(e);
                    }
                  });
                const n = e.toDataURL(t, r).split(",")[1],
                  o = atob(n),
                  a = o.length,
                  s = new Uint8Array(a);
                for (let e = 0; e < a; e++) s[e] = o.charCodeAt(e);
                return new Blob([s], { type: t || "image/png" });
              });
          var s, i, l;
          ((l = t.CanvaDataType || (t.CanvaDataType = {})).CANVA_ELEMENT =
            "canva_element"),
            (l.CANVA_IMAGE_URL = "canva_image_url"),
            (l.CANVA_IMAGE_BLOB = "canva_image_blob"),
            (l.CANVA_MEDIA = "canva_media"),
            ((i = t.ImageQuality || (t.ImageQuality = {})).THUMBNAIL =
              "thumbnail"),
            (i.PREVIEW = "preview"),
            (i.FULL = "full"),
            (function (e) {
              (e[(e.THUMBNAIL = 128)] = "THUMBNAIL"),
                (e[(e.PREVIEW = 800)] = "PREVIEW"),
                (e[(e.FULL = 2500)] = "FULL");
            })(s || (s = {}));
          const c =
              navigator &&
              navigator.userAgent.match(/chrome/i) &&
              navigator.userAgent.match(/safari/i),
            d = (e) => (c ? u(e) : p(e)),
            u = (e) =>
              new Promise((t, r) => {
                const n = new FileReader();
                (n.onload = function () {
                  if (n && n.result instanceof ArrayBuffer) {
                    const r = p(
                      new Blob([new Uint8Array(n.result)], { type: e.type })
                    );
                    t(r);
                  } else r("unknown error");
                }),
                  (n.onerror = (e) => r(e)),
                  n.readAsArrayBuffer(e);
              }),
            p = (e) =>
              new Promise((t, r) => {
                const n = new Image();
                n.crossOrigin = "anonymous";
                const o = URL.createObjectURL(e);
                (n.onload = () => {
                  t(n), URL.revokeObjectURL(o);
                }),
                  (n.onerror = (e, t, n, o, a) => {
                    console.error("blobToImageViaObjectUrl failed", a),
                      r("Could not load image");
                  }),
                  (n.src = o);
              });
          !(function (e) {
            (e.toCanvaImageBlob = (o, a) =>
              n(this, void 0, void 0, function* () {
                if (!o)
                  throw new Error(
                    "You didn't pass a value into the toCanvaImageBlob method"
                  );
                const { quality: n, type: s } = Object.assign(
                  { quality: "full", type: "image/png" },
                  a
                );
                if (o instanceof HTMLCanvasElement) return e.fromCanvas(s, o);
                if (o instanceof HTMLImageElement) {
                  if (
                    "image/png" === s ||
                    "image/jpeg" === s ||
                    "image/svg+xml" === s
                  )
                    return t(o, s);
                  throw new Error(`Invalid image type: ${s}`);
                }
                if (o instanceof SVGElement) return r(o);
                if ("canva_element" === o.type) {
                  if (!o.data) throw new Error("Element data is undefined");
                  return "canva_image_blob" === o.data.type
                    ? o.data
                    : e.toCanvaImageBlob(o.data);
                }
                if ("canva_media" === o.type) {
                  if ("thumbnail" === n || "preview" === n || "full" === n) {
                    const { url: t } = o[n];
                    return e.fromUrl(t);
                  }
                  throw new Error(`Invalid quality: ${n}`);
                }
                if ("canva_image_url" === o.type) return e.fromUrl(o.url);
                throw new Error(
                  `Can't convert input into CanvaImageBlob: ${o}`
                );
              })),
              (e.fromCanvas = (e, t, r) =>
                n(this, void 0, void 0, function* () {
                  const n = yield a(t, e, r);
                  if (n instanceof Blob) {
                    const { width: r, height: o } = t;
                    return {
                      type: "canva_image_blob",
                      blob: n,
                      imageType: e,
                      width: r,
                      height: o,
                    };
                  }
                  throw new Error("Could not create Blob from Canvas");
                })),
              (e.fromDataUrl = (e, t) =>
                n(this, void 0, void 0, function* () {
                  const r = (function (e) {
                      const t = atob(e.split(",")[1]),
                        r = e.split(",")[0].split(":")[1].split(";")[0],
                        n = new ArrayBuffer(t.length),
                        o = new Uint8Array(n);
                      for (let e = 0; e < t.length; e++) o[e] = t.charCodeAt(e);
                      return new Blob([n], { type: r });
                    })(t),
                    { width: n, height: o } = yield d(r);
                  return {
                    type: "canva_image_blob",
                    blob: r,
                    imageType: e,
                    width: n,
                    height: o,
                  };
                })),
              (e.fromElement = (t, r = "full") =>
                n(this, void 0, void 0, function* () {
                  if (null != t.data)
                    switch (t.data.type) {
                      case "canva_image_blob":
                        return t.data;
                      case "canva_media":
                        const n = t.data[r].url;
                        return e.fromUrl(n);
                      case "canva_image_url":
                        return e.fromUrl(t.data.url);
                      default:
                        throw new o.UnreachableError(
                          "Canva element passed to `fromElement` does not match existing element types.",
                          t.data
                        );
                    }
                }));
            const t = (e, t = "image/png") =>
                n(this, void 0, void 0, function* () {
                  const r = document.createElement("canvas");
                  (r.width = e.width), (r.height = e.height);
                  const n = r.getContext("2d");
                  if (!n)
                    throw new Error(
                      "Unable to get context for HTMLCanvasElement"
                    );
                  return (
                    n.drawImage(e, 0, 0, e.width, e.height),
                    {
                      type: "canva_image_blob",
                      blob: yield a(r),
                      width: e.width,
                      height: e.height,
                      imageType: t,
                    }
                  );
                }),
              r = (e) => {
                const t = new Blob([e.outerHTML], { type: "image/svg+xml" }),
                  { width: r, height: n } = e.getBoundingClientRect();
                return {
                  type: "canva_image_blob",
                  imageType: "image/svg+xml",
                  blob: t,
                  width: r,
                  height: n,
                };
              };
            (e.fromUrl = (e) =>
              n(this, void 0, void 0, function* () {
                const t = yield fetch(e),
                  r = yield t.blob(),
                  n = r.type,
                  { width: o, height: a } = yield d(r);
                return {
                  type: "canva_image_blob",
                  blob: r,
                  imageType: n,
                  width: o,
                  height: a,
                };
              })),
              (e.toImageElement = (e) => d(e.blob)),
              (e.toCanvas = (t, r) =>
                n(this, void 0, void 0, function* () {
                  if (!t)
                    throw new Error(
                      "You didn't pass a value into the toCanvas method"
                    );
                  if (t instanceof HTMLImageElement) {
                    const e = document.createElement("canvas");
                    (e.width = (null == r ? void 0 : r.width) || t.width),
                      (e.height = (null == r ? void 0 : r.height) || t.height),
                      (e.style.width = "100%"),
                      (e.style.height = "100%");
                    const n = e.getContext("2d");
                    if (!n)
                      throw new Error(
                        "Can't get CanvasRenderingContext2D for HTMLCanvasElement"
                      );
                    return n.drawImage(t, 0, 0, e.width, e.height), e;
                  }
                  if (
                    "canva_element" === t.type ||
                    "canva_image_url" === t.type ||
                    "canva_media" === t.type
                  ) {
                    const n = yield e.toCanvaImageBlob(t, {
                      quality: (null == r ? void 0 : r.quality) || "full",
                    });
                    return e.toCanvas(n, r);
                  }
                  if ("canva_image_blob" === t.type) {
                    const n = yield e.toImageElement(t);
                    return e.toCanvas(n, r);
                  }
                  throw new Error(
                    "Can't convert input into HTMLCanvasElement:" + t
                  );
                })),
              (e.toDataUrl = (e) =>
                new Promise((t, r) => {
                  const n = new FileReader();
                  (n.onload = (e) => {
                    n.result && "string" == typeof n.result
                      ? t(n.result)
                      : r("Unexpected FileReader result");
                  }),
                    (n.onerror = () => {
                      r("Error loading blob");
                    }),
                    n.readAsDataURL(e.blob);
                })),
              (e.getSize = (e) => ({ width: e.width, height: e.height })),
              (e.rasterizeImage = (e, t) =>
                n(this, void 0, void 0, function* () {
                  switch (t) {
                    case "thumbnail":
                      return s(e, 128);
                    case "preview":
                      return s(e, 800);
                    case "full":
                    default:
                      return s(e, 2500);
                  }
                }));
            const s = (t, r) =>
              n(this, void 0, void 0, function* () {
                if ("image/svg+xml" !== t.imageType) return t;
                const n = yield e.toImageElement(t),
                  o = Math.max(n.width, n.height),
                  s = r ? r / o : 1,
                  i = n.width * s,
                  l = n.height * s,
                  c = yield e.toCanvas(n, { width: i, height: l });
                return {
                  type: "canva_image_blob",
                  blob: yield a(c),
                  width: c.width,
                  height: c.height,
                  imageType: "image/png",
                };
              });
          })(t.CanvaImageHelpers || (t.CanvaImageHelpers = {}));
        },
        636: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.AppHeader = void 0),
            ((t.AppHeader || (t.AppHeader = {})).create = (e) =>
              Object.assign({ type: "app_header" }, e));
        },
        909: (e, t) => {
          var r;
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ControlName = void 0),
            ((r = t.ControlName || (t.ControlName = {})).APP_HEADER =
              "app_header"),
            (r.BREADCRUMB = "breadcrumb"),
            (r.BUTTON = "button"),
            (r.COLOR_PICKER = "color_picker"),
            (r.COLOR_PICKER_CAROUSEL = "color_picker_carousel"),
            (r.PAGE = "control_panel"),
            (r.FOLDER_LIST = "folder_list"),
            (r.GROUP = "group"),
            (r.IMAGE = "image"),
            (r.LAYOUT = "layout"),
            (r.MASONRY = "masonry"),
            (r.SELECT = "select"),
            (r.SLIDER = "slider"),
            (r.THUMBNAIL_LIST = "thumbnail_list"),
            (r.THUMBNAIL_CAROUSEL = "thumbnail_carousel"),
            (r.TRANSITION = "transition"),
            (r.TEXT_INPUT = "text_input"),
            (r.SEARCH_INPUT = "search_input"),
            (r.CHECKBOX = "checkbox"),
            (r.PARAGRAPH = "paragraph"),
            (r.RADIO_GROUP = "radio_group"),
            (r.VERTICAL_SCROLLER = "vertical_scroller");
        },
        413: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Breadcrumb = void 0),
            ((t.Breadcrumb || (t.Breadcrumb = {})).create = (e) =>
              Object.assign(Object.assign({ type: "breadcrumb" }, e), {
                items: e.items.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    isClickable:
                      ("isClickable" in e && e.isClickable) ||
                      ("onClick" in e && null != e.onClick),
                  })
                ),
              }));
        },
        246: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Button = void 0),
            ((t.Button || (t.Button = {})).create = (e) =>
              Object.assign({ type: "button", variant: "secondary" }, e));
        },
        72: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Checkbox = void 0),
            ((t.Checkbox || (t.Checkbox = {})).create = (e) =>
              Object.assign({ type: "checkbox" }, e));
        },
        782: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ColorPicker = void 0),
            ((t.ColorPicker || (t.ColorPicker = {})).create = (e) =>
              Object.assign({ type: "color_picker" }, e));
        },
        854: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ColorPickerCarousel = void 0),
            ((t.ColorPickerCarousel || (t.ColorPickerCarousel = {})).create = (
              e
            ) => Object.assign({ type: "color_picker_carousel" }, e));
        },
        998: (e, t, r) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.getControlCreate =
              t.CreateControlNamespace =
              t.ControlHasEventHandlers =
              t.VerticalScroller =
              t.Transition =
              t.ThumbnailList =
              t.ThumbnailCarousel =
              t.TextInput =
              t.Slider =
              t.Select =
              t.SearchInput =
              t.RadioGroup =
              t.Paragraph =
              t.Page =
              t.Masonry =
              t.Layout =
              t.Image =
              t.Group =
              t.FolderList =
              t.ControlName =
              t.ColorPickerCarousel =
              t.ColorPicker =
              t.Checkbox =
              t.Button =
              t.Breadcrumb =
              t.AppHeader =
                void 0);
          const n = r(636),
            o = r(413),
            a = r(246),
            s = r(72),
            i = r(782),
            l = r(854),
            c = r(208),
            d = r(758),
            u = r(424),
            p = r(161),
            h = r(743),
            m = r(767),
            v = r(83),
            g = r(53),
            f = r(282),
            b = r(935),
            _ = r(118),
            y = r(194),
            E = r(125),
            C = r(46),
            O = r(592);
          var P = r(636);
          Object.defineProperty(t, "AppHeader", {
            enumerable: !0,
            get: function () {
              return P.AppHeader;
            },
          });
          var w = r(413);
          Object.defineProperty(t, "Breadcrumb", {
            enumerable: !0,
            get: function () {
              return w.Breadcrumb;
            },
          });
          var T = r(246);
          Object.defineProperty(t, "Button", {
            enumerable: !0,
            get: function () {
              return T.Button;
            },
          });
          var R = r(72);
          Object.defineProperty(t, "Checkbox", {
            enumerable: !0,
            get: function () {
              return R.Checkbox;
            },
          });
          var I = r(782);
          Object.defineProperty(t, "ColorPicker", {
            enumerable: !0,
            get: function () {
              return I.ColorPicker;
            },
          });
          var S = r(854);
          Object.defineProperty(t, "ColorPickerCarousel", {
            enumerable: !0,
            get: function () {
              return S.ColorPickerCarousel;
            },
          });
          var M = r(909);
          Object.defineProperty(t, "ControlName", {
            enumerable: !0,
            get: function () {
              return M.ControlName;
            },
          });
          var H = r(208);
          Object.defineProperty(t, "FolderList", {
            enumerable: !0,
            get: function () {
              return H.FolderList;
            },
          });
          var L = r(758);
          Object.defineProperty(t, "Group", {
            enumerable: !0,
            get: function () {
              return L.Group;
            },
          });
          var j = r(424);
          Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function () {
              return j.Image;
            },
          });
          var x = r(161);
          Object.defineProperty(t, "Layout", {
            enumerable: !0,
            get: function () {
              return x.Layout;
            },
          });
          var U = r(743);
          Object.defineProperty(t, "Masonry", {
            enumerable: !0,
            get: function () {
              return U.Masonry;
            },
          });
          var A = r(491);
          Object.defineProperty(t, "Page", {
            enumerable: !0,
            get: function () {
              return A.Page;
            },
          });
          var k = r(767);
          Object.defineProperty(t, "Paragraph", {
            enumerable: !0,
            get: function () {
              return k.Paragraph;
            },
          });
          var q = r(83);
          Object.defineProperty(t, "RadioGroup", {
            enumerable: !0,
            get: function () {
              return q.RadioGroup;
            },
          });
          var N = r(53);
          Object.defineProperty(t, "SearchInput", {
            enumerable: !0,
            get: function () {
              return N.SearchInput;
            },
          });
          var B = r(282);
          Object.defineProperty(t, "Select", {
            enumerable: !0,
            get: function () {
              return B.Select;
            },
          });
          var D = r(935);
          Object.defineProperty(t, "Slider", {
            enumerable: !0,
            get: function () {
              return D.Slider;
            },
          });
          var G = r(118);
          Object.defineProperty(t, "TextInput", {
            enumerable: !0,
            get: function () {
              return G.TextInput;
            },
          });
          var F = r(194);
          Object.defineProperty(t, "ThumbnailCarousel", {
            enumerable: !0,
            get: function () {
              return F.ThumbnailCarousel;
            },
          });
          var V = r(125);
          Object.defineProperty(t, "ThumbnailList", {
            enumerable: !0,
            get: function () {
              return V.ThumbnailList;
            },
          });
          var z = r(46);
          Object.defineProperty(t, "Transition", {
            enumerable: !0,
            get: function () {
              return z.Transition;
            },
          });
          var $ = r(592);
          Object.defineProperty(t, "VerticalScroller", {
            enumerable: !0,
            get: function () {
              return $.VerticalScroller;
            },
          });
          const Q = new Set([
            "app_header",
            "breadcrumb",
            "button",
            "checkbox",
            "color_picker",
            "color_picker_carousel",
            "folder_list",
            "image",
            "masonry",
            "radio_group",
            "search_input",
            "select",
            "slider",
            "text_input",
            "thumbnail_carousel",
            "thumbnail_list",
            "vertical_scroller",
          ]);
          (t.ControlHasEventHandlers = function (e) {
            return Q.has(e);
          }),
            (t.CreateControlNamespace = {
              app_header: n.AppHeader,
              breadcrumb: o.Breadcrumb,
              button: a.Button,
              checkbox: s.Checkbox,
              color_picker: i.ColorPicker,
              color_picker_carousel: l.ColorPickerCarousel,
              folder_list: c.FolderList,
              group: d.Group,
              image: u.Image,
              layout: p.Layout,
              masonry: h.Masonry,
              paragraph: m.Paragraph,
              radio_group: v.RadioGroup,
              search_input: g.SearchInput,
              select: f.Select,
              slider: b.Slider,
              text_input: _.TextInput,
              thumbnail_carousel: y.ThumbnailCarousel,
              thumbnail_list: E.ThumbnailList,
              transition: C.Transition,
              vertical_scroller: O.VerticalScroller,
            }),
            (t.getControlCreate = function (e) {
              const r = t.CreateControlNamespace[e];
              if (r) return r.create;
              throw new Error("unknown type");
            });
        },
        208: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.FolderList = void 0),
            ((t.FolderList || (t.FolderList = {})).create = (e) =>
              Object.assign({ type: "folder_list" }, e));
        },
        758: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Group = void 0),
            ((t.Group || (t.Group = {})).create = (e) =>
              Object.assign({ type: "group" }, e));
        },
        424: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Image = void 0),
            (function (e) {
              e.create = (e) => Object.assign({ type: "image" }, e);
            })(t.Image || (t.Image = {}));
        },
        161: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Layout = void 0),
            (function (e) {
              let t;
              (e.spaces = [
                "none",
                "xxxsmall",
                "xxsmall",
                "xsmall",
                "small",
                "medium",
                "large",
                "xlarge",
                "xxlarge",
                "xxxlarge",
              ]),
                (function (e) {
                  (e.COLUMNS = "columns"),
                    (e.GRID = "grid"),
                    (e.ROWS = "rows"),
                    (e.SPACER = "spacer");
                })((t = e.LayoutType || (e.LayoutType = {}))),
                (e.create = (e) => Object.assign({ type: "layout" }, e));
            })(t.Layout || (t.Layout = {}));
        },
        743: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Masonry = void 0),
            (function (e) {
              let t;
              !(function (e) {
                (e.NONE = "none"),
                  (e.IN_PROGRESS = "in_progress"),
                  (e.SUCCESS = "success"),
                  (e.FAILED = "failed");
              })((t = e.Status || (e.Status = {}))),
                (e.create = (e) => Object.assign({ type: "masonry" }, e));
            })(t.Masonry || (t.Masonry = {}));
        },
        491: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Page = void 0),
            ((t.Page || (t.Page = {})).create = ({ controls: e }) => ({
              type: "control_panel",
              id: "control_panel",
              controls: e,
            }));
        },
        767: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Paragraph = void 0),
            ((t.Paragraph || (t.Paragraph = {})).create = (e) =>
              Object.assign(
                {
                  type: "paragraph",
                  draggable: !1,
                  alignment: "start",
                  variant: "normal",
                },
                e
              ));
        },
        83: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.RadioGroup = void 0),
            ((t.RadioGroup || (t.RadioGroup = {})).create = (e) =>
              Object.assign({ type: "radio_group" }, e));
        },
        53: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.SearchInput = void 0),
            ((t.SearchInput || (t.SearchInput = {})).create = (e) =>
              Object.assign({ type: "search_input" }, e));
        },
        282: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Select = void 0),
            ((t.Select || (t.Select = {})).create = (e) =>
              Object.assign({ type: "select" }, e));
        },
        935: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Slider = void 0),
            ((t.Slider || (t.Slider = {})).create = (e) =>
              Object.assign({ type: "slider" }, e));
        },
        118: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.TextInput = void 0),
            ((t.TextInput || (t.TextInput = {})).create = (e) =>
              Object.assign({ type: "text_input" }, e));
        },
        194: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ThumbnailCarousel = void 0),
            ((t.ThumbnailCarousel || (t.ThumbnailCarousel = {})).create = (e) =>
              Object.assign({ type: "thumbnail_carousel" }, e));
        },
        125: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ThumbnailList = void 0),
            ((t.ThumbnailList || (t.ThumbnailList = {})).create = (e) =>
              Object.assign({ type: "thumbnail_list" }, e));
        },
        46: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Transition = void 0),
            ((t.Transition || (t.Transition = {})).create = (e) =>
              Object.assign({ type: "transition" }, e));
        },
        592: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.VerticalScroller = void 0),
            ((t.VerticalScroller || (t.VerticalScroller = {})).create = (e) =>
              Object.assign({ type: "vertical_scroller" }, e));
        },
        997: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.requestError =
              t.UnauthorizedError =
              t.InvalidContentTypeError =
              t.InvalidHeadersError =
              t.InterruptedError =
              t.ThrottledError =
              t.OversizedError =
              t.NotFoundError =
              t.TimeoutError =
              t.RequestError =
              t.checkNever =
              t.UnhandledApiLevelError =
              t.MailboxTimeoutError =
              t.UnimplementedError =
              t.UnreachableError =
                void 0),
            (t.UnreachableError = class {
              constructor(e, t) {
                console.error(`UnreachableError (${e})`, t);
              }
            });
          class r extends Error {}
          t.UnimplementedError = r;
          class n extends Error {
            constructor(e) {
              super(`Mailbox timed out waiting for reply (timeout is ${e} ms)`);
            }
          }
          t.MailboxTimeoutError = n;
          class o extends Error {
            constructor(e, t) {
              super(`Unhandled API level: ${e} detected when handling ${t}`);
            }
          }
          (t.UnhandledApiLevelError = o),
            (t.checkNever = function (e) {
              return null == e;
            });
          class a extends Error {
            constructor(e) {
              super(e || "There was a problem with the request"),
                (this.name = "RequestError");
            }
          }
          t.RequestError = a;
          class s extends a {
            constructor(e) {
              super(e || "The app's backend didn't respond in a given timeout"),
                (this.name = "TimeoutError");
            }
          }
          t.TimeoutError = s;
          class i extends a {
            constructor(e) {
              super(e || "Couldn't find a given endpoint"),
                (this.name = "NotFoundError");
            }
          }
          t.NotFoundError = i;
          class l extends a {
            constructor(e) {
              super(e || "Payload too large"), (this.name = "OversizedError");
            }
          }
          t.OversizedError = l;
          class c extends a {
            constructor(e) {
              super(e || "Too many requests"), (this.name = "ThrottledError");
            }
          }
          t.ThrottledError = c;
          class d extends a {
            constructor(e) {
              super(
                e ||
                  "Connection between Canva's backend and app's backend was interrupted"
              ),
                (this.name = "InterruptedError");
            }
          }
          t.InterruptedError = d;
          class u extends a {
            constructor(e) {
              super(e || "Detected use of forbidden headers"),
                (this.name = "InvalidHeadersError");
            }
          }
          t.InvalidHeadersError = u;
          class p extends a {
            constructor(e) {
              super(e || "The response content type could not be recognized"),
                (this.name = "InvalidContentTypeError");
            }
          }
          t.InvalidContentTypeError = p;
          class h extends a {
            constructor(e) {
              super(e || "The app cannot use 'canva.request'"),
                (this.name = "UnauthorizedError");
            }
          }
          (t.UnauthorizedError = h),
            (t.requestError = function (e) {
              switch (e.name) {
                case "TimeoutError":
                  return new s(e.message);
                case "NotFoundError":
                  return new i(e.message);
                case "OversizedError":
                  return new l(e.message);
                case "ThrottledError":
                  return new c(e.message);
                case "InterruptedError":
                  return new d(e.message);
                case "InvalidHeadersError":
                  return new u(e.message);
                case "InvalidContentTypeError":
                  return new p(e.message);
                case "UnauthorizedError":
                  return new h(e.message);
                default:
                  return new a(e.message);
              }
            });
        },
        517: (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.EventHandler = void 0),
            (t.EventHandler = class {
              constructor() {
                this.handlers = new Set();
              }
              addEventListener(e) {
                this.handlers.add(e);
              }
              removeEventListener(e) {
                this.handlers.delete(e);
              }
              emit(...e) {
                return this.handlers.forEach((t) => t(...e));
              }
            });
        },
        482: function (e, t, r) {
          var n =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r || (r = Promise))(function (o, a) {
                function s(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function i(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })).then(s, i);
                }
                l((n = n.apply(e, t || [])).next());
              });
            };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.HostBus = void 0);
          const o = r(920),
            a = r(997);
          t.HostBus = class {
            constructor({ comms: e }) {
              (this.INIT_TIMEOUT = 1e4),
                (this.SAVE_TIMEOUT = 4e4),
                (this.PRESETS_TIMEOUT = 2e4),
                (this.DISPOSE_TIMEOUT = 5e3),
                (this.PRESETS_WITH_INIT_TIMEOUT =
                  this.INIT_TIMEOUT + this.PRESETS_TIMEOUT),
                (this.seq = 0),
                (this.controlsRenderHandler = new o.EventHandler()),
                (this.undoStatusHandler = new o.EventHandler()),
                (this.spinnerHandler = new o.EventHandler()),
                (this.touchModeHandler = new o.EventHandler()),
                (this.updateLayoutHandler = new o.EventHandler()),
                (this.notificationHandler = new o.EventHandler()),
                (this.onReceiveMessage = (e) =>
                  n(this, void 0, void 0, function* () {
                    switch (e.topic) {
                      case "controls_render":
                        this.controlsRenderHandler.emit(this.seq++, e.controls);
                        break;
                      case "spinner_toggle":
                        this.spinnerHandler.emit(e.area, e.visible);
                        break;
                      case "touch_mode":
                        this.touchModeHandler.emit(e.visible);
                        break;
                      case "update_layout":
                        this.updateLayoutHandler.emit(e.layout);
                        break;
                      case "notification_show":
                        this.notificationHandler.emit(e.key, e.level);
                        break;
                      case "start_remote_process":
                        this.handleStartRemoteProcess(e);
                        break;
                      case "proxy_request":
                        return this.handleProxyRequest(e);
                      case "error_report":
                        this.handleErrorReport(e);
                        break;
                      case "exit":
                        this.handleExit(e);
                        break;
                      case "undo_redo_config_request":
                        this.undoStatusHandler.emit(e.config);
                        break;
                      case "dispose_response":
                        this.handleDisposeResponse();
                        break;
                      case "init_response":
                      case "save_response":
                      case "presets_response":
                      case "image_update_response":
                      case "data_load_response":
                      case "data_save_response":
                        throw new Error(
                          `Unsolicited ${e.topic} response received`
                        );
                      default:
                        a.checkNever(e);
                    }
                  })),
                (this.comms = e),
                e.onMessage(this.onReceiveMessage);
            }
            sendInteractionRecordingRequest(e) {
              this.comms.castMessage(
                Object.assign({ topic: "interaction_recording_request" }, e)
              );
            }
            sendInitMessage(e) {
              return n(this, void 0, void 0, function* () {
                const t = yield this.comms.sendMessage(
                  Object.assign({ topic: "init_request" }, e),
                  this.INIT_TIMEOUT
                );
                if (t.error) {
                  const e = t.errorMessage ? `: ${t.errorMessage}` : "";
                  throw new Error("Could not initialize the app" + e);
                }
              });
            }
            sendControlsEvent(e) {
              this.comms.castMessage({ topic: "controls_event", message: e });
            }
            sendUndoEvent(e) {
              this.comms.castMessage({ topic: "undo_redo_request", action: e });
            }
            sendLayoutChange(e, t, r) {
              this.comms.castMessage({
                topic: "layout_change",
                commit: r,
                page: e,
                layout: t,
              });
            }
            sendTouchModeExit(e) {
              this.comms.castMessage({ topic: "touch_mode_exit", commit: e });
            }
            sendImageUpdate(e) {
              return n(this, void 0, void 0, function* () {
                yield this.comms.sendMessage({
                  topic: "image_update_request",
                  image: e,
                });
              });
            }
            sendSaveRequest(e) {
              return n(this, void 0, void 0, function* () {
                return (yield this.comms.sendMessage(
                  { topic: "save_request", fullImage: e },
                  this.SAVE_TIMEOUT
                )).image;
              });
            }
            sendDisposeRequest() {
              return n(this, void 0, void 0, function* () {
                yield this.comms.sendMessage(
                  { topic: "dispose_request" },
                  this.DISPOSE_TIMEOUT
                );
              });
            }
            onUpdateControlPanel(e) {
              this.controlsRenderHandler.addEventListener(e);
            }
            onUndoRedoStatus(e) {
              this.undoStatusHandler.addEventListener(e);
            }
            onSpinnerToggle(e) {
              this.spinnerHandler.addEventListener(e);
            }
            onTouchModeToggle(e) {
              this.touchModeHandler.addEventListener(e);
            }
            onUpdateLayout(e) {
              this.updateLayoutHandler.addEventListener(e);
            }
            onNotification(e) {
              this.notificationHandler.addEventListener(e);
            }
            onRemoteProcess(e) {
              this.remoteProcessHandler = e;
            }
            onProxyRequest(e) {
              this.proxyRequestHandler = e;
            }
            onErrorReport(e) {
              this.errorReportHandler = e;
            }
            sendDataLoad(e) {
              return n(this, void 0, void 0, function* () {
                yield this.comms.sendMessage({
                  topic: "data_load_request",
                  data: e,
                });
              });
            }
            sendDataSave() {
              return n(this, void 0, void 0, function* () {
                return (yield this.comms.sendMessage({
                  topic: "data_save_request",
                })).data;
              });
            }
            onExit(e) {
              this.exitHandler = e;
            }
            onDisposeResponse(e) {
              this.disposeResponseHandler = e;
            }
            sendPresetsRequest(e) {
              return n(this, void 0, void 0, function* () {
                const { image: t, minDimensions: r, limit: n } = e,
                  o =
                    null != e.initRequest
                      ? this.PRESETS_WITH_INIT_TIMEOUT
                      : this.PRESETS_TIMEOUT;
                return (yield this.comms.sendMessage(
                  {
                    topic: "presets_request",
                    minDimensions: r,
                    image: t,
                    limit: n,
                    initRequestData: e.initRequest,
                  },
                  o
                )).presets;
              });
            }
            sendPresetSelected(e) {
              this.comms.castMessage({ topic: "preset_selected", presetId: e });
            }
            handleStartRemoteProcess(e) {
              return n(this, void 0, void 0, function* () {
                const { processId: t, input: r } = e;
                if (!this.remoteProcessHandler)
                  throw new Error(
                    'Extension must be of type "Remote image processing" in the developer portal to invoke remoteProcess.'
                  );
                const { result: n } = this.remoteProcessHandler(r);
                try {
                  const e = yield n;
                  this.comms.castMessage({
                    topic: "remote_process_complete",
                    processId: t,
                    result: e,
                  });
                } catch (e) {
                  this.comms.castMessage({
                    topic: "remote_process_complete",
                    processId: t,
                    error: e,
                  });
                }
              });
            }
            handleProxyRequest(e) {
              return n(this, void 0, void 0, function* () {
                const { config: t } = e;
                if (!this.proxyRequestHandler)
                  throw new Error(
                    "ProxyRequest called but no handler registered"
                  );
                try {
                  return {
                    topic: "proxy_response",
                    type: "SUCCESS",
                    result: yield this.proxyRequestHandler(t),
                  };
                } catch (e) {
                  return {
                    topic: "proxy_response",
                    type: "ERROR",
                    error: { name: e.name, message: e.message },
                  };
                }
              });
            }
            handleErrorReport(e) {
              this.errorReportHandler
                ? this.errorReportHandler(e.errorType)
                : console.error("Unhandled error from app", e);
            }
            handleExit(e) {
              if (!this.exitHandler)
                throw new Error("EXIT called, but no handler registered");
              this.exitHandler(e.reason);
            }
            handleDisposeResponse() {
              this.disposeResponseHandler && this.disposeResponseHandler();
            }
          };
        },
        695: function (e, t, r) {
          var n =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r || (r = Promise))(function (o, a) {
                function s(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function i(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })).then(s, i);
                }
                l((n = n.apply(e, t || [])).next());
              });
            };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.connect = void 0);
          const o = r(452);
          t.connect = function (e, t = 3e4) {
            return n(this, void 0, void 0, function* () {
              return new Promise((r, n) => {
                try {
                  const a = (t) => {
                    const n = t.data;
                    if (t.source !== e.contentWindow || "wake_up" !== n.topic)
                      return;
                    const [s] = t.ports;
                    window.removeEventListener("message", a),
                      r(new o.IFrameHostBusComms(s));
                  };
                  window.addEventListener("message", a),
                    setTimeout(() => {
                      n(new Error("Timed out waiting for iframe to respond"));
                    }, t);
                } catch (e) {
                  n(e);
                }
              });
            });
          };
        },
        452: function (e, t, r) {
          var n =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r || (r = Promise))(function (o, a) {
                function s(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function i(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })).then(s, i);
                }
                l((n = n.apply(e, t || [])).next());
              });
            };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.IFrameHostBusComms = void 0);
          const o = r(920);
          class a {
            constructor(e) {
              (this.port = e),
                (this.mailbox = new o.Mailbox({
                  bufferSize: a.MAILBOX_BUFFER_SIZE,
                  timeout: a.MESSAGING_TIMEOUT,
                })),
                (this.envelopeMinter = new o.Envelope.Minter()),
                (this.messageHandler = new o.EventHandler()),
                (this.onPortMessage = (e) => {
                  const t = e.data;
                  null != t.responseToId && this.mailbox.enqueueMessage(t),
                    this.messageHandler.emit(e);
                }),
                (this.port.onmessage = this.onPortMessage);
            }
            onMessage(e) {
              this.messageHandler.addEventListener((t) =>
                n(this, void 0, void 0, function* () {
                  const r = t.data;
                  if (null == r.responseToId) {
                    const t = yield e(r.content);
                    t && this.respondTo(t, r.id);
                  }
                })
              );
            }
            castMessage(e) {
              this.port.postMessage(this.envelopeMinter.mint(e));
            }
            sendMessage(e, t) {
              return n(this, void 0, void 0, function* () {
                const r = this.envelopeMinter.mint(e);
                return (
                  this.port.postMessage(r),
                  (yield this.mailbox.receiveReply(r.id, t)).content
                );
              });
            }
            respondTo(e, t) {
              this.port.postMessage(this.envelopeMinter.mint(e, t));
            }
          }
          (t.IFrameHostBusComms = a),
            (a.MAILBOX_BUFFER_SIZE = 5),
            (a.MESSAGING_TIMEOUT = 5e3);
        },
        825: function (e, t, r) {
          var n =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r || (r = Promise))(function (o, a) {
                function s(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function i(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })).then(s, i);
                }
                l((n = n.apply(e, t || [])).next());
              });
            };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.IFrameClientBusComms = void 0);
          const o = r(517),
            a = r(524);
          class s {
            constructor(e) {
              (this.port = e),
                (this.envelopeMinter = new a.Envelope.Minter()),
                (this.mailbox = new a.Mailbox({
                  bufferSize: s.MAILBOX_BUFFER_SIZE,
                  timeout: s.MESSAGING_TIMEOUT,
                })),
                (this.messageHandler = new o.EventHandler()),
                (this.onPortMessage = (e) => {
                  const t = e.data;
                  null != t.responseToId && this.mailbox.enqueueMessage(t),
                    this.messageHandler.emit(e);
                }),
                (this.port.onmessage = this.onPortMessage);
            }
            onMessage(e) {
              this.messageHandler.addEventListener((t) =>
                n(this, void 0, void 0, function* () {
                  const r = t.data;
                  if (null == r.responseToId) {
                    const t = yield e(r.content);
                    t && this.respondTo(t, r.id);
                  }
                })
              );
            }
            castMessage(e) {
              this.port.postMessage(this.envelopeMinter.mint(e));
            }
            sendMessage(e, t) {
              return n(this, void 0, void 0, function* () {
                const r = this.envelopeMinter.mint(e);
                return (
                  this.port.postMessage(r),
                  (yield this.mailbox.receiveReply(r.id, t)).content
                );
              });
            }
            respondTo(e, t) {
              this.port.postMessage(this.envelopeMinter.mint(e, t));
            }
          }
          (t.IFrameClientBusComms = s),
            (s.MAILBOX_BUFFER_SIZE = 5),
            (s.MESSAGING_TIMEOUT = 5e3);
        },
        920: (e, t, r) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.API_VERSION =
              t.CanvaImageHelpers =
              t.CanvaApiClient =
              t.connect =
              t.HostBus =
              t.EventHandler =
              t.Mailbox =
              t.Envelope =
              t.Message =
              t.UnauthorizedError =
              t.InvalidContentTypeError =
              t.InvalidHeadersError =
              t.InterruptedError =
              t.ThrottledError =
              t.OversizedError =
              t.NotFoundError =
              t.TimeoutError =
              t.RequestError =
              t.MailboxTimeoutError =
              t.UnimplementedError =
              t.UnreachableError =
              t.VerticalScroller =
              t.Transition =
              t.ThumbnailList =
              t.ThumbnailCarousel =
              t.TextInput =
              t.Slider =
              t.Select =
              t.SearchInput =
              t.RadioGroup =
              t.Paragraph =
              t.Page =
              t.Masonry =
              t.Layout =
              t.Image =
              t.Group =
              t.FolderList =
              t.ColorPickerCarousel =
              t.ColorPicker =
              t.Checkbox =
              t.Button =
              t.Breadcrumb =
              t.AppHeader =
              t.ControlName =
              t.ImageQuality =
              t.CanvaDataType =
                void 0);
          const n = r(742);
          Object.defineProperty(t, "CanvaApiClient", {
            enumerable: !0,
            get: function () {
              return n.CanvaApiClient;
            },
          });
          var o = r(890);
          Object.defineProperty(t, "CanvaDataType", {
            enumerable: !0,
            get: function () {
              return o.CanvaDataType;
            },
          }),
            Object.defineProperty(t, "ImageQuality", {
              enumerable: !0,
              get: function () {
                return o.ImageQuality;
              },
            });
          var a = r(998);
          Object.defineProperty(t, "ControlName", {
            enumerable: !0,
            get: function () {
              return a.ControlName;
            },
          });
          var s = r(636);
          Object.defineProperty(t, "AppHeader", {
            enumerable: !0,
            get: function () {
              return s.AppHeader;
            },
          });
          var i = r(413);
          Object.defineProperty(t, "Breadcrumb", {
            enumerable: !0,
            get: function () {
              return i.Breadcrumb;
            },
          });
          var l = r(246);
          Object.defineProperty(t, "Button", {
            enumerable: !0,
            get: function () {
              return l.Button;
            },
          });
          var c = r(72);
          Object.defineProperty(t, "Checkbox", {
            enumerable: !0,
            get: function () {
              return c.Checkbox;
            },
          });
          var d = r(782);
          Object.defineProperty(t, "ColorPicker", {
            enumerable: !0,
            get: function () {
              return d.ColorPicker;
            },
          });
          var u = r(854);
          Object.defineProperty(t, "ColorPickerCarousel", {
            enumerable: !0,
            get: function () {
              return u.ColorPickerCarousel;
            },
          });
          var p = r(208);
          Object.defineProperty(t, "FolderList", {
            enumerable: !0,
            get: function () {
              return p.FolderList;
            },
          });
          var h = r(758);
          Object.defineProperty(t, "Group", {
            enumerable: !0,
            get: function () {
              return h.Group;
            },
          });
          var m = r(424);
          Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function () {
              return m.Image;
            },
          });
          var v = r(161);
          Object.defineProperty(t, "Layout", {
            enumerable: !0,
            get: function () {
              return v.Layout;
            },
          });
          var g = r(743);
          Object.defineProperty(t, "Masonry", {
            enumerable: !0,
            get: function () {
              return g.Masonry;
            },
          });
          var f = r(491);
          Object.defineProperty(t, "Page", {
            enumerable: !0,
            get: function () {
              return f.Page;
            },
          });
          var b = r(767);
          Object.defineProperty(t, "Paragraph", {
            enumerable: !0,
            get: function () {
              return b.Paragraph;
            },
          });
          var _ = r(83);
          Object.defineProperty(t, "RadioGroup", {
            enumerable: !0,
            get: function () {
              return _.RadioGroup;
            },
          });
          var y = r(53);
          Object.defineProperty(t, "SearchInput", {
            enumerable: !0,
            get: function () {
              return y.SearchInput;
            },
          });
          var E = r(282);
          Object.defineProperty(t, "Select", {
            enumerable: !0,
            get: function () {
              return E.Select;
            },
          });
          var C = r(935);
          Object.defineProperty(t, "Slider", {
            enumerable: !0,
            get: function () {
              return C.Slider;
            },
          });
          var O = r(118);
          Object.defineProperty(t, "TextInput", {
            enumerable: !0,
            get: function () {
              return O.TextInput;
            },
          });
          var P = r(194);
          Object.defineProperty(t, "ThumbnailCarousel", {
            enumerable: !0,
            get: function () {
              return P.ThumbnailCarousel;
            },
          });
          var w = r(125);
          Object.defineProperty(t, "ThumbnailList", {
            enumerable: !0,
            get: function () {
              return w.ThumbnailList;
            },
          });
          var T = r(46);
          Object.defineProperty(t, "Transition", {
            enumerable: !0,
            get: function () {
              return T.Transition;
            },
          });
          var R = r(592);
          Object.defineProperty(t, "VerticalScroller", {
            enumerable: !0,
            get: function () {
              return R.VerticalScroller;
            },
          });
          var I = r(997);
          Object.defineProperty(t, "UnreachableError", {
            enumerable: !0,
            get: function () {
              return I.UnreachableError;
            },
          }),
            Object.defineProperty(t, "UnimplementedError", {
              enumerable: !0,
              get: function () {
                return I.UnimplementedError;
              },
            }),
            Object.defineProperty(t, "MailboxTimeoutError", {
              enumerable: !0,
              get: function () {
                return I.MailboxTimeoutError;
              },
            }),
            Object.defineProperty(t, "RequestError", {
              enumerable: !0,
              get: function () {
                return I.RequestError;
              },
            }),
            Object.defineProperty(t, "TimeoutError", {
              enumerable: !0,
              get: function () {
                return I.TimeoutError;
              },
            }),
            Object.defineProperty(t, "NotFoundError", {
              enumerable: !0,
              get: function () {
                return I.NotFoundError;
              },
            }),
            Object.defineProperty(t, "OversizedError", {
              enumerable: !0,
              get: function () {
                return I.OversizedError;
              },
            }),
            Object.defineProperty(t, "ThrottledError", {
              enumerable: !0,
              get: function () {
                return I.ThrottledError;
              },
            }),
            Object.defineProperty(t, "InterruptedError", {
              enumerable: !0,
              get: function () {
                return I.InterruptedError;
              },
            }),
            Object.defineProperty(t, "InvalidHeadersError", {
              enumerable: !0,
              get: function () {
                return I.InvalidHeadersError;
              },
            }),
            Object.defineProperty(t, "InvalidContentTypeError", {
              enumerable: !0,
              get: function () {
                return I.InvalidContentTypeError;
              },
            }),
            Object.defineProperty(t, "UnauthorizedError", {
              enumerable: !0,
              get: function () {
                return I.UnauthorizedError;
              },
            });
          var S = r(942);
          Object.defineProperty(t, "Message", {
            enumerable: !0,
            get: function () {
              return S.Message;
            },
          });
          var M = r(524);
          Object.defineProperty(t, "Envelope", {
            enumerable: !0,
            get: function () {
              return M.Envelope;
            },
          }),
            Object.defineProperty(t, "Mailbox", {
              enumerable: !0,
              get: function () {
                return M.Mailbox;
              },
            });
          var H = r(517);
          Object.defineProperty(t, "EventHandler", {
            enumerable: !0,
            get: function () {
              return H.EventHandler;
            },
          });
          var L = r(482);
          Object.defineProperty(t, "HostBus", {
            enumerable: !0,
            get: function () {
              return L.HostBus;
            },
          });
          var j = r(695);
          Object.defineProperty(t, "connect", {
            enumerable: !0,
            get: function () {
              return j.connect;
            },
          });
          const x = r(890);
          Object.defineProperty(t, "CanvaImageHelpers", {
            enumerable: !0,
            get: function () {
              return x.CanvaImageHelpers;
            },
          });
          const U = r(998);
          t.API_VERSION = "0.0.127-alpha.0";
          const A = /^(www\.)?canva/.test(window.location.hostname),
            k = new URLSearchParams(window.location.search),
            q = k.get("lib"),
            N = k.get("libBase");
          if (!A && q && N) {
            const e = k.get("l");
            if (null == e)
              throw new Error(
                "Target Global API level query param was not provided by iFrame host"
              );
            window.canva = {
              imageHelpers: x.CanvaImageHelpers,
              init: () => n.init(e),
              Button: U.Button,
              Checkbox: U.Checkbox,
              ColorPicker: U.ColorPicker,
              ColorPickerCarousel: U.ColorPickerCarousel,
              FolderList: U.FolderList,
              Group: U.Group,
              Masonry: U.Masonry,
              Image: U.Image,
              Layout: U.Layout,
              Page: U.Page,
              Paragraph: U.Paragraph,
              RadioGroup: U.RadioGroup,
              Select: U.Select,
              Slider: U.Slider,
              TextInput: U.TextInput,
              AppHeader: U.AppHeader,
              SearchInput: U.SearchInput,
              ThumbnailList: U.ThumbnailList,
              ThumbnailCarousel: U.ThumbnailCarousel,
              Transition: U.Transition,
              VerticalScroller: U.VerticalScroller,
            };
          }
        },
        524: (e, t, r) => {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Mailbox = t.Envelope = void 0);
          const n = r(997);
          ((t.Envelope || (t.Envelope = {})).Minter = class {
            constructor() {
              this.nextEnvelopeId = 0;
            }
            mint(e, t) {
              return { id: this.nextEnvelopeId++, content: e, responseToId: t };
            }
          }),
            (t.Mailbox = class {
              constructor(e) {
                (this.opts = e),
                  (this.handlers = new Set()),
                  (this.messages = []);
              }
              receiveReply(e, t) {
                for (const [t, r] of this.messages.entries())
                  if (r.responseToId === e)
                    return this.messages.splice(t, 1), Promise.resolve(r);
                const r = new Promise((t) => {
                    const r = (n) =>
                      n.responseToId === e &&
                      (this.handlers.delete(r), t(n), !0);
                    this.handlers.add(r);
                  }),
                  o = new Promise((e, r) => {
                    setTimeout(() => {
                      r(new n.MailboxTimeoutError(t || this.opts.timeout));
                    }, t || this.opts.timeout);
                  });
                return Promise.race([r, o]);
              }
              enqueueMessage(e) {
                for (const t of this.handlers.values()) if (t(e)) return;
                this.messages.push(e),
                  this.messages.length > this.opts.bufferSize &&
                    this.messages.shift();
              }
            });
        },
      },
      t = {};
    return (function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { exports: {} });
      return e[n].call(o.exports, o, o.exports, r), o.exports;
    })(920);
  })();
});

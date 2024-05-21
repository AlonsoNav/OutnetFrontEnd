import {
  contains,
  useWindow
} from "./chunk-4ZJEZC5G.js";
import {
  dataAttr,
  qsa
} from "./chunk-E5SVRR7M.js";
import {
  CloseButton_default
} from "./chunk-K3P47MDL.js";
import {
  useIsomorphicEffect_default,
  usePrevious
} from "./chunk-D5H7BB6P.js";
import {
  css_default,
  useWillUnmount
} from "./chunk-QE3IAAR6.js";
import {
  canUseDOM_default,
  listen_default,
  ownerDocument
} from "./chunk-QJW2QC3G.js";
import {
  useEventCallback,
  useMergedRefs_default,
  useMounted
} from "./chunk-ZPSZHCAB.js";
import {
  require_react_dom
} from "./chunk-4ASWBRZ3.js";
import {
  require_jsx_runtime
} from "./chunk-PMTCDWDV.js";
import {
  require_react
} from "./chunk-O6O4HUXW.js";
import {
  __toESM
} from "./chunk-LQ2VYIYD.js";

// node_modules/dom-helpers/esm/activeElement.js
function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument();
  }
  try {
    var active = doc.activeElement;
    if (!active || !active.nodeName)
      return null;
    return active;
  } catch (e) {
    return doc.body;
  }
}

// node_modules/@restart/ui/esm/Modal.js
var import_react5 = __toESM(require_react());
var React3 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@restart/ui/esm/getScrollbarWidth.js
function getBodyScrollbarWidth(ownerDocument2 = document) {
  const window = ownerDocument2.defaultView;
  return Math.abs(window.innerWidth - ownerDocument2.documentElement.clientWidth);
}

// node_modules/@restart/ui/esm/ModalManager.js
var OPEN_DATA_ATTRIBUTE = dataAttr("modal-open");
var ModalManager = class {
  constructor({
    ownerDocument: ownerDocument2,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.ownerDocument = ownerDocument2;
  }
  getScrollbarWidth() {
    return getBodyScrollbarWidth(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(_modal) {
  }
  removeModalAttributes(_modal) {
  }
  setContainerStyle(containerState) {
    const style = {
      overflow: "hidden"
    };
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const container = this.getElement();
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };
    if (containerState.scrollBarWidth) {
      style[paddingProp] = `${parseInt(css_default(container, paddingProp) || "0", 10) + containerState.scrollBarWidth}px`;
    }
    container.setAttribute(OPEN_DATA_ATTRIBUTE, "");
    css_default(container, style);
  }
  reset() {
    [...this.modals].forEach((m) => this.remove(m));
  }
  removeContainerStyle(containerState) {
    const container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  }
  add(modal) {
    let modalIdx = this.modals.indexOf(modal);
    if (modalIdx !== -1) {
      return modalIdx;
    }
    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);
    if (modalIdx !== 0) {
      return modalIdx;
    }
    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };
    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }
    return modalIdx;
  }
  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);
    if (modalIdx === -1) {
      return;
    }
    this.modals.splice(modalIdx, 1);
    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }
    this.removeModalAttributes(modal);
  }
  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }
};
var ModalManager_default = ModalManager;

// node_modules/@restart/ui/esm/useWaitForDOMRef.js
var import_react = __toESM(require_react());
var resolveContainerRef = (ref, document2) => {
  if (!canUseDOM_default)
    return null;
  if (ref == null)
    return (document2 || ownerDocument()).body;
  if (typeof ref === "function")
    ref = ref();
  if (ref && "current" in ref)
    ref = ref.current;
  if (ref && ("nodeType" in ref || ref.getBoundingClientRect))
    return ref;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  const window = useWindow();
  const [resolvedRef, setRef] = (0, import_react.useState)(() => resolveContainerRef(ref, window == null ? void 0 : window.document));
  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef)
      setRef(earlyRef);
  }
  (0, import_react.useEffect)(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0, import_react.useEffect)(() => {
    const nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

// node_modules/@restart/ui/esm/ImperativeTransition.js
var import_react4 = __toESM(require_react());

// node_modules/@restart/ui/esm/NoopTransition.js
var import_react2 = __toESM(require_react());
function NoopTransition({
  children,
  in: inProp,
  onExited,
  mountOnEnter,
  unmountOnExit
}) {
  const ref = (0, import_react2.useRef)(null);
  const hasEnteredRef = (0, import_react2.useRef)(inProp);
  const handleExited = useEventCallback(onExited);
  (0, import_react2.useEffect)(() => {
    if (inProp)
      hasEnteredRef.current = true;
    else {
      handleExited(ref.current);
    }
  }, [inProp, handleExited]);
  const combinedRef = useMergedRefs_default(ref, children.ref);
  const child = (0, import_react2.cloneElement)(children, {
    ref: combinedRef
  });
  if (inProp)
    return child;
  if (unmountOnExit) {
    return null;
  }
  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }
  return child;
}
var NoopTransition_default = NoopTransition;

// node_modules/@restart/ui/esm/RTGTransition.js
var React = __toESM(require_react());

// node_modules/@restart/ui/esm/useRTGTransitionProps.js
var import_react3 = __toESM(require_react());
var _excluded = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useRTGTransitionProps(_ref) {
  let {
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    addEndListener,
    children
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const nodeRef = (0, import_react3.useRef)(null);
  const mergedRef = useMergedRefs_default(nodeRef, typeof children === "function" ? null : children.ref);
  const normalize = (callback) => (param) => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  const handleEnter = (0, import_react3.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0, import_react3.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0, import_react3.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0, import_react3.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0, import_react3.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0, import_react3.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0, import_react3.useCallback)(normalize(addEndListener), [addEndListener]);
  return Object.assign({}, props, {
    nodeRef
  }, onEnter && {
    onEnter: handleEnter
  }, onEntering && {
    onEntering: handleEntering
  }, onEntered && {
    onEntered: handleEntered
  }, onExit && {
    onExit: handleExit
  }, onExiting && {
    onExiting: handleExiting
  }, onExited && {
    onExited: handleExited
  }, addEndListener && {
    addEndListener: handleAddEndListener
  }, {
    children: typeof children === "function" ? (status, innerProps) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      children(status, Object.assign({}, innerProps, {
        ref: mergedRef
      }))
    ) : (0, import_react3.cloneElement)(children, {
      ref: mergedRef
    })
  });
}

// node_modules/@restart/ui/esm/RTGTransition.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded2 = ["component"];
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var RTGTransition = React.forwardRef((_ref, ref) => {
  let {
    component: Component
  } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded2);
  const transitionProps = useRTGTransitionProps(props);
  return (0, import_jsx_runtime.jsx)(Component, Object.assign({
    ref
  }, transitionProps));
});
var RTGTransition_default = RTGTransition;

// node_modules/@restart/ui/esm/ImperativeTransition.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function useTransition({
  in: inProp,
  onTransition
}) {
  const ref = (0, import_react4.useRef)(null);
  const isInitialRef = (0, import_react4.useRef)(true);
  const handleTransition = useEventCallback(onTransition);
  useIsomorphicEffect_default(() => {
    if (!ref.current) {
      return void 0;
    }
    let stale = false;
    handleTransition({
      in: inProp,
      element: ref.current,
      initial: isInitialRef.current,
      isStale: () => stale
    });
    return () => {
      stale = true;
    };
  }, [inProp, handleTransition]);
  useIsomorphicEffect_default(() => {
    isInitialRef.current = false;
    return () => {
      isInitialRef.current = true;
    };
  }, []);
  return ref;
}
function ImperativeTransition({
  children,
  in: inProp,
  onExited,
  onEntered,
  transition
}) {
  const [exited, setExited] = (0, import_react4.useState)(!inProp);
  if (inProp && exited) {
    setExited(false);
  }
  const ref = useTransition({
    in: !!inProp,
    onTransition: (options) => {
      const onFinish = () => {
        if (options.isStale())
          return;
        if (options.in) {
          onEntered == null ? void 0 : onEntered(options.element, options.initial);
        } else {
          setExited(true);
          onExited == null ? void 0 : onExited(options.element);
        }
      };
      Promise.resolve(transition(options)).then(onFinish, (error) => {
        if (!options.in)
          setExited(true);
        throw error;
      });
    }
  });
  const combinedRef = useMergedRefs_default(ref, children.ref);
  return exited && !inProp ? null : (0, import_react4.cloneElement)(children, {
    ref: combinedRef
  });
}
function renderTransition(component, runTransition, props) {
  if (component) {
    return (0, import_jsx_runtime2.jsx)(RTGTransition_default, Object.assign({}, props, {
      component
    }));
  }
  if (runTransition) {
    return (0, import_jsx_runtime2.jsx)(ImperativeTransition, Object.assign({}, props, {
      transition: runTransition
    }));
  }
  return (0, import_jsx_runtime2.jsx)(NoopTransition_default, Object.assign({}, props));
}

// node_modules/@restart/ui/esm/utils.js
function isEscKey(e) {
  return e.code === "Escape" || e.keyCode === 27;
}

// node_modules/@restart/ui/esm/Modal.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded3 = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var manager;
function getManager(window) {
  if (!manager)
    manager = new ModalManager_default({
      ownerDocument: window == null ? void 0 : window.document
    });
  return manager;
}
function useModalManager(provided) {
  const window = useWindow();
  const modalManager = provided || getManager(window);
  const modal = (0, import_react5.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: (0, import_react5.useCallback)((ref) => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0, import_react5.useCallback)((ref) => {
      modal.current.backdrop = ref;
    }, [])
  });
}
var Modal = (0, import_react5.forwardRef)((_ref, ref) => {
  let {
    show = false,
    role = "dialog",
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    runTransition,
    backdropTransition,
    runBackdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = (props) => (0, import_jsx_runtime3.jsx)("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {
    },
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref, rest = _objectWithoutPropertiesLoose3(_ref, _excluded3);
  const ownerWindow = useWindow();
  const container = useWaitForDOMRef(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = useMounted();
  const prevShow = usePrevious(show);
  const [exited, setExited] = (0, import_react5.useState)(!show);
  const lastFocusRef = (0, import_react5.useRef)(null);
  (0, import_react5.useImperativeHandle)(ref, () => modal, [modal]);
  if (canUseDOM_default && !prevShow && show) {
    lastFocusRef.current = activeElement(ownerWindow == null ? void 0 : ownerWindow.document);
  }
  if (show && exited) {
    setExited(false);
  }
  const handleShow = useEventCallback(() => {
    modal.add();
    removeKeydownListenerRef.current = listen_default(document, "keydown", handleDocumentKeyDown);
    removeFocusListenerRef.current = listen_default(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(handleEnforceFocus),
      true
    );
    if (onShow) {
      onShow();
    }
    if (autoFocus) {
      var _modal$dialog$ownerDo, _modal$dialog;
      const currentActiveElement = activeElement((_modal$dialog$ownerDo = (_modal$dialog = modal.dialog) == null ? void 0 : _modal$dialog.ownerDocument) != null ? _modal$dialog$ownerDo : ownerWindow == null ? void 0 : ownerWindow.document);
      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = useEventCallback(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();
    if (restoreFocus) {
      var _lastFocusRef$current;
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  });
  (0, import_react5.useEffect)(() => {
    if (!show || !container)
      return;
    handleShow();
  }, [
    show,
    container,
    /* should never change: */
    handleShow
  ]);
  (0, import_react5.useEffect)(() => {
    if (!exited)
      return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(() => {
    handleHide();
  });
  const handleEnforceFocus = useEventCallback(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }
    const currentActiveElement = activeElement(ownerWindow == null ? void 0 : ownerWindow.document);
    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = useEventCallback((e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onBackdropClick == null ? void 0 : onBackdropClick(e);
    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = useEventCallback((e) => {
    if (keyboard && isEscKey(e) && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = (0, import_react5.useRef)();
  const removeKeydownListenerRef = (0, import_react5.useRef)();
  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };
  if (!container) {
    return null;
  }
  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": role === "dialog" ? true : void 0
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : (0, import_jsx_runtime3.jsx)("div", Object.assign({}, dialogProps, {
    children: React3.cloneElement(children, {
      role: "document"
    })
  }));
  dialog = renderTransition(transition, runTransition, {
    unmountOnExit: true,
    mountOnEnter: true,
    appear: true,
    in: !!show,
    onExit,
    onExiting,
    onExited: handleHidden,
    onEnter,
    onEntering,
    onEntered,
    children: dialog
  });
  let backdropElement = null;
  if (backdrop) {
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });
    backdropElement = renderTransition(backdropTransition, runBackdropTransition, {
      in: !!show,
      appear: true,
      mountOnEnter: true,
      unmountOnExit: true,
      children: backdropElement
    });
  }
  return (0, import_jsx_runtime3.jsx)(import_jsx_runtime4.Fragment, {
    children: import_react_dom.default.createPortal((0, import_jsx_runtime5.jsxs)(import_jsx_runtime4.Fragment, {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal.displayName = "Modal";
var Modal_default = Object.assign(Modal, {
  Manager: ModalManager_default
});

// node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/react-bootstrap/esm/BootstrapModalManager.js
var Selector = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
var BootstrapModalManager = class extends ModalManager_default {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop];
    element.dataset[prop] = actual;
    css_default(element, {
      [prop]: `${parseFloat(css_default(element, prop)) + adjust}px`
    });
  }
  restore(prop, element) {
    const value = element.dataset[prop];
    if (value !== void 0) {
      delete element.dataset[prop];
      css_default(element, {
        [prop]: value
      });
    }
  }
  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    addClass(container, "modal-open");
    if (!containerState.scrollBarWidth)
      return;
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }
  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    removeClass(container, "modal-open");
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.restore(paddingProp, el));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.restore(marginProp, el));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.restore(marginProp, el));
  }
};
var sharedManager;
function getSharedManager(options) {
  if (!sharedManager)
    sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}
var BootstrapModalManager_default = BootstrapModalManager;

// node_modules/react-bootstrap/esm/ModalContext.js
var React4 = __toESM(require_react());
var ModalContext = React4.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
});
var ModalContext_default = ModalContext;

// node_modules/react-bootstrap/esm/AbstractModalHeader.js
var React5 = __toESM(require_react());
var import_react6 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var AbstractModalHeader = React5.forwardRef(({
  closeLabel = "Close",
  closeVariant,
  closeButton = false,
  onHide,
  children,
  ...props
}, ref) => {
  const context = (0, import_react6.useContext)(ModalContext_default);
  const handleClick = useEventCallback(() => {
    context == null ? void 0 : context.onHide();
    onHide == null ? void 0 : onHide();
  });
  return (0, import_jsx_runtime7.jsxs)("div", {
    ref,
    ...props,
    children: [children, closeButton && (0, import_jsx_runtime6.jsx)(CloseButton_default, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
var AbstractModalHeader_default = AbstractModalHeader;

export {
  useWaitForDOMRef,
  NoopTransition_default,
  renderTransition,
  isEscKey,
  Modal_default,
  hasClass,
  getSharedManager,
  BootstrapModalManager_default,
  ModalContext_default,
  AbstractModalHeader_default
};
//# sourceMappingURL=chunk-QDPI2WMS.js.map

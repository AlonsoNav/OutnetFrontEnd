import {
  CloseButton_default,
  Fade_default
} from "./chunk-K3P47MDL.js";
import {
  useTimeout
} from "./chunk-FTU6SJVV.js";
import {
  ENTERING,
  EXITING
} from "./chunk-QE3IAAR6.js";
import {
  useEventCallback
} from "./chunk-ZPSZHCAB.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-PMTCDWDV.js";
import {
  require_react
} from "./chunk-O6O4HUXW.js";
import {
  __toESM
} from "./chunk-LQ2VYIYD.js";

// node_modules/react-bootstrap/esm/Toast.js
var React5 = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_classnames3 = __toESM(require_classnames());

// node_modules/react-bootstrap/esm/ToastFade.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var fadeStyles = {
  [ENTERING]: "showing",
  [EXITING]: "showing show"
};
var ToastFade = React.forwardRef((props, ref) => (0, import_jsx_runtime.jsx)(Fade_default, {
  ...props,
  ref,
  transitionClasses: fadeStyles
}));
ToastFade.displayName = "ToastFade";
var ToastFade_default = ToastFade;

// node_modules/react-bootstrap/esm/ToastHeader.js
var import_classnames = __toESM(require_classnames());
var React3 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/react-bootstrap/esm/ToastContext.js
var React2 = __toESM(require_react());
var ToastContext = React2.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose() {
  }
});
var ToastContext_default = ToastContext;

// node_modules/react-bootstrap/esm/ToastHeader.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var ToastHeader = React3.forwardRef(({
  bsPrefix,
  closeLabel = "Close",
  closeVariant,
  closeButton = true,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast-header");
  const context = (0, import_react.useContext)(ToastContext_default);
  const handleClick = useEventCallback((e) => {
    context == null ? void 0 : context.onClose == null ? void 0 : context.onClose(e);
  });
  return (0, import_jsx_runtime3.jsxs)("div", {
    ref,
    ...props,
    className: (0, import_classnames.default)(bsPrefix, className),
    children: [children, closeButton && (0, import_jsx_runtime2.jsx)(CloseButton_default, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick,
      "data-dismiss": "toast"
    })]
  });
});
ToastHeader.displayName = "ToastHeader";
var ToastHeader_default = ToastHeader;

// node_modules/react-bootstrap/esm/ToastBody.js
var React4 = __toESM(require_react());
var import_classnames2 = __toESM(require_classnames());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var ToastBody = React4.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast-body");
  return (0, import_jsx_runtime4.jsx)(Component, {
    ref,
    className: (0, import_classnames2.default)(className, bsPrefix),
    ...props
  });
});
ToastBody.displayName = "ToastBody";
var ToastBody_default = ToastBody;

// node_modules/react-bootstrap/esm/Toast.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var Toast = React5.forwardRef(({
  bsPrefix,
  className,
  transition: Transition = ToastFade_default,
  show = true,
  animation = true,
  delay = 5e3,
  autohide = false,
  onClose,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  bg,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "toast");
  const delayRef = (0, import_react2.useRef)(delay);
  const onCloseRef = (0, import_react2.useRef)(onClose);
  (0, import_react2.useEffect)(() => {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  const autohideTimeout = useTimeout();
  const autohideToast = !!(autohide && show);
  const autohideFunc = (0, import_react2.useCallback)(() => {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  (0, import_react2.useEffect)(() => {
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  const toastContext = (0, import_react2.useMemo)(() => ({
    onClose
  }), [onClose]);
  const hasAnimation = !!(Transition && animation);
  const toast = (0, import_jsx_runtime5.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames3.default)(bsPrefix, className, bg && `bg-${bg}`, !hasAnimation && (show ? "show" : "hide")),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  });
  return (0, import_jsx_runtime5.jsx)(ToastContext_default.Provider, {
    value: toastContext,
    children: hasAnimation && Transition ? (0, import_jsx_runtime5.jsx)(Transition, {
      in: show,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      unmountOnExit: true,
      children: toast
    }) : toast
  });
});
Toast.displayName = "Toast";
var Toast_default = Object.assign(Toast, {
  Body: ToastBody_default,
  Header: ToastHeader_default
});

export {
  ToastHeader_default,
  ToastBody_default,
  Toast_default
};
//# sourceMappingURL=chunk-3HB6HMLL.js.map

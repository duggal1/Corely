"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-presence@1.1.1_@types+react-dom@18.2.23_@types+react@18.2.74_react-dom@19.0.0_zmdjl4772ik2acufzowpdzignm";
exports.ids = ["vendor-chunks/@radix-ui+react-presence@1.1.1_@types+react-dom@18.2.23_@types+react@18.2.74_react-dom@19.0.0_zmdjl4772ik2acufzowpdzignm"];
exports.modules = {

/***/ "(ssr)/../../../../../../../node_modules/.pnpm/@radix-ui+react-presence@1.1.1_@types+react-dom@18.2.23_@types+react@18.2.74_react-dom@19.0.0_zmdjl4772ik2acufzowpdzignm/node_modules/@radix-ui/react-presence/dist/index.mjs":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../node_modules/.pnpm/@radix-ui+react-presence@1.1.1_@types+react-dom@18.2.23_@types+react@18.2.74_react-dom@19.0.0_zmdjl4772ik2acufzowpdzignm/node_modules/@radix-ui/react-presence/dist/index.mjs ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Presence: () => (/* binding */ Presence)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../../../../../../../node_modules/.pnpm/next@15.0.0-rc.0_@babel+core@7.24.4_@opentelemetry+api@1.9.0_react-dom@19.0.0-rc-d5bba18b-202_oliw3phgrggs3shcirdtxjs5wq/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/../../../../../../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.2.74_react@19.0.0-rc-d5bba18b-20241009/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/../../../../../../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.2.74_react@19.0.0-rc-d5bba18b-20241009/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ Presence auto */ // packages/react/presence/src/Presence.tsx\n\n\n\n// packages/react/presence/src/useStateMachine.tsx\n\nfunction useStateMachine(initialState, machine) {\n    return react__WEBPACK_IMPORTED_MODULE_0__.useReducer((state, event)=>{\n        const nextState = machine[state][event];\n        return nextState ?? state;\n    }, initialState);\n}\n// packages/react/presence/src/Presence.tsx\nvar Presence = (props)=>{\n    const { present, children } = props;\n    const presence = usePresence(present);\n    const child = typeof children === \"function\" ? children({\n        present: presence.isPresent\n    }) : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);\n    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__.useComposedRefs)(presence.ref, getElementRef(child));\n    const forceMount = typeof children === \"function\";\n    return forceMount || presence.isPresent ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {\n        ref\n    }) : null;\n};\nPresence.displayName = \"Presence\";\nfunction usePresence(present) {\n    const [node, setNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState();\n    const stylesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});\n    const prevPresentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(present);\n    const prevAnimationNameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(\"none\");\n    const initialState = present ? \"mounted\" : \"unmounted\";\n    const [state, send] = useStateMachine(initialState, {\n        mounted: {\n            UNMOUNT: \"unmounted\",\n            ANIMATION_OUT: \"unmountSuspended\"\n        },\n        unmountSuspended: {\n            MOUNT: \"mounted\",\n            ANIMATION_END: \"unmounted\"\n        },\n        unmounted: {\n            MOUNT: \"mounted\"\n        }\n    });\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        const currentAnimationName = getAnimationName(stylesRef.current);\n        prevAnimationNameRef.current = state === \"mounted\" ? currentAnimationName : \"none\";\n    }, [\n        state\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{\n        const styles = stylesRef.current;\n        const wasPresent = prevPresentRef.current;\n        const hasPresentChanged = wasPresent !== present;\n        if (hasPresentChanged) {\n            const prevAnimationName = prevAnimationNameRef.current;\n            const currentAnimationName = getAnimationName(styles);\n            if (present) {\n                send(\"MOUNT\");\n            } else if (currentAnimationName === \"none\" || styles?.display === \"none\") {\n                send(\"UNMOUNT\");\n            } else {\n                const isAnimating = prevAnimationName !== currentAnimationName;\n                if (wasPresent && isAnimating) {\n                    send(\"ANIMATION_OUT\");\n                } else {\n                    send(\"UNMOUNT\");\n                }\n            }\n            prevPresentRef.current = present;\n        }\n    }, [\n        present,\n        send\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{\n        if (node) {\n            let timeoutId;\n            const ownerWindow = node.ownerDocument.defaultView ?? window;\n            const handleAnimationEnd = (event)=>{\n                const currentAnimationName = getAnimationName(stylesRef.current);\n                const isCurrentAnimation = currentAnimationName.includes(event.animationName);\n                if (event.target === node && isCurrentAnimation) {\n                    send(\"ANIMATION_END\");\n                    if (!prevPresentRef.current) {\n                        const currentFillMode = node.style.animationFillMode;\n                        node.style.animationFillMode = \"forwards\";\n                        timeoutId = ownerWindow.setTimeout(()=>{\n                            if (node.style.animationFillMode === \"forwards\") {\n                                node.style.animationFillMode = currentFillMode;\n                            }\n                        });\n                    }\n                }\n            };\n            const handleAnimationStart = (event)=>{\n                if (event.target === node) {\n                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);\n                }\n            };\n            node.addEventListener(\"animationstart\", handleAnimationStart);\n            node.addEventListener(\"animationcancel\", handleAnimationEnd);\n            node.addEventListener(\"animationend\", handleAnimationEnd);\n            return ()=>{\n                ownerWindow.clearTimeout(timeoutId);\n                node.removeEventListener(\"animationstart\", handleAnimationStart);\n                node.removeEventListener(\"animationcancel\", handleAnimationEnd);\n                node.removeEventListener(\"animationend\", handleAnimationEnd);\n            };\n        } else {\n            send(\"ANIMATION_END\");\n        }\n    }, [\n        node,\n        send\n    ]);\n    return {\n        isPresent: [\n            \"mounted\",\n            \"unmountSuspended\"\n        ].includes(state),\n        ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node2)=>{\n            if (node2) stylesRef.current = getComputedStyle(node2);\n            setNode(node2);\n        }, [])\n    };\n}\nfunction getAnimationName(styles) {\n    return styles?.animationName || \"none\";\n}\nfunction getElementRef(element) {\n    let getter = Object.getOwnPropertyDescriptor(element.props, \"ref\")?.get;\n    let mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n    if (mayWarn) {\n        return element.ref;\n    }\n    getter = Object.getOwnPropertyDescriptor(element, \"ref\")?.get;\n    mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n    if (mayWarn) {\n        return element.props.ref;\n    }\n    return element.props.ref || element.ref;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1wcmVzZW5jZUAxLjEuMV9AdHlwZXMrcmVhY3QtZG9tQDE4LjIuMjNfQHR5cGVzK3JlYWN0QDE4LjIuNzRfcmVhY3QtZG9tQDE5LjAuMF96bWRqbDQ3NzJpazJhY3Vmem93cGR6aWdubS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByZXNlbmNlL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVCO0FBQ1M7QUFDQTs7QUNGVDtBQVdoQixTQUFTRyxnQkFDZEMsWUFBQSxFQUNBQyxPQUFBO0lBRUEsT0FBYUwsNkNBQUEsQ0FBVyxDQUFDTyxPQUF3QkM7UUFDL0MsTUFBTUMsWUFBYUosT0FBQSxDQUFRRSxNQUFLLENBQVVDLE1BQUs7UUFDL0MsT0FBT0MsYUFBYUY7SUFDdEIsR0FBR0g7QUFDTDs7QURUQSxJQUFNTSxXQUFvQyxDQUFDQztJQUN6QyxNQUFNLEVBQUVDLE9BQUEsRUFBU0MsUUFBQSxFQUFTLEdBQUlGO0lBQzlCLE1BQU1HLFdBQVdDLFlBQVlIO0lBRTdCLE1BQU1JLFFBQ0osT0FBT0gsYUFBYSxhQUNoQkEsU0FBUztRQUFFRCxTQUFTRSxTQUFTRyxTQUFBO0lBQVUsS0FDakNDLDJDQUFBLENBQVNFLElBQUEsQ0FBS1A7SUFHMUIsTUFBTVEsTUFBTXBCLDZFQUFlQSxDQUFDYSxTQUFTTyxHQUFBLEVBQUtDLGNBQWNOO0lBQ3hELE1BQU1PLGFBQWEsT0FBT1YsYUFBYTtJQUN2QyxPQUFPVSxjQUFjVCxTQUFTRyxTQUFBLGlCQUFrQkMsK0NBQUEsQ0FBYUYsT0FBTztRQUFFSztJQUFJLEtBQUs7QUFDakY7QUFFQVgsU0FBU2UsV0FBQSxHQUFjO0FBTXZCLFNBQVNWLFlBQVlILE9BQUE7SUFDbkIsTUFBTSxDQUFDYyxNQUFNQyxRQUFPLEdBQVVULDJDQUFBO0lBQzlCLE1BQU1XLFlBQWtCWCx5Q0FBQSxDQUE0QixD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RWYsT0FBTztRQUNMaEIsV0FBVztZQUFDO1lBQVc7U0FBa0IsQ0FBRXlDLFFBQUEsQ0FBU25EO1FBQ3BEYyxLQUFXSCw4Q0FBQSxDQUFZLENBQUNRO1lBQ3RCLElBQUlBLE9BQU1HLFVBQVVlLE9BQUEsR0FBVTBCLGlCQUFpQjVDO1lBQy9DQyxRQUFRRDtRQUNWLEdBQUcsRUFBRTtJQUNQO0FBQ0Y7QUFJQSxTQUFTaUIsaUJBQWlCRSxNQUFBO0lBQ3hCLE9BQU9BLFFBQVFjLGlCQUFpQjtBQUNsQztBQU9BLFNBQVNyQyxjQUFjaUQsT0FBQTtJQUVyQixJQUFJQyxTQUFTQyxPQUFPQyx3QkFBQSxDQUF5QkgsUUFBUTVELEtBQUEsRUFBTyxRQUFRZ0U7SUFDcEUsSUFBSUMsVUFBVUosVUFBVSxvQkFBb0JBLFVBQVVBLE9BQU9LLGNBQUE7SUFDN0QsSUFBSUQsU0FBUztRQUNYLE9BQVFMLFFBQWdCbEQsR0FBQTtJQUMxQjtJQUdBbUQsU0FBU0MsT0FBT0Msd0JBQUEsQ0FBeUJILFNBQVMsUUFBUUk7SUFDMURDLFVBQVVKLFVBQVUsb0JBQW9CQSxVQUFVQSxPQUFPSyxjQUFBO0lBQ3pELElBQUlELFNBQVM7UUFDWCxPQUFPTCxRQUFRNUQsS0FBQSxDQUFNVSxHQUFBO0lBQ3ZCO0lBR0EsT0FBT2tELFFBQVE1RCxLQUFBLENBQU1VLEdBQUEsSUFBUWtELFFBQWdCbEQsR0FBQTtBQUMvQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uLi9zcmMvUHJlc2VuY2UudHN4PzhiMzkiLCJ3ZWJwYWNrOi8vbXktYXBwLy4uL3NyYy91c2VTdGF0ZU1hY2hpbmUudHN4P2EzMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29tcG9zZWRSZWZzIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWNvbXBvc2UtcmVmcyc7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtdXNlLWxheW91dC1lZmZlY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi91c2VTdGF0ZU1hY2hpbmUnO1xuXG5pbnRlcmZhY2UgUHJlc2VuY2VQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCAoKHByb3BzOiB7IHByZXNlbnQ6IGJvb2xlYW4gfSkgPT4gUmVhY3QuUmVhY3RFbGVtZW50KTtcbiAgcHJlc2VudDogYm9vbGVhbjtcbn1cblxuY29uc3QgUHJlc2VuY2U6IFJlYWN0LkZDPFByZXNlbmNlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJlc2VudCwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCBwcmVzZW5jZSA9IHVzZVByZXNlbmNlKHByZXNlbnQpO1xuXG4gIGNvbnN0IGNoaWxkID0gKFxuICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBjaGlsZHJlbih7IHByZXNlbnQ6IHByZXNlbmNlLmlzUHJlc2VudCB9KVxuICAgICAgOiBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICApIGFzIFJlYWN0LlJlYWN0RWxlbWVudDtcblxuICBjb25zdCByZWYgPSB1c2VDb21wb3NlZFJlZnMocHJlc2VuY2UucmVmLCBnZXRFbGVtZW50UmVmKGNoaWxkKSk7XG4gIGNvbnN0IGZvcmNlTW91bnQgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbic7XG4gIHJldHVybiBmb3JjZU1vdW50IHx8IHByZXNlbmNlLmlzUHJlc2VudCA/IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyByZWYgfSkgOiBudWxsO1xufTtcblxuUHJlc2VuY2UuZGlzcGxheU5hbWUgPSAnUHJlc2VuY2UnO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiB1c2VQcmVzZW5jZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5mdW5jdGlvbiB1c2VQcmVzZW5jZShwcmVzZW50OiBib29sZWFuKSB7XG4gIGNvbnN0IFtub2RlLCBzZXROb2RlXSA9IFJlYWN0LnVzZVN0YXRlPEhUTUxFbGVtZW50PigpO1xuICBjb25zdCBzdHlsZXNSZWYgPSBSZWFjdC51c2VSZWY8Q1NTU3R5bGVEZWNsYXJhdGlvbj4oe30gYXMgYW55KTtcbiAgY29uc3QgcHJldlByZXNlbnRSZWYgPSBSZWFjdC51c2VSZWYocHJlc2VudCk7XG4gIGNvbnN0IHByZXZBbmltYXRpb25OYW1lUmVmID0gUmVhY3QudXNlUmVmPHN0cmluZz4oJ25vbmUnKTtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gcHJlc2VudCA/ICdtb3VudGVkJyA6ICd1bm1vdW50ZWQnO1xuICBjb25zdCBbc3RhdGUsIHNlbmRdID0gdXNlU3RhdGVNYWNoaW5lKGluaXRpYWxTdGF0ZSwge1xuICAgIG1vdW50ZWQ6IHtcbiAgICAgIFVOTU9VTlQ6ICd1bm1vdW50ZWQnLFxuICAgICAgQU5JTUFUSU9OX09VVDogJ3VubW91bnRTdXNwZW5kZWQnLFxuICAgIH0sXG4gICAgdW5tb3VudFN1c3BlbmRlZDoge1xuICAgICAgTU9VTlQ6ICdtb3VudGVkJyxcbiAgICAgIEFOSU1BVElPTl9FTkQ6ICd1bm1vdW50ZWQnLFxuICAgIH0sXG4gICAgdW5tb3VudGVkOiB7XG4gICAgICBNT1VOVDogJ21vdW50ZWQnLFxuICAgIH0sXG4gIH0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFuaW1hdGlvbk5hbWUgPSBnZXRBbmltYXRpb25OYW1lKHN0eWxlc1JlZi5jdXJyZW50KTtcbiAgICBwcmV2QW5pbWF0aW9uTmFtZVJlZi5jdXJyZW50ID0gc3RhdGUgPT09ICdtb3VudGVkJyA/IGN1cnJlbnRBbmltYXRpb25OYW1lIDogJ25vbmUnO1xuICB9LCBbc3RhdGVdKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlc1JlZi5jdXJyZW50O1xuICAgIGNvbnN0IHdhc1ByZXNlbnQgPSBwcmV2UHJlc2VudFJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGhhc1ByZXNlbnRDaGFuZ2VkID0gd2FzUHJlc2VudCAhPT0gcHJlc2VudDtcblxuICAgIGlmIChoYXNQcmVzZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgcHJldkFuaW1hdGlvbk5hbWUgPSBwcmV2QW5pbWF0aW9uTmFtZVJlZi5jdXJyZW50O1xuICAgICAgY29uc3QgY3VycmVudEFuaW1hdGlvbk5hbWUgPSBnZXRBbmltYXRpb25OYW1lKHN0eWxlcyk7XG5cbiAgICAgIGlmIChwcmVzZW50KSB7XG4gICAgICAgIHNlbmQoJ01PVU5UJyk7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRBbmltYXRpb25OYW1lID09PSAnbm9uZScgfHwgc3R5bGVzPy5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gZXhpdCBhbmltYXRpb24gb3IgdGhlIGVsZW1lbnQgaXMgaGlkZGVuLCBhbmltYXRpb25zIHdvbid0IHJ1blxuICAgICAgICAvLyBzbyB3ZSB1bm1vdW50IGluc3RhbnRseVxuICAgICAgICBzZW5kKCdVTk1PVU5UJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiBgcHJlc2VudGAgY2hhbmdlcyB0byBgZmFsc2VgLCB3ZSBjaGVjayBjaGFuZ2VzIHRvIGFuaW1hdGlvbi1uYW1lIHRvXG4gICAgICAgICAqIGRldGVybWluZSB3aGV0aGVyIGFuIGFuaW1hdGlvbiBoYXMgc3RhcnRlZC4gV2UgY2hvc2UgdGhpcyBhcHByb2FjaCAocmVhZGluZ1xuICAgICAgICAgKiBjb21wdXRlZCBzdHlsZXMpIGJlY2F1c2UgdGhlcmUgaXMgbm8gYGFuaW1hdGlvbnJ1bmAgZXZlbnQgYW5kIGBhbmltYXRpb25zdGFydGBcbiAgICAgICAgICogZmlyZXMgYWZ0ZXIgYGFuaW1hdGlvbi1kZWxheWAgaGFzIGV4cGlyZWQgd2hpY2ggd291bGQgYmUgdG9vIGxhdGUuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBpc0FuaW1hdGluZyA9IHByZXZBbmltYXRpb25OYW1lICE9PSBjdXJyZW50QW5pbWF0aW9uTmFtZTtcblxuICAgICAgICBpZiAod2FzUHJlc2VudCAmJiBpc0FuaW1hdGluZykge1xuICAgICAgICAgIHNlbmQoJ0FOSU1BVElPTl9PVVQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW5kKCdVTk1PVU5UJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJldlByZXNlbnRSZWYuY3VycmVudCA9IHByZXNlbnQ7XG4gICAgfVxuICB9LCBbcHJlc2VudCwgc2VuZF0pO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGxldCB0aW1lb3V0SWQ6IG51bWJlcjtcbiAgICAgIGNvbnN0IG93bmVyV2luZG93ID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3ID8/IHdpbmRvdztcbiAgICAgIC8qKlxuICAgICAgICogVHJpZ2dlcmluZyBhbiBBTklNQVRJT05fT1VUIGR1cmluZyBhbiBBTklNQVRJT05fSU4gd2lsbCBmaXJlIGFuIGBhbmltYXRpb25jYW5jZWxgXG4gICAgICAgKiBldmVudCBmb3IgQU5JTUFUSU9OX0lOIGFmdGVyIHdlIGhhdmUgZW50ZXJlZCBgdW5tb3VudFN1c3BlbmRlZGAgc3RhdGUuIFNvLCB3ZVxuICAgICAgICogbWFrZSBzdXJlIHdlIG9ubHkgdHJpZ2dlciBBTklNQVRJT05fRU5EIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBhbmltYXRpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGhhbmRsZUFuaW1hdGlvbkVuZCA9IChldmVudDogQW5pbWF0aW9uRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEFuaW1hdGlvbk5hbWUgPSBnZXRBbmltYXRpb25OYW1lKHN0eWxlc1JlZi5jdXJyZW50KTtcbiAgICAgICAgY29uc3QgaXNDdXJyZW50QW5pbWF0aW9uID0gY3VycmVudEFuaW1hdGlvbk5hbWUuaW5jbHVkZXMoZXZlbnQuYW5pbWF0aW9uTmFtZSk7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG5vZGUgJiYgaXNDdXJyZW50QW5pbWF0aW9uKSB7XG4gICAgICAgICAgLy8gV2l0aCBSZWFjdCAxOCBjb25jdXJyZW5jeSB0aGlzIHVwZGF0ZSBpcyBhcHBsaWVkIGEgZnJhbWUgYWZ0ZXIgdGhlXG4gICAgICAgICAgLy8gYW5pbWF0aW9uIGVuZHMsIGNyZWF0aW5nIGEgZmxhc2ggb2YgdmlzaWJsZSBjb250ZW50LiBCeSBzZXR0aW5nIHRoZVxuICAgICAgICAgIC8vIGFuaW1hdGlvbiBmaWxsIG1vZGUgdG8gXCJmb3J3YXJkc1wiLCB3ZSBmb3JjZSB0aGUgbm9kZSB0byBrZWVwIHRoZVxuICAgICAgICAgIC8vIHN0eWxlcyBvZiB0aGUgbGFzdCBrZXlmcmFtZSwgcmVtb3ZpbmcgdGhlIGZsYXNoLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gUHJldmlvdXNseSB3ZSBmbHVzaGVkIHRoZSB1cGRhdGUgdmlhIFJlYWN0RG9tLmZsdXNoU3luYywgYnV0IHdpdGhcbiAgICAgICAgICAvLyBleGl0IGFuaW1hdGlvbnMgdGhpcyByZXN1bHRlZCBpbiB0aGUgbm9kZSBiZWluZyByZW1vdmVkIGZyb20gdGhlXG4gICAgICAgICAgLy8gRE9NIGJlZm9yZSB0aGUgc3ludGhldGljIGFuaW1hdGlvbkVuZCBldmVudCB3YXMgZGlzcGF0Y2hlZCwgbWVhbmluZ1xuICAgICAgICAgIC8vIHVzZXItcHJvdmlkZWQgZXZlbnQgaGFuZGxlcnMgd291bGQgbm90IGJlIGNhbGxlZC5cbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmFkaXgtdWkvcHJpbWl0aXZlcy9wdWxsLzE4NDlcbiAgICAgICAgICBzZW5kKCdBTklNQVRJT05fRU5EJyk7XG4gICAgICAgICAgaWYgKCFwcmV2UHJlc2VudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RmlsbE1vZGUgPSBub2RlLnN0eWxlLmFuaW1hdGlvbkZpbGxNb2RlO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb25GaWxsTW9kZSA9ICdmb3J3YXJkcyc7XG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgc3R5bGUgYWZ0ZXIgdGhlIG5vZGUgaGFkIHRpbWUgdG8gdW5tb3VudCAoZm9yIGNhc2VzXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgY29tcG9uZW50IGNob29zZXMgbm90IHRvIHVubW91bnQpLiBEb2luZyB0aGlzIGFueVxuICAgICAgICAgICAgLy8gc29vbmVyIHRoYW4gYHNldFRpbWVvdXRgIChlLmcuIHdpdGggYHJlcXVlc3RBbmltYXRpb25GcmFtZWApXG4gICAgICAgICAgICAvLyBzdGlsbCBjYXVzZXMgYSBmbGFzaC5cbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IG93bmVyV2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAobm9kZS5zdHlsZS5hbmltYXRpb25GaWxsTW9kZSA9PT0gJ2ZvcndhcmRzJykge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uRmlsbE1vZGUgPSBjdXJyZW50RmlsbE1vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGhhbmRsZUFuaW1hdGlvblN0YXJ0ID0gKGV2ZW50OiBBbmltYXRpb25FdmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBub2RlKSB7XG4gICAgICAgICAgLy8gaWYgYW5pbWF0aW9uIG9jY3VycmVkLCBzdG9yZSBpdHMgbmFtZSBhcyB0aGUgcHJldmlvdXMgYW5pbWF0aW9uLlxuICAgICAgICAgIHByZXZBbmltYXRpb25OYW1lUmVmLmN1cnJlbnQgPSBnZXRBbmltYXRpb25OYW1lKHN0eWxlc1JlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uc3RhcnQnLCBoYW5kbGVBbmltYXRpb25TdGFydCk7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmNhbmNlbCcsIGhhbmRsZUFuaW1hdGlvbkVuZCk7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZUFuaW1hdGlvbkVuZCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBvd25lcldpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25zdGFydCcsIGhhbmRsZUFuaW1hdGlvblN0YXJ0KTtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25jYW5jZWwnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZUFuaW1hdGlvbkVuZCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSB1bm1vdW50ZWQgc3RhdGUgaWYgdGhlIG5vZGUgaXMgcmVtb3ZlZCBwcmVtYXR1cmVseS5cbiAgICAgIC8vIFdlIGF2b2lkIGRvaW5nIHNvIGR1cmluZyBjbGVhbnVwIGFzIHRoZSBub2RlIG1heSBjaGFuZ2UgYnV0IHN0aWxsIGV4aXN0LlxuICAgICAgc2VuZCgnQU5JTUFUSU9OX0VORCcpO1xuICAgIH1cbiAgfSwgW25vZGUsIHNlbmRdKTtcblxuICByZXR1cm4ge1xuICAgIGlzUHJlc2VudDogWydtb3VudGVkJywgJ3VubW91bnRTdXNwZW5kZWQnXS5pbmNsdWRlcyhzdGF0ZSksXG4gICAgcmVmOiBSZWFjdC51c2VDYWxsYmFjaygobm9kZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChub2RlKSBzdHlsZXNSZWYuY3VycmVudCA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICBzZXROb2RlKG5vZGUpO1xuICAgIH0sIFtdKSxcbiAgfTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25OYW1lKHN0eWxlcz86IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgcmV0dXJuIHN0eWxlcz8uYW5pbWF0aW9uTmFtZSB8fCAnbm9uZSc7XG59XG5cbi8vIEJlZm9yZSBSZWFjdCAxOSBhY2Nlc3NpbmcgYGVsZW1lbnQucHJvcHMucmVmYCB3aWxsIHRocm93IGEgd2FybmluZyBhbmQgc3VnZ2VzdCB1c2luZyBgZWxlbWVudC5yZWZgXG4vLyBBZnRlciBSZWFjdCAxOSBhY2Nlc3NpbmcgYGVsZW1lbnQucmVmYCBkb2VzIHRoZSBvcHBvc2l0ZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzI4MzQ4XG4vL1xuLy8gQWNjZXNzIHRoZSByZWYgdXNpbmcgdGhlIG1ldGhvZCB0aGF0IGRvZXNuJ3QgeWllbGQgYSB3YXJuaW5nLlxuZnVuY3Rpb24gZ2V0RWxlbWVudFJlZihlbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQpIHtcbiAgLy8gUmVhY3QgPD0xOCBpbiBERVZcbiAgbGV0IGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZWxlbWVudC5wcm9wcywgJ3JlZicpPy5nZXQ7XG4gIGxldCBtYXlXYXJuID0gZ2V0dGVyICYmICdpc1JlYWN0V2FybmluZycgaW4gZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZztcbiAgaWYgKG1heVdhcm4pIHtcbiAgICByZXR1cm4gKGVsZW1lbnQgYXMgYW55KS5yZWY7XG4gIH1cblxuICAvLyBSZWFjdCAxOSBpbiBERVZcbiAgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlbGVtZW50LCAncmVmJyk/LmdldDtcbiAgbWF5V2FybiA9IGdldHRlciAmJiAnaXNSZWFjdFdhcm5pbmcnIGluIGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmc7XG4gIGlmIChtYXlXYXJuKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucHJvcHMucmVmO1xuICB9XG5cbiAgLy8gTm90IERFVlxuICByZXR1cm4gZWxlbWVudC5wcm9wcy5yZWYgfHwgKGVsZW1lbnQgYXMgYW55KS5yZWY7XG59XG5cbmV4cG9ydCB7IFByZXNlbmNlIH07XG5leHBvcnQgdHlwZSB7IFByZXNlbmNlUHJvcHMgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBNYWNoaW5lPFM+ID0geyBbazogc3RyaW5nXTogeyBbazogc3RyaW5nXTogUyB9IH07XG50eXBlIE1hY2hpbmVTdGF0ZTxUPiA9IGtleW9mIFQ7XG50eXBlIE1hY2hpbmVFdmVudDxUPiA9IGtleW9mIFVuaW9uVG9JbnRlcnNlY3Rpb248VFtrZXlvZiBUXT47XG5cbi8vIPCfpK8gaHR0cHM6Ly9mZXR0YmxvZy5ldS90eXBlc2NyaXB0LXVuaW9uLXRvLWludGVyc2VjdGlvbi9cbnR5cGUgVW5pb25Ub0ludGVyc2VjdGlvbjxUPiA9IChUIGV4dGVuZHMgYW55ID8gKHg6IFQpID0+IGFueSA6IG5ldmVyKSBleHRlbmRzICh4OiBpbmZlciBSKSA9PiBhbnlcbiAgPyBSXG4gIDogbmV2ZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZU1hY2hpbmU8TT4oXG4gIGluaXRpYWxTdGF0ZTogTWFjaGluZVN0YXRlPE0+LFxuICBtYWNoaW5lOiBNICYgTWFjaGluZTxNYWNoaW5lU3RhdGU8TT4+XG4pIHtcbiAgcmV0dXJuIFJlYWN0LnVzZVJlZHVjZXIoKHN0YXRlOiBNYWNoaW5lU3RhdGU8TT4sIGV2ZW50OiBNYWNoaW5lRXZlbnQ8TT4pOiBNYWNoaW5lU3RhdGU8TT4gPT4ge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IChtYWNoaW5lW3N0YXRlXSBhcyBhbnkpW2V2ZW50XTtcbiAgICByZXR1cm4gbmV4dFN0YXRlID8/IHN0YXRlO1xuICB9LCBpbml0aWFsU3RhdGUpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29tcG9zZWRSZWZzIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlU3RhdGVNYWNoaW5lIiwiaW5pdGlhbFN0YXRlIiwibWFjaGluZSIsInVzZVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwibmV4dFN0YXRlIiwiUHJlc2VuY2UiLCJwcm9wcyIsInByZXNlbnQiLCJjaGlsZHJlbiIsInByZXNlbmNlIiwidXNlUHJlc2VuY2UiLCJjaGlsZCIsImlzUHJlc2VudCIsIlJlYWN0MiIsIkNoaWxkcmVuIiwib25seSIsInJlZiIsImdldEVsZW1lbnRSZWYiLCJmb3JjZU1vdW50IiwiY2xvbmVFbGVtZW50IiwiZGlzcGxheU5hbWUiLCJub2RlIiwic2V0Tm9kZSIsInVzZVN0YXRlIiwic3R5bGVzUmVmIiwidXNlUmVmIiwicHJldlByZXNlbnRSZWYiLCJwcmV2QW5pbWF0aW9uTmFtZVJlZiIsInNlbmQiLCJtb3VudGVkIiwiVU5NT1VOVCIsIkFOSU1BVElPTl9PVVQiLCJ1bm1vdW50U3VzcGVuZGVkIiwiTU9VTlQiLCJBTklNQVRJT05fRU5EIiwidW5tb3VudGVkIiwidXNlRWZmZWN0IiwiY3VycmVudEFuaW1hdGlvbk5hbWUiLCJnZXRBbmltYXRpb25OYW1lIiwiY3VycmVudCIsInN0eWxlcyIsIndhc1ByZXNlbnQiLCJoYXNQcmVzZW50Q2hhbmdlZCIsInByZXZBbmltYXRpb25OYW1lIiwiZGlzcGxheSIsImlzQW5pbWF0aW5nIiwidGltZW91dElkIiwib3duZXJXaW5kb3ciLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ3aW5kb3ciLCJoYW5kbGVBbmltYXRpb25FbmQiLCJpc0N1cnJlbnRBbmltYXRpb24iLCJpbmNsdWRlcyIsImFuaW1hdGlvbk5hbWUiLCJ0YXJnZXQiLCJjdXJyZW50RmlsbE1vZGUiLCJzdHlsZSIsImFuaW1hdGlvbkZpbGxNb2RlIiwic2V0VGltZW91dCIsImhhbmRsZUFuaW1hdGlvblN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VDYWxsYmFjayIsImdldENvbXB1dGVkU3R5bGUiLCJlbGVtZW50IiwiZ2V0dGVyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0IiwibWF5V2FybiIsImlzUmVhY3RXYXJuaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../../../../../../node_modules/.pnpm/@radix-ui+react-presence@1.1.1_@types+react-dom@18.2.23_@types+react@18.2.74_react-dom@19.0.0_zmdjl4772ik2acufzowpdzignm/node_modules/@radix-ui/react-presence/dist/index.mjs\n");

/***/ })

};
;
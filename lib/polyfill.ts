import { getGlobalThis } from "./shim";

const theGlobalThis = getGlobalThis();

// 给全局对象添加 globalThis 属性，这样全局就有了 globalThis
if (theGlobalThis && !("globalThis" in theGlobalThis)) {
  try {
    (theGlobalThis as any).globalThis = theGlobalThis;
    console?.log("[GLOBAL-THIS-POLYFILL] globalThis injected!");
  } catch (e) {
    console?.error("GLOBAL-THIS-POLYFILL]", (e as Error).message);
  }
}

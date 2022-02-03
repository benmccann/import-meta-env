import { createApp } from "vue";
import { Named, NamedSpec, default as Default } from "./Comps";
import { default as TsxDefault } from "./Comp";
import JsxScript from "./Script.vue";
import JsxSrcImport from "./SrcImport.vue";

function App() {
  console.assert(import.meta.env.VITE_MAIN === "Main");
  return (
    <>
      <Named />
      <NamedSpec />
      <Default />
      <TsxDefault />
      <JsxScript />
      <JsxSrcImport />
    </>
  );
}

createApp(App).mount("#app");

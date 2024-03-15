import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import init, { greet } from "@mywasm/foo";

function App() {
  useEffect(() => {
    // ✅  初始化，加载 wasm 文件
    init();
  }, [])
  return (
    <div>
      <button onClick={() => greet()}>click me</button>
    </div>
  );
}

export default App;

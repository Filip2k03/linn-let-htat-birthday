import React, { Suspense, useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary.jsx';
import World from './World.jsx';
function canUseWebGL() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2', {failIfMajorPerformanceCaveat:true}) || canvas.getContext('webgl', {failIfMajorPerformanceCaveat:true});
    const ok = Boolean(gl);
    return ok;
  } catch { return false; }
}
function Fallback({onRetry}) { return <div className="world-fallback" role="status"><div className="fallback-emoji">🎈 🎂 🐶</div><h3>Welcome to Linn's Birthday Garden!</h3><p>3D is resting right now. You can still read wishes, blow out the candles, open gifts and celebrate below.</p><button onClick={onRetry}>Try 3D again</button></div>; }
export default function WorldShell(props) {
  const [supported, setSupported] = useState(() => canUseWebGL());
  const [lost, setLost] = useState(false);
  const [revision, setRevision] = useState(0);
  const [visible, setVisible] = useState(() => !document.hidden);
  useEffect(() => { const onVisibility=()=>setVisible(!document.hidden); document.addEventListener('visibilitychange',onVisibility); return ()=>document.removeEventListener('visibilitychange',onVisibility); }, []);
  const retry=()=>{setSupported(canUseWebGL());setLost(false);setRevision(n=>n+1)};
  return <div className="world-canvas" aria-label="Interactive birthday garden">
    {(!supported || lost) ? <Fallback onRetry={retry}/> : <ErrorBoundary key={revision}><Suspense fallback={<div className="world-fallback" role="status"><div className="fallback-emoji">✨ 🎈 ✨</div><h3>Growing your magical garden…</h3><p>Loading 3D birthday surprises.</p></div>}><World {...props} visible={visible} onContextLost={()=>setLost(true)} onContextRestored={retry}/></Suspense></ErrorBoundary>}
  </div>;
}

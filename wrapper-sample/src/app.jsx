import { useEffect } from 'preact/hooks';
// import { FormPlayground } from '@bpmn-io/form-js';
import './app.css'

export function App() {
  useEffect(() => {
    const container = document.getElementById('anchor');
    console.log(container);
  }, []);
  return (
    <div id="anchor" />
  )
}

import { useEffect } from 'preact/hooks';
import { FormPlayground } from '@bpmn-io/form-js';

import '@bpmn-io/form-js/dist/assets/form-js.css';
import '@bpmn-io/form-js/dist/assets/form-js-editor.css';
import '@bpmn-io/form-js/dist/assets/form-js-playground.css';

const schema = {
  "type": "default",
  "components": []
};

export function App() {
  useEffect(() => {
    const container = document.getElementById('anchor');
    console.log(container);
    new FormPlayground({
      container,
      schema,
      data: {},
    });
  }, []);
  return (
    <div id="anchor" />
  )
}

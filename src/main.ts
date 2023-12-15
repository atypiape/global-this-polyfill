import './style.css';
import '../lib';
import { getGlobalThis } from '../lib';

const theGlobalThis = getGlobalThis();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Global This Polyfill</h1>
    <p class="text">
      globalThis is ${theGlobalThis ? 'defined' : 'undefined'} !
    </p>
    <p class="text">
      globalThis ${theGlobalThis === window ? '===' : '!=='} window
    </p>
    <p class="text">
      globalThis ${theGlobalThis === self ? '===' : '!=='} self
    </p>
    <p class="text">
      globalThis ${theGlobalThis === this ? '===' : '!=='} this
    </p>
  </div>
`

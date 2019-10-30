import { message } from './messages/message';
import { ipcRenderer, clipboard } from 'electron';

process.once('loaded', () => {
  window.addEventListener('message', event => {
    const msg:message = event.data;
    if (msg.action === 'CLIPBOARD_COPY') {
      console.log(event);
      clipboard.writeText(msg.data);
      ipcRenderer.send('custom-message', event);
    }
  });
});
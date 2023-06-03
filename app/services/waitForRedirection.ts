/**
 * React router loaders are super fast that whenever we have to perform
 * an external redirect, it'll take a few secs for it to kick in &
 * in the meantime the component would end up flashing on the screen.
 * So waiting for a ms helps avoid that flash of UI
 *
 * @param {string} waitPeriodInMilliSeconds - default is 5ms
 * @returns a promise that waits for given ms
 */
export function waitForRedirection(waitPeriodInMilliSeconds = 5000) {
  return new Promise(function wait(resolve) {
    setTimeout(resolve, waitPeriodInMilliSeconds);
  });
}

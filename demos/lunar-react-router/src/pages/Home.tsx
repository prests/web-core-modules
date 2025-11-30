import {
  Button,
  BUTTON_VARIANT__OUTLINE,
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from '@lunar-js/lunar';

import { mainContainer, sectionDivider, finalSection, customButton, formContainer, formInput } from './home.css';

const HomePage = () => {
  return (
    <main className={mainContainer}>
      <h1>Lunar Dialog SSR Testing</h1>

      <div className={sectionDivider}>
        <h2>Basic Dialog Test</h2>
        <p>Tests basic dialog functionality with SSR compatibility</p>
        <Dialog renderTrigger={() => <DialogTrigger>Open Basic Dialog</DialogTrigger>}>
          <DialogContent>
            <DialogHeader>
              <h3>SSR Dialog Test</h3>
            </DialogHeader>
            <div>
              <p>This dialog tests SSR compatibility and polyfill loading.</p>
              <p>The dialog-closedby-polyfill should load only on the client side.</p>
              <p>All interactions should work correctly after hydration.</p>
            </div>
            <DialogFooter>
              <DialogClose>Close Dialog</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className={sectionDivider}>
        <h2>Close Behavior Test</h2>
        <p>Tests different closedby attribute values</p>
        <Dialog
          closedby="closerequest"
          renderTrigger={() => <DialogTrigger>Open Dialog (Close Request Only)</DialogTrigger>}
        >
          <DialogContent>
            <DialogHeader>
              <h3>Close Request Only Dialog</h3>
            </DialogHeader>
            <div>
              <p>
                This dialog uses closedby=&quot;closerequest&quot; - it should only close via the close button or ESC
                key.
              </p>
              <p>Clicking the backdrop should NOT close this dialog.</p>
            </div>
            <DialogFooter>
              <DialogClose>Close Dialog</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className={finalSection}>
        <h2>Custom Trigger Test</h2>
        <p>Tests renderTrigger prop functionality with SSR</p>
        <Dialog
          renderTrigger={openDialog => (
            <button className={customButton} onClick={openDialog}>
              🚀 Custom Styled Trigger
            </button>
          )}
        >
          <DialogContent>
            <DialogHeader>
              <h3>Custom Trigger Dialog</h3>
            </DialogHeader>
            <div>
              <p>This dialog uses the renderTrigger prop to provide a custom trigger element.</p>
              <p>This tests that custom triggers work correctly with SSR and hydration.</p>
              <form className={formContainer}>
                <label htmlFor="testInput">Test form input:</label>
                <input id="testInput" type="text" placeholder="Test focus management" className={formInput} />
              </form>
            </div>
            <DialogFooter>
              <DialogClose variant={BUTTON_VARIANT__OUTLINE}>Cancel</DialogClose>
              <Button>Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default HomePage;

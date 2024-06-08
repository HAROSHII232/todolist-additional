import "./App.css";
import { SuperButton } from "./components/SuperButton";
import { SuperCrosses } from "./components/SuperCrosses";
import { Modal } from "./components/modal/Modal";
import s from "./components/superButton.module.css";

function App() {
  /*   const croses = [
    { id: 1, model: "ADIDAS", size: "XXX" },
    { id: 2, model: "ABIBAS", size: "YYY" },
    { id: 3, model: "PUMA", size: "ZZZ" },
  ]; */

  return (
    <div>
      <Modal>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="pass" />
        <button type="submit">send</button>
      </Modal>

      {/*  <SuperButton onClick={() => {}} className={s.redForSuperButton}>
        Red Button
      </SuperButton>
      <SuperButton onClick={() => {}} className={s.blueForSuperButton}>
        Blue Button
      </SuperButton> */}
      {/*       <SuperButton onClick={() => {}} color={"red"}>
        RED BUTTON
      </SuperButton>
      <SuperButton onClick={() => {}} color={"secondary"}>
        SECONDARY BUTTON
      </SuperButton>
      <SuperButton onClick={() => {}}>DEFAULT BUTTON</SuperButton>
      <SuperButton onClick={() => {}} disabled>
        DISABLED BUTTON
      </SuperButton>

      <SuperCrosses croses={croses}>
        <SuperButton onClick={() => {}} color={"red"}>
          RED BUTTON
        </SuperButton>
        <SuperButton onClick={() => {}} color={"secondary"}>
          SECONDARY BUTTON
        </SuperButton>
        <SuperButton onClick={() => {}}>DEFAULT BUTTON</SuperButton>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptas odio, at temporibus voluptatem dolorum. Dolores recusandae,
          quibusdam asperiores alias ad in vitae inventore nesciunt consequatur,
          voluptates ut omnis dolorem.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptas odio, at temporibus voluptatem dolorum. Dolores recusandae,
          quibusdam asperiores alias ad in vitae inventore nesciunt consequatur,
          voluptates ut omnis dolorem.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptas odio, at temporibus voluptatem dolorum. Dolores recusandae,
          quibusdam asperiores alias ad in vitae inventore nesciunt consequatur,
          voluptates ut omnis dolorem.
        </div>
      </SuperCrosses>
      <SuperCrosses croses={croses} />
      <SuperCrosses croses={croses} /> */}
    </div>
  );
}

export default App;
